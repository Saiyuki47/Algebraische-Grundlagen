// Klausur-Fallen: nicht-intuitive Stolperfallen der Algebraischen Grundlagen –
// zusammengetragen aus den Übungsblättern, Referenz-Karten und Begriffen.
// Jede Falle: worum es geht (falle), ein „so nicht / sondern so" (falsch/richtig)
// oder ein Beispiel, und ein Merksatz.
//
// Autorenregeln für Formeln (werden über MathText/KaTeX gesetzt):
//  • In falle/falsch/richtig/beispiel/merke einfaches `$…$` (kein `$$`).
//  • Backslashes verdoppeln: `\\frac`, `\\mathbb`, `\\gcd`, `\\operatorname` …
//  • titel-/Label-Strings (auch FalleGruppe.titel) tragen KEIN `$…$`,
//    sondern nur Unicode (ℤ, ℚ, ℝ, ⁻¹, ≠, √, ∈ …) – sie werden als Text gesetzt.

export interface Falle {
  titel: string
  /** Warum es eine Falle ist. */
  falle: string
  /** Optionales „So nicht". */
  falsch?: string
  /** Optionales „Sondern so". */
  richtig?: string
  /** Optionales neutrales Beispiel (Block, mit KaTeX). */
  beispiel?: string
  /** Kernbotschaft zum Merken. */
  merke?: string
}

export interface FalleGruppe {
  id: string
  icon: string
  titel: string
  fallen: Falle[]
}

