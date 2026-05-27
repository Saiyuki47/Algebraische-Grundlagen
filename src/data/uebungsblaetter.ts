import type { Uebungsblatt } from '../types'

export const uebungsblaetter: Uebungsblatt[] = [
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
