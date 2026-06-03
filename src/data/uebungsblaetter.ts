import type { Uebungsblatt } from '../types'

export const uebungsblaetter: Uebungsblatt[] = [
  {
    id: 'blatt5',
    nr: '5',
    typ: 'Hausaufgabe',
    beschreibung: 'Gruppen, Restklassen. Besprechung: 28.05.–29.05.2026',
    aufgaben: [
      {
        nr: 1,
        text: 'Prufen Sie, ob die angegebenen Teilmengen von Z bzw. {1} mit der jeweiligen Verknupfung eine Gruppe bilden.',
        aufgabeId: 'b5_a1',
      },
      {
        nr: 2,
        text: 'Untersuchen Sie, ob die genannten Mengen mit Addition bzw. Multiplikation Gruppen sind.',
        aufgabeId: 'b5_a2',
      },
      {
        nr: 3,
        text: 'Bestimmen Sie das Neutralelement und das Inverse zur Verknupfung x ⊙ y := (1/4) · x · y auf Q \ {0}.',
        aufgabeId: 'b5_a3',
      },
      {
        nr: 4,
        text: 'Rechnen Sie in Z9 und Z12345 und entscheiden Sie, ob man in Z6 bei der Multiplikation kuerzen darf.',
        aufgabeId: 'b5_a4',
      },
      {
        nr: 5,
        text: 'Arbeiten Sie mit der symmetrischen Gruppe S3: Elemente auflisten, Neutralelement, Inverse und Nichtkommutativitaet.',
        aufgabeId: 'b5_a5',
      },
      {
        nr: 6,
        text: 'Ergänzen Sie die Verknüpfungstafel einer Dreiergruppe.',
        aufgabeId: 'b5_a6',
      },
    ],
  },
  {
    id: 'blatt0',
    nr: '0',
    typ: 'Präsenzaufgabe',
    beschreibung: 'Trigonometrische Funktionen und Teilmengen von $\\mathbb{R} \\times \\mathbb{R}$. Besprechung: 16.04.–17.04.2026',
    aufgaben: [
      {
        nr: 1,
        text: 'Graphen von $\\sin$ und $\\cos$, Einheitskreis, Winkelumrechnung (Grad ↔ Bogenmaß), Tangensfunktion, Definitionsbereiche und Wertemengen von $\\arcsin$, $\\arccos$, $\\arctan$.',
        aufgabeId: 'b0_a1',
      },
      {
        nr: 2,
        text: 'Bestimmen Sie folgende Funktionswerte: $\\sin(-64\\pi)$, $\\cos(-64\\pi)$, $\\tan(-64\\pi)$, $\\sin(65\\pi)$, $\\cos(65\\pi)$, $\\tan(65\\pi)$, $\\sin\\!\\left(\\frac{\\pi}{4}\\right)$, $\\cos\\!\\left(\\frac{\\pi}{4}\\right)$, $\\tan\\!\\left(\\frac{\\pi}{4}\\right)$, $\\arctan(1)$, $\\arcsin(1)$, $\\arccos(1)$.',
        aufgabeId: 'b0_a2',
      },
      {
        nr: 3,
        text: 'Bestimmen Sie folgende Urbilder: $\\sin^{-1}(\\{1\\})$, $\\sin^{-1}(\\{0\\})$, $\\sin^{-1}(\\{-1\\})$, $\\cos^{-1}(\\{1\\})$, $\\cos^{-1}(\\{0\\})$, $\\cos^{-1}(\\{-1\\})$, $\\tan^{-1}(\\{1\\})$, $\\tan^{-1}(\\{0\\})$, $\\tan^{-1}(\\{-1\\})$.',
        aufgabeId: 'b0_a3',
      },
      {
        nr: 4,
        text: 'Skizzieren Sie die Teilmengen $M_1$ bis $M_8$ von $\\mathbb{R} \\times \\mathbb{R}$ (Kreise, Kreisscheiben, Kreisring, Geraden, Halbebenen).',
        aufgabeId: 'b0_a4',
      },
      {
        nr: 5,
        text: 'Geben Sie die Koordinatenachsen, die Winkelhalbierenden, den Streifen $-2 \\leq y \\leq 2$ und das Äußere des Einheitskreises in Mengenschreibweise an.',
        aufgabeId: 'b0_a5',
      },
      {
        nr: 6,
        text: 'Machen Sie den Nenner rational: $\\dfrac{1}{\\sqrt{3}+\\sqrt{5}}$ und $\\dfrac{1}{\\sqrt{3}-\\sqrt{5}}$.',
        aufgabeId: 'b0_a6',
      },
    ],
  },
]