export const klausurFallen: FalleGruppe[] = [
  // ===========================================================================
  {
    id: 'gruppen',
    icon: '🧩',
    titel: 'Gruppen, Ringe & Körper',
    fallen: [
      {
        titel: 'Abgeschlossenheit ist ein eigenes Kriterium',
        falle: 'Eine Teilmenge kann neutrales Element, Assoziativität und Inverse „erben" und trotzdem keine Gruppe sein – nämlich wenn $a \\ast b$ aus der Menge herausfällt.',
        falsch: '$G = \\{z \\in \\mathbb{Z} : 2 \\mid z \\text{ oder } 3 \\mid z\\}$ mit $+$',
        richtig: '$2, 3 \\in G$, aber $2 + 3 = 5 \\notin G$ – nicht abgeschlossen, also keine Gruppe',
        merke: 'Beim Nachweis IMMER zuerst die Abgeschlossenheit prüfen. Ein einziges Gegenbeispiel genügt, um „keine Gruppe" zu zeigen.',
      },
      {
        titel: 'Neutrales Element ist nicht automatisch 0 oder 1',
        falle: 'Das neutrale Element hängt von der Verknüpfung ab. Bei einer ungewohnten Verknüpfung ist $e$ oft weder $0$ noch $1$ – man muss es ausrechnen.',
        beispiel: 'Auf $\\mathbb{Q} \\setminus \\{0\\}$ sei $x \\ast y = \\tfrac14 x y$.\nAus $e \\ast x = x$, also $\\tfrac14 e x = x$, folgt $e = 4$ (nicht $1$).\nDas Inverse ist dann $x^{-1} = \\tfrac{16}{x}$ (aus $\\tfrac14 x b = 4$).',
        merke: 'Neutralelement stets aus $e \\ast x = x$ bestimmen, nicht raten.',
      },
      {
        titel: 'Eine Gruppe muss nicht abelsch sein',
        falle: 'Kommutativität ist KEIN Gruppenaxiom. Die drei Axiome (Assoziativität, Neutralelement, Inverse) sagen nichts über die Reihenfolge.',
        beispiel: 'Die symmetrische Gruppe $(S_3, \\circ)$ ist eine Gruppe, aber nicht abelsch:\n$\\pi_2 \\circ \\pi_3 = \\pi_5$, aber $\\pi_3 \\circ \\pi_2 = \\pi_4$.',
        merke: '„Gruppe" heißt nicht „abelsch". Kommutativität erst nach den drei Axiomen optional zusätzlich prüfen.',
      },
      {
        titel: 'Ein Ring braucht weder Eins noch Inverse für ·',
        falle: 'Für die Multiplikation verlangt ein Ring NUR Assoziativität und die Distributivgesetze – kein Einselement und keine multiplikativen Inversen. Nur $(R,+)$ muss eine (kommutative) Gruppe sein.',
        beispiel: '$2\\mathbb{Z}$ (die geraden Zahlen) mit $+$ und $\\cdot$ ist ein Ring, hat aber KEIN Einselement.',
        merke: 'Gruppe = eine Verknüpfung, Ring = zwei; für $\\cdot$ nur Assoziativität + Distributivität nötig.',
      },
      {
        titel: 'Satz vom Nullprodukt gilt nicht in jedem Ring',
        falle: 'Aus $a \\cdot b = 0$ folgt nur in NULLTEILERFREIEN Ringen (z. B. Körpern, $\\mathbb{Z}$) $a = 0$ oder $b = 0$. In $\\mathbb{Z}_n$ mit zusammengesetztem $n$ gibt es Nullteiler.',
        falsch: 'In $\\mathbb{Z}_6$: aus $[a]\\cdot[b]=[0]$ folgt $[a]=[0]$ oder $[b]=[0]$',
        richtig: '$[2] \\cdot [3] = [6] = [0]$ mit $[2], [3] \\neq [0]$ – beide sind Nullteiler',
        merke: 'Eine Einheit (invertierbar) ist NIE Nullteiler. Nullteiler treten in $\\mathbb{Z}_n$ genau dann auf, wenn $n$ nicht prim ist.',
      },
      {
        titel: 'ℤₙ ist nur bei primem n ein Körper',
        falle: 'Der Restklassenring $\\mathbb{Z}_n$ ist für jedes $n \\ge 2$ ein kommutativer Ring mit Eins, aber genau dann ein KÖRPER, wenn $n$ eine Primzahl ist.',
        beispiel: '$\\mathbb{Z}_7$ ist ein Körper ($7$ prim, jedes $[k] \\neq [0]$ invertierbar).\n$\\mathbb{Z}_8$ ist keiner: $[2]$ hat kein Inverses, und $[2] \\cdot [4] = [8] = [0]$.',
        merke: 'Körpertest für $\\mathbb{Z}_n$ = Primzahltest für $n$. Zusätzlich muss immer $1 \\neq 0$ sein, und nur Elemente $\\neq 0$ brauchen ein Inverses (die $0$ nie).',
      },
    ],
  },
  // ===========================================================================
  {
    id: 'modular',
    icon: '🔢',
    titel: 'Modulares Rechnen & Zahlentheorie',
    fallen: [
      {
        titel: 'Inverses existiert nur bei ggT = 1',
        falle: 'Eine Restklasse $[k]$ ist in $\\mathbb{Z}_n$ genau dann multiplikativ invertierbar, wenn $\\gcd(k, n) = 1$. Sonst gibt es KEIN Inverses – man darf dann keins hinschreiben.',
        beispiel: '$[96]$ in $\\mathbb{Z}_{296}$: $2 \\mid 96$ und $2 \\mid 296$, also $\\gcd(96, 296) \\ge 2 \\neq 1$ → nicht invertierbar.',
        merke: 'Erst $\\gcd(k, n)$ prüfen, dann invertieren. $\\gcd \\neq 1$ ⇒ kein Inverses.',
      },
      {
        titel: 'Das Inverse ist der Koeffizient von a, nicht von n',
        falle: 'Der erweiterte euklidische Algorithmus liefert $s \\cdot a + t \\cdot n = 1$. Das Inverse von $[a]$ ist $[s]$ (der Faktor VOR $a$) – nicht $[t]$.',
        falsch: 'Aus $s\\,a + t\\,n = 1$ das $[t]$ als Inverses nehmen',
        richtig: '$[a]^{-1} = [s]$, denn $s\\,a \\equiv 1 \\pmod n$ (der $n$-Term fällt weg)',
        merke: 'Nur der Koeffizient von $a$ überlebt modulo $n$.',
      },
      {
        titel: 'Reste auf den Standardvertreter 0 … n−1 bringen',
        falle: 'Ein negatives Bézout-$s$ ist zwar rechnerisch richtig, aber als Restklasse muss der Standardvertreter in $\\{0, \\dots, n-1\\}$ liegen. Solange $+n$ addieren.',
        beispiel: 'In $\\mathbb{Z}_{73}$: $5 \\cdot 73 - 14 \\cdot 26 = 1$, also $[26]^{-1} = [-14] = [-14 + 73] = [59]$.\nIn $\\mathbb{Z}_{25}$: $[-4] = [21]$.',
        merke: 'Ergebnis nie negativ stehen lassen – auf $\\{0, \\dots, n-1\\}$ reduzieren.',
      },
      {
        titel: 'Euklid: der ggT ist der letzte Rest VOR der 0',
        falle: 'Der euklidische Algorithmus stoppt, wenn der Rest $0$ wird. Der $\\gcd$ ist der Rest der Zeile DAVOR – nicht die $0$. Außerdem: stets Divisor durch Rest der Vorzeile teilen.',
        beispiel: '$73 = 2 \\cdot 26 + 21$; $26 = 1 \\cdot 21 + 5$; $21 = 4 \\cdot 5 + 1$; $5 = 5 \\cdot 1 + 0$\n→ $\\gcd(26, 73) = 1$ (der Rest vor der $0$).',
        merke: 'Ein Schritt zu weit liefert immer „$\\gcd = 0$". Beim letzten Rest $\\neq 0$ aufhören.',
      },
      {
        titel: '(ℤₙ, ·) ist keine Gruppe – nur ℤₙ* ist eine',
        falle: 'Unter der Multiplikation bilden nicht alle Restklassen eine Gruppe (die $[0]$ und alle nicht-teilerfremden Klassen haben kein Inverses). Nur die Einheiten $\\mathbb{Z}_n^{\\ast} = \\{[k] : \\gcd(k,n) = 1\\}$ tun es.',
        beispiel: '$\\mathbb{Z}_8^{\\ast} = \\{[1], [3], [5], [7]\\}$ – die vier zu $8$ teilerfremden Klassen, also $\\lvert \\mathbb{Z}_8^{\\ast}\\rvert = 4$.',
        merke: '$\\mathbb{Z}_n^{\\ast}$ enthält nur die Einheiten, nicht alle Restklassen.',
      },
      {
        titel: 'Prüfziffern: Gewichte und Modul nicht vertauschen',
        falle: 'Bei ISBN-10 hat die linke Ziffer Gewicht $10$, die Prüfziffer Gewicht $1$, und gerechnet wird modulo $11$ (nicht $10$ wie bei EAN-13). Eine Prüfziffer $10$ schreibt man als X.',
        beispiel: 'Auflösen nach der fehlenden Ziffer: bei Gewicht $g_j = 1$ gilt direkt $[x_j] = [-s]$;\nbei $g_j \\neq 1$ braucht man das Inverse: $[x_j] = [g_j]^{-1} \\cdot [-s]$.',
        merke: 'ISBN-10 → mod $11$, EAN-13 → mod $10$. Ergebnis $[-s]$ noch nach $\\{0,\\dots,m-1\\}$ bringen.',
      },
    ],
  },
  // ===========================================================================
  {
    id: 'lgs',
    icon: '📊',
    titel: 'LGS & Gauß-Verfahren',
    fallen: [
      {
        titel: 'Lösbar heißt GLEICHE Ränge, nicht „voller Rang"',
        falle: 'Ein LGS $A\\vec x = \\vec b$ ist genau dann lösbar, wenn $\\operatorname{rg}(A) = \\operatorname{rg}(A \\mid \\vec b)$. Ist $\\operatorname{rg}(A) < \\operatorname{rg}(A \\mid \\vec b)$, gibt es eine Widerspruchszeile.',
        merke: 'Ränge von $A$ und der erweiterten Matrix $(A \\mid \\vec b)$ vergleichen – nicht auf „$A$ hat vollen Rang" schauen.',
      },
      {
        titel: '0 = 0 ist harmlos, nur 0 = c (c ≠ 0) ist Widerspruch',
        falle: 'Eine Nullzeile $0 = 0$ liefert bloß eine freie Variable und darf ignoriert werden. Erst eine Zeile $(0 \\ \\cdots \\ 0 \\mid c)$ mit $c \\neq 0$ macht das System unlösbar.',
        falsch: 'Nullzeile $0 = 0$ als Widerspruch deuten → „keine Lösung"',
        richtig: 'Widerspruch nur bei $0 = c$ mit $c \\neq 0$; $0 = 0$ ⇒ eine freie Variable',
        merke: 'Links lauter Nullen, rechts eine Zahl $\\neq 0$ = keine Lösung. $0 = 0$ = kein Problem.',
      },
      {
        titel: 'Für „eine vs. unendlich" zählt n (Spalten), nicht m (Zeilen)',
        falle: 'Ob es genau eine oder unendlich viele Lösungen gibt, entscheidet der Vergleich von $\\operatorname{rg}(A)$ mit der Zahl $n$ der UNBEKANNTEN – nicht mit der Zahl $m$ der Gleichungen.',
        beispiel: '$\\operatorname{rg}(A) = n$ → genau eine Lösung (keine freie Variable).\n$\\operatorname{rg}(A) < n$ → unendlich viele, mit $n - \\operatorname{rg}(A)$ freien Variablen.',
        merke: 'Freie Variablen $= n - \\operatorname{rg}(A)$; $n$ ist die Spaltenzahl.',
      },
      {
        titel: 'Ein homogenes LGS ist nie unlösbar',
        falle: 'Bei $\\vec b = \\vec 0$ ist $\\vec x = \\vec 0$ (die triviale Lösung) immer eine Lösung. Der Fall „keine Lösung" kann bei einem homogenen System nicht eintreten.',
        beispiel: 'Homogen ⇒ entweder nur $\\vec 0$ (falls $\\operatorname{rg}(A) = n$) oder unendlich viele (falls $\\operatorname{rg}(A) < n$).\nDer Lösungsraum $L(A \\mid \\vec 0)$ ist ein Untervektorraum.',
        merke: 'Homogen = mindestens $\\vec 0$. Frage ist nur: nur $\\vec 0$ oder unendlich viele?',
      },
      {
        titel: 'Bei unendlich vielen Lösungen den homogenen Anteil nicht vergessen',
        falle: 'Die Lösungsmenge eines lösbaren inhomogenen Systems ist $\\vec x_0 + L(A \\mid \\vec 0)$: eine partikuläre Lösung PLUS alle Richtungsvektoren des homogenen Systems. Nur $\\vec x_0$ hinzuschreiben ist unvollständig.',
        beispiel: 'Parameterform: ein Stützvektor $\\vec x_0$ und je ein Richtungsvektor pro freier Variable (Gerade, Ebene, …).',
        merke: '$L = \\vec x_0 + L(A \\mid \\vec 0)$ – spezielle Lösung + homogener Anteil.',
      },
      {
        titel: 'Quadratisch: det A ≠ 0 ⟺ eindeutig lösbar',
        falle: 'Nur bei quadratischem $A$ ($n$ Gleichungen, $n$ Unbekannte) gilt: $\\det A \\neq 0$ ⟺ für JEDES $\\vec b$ genau eine Lösung. Bei $\\det A = 0$ gibt es keine oder unendlich viele – je nach $\\vec b$.',
        falsch: '$\\det A = 0$ ⇒ „keine Lösung"',
        richtig: '$\\det A = 0$ ⇒ nicht eindeutig, also KEINE ODER unendlich viele (abhängig von $\\vec b$)',
        merke: 'Verbotene Umformung nebenbei: eine Zeile mit $\\lambda = 0$ multiplizieren löscht sie und verfälscht die Lösungsmenge.',
      },
    ],
  },
  // ===========================================================================
  {
    id: 'vektorraum',
    icon: '➡️',
    titel: 'Vektorräume & lineare (Un)Abhängigkeit',
    fallen: [
      {
        titel: 'Der Nullvektor macht jede Familie linear abhängig',
        falle: 'Sobald $\\vec 0$ in einer Vektorfamilie vorkommt, ist sie ohne jede Rechnung linear ABHÄNGIG (man nimmt einen beliebigen Koeffizienten vor $\\vec 0$, alle anderen $0$).',
        merke: '$\\vec 0$ in der Familie gesehen ⇒ abhängig, fertig.',
      },
      {
        titel: '„0 ist Linearkombination" beweist keine Abhängigkeit',
        falle: 'Der Nullvektor ist IMMER eine Linearkombination – die triviale, mit allen $\\lambda_i = 0$. Auf Abhängigkeit schließt man erst, wenn es auch eine NICHTTRIVIALE Darstellung von $\\vec 0$ gibt.',
        falsch: '$\\lambda_1 \\vec v_1 + \\dots + \\lambda_k \\vec v_k = \\vec 0$ hat eine Lösung ⇒ abhängig',
        richtig: 'Unabhängig ⟺ NUR die triviale Lösung $\\lambda_1 = \\dots = \\lambda_k = 0$ ergibt $\\vec 0$',
        merke: 'Es zählt, ob es eine nichttriviale Nullkombination gibt.',
      },
      {
        titel: 'Determinantenkriterium nur für k = n Vektoren',
        falle: 'Lineare Unabhängigkeit über $\\det$ prüft man NUR, wenn die Vektorzahl $k$ gleich der Dimension $n$ ist – nur dann ist die Matrix quadratisch. Sonst existiert keine Determinante.',
        beispiel: '$2$ Vektoren im $\\mathbb{R}^3$: die $3 \\times 2$-Matrix hat keine Determinante → stattdessen den Rang bestimmen.',
        merke: '$k \\neq n$ ⇒ Rang-Verfahren; $\\det$ nur bei quadratischer Matrix.',
      },
      {
        titel: 'Die lineare Hülle eines Vektors ist die ganze Gerade',
        falle: '$\\operatorname{lin}\\{\\vec v\\}$ ist die komplette Ursprungsgerade durch $\\vec v$ (unendlich viele Punkte) – nicht bloß die Menge $\\{\\vec v\\}$. Und $\\operatorname{lin}\\{\\vec 0\\} = \\{\\vec 0\\}$ (Dimension $0$).',
        beispiel: '$\\operatorname{lin}\\{\\vec v\\} = \\operatorname{lin}\\{\\vec v, 2\\vec v\\}$ – zusätzliche ABHÄNGIGE Vektoren vergrößern die Hülle nicht.',
        merke: 'Hülle = alle Linearkombinationen, nicht die Erzeuger selbst.',
      },
      {
        titel: 'Dimension = Rang, nicht Anzahl der Erzeuger',
        falle: 'Die Dimension eines Spanns ist die Zahl der UNABHÄNGIGEN Vektoren (= Rang), nicht die Anzahl der hingeschriebenen Erzeuger. Erst ausdünnen, dann zählen.',
        falsch: '$4$ Erzeuger ⇒ $\\dim = 4$',
        richtig: '$\\dim \\operatorname{lin}\\{\\vec v_1, \\dots, \\vec v_4\\} = \\operatorname{rg}$ – doppelte/abhängige zählen nicht',
        merke: 'Auch: $n$ Vektoren im $\\mathbb{R}^n$ sind nur dann eine Basis, wenn sie zusätzlich unabhängig sind.',
      },
      {
        titel: 'Ein Untervektorraum muss den Nullvektor enthalten',
        falle: 'Enthält eine Menge $U$ den Nullvektor nicht (z. B. eine vom Ursprung verschobene Gerade), ist sie nie ein Untervektorraum – ganz ohne weitere Rechnung.',
        beispiel: '$U = \\{(x, 1) : x \\in \\mathbb{R}\\}$ ist kein UVR, denn $\\vec 0 = (0,0) \\notin U$.',
        merke: 'Erst $\\vec 0 \\in U$? testen. Dann BEIDE Abgeschlossenheiten (Addition UND Skalarmultiplikation) prüfen – eine allein reicht nicht.',
      },
    ],
  },
  // ===========================================================================
  {
    id: 'determinante',
    icon: '🔲',
    titel: 'Determinanten',
    fallen: [
      {
        titel: 'Determinante nur für quadratische Matrizen',
        falle: 'Eine Determinante ist ausschließlich für $n \\times n$-Matrizen definiert. Für nicht-quadratische Matrizen gibt es keine.',
        merke: 'Nicht quadratisch ⇒ kein $\\det$ (nur der Rang ist definiert).',
      },
      {
        titel: '2×2: ad − bc, nicht bc − ad',
        falle: 'Bei $2 \\times 2$ ist es Hauptdiagonale minus Nebendiagonale. Die Reihenfolge nicht vertauschen.',
        falsch: '$\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = bc - ad$',
        richtig: '$\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$',
        merke: 'Hauptdiagonale ($ad$) zuerst, dann Nebendiagonale ($bc$) abziehen.',
      },
      {
        titel: 'Regel von Sarrus nur für 3×3',
        falle: 'Sarrus (Diagonalen-Schema) gilt AUSSCHLIESSLICH für $3 \\times 3$-Matrizen. Bei $4 \\times 4$ und größer ist sie schlicht falsch.',
        beispiel: 'Ab $4 \\times 4$: Laplace-Entwicklung nach einer Zeile/Spalte oder Gauß auf Dreiecksform.',
        merke: 'Sarrus = exakt $n = 3$, nie größer.',
      },
      {
        titel: 'Zeilentausch dreht das Vorzeichen',
        falle: 'Beim Berechnen von $\\det$ über Zeilenumformungen ändert JEDER Zeilentausch das Vorzeichen; eine Zeile mit $\\lambda$ zu multiplizieren multipliziert auch $\\det$ mit $\\lambda$.',
        richtig: 'Nur „Zeile $+$ Vielfaches einer ANDEREN Zeile" lässt $\\det$ unverändert. Tausch → Faktor $-1$.',
        merke: 'Zeilentausch = Vorzeichenwechsel; nur die Additions-Umformung ist $\\det$-neutral.',
      },
      {
        titel: 'Laplace: Vorzeichen (−1)^{i+j} nicht vergessen',
        falle: 'Bei der Laplace-Entwicklung trägt jeder Minor das Schachbrett-Vorzeichen $(-1)^{i+j}$. Es wegzulassen oder falsch zu setzen ist ein Klassiker.',
        beispiel: 'Vorzeichenmuster ab Position $(1,1)$:\n$\\begin{pmatrix} + & - & + \\\\ - & + & - \\\\ + & - & + \\end{pmatrix}$',
        merke: 'Erst Vorzeichen $(-1)^{i+j}$, dann Minor mal Vorzeichen aufsummieren.',
      },
    ],
  },
  // ===========================================================================
  {
    id: 'relationen',
    icon: '🔗',
    titel: 'Relationen & Abbildungen',
    fallen: [
      {
        titel: 'Nachweis braucht ALLE Elemente, Widerlegen ein Gegenbeispiel',
        falle: 'Eine Relations-Eigenschaft (reflexiv, symmetrisch, transitiv, …) ist erst bewiesen, wenn sie für alle Elemente gilt. Ein Beispiel beweist nichts – aber ein Gegenbeispiel widerlegt sofort.',
        merke: '„Eigenschaft gilt" → für alle zeigen. „Gilt nicht" → EIN Gegenbeispiel reicht.',
      },
      {
        titel: 'Ein fehlendes Paar (x,x) killt die Reflexivität',
        falle: 'Reflexiv bedeutet $(x,x) \\in R$ für ALLE $x$ der Grundmenge. Ein einziges fehlendes Diagonalpaar genügt, damit $R$ nicht reflexiv ist.',
        beispiel: '$R = \\{(1,1),(2,2),(2,4),(4,4)\\}$ auf $\\{1,2,3,4\\}$ ist NICHT reflexiv, weil $(3,3)$ fehlt.',
        merke: 'Alle Diagonalpaare $(x,x)$ durchgehen, keins darf fehlen.',
      },
      {
        titel: 'Leere Voraussetzung ⇒ Eigenschaft ist erfüllt',
        falle: 'Trifft die Voraussetzung einer Eigenschaft nie zu (z. B. es gibt gar keine Paare mit $xRy$ und $yRx$), so ist die Implikation „leer" wahr – die Eigenschaft ist ERFÜLLT, nicht verletzt.',
        beispiel: '„$x + y$ ungerade" ist keine Äquivalenzrelation, aber nicht wegen Symmetrie, sondern weil $x + x = 2x$ gerade ist ⇒ nicht reflexiv.',
        merke: 'Eine All-Aussage über die leere Menge ist immer wahr.',
      },
      {
        titel: 'Verkettung S∘R: erst R, dann S',
        falle: 'Bei $S \\circ R$ (bzw. $f \\circ g$ bei Funktionen) wird ZUERST das rechte, also $R$ (bzw. $g$), angewandt – dann das linke. Das Zwischenelement steht in der Mitte.',
        falsch: '$S \\circ R$ heißt „erst $S$, dann $R$"',
        richtig: '$(g,\\, \\text{dann}\\, f)$: $f \\circ g$ bildet $x \\mapsto f(g(x))$ – rechts zuerst',
        merke: 'Bei Verkettungen immer von rechts nach links lesen.',
      },
      {
        titel: 'Das Urbild sammelt ALLE Lösungen',
        falle: 'Das Urbild $f^{-1}(\\{y\\})$ ist die Menge ALLER $x$ mit $f(x) = y$ – nicht ein einzelner Wert und nicht dasselbe wie die Umkehrfunktion (die es nur bei Bijektivität gibt).',
        beispiel: 'Bei $\\sin, \\cos, \\tan$ den Zusatz $+\\,k\\pi$ bzw. $+\\,2k\\pi$ nicht vergessen: $\\sin x = 0 \\Rightarrow x = k\\pi,\\ k \\in \\mathbb{Z}$.',
        merke: 'Urbild = ganze Lösungsmenge in der Definitionsmenge, nicht nur der Hauptwert.',
      },
      {
        titel: 'Nicht injektiv ⇒ kein Isomorphismus',
        falle: 'Ein Gruppenhomomorphismus $\\Phi$ mit $\\Phi(a) = \\Phi(b)$ für ein $a \\neq b$ ist nicht injektiv, also kein Isomorphismus – er bleibt aber ein Homomorphismus.',
        beispiel: '$\\Phi: \\mathbb{Z} \\to \\mathbb{Z}_n,\\ x \\mapsto [x]$: es ist $\\Phi(0) = [0] = [n] = \\Phi(n)$, obwohl $0 \\neq n$ ⇒ nicht injektiv.',
        merke: 'Isomorphismus = Homomorphismus + bijektiv (injektiv UND surjektiv).',
      },
    ],
  },
  // ===========================================================================
  {
    id: 'komplex',
    icon: '🌀',
    titel: 'Komplexe Zahlen & Trigonometrie',
    fallen: [
      {
        titel: 'i² = −1 konsequent einsetzen',
        falle: 'Beim Multiplizieren komplexer Zahlen muss $\\mathrm{i}^2$ durch $-1$ ersetzt werden – sonst bleibt das Produkt unfertig. Bei Potenzen zählt der Rest $n \\bmod 4$.',
        beispiel: '$(a + b\\,\\mathrm{i})(c + d\\,\\mathrm{i}) = (ac - bd) + (ad + bc)\\,\\mathrm{i}$.\n$\\mathrm{i}^{15} = \\mathrm{i}^{15 \\bmod 4} = \\mathrm{i}^{3} = -\\mathrm{i}$.',
        merke: 'Der Imaginärteil ist reell (ohne $\\mathrm{i}$): $\\operatorname{Im}(3 + 4\\,\\mathrm{i}) = 4$, nicht $4\\,\\mathrm{i}$.',
      },
      {
        titel: 'Division: mit dem Konjugierten des NENNERS erweitern',
        falle: 'Zum Dividieren erweitert man mit $\\overline{w}$, der Konjugierten des NENNERS, damit der Nenner reell wird ($w\\,\\overline{w} = \\lvert w\\rvert^2$).',
        falsch: 'Mit $\\overline{z}$ (Konjugierte des Zählers) erweitern',
        richtig: '$\\dfrac{z}{w} = \\dfrac{z\\,\\overline{w}}{\\lvert w\\rvert^2}$',
        merke: '$\\lvert z\\rvert^2 = z\\,\\overline{z}$ ist reell, $z^2 = z \\cdot z$ im Allgemeinen nicht – nicht verwechseln.',
      },
      {
        titel: 'n-te Wurzeln: es gibt IMMER genau n',
        falle: 'Die Gleichung $z^n = w$ hat genau $n$ Lösungen, die ein regelmäßiges $n$-Eck bilden. Nur eine anzugeben ist falsch – und der Radius ist $\\sqrt[n]{r}$, nicht $r$.',
        beispiel: 'Für $w = r\\,e^{\\mathrm{i}\\varphi}$: $z_k = \\sqrt[n]{r}\\; e^{\\mathrm{i}(\\varphi/n + 2\\pi k/n)}$, $k = 0, 1, \\dots, n-1$.\nStartwinkel $\\tfrac{\\varphi}{n}$, Schrittweite $\\tfrac{2\\pi}{n}$; $k = n$ liefert wieder $z_0$.',
        merke: 'Betrag $\\sqrt[n]{r}$, $n$ gleichmäßig verteilte Winkel – alle $n$ Lösungen angeben.',
      },
      {
        titel: 'Potenzieren: Betrag hoch n, Winkel mal n',
        falle: 'Bei $z = r\\,e^{\\mathrm{i}\\varphi}$ ist $z^n = r^n\\,e^{\\mathrm{i} n \\varphi}$: der Betrag wird POTENZIERT, der Winkel MULTIPLIZIERT. Beim Multiplizieren zweier Zahlen dagegen: Beträge mal, Winkel ADDIEREN.',
        falsch: 'Beim Produkt die Winkel multiplizieren',
        richtig: 'Produkt: $r_1 r_2\\, e^{\\mathrm{i}(\\varphi_1 + \\varphi_2)}$ (Winkel addieren); Potenz: $r^n e^{\\mathrm{i} n\\varphi}$',
        merke: 'de Moivre: $r$ hoch $n$, $\\varphi$ mal $n$; danach $\\varphi$ auf $[0, 2\\pi)$ zurückholen.',
      },
      {
        titel: 'Argument braucht Quadranten-Korrektur',
        falle: 'Blind $\\arctan\\tfrac{y}{x}$ zu nehmen liefert bei $x < 0$ oder $y < 0$ den falschen Winkel. Der Quadrant (Vorzeichen von $x$ und $y$) muss berücksichtigt werden.',
        beispiel: 'Bei $y < 0$ etwa $2\\pi - \\arccos\\tfrac{x}{r}$ statt $\\arccos\\tfrac{x}{r}$.\nBeachte: $x = r\\cos\\varphi$ (Realteil), $y = r\\sin\\varphi$ – nicht vertauschen.',
        merke: '$\\arctan$ allein reicht nicht; Argument in den Hauptwert $[0, 2\\pi)$ bringen.',
      },
      {
        titel: '|zₙ| konvergiert ⇏ zₙ konvergiert',
        falle: 'Aus der Konvergenz der Beträge $\\lvert z_n\\rvert$ folgt NICHT die Konvergenz der Folge $(z_n)$. Und Konvergenz verlangt Nähe für ALLE $n \\ge N$, nicht nur unendlich oft.',
        beispiel: '$z_n = \\mathrm{i}^n$: $\\lvert z_n\\rvert = 1$ konvergiert, aber $(z_n)$ springt zwischen $1, \\mathrm{i}, -1, -\\mathrm{i}$ und divergiert.',
        merke: 'Real- UND Imaginärteil müssen beide konvergieren; $\\lvert z_n\\rvert$ allein genügt nie.',
      },
    ],
  },
]
