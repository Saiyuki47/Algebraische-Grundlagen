import type { ReferenzKarte } from '../types'

export const referenzKarten: ReferenzKarte[] = [
  // ===== Trigonometrie =====
  {
    titel: 'Sinus & Cosinus – Werte',
    inhalt:
      '$\\sin(0) = 0$,  $\\sin\\!\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$,  $\\sin\\!\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$,  $\\sin\\!\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$,  $\\sin\\!\\left(\\frac{\\pi}{2}\\right) = 1$\n' +
      '$\\cos(0) = 1$,  $\\cos\\!\\left(\\frac{\\pi}{6}\\right) = \\frac{\\sqrt{3}}{2}$,  $\\cos\\!\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$,  $\\cos\\!\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$,  $\\cos\\!\\left(\\frac{\\pi}{2}\\right) = 0$\n' +
      '$\\tan(0) = 0$,  $\\tan\\!\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{\\sqrt{3}}$,  $\\tan\\!\\left(\\frac{\\pi}{4}\\right) = 1$,  $\\tan\\!\\left(\\frac{\\pi}{3}\\right) = \\sqrt{3}$,  $\\tan\\!\\left(\\frac{\\pi}{2}\\right)$ nicht def.',
  },
  {
    titel: 'Arkusfunktionen',
    inhalt:
      '$\\arcsin : [-1,\\,1] \\to \\left[-\\tfrac{\\pi}{2},\\, \\tfrac{\\pi}{2}\\right]$\n' +
      '$\\arccos : [-1,\\,1] \\to [0,\\, \\pi]$\n' +
      '$\\arctan : \\mathbb{R} \\to \\left(-\\tfrac{\\pi}{2},\\, \\tfrac{\\pi}{2}\\right)$\n\n' +
      '$\\arcsin(0) = 0$,  $\\arcsin(1) = \\frac{\\pi}{2}$,  $\\arcsin(-1) = -\\frac{\\pi}{2}$\n' +
      '$\\arccos(1) = 0$,  $\\arccos(0) = \\frac{\\pi}{2}$,  $\\arccos(-1) = \\pi$\n' +
      '$\\arctan(0) = 0$,  $\\arctan(1) = \\frac{\\pi}{4}$,  $\\arctan(-1) = -\\frac{\\pi}{4}$',
  },
  {
    titel: 'Winkelumrechnung',
    inhalt:
      'Grad → Bogenmaß:  $\\varphi_{\\text{rad}} = \\varphi_{\\text{grad}} \\cdot \\dfrac{\\pi}{180}$\n' +
      'Bogenmaß → Grad:  $\\varphi_{\\text{grad}} = \\varphi_{\\text{rad}} \\cdot \\dfrac{180}{\\pi}$\n\n' +
      '$0° = 0$,  $30° = \\frac{\\pi}{6}$,  $45° = \\frac{\\pi}{4}$\n' +
      '$60° = \\frac{\\pi}{3}$,  $90° = \\frac{\\pi}{2}$,  $180° = \\pi$,  $360° = 2\\pi$',
  },
  {
    titel: 'Urbilder',
    inhalt:
      '$\\sin^{-1}(\\{1\\}) = \\left\\{\\tfrac{\\pi}{2} + 2k\\pi\\right\\}$,  $\\sin^{-1}(\\{0\\}) = \\{k\\pi\\}$,  $\\sin^{-1}(\\{-1\\}) = \\left\\{\\tfrac{3\\pi}{2} + 2k\\pi\\right\\}$\n' +
      '$\\cos^{-1}(\\{1\\}) = \\{2k\\pi\\}$,  $\\cos^{-1}(\\{0\\}) = \\left\\{\\tfrac{\\pi}{2} + k\\pi\\right\\}$,  $\\cos^{-1}(\\{-1\\}) = \\{(2k{+}1)\\pi\\}$\n' +
      '$\\tan^{-1}(\\{1\\}) = \\left\\{\\tfrac{\\pi}{4} + k\\pi\\right\\}$,  $\\tan^{-1}(\\{0\\}) = \\{k\\pi\\}$,  $\\tan^{-1}(\\{-1\\}) = \\left\\{-\\tfrac{\\pi}{4} + k\\pi\\right\\}$\n' +
      'jeweils $k \\in \\mathbb{Z}$',
  },
  {
    titel: 'Kreise & Mengen in $\\mathbb{R} \\times \\mathbb{R}$',
    inhalt:
      '$x^2+y^2 = r^2$  →  Kreis, Radius $r$ (Rand)\n' +
      '$x^2+y^2 < r^2$  →  Offene Kreisscheibe (Inneres)\n' +
      '$x^2+y^2 \\leq r^2$  →  Abgeschlossene Kreisscheibe\n' +
      '$x^2+y^2 > r^2$  →  Äußeres des Kreises\n\n' +
      '$x = y$  →  Winkelhalbierende (1. & 3. Quadrant)\n' +
      '$x = -y$  →  Winkelhalbierende (2. & 4. Quadrant)',
  },
  {
    titel: 'Binomische Formeln',
    inhalt:
      '$(a+b)^2 = a^2 + 2ab + b^2$\n' +
      '$(a-b)^2 = a^2 - 2ab + b^2$\n' +
      '$(a+b)(a-b) = a^2 - b^2$\n\n' +
      'Nenner rational (3. Binom.):\n' +
      '$\\dfrac{1}{\\sqrt{a}+\\sqrt{b}} = \\dfrac{\\sqrt{a}-\\sqrt{b}}{a-b}$\n' +
      '$\\dfrac{1}{\\sqrt{a}-\\sqrt{b}} = \\dfrac{\\sqrt{a}+\\sqrt{b}}{a-b}$',
  },

  // ===== Komplexe Zahlen =====
  {
    titel: 'Komplexe Zahlen – Grundoperationen',
    inhalt:
      'Für $z = x + y\\mathrm{i}$ und $w = u + v\\mathrm{i}$:\n' +
      '  $z + w = (x+u) + (y+v)\\mathrm{i}$\n' +
      '  $z \\cdot w = (xu - yv) + (xv + yu)\\mathrm{i}$  (nutze $\\mathrm{i}^2 = -1$)\n' +
      '  $\\dfrac{z}{w} = \\dfrac{z \\cdot \\overline{w}}{|w|^2}$  (Nenner rationalisieren)\n\n' +
      'Konjugat: $\\overline{z} = x - y\\mathrm{i}$  (Spiegelung an reeller Achse)\n' +
      'Betrag: $|z| = \\sqrt{x^2+y^2}$,  $|z|^2 = z \\cdot \\overline{z}$\n' +
      'Regeln: $|zw| = |z|\\cdot|w|$,  $|z^n| = |z|^n$,  $\\overline{zw} = \\overline{z}\\cdot\\overline{w}$',
  },
  {
    titel: 'Mengen in der Gaußschen Zahlenebene',
    inhalt:
      'Für $z_0 \\in \\mathbb{C}$, $r > 0$:\n' +
      '  $|z - z_0| = r$       →  Kreis, Mittelpunkt $z_0$, Radius $r$\n' +
      '  $|z - z_0| < r$       →  Offene Kreisscheibe\n' +
      '  $|z - z_0| \\leq r$    →  Abgeschlossene Kreisscheibe\n' +
      '  $|z - z_0| > r$       →  Äußeres des Kreises\n' +
      '  $r_1 < |z-z_0| < r_2$ →  Offener Kreisring\n\n' +
      'Mittelpunkt: $|z + a - b\\mathrm{i}|$ = $|z - (-a + b\\mathrm{i})|$ → Mittelpunkt $(-a, b)$\n' +
      '$|z| = |z - a|$  →  Mittelsenkrechte von $0$ und $a$ (senkrechte Gerade)',
  },
  {
    titel: 'Polardarstellung',
    inhalt:
      '$z = r\\,e^{\\mathrm{i}\\varphi} = r(\\cos\\varphi + \\mathrm{i}\\sin\\varphi)$\n' +
      '$r = |z| \\geq 0$,  $\\varphi = \\arg(z) \\in [0, 2\\pi)$\n\n' +
      'Winkel bestimmen: $\\cos\\varphi = \\dfrac{\\mathrm{Re}(z)}{r}$\n' +
      '  $\\mathrm{Im}(z) \\geq 0$: $\\varphi = \\arccos\\!\\left(\\dfrac{\\mathrm{Re}(z)}{r}\\right)$\n' +
      '  $\\mathrm{Im}(z) < 0$:   $\\varphi = 2\\pi - \\arccos\\!\\left(\\dfrac{\\mathrm{Re}(z)}{r}\\right)$\n\n' +
      'Multiplikation: $r_1 e^{\\mathrm{i}\\varphi_1} \\cdot r_2 e^{\\mathrm{i}\\varphi_2} = (r_1 r_2)\\,e^{\\mathrm{i}(\\varphi_1+\\varphi_2)}$\n' +
      '  (Beträge multiplizieren, Winkel addieren)',
  },
  {
    titel: 'Eulersche Formel & Potenzen von $\\mathrm{i}$',
    inhalt:
      '$e^{\\mathrm{i}\\varphi} = \\cos\\varphi + \\mathrm{i}\\sin\\varphi$  (Eulersche Formel)\n\n' +
      'Standardwerte:\n' +
      '  $e^{\\mathrm{i}\\cdot 0} = 1$,  $e^{\\mathrm{i}\\frac{\\pi}{2}} = \\mathrm{i}$,  $e^{\\mathrm{i}\\pi} = -1$,  $e^{\\mathrm{i}\\frac{3\\pi}{2}} = -\\mathrm{i}$\n' +
      '  $e^{\\mathrm{i}\\frac{\\pi}{4}} = \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}\\mathrm{i}$,  $e^{\\mathrm{i}\\frac{7\\pi}{4}} = \\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2}\\mathrm{i}$\n\n' +
      'Potenzen von $\\mathrm{i}$ (4er-Zyklus):\n' +
      '  $\\mathrm{i}^0=1$,  $\\mathrm{i}^1=\\mathrm{i}$,  $\\mathrm{i}^2=-1$,  $\\mathrm{i}^3=-\\mathrm{i}$,  $\\mathrm{i}^4=1$, …\n' +
      '  $\\mathrm{i}^n$ hängt von $n \\bmod 4$ ab',
  },
  {
    titel: '$n$-te Wurzeln & Drehung',
    inhalt:
      '$z^n = w = r\\,e^{\\mathrm{i}\\varphi}$ hat genau $n$ Lösungen:\n' +
      '  $z_k = r^{1/n}\\,e^{\\mathrm{i}\\frac{\\varphi + 2\\pi k}{n}}$,  $k = 0, 1, \\ldots, n-1$\n' +
      '  Winkelabstand zwischen Lösungen: $\\frac{2\\pi}{n}$\n\n' +
      'Drehung:\n' +
      '  Multiplikation mit $e^{\\mathrm{i}\\varphi}$:   Drehung um $\\varphi$ gegen UZS\n' +
      '  Multiplikation mit $e^{-\\mathrm{i}\\varphi}$:  Drehung um $\\varphi$ im UZS\n' +
      '  Multiplikation mit $\\mathrm{i}$: Drehung um $\\frac{\\pi}{2}$ gegen UZS\n' +
      '  Multiplikation mit $-\\mathrm{i}$: Drehung um $\\frac{\\pi}{2}$ im UZS',
  },

  // ===== Relationen =====
  {
    titel: 'Relationen – Eigenschaften',
    inhalt:
      'Für Relation $R$ auf Menge $M$, $I_M = \\{(x,x) : x \\in M\\}$:\n\n' +
      '  Reflexiv:       $\\forall x: xRx$  ↔  $I_M \\subseteq R$\n' +
      '  Irreflexiv:     $\\forall x: \\neg(xRx)$  ↔  $I_M \\cap R = \\emptyset$\n' +
      '  Symmetrisch:    $xRy \\Rightarrow yRx$  ↔  $R^{-1} = R$\n' +
      '  Antisymmetrisch: $xRy \\wedge yRx \\Rightarrow x = y$  ↔  $R \\cap R^{-1} \\subseteq I_M$\n' +
      '  Asymmetrisch:   $xRy \\Rightarrow \\neg(yRx)$  ↔  $R \\cap R^{-1} = \\emptyset$\n' +
      '  Transitiv:      $xRy \\wedge yRz \\Rightarrow xRz$  ↔  $R \\circ R \\subseteq R$',
  },
  {
    titel: 'Äquivalenzrelationen & Ordnungsrelationen',
    inhalt:
      'Äquivalenzrelation = reflexiv + symmetrisch + transitiv\n' +
      '  Äquivalenzklasse: $[x] = \\{y \\in M : xRy\\}$\n' +
      '  Klassen bilden Partition (paarweise disjunkt, Vereinigung $= M$)\n' +
      '  Aus Klassen konstruieren: $R = \\bigcup_K K \\times K$\n\n' +
      'Partielle Ordnung = reflexiv + antisymmetrisch + transitiv\n' +
      'Totale Ordnung = partielle Ordnung + alle Paare vergleichbar\n\n' +
      'Klassische Beispiele:\n' +
      '  Teilbarkeit auf $\\mathbb{N}^*$: partielle Ordnung\n' +
      '  Lexikograph. Ordnung auf $\\mathbb{R}^2$: totale Ordnung',
  },
  {
    titel: 'Relationen – Verkettung & Hüllen',
    inhalt:
      'Umkehrrelation: $R^{-1} = \\{(b,a) : (a,b) \\in R\\}$\n\n' +
      'Verkettung: $S \\circ R = \\{(a,c) : \\exists b,\\, (a,b) \\in R \\wedge (b,c) \\in S\\}$\n' +
      '  (Reihenfolge: erst $R$, dann $S$ – von rechts lesen)\n\n' +
      'Hüllen (kleinste Relation, die $R$ enthält und Eigenschaft hat):\n' +
      '  Reflexive Hülle:    $R \\cup I_M$\n' +
      '  Symmetrische Hülle: $R \\cup R^{-1}$\n' +
      '  Transitive Hülle:   $R \\cup R^2 \\cup R^3 \\cup \\ldots$ (bis keine neuen Paare)\n\n' +
      'Kleinste Äquivalenzrelation ⊇ $S$:\n' +
      '  Reflexive → symmetrische → transitive Hülle bilden',
  },

  // ===== Gruppen =====
  {
    titel: 'Gruppenaxiome',
    inhalt:
      '$(G, \\star)$ ist eine Gruppe, wenn:\n' +
      '  1. Abgeschlossenheit: $a \\star b \\in G$ für alle $a, b \\in G$\n' +
      '  2. Assoziativität: $(a \\star b) \\star c = a \\star (b \\star c)$\n' +
      '  3. Neutralelement: $\\exists e \\in G: e \\star a = a \\star e = a$\n' +
      '  4. Inverses: $\\forall a \\in G: \\exists a^{-1} \\in G: a \\star a^{-1} = e$\n\n' +
      'Abelsch/kommutativ: zusätzlich $a \\star b = b \\star a$\n\n' +
      'Für $(G, +) \\subseteq (\\mathbb{Z}, +)$: Assoziativität automatisch;\n' +
      '  prüfe nur $0 \\in G$,  $a+b \\in G$,  $-a \\in G$',
  },
  {
    titel: 'Wichtige Gruppen',
    inhalt:
      '$(n\\mathbb{Z}, +)$: Gruppe für jedes $n \\in \\mathbb{Z}$ (Vielfache von $n$)\n' +
      '$((0,\\infty), \\cdot)$: Gruppe; $((0,\\infty), +)$: keine (fehlt $0$)\n' +
      '$((-\\infty, 0), \\cdot)$: keine ($(-1)(-1) = 1 \\notin (-\\infty,0)$)\n' +
      '$T = \\{z \\in \\mathbb{C} : |z| = 1\\}$ mit $\\cdot$: Gruppe\n' +
      '$E = \\{z \\in \\mathbb{C} : z^4 = 1\\} = \\{1, \\mathrm{i}, -1, -\\mathrm{i}\\}$: Gruppe\n' +
      '$W_3 = \\{1,\\, e^{2\\pi\\mathrm{i}/3},\\, e^{4\\pi\\mathrm{i}/3}\\}$: Gruppe (kub. Einheitswurzeln)\n' +
      '$\\mathrm{GL}_2(\\mathbb{R})$: invertierbare $2{\\times}2$-Matrizen, Gruppe unter $\\cdot$\n' +
      'Cayley-Tafel: Latin-Square (jedes Element einmal pro Zeile/Spalte)',
  },
  {
    titel: 'Symmetrische Gruppe $S_3$',
    inhalt:
      '$S_3$: alle bijektiven Abbildungen $\\{1,2,3\\} \\to \\{1,2,3\\}$ – genau $3! = 6$ Elemente\n\n' +
      'Elemente: $\\mathrm{id}$, $(12)$, $(13)$, $(23)$, $(123)$, $(132)$\n\n' +
      'Komposition $f \\circ g$: erst $g$, dann $f$ (von rechts nach links)\n' +
      '  $(12)\\circ(23)$: $1\\to1\\to2$, $2\\to3\\to3$, $3\\to2\\to1$ = $(132)$\n\n' +
      'Inverse: Transpositionen sind selbstinvers; $(123)^{-1} = (132)$\n\n' +
      '$S_3$ ist nicht kommutativ: $(12)\\circ(23) = (132) \\neq (123) = (23)\\circ(12)$',
  },

  // ===== Restklassen =====
  {
    titel: 'Restklassen $\\mathbb{Z}_n$',
    inhalt:
      '$\\mathbb{Z}_n = \\{[0],[1],\\ldots,[n-1]\\}$\n' +
      '  $[a] + [b] = [(a+b) \\bmod n]$\n' +
      '  $[a] \\cdot [b] = [(a \\cdot b) \\bmod n]$\n\n' +
      'Additives Inverses: $[k]^{-1} = [n-k]$ (für $k \\neq 0$)\n' +
      'Ordnung: $\\mathrm{ord}([k]) = \\dfrac{n}{\\mathrm{ggT}(k,\\, n)}$\n\n' +
      'Negativer Rest: $-a \\bmod n$ → solange $+n$ addieren bis $\\geq 0$\n' +
      'Kürzen in $\\mathbb{Z}_n$: nur erlaubt wenn $\\mathrm{ggT}(\\text{Kürzer}, n) = 1$\n\n' +
      'Erzeugte Untergruppe: $\\langle[k]\\rangle = \\{[0],[k],[2k],\\ldots\\}$\n' +
      'Nebenklassen: $[j] + H$;  Lagrange: $|G|/|H|$ viele Nebenklassen',
  },
]
