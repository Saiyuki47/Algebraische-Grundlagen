import type { Aufgabe } from '../types'

export const aufgaben: Aufgabe[] = [
  {
    id: 'b0_a1',
    titel: 'Trigonometrische Funktionen – Graphen & Einheitskreis',
    aufgabeText:
      '(a) Skizzieren Sie die Graphen der Sinus- und der Cosinusfunktion.\n' +
      '(b) Zeichnen Sie $\\sin(\\varphi)$ und $\\cos(\\varphi)$ in den Einheitskreis ein.\n' +
      '(c) Rechnen Sie vom Gradmaß ins Bogenmaß um: $0°$, $360°$, $90°$, $60°$, $36°$, $29°$.\n' +
      '(d) Rechnen Sie vom Bogenmaß ins Gradmaß um: $\\pi$, $5\\pi$, $\\frac{2\\pi}{3}$, $\\frac{\\pi}{6}$, $\\frac{\\pi}{18}$, $\\frac{2\\pi}{17}$.\n' +
      '(e) Skizzieren Sie die Tangensfunktion.\n' +
      '(f) Geben Sie Definitionsbereiche und Wertemengen von $\\arcsin$, $\\arccos$ und $\\arctan$ an.',
    tipp: 'Merke: Gradmaß → Bogenmaß: mit $\\frac{\\pi}{180}$ multiplizieren. Bogenmaß → Gradmaß: mit $\\frac{180}{\\pi}$ multiplizieren.',
    loesung:
      '(a) $\\sin$ und $\\cos$: Periode $2\\pi$, Wertebereich $[-1, 1]$.\n' +
      '    Tabelle: $x = 0,\\ \\tfrac{\\pi}{2},\\ \\pi,\\ \\tfrac{3\\pi}{2},\\ 2\\pi$\n' +
      '    $\\sin$: $0, 1, 0, -1, 0$\n' +
      '    $\\cos$: $1, 0, -1, 0, 1$\n\n' +
      '(b) Im Einheitskreis: $\\cos(\\varphi)$ = $x$-Koordinate, $\\sin(\\varphi)$ = $y$-Koordinate.\n\n' +
      '(c) Gradmaß → Bogenmaß ($\\times\\frac{\\pi}{180}$):\n' +
      '    $0° = 0$,  $360° = 2\\pi$,  $90° = \\frac{\\pi}{2}$,  $60° = \\frac{\\pi}{3}$,  $36° = \\frac{\\pi}{5}$,  $29° = \\frac{29\\pi}{180}$\n\n' +
      '(d) Bogenmaß → Gradmaß ($\\times\\frac{180}{\\pi}$):\n' +
      '    $\\pi = 180°$,  $5\\pi = 900°$,  $\\frac{2\\pi}{3} = 120°$,  $\\frac{\\pi}{6} = 30°$,  $\\frac{\\pi}{18} = 10°$,  $\\frac{2\\pi}{17} = \\left(\\frac{360}{17}\\right)°$\n\n' +
      '(e) $\\tan(x) = \\frac{\\sin(x)}{\\cos(x)}$: Polstellen bei $x = \\frac{\\pi}{2} + k\\pi$, $k \\in \\mathbb{Z}$, Periode $\\pi$.\n\n' +
      '(f) $\\arcsin : [-1,\\,1] \\to \\left[-\\frac{\\pi}{2},\\, \\frac{\\pi}{2}\\right]$\n' +
      '    $\\arccos : [-1,\\,1] \\to [0,\\, \\pi]$\n' +
      '    $\\arctan : \\mathbb{R} \\to \\left(-\\frac{\\pi}{2},\\, \\frac{\\pi}{2}\\right)$',
    schwierigkeit: 'einfach',
    kategorie: 'Trigonometrie',
  },
  {
    id: 'b0_a2',
    titel: 'Trigonometrische Funktionswerte berechnen',
    aufgabeText:
      'Bestimmen Sie folgende Funktionswerte:\n' +
      '(a) $\\sin(-64\\pi)$   (b) $\\cos(-64\\pi)$   (c) $\\tan(-64\\pi)$\n' +
      '(d) $\\sin(65\\pi)$    (e) $\\cos(65\\pi)$    (f) $\\tan(65\\pi)$\n' +
      '(g) $\\sin\\!\\left(\\frac{\\pi}{4}\\right)$    (h) $\\cos\\!\\left(\\frac{\\pi}{4}\\right)$    (i) $\\tan\\!\\left(\\frac{\\pi}{4}\\right)$\n' +
      '(j) $\\arctan(1)$   (k) $\\arcsin(1)$   (l) $\\arccos(1)$',
    tipp: 'Nutze die Periodizität: $\\sin$ und $\\cos$ haben Periode $2\\pi$, $\\tan$ hat Periode $\\pi$. $-64$ ist gerade $\\Rightarrow$ $-64\\pi \\equiv 0 \\pmod{2\\pi}$. $65$ ist ungerade $\\Rightarrow$ $65\\pi \\equiv \\pi \\pmod{2\\pi}$.',
    loesung:
      '(a) $\\sin(-64\\pi) = \\sin(0) = 0$\n' +
      '(b) $\\cos(-64\\pi) = \\cos(0) = 1$\n' +
      '(c) $\\tan(-64\\pi) = \\tan(0) = 0$\n' +
      '(d) $\\sin(65\\pi) = \\sin(\\pi) = 0$\n' +
      '(e) $\\cos(65\\pi) = \\cos(\\pi) = -1$\n' +
      '(f) $\\tan(65\\pi) = \\tan(\\pi) = 0$\n' +
      '(g) $\\sin\\!\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$\n' +
      '(h) $\\cos\\!\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$\n' +
      '(i) $\\tan\\!\\left(\\frac{\\pi}{4}\\right) = 1$\n' +
      '(j) $\\arctan(1) = \\frac{\\pi}{4}$   (da $\\tan\\!\\left(\\frac{\\pi}{4}\\right) = 1$ und $\\frac{\\pi}{4} \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$)\n' +
      '(k) $\\arcsin(1) = \\frac{\\pi}{2}$   (da $\\sin\\!\\left(\\frac{\\pi}{2}\\right) = 1$ und $\\frac{\\pi}{2} \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$)\n' +
      '(l) $\\arccos(1) = 0$              (da $\\cos(0) = 1$ und $0 \\in [0, \\pi]$)',
    schwierigkeit: 'einfach',
    kategorie: 'Trigonometrie',
  },
  {
    id: 'b0_a3',
    titel: 'Urbilder trigonometrischer Funktionen',
    aufgabeText:
      'Bestimmen Sie folgende Urbilder (Mengen aller Lösungen):\n' +
      '(a) $\\sin^{-1}(\\{1\\})$   (b) $\\sin^{-1}(\\{0\\})$   (c) $\\sin^{-1}(\\{-1\\})$\n' +
      '(d) $\\cos^{-1}(\\{1\\})$   (e) $\\cos^{-1}(\\{0\\})$   (f) $\\cos^{-1}(\\{-1\\})$\n' +
      '(g) $\\tan^{-1}(\\{1\\})$   (h) $\\tan^{-1}(\\{0\\})$   (i) $\\tan^{-1}(\\{-1\\})$',
    tipp: '$f^{-1}(\\{y\\})$ ist die Menge aller $x$ mit $f(x) = y$ – nicht zu verwechseln mit der Umkehrfunktion $\\arcsin$/$\\arccos$/$\\arctan$, die nur einen Wert liefert.',
    loesung:
      '(a) $\\sin^{-1}(\\{1\\})  = \\left\\{\\, \\frac{\\pi}{2} + 2k\\pi : k \\in \\mathbb{Z} \\,\\right\\}$\n' +
      '(b) $\\sin^{-1}(\\{0\\})  = \\{\\, k\\pi : k \\in \\mathbb{Z} \\,\\}$\n' +
      '(c) $\\sin^{-1}(\\{-1\\}) = \\left\\{\\, \\frac{3\\pi}{2} + 2k\\pi : k \\in \\mathbb{Z} \\,\\right\\}$\n' +
      '(d) $\\cos^{-1}(\\{1\\})  = \\{\\, 2k\\pi : k \\in \\mathbb{Z} \\,\\}$\n' +
      '(e) $\\cos^{-1}(\\{0\\})  = \\left\\{\\, \\frac{\\pi}{2} + k\\pi : k \\in \\mathbb{Z} \\,\\right\\}$\n' +
      '(f) $\\cos^{-1}(\\{-1\\}) = \\{\\, (2k+1)\\pi : k \\in \\mathbb{Z} \\,\\}$\n' +
      '(g) $\\tan^{-1}(\\{1\\})  = \\left\\{\\, \\frac{\\pi}{4} + k\\pi : k \\in \\mathbb{Z} \\,\\right\\}$\n' +
      '(h) $\\tan^{-1}(\\{0\\})  = \\{\\, k\\pi : k \\in \\mathbb{Z} \\,\\}$\n' +
      '(i) $\\tan^{-1}(\\{-1\\}) = \\left\\{\\, -\\frac{\\pi}{4} + k\\pi : k \\in \\mathbb{Z} \\,\\right\\}$',
    schwierigkeit: 'mittel',
    kategorie: 'Trigonometrie',
  },
  {
    id: 'b0_a4',
    titel: 'Teilmengen von $\\mathbb{R} \\times \\mathbb{R}$ skizzieren',
    aufgabeText:
      'Skizzieren Sie folgende Teilmengen von $\\mathbb{R} \\times \\mathbb{R}$:\n' +
      '(a) $M_1 = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x^2 + y^2 = 1\\}$\n' +
      '(b) $M_2 = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x^2 + y^2 = 4\\}$\n' +
      '(c) $M_3 = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x^2 + y^2 < 4\\}$\n' +
      '(d) $M_4 = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x^2 + y^2 < 4 \\text{ und } x^2 + y^2 > 1\\}$\n' +
      '(e) $M_5 = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x = y\\}$\n' +
      '(f) $M_6 = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x \\geq y\\}$\n' +
      '(g) $M_7 = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x = -2y\\}$\n' +
      '(h) $M_8 = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x \\geq 2 \\text{ und } y < 3\\}$',
    tipp: '$x^2 + y^2 = r^2$ ist ein Kreis mit Radius $r$. Ungleichungen beschreiben das Innere ($<$) oder Äußere ($>$). Geraden entstehen durch lineare Gleichungen.',
    loesung:
      '(a) $M_1$: Einheitskreis (Kreis mit Radius $1$, Mittelpunkt Ursprung) – nur der Rand.\n' +
      '(b) $M_2$: Kreis mit Radius $2$, Mittelpunkt Ursprung – nur der Rand.\n' +
      '(c) $M_3$: Offene Kreisscheibe mit Radius $2$ (Inneres ohne Rand).\n' +
      '(d) $M_4$: Kreisring – offene Fläche zwischen Einheitskreis und Kreis mit Radius $2$ (beide Ränder ausgeschlossen).\n' +
      '(e) $M_5$: Gerade $y = x$ (Winkelhalbierende des 1. und 3. Quadranten).\n' +
      '(f) $M_6$: Halbebene unterhalb und auf der Geraden $y = x$, d.h. $x \\geq y$.\n' +
      '(g) $M_7$: Gerade $y = -\\frac{x}{2}$ durch den Ursprung (Steigung $-\\frac{1}{2}$).\n' +
      '(h) $M_8$: $x \\geq 2$ (rechts der Geraden $x = 2$ inkl.) und $y < 3$ (unterhalb $y = 3$, Rand ausgeschlossen).',
    schwierigkeit: 'mittel',
    kategorie: 'Mengen & $\\mathbb{R}\\times\\mathbb{R}$',
  },
  {
    id: 'b0_a5',
    titel: 'Mengen in $\\mathbb{R} \\times \\mathbb{R}$ beschreiben',
    aufgabeText:
      'Geben Sie folgende Teilmengen von $\\mathbb{R} \\times \\mathbb{R}$ in Mengenschreibweise an\n' +
      '(Form: $M = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : \\text{Eigenschaft}\\}$):\n\n' +
      '$A$ = Koordinatenachsen ($x$-Achse und $y$-Achse)\n' +
      '$B$ = beide Winkelhalbierende ($y = x$ und $y = -x$)\n' +
      '$C$ = waagerechter Streifen mit $-2 \\leq y \\leq 2$\n' +
      '$D$ = Äußeres des Einheitskreises (ohne Rand)',
    tipp: 'Für $A$: Punkte auf der $x$-Achse haben $y = 0$, Punkte auf der $y$-Achse haben $x = 0$. Verknüpfe mit „oder".',
    loesung:
      '$A = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x = 0 \\text{ oder } y = 0\\}$\n' +
      '$B = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x = y \\text{ oder } x = -y\\}$\n' +
      '$C = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : -2 \\leq y \\leq 2\\}$\n' +
      '$D = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x^2 + y^2 > 1\\}$',
    schwierigkeit: 'einfach',
    kategorie: 'Mengen & $\\mathbb{R}\\times\\mathbb{R}$',
  },
  {
    id: 'b0_a6',
    titel: 'Nenner rational machen',
    aufgabeText:
      'Machen Sie den Nenner rational (im Nenner soll keine irrationale Zahl stehen):\n' +
      '(a) $\\dfrac{1}{\\sqrt{3} + \\sqrt{5}}$\n' +
      '(b) $\\dfrac{1}{\\sqrt{3} - \\sqrt{5}}$',
    tipp: 'Verwende die 3. binomische Formel: $(a+b)(a-b) = a^2 - b^2$. Multipliziere Zähler und Nenner mit dem konjugierten Ausdruck.',
    loesung:
      '(a) $\\dfrac{1}{\\sqrt{3}+\\sqrt{5}} = \\dfrac{1}{\\sqrt{3}+\\sqrt{5}} \\cdot \\dfrac{\\sqrt{3}-\\sqrt{5}}{\\sqrt{3}-\\sqrt{5}} = \\dfrac{\\sqrt{3}-\\sqrt{5}}{3-5} = \\dfrac{\\sqrt{3}-\\sqrt{5}}{-2}$\n\n' +
      '(b) $\\dfrac{1}{\\sqrt{3}-\\sqrt{5}} = \\dfrac{1}{\\sqrt{3}-\\sqrt{5}} \\cdot \\dfrac{\\sqrt{3}+\\sqrt{5}}{\\sqrt{3}+\\sqrt{5}} = \\dfrac{\\sqrt{3}+\\sqrt{5}}{3-5} = \\dfrac{\\sqrt{3}+\\sqrt{5}}{-2}$',
    schwierigkeit: 'einfach',
    kategorie: 'Algebraische Umformungen',
  },
]

