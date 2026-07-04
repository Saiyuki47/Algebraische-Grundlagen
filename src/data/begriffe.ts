// Begriffe zum Auswendiglernen — kompakte, exakte Definitionen, gesammelt aus
// den Referenz-Karten, Übungsblättern und Vorlesungsfolien (AI1010). Gerendert
// mit MathText (Markdown-lite + $LaTeX$). Jede Definition soll für sich allein
// „abfragbar" sein: Begriff lesen → Definition aufsagen können.

export interface Begriff {
  begriff: string
  /** Kompakte Definition (MathText-Format: **fett**, $LaTeX$). */
  definition: string
  /** Optionale Eselsbrücke / Kurzform zum Einprägen. */
  merke?: string
}

export interface BegriffGruppe {
  titel: string
  begriffe: Begriff[]
}

export const begriffGruppen: BegriffGruppe[] = [
  {
    titel: 'Relationen & ihre Eigenschaften',
    begriffe: [
      {
        begriff: '(binäre) Relation',
        definition: 'Eine Teilmenge des kartesischen Produkts: $R \\subseteq A \\times B$. Statt $(a,b) \\in R$ schreibt man auch $a\\,R\\,b$. Bei $A = B$ spricht man von einer **Relation auf $A$**.',
      },
      {
        begriff: 'reflexiv',
        definition: '$a\\,R\\,a$ gilt für **jedes** $a \\in A$ — jedes Element steht zu sich selbst in Beziehung. Beispiel: $\\le$; Gegenbeispiel: $<$.',
      },
      {
        begriff: 'symmetrisch',
        definition: 'Aus $a\\,R\\,b$ folgt $b\\,R\\,a$ — die Beziehung ist gegenseitig. Beispiel: „hat gleichen Rest mod $n$".',
      },
      {
        begriff: 'antisymmetrisch',
        definition: 'Aus $a\\,R\\,b$ **und** $b\\,R\\,a$ folgt $a = b$. Beispiel: $\\le$. Achtung: nicht das Gegenteil von symmetrisch ($=$ ist beides).',
      },
      {
        begriff: 'transitiv',
        definition: 'Aus $a\\,R\\,b$ und $b\\,R\\,c$ folgt $a\\,R\\,c$ — die Beziehung „springt weiter". Beispiele: $\\le$, Teilbarkeit.',
      },
      {
        begriff: 'Äquivalenzrelation',
        definition: 'Eine Relation, die **reflexiv, symmetrisch und transitiv** ist. Beispiele: $=$, Kongruenz modulo $n$.',
      },
      {
        begriff: 'Äquivalenzklasse $[a]$',
        definition: 'Die Menge aller Elemente, die zu $a$ äquivalent sind: $[a] = \\{x \\in A : x \\sim a\\}$. Jedes Element der Klasse heißt **Vertreter** (Repräsentant) — es gilt $[a] = [b]$ genau dann, wenn $a \\sim b$.',
      },
      {
        begriff: 'Quotientenmenge $A/\\!\\sim$',
        definition: 'Die Menge **aller Äquivalenzklassen** einer Äquivalenzrelation $\\sim$ auf $A$.',
      },
      {
        begriff: 'Partition',
        definition: 'Zerlegung von $A$ in **nichtleere, paarweise disjunkte** Teilmengen, die zusammen ganz $A$ überdecken. Die Äquivalenzklassen einer Äquivalenzrelation bilden stets eine Partition.',
      },
      {
        begriff: 'Ordnungsrelation',
        definition: 'Eine Relation, die **reflexiv, antisymmetrisch und transitiv** ist. Beispiele: $\\le$ auf $\\mathbb{R}$, $\\subseteq$ auf Mengen, Teilbarkeit auf $\\mathbb{N}$.',
        merke: 'Äquivalenz: symmetrisch — Ordnung: antisymmetrisch',
      },
      {
        begriff: 'Totalordnung / partielle Ordnung',
        definition: '**Total** (linear): je zwei Elemente sind vergleichbar ($a\\,R\\,b$ oder $b\\,R\\,a$), z. B. $\\le$ auf $\\mathbb{R}$. **Partiell**: es gibt unvergleichbare Elemente, z. B. $\\subseteq$ oder Teilbarkeit ($2$ und $3$).',
      },
      {
        begriff: 'Hasse-Diagramm',
        definition: 'Zeichnung einer Ordnungsrelation: kleinere Elemente unten, Kanten nur für **direkte** Nachbarn (nichts dazwischen); Reflexiv- und Transitiv-Pfeile werden weggelassen.',
      },
      {
        begriff: 'größtes / maximales Element',
        definition: '**Größtes** Element: ist mit **allen** vergleichbar und größer-gleich allen. **Maximales** Element: es gibt **kein echt größeres** (unvergleichbare dürfen existieren). Bei Totalordnungen fällt beides zusammen. Analog kleinstes/minimales.',
      },
      {
        begriff: 'Verkettung $S \\circ R$',
        definition: '$S \\circ R = \\{(a,c) : \\exists\\, b \\text{ mit } (a,b) \\in R \\text{ und } (b,c) \\in S\\}$ — **erst $R$, dann $S$** (wie bei Funktionen $g \\circ f$). Im Allgemeinen ist $S \\circ R \\ne R \\circ S$.',
      },
      {
        begriff: 'inverse Relation $R^{-1}$',
        definition: '$R^{-1} = \\{(y,x) : (x,y) \\in R\\}$ — jeder Pfeil wird umgedreht. Existiert für **jede** Relation; bei bijektiven Funktionen ist $R^{-1}$ die Umkehrfunktion.',
      },
    ],
  },
  {
    titel: 'Abbildungen: Bild & Urbild',
    begriffe: [
      {
        begriff: 'Bild einer Menge $f(M)$',
        definition: '$f(M) = \\{f(x) : x \\in M\\}$ — alle Funktionswerte, die aus $M$ herauskommen. Eine **Teilmenge der Zielmenge**. $f(D)$ ist der **Wertebereich**.',
      },
      {
        begriff: 'Urbild $f^{-1}(N)$',
        definition: '$f^{-1}(N) = \\{x \\in D : f(x) \\in N\\}$ — **alle** Eingaben, deren Wert in $N$ liegt. Eine **Teilmenge der Definitionsmenge**; existiert für **jede** Funktion, auch ohne Umkehrfunktion!',
        merke: 'Urbild ≠ Umkehrfunktion — f⁻¹(N) ist eine Menge, keine Abbildung',
      },
      {
        begriff: 'injektiv',
        definition: 'Aus $f(x_1) = f(x_2)$ folgt $x_1 = x_2$ — kein Wert wird doppelt getroffen. Nur injektive (auf passendem Bereich eingeschränkte) Funktionen sind umkehrbar, z. B. $\\sin$ auf $[-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}]$.',
      },
      {
        begriff: 'surjektiv',
        definition: 'Jedes Element der Zielmenge wird getroffen: $f(D) = Z$.',
      },
      {
        begriff: 'bijektiv',
        definition: '**Injektiv und surjektiv** zugleich — jedes Ziel-Element wird von **genau einem** $x$ getroffen. Genau dann existiert die Umkehrabbildung $f^{-1}$.',
      },
    ],
  },
  {
    titel: 'Teilbarkeit, ggT & Restklassen',
    begriffe: [
      {
        begriff: 'Teiler $b \\mid a$',
        definition: '$b$ teilt $a$, wenn es ein $z \\in \\mathbb{Z}$ gibt mit $a = z \\cdot b$.',
      },
      {
        begriff: 'Division mit Rest',
        definition: 'Zu $a \\in \\mathbb{Z}$ und $n \\in \\mathbb{N}$ gibt es **eindeutige** $q \\in \\mathbb{Z}$ und $r \\in \\{0, \\dots, n-1\\}$ mit $a = q \\cdot n + r$. Der Rest $r = a \\bmod n$ ist **nie negativ**.',
      },
      {
        begriff: 'ggT',
        definition: 'Der **größte gemeinsame Teiler** $\\operatorname{ggT}(a,b)$: die größte Zahl, die $a$ und $b$ beide teilt.',
      },
      {
        begriff: 'teilerfremd',
        definition: '$a$ und $b$ heißen teilerfremd, wenn $\\operatorname{ggT}(a,b) = 1$.',
      },
      {
        begriff: 'Euklidischer Algorithmus',
        definition: 'Berechnet den ggT durch wiederholte Division mit Rest: teile die größere Zahl durch die kleinere, ersetze dann Divisor durch Rest — der **letzte Rest $\\ne 0$** ist der ggT.',
      },
      {
        begriff: 'Lemma von Bézout',
        definition: 'Der ggT lässt sich als ganzzahlige Kombination darstellen: $\\operatorname{ggT}(a,b) = s \\cdot a + t \\cdot b$ mit $s, t \\in \\mathbb{Z}$ (gefunden per **Rückwärtseinsetzen** im euklidischen Algorithmus).',
      },
      {
        begriff: 'kongruent modulo $n$',
        definition: '$a \\equiv b \\pmod{n}$, wenn $n \\mid (b - a)$ — gleichbedeutend: $a$ und $b$ lassen bei Division durch $n$ **denselben Rest**. Das ist eine Äquivalenzrelation auf $\\mathbb{Z}$.',
      },
      {
        begriff: 'Restklasse $[a]_n$',
        definition: 'Die Menge aller Zahlen mit demselben Rest wie $a$: $[a]_n = \\{a + k \\cdot n : k \\in \\mathbb{Z}\\}$.',
      },
      {
        begriff: '$\\mathbb{Z}_n$',
        definition: 'Die Menge der $n$ Restklassen modulo $n$: $\\mathbb{Z}_n = \\{[0], [1], \\dots, [n-1]\\}$. Gerechnet wird vertreterweise: $[a] + [b] = [a+b]$, $[a] \\cdot [b] = [a \\cdot b]$.',
      },
      {
        begriff: 'Inverses modulo $n$',
        definition: '$[a]$ ist multiplikativ invertierbar in $\\mathbb{Z}_n$ **genau dann, wenn $\\operatorname{ggT}(a,n) = 1$**. Das Inverse findet man über den erweiterten euklidischen Algorithmus.',
      },
      {
        begriff: 'Prüfziffer',
        definition: 'Extra-Ziffer einer Nummer (ISBN, EAN, IBAN), gewählt so, dass eine **gewichtete Quersumme** $\\sum_k g_k x_k \\equiv 0 \\pmod{m}$ erfüllt ist — Tippfehler verletzen die Probe und fallen auf.',
      },
    ],
  },
  {
    titel: 'Gruppen',
    begriffe: [
      {
        begriff: 'Verknüpfung',
        definition: 'Eine Abbildung $\\ast: M \\times M \\to M$ — je zwei Elementen wird ein Ergebnis zugeordnet, das **wieder in $M$ liegt** (Abgeschlossenheit).',
      },
      {
        begriff: 'Gruppe $(G, \\ast)$',
        definition: 'Menge mit Verknüpfung, die drei Axiome erfüllt: **(G1) Assoziativität** $(a \\ast b) \\ast c = a \\ast (b \\ast c)$, **(G2) Neutralelement** $e$ mit $e \\ast a = a \\ast e = a$, **(G3) Inverses**: zu jedem $a$ existiert $a^{-1}$ mit $a \\ast a^{-1} = a^{-1} \\ast a = e$.',
        merke: 'Vorab prüfen: ist ∗ überhaupt abgeschlossen?',
      },
      {
        begriff: 'abelsch (kommutativ)',
        definition: 'Eine Gruppe heißt abelsch, wenn zusätzlich $a \\ast b = b \\ast a$ für alle $a, b$ gilt. Gegenbeispiel: $S_3$.',
      },
      {
        begriff: 'Eindeutigkeit (Satz)',
        definition: 'In jeder Gruppe sind das **Neutralelement** und das **Inverse jedes Elements** eindeutig bestimmt. Außerdem gelten die **Kürzungsregeln**: aus $a \\ast x = a \\ast y$ folgt $x = y$.',
      },
      {
        begriff: 'Verknüpfungstafel',
        definition: 'Tabelle aller Produkte einer endlichen Gruppe. In jeder Zeile und Spalte kommt **jedes Element genau einmal** vor (Sudoku-Eigenschaft).',
      },
      {
        begriff: 'Ordnung $|G|$',
        definition: 'Die **Elementanzahl** der Gruppe. Ist sie eine natürliche Zahl, heißt $G$ **endlich**, sonst unendlich.',
      },
      {
        begriff: 'Ordnung eines Elements $\\operatorname{ord}(a)$',
        definition: 'Die kleinste Zahl $k \\ge 1$ mit $a^k = e$ (also $a$ so oft verknüpfen, bis das Neutralelement herauskommt).',
      },
      {
        begriff: 'Untergruppe $U \\le G$',
        definition: 'Teilmenge $U \\subseteq G$, die mit **derselben** Verknüpfung selbst eine Gruppe ist: **(U0)** $e \\in U$, **(U1)** abgeschlossen unter $\\ast$, **(U2)** abgeschlossen unter Inversenbildung. Assoziativität erbt sich automatisch.',
      },
      {
        begriff: 'triviale / echte Untergruppen',
        definition: 'Jede Gruppe hat die **trivialen** Untergruppen $\\{e\\}$ und $G$ selbst; alle anderen heißen **echt**.',
      },
      {
        begriff: 'Satz von Lagrange',
        definition: 'In einer endlichen Gruppe **teilt die Ordnung jeder Untergruppe die Gruppenordnung**: $|U| \\mid |G|$. Folgerung: $\\operatorname{ord}(a) \\mid |G|$.',
      },
      {
        begriff: 'Permutation',
        definition: 'Eine **bijektive** Abbildung $f: \\{1, \\dots, n\\} \\to \\{1, \\dots, n\\}$ — ein Umsortieren. Notation: Zwei-Zeilen-Schreibweise (unter jedes Element sein Bild).',
      },
      {
        begriff: 'symmetrische Gruppe $S_n$',
        definition: 'Die Menge **aller Permutationen** von $\\{1, \\dots, n\\}$ mit der Hintereinanderausführung $\\circ$. Es gilt $|S_n| = n!$. Ab $n \\ge 3$ **nicht abelsch** — das Standardbeispiel dafür.',
      },
      {
        begriff: 'prime Restklassengruppe $\\mathbb{Z}_n^\\ast$',
        definition: 'Die multiplikativ **invertierbaren** Restklassen: $\\mathbb{Z}_n^\\ast = \\{[a] : \\operatorname{ggT}(a,n) = 1\\}$ mit der Multiplikation — eine Gruppe.',
      },
    ],
  },
  {
    titel: 'Ringe & Körper',
    begriffe: [
      {
        begriff: 'Ring $(R, +, \\cdot)$',
        definition: 'Menge mit **zwei** Verknüpfungen: $(R,+)$ ist eine kommutative Gruppe, $\\cdot$ ist assoziativ, und es gelten die **Distributivgesetze** $a \\cdot (b + c) = a \\cdot b + a \\cdot c$. Beispiele: $\\mathbb{Z}$, $\\mathbb{Z}_n$.',
      },
      {
        begriff: 'kommutativer Ring mit Eins',
        definition: 'Ein Ring, in dem $\\cdot$ kommutativ ist und ein Einselement $1$ existiert ($1 \\cdot a = a$).',
      },
      {
        begriff: 'Körper $(K, +, \\cdot)$',
        definition: 'Kommutativer Ring mit Eins ($1 \\ne 0$), in dem **jedes Element $\\ne 0$ ein multiplikatives Inverses** hat — man kann uneingeschränkt dividieren. Beispiele: $\\mathbb{Q}$, $\\mathbb{R}$, $\\mathbb{C}$, $\\mathbb{Z}_p$ für Primzahlen $p$.',
      },
      {
        begriff: 'Nullteiler',
        definition: 'Elemente $a, b \\ne 0$ mit $a \\cdot b = 0$. Beispiel: in $\\mathbb{Z}_6$ ist $[2] \\cdot [3] = [0]$. Körper sind stets **nullteilerfrei**.',
      },
      {
        begriff: '$\\mathbb{Z}_n$ als Körper',
        definition: '$\\mathbb{Z}_n$ ist **genau dann ein Körper, wenn $n$ prim** ist — nur dann ist jede Restklasse $\\ne [0]$ invertierbar (ggT mit $n$ ist $1$).',
        merke: 'ℤₚ Körper ⇔ p Primzahl',
      },
    ],
  },
  {
    titel: 'Komplexe Zahlen — Grundlagen',
    begriffe: [
      {
        begriff: 'imaginäre Einheit $\\mathrm{i}$',
        definition: 'Die Zahl mit $\\mathrm{i}^2 = -1$. Damit ist $\\mathbb{C} = \\{x + \\mathrm{i}y : x, y \\in \\mathbb{R}\\}$ — ein Körper, in dem jede quadratische Gleichung lösbar ist.',
      },
      {
        begriff: 'kartesische Form',
        definition: '$z = x + \\mathrm{i}y$ mit **Realteil** $\\operatorname{Re}(z) = x$ und **Imaginärteil** $\\operatorname{Im}(z) = y$ (beides reelle Zahlen; der Imaginärteil ist $y$, **ohne** $\\mathrm{i}$).',
      },
      {
        begriff: 'komplex Konjugierte $\\overline{z}$',
        definition: '$\\overline{x + \\mathrm{i}y} = x - \\mathrm{i}y$ — Spiegelung an der reellen Achse. Es gilt $z \\cdot \\overline{z} = x^2 + y^2 = |z|^2$ (reell!).',
      },
      {
        begriff: 'Betrag $|z|$',
        definition: '$|z| = \\sqrt{x^2 + y^2}$ — der **Abstand von $z$ zum Ursprung** in der Gaußschen Zahlenebene (Pythagoras).',
      },
      {
        begriff: 'Division in $\\mathbb{C}$',
        definition: 'Mit der **Konjugierten des Nenners erweitern**: $\\frac{z}{w} = \\frac{z \\cdot \\overline{w}}{w \\cdot \\overline{w}} = \\frac{z \\cdot \\overline{w}}{|w|^2}$ — der Nenner wird reell.',
      },
      {
        begriff: 'Gaußsche Zahlenebene',
        definition: 'Darstellung von $z = x + \\mathrm{i}y$ als Punkt $(x, y)$: waagerechte Achse = Realteil, senkrechte Achse = Imaginärteil.',
      },
      {
        begriff: 'Kreis & Kreisscheibe',
        definition: '$|z - z_0| = r$ ist der **Kreis** um $z_0$ mit Radius $r$; $|z - z_0| \\le r$ die (abgeschlossene) **Kreisscheibe**, mit $<$ die offene.',
      },
      {
        begriff: 'Mittelsenkrechte',
        definition: '$|z - a| = |z - b|$ beschreibt alle Punkte mit **gleichem Abstand** zu $a$ und $b$ — die Mittelsenkrechte der Strecke von $a$ nach $b$; mit $<$ eine **Halbebene**.',
      },
    ],
  },
  {
    titel: 'Komplexe Zahlen — Polarform & Wurzeln',
    begriffe: [
      {
        begriff: 'Argument $\\arg z$',
        definition: 'Der Winkel $\\varphi$ (im Bogenmaß, gegen den Uhrzeigersinn von der positiven reellen Achse) zum Zeiger von $z$. Nur **bis auf Vielfache von $2\\pi$** festgelegt.',
      },
      {
        begriff: 'Hauptwert / Hauptargument',
        definition: 'Der eindeutig gewählte Vertreter des Arguments, hier $\\varphi \\in [0, 2\\pi)$. Beim Ablesen aus $\\arctan\\frac{y}{x}$ den **Quadranten** von $(x,y)$ beachten!',
      },
      {
        begriff: 'Polardarstellung',
        definition: '$z = r(\\cos\\varphi + \\mathrm{i}\\sin\\varphi) = r\\,\\mathrm{e}^{\\mathrm{i}\\varphi}$ mit $r = |z|$ und $\\varphi = \\arg z$ — Beschreibung über **Abstand und Richtung** statt Koordinaten.',
      },
      {
        begriff: 'Euler-Formel',
        definition: '$\\mathrm{e}^{\\mathrm{i}\\varphi} = \\cos\\varphi + \\mathrm{i}\\sin\\varphi$ — Punkte auf dem Einheitskreis. Spezialfall (Eulersche Identität): $\\mathrm{e}^{\\mathrm{i}\\pi} = -1$.',
      },
      {
        begriff: 'Multiplikation in Polarform',
        definition: '$z_1 z_2 = r_1 r_2 \\, \\mathrm{e}^{\\mathrm{i}(\\varphi_1 + \\varphi_2)}$ — **Beträge multiplizieren, Winkel addieren**. Multiplikation mit $\\mathrm{e}^{\\mathrm{i}\\varphi}$ ist eine Drehung um $\\varphi$.',
      },
      {
        begriff: 'Satz von de Moivre',
        definition: '$z^n = r^n \\, \\mathrm{e}^{\\mathrm{i} n \\varphi}$ — **Betrag hoch $n$, Winkel mal $n$**. Grundlage fürs Potenzieren in Polarform.',
      },
      {
        begriff: '$n$-te Wurzeln',
        definition: 'Die Gleichung $z^n = w$ ($w \\ne 0$) hat **immer genau $n$ Lösungen**: $z_k = \\sqrt[n]{r}\\; \\mathrm{e}^{\\mathrm{i}(\\varphi + 2k\\pi)/n}$ für $k = 0, \\dots, n-1$.',
      },
      {
        begriff: 'Geometrie der Wurzeln',
        definition: 'Die $n$ Wurzeln liegen **gleichmäßig verteilt** auf einem Kreis vom Radius $\\sqrt[n]{r}$ — sie bilden ein **regelmäßiges $n$-Eck** (Winkelabstand $\\frac{2\\pi}{n}$).',
      },
      {
        begriff: '$n$-te Einheitswurzeln',
        definition: 'Die Lösungen von $z^n = 1$: $z_k = \\mathrm{e}^{2\\pi \\mathrm{i} k / n}$, $k = 0, \\dots, n-1$ — regelmäßiges $n$-Eck auf dem **Einheitskreis**, Startpunkt $z_0 = 1$.',
      },
    ],
  },
  {
    titel: 'Trigonometrie',
    begriffe: [
      {
        begriff: 'Einheitskreis',
        definition: 'Kreis mit Radius $1$ um den Ursprung. Der Winkelstrahl zu $\\varphi$ trifft ihn im Punkt $P = (\\cos\\varphi, \\sin\\varphi)$ — Cosinus ist die **x-Koordinate**, Sinus die **y-Koordinate**.',
      },
      {
        begriff: 'Bogenmaß',
        definition: 'Winkelmaß als **Länge des Kreisbogens** am Einheitskreis: $360^\\circ = 2\\pi$. Umrechnung: $\\varphi_{\\mathrm{rad}} = \\varphi_{\\mathrm{grad}} \\cdot \\frac{\\pi}{180}$.',
        merke: '180° = π, 90° = π/2, 60° = π/3, 45° = π/4, 30° = π/6',
      },
      {
        begriff: 'trigonometrischer Pythagoras',
        definition: '$\\sin^2\\varphi + \\cos^2\\varphi = 1$ für jeden Winkel — der Punkt $(\\cos\\varphi, \\sin\\varphi)$ liegt auf dem Einheitskreis.',
      },
      {
        begriff: 'Periodizität',
        definition: '$\\sin$ und $\\cos$ haben die **Periode $2\\pi$**: $\\sin(\\varphi + 2\\pi) = \\sin\\varphi$. Deshalb haben Gleichungen wie $\\sin x = c$ unendlich viele Lösungen.',
      },
      {
        begriff: 'Arkusfunktionen',
        definition: '**Umkehrfunktionen** von $\\sin$, $\\cos$, $\\tan$ auf einem eingeschränkten Bereich, wo diese streng monoton (also injektiv) sind: $\\arcsin: [-1,1] \\to [-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2}]$, $\\arccos: [-1,1] \\to [0, \\pi]$, $\\arctan: \\mathbb{R} \\to (-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2})$.',
        merke: 'liefern nur den Hauptwert — alle Lösungen per Periodizität/Symmetrie ergänzen',
      },
    ],
  },
  {
    titel: 'Komplexe Folgen',
    begriffe: [
      {
        begriff: 'Folge in $\\mathbb{C}$',
        definition: 'Eine Abbildung $\\mathbb{N} \\to \\mathbb{C}$, $n \\mapsto z_n$.',
      },
      {
        begriff: 'konvergent (ε-N-Definition)',
        definition: '$(z_n)$ konvergiert gegen $z$, wenn es zu **jedem** $\\varepsilon > 0$ ein $N$ gibt mit $|z_n - z| < \\varepsilon$ für **alle** $n \\ge N$. Der Betrag ist hier der komplexe Abstand.',
      },
      {
        begriff: 'Nullfolge',
        definition: '$(z_n)$ konvergiert gegen $0$ — gleichwertig: die **reelle** Folge der Beträge $(|z_n|)$ ist eine Nullfolge.',
      },
      {
        begriff: 'komponentenweise Konvergenz',
        definition: '$z_n \\to z$ **genau dann, wenn** $\\operatorname{Re}(z_n) \\to \\operatorname{Re}(z)$ und $\\operatorname{Im}(z_n) \\to \\operatorname{Im}(z)$ — Real- und Imaginärteil getrennt untersuchen.',
      },
    ],
  },
  {
    titel: 'Vektorräume',
    begriffe: [
      {
        begriff: 'Vektorraum über $K$',
        definition: 'Menge $V$ mit Addition und Skalarmultiplikation, sodass **(V1)** $(V, +)$ eine kommutative Gruppe ist (mit Nullvektor $\\vec{0}$) und **(V2)** die Verträglichkeits-Axiome gelten: $(\\lambda + \\mu)\\vec{v} = \\lambda\\vec{v} + \\mu\\vec{v}$, $\\lambda(\\vec{v} + \\vec{w}) = \\lambda\\vec{v} + \\lambda\\vec{w}$, $\\lambda(\\mu\\vec{v}) = (\\lambda\\mu)\\vec{v}$, $1 \\cdot \\vec{v} = \\vec{v}$.',
      },
      {
        begriff: 'Untervektorraum (UVR)',
        definition: 'Teilmenge $U \\subseteq V$, die selbst ein Vektorraum ist. Kriterium: $\\vec{0} \\in U$, abgeschlossen unter Addition und unter Skalarmultiplikation. Geometrisch: Geraden/Ebenen **durch den Ursprung**.',
      },
      {
        begriff: 'Linearkombination',
        definition: 'Ein Ausdruck $\\lambda_1 \\vec{v}_1 + \\lambda_2 \\vec{v}_2 + \\cdots + \\lambda_k \\vec{v}_k$ mit Skalaren $\\lambda_i \\in K$.',
      },
      {
        begriff: 'lineare Hülle / Spann',
        definition: '$\\operatorname{span}(\\vec{v}_1, \\dots, \\vec{v}_k)$ = Menge **aller** Linearkombinationen — der **kleinste** Untervektorraum, der die Vektoren enthält.',
      },
      {
        begriff: 'Erzeugendensystem',
        definition: 'Vektoren, deren Spann ganz $V$ ist — jeder Vektor aus $V$ ist Linearkombination von ihnen.',
      },
      {
        begriff: 'linear unabhängig',
        definition: 'Aus $\\lambda_1 \\vec{v}_1 + \\cdots + \\lambda_k \\vec{v}_k = \\vec{0}$ folgt $\\lambda_1 = \\cdots = \\lambda_k = 0$ — nur die **triviale** Kombination ergibt den Nullvektor.',
      },
      {
        begriff: 'linear abhängig',
        definition: 'Nicht linear unabhängig — **mindestens ein** Vektor ist Linearkombination der übrigen. Enthält ein System den Nullvektor, ist es immer abhängig.',
      },
      {
        begriff: 'Basis',
        definition: 'Ein **linear unabhängiges Erzeugendensystem**. Jeder Vektor lässt sich dann **eindeutig** als Linearkombination darstellen (die Skalare heißen **Koordinaten**).',
      },
      {
        begriff: 'Dimension $\\dim V$',
        definition: 'Die **Anzahl der Vektoren einer Basis** — je zwei Basen sind gleich groß, daher wohldefiniert. $\\dim \\mathbb{R}^n = n$.',
      },
      {
        begriff: 'kanonische Basis',
        definition: 'Die Standardbasis $\\vec{e}_1, \\dots, \\vec{e}_n$ des $\\mathbb{R}^n$: $\\vec{e}_i$ hat eine $1$ an Stelle $i$ und sonst Nullen.',
      },
    ],
  },
  {
    titel: 'LGS, Gauß & Determinanten',
    begriffe: [
      {
        begriff: 'lineares Gleichungssystem (LGS)',
        definition: 'Mehrere lineare Gleichungen in denselben Unbekannten, die **gleichzeitig** gelten sollen. **Homogen**, wenn alle rechten Seiten $0$ sind, sonst inhomogen.',
      },
      {
        begriff: '(erweiterte) Koeffizientenmatrix',
        definition: '$A$ = Zahlenschema der Koeffizienten; $(A \\mid b)$ zusätzlich mit der rechten Seite als letzter Spalte.',
      },
      {
        begriff: 'elementare Zeilenumformungen',
        definition: '**Z1** Zeilen tauschen, **Z2** Zeile mit $\\lambda \\ne 0$ multiplizieren, **Z3** Vielfaches einer anderen Zeile addieren — sie **ändern die Lösungsmenge nicht**.',
      },
      {
        begriff: 'Zeilenstufenform (ZSF)',
        definition: 'Jede Zeile beginnt mit mehr Nullen als die darüber (Treppenform); Nullzeilen stehen unten. Das erste Element $\\ne 0$ einer Zeile heißt **Pivot** (Zeilenkopf).',
      },
      {
        begriff: 'Gauß-Algorithmus',
        definition: 'Bringt $(A \\mid b)$ mit elementaren Zeilenumformungen auf **Zeilenstufenform**; danach löst man durch **Rückwärtseinsetzen** von unten nach oben.',
      },
      {
        begriff: 'Gauß-Jordan / normierte ZSF',
        definition: 'Weiter umformen, bis jedes Pivot $= 1$ ist und **auch oberhalb** der Pivots Nullen stehen — die Lösung ist dann direkt ablesbar.',
      },
      {
        begriff: 'freie / gebundene Variablen',
        definition: '**Gebunden**: Variablen mit Pivot in ihrer Spalte. **Frei**: ohne Pivot — sie dürfen beliebig gewählt werden (Parameter) und erzeugen unendlich viele Lösungen.',
      },
      {
        begriff: 'Rang',
        definition: 'Die **Anzahl der Nicht-Nullzeilen** nach Umformung auf Zeilenstufenform — die Zahl „echter" (unabhängiger) Gleichungen.',
      },
      {
        begriff: 'Rangkriterium (Lösbarkeit)',
        definition: 'Das LGS ist lösbar **genau dann, wenn $\\operatorname{rang}(A) = \\operatorname{rang}(A \\mid b)$** — sonst gibt es eine Widerspruchszeile $(0 \\cdots 0 \\mid c)$ mit $c \\ne 0$.',
        merke: 'lösbar & Rang = Anzahl Unbekannte → genau eine Lösung; Rang kleiner → unendlich viele',
      },
      {
        begriff: 'homogenes LGS',
        definition: '$A x = 0$ ist **immer lösbar** (triviale Lösung $x = 0$). Die Lösungsmenge ist ein **Untervektorraum** (der Lösungsraum).',
      },
      {
        begriff: 'Determinante $\\det A$',
        definition: 'Kennzahl quadratischer Matrizen. $2 \\times 2$: $\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$ (Hauptdiagonale minus Nebendiagonale).',
      },
      {
        begriff: 'Regel von Sarrus',
        definition: 'Determinante einer $3 \\times 3$-Matrix: erste zwei Spalten daneben schreiben, drei Diagonalen nach rechts unten **plus**, drei nach rechts oben **minus**. Gilt **nur** für $3 \\times 3$!',
      },
      {
        begriff: 'Laplace-Entwicklung',
        definition: 'Determinante durch Entwicklung nach einer Zeile/Spalte: $\\det A = \\sum_i (-1)^{i+j} a_{ij} \\det A_{ij}$ mit Streichungsmatrix $A_{ij}$ und **Schachbrett-Vorzeichen** — am besten nach der Zeile/Spalte mit den meisten Nullen.',
      },
      {
        begriff: '$\\det \\ne 0$ (Kriterium)',
        definition: '$\\det A \\ne 0 \\iff A$ **invertierbar** $\\iff$ Spalten **linear unabhängig** $\\iff$ $Ax = b$ **eindeutig lösbar** — die zentrale Äquivalenzkette für quadratische Matrizen.',
      },
    ],
  },
]
