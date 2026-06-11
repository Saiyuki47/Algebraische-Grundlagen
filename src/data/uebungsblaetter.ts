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
  {
    id: 'blatt1',
    nr: '1',
    typ: 'Hausaufgabe',
    beschreibung: 'Komplexe Zahlen, Gaußsche Zahlenebene, Beträge und Konjugierte. Besprechung: 23.04.–24.04.2026',
    aufgaben: [
      {
        nr: 1,
        text: 'Skizzieren Sie -6 + 4i, i, -i und -1 in der Gaußschen Zahlenebene und geben Sie Re- und Imaginärteile an.',
        aufgabeId: 'b1_a1',
      },
      {
        nr: 2,
        text: 'Seien z1 = √3 - i und z2 = -2√3 + 2i. Berechnen Sie Konjugierte, Beträge und Rechenoperationen.',
        aufgabeId: 'b1_a2',
      },
      {
        nr: 3,
        text: 'Formen Sie die komplexen Zahlen in die Form x + yi um.',
        aufgabeId: 'b1_a3',
      },
      {
        nr: 4,
        text: 'Veranschaulichen Sie die angegebenen Mengen in der komplexen Zahlenebene.',
        aufgabeId: 'b1_a4',
      },
      {
        nr: 5,
        text: 'Wenn noch Zeit ist: Zeigen Sie die Rechenregeln für Betrag und komplexe Konjugation.',
        aufgabeId: 'b1_a5',
      },
    ],
  },
  {
    id: 'blatt2',
    nr: '2',
    typ: 'Präsenzaufgabe',
    beschreibung: 'Komplexe Zahlen: Mengen, Beträge, Polar- und kartesische Darstellung. Besprechung: 30.04.–01.05.2026',
    aufgaben: [
      {
        nr: 1,
        text: 'Veranschaulichen Sie die Mengen $A$, $B$, $C$ in der komplexen Zahlenebene.',
        aufgabeId: 'b2_a1',
      },
      {
        nr: 2,
        text: 'Bestimmen Sie die Beträge $|(\\frac{2+2i}{1-i})^6|$, $|(6+2i)(2+i)|$ und $|(\\frac{\\sqrt{3}}{2}-\\frac{1}{2}i)^{15}|$.',
        aufgabeId: 'b2_a2',
      },
      {
        nr: 3,
        text: 'Skizzieren Sie $z_1=-2-2i$, $z_2=-3i$, $z_3=\\frac{\\sqrt{3}}{2}+\\frac{1}{2}i$, $z_4=1-\\sqrt{3}i$ und bestimmen Sie die Polardarstellung.',
        aufgabeId: 'b2_a3',
      },
      {
        nr: 4,
        text: 'Skizzieren Sie $z_1=e^{i\\pi/2}$, $z_2=2e^{2\\pi i}$, $z_3=e^{i15\\pi/4}$, $z_4=3e^{-i7\\pi/2}$ und bestimmen Sie die kartesische Darstellung.',
        aufgabeId: 'b2_a4',
      },
      {
        nr: 5,
        text: 'Wenn noch Zeit ist: Bestimmen Sie $i^2, i^3, i^4, i^5$ und geben Sie eine Formel für $i^n$ an. Zeigen Sie zudem, dass $\\exp(i\\varphi) = \\cos(\\varphi) + i\\sin(\\varphi)$.',
        aufgabeId: 'b2_a5',
      },
      {
        nr: 6,
        text: 'Wenn noch Zeit ist: Untersuchen Sie die Konvergenz der Folgen $z_n = i^n$, $(|z_n|)$ und $w_n = (\\frac{1}{2}+\\frac{1}{2}i)^n$.',
        aufgabeId: 'b2_a6',
      },
    ],
  },
  {
    id: 'blatt3',
    nr: '3',
    typ: 'Präsenzaufgabe',
    beschreibung: 'Komplexe Zahlen: Multiplikation, Einheitswurzeln, Drehungen. Relationen. Besprechung: 07.05.–08.05.2026',
    aufgaben: [
      {
        nr: 1,
        text: 'Führen Sie folgende Multiplikationen komplexer Zahlen durch: (a) $3e^{i\\frac{\\pi}{3}} \\cdot 2e^{i\\frac{5\\pi}{6}}$, (b) $e^{i\\pi} \\cdot e^{3\\pi i}$, (c) $2e^{i\\frac{\\pi}{9}} \\cdot 4e^{-i\\frac{\\pi}{9}}$.',
        aufgabeId: 'b3_a1',
      },
      {
        nr: 2,
        text: 'Wenn noch Zeit ist: Bestimmen Sie alle komplexen Lösungen von (a) $z^4 = 16$ und (b) $z^3 = -\\mathrm{i}$ und skizzieren Sie die Lösungen in der Gaußschen Zahlenebene.',
        aufgabeId: 'b3_a2',
      },
      {
        nr: 3,
        text: 'Wenn noch Zeit ist: Was bewirkt die Multiplikation mit $e^{i\\varphi}$ bzw. $e^{-i\\varphi}$ geometrisch? Drehen Sie $z = -1+2i$ um $\\frac{\\pi}{2}$ gegen und im Uhrzeigersinn.',
        aufgabeId: 'b3_a3',
      },
      {
        nr: 4,
        text: 'Überlegen Sie, welche der Eigenschaften Reflexivität, Irreflexivität, Symmetrie, Asymmetrie, Transitivität, Antisymmetrie die Relationen $R_1$–$R_4$ erfüllen. Welche sind Äquivalenz- bzw. Ordnungsrelationen?',
        aufgabeId: 'b3_a4',
      },
      {
        nr: 5,
        text: 'Geben Sie je eine Relation auf $\\mathbb{N}$ an, die (a) reflexiv, aber weder symmetrisch noch transitiv; (b) symmetrisch, aber weder reflexiv noch transitiv; (c) transitiv, aber weder reflexiv noch symmetrisch; (d) reflexiv, transitiv und symmetrisch ist.',
        aufgabeId: 'b3_a5',
      },
      {
        nr: 6,
        text: 'Wenn noch Zeit ist: Welche der Relationen $R_1$–$R_4$ sind Äquivalenzrelationen? Geben Sie ggf. die Äquivalenzklassen an.',
        aufgabeId: 'b3_a6',
      },
    ],
  },
  {
    id: 'blatt4',
    nr: '4',
    typ: 'Präsenzaufgabe',
    beschreibung: 'Relationen: Äquivalenzrelationen, Verkettung, Hüllen. Besprechung: 15.05.2026',
    aufgaben: [
      {
        nr: 1,
        text: 'Falls noch nicht besprochen: Welche der Relationen $R_1$–$R_4$ aus der vorigen Übung sind Äquivalenzrelationen? (Siehe Blatt 3, Aufgabe 6)',
        aufgabeId: 'b3_a6',
      },
      {
        nr: 2,
        text: 'Welche der Relationen $R_1$–$R_4$ (auf $\\mathbb{Z}$, $\\mathbb{R}\\setminus\\{0\\}$, $\\mathbb{Z}$, $\\mathbb{R}$) sind Äquivalenzrelationen? Geben Sie ggf. die Äquivalenzklassen an.',
        aufgabeId: 'b4_a2',
      },
      {
        nr: 3,
        text: 'Rekonstruieren Sie Äquivalenzrelationen aus vorgegebenen Äquivalenzklassen: (a) Klassen $\\{1,3,4\\}$, $\\{2,5\\}$, $\\{6\\}$; (b) einelementige Klassen auf $\\mathbb{N}$; (c) nur eine Klasse $\\mathbb{N}$.',
        aufgabeId: 'b4_a3',
      },
      {
        nr: 4,
        text: 'Bilden Sie die Verkettung $S \\circ R$ für gegebene Relationen $R \\subseteq A \\times B$ und $S \\subseteq B \\times C$ und bestimmen Sie die Umkehrrelation.',
        aufgabeId: 'b4_a4',
      },
      {
        nr: 5,
        text: 'Bilden Sie (a) die reflexive Hülle von $R_<$, (b) die symmetrische Hülle von $R_\\leq$, (c) die transitive Hülle einer Relation, (d) die kleinste Äquivalenzrelation die $S=\\{(2,1),(1,5),(3,4)\\}$ enthält.',
        aufgabeId: 'b4_a5',
      },
      {
        nr: 6,
        text: 'Wenn noch Zeit ist: Ordnen Sie den mengentheoretischen Charakterisierungen ($R \\cap R^{-1} \\subseteq I_M$ etc.) die Eigenschaften reflexiv, irreflexiv, symmetrisch, asymmetrisch, transitiv, antisymmetrisch zu.',
        aufgabeId: 'b4_a6',
      },
    ],
  },
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
        text: 'Bestimmen Sie das Neutralelement und das Inverse zur Verknupfung x ⊙ y := (1/4) · x · y auf Q \\ {0}.',
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
    id: 'blatt6',
    nr: '6',
    typ: 'Hausaufgabe',
    beschreibung: 'Gruppen, Restklassen und komplexe Zahlen. Besprechung: 04.06.–05.06.2026',
    aufgaben: [
      {
        nr: 1,
        text: 'Untersuchen Sie, ob M = {1, -1, i, -i} mit komplexer Multiplikation eine Gruppe ist.',
        aufgabeId: 'b6_a1',
      },
      {
        nr: 2,
        text: 'Bestimmen Sie die Ordnung jedes Elements in Z12 und geben Sie die Nebenklassen von <4> an.',
        aufgabeId: 'b6_a2',
      },
      {
        nr: 3,
        text: 'Prufen Sie, ob die Menge der invertierbaren 2×2-Matrizen über R unter Multiplikation eine Gruppe bildet.',
        aufgabeId: 'b6_a3',
      },
      {
        nr: 4,
        text: 'Berechnen Sie die kubischen Einheitswurzeln in C und zeigen Sie, dass sie unter Multiplikation eine Gruppe bilden.',
        aufgabeId: 'b6_a4',
      },
      {
        nr: 5,
        text: 'Zeigen Sie, dass Z7 mit Addition eine Gruppe ist, und bestimmen Sie die Inversen der Elemente.',
        aufgabeId: 'b6_a5',
      },
      {
        nr: 6,
        text: 'Ergänzen Sie die Verknüpfungstafel für eine Gruppe der Ordnung 4 mit den Elementen {e, a, b, c}.',
        aufgabeId: 'b6_a6',
      },
    ],
  },
]
