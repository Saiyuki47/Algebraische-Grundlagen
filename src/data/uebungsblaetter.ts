import type { Uebungsblatt } from '../types'

export const uebungsblaetter: Uebungsblatt[] = [
  {
    id: 'blatt0',
    nr: '0',
    typ: 'Präsenzaufgabe',
    beschreibung: 'Trigonometrische Funktionen und Teilmengen von $\\mathbb{R} \\times \\mathbb{R}$. Besprechung: 16.04.–17.04.2026',
    aufgaben: [
      {
        nr: '1a',
        text: 'Skizzieren Sie die Graphen der Sinus- und der Cosinusfunktion.',
        aufgabeId: 'b0_a1a',
      },
      {
        nr: '1b',
        text: 'Zeichnen Sie $\\sin(\\varphi)$ und $\\cos(\\varphi)$ in den Einheitskreis ein.',
        aufgabeId: 'b0_a1b',
      },
      {
        nr: '1c',
        text: 'Rechnen Sie die gegebenen Winkel vom Gradmaß ins Bogenmaß um.',
        aufgabeId: 'b0_a1c',
      },
      {
        nr: '1d',
        text: 'Rechnen Sie die gegebenen Winkel vom Bogenmaß ins Gradmaß um.',
        aufgabeId: 'b0_a1d',
      },
      {
        nr: '1e',
        text: 'Skizzieren Sie die Tangensfunktion.',
        aufgabeId: 'b0_a1e',
      },
      {
        nr: '1f',
        text: 'Geben Sie Definitionsbereiche und Wertemengen von $\\arcsin$, $\\arccos$ und $\\arctan$ an.',
        aufgabeId: 'b0_a1f',
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
    hinweis:
      'Werte von $\\sin$ und $\\cos$ für die wichtigsten Winkel:\n' +
      '| Winkel $\\varphi$ im Bogenmaß | $0$ | $\\frac{\\pi}{6}$ | $\\frac{\\pi}{4}$ | $\\frac{\\pi}{3}$ | $\\frac{\\pi}{2}$ | $\\frac{2\\pi}{3}$ | $\\frac{3\\pi}{4}$ | $\\frac{5\\pi}{6}$ | $\\pi$ |\n' +
      '| $\\sin(\\varphi)$ | $0$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $1$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{1}{2}$ | $0$ |\n' +
      '| $\\cos(\\varphi)$ | $1$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{1}{2}$ | $0$ | $-\\frac{1}{2}$ | $-\\frac{\\sqrt{2}}{2}$ | $-\\frac{\\sqrt{3}}{2}$ | $-1$ |\n' +
      '\n' +
      '| Winkel $\\varphi$ im Bogenmaß | $\\frac{7\\pi}{6}$ | $\\frac{5\\pi}{4}$ | $\\frac{4\\pi}{3}$ | $\\frac{3\\pi}{2}$ | $\\frac{5\\pi}{3}$ | $\\frac{7\\pi}{4}$ | $\\frac{11\\pi}{6}$ |\n' +
      '| $\\sin(\\varphi)$ | $-\\frac{1}{2}$ | $-\\frac{\\sqrt{2}}{2}$ | $-\\frac{\\sqrt{3}}{2}$ | $-1$ | $-\\frac{\\sqrt{3}}{2}$ | $-\\frac{\\sqrt{2}}{2}$ | $-\\frac{1}{2}$ |\n' +
      '| $\\cos(\\varphi)$ | $-\\frac{\\sqrt{3}}{2}$ | $-\\frac{\\sqrt{2}}{2}$ | $-\\frac{1}{2}$ | $0$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{3}}{2}$ |',
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
        nr: '5a',
        text: 'Wenn noch Zeit ist: Bestimmen Sie $i^2, i^3, i^4, i^5$ und geben Sie eine Formel für $i^n$ an.',
        aufgabeId: 'b2_a5a',
      },
      {
        nr: '5b',
        text: 'Wenn noch Zeit ist: Zeigen Sie über die Reihendarstellungen, dass $\\exp(i\\varphi) = \\cos(\\varphi) + i\\sin(\\varphi)$.',
        aufgabeId: 'b2_a5b',
      },
      {
        nr: '6a',
        text: 'Wenn noch Zeit ist: Beschreiben Sie für $\\varepsilon > 0$ die Mengen $\\{w \\in \\mathbb{C} : |w-z| < \\varepsilon\\}$ und $\\{y \\in \\mathbb{R} : |y-x| < \\varepsilon\\}$.',
        aufgabeId: 'b2_a6a',
      },
      {
        nr: '6b',
        text: 'Wenn noch Zeit ist: Untersuchen Sie die Konvergenz der Folgen $z_n = i^n$, $(|z_n|)$ und $w_n = (\\frac{1}{2}+\\frac{1}{2}i)^n$.',
        aufgabeId: 'b2_a6b',
      },
    ],
  },
  {
    id: 'blatt3',
    nr: '3',
    typ: 'Präsenzaufgabe',
    beschreibung: 'Komplexe Zahlen: Multiplikation, Einheitswurzeln, Drehungen. Relationen. Besprechung: 07.05.–08.05.2026',
    aufgaben: [
      { nr: '1a', text: 'Führen Sie folgende Multiplikation komplexer Zahlen durch: $3e^{\\mathrm{i}\\frac{\\pi}{3}} \\cdot 2e^{\\mathrm{i}\\frac{5\\pi}{6}}$.', aufgabeId: 'b3_a1a' },
      { nr: '1b', text: 'Führen Sie folgende Multiplikation komplexer Zahlen durch: $e^{\\mathrm{i}\\pi} \\cdot e^{3\\pi\\mathrm{i}}$.', aufgabeId: 'b3_a1b' },
      { nr: '1c', text: 'Führen Sie folgende Multiplikation komplexer Zahlen durch: $2e^{\\mathrm{i}\\frac{\\pi}{9}} \\cdot 4e^{-\\mathrm{i}\\frac{\\pi}{9}}$.', aufgabeId: 'b3_a1c' },
      { nr: '2a', text: 'Wenn noch Zeit ist: Geben Sie sämtliche komplexe Lösungen von $z^4 = 16$ an und skizzieren Sie die Lösungen in der komplexen Zahlenebene.', aufgabeId: 'b3_a2a' },
      { nr: '2b', text: 'Wenn noch Zeit ist: Geben Sie sämtliche $z \\in \\mathbb{C}$ an, die die Gleichung $z^3 = -\\mathrm{i}$ erfüllen.', aufgabeId: 'b3_a2b' },
      { nr: '3a', text: 'Wenn noch Zeit ist: Was passiert anschaulich bei der Multiplikation einer komplexen Zahl $z$ mit $e^{\\mathrm{i}\\varphi}$ bzw. $e^{-\\mathrm{i}\\varphi}$?', aufgabeId: 'b3_a3a' },
      { nr: '3b', text: 'Wenn noch Zeit ist: Drehen Sie $z = -1+2\\mathrm{i}$ um $\\frac{\\pi}{2}$ gegen und im Uhrzeigersinn und schreiben Sie das Ergebnis in der Form $x + y\\mathrm{i}$.', aufgabeId: 'b3_a3b' },
      { nr: '4a', text: 'Relationseigenschaften von $R_1$ (gleicher Geburtstag, Menge aller Menschen).', aufgabeId: 'b3_a4a' },
      { nr: '4b', text: 'Relationseigenschaften von $R_2$ (gleicher Geburtstag oder gleich groß).', aufgabeId: 'b3_a4b' },
      { nr: '4c', text: 'Relationseigenschaften von $R_3$ auf $\\mathbb{N}^*$ (Teilbarkeit). Ordnungsrelation?', aufgabeId: 'b3_a4c' },
      { nr: '4d', text: 'Relationseigenschaften von $R_4$ auf $\\mathbb{R}\\times\\mathbb{R}$ (lexikographisch). Ordnungsrelation?', aufgabeId: 'b3_a4d' },
      { nr: '5a', text: 'Geben Sie eine Relation auf $\\mathbb{N}$ an, die reflexiv ist, aber weder symmetrisch noch transitiv.', aufgabeId: 'b3_a5a' },
      { nr: '5b', text: 'Geben Sie eine Relation auf $\\mathbb{N}$ an, die symmetrisch ist, aber weder reflexiv noch transitiv.', aufgabeId: 'b3_a5b' },
      { nr: '5c', text: 'Geben Sie eine Relation auf $\\mathbb{N}$ an, die transitiv ist, aber weder reflexiv noch symmetrisch.', aufgabeId: 'b3_a5c' },
      { nr: '5d', text: 'Geben Sie eine Relation auf $\\mathbb{N}$ an, die reflexiv, transitiv und symmetrisch ist.', aufgabeId: 'b3_a5d' },
      { nr: '6a', text: 'Wenn noch Zeit ist: Ist $R_1 = \\{(1,1),(2,2),(2,4),(4,4)\\}$ eine Äquivalenzrelation? Ggf. Äquivalenzklassen.', aufgabeId: 'b3_a6a' },
      { nr: '6b', text: 'Wenn noch Zeit ist: Ist $R_2 = \\{(x,y) : f(x)=f(y)\\}$ eine Äquivalenzrelation? Ggf. Äquivalenzklassen.', aufgabeId: 'b3_a6b' },
      { nr: '6c', text: 'Wenn noch Zeit ist: Ist $R_3$ auf $\\mathbb{Z}$ ($x+y$ gerade) eine Äquivalenzrelation? Ggf. Äquivalenzklassen.', aufgabeId: 'b3_a6c' },
      { nr: '6d', text: 'Wenn noch Zeit ist: Ist $R_4$ auf $\\mathbb{N}^*$ ($y = ax^b$) eine Äquivalenzrelation? Ggf. Äquivalenzklassen.', aufgabeId: 'b3_a6d' },
    ],
  },
  {
    id: 'blatt4',
    nr: '4',
    typ: 'Präsenzaufgabe',
    beschreibung: 'Relationen: Äquivalenzrelationen, Verkettung, Hüllen. Besprechung: 15.05.2026',
    aufgaben: [
      { nr: '1a', text: 'Falls noch nicht besprochen: Ist $R_1 = \\{(1,1),(2,2),(2,4),(4,4)\\}$ eine Äquivalenzrelation? (Siehe Blatt 3, Aufgabe 6a)', aufgabeId: 'b3_a6a' },
      { nr: '1b', text: 'Falls noch nicht besprochen: Ist $R_2 = \\{(x,y) : f(x)=f(y)\\}$ eine Äquivalenzrelation? (Siehe Blatt 3, Aufgabe 6b)', aufgabeId: 'b3_a6b' },
      { nr: '1c', text: 'Falls noch nicht besprochen: Ist $R_3$ auf $\\mathbb{Z}$ ($x+y$ gerade) eine Äquivalenzrelation? (Siehe Blatt 3, Aufgabe 6c)', aufgabeId: 'b3_a6c' },
      { nr: '1d', text: 'Falls noch nicht besprochen: Ist $R_4$ auf $\\mathbb{N}^*$ ($y = ax^b$) eine Äquivalenzrelation? (Siehe Blatt 3, Aufgabe 6d)', aufgabeId: 'b3_a6d' },
      { nr: '2a', text: 'Ist $R_1$ auf $\\mathbb{Z}$ ($y-x$ durch 2 oder 3 teilbar) eine Äquivalenzrelation? Ggf. Äquivalenzklassen.', aufgabeId: 'b4_a2a' },
      { nr: '2b', text: 'Ist $R_2$ auf $\\mathbb{R}\\setminus\\{0\\}$ ($xy>0$) eine Äquivalenzrelation? Ggf. Äquivalenzklassen.', aufgabeId: 'b4_a2b' },
      { nr: '2c', text: 'Ist $R_3$ auf $\\mathbb{Z}$ ($x+y$ ungerade) eine Äquivalenzrelation? Ggf. Äquivalenzklassen.', aufgabeId: 'b4_a2c' },
      { nr: '2d', text: 'Ist $R_4$ auf $\\mathbb{R}$ ($x^2=y^2$) eine Äquivalenzrelation? Ggf. Äquivalenzklassen.', aufgabeId: 'b4_a2d' },
      { nr: '3a', text: 'Geben Sie die Äquivalenzrelation $R$ auf $\\{1,\\ldots,6\\}$ mit den Klassen $\\{1,3,4\\}$, $\\{2,5\\}$, $\\{6\\}$ an (alle Elemente auflisten).', aufgabeId: 'b4_a3a' },
      { nr: '3b', text: 'Geben Sie die Äquivalenzrelation $S$ auf $\\mathbb{N}$ mit den einelementigen Klassen $\\{0\\},\\{1\\},\\{2\\},\\ldots$ an.', aufgabeId: 'b4_a3b' },
      { nr: '3c', text: 'Geben Sie die Äquivalenzrelation $T$ auf $\\mathbb{N}$ mit nur einer Klasse $\\mathbb{N}$ an.', aufgabeId: 'b4_a3c' },
      { nr: 4, text: 'Bilden Sie die Verkettung $S \\circ R$ für gegebene Relationen $R \\subseteq A \\times B$ und $S \\subseteq B \\times C$ und bestimmen Sie die Umkehrrelation.', aufgabeId: 'b4_a4' },
      { nr: '5a', text: 'Was ist die reflexive Hülle der „kleiner"-Relation $R_<$ auf $\\mathbb{R}$?', aufgabeId: 'b4_a5a' },
      { nr: '5b', text: 'Was ist die symmetrische Hülle der „kleiner-gleich"-Relation $R_\\leq$ auf $\\mathbb{R}$?', aufgabeId: 'b4_a5b' },
      { nr: '5c', text: 'Bilden Sie die transitive Hülle der Relation $R = \\{(1,2),(1,3),(2,3),(3,4),(5,6)\\}$ auf $\\{1,\\ldots,6\\}$.', aufgabeId: 'b4_a5c' },
      { nr: '5d', text: 'Bilden Sie die kleinste Äquivalenzrelation auf $\\{1,\\ldots,6\\}$, die $S=\\{(2,1),(1,5),(3,4)\\}$ enthält. Äquivalenzklassen?', aufgabeId: 'b4_a5d' },
      { nr: 6, text: 'Wenn noch Zeit ist: Ordnen Sie den mengentheoretischen Charakterisierungen ($R \\cap R^{-1} \\subseteq I_M$ etc.) die Eigenschaften reflexiv, irreflexiv, symmetrisch, asymmetrisch, transitiv, antisymmetrisch zu.', aufgabeId: 'b4_a6' },
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
    beschreibung: 'Restklassen: Einheitengruppen und multiplikative Inverse (euklidischer Algorithmus), ISBN-Prüfziffern, Gruppenhomomorphismen. Besprechung: 04.06.–05.06.2026',
    aufgaben: [
      {
        nr: 1,
        text: 'Geben Sie alle Elemente von Z7* und Z8* an und bestimmen Sie jeweils die zugehörigen multiplikativen Inversen.',
        aufgabeId: 'b6_a1',
      },
      {
        nr: 2,
        text: 'Sind [96] in Z296 bzw. [26] in Z73 bezüglich der Multiplikation invertierbar? Bestimmen Sie ggf. das Inverse mit dem euklidischen Algorithmus.',
        aufgabeId: 'b6_a2',
      },
      {
        nr: 3,
        text: 'Ergänzen Sie die fehlenden Ziffern y und z so, dass gültige ISBN-Nummern entstehen (Prüfsumme in Z11).',
        aufgabeId: 'b6_a3',
      },
      {
        nr: 4,
        text: 'Wenn noch Zeit ist: Welche der Abbildungen (Z→Zn, R→(0,∞), R→Einheitskreis) sind Gruppenhomomorphismen bzw. -isomorphismen?',
        aufgabeId: 'b6_a4',
      },
    ],
  },
  {
    id: 'blatt7',
    nr: '7',
    typ: 'Hausaufgabe',
    beschreibung: 'Lineare Gleichungssysteme: erweiterte Koeffizientenmatrix, Zeilenstufenform und das Gauß-Verfahren (Lösungsmengen, freie und gebundene Variablen). Besprechung: 11.06.–12.06.2026',
    aufgaben: [
      {
        nr: 1,
        text: 'Entscheiden Sie, welche der Systeme $(G_1)$–$(G_6)$ lineare Gleichungssysteme sind, und geben Sie ggf. die erweiterte Koeffizientenmatrix an.',
        aufgabeId: 'b7_a1',
      },
      {
        nr: 2,
        text: 'Welche der Matrizen $A$–$F$ sind in Zeilenstufenform?',
        aufgabeId: 'b7_a2',
      },
      {
        nr: 3,
        text: 'Bestimmen Sie mit dem Gauß-Verfahren die Lösungsmengen von $(G_1)$–$(G_4)$ und markieren Sie freie und gebundene Variablen.',
        aufgabeId: 'b7_a3',
      },
      {
        nr: 4,
        text: 'Geben Sie bei vier erweiterten Koeffizientenmatrizen an, ob das LGS keine, genau eine oder unendlich viele Lösungen besitzt (mit gebundenen/freien Variablen und Lösungsmenge).',
        aufgabeId: 'b7_a4',
      },
      {
        nr: 5,
        text: 'Wenn noch Zeit ist: Für welche $\\alpha \\in \\mathbb{R}$ besitzt das homogene LGS $(G_1)$ keine, genau eine bzw. unendlich viele Lösungen?',
        aufgabeId: 'b7_a5',
      },
      {
        nr: 6,
        text: 'Wenn noch Zeit ist: Geben Sie lineare Gleichungssysteme mit zwei Unbekannten an, deren Lösungsmenge die vorgegebenen Mengen (a)–(c) sind.',
        aufgabeId: 'b7_a6',
      },
    ],
  },
]
