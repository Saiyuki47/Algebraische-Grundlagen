export type Schwierigkeit = 'einfach' | 'mittel' | 'schwer'

export interface TippSection {
  icon: string
  titel: string
  inhalt: string
}

export interface TeilaufgabeTipp {
  label: string
  tippSections: TippSection[]
}

export interface ReferenzBeispielGruppe {
  szenario: string
  beispiele: string[]
}

export interface ReferenzKarte {
  /** Stabiler Slug für Inhaltsverzeichnis + Deep-Link (#referenz/<id>). */
  id?: string
  titel: string
  inhalt: string
  /** Pro Szenario aufklappbare Beispiele (3 je Szenario). */
  beispiele?: ReferenzBeispielGruppe[]
}

// Abschnitt der Klausur-Formelsammlung (Hilfsmittel-Tab).
// Inhalte werden nur auf ausdrückliche Anweisung des Nutzers ergänzt.
export interface FormelSektion {
  titel: string
  inhalt: string
}

export interface LoesungSection {
  text?: string
  graphId?: string
}

export interface Aufgabe {
  id: string
  titel: string
  aufgabeText: string
  aufgabeSections?: LoesungSection[]
  tipp?: string
  tippSections?: TippSection[]
  teilaufgabeTipps?: TeilaufgabeTipp[]
  loesung: string
  loesungSections?: LoesungSection[]
  schwierigkeit: Schwierigkeit
  kategorie?: string
}

export interface UebungsblattAufgabe {
  nr: number | string
  text: string
  aufgabeId: string
}

export interface Uebungsblatt {
  id: string
  nr: string
  typ: 'Hausaufgabe' | 'Präsenzaufgabe'
  beschreibung?: string
  /** Optionaler Hinweis (z. B. Hilfstabellen), als MathText-Block gerendert */
  hinweis?: string
  aufgaben: UebungsblattAufgabe[]
}

export interface Thema {
  titel: string
  beschreibung?: string
  punkte?: string[]
}
