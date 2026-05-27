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
    tipp:
      'Der Einheitskreis ist ein Kreis mit Radius 1, dessen Mittelpunkt im Ursprung liegt. Stell dir vor, du läufst gegen den Uhrzeigersinn auf diesem Kreis, beginnend rechts bei $(1, 0)$. Der Winkel $\\varphi$ misst, wie weit du gelaufen bist.\n\n' +
      'Sinus und Cosinus lesen deinen aktuellen Standpunkt ab:\n' +
      '$\\cos(\\varphi)$ = $x$-Koordinate deines Punktes (wie weit rechts/links)\n' +
      '$\\sin(\\varphi)$ = $y$-Koordinate deines Punktes (wie weit oben/unten)\n\n' +
      'Fünf Schlüsselpositionen (auswendig lernen!):\n' +
      '$\\varphi = 0$:              Punkt $(1,\\,0)$   → $\\sin=0$, $\\cos=1$\n' +
      '$\\varphi = \\frac{\\pi}{2}$:  Punkt $(0,\\,1)$   → $\\sin=1$, $\\cos=0$\n' +
      '$\\varphi = \\pi$:            Punkt $(-1,\\,0)$  → $\\sin=0$, $\\cos=-1$\n' +
      '$\\varphi = \\frac{3\\pi}{2}$: Punkt $(0,\\,-1)$  → $\\sin=-1$, $\\cos=0$\n' +
      '$\\varphi = 2\\pi$:           Punkt $(1,\\,0)$   → zurück am Start, wie $\\varphi=0$\n\n' +
      'Graphen zeichnen: Trage $\\varphi$ auf der waagerechten Achse auf (von $0$ bis $2\\pi$) und den sin- bzw. cos-Wert senkrecht. Verbinde die fünf Schlüsselpunkte zu einer glatten Welle.\n\n' +
      'Winkelumrechnung (Bogenmaß = mathematische Standardeinheit):\n' +
      'Grad → Bogenmaß: $x_{\\text{rad}} = x_{\\text{Grad}} \\cdot \\dfrac{\\pi}{180}$\n' +
      'Bogenmaß → Grad: $x_{\\text{Grad}} = x_{\\text{rad}} \\cdot \\dfrac{180}{\\pi}$\n' +
      'Beispiel: $90° \\cdot \\dfrac{\\pi}{180} = \\dfrac{90\\pi}{180} = \\dfrac{\\pi}{2}$\n\n' +
      'Tangens: $\\tan(\\varphi) = \\dfrac{\\sin(\\varphi)}{\\cos(\\varphi)}$. Wo $\\cos(\\varphi)=0$ (bei $\\tfrac{\\pi}{2}+k\\pi$), ist der Tangens nicht definiert – der Graph schießt dort auf $\\pm\\infty$ (senkrechte Asymptote).\n\n' +
      'Arkusfunktionen drehen den Prozess um – gegeben ein Wert, gesucht der Winkel:\n' +
      '$\\arcsin$: Definitionsbereich $[-1,1]$, Wertemenge $[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}]$ (= $-90°$ bis $90°$)\n' +
      '$\\arccos$: Definitionsbereich $[-1,1]$, Wertemenge $[0, \\pi]$ (= $0°$ bis $180°$)\n' +\n      '$\\arctan$: Definitionsbereich $\\mathbb{R}$, Wertemenge $(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2})$ (= $-90°$ bis $90°$, offen)',
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
    tipp:
      'Schlüsselkonzept – Periodizität: Eine Funktion ist periodisch, wenn sich ihr Graph nach einem festen Intervall exakt wiederholt.\n' +
      '$\\sin$ und $\\cos$ wiederholen sich alle $2\\pi$: $\\sin(x + 2\\pi) = \\sin(x)$\n' +
      '$\\tan$ wiederholt sich alle $\\pi$: $\\tan(x + \\pi) = \\tan(x)$\n\n' +
      'Trick für große Argumente der Form $n\\pi$ – prüfe, ob $n$ gerade oder ungerade ist:\n\n' +
      'Gerades $n$ (z. B. $-64$):\n' +
      '$-64\\pi$ ist ein ganzzahliges Vielfaches von $2\\pi$ → der Punkt hat genau $32$ Umrundungen gemacht → gleicher Standpunkt wie bei $\\varphi = 0$\n' +
      '→ $\\sin(-64\\pi) = \\sin(0) = 0$, $\\cos(-64\\pi) = \\cos(0) = 1$\n\n' +
      'Ungerades $n$ (z. B. $65$):\n' +
      '$65\\pi = 64\\pi + \\pi$ → $32$ volle Umrundungen plus ein extra $\\pi$ → gleicher Standpunkt wie bei $\\varphi = \\pi$\n' +
      '→ $\\sin(65\\pi) = \\sin(\\pi) = 0$, $\\cos(65\\pi) = \\cos(\\pi) = -1$\n\n' +
      'Werte bei $\\dfrac{\\pi}{4}$ (= 45°) – sehr häufig gefragt:\n' +
      '$\\sin\\!\\left(\\dfrac{\\pi}{4}\\right) = \\cos\\!\\left(\\dfrac{\\pi}{4}\\right) = \\dfrac{\\sqrt{2}}{2} \\approx 0{,}707$ (beide gleich, weil 45° symmetrisch zwischen den Achsen liegt)\n' +
      '$\\tan\\!\\left(\\dfrac{\\pi}{4}\\right) = 1$ (weil $\\sin = \\cos$, also Quotient $= 1$)\n\n' +
      'Arkusfunktionen rückwärts lesen:\n' +
      '$\\arctan(1)$: „Welcher Winkel in $(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2})$ hat Tangens $1$?" → $\\tfrac{\\pi}{4}$, da $\\tan(\\tfrac{\\pi}{4})=1$\n' +
      '$\\arcsin(1)$: „Welcher Winkel in $[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}]$ hat Sinus $1$?" → $\\tfrac{\\pi}{2}$, da $\\sin(\\tfrac{\\pi}{2})=1$\n' +
      '$\\arccos(1)$: „Welcher Winkel in $[0, \\pi]$ hat Cosinus $1$?" → $0$, da $\\cos(0)=1$',
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
    tipp:
      'Wichtiger Unterschied – Urbild vs. Umkehrfunktion:\n' +
      '$\\arcsin(1) = \\dfrac{\\pi}{2}$ → liefert genau EINEN Wert (den sog. Hauptwert im festgelegten Wertebereich)\n' +
      '$\\sin^{-1}(\\{1\\})$ → liefert ALLE $x$ mit $\\sin(x)=1$, also unendlich viele Werte\n\n' +
      'Warum unendlich viele? Weil $\\sin$ periodisch ist: ist $x_0$ eine Lösung, dann auch $x_0 + 2\\pi$, $x_0 + 4\\pi$, $x_0 - 2\\pi$, usw.\n\n' +
      'Schreibweise $\\{\\ldots + 2k\\pi : k \\in \\mathbb{Z}\\}$ bedeutet: alle Werte dieser Form, für jede ganze Zahl $k$ (also $k = 0, \\pm1, \\pm2, \\ldots$).\n\n' +
      'Vorgehen – Schritt für Schritt:\n' +
      '1. Finde einen Wert $x_0$ in $[0, 2\\pi)$, der die Gleichung erfüllt (Einheitskreis oder Tabelle).\n' +
      '2. Prüfe, ob es in $[0, 2\\pi)$ noch einen zweiten Wert gibt ($\\sin$ und $\\cos$ haben oft zwei Lösungen pro Periode).\n' +
      '3. Addiere $+2k\\pi$ für $\\sin$/$\\cos$ (Periode $2\\pi$) bzw. $+k\\pi$ für $\\tan$ (Periode $\\pi$).\n\n' +
      'Beispiel: $\\sin^{-1}(\\{0\\})$ – wo ist $\\sin = 0$?\n' +
      'Im Einheitskreis: $y$-Koordinate ist $0$ bei $\\varphi = 0$ und $\\varphi = \\pi$. Abstand je $\\pi$, also: $\\{k\\pi : k \\in \\mathbb{Z}\\}$\n\n' +
      'Beispiel: $\\cos^{-1}(\\{0\\})$ – wo ist $\\cos = 0$?\n' +
      'Im Einheitskreis: $x$-Koordinate ist $0$ bei $\\varphi = \\tfrac{\\pi}{2}$ und $\\varphi = \\tfrac{3\\pi}{2}$. Abstand je $\\pi$, also: $\\left\\{\\tfrac{\\pi}{2} + k\\pi : k \\in \\mathbb{Z}\\right\\}$\n\n' +
      'Eselsbrücke: Zeichne den Graphen von $\\sin$, $\\cos$ oder $\\tan$ und markiere alle Schnittpunkte mit der waagerechten Linie $y = $ (gesuchter Wert). Ihre $x$-Koordinaten sind die Lösungen.',
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
    tipp:
      'Was ist $\\mathbb{R}\\times\\mathbb{R}$? Das ist die gewöhnliche zweidimensionale Koordinatenebene – jeder Punkt $(x, y)$ besteht aus einem $x$-Wert (horizontal) und einem $y$-Wert (vertikal).\n\n' +
      'Mengenschreibweise lesen:\n' +
      '$M = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : \\text{Bedingung}\\}$ bedeutet: „Alle Punkte der Ebene, für die die Bedingung gilt."\n\n' +
      'Kreisgleichung $x^2+y^2 = r^2$:\n' +
      'Nach dem Satz des Pythagoras ist $\\sqrt{x^2+y^2}$ der Abstand eines Punktes $(x,y)$ vom Ursprung.\n' +
      '$x^2+y^2 = r^2$ → Abstand $= r$ → alle Punkte genau $r$ weit weg = Kreis mit Radius $r$\n' +
      'Beispiele: $x^2+y^2=1$ → Einheitskreis (Radius 1);  $x^2+y^2=4$ → Radius 2, denn $r^2=4 \\Rightarrow r=2$\n\n' +
      'Ungleichungen = Flächen:\n' +
      '$x^2+y^2 < r^2$ → Abstand $< r$ → Punkte INNERHALB des Kreises, ohne Rand = offene Kreisscheibe\n' +
      '$x^2+y^2 > r^2$ → Abstand $> r$ → Punkte AUSSERHALB, ohne Rand\n' +
      'Gestrichelter Rand bei $<$ oder $>$ (Rand gehört nicht dazu); durchgezogener Rand bei $\\leq$ oder $\\geq$.\n\n' +
      'Geraden (lineare Gleichungen):\n' +
      '$x = y$ → die Winkelhalbierende (alle Punkte, wo $x$- und $y$-Wert gleich sind)\n' +
      '$x = -2y$ → nach $y$ umstellen: $y = -\\dfrac{x}{2}$ = Gerade mit Steigung $-\\tfrac{1}{2}$ durch den Ursprung\n\n' +
      'Halbebenen (lineare Ungleichungen):\n' +
      '$x \\geq y$ → alle Punkte rechts von oder auf der Geraden $y=x$ (inklusive Rand)\n' +
      '$x \\geq 2$ → alle Punkte rechts von oder auf der senkrechten Linie $x=2$\n' +
      '$y < 3$ → alle Punkte unterhalb der waagerechten Linie $y=3$ (Rand ausgeschlossen)\n\n' +
      '„und" = Schnittmenge: Punkt muss BEIDE Bedingungen gleichzeitig erfüllen → überlappende Fläche.\n' +
      '„oder" = Vereinigung: Punkt muss mindestens EINE Bedingung erfüllen → zusammengesetzte Fläche.',
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
    tipp:
      'Aufgabe ist die Umkehrung von Aufgabe 4: geometrische Beschreibung → algebraische Formel.\n\n' +
      'Grundprinzip: Überlege, welche Bedingung an $x$ und/oder $y$ genau die beschriebenen Punkte herausgreift – und nur diese.\n\n' +
      '$A$ – Koordinatenachsen:\n' +
      'Jeder Punkt auf der $x$-Achse hat $y = 0$ (er liegt auf Höhe Null).\n' +
      'Jeder Punkt auf der $y$-Achse hat $x = 0$ (er liegt bei horizontaler Position Null).\n' +
      'Ein Punkt liegt auf mindestens einer der Achsen → Verknüpfung mit „oder": $x=0$ oder $y=0$.\n\n' +
      '$B$ – Winkelhalbierende:\n' +
      'Diagonale oben-rechts/unten-links: $y = x$, also Bedingung $x = y$ (oder $x - y = 0$).\n' +
      'Diagonale oben-links/unten-rechts: $y = -x$, also Bedingung $x = -y$ (oder $x + y = 0$).\n' +
      'Zusammen: Punkt liegt auf einer der beiden → „oder".\n\n' +
      '$C$ – Waagerechter Streifen:\n' +
      'Der Streifen zwischen $y = -2$ und $y = 2$ enthält alle Punkte, deren $y$-Wert in diesem Bereich liegt.\n' +
      '„Zwischen $-2$ und $2$, inklusive Rand" = $y \\geq -2$ UND $y \\leq 2$, kurz: $-2 \\leq y \\leq 2$.\n' +
      'Wichtig: $x$ ist beliebig – die Bedingung betrifft nur $y$, kein $x$ im Ausdruck.\n\n' +
      '$D$ – Äußeres des Einheitskreises ohne Rand:\n' +
      'Einheitskreis: $x^2+y^2=1$. Außerhalb = Abstand vom Ursprung echt größer als $1$ → $x^2+y^2 > 1$.\n' +
      'Das „$>$" (striktes Größer, ohne $=$) bedeutet: der Kreisrand selbst gehört nicht zur Menge.',
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
    tipp:
      'Was bedeutet „Nenner rational machen"?\n' +
      'Eine Zahl wie $\\sqrt{3}$ oder $\\sqrt{5}$ ist irrational – sie lässt sich nicht als gewöhnlicher Bruch schreiben und hat unendlich viele Dezimalstellen ohne Muster. Steht eine Wurzel im Nenner, ist der Bruch schwer weiterzurechnen. Ziel: Nenner so umformen, dass nur noch rationale Zahlen (ganze Zahlen, gewöhnliche Brüche) übrig bleiben.\n\n' +
      'Das Werkzeug – 3. binomische Formel:\n' +
      '$(a+b)(a-b) = a^2 - b^2$\n' +
      'Mit $a = \\sqrt{3}$, $b = \\sqrt{5}$: $(\\sqrt{3}+\\sqrt{5})(\\sqrt{3}-\\sqrt{5}) = (\\sqrt{3})^2 - (\\sqrt{5})^2 = 3 - 5 = -2$ ✓\n\n' +
      'Schritt-für-Schritt-Anleitung:\n' +
      '1. Identifiziere den Nenner, z. B. $(\\sqrt{3}+\\sqrt{5})$.\n' +
      '2. Bilde den konjugierten Ausdruck: drehe nur das Vorzeichen zwischen den Termen → $(\\sqrt{3}-\\sqrt{5})$.\n' +
      '3. Erweitere den Bruch: multipliziere Zähler UND Nenner mit diesem konjugierten Ausdruck.\n' +
      '   (Das ist erlaubt, weil $\\dfrac{\\sqrt{3}-\\sqrt{5}}{\\sqrt{3}-\\sqrt{5}} = 1$ – Multiplizieren mit $1$ ändert den Wert nicht!)\n' +
      '4. Vereinfache den neuen Nenner mit der 3. binomischen Formel: Wurzeln verschwinden.\n' +
      '5. Notiere das Ergebnis.\n\n' +
      'Für (a): Nenner $(\\sqrt{3}+\\sqrt{5})$, konjugiert $(\\sqrt{3}-\\sqrt{5})$\n' +
      '→ neuer Nenner: $(\\sqrt{3})^2-(\\sqrt{5})^2 = 3-5 = -2$\n\n' +
      'Für (b): Nenner $(\\sqrt{3}-\\sqrt{5})$, konjugiert $(\\sqrt{3}+\\sqrt{5})$\n' +
      '→ neuer Nenner: ebenfalls $3-5 = -2$ (beide Aufgaben haben denselben Nenner, nur der Zähler unterscheidet sich)',
    loesung:
      '(a) $\\dfrac{1}{\\sqrt{3}+\\sqrt{5}} = \\dfrac{1}{\\sqrt{3}+\\sqrt{5}} \\cdot \\dfrac{\\sqrt{3}-\\sqrt{5}}{\\sqrt{3}-\\sqrt{5}} = \\dfrac{\\sqrt{3}-\\sqrt{5}}{3-5} = \\dfrac{\\sqrt{3}-\\sqrt{5}}{-2}$\n\n' +
      '(b) $\\dfrac{1}{\\sqrt{3}-\\sqrt{5}} = \\dfrac{1}{\\sqrt{3}-\\sqrt{5}} \\cdot \\dfrac{\\sqrt{3}+\\sqrt{5}}{\\sqrt{3}+\\sqrt{5}} = \\dfrac{\\sqrt{3}+\\sqrt{5}}{3-5} = \\dfrac{\\sqrt{3}+\\sqrt{5}}{-2}$',
    schwierigkeit: 'einfach',
    kategorie: 'Algebraische Umformungen',
  },
]

