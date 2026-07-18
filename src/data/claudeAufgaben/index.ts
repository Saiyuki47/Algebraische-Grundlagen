import type { ClaudeAufgabe } from './_types'
import { grundlagen } from './grundlagen'
import { komplexeZahlen } from './komplexe-zahlen'
import { relationen } from './relationen'
import { gruppenRestklassen } from './gruppen-restklassen'
import { lgsDeterminanten } from './lgs-determinanten'
import { vektorraeume } from './vektorraeume'

export type { ClaudeAufgabe }

// Alle Claude-Aufgabenarten in Kursreihenfolge; die laufende Nummer wird hier
// zentral vergeben, damit die einzelnen Themendateien sie nicht pflegen müssen.
export const claudeAufgaben: ClaudeAufgabe[] = [
  ...grundlagen,
  ...komplexeZahlen,
  ...relationen,
  ...gruppenRestklassen,
  ...lgsDeterminanten,
  ...vektorraeume,
].map((a, i) => ({ ...a, nr: i + 1 }))
