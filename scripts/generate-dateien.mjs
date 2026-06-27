// Auto-generates src/data/dateien.ts aus den Moodle-Materialien dieses Repos.
// Run via `node scripts/generate-dateien.mjs` (wired into predev/prebuild).
//
// Anders als bei Datenbanksysteme liegen die Materialien hier nicht unter EINEM
// Ordner, sondern in drei separaten public-Verzeichnissen (folien,
// uebungsblaetter, uebungsblaetter-lösung). Damit die Moodle-Komponente sie als
// drei Unter-Tabs zeigen kann, scannt der Generator alle drei Verzeichnisse und
// fasst sie unter EINEM synthetischen Root-`DateiFolder` mit drei `folders`
// zusammen. Die Dateien selbst werden NICHT verschoben.
//
// Warum ein Generator: die Manifeste von Hand zu pflegen wäre fehleranfällig und
// würde veralten, sobald Dateien hinzukommen. Dieser Walk liest die echten
// Ordner, bettet (kleine) Text-/Readme-/Link-Inhalte ein und merkt sich alles
// andere als Pfad, den der Browser aus /public öffnen kann.

import { readFileSync, readdirSync, statSync, writeFileSync, existsSync } from 'node:fs'
import { join, relative, extname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const projectRoot = join(__dirname, '..')
const publicRoot = join(projectRoot, 'public')
const outFile = join(projectRoot, 'src', 'data', 'dateien.ts')

// Die drei Top-Level-Gruppen dieses Repos (Ordnername in public + Anzeigename).
const TOP_LEVEL_GROUPS = [
  { dir: 'folien', label: 'Folien' },
  { dir: 'uebungsblaetter', label: 'Übungsblätter' },
  { dir: 'uebungsblaetter-lösung', label: 'Übungsblätter – Lösungen' },
]

// Inline text contents up to this size; larger text files are opened from
// /public instead of bloating the bundle.
const INLINE_TEXT_LIMIT = 60_000

// GitHub rejects files > 100 MB and GitHub Pages can't serve them, so leave any
// such file out of the manifest entirely. (Hier nur defensiv – die PDFs sind
// alle deutlich kleiner.)
const MAX_DEPLOY_BYTES = 100 * 1024 * 1024

const TEXT_EXT = new Set(['.txt', '.sql'])
const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.bmp'])
const VIDEO_EXT = new Set(['.mp4', '.m4v', '.webm', '.mov', '.ogg'])
const OFFICE_EXT = new Set(['.pptx', '.ppt', '.docx', '.doc', '.rtf', '.xlsx', '.xls', '.odt', '.odp'])
const ARCHIVE_EXT = new Set(['.zip', '.rar', '.7z', '.tar', '.gz'])

function typeFor(ext) {
  if (ext === '.pdf') return 'pdf'
  if (IMAGE_EXT.has(ext)) return 'image'
  if (VIDEO_EXT.has(ext)) return 'video'
  if (OFFICE_EXT.has(ext)) return 'office'
  if (ARCHIVE_EXT.has(ext)) return 'archive'
  if (TEXT_EXT.has(ext)) return 'text'
  return 'other'
}

function humanSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

// German, number-aware comparison so "blatt 2" < "blatt 10".
function natCmp(a, b) {
  return a.localeCompare(b, 'de', { numeric: true, sensitivity: 'base' })
}

const URL_RE = /https?:\/\/[^\s)]+/i

function buildFile(absPath) {
  const name = basename(absPath)
  const ext = extname(absPath).toLowerCase()
  const rel = relative(publicRoot, absPath).split('\\').join('/')
  const size = statSync(absPath).size
  const typ = typeFor(ext)

  const file = {
    name,
    path: rel,
    typ,
    ext: ext.replace('.', ''),
    sizeLabel: humanSize(size),
  }

  if (/^readme/i.test(name)) file.isReadme = true

  if (typ === 'text') {
    if (size <= INLINE_TEXT_LIMIT) {
      const content = readFileSync(absPath, 'utf8').replace(/\r\n/g, '\n').trim()
      // A .txt that is essentially just a URL becomes a clickable link entry.
      const looksLikeLink =
        ext === '.txt' && !file.isReadme && /^https?:\/\/\S+$/.test(content)
      if (looksLikeLink) {
        file.typ = 'link'
        file.url = content
      } else {
        file.text = content
        const m = content.match(URL_RE)
        if (m) file.url = m[0]
      }
    } else {
      // Too big to inline – open the raw file from /public instead.
      file.tooLarge = true
    }
  }

  return file
}

function buildFolder(absPath, displayName) {
  const entries = readdirSync(absPath, { withFileTypes: true })
  const folders = []
  const files = []

  for (const e of entries) {
    if (e.name.startsWith('.')) continue
    const child = join(absPath, e.name)
    if (e.isDirectory()) {
      folders.push(buildFolder(child, e.name))
    } else if (e.isFile()) {
      if (statSync(child).size > MAX_DEPLOY_BYTES) {
        console.log(`generate-dateien: skipping (> 100 MB) ${relative(publicRoot, child)}`)
        continue
      }
      files.push(buildFile(child))
    }
  }

  folders.sort((a, b) => natCmp(a.name, b.name))
  files.sort((a, b) => natCmp(a.name, b.name))

  return {
    name: displayName ?? basename(absPath),
    path: relative(publicRoot, absPath).split('\\').join('/'),
    folders,
    files,
  }
}

// Synthetischer Root, der die drei public-Ordner als Top-Level-Gruppen bündelt.
const groupFolders = []
for (const { dir, label } of TOP_LEVEL_GROUPS) {
  const abs = join(publicRoot, dir)
  if (!existsSync(abs)) {
    console.log(`generate-dateien: Gruppe fehlt, übersprungen: ${dir}`)
    continue
  }
  groupFolders.push(buildFolder(abs, label))
}

const tree = {
  name: 'Moodle',
  path: '',
  folders: groupFolders,
  files: [],
}

const header = `// AUTO-GENERATED by scripts/generate-dateien.mjs – do not edit by hand.
// Run \`node scripts/generate-dateien.mjs\` (or just \`npm run dev\`) to regenerate.

export type DateiTyp = 'pdf' | 'image' | 'video' | 'office' | 'archive' | 'text' | 'link' | 'other'

export interface DateiFile {
  name: string
  path: string
  typ: DateiTyp
  ext: string
  sizeLabel: string
  text?: string
  url?: string
  isReadme?: boolean
  tooLarge?: boolean
}

export interface DateiFolder {
  name: string
  path: string
  folders: DateiFolder[]
  files: DateiFile[]
}

export const dateienTree: DateiFolder = `

writeFileSync(outFile, header + JSON.stringify(tree, null, 2) + '\n', 'utf8')

const perGroup = tree.folders.map((g) => {
  let f = 0
  const walk = (node) => {
    f += node.files.length
    node.folders.forEach(walk)
  }
  walk(g)
  return `${g.name}: ${f}`
})
const total = tree.folders.reduce((sum, g) => {
  let f = 0
  const walk = (node) => {
    f += node.files.length
    node.folders.forEach(walk)
  }
  walk(g)
  return sum + f
}, 0)

console.log(
  `generate-dateien: wrote ${relative(projectRoot, outFile)} (${total} Dateien – ${perGroup.join(', ')})`,
)
