import type { FormelSektion } from '../types'

// Klausur-Hilfsmittel / Formelsammlung – zwei A4-Seiten, druckbar.
//
// WICHTIG: Hier kommt NUR rein, was der Nutzer ausdrücklich nennt.
// Nichts eigenmächtig ergänzen. Jede Sektion: { titel, inhalt } – `inhalt`
// wird als MathText-Block gerendert (KaTeX in $...$, **fett**, Tabellen, • Bullets).
//
// Zum Befüllen: passende Sektionen in `formelsammlungSeite1` bzw. `...Seite2`
// eintragen, damit der Inhalt auf genau zwei A4-Seiten passt.

export const formelsammlungSeite1: FormelSektion[] = []

export const formelsammlungSeite2: FormelSektion[] = []
