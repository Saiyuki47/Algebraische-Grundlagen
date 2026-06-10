import type { QuizFrage } from '../types'

export const quizFragen: QuizFrage[] = [
  // ===== Blatt 0 – Trigonometrie =====
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

  // ===== Blatt 1 – Komplexe Zahlen =====
  {
    frage: 'Was ist $\\mathrm{Im}(\\mathrm{i})$?',
    optionen: ['$\\mathrm{i}$', '$0$', '$1$', '$-1$'],
    antwort: 2,
    erklaerung: '$\\mathrm{i} = 0 + 1 \\cdot \\mathrm{i}$, also ist $\\mathrm{Im}(\\mathrm{i}) = 1$ (eine reelle Zahl, nicht $\\mathrm{i}$!).',
  },
  {
    frage: 'Was ist $|\\sqrt{3} - \\mathrm{i}|$?',
    optionen: ['$\\sqrt{3} - 1$', '$\\sqrt{2}$', '$2$', '$4$'],
    antwort: 2,
    erklaerung: '$|\\sqrt{3} - \\mathrm{i}| = \\sqrt{(\\sqrt{3})^2 + (-1)^2} = \\sqrt{3 + 1} = \\sqrt{4} = 2$.',
  },
  {
    frage: 'Was ergibt $(3 - 2\\mathrm{i})(2 + 4\\mathrm{i})$?',
    optionen: ['$6 - 8\\mathrm{i}$', '$14 + 8\\mathrm{i}$', '$6 + 8\\mathrm{i}$', '$14 - 8\\mathrm{i}$'],
    antwort: 1,
    erklaerung: '$(3-2\\mathrm{i})(2+4\\mathrm{i}) = 6+12\\mathrm{i}-4\\mathrm{i}-8\\mathrm{i}^2 = 6+8\\mathrm{i}+8 = 14+8\\mathrm{i}$.',
  },
  {
    frage: 'Was ist $\\dfrac{1}{\\mathrm{i}}$ in der Form $x + y\\mathrm{i}$?',
    optionen: ['$\\mathrm{i}$', '$1$', '$-\\mathrm{i}$', '$-1$'],
    antwort: 2,
    erklaerung: '$\\dfrac{1}{\\mathrm{i}} \\cdot \\dfrac{-\\mathrm{i}}{-\\mathrm{i}} = \\dfrac{-\\mathrm{i}}{-\\mathrm{i}^2} = \\dfrac{-\\mathrm{i}}{1} = -\\mathrm{i}$.',
  },
  {
    frage: 'Welche Menge beschreibt $\\{z \\in \\mathbb{C} : \\mathrm{Re}(z) = \\mathrm{Im}(z)\\}$?',
    optionen: [
      'Einen Kreis um den Ursprung',
      'Die reelle Achse',
      'Die Winkelhalbierende $y = x$ in der Gaußschen Ebene',
      'Das Äußere des Einheitskreises',
    ],
    antwort: 2,
    erklaerung: '$\\mathrm{Re}(z) = \\mathrm{Im}(z)$ bedeutet $x = y$ – das ist die Winkelhalbierende in der Gaußschen Zahlenebene.',
  },

  // ===== Blatt 2 – Polardarstellung =====
  {
    frage: 'Was ist $e^{\\mathrm{i}\\pi/2}$ in kartesischer Form?',
    optionen: ['$1$', '$-1$', '$\\mathrm{i}$', '$-\\mathrm{i}$'],
    antwort: 2,
    erklaerung: '$e^{\\mathrm{i}\\pi/2} = \\cos(\\frac{\\pi}{2}) + \\mathrm{i}\\sin(\\frac{\\pi}{2}) = 0 + \\mathrm{i} = \\mathrm{i}$.',
  },
  {
    frage: 'Was ist $\\mathrm{i}^{13}$?',
    optionen: ['$1$', '$\\mathrm{i}$', '$-1$', '$-\\mathrm{i}$'],
    antwort: 1,
    erklaerung: '$13 = 4 \\cdot 3 + 1$, also $13 \\bmod 4 = 1$. Daher $\\mathrm{i}^{13} = \\mathrm{i}^1 = \\mathrm{i}$.',
  },
  {
    frage: 'Wie lautet die Polardarstellung von $-3\\mathrm{i}$?',
    optionen: [
      '$3\\,e^{\\mathrm{i}\\pi}$',
      '$3\\,e^{\\mathrm{i}\\frac{\\pi}{2}}$',
      '$3\\,e^{\\mathrm{i}\\frac{3\\pi}{2}}$',
      '$3\\,e^{\\mathrm{i}2\\pi}$',
    ],
    antwort: 2,
    erklaerung: '$|-3\\mathrm{i}| = 3$. Der Punkt $(0, -3)$ liegt auf der negativen imaginären Achse, also Winkel $\\frac{3\\pi}{2}$ (= 270°). Daher $-3\\mathrm{i} = 3\\,e^{\\mathrm{i}\\frac{3\\pi}{2}}$.',
  },
  {
    frage: 'Wie viele Lösungen hat $z^4 = 16$ in $\\mathbb{C}$?',
    optionen: ['$1$', '$2$', '$4$', '$8$'],
    antwort: 2,
    erklaerung: 'Im Komplexen hat $z^n = w$ genau $n$ Lösungen. Also hat $z^4 = 16$ genau $4$ Lösungen: $z_k = 2\\,e^{\\mathrm{i}\\pi k/2}$, $k=0,1,2,3$.',
  },
  {
    frage: 'Was passiert bei der Multiplikation mit $\\mathrm{i}$ in der Gaußschen Zahlenebene?',
    optionen: [
      'Streckung um den Faktor $\\sqrt{2}$',
      'Drehung um $\\frac{\\pi}{2}$ im Uhrzeigersinn',
      'Drehung um $\\frac{\\pi}{2}$ gegen den Uhrzeigersinn',
      'Spiegelung an der reellen Achse',
    ],
    antwort: 2,
    erklaerung: '$\\mathrm{i} = e^{\\mathrm{i}\\pi/2}$. Multiplikation mit $e^{\\mathrm{i}\\varphi}$ entspricht einer Drehung um $\\varphi$ gegen den Uhrzeigersinn – hier also um $\\frac{\\pi}{2}$.',
  },

  // ===== Blatt 3/4 – Relationen =====
  {
    frage: 'Was ist eine Äquivalenzrelation?',
    optionen: [
      'Reflexiv + symmetrisch',
      'Reflexiv + transitiv',
      'Symmetrisch + transitiv',
      'Reflexiv + symmetrisch + transitiv',
    ],
    antwort: 3,
    erklaerung: 'Eine Äquivalenzrelation muss alle drei Eigenschaften erfüllen: reflexiv, symmetrisch und transitiv.',
  },
  {
    frage: 'Welche der folgenden Relationen auf $\\mathbb{Z}$ ist eine Äquivalenzrelation?',
    optionen: [
      '$xRy$ falls $x + y$ ungerade',
      '$xRy$ falls $x + y$ gerade',
      '$xRy$ falls $x < y$',
      '$xRy$ falls $x \\cdot y > 0$',
    ],
    antwort: 1,
    erklaerung: '$x+y$ gerade $\\Leftrightarrow$ $x$ und $y$ haben dieselbe Parität. Das ist reflexiv ($x+x=2x$ gerade), symmetrisch, transitiv → Äquivalenzrelation.',
  },
  {
    frage: 'Was ist die Äquivalenzklasse $[2]$ in $\\mathbb{Z}$ bei der Relation $xRy \\Leftrightarrow x^2 = y^2$?',
    optionen: ['$\\{2\\}$', '$\\{2, -2\\}$', '$\\{2, 4, 8, \\ldots\\}$', '$\\{0, 2, 4, \\ldots\\}$'],
    antwort: 1,
    erklaerung: '$x^2 = y^2 \\Leftrightarrow y = x$ oder $y = -x$. Daher $[2] = \\{y : y^2 = 4\\} = \\{2, -2\\}$.',
  },
  {
    frage: 'Was bezeichnet die symmetrische Hülle einer Relation $R$?',
    optionen: [
      '$R \\cup I_M$',
      '$R \\cup R^{-1}$',
      '$R \\circ R$',
      '$R \\cap R^{-1}$',
    ],
    antwort: 1,
    erklaerung: 'Die symmetrische Hülle ist $R \\cup R^{-1}$ – man fügt alle „Rückpfeile" hinzu, die noch fehlen.',
  },
  {
    frage: 'Welche Charakterisierung beschreibt Transitivität in Mengensprache?',
    optionen: [
      '$I_M \\subseteq R$',
      '$R^{-1} = R$',
      '$R \\circ R \\subseteq R$',
      '$R \\cap R^{-1} = \\emptyset$',
    ],
    antwort: 2,
    erklaerung: '$R \\circ R \\subseteq R$ bedeutet: Wenn $(a,b) \\in R$ und $(b,c) \\in R$, dann $(a,c) \\in R$ – das ist genau Transitivität.',
  },

  // ===== Blatt 5/6 – Gruppen & Restklassen =====
  {
    frage: 'Ist $((0,\\infty), +)$ eine Gruppe?',
    optionen: [
      'Ja, alle Axiome sind erfüllt',
      'Nein, das Neutralelement $0$ fehlt in der Menge',
      'Nein, die Menge ist nicht abgeschlossen',
      'Nein, es fehlen Inverse',
    ],
    antwort: 1,
    erklaerung: 'Das Neutralelement der Addition ist $0$, aber $0 \\notin (0, \\infty)$ (offenes Intervall). Daher ist $((0,\\infty), +)$ keine Gruppe.',
  },
  {
    frage: 'Welches ist das Neutralelement der Verknüpfung $x \\odot y = \\frac{1}{4}xy$ auf $\\mathbb{Q}\\setminus\\{0\\}$?',
    optionen: ['$1$', '$\\frac{1}{4}$', '$4$', '$\\frac{1}{2}$'],
    antwort: 2,
    erklaerung: 'Das Neutralelement $e$ erfüllt $e \\odot x = x$: $\\frac{1}{4} \\cdot e \\cdot x = x \\Rightarrow e = 4$.',
  },
  {
    frage: 'Was ist $[21] + [17]$ in $\\mathbb{Z}_9$?',
    optionen: ['$[0]$', '$[2]$', '$[5]$', '$[38]$'],
    antwort: 1,
    erklaerung: '$21 + 17 = 38$. $38 = 4 \\cdot 9 + 2$, also $38 \\bmod 9 = 2$. Daher $[21]+[17] = [2]$.',
  },
  {
    frage: 'Was ist die Ordnung von $[4]$ in $\\mathbb{Z}_{12}$?',
    optionen: ['$2$', '$3$', '$4$', '$12$'],
    antwort: 1,
    erklaerung: '$\\mathrm{ord}([4]) = \\frac{12}{\\mathrm{ggT}(4,12)} = \\frac{12}{4} = 3$.',
  },
  {
    frage: 'Wie viele Elemente hat die symmetrische Gruppe $S_3$?',
    optionen: ['$3$', '$6$', '$9$', '$12$'],
    antwort: 1,
    erklaerung: '$S_3$ enthält alle bijektiven Abbildungen von $\\{1,2,3\\}$. Es gibt $3! = 6$ solche Abbildungen.',
  },
  {
    frage: 'Welche Aussage über $\\mathrm{GL}_2(\\mathbb{R})$ (invertierbare $2\\times2$-Matrizen) ist richtig?',
    optionen: [
      'Sie bilden keine Gruppe, da Matrizen nicht assoziativ sind',
      'Sie bilden eine abelsche Gruppe',
      'Sie bilden eine Gruppe, die im Allgemeinen nicht kommutativ ist',
      'Sie bilden keine Gruppe, da die Nullmatrix kein Inverses hat',
    ],
    antwort: 2,
    erklaerung: '$\\mathrm{GL}_2(\\mathbb{R})$ ist eine Gruppe (alle 4 Axiome erfüllt), aber nicht abelsch – Matrizenmultiplikation ist im Allgemeinen nicht kommutativ.',
  },
  {
    frage: 'Welche Nebenklassen hat $\\langle [4] \\rangle$ in $\\mathbb{Z}_{12}$?',
    optionen: [
      '$\\{0,4,8\\}$ und $\\{1,5,9,\\ldots\\}$',
      '$\\{0,4,8\\}$, $\\{1,5,9\\}$, $\\{2,6,10\\}$, $\\{3,7,11\\}$',
      '$\\{0,4,8,12\\}$ und $\\{1,2,3\\}$',
      '$\\{0,3,6,9\\}$ und $\\{1,2,4,5\\}$',
    ],
    antwort: 1,
    erklaerung: '$\\langle 4 \\rangle = \\{0,4,8\\}$ (Ordnung 3). Nach Lagrange gibt es $12/3 = 4$ Nebenklassen: $\\{0,4,8\\}$, $\\{1,5,9\\}$, $\\{2,6,10\\}$, $\\{3,7,11\\}$.',
  },
  {
    frage: 'Welche der folgenden Mengen bildet mit Multiplikation eine Gruppe?',
    optionen: [
      '$(-\\infty, 0)$',
      '$\\{z \\in \\mathbb{C} : |z| = 1\\}$',
      '$(0, \\infty)$ unter Addition',
      'Alle $2\\times2$-Matrizen',
    ],
    antwort: 1,
    erklaerung: '$T = \\{z \\in \\mathbb{C} : |z|=1\\}$: $|zw|=|z||w|=1$ (abgeschlossen), $1 \\in T$, $z^{-1}=\\bar{z}$ mit $|\\bar{z}|=1$. Alle Gruppenaxiome erfüllt.',
  },
]
