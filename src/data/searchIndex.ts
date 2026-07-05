import type { SearchItem } from 'lernseiten-ui'
import { uebungsblaetter } from './uebungsblaetter'
import { quizFragen } from './quiz'
import { referenzKarten } from './referenz'
import { begriffGruppen } from './begriffe'
import { themen } from './themen'
import { dateienTree, type DateiFolder } from './dateien'
import { formelsammlungSeite1, formelsammlungSeite2 } from './formelsammlung'

// Alle Dateien (rekursiv) aus dem generierten Moodle-Baum mit ihrer Top-Level-Gruppe.
function moodleDateien(): { name: string; gruppe: string }[] {
  const out: { name: string; gruppe: string }[] = []
  for (const gruppe of dateienTree.folders) {
    const walk = (node: DateiFolder) => {
      node.files.forEach(f => out.push({ name: f.name, gruppe: gruppe.name }))
      node.folders.forEach(walk)
    }
    walk(gruppe)
  }
  return out
}

// Such-Index aus den Inhalten der Seite. Jeder Treffer kennt seinen Ziel-Tab
// (gültige TabId), damit die globale Suche direkt dorthin springen kann.
export const searchIndex: SearchItem[] = [
  // Übungsblätter → Tab "uebung"
  ...uebungsblaetter.flatMap(b =>
    b.aufgaben.map(t => ({
      label: `Aufgabe ${t.nr}: ${t.text}`,
      snippet: `Übungsblatt ${b.nr}`,
      tab: 'uebung',
      keywords: b.typ,
    })),
  ),
  // Quizfragen → Tab "quiz"
  ...quizFragen.map(q => ({
    label: q.frage,
    snippet: 'Quizfrage',
    tab: 'quiz',
    keywords: q.quelle ?? '',
  })),
  // Formelsammlung / Hilfsmittel → Tab "hilfsmittel"
  ...[...formelsammlungSeite1, ...formelsammlungSeite2].map(s => ({
    label: s.titel,
    snippet: 'Formelsammlung',
    tab: 'hilfsmittel',
  })),
  // Moodle-Materialien (Folien, Übungsblätter, Lösungen) → Tab "moodle"
  ...moodleDateien().map(d => ({
    label: d.name,
    snippet: d.gruppe,
    tab: 'moodle',
  })),
  // Referenz / Cheatsheet → Tab "referenz"
  ...referenzKarten.map(k => ({
    label: k.titel,
    snippet: 'Referenz',
    tab: 'referenz',
  })),
  // Begriffs-Glossar → Tab "referenz" (Untertab „Begriffe lernen")
  ...begriffGruppen.flatMap(g =>
    g.begriffe.map(b => ({
      label: `Begriff: ${b.begriff.replace(/\$[^$]*\$/g, '').trim()}`,
      snippet: g.titel,
      tab: 'referenz',
      keywords: 'Begriff Definition auswendig lernen',
    })),
  ),
  // Themen-Übersicht (Themen-Tab entfernt) → Treffer öffnen den Referenz-Tab
  ...themen.map(t => ({
    label: t.titel,
    snippet: t.beschreibung ?? 'Thema',
    tab: 'referenz',
  })),
]
