import type { Schwierigkeit, TippSection } from '../../types'

/**
 * Eine von Claude (KI) erdachte Übungsaufgabe – je eine pro Aufgabenart der
 * Original-Übungsblätter. Diese Aufgaben stammen NICHT vom Dozenten; sie sind
 * zum zusätzlichen Üben gedacht und wie ein normales Arbeitsblatt aufgebaut
 * (Frage, Tipps, ausführliche Musterlösung).
 *
 * Text-Felder (`aufgabeText`, `tippSections[].inhalt`, `loesung`) werden als
 * MathText-Block gerendert: `$…$` = KaTeX, `**fett**`, eine Zeile nur aus
 * `**…**` = Zwischenüberschrift, `•` für Aufzählungen, Markdown-Tabellen.
 */
export interface ClaudeAufgabe {
  /** Stabiler Slug, z. B. `c_g_einheitskreis`. */
  id: string
  /** Laufende Nummer – wird zentral im Index vergeben. */
  nr?: number
  /** Aufgabenart (Kategorie-Badge), wie sie in den Übungsblättern vorkommt. */
  art: string
  titel: string
  schwierigkeit?: Schwierigkeit
  /** Woran die Aufgabenart angelehnt ist, z. B. „Blatt 3, Aufgabe 4". */
  quelle?: string
  aufgabeText: string
  tippSections: TippSection[]
  loesung: string
  /** Deep-Links zu passenden Referenz-Themen (#referenz/<id>). */
  referenz?: string[]
}
