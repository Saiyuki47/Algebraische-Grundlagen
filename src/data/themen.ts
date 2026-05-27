import type { Thema } from '../types'

export const themen: Thema[] = [
  {
    titel: 'Trigonometrische Funktionen',
    beschreibung: 'Sinus, Cosinus und Tangens sowie ihre Umkehrfunktionen.',
    punkte: [
      '$\\sin$ und $\\cos$: Periode $2\\pi$, Wertebereich $[-1, 1]$',
      '$\\tan = \\frac{\\sin}{\\cos}$: Periode $\\pi$, Polstellen bei $\\frac{\\pi}{2} + k\\pi$',
      'Einheitskreis: $\\cos(\\varphi)$ = $x$-Koordinate, $\\sin(\\varphi)$ = $y$-Koordinate',
      'Gradmaß → Bogenmaß: $\\times\\frac{\\pi}{180}$',
      'Bogenmaß → Gradmaß: $\\times\\frac{180}{\\pi}$',
      '$\\arcsin: [-1,1] \\to \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$',
      '$\\arccos: [-1,1] \\to [0, \\pi]$',
      '$\\arctan: \\mathbb{R} \\to \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$',
    ],
  },
  {
    titel: 'Urbilder von Funktionen',
    beschreibung: 'Das Urbild $f^{-1}(M)$ ist die Menge aller $x$, für die $f(x) \\in M$ gilt.',
    punkte: [
      '$f^{-1}(\\{y_0\\}) = \\{ x : f(x) = y_0 \\}$ – alle Lösungen der Gleichung',
      '$\\sin^{-1}(\\{1\\}) = \\left\\{ \\frac{\\pi}{2} + 2k\\pi : k \\in \\mathbb{Z} \\right\\}$',
      '$\\cos^{-1}(\\{0\\}) = \\left\\{ \\frac{\\pi}{2} + k\\pi : k \\in \\mathbb{Z} \\right\\}$',
      '$\\tan^{-1}(\\{1\\}) = \\left\\{ \\frac{\\pi}{4} + k\\pi : k \\in \\mathbb{Z} \\right\\}$',
      'Nicht zu verwechseln mit $\\arcsin$/$\\arccos$/$\\arctan$ (Umkehrfunktion)',
    ],
  },
  {
    titel: 'Teilmengen von $\\mathbb{R} \\times \\mathbb{R}$',
    beschreibung: 'Geometrische Beschreibung von Mengen in der Ebene.',
    punkte: [
      '$x^2 + y^2 = r^2$: Kreis mit Radius $r$ (nur Rand)',
      '$x^2 + y^2 < r^2$: Offene Kreisscheibe (Inneres ohne Rand)',
      '$x^2 + y^2 > r^2$: Äußeres des Kreises',
      'Lineare Gleichung (z.B. $x = y$): Gerade',
      'Lineare Ungleichung (z.B. $x \\geq y$): Halbebene',
      'Verknüpfung mit „und": Schnittmenge; „oder": Vereinigung',
    ],
  },
  {
    titel: 'Algebraische Umformungen',
    beschreibung: 'Wichtige Formeln und Techniken zum Umformen von Ausdrücken.',
    punkte: [
      '1. Binom: $(a+b)^2 = a^2 + 2ab + b^2$',
      '2. Binom: $(a-b)^2 = a^2 - 2ab + b^2$',
      '3. Binom: $(a+b)(a-b) = a^2 - b^2$',
      'Nenner rational: Zähler & Nenner mit konjugiertem Ausdruck multiplizieren',
      '$\\frac{1}{\\sqrt{a}+\\sqrt{b}} = \\frac{\\sqrt{a}-\\sqrt{b}}{a-b}$',
    ],
  },
]
