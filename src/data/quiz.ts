import type { QuizFrage } from '../types'

export const quizFragen: QuizFrage[] = [
  {
    frage: 'Was ist der Wert von $\\sin\\!\\left(\\frac{\\pi}{2}\\right)$?',
    optionen: ['$0$', '$1$', '$-1$', '$\\frac{\\sqrt{2}}{2}$'],
    antwort: 1,
    erklaerung: '$\\sin\\!\\left(\\frac{\\pi}{2}\\right) = 1$, da $\\frac{\\pi}{2}$ dem Winkel $90°$ entspricht und der Punkt auf dem Einheitskreis die Koordinaten $(0, 1)$ hat.',
  },
  {
    frage: 'Welche Periode hat die Tangensfunktion?',
    optionen: ['$2\\pi$', '$\\pi$', '$\\frac{\\pi}{2}$', '$4\\pi$'],
    antwort: 1,
    erklaerung: '$\\tan(x)$ hat die Periode $\\pi$, d.h. $\\tan(x + \\pi) = \\tan(x)$ für alle $x$ im Definitionsbereich.',
  },
  {
    frage: 'Was ist der Wertebereich von $\\arcsin$?',
    optionen: ['$[0, \\pi]$', '$\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$', '$\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$', '$\\mathbb{R}$'],
    antwort: 2,
    erklaerung: '$\\arcsin : [-1, 1] \\to \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ – abgeschlossenes Intervall, da $\\arcsin(1) = \\frac{\\pi}{2}$ und $\\arcsin(-1) = -\\frac{\\pi}{2}$ angenommen werden.',
  },
  {
    frage: 'Was beschreibt die Menge $\\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x^2 + y^2 < 4\\}$?',
    optionen: [
      'Kreis mit Radius $4$',
      'Kreis mit Radius $2$ (nur Rand)',
      'Offene Kreisscheibe mit Radius $2$',
      'Äußeres des Kreises mit Radius $2$',
    ],
    antwort: 2,
    erklaerung: '$x^2 + y^2 < 4 = 2^2$ beschreibt alle Punkte innerhalb (aber nicht auf) des Kreises mit Radius $2$ – also eine offene Kreisscheibe.',
  },
  {
    frage: 'Wie rechnet man $60°$ ins Bogenmaß um?',
    optionen: ['$60 \\cdot \\pi$', '$\\frac{60}{\\pi}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{6}$'],
    antwort: 2,
    erklaerung: '$60° \\cdot \\frac{\\pi}{180} = \\frac{60\\pi}{180} = \\frac{\\pi}{3}$.',
  },
  {
    frage: 'Was ist $\\cos(65\\pi)$?',
    optionen: ['$1$', '$0$', '$-1$', '$\\frac{\\sqrt{2}}{2}$'],
    antwort: 2,
    erklaerung: '$65$ ist ungerade, daher $65\\pi \\equiv \\pi \\pmod{2\\pi}$. Also $\\cos(65\\pi) = \\cos(\\pi) = -1$.',
  },
  {
    frage: 'Was ergibt $\\dfrac{1}{\\sqrt{3}+\\sqrt{5}}$ nach Rationalisierung des Nenners?',
    optionen: [
      '$\\dfrac{\\sqrt{3}+\\sqrt{5}}{-2}$',
      '$\\dfrac{\\sqrt{3}-\\sqrt{5}}{-2}$',
      '$\\dfrac{\\sqrt{3}-\\sqrt{5}}{2}$',
      '$\\dfrac{\\sqrt{5}-\\sqrt{3}}{8}$',
    ],
    antwort: 1,
    erklaerung: 'Mit der 3. binomischen Formel: $\\frac{1}{\\sqrt{3}+\\sqrt{5}} \\cdot \\frac{\\sqrt{3}-\\sqrt{5}}{\\sqrt{3}-\\sqrt{5}} = \\frac{\\sqrt{3}-\\sqrt{5}}{3-5} = \\frac{\\sqrt{3}-\\sqrt{5}}{-2}$.',
  },
  {
    frage: 'Welche Menge ist $\\tan^{-1}(\\{1\\})$?',
    optionen: [
      '$\\left\\{\\frac{\\pi}{4}\\right\\}$',
      '$\\left\\{\\frac{\\pi}{4} + 2k\\pi : k \\in \\mathbb{Z}\\right\\}$',
      '$\\left\\{\\frac{\\pi}{4} + k\\pi : k \\in \\mathbb{Z}\\right\\}$',
      '$\\left\\{\\frac{\\pi}{4} + \\frac{k\\pi}{2} : k \\in \\mathbb{Z}\\right\\}$',
    ],
    antwort: 2,
    erklaerung: '$\\tan$ hat Periode $\\pi$, daher $\\tan\\!\\left(\\frac{\\pi}{4} + k\\pi\\right) = 1$ für alle $k \\in \\mathbb{Z}$.',
  },
  {
    frage: 'Was beschreibt $\\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x = 0 \\text{ oder } y = 0\\}$?',
    optionen: [
      'Die Winkelhalbierende $y = x$',
      'Die Koordinatenachsen ($x$- und $y$-Achse)',
      'Den Ursprung',
      'Die gesamte Ebene',
    ],
    antwort: 1,
    erklaerung: '$x = 0$ beschreibt die $y$-Achse, $y = 0$ die $x$-Achse. Mit „oder" vereinigt ergibt sich das Kreuz der Koordinatenachsen.',
  },
  {
    frage: 'Welcher Definitionsbereich gehört zu $\\arctan$?',
    optionen: ['$[-1, 1]$', '$[0, \\infty)$', '$\\mathbb{R}$', '$(0, \\pi)$'],
    antwort: 2,
    erklaerung: '$\\arctan$ ist auf ganz $\\mathbb{R}$ definiert, da $\\tan$ jeden reellen Wert annimmt (für $x \\neq \\frac{\\pi}{2} + k\\pi$).',
  },
]

