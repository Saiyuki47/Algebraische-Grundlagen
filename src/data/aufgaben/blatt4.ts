import type { Aufgabe } from '../../types'

export const b4: Aufgabe[] = [
  {
    id: 'b4_a2',
    titel: 'Äquivalenzrelationen auf $\\mathbb{Z}$ und $\\mathbb{R}$',
    aufgabeText:
      'Welche der folgenden Relationen sind Äquivalenzrelationen? Geben Sie bei den Äquivalenzrelationen jeweils die Äquivalenzklassen an.\n\n' +
      '(a) $R_1$ auf $\\mathbb{Z}$: $xR_1y$, falls $y - x$ durch $2$ oder durch $3$ teilbar ist.\n\n' +
      '(b) $R_2$ auf $\\mathbb{R} \\setminus \\{0\\}$: $xR_2y$, falls $xy > 0$ ist.\n\n' +
      '(c) $R_3$ auf $\\mathbb{Z}$: $xR_3y$, falls $x + y$ eine ungerade Zahl ist.\n\n' +
      '(d) $R_4$ auf $\\mathbb{R}$: $xR_4y$, falls $x^2 = y^2$ gilt.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Äquivalenzrelation = reflexiv + symmetrisch + transitiv. Alle drei Eigenschaften müssen erfüllt sein.\n\n' +
          'Um zu zeigen, dass eine Relation KEINE Äquivalenzrelation ist, reicht es, eine der drei Eigenschaften zu widerlegen (mit einem Gegenbeispiel).\n\n' +
          'Gedanken zu den Einzelfällen:\n' +
          '  (a) „oder"-Verknüpfung macht Transitivität schwierig zu erfüllen\n' +
          '  (b) $xy > 0$ bedeutet: $x$ und $y$ haben dasselbe Vorzeichen\n' +
          '  (c) Gerade/Ungerade: $x + y$ ungerade ↔ $x$ und $y$ haben VERSCHIEDENE Parität\n' +
          '  (d) $x^2 = y^2 \\Leftrightarrow |x| = |y| \\Leftrightarrow y = x$ oder $y = -x$',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Für jede Relation:\n' +
          '1. Reflexivität: Gilt $xRx$ für alle $x$?\n' +
          '   (a) $x - x = 0$: ist $0$ durch $2$ oder $3$ teilbar? Ja ✓\n' +
          '   (c) $x + x = 2x$: ist $2x$ ungerade? Nein! → nicht reflexiv ✗\n\n' +
          '2. Symmetrie: Gilt $xRy \\Rightarrow yRx$?\n\n' +
          '3. Transitivität: Suche ein Gegenbeispiel.\n' +
          '   (a): Versuche $0\\,R_1\\,3$ (da $3-0=3$) und $3\\,R_1\\,5$ (da $5-3=2$):\n' +
          '   Gilt $0\\,R_1\\,5$? $5-0=5$, weder durch $2$ noch durch $3$ teilbar → Nein! → nicht transitiv ✗\n\n' +
          '4. Äquivalenzklassen für Äquivalenzrelationen bestimmen:\n' +
          '   (b): Klassen nach Vorzeichen; (d): Klassen nach $|x|$',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Für (d): $x^2 = y^2 \\Leftrightarrow y = x$ oder $y = -x$\n' +
          '  Klassen: $\\{x, -x\\}$ für $x > 0$, und $\\{0\\}$ für $x = 0$\n' +
          '  Beispiel: $[3] = \\{3, -3\\}$, $[\\pi] = \\{\\pi, -\\pi\\}$, $[0] = \\{0\\}$\n\n' +
          'Für (b): $xy > 0 \\Leftrightarrow$ beide positiv oder beide negativ\n' +
          '  Klassen: $(0, \\infty)$ und $(-\\infty, 0)$\n' +
          '  Probe Reflexivität: $x \\cdot x = x^2 > 0$ für alle $x \\neq 0$ ✓\n' +
          '  Probe Symmetrie: $xy > 0 \\Rightarrow yx > 0$ ✓\n' +
          '  Probe Transitivität: $xy > 0$ und $yz > 0$ → beide positiv oder beide negativ → $xz > 0$ ✓',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• (c): $x + x = 2x$ ist IMMER gerade (nie ungerade), also gilt $xR_3x$ nie → nicht reflexiv!\n\n' +
          '• (b): $xy > 0$ schließt $x = 0$ aus, da der Definitionsbereich $\\mathbb{R} \\setminus \\{0\\}$ ist.\n\n' +
          '• (a) Transitivität: Das Gegenbeispiel $0, 3, 5$ zeigt: Zwar $3-0=3$ (durch 3 teilbar) und $5-3=2$ (durch 2 teilbar), aber $5-0=5$ (weder durch 2 noch durch 3) → $R_1$ ist nicht transitiv.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Für die Äquivalenzrelationen: Bilden die Klassen eine Partition?\n\n' +
          '(b): Liegt jedes $x \\in \\mathbb{R} \\setminus \\{0\\}$ in genau einer Klasse ($>0$ oder $<0$)? Ja ✓\n\n' +
          '(d): Liegt jedes $x \\in \\mathbb{R}$ in der Klasse $[|x|] = \\{x, -x\\}$? Ja ✓\n\n' +
          'Haben die Klassen keine gemeinsamen Elemente? ✓',
      },
    ],
    loesung:
      '(a) Keine Äquivalenzrelation ($R_1$ nicht transitiv): $0\\,R_1\\,3$ und $3\\,R_1\\,5$, aber $0$ und $5$ nicht in Relation ($5-0=5$).\n\n' +
      '(b) Äquivalenzrelation. $xy > 0$ ↔ gleiches Vorzeichen. Klassen: $(0,\\infty)$ und $(-\\infty,0)$.\n\n' +
      '(c) Keine Äquivalenzrelation: $R_3$ ist nicht reflexiv ($2x$ immer gerade).\n\n' +
      '(d) Äquivalenzrelation. $x^2 = y^2 \\Leftrightarrow y = \\pm x$. Klassen: $\\{x,-x\\}$ für $x > 0$, und $\\{0\\}$.',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },
  {
    id: 'b4_a3',
    titel: 'Äquivalenzrelation aus Äquivalenzklassen rekonstruieren',
    aufgabeText:
      '(a) Die Äquivalenzrelation $R$ auf $\\{1,2,3,4,5,6\\}$ führe auf die drei Äquivalenzklassen $\\{1,3,4\\}$, $\\{2,5\\}$ und $\\{6\\}$. Geben Sie $R$ an, indem Sie alle Elemente von $R$ auflisten.\n\n' +
      '(b) Die Äquivalenzrelation $S$ auf $\\mathbb{N}$ führe auf die einelementigen Äquivalenzklassen $\\{0\\}$, $\\{1\\}$, $\\{2\\}$, $\\ldots$. Geben Sie $S$ an.\n\n' +
      '(c) Die Äquivalenzrelation $T$ auf $\\mathbb{N}$ führe auf nur eine Äquivalenzklasse, nämlich $\\mathbb{N}$. Geben Sie $T$ an.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Eine Äquivalenzrelation und ihre Äquivalenzklassen sind zwei Seiten derselben Münze:\n\n' +
          'Äquivalenzklassen → Relation:\n' +
          '  $R = \\{(a,b) : a \\text{ und } b \\text{ liegen in derselben Klasse}\\}$\n\n' +
          'Für eine Klasse $K$: $R$ enthält alle Paare $(x,y)$ mit $x, y \\in K$ (das kartesische Produkt $K \\times K$).\n\n' +
          'Anzahl der Paare pro Klasse $K$ mit $|K|$ Elementen: $|K|^2$ Paare\n' +
          '  (inkl. der reflexiven Paare $(x,x)$)\n\n' +
          'Insgesamt: $R = \\bigcup_{K \\text{ Klasse}} K \\times K$',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '(a) Für jede Klasse $K$, liste alle Paare $(x,y)$ mit $x,y \\in K$ auf:\n' +
          '  Klasse $\\{1,3,4\\}$: $(1,1),(1,3),(1,4),(3,1),(3,3),(3,4),(4,1),(4,3),(4,4)$\n' +
          '  Klasse $\\{2,5\\}$: $(2,2),(2,5),(5,2),(5,5)$\n' +
          '  Klasse $\\{6\\}$: $(6,6)$\n\n' +
          '(b) Jede einelementige Klasse $\\{n\\}$: nur das Paar $(n,n)$\n' +
          '  → $S = \\{(n,n) : n \\in \\mathbb{N}\\}$ (Identitätsrelation)\n\n' +
          '(c) Einzige Klasse ist ganz $\\mathbb{N}$: alle Paare $(n,m)$ für $n,m \\in \\mathbb{N}$\n' +
          '  → $T = \\mathbb{N} \\times \\mathbb{N}$',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Methode: Für jede Klasse $K$, bilde $K \\times K$:\n' +
          '  $K = \\{a, b, c\\}$:\n' +
          '  $K \\times K = \\{(a,a),(a,b),(a,c),(b,a),(b,b),(b,c),(c,a),(c,b),(c,c)\\}$ → $9 = 3^2$ Paare\n\n' +
          '  $K = \\{a, b\\}$:\n' +
          '  $K \\times K = \\{(a,a),(a,b),(b,a),(b,b)\\}$ → $4 = 2^2$ Paare\n\n' +
          'Probe für (a):\n' +
          '  Klasse $\\{1,3,4\\}$: $3^2 = 9$ Paare\n' +
          '  Klasse $\\{2,5\\}$: $2^2 = 4$ Paare\n' +
          '  Klasse $\\{6\\}$: $1^2 = 1$ Paar\n' +
          '  Gesamt: $14$ Paare',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Reflexive Paare $(x,x)$ vergessen: Jedes Element steht mit sich selbst in Relation (Reflexivität)!\n\n' +
          '• Nur halbe Paare angeben: Für $(1,3)$ muss auch $(3,1)$ in $R$ stehen (Symmetrie).\n\n' +
          '• (b) und (c) vergleichen: Einelementige Klassen → minimale Relation (nur Identität); eine große Klasse → maximale Relation (alles).',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Prüfe für (a): Enthält $R$ genau $14$ Paare (kein Mehr, kein Weniger)?\n\n' +
          'Prüfe Reflexivität: Sind alle $(1,1),(2,2),(3,3),(4,4),(5,5),(6,6) \\in R$? Ja ✓\n\n' +
          'Prüfe Symmetrie: Für jedes $(a,b) \\in R$: ist $(b,a) \\in R$? ✓\n\n' +
          'Prüfe die Klassen: Haben $1$ und $4$ die gleiche Klasse? → $(1,4) \\in R$ ✓',
      },
    ],
    loesung:
      '(a) $R = \\{(1,1),(3,3),(4,4),(1,3),(3,1),(1,4),(4,1),(3,4),(4,3),(2,2),(5,5),(2,5),(5,2),(6,6)\\}$.\n\n' +
      '(b) $S = \\{(n,n) : n \\in \\mathbb{N}\\}$ (Identitätsrelation).\n\n' +
      '(c) $T = \\mathbb{N} \\times \\mathbb{N}$.',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },
  {
    id: 'b4_a4',
    titel: 'Verkettung von Relationen und Umkehrrelation',
    aufgabeText:
      'Seien $A = B = \\{1,2,3,4,5\\}$, $C = \\{6,7,8,9,10\\}$,\n' +
      '$R := \\{(1,2),(2,3),(3,4),(4,5),(5,1)\\} \\subseteq A \\times B$\n' +
      'und\n' +
      '$S := \\{(1,8),(1,9),(1,6),(2,6),(3,7),(3,10),(5,7)\\} \\subseteq B \\times C$.\n\n' +
      'Bilden Sie die Verknüpfung $S \\circ R$. Geben Sie dann die Umkehrrelation von $S \\circ R$ an.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Die Verkettung $S \\circ R$ ist das relationale Analogon zur Komposition von Funktionen:\n\n' +
          '  $S \\circ R = \\{(a,c) \\in A \\times C : \\exists b \\in B \\text{ mit } (a,b) \\in R \\text{ und } (b,c) \\in S\\}$\n\n' +
          'Anschaulich: $(a,c) \\in S \\circ R$ bedeutet, es gibt einen „Zwischenstopp" $b$:\n' +
          '  von $a$ nach $b$ (über $R$), dann von $b$ nach $c$ (über $S$).\n\n' +
          'Reihenfolge der Notation: $S \\circ R$ bedeutet „$R$ zuerst, dann $S$" (von rechts nach links, wie bei Funktionen).\n\n' +
          'Umkehrrelation: $R^{-1} = \\{(b,a) : (a,b) \\in R\\}$ – alle Paare umdrehen.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Gehe $R$ systematisch durch:\n\n' +
          'Für jedes $(a,b) \\in R$:\n' +
          '  Suche alle $(b,c) \\in S$ mit demselben $b$\n' +
          '  Dann gilt $(a,c) \\in S \\circ R$\n\n' +
          '$(1,2) \\in R$: Suche $(2,?) \\in S$ → $(2,6)$ → $(1,6) \\in S \\circ R$\n' +
          '$(2,3) \\in R$: Suche $(3,?) \\in S$ → $(3,7),(3,10)$ → $(2,7),(2,10)$\n' +
          '$(3,4) \\in R$: Suche $(4,?) \\in S$ → keines → nichts\n' +
          '$(4,5) \\in R$: Suche $(5,?) \\in S$ → $(5,7)$ → $(4,7)$\n' +
          '$(5,1) \\in R$: Suche $(1,?) \\in S$ → $(1,8),(1,9),(1,6)$ → $(5,8),(5,9),(5,6)$\n\n' +
          'Umkehrrelation: Alle Paare in $S \\circ R$ umdrehen',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Einfaches Beispiel: $R = \\{(1,2),(2,3)\\}$, $S = \\{(2,4),(3,5)\\}$\n' +
          '  $(1,2) \\in R$ und $(2,4) \\in S$ → $(1,4) \\in S \\circ R$\n' +
          '  $(2,3) \\in R$ und $(3,5) \\in S$ → $(2,5) \\in S \\circ R$\n' +
          '  $S \\circ R = \\{(1,4),(2,5)\\}$\n\n' +
          'Umkehrrelation: $(S \\circ R)^{-1} = \\{(4,1),(5,2)\\}$\n\n' +
          'Denke an eine Straßenkarte: $R$ sind Straßen von $A$ nach $B$, $S$ sind Straßen von $B$ nach $C$. $S \\circ R$ sind alle Wege von $A$ nach $C$ (über $B$).',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Reihenfolge: $S \\circ R$ bedeutet ERST $R$, dann $S$ – trotzdem steht $S$ links!\n\n' +
          '• Nicht alle Paare in $S$ für den jeweiligen $b$-Wert finden: Bei $(5,1) \\in R$ gibt es drei Paare in $S$ mit erstem Element $1$.\n\n' +
          '• Umkehrrelation: Paare umdrehen, nicht die Menge spiegeln.\n' +
          '  $(1,6) \\in S \\circ R$ → $(6,1) \\in (S \\circ R)^{-1}$',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Für jedes $(a,c) \\in S \\circ R$: Gibt es wirklich ein $b \\in B$ mit $(a,b) \\in R$ und $(b,c) \\in S$?\n\n' +
          'Prüfe $(4,7) \\in S \\circ R$: $(4,5) \\in R$ und $(5,7) \\in S$ → $b = 5$ ✓\n\n' +
          'Prüfe $(5,9) \\in S \\circ R$: $(5,1) \\in R$ und $(1,9) \\in S$ → $b = 1$ ✓',
      },
    ],
    loesung:
      '$S \\circ R = \\{(1,6),(2,7),(2,10),(4,7),(5,8),(5,9),(5,6)\\}$.\n\n' +
      '$(S \\circ R)^{-1} = \\{(6,1),(7,2),(10,2),(7,4),(8,5),(9,5),(6,5)\\}$.',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },
  {
    id: 'b4_a5',
    titel: 'Reflexive, symmetrische und transitive Hülle',
    aufgabeText:
      '(a) Was ist die reflexive Hülle der „kleiner"-Relation $R_< = \\{(x,y) \\in \\mathbb{R} \\times \\mathbb{R} : x < y\\}$ auf $\\mathbb{R}$?\n\n' +
      '(b) Was ist die symmetrische Hülle der „kleiner-gleich"-Relation $R_{\\leq} = \\{(x,y) \\in \\mathbb{R} \\times \\mathbb{R} : x \\leq y\\}$ auf $\\mathbb{R}$?\n\n' +
      '(c) Bilden Sie die transitive Hülle der Relation $R = \\{(1,2),(1,3),(2,3),(3,4),(5,6)\\}$ auf $\\{1,\\ldots,6\\}$.\n\n' +
      '(d) Bilden Sie die kleinste Äquivalenzrelation auf $\\{1,\\ldots,6\\}$, die $S = \\{(2,1),(1,5),(3,4)\\}$ enthält. Was sind die Äquivalenzklassen?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Die Hülle einer Relation $R$ bezüglich einer Eigenschaft $P$ ist die kleinste Relation, die $R$ enthält und die Eigenschaft $P$ hat.\n\n' +
          'Konstruktionen:\n' +
          '  Reflexive Hülle: $R \\cup \\{(x,x) : x \\in M\\} = R \\cup I_M$\n' +
          '  Symmetrische Hülle: $R \\cup R^{-1}$ (füge alle „Rückpfeile" hinzu)\n' +
          '  Transitive Hülle: $R \\cup R^2 \\cup R^3 \\cup \\ldots$ (iterierte Komposition, bis nichts Neues entsteht)\n\n' +
          'Dabei ist $R^2 = R \\circ R$ (Selbstkomposition), $R^3 = R \\circ R^2$, etc.\n\n' +
          'Kleinste Äquivalenzrelation ⊇ $S$: Reflexive Hülle → symmetrische Hülle → transitive Hülle',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '(a) Reflexive Hülle von $R_<$:\n' +
          '  Füge alle $(x,x)$ hinzu: $R_< \\cup \\{(x,x) : x \\in \\mathbb{R}\\} = R_{\\leq}$\n\n' +
          '(b) Symmetrische Hülle von $R_{\\leq}$:\n' +
          '  $R_{\\leq} \\cup R_{\\leq}^{-1} = \\{x \\leq y\\} \\cup \\{y \\leq x\\} = \\mathbb{R} \\times \\mathbb{R}$\n\n' +
          '(c) Transitive Hülle – iterativ:\n' +
          '  $R^2 = R \\circ R$: Suche Ketten $a \\to b \\to c$ in $R$ ($(a,b)$ und $(b,c)$ beide in $R$)\n' +
          '  Wiederhole mit $R \\cup R^2$ bis keine neuen Paare entstehen\n\n' +
          '(d) Schritt-für-Schritt:\n' +
          '  1. Reflexive Hülle von $S$: $S_r = S \\cup \\{(1,1),(2,2),(3,3),(4,4),(5,5),(6,6)\\}$\n' +
          '  2. Symmetrische Hülle: $(S_r)_s = S_r \\cup S_r^{-1}$\n' +
          '  3. Transitive Hülle: iterativ vervollständigen',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Transitive Hülle von (c) Schritt für Schritt:\n\n' +
          '$R = \\{(1,2),(1,3),(2,3),(3,4),(5,6)\\}$\n\n' +
          '$R^2$ (Ketten der Länge 2):\n' +
          '  $(1,2),(2,3) \\in R$ → $(1,3) \\in R^2$ (war schon in $R$)\n' +
          '  $(1,3),(3,4) \\in R$ → $(1,4) \\in R^2$\n' +
          '  $(2,3),(3,4) \\in R$ → $(2,4) \\in R^2$\n' +
          '$R^2 = \\{(1,3),(1,4),(2,4)\\}$ (neu: $(1,4),(2,4)$)\n\n' +
          '$R^3 = R \\circ R^2$:\n' +
          '  $(1,2),(2,4) \\in R^2$ → $(1,4)$ (schon da)\n' +
          '  Keine neuen Paare mehr.\n\n' +
          'Transitive Hülle: $R \\cup R^2 = \\{(1,2),(1,3),(2,3),(3,4),(5,6),(1,4),(2,4)\\}$',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Transitive Hülle zu früh abbrechen: Iterieren, bis wirklich keine neuen Paare mehr entstehen.\n\n' +
          '• (b): Die symmetrische Hülle von $R_{\\leq}$ ist die gesamte Ebene $\\mathbb{R} \\times \\mathbb{R}$, weil für jedes Paar $(x,y)$ gilt: entweder $x \\leq y$ oder $y \\leq x$.\n\n' +
          '• (d): Alle drei Hüllen nacheinander anwenden (reflexiv → symmetrisch → transitiv), NICHT nur die transitive!',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Für (c): Ist die transitive Hülle wirklich transitiv?\n' +
          '  $(1,2),(2,4)$ im Ergebnis → $(1,4)$ auch? Ja ✓\n' +
          '  $(1,3),(3,4)$ im Ergebnis → $(1,4)$ auch? Ja ✓\n\n' +
          'Für (d): Bilden die Äquivalenzklassen eine Partition von $\\{1,\\ldots,6\\}$?\n' +
          '  Erwartete Klassen: $[1] = \\{1,2,5\\}$, $[3] = \\{3,4\\}$, $[6] = \\{6\\}$\n' +
          '  Vereinigung: $\\{1,2,3,4,5,6\\}$ ✓',
      },
    ],
    loesung:
      '(a) $R_< \\cup I_{\\mathbb{R}} = R_{\\leq}$ (die „kleiner-gleich"-Relation).\n\n' +
      '(b) $R_{\\leq} \\cup R_{\\leq}^{-1} = \\mathbb{R} \\times \\mathbb{R}$.\n\n' +
      '(c) Trans. Hülle: $\\{(1,2),(1,3),(2,3),(3,4),(5,6),(1,4),(2,4)\\}$.\n\n' +
      '(d) Kleinste Äquivalenzrelation enthält alle Paare innerhalb der Klassen $\\{1,2,5\\}$, $\\{3,4\\}$, $\\{6\\}$.\n' +
      'Äquivalenzklassen: $[1]=\\{1,2,5\\}$, $[3]=\\{3,4\\}$, $[6]=\\{6\\}$.',
    schwierigkeit: 'schwer',
    kategorie: 'Relationen',
  },
  {
    id: 'b4_a6',
    titel: 'Charakterisierungen von Relationseigenschaften',
    aufgabeText:
      'Sei $R$ eine Relation auf einer nicht-leeren Menge $M$ und $I_M = \\{(x,x) : x \\in M\\}$ die Identitätsrelation. Ordnen Sie zu (reflexiv, irreflexiv, symmetrisch, asymmetrisch, transitiv, antisymmetrisch):\n\n' +
      '(i)  $R \\cap R^{-1} \\subseteq I_M$\n' +
      '(ii) $R \\circ R \\subseteq R$\n' +
      '(iii) $R \\cap R^{-1} = \\emptyset$\n' +
      '(iv) $I_M \\cap R = \\emptyset$\n' +
      '(v)  $R^{-1} = R$\n' +
      '(vi) $I_M \\subseteq R$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Mengenschreibweise für Relationen – die nötigen Begriffe:\n\n' +
          '  $I_M = \\{(x,x) : x \\in M\\}$: Die Identitätsrelation (alle reflexiven Paare)\n' +
          '  $R^{-1} = \\{(y,x) : (x,y) \\in R\\}$: Die Umkehrrelation (alle Paare umgedreht)\n' +
          '  $R \\circ R = \\{(x,z) : \\exists y\\,(x,y) \\in R \\wedge (y,z) \\in R\\}$: Selbstkomposition\n\n' +
          'Eigenschaften in Mengensprache:\n' +
          '  Reflexiv: $I_M \\subseteq R$ (alle Diagonal-Paare sind in $R$)\n' +
          '  Irreflexiv: $I_M \\cap R = \\emptyset$ (kein Diagonal-Paar in $R$)\n' +
          '  Symmetrisch: $R^{-1} = R$ (Umkehrrelation = Relation)\n' +
          '  Antisymmetrisch: $R \\cap R^{-1} \\subseteq I_M$ (Hin und Zurück nur bei gleichen)',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Übersetze jede Charakterisierung verbal:\n\n' +
          '(i) $R \\cap R^{-1} \\subseteq I_M$: „Wenn $(x,y) \\in R$ und $(y,x) \\in R$, dann $x = y$"\n' +
          '  → Antisymmetrie\n\n' +
          '(ii) $R \\circ R \\subseteq R$: „Wenn $xRy$ und $yRz$, dann $xRz$"\n' +
          '  → Transitivität\n\n' +
          '(iii) $R \\cap R^{-1} = \\emptyset$: „$(x,y) \\in R$ und $(y,x) \\in R$ ist unmöglich"\n' +
          '  → Asymmetrie\n\n' +
          '(iv) $I_M \\cap R = \\emptyset$: „Kein $(x,x) \\in R$"\n' +
          '  → Irreflexivität\n\n' +
          '(v) $R^{-1} = R$: „$(x,y) \\in R \\Leftrightarrow (y,x) \\in R$"\n' +
          '  → Symmetrie\n\n' +
          '(vi) $I_M \\subseteq R$: „Alle $(x,x) \\in R$"\n' +
          '  → Reflexivität',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Zur Illustration mit der Teilbarkeitsrelation auf $\\mathbb{N}^*$:\n\n' +
          '  $R = \\{(m,n) : m \\mid n\\}$\n\n' +
          '  $I_{\\mathbb{N}^*} \\subseteq R$: Jede Zahl teilt sich selbst → reflexiv ✓  (Fall vi)\n\n' +
          '  $R \\cap R^{-1} \\subseteq I_{\\mathbb{N}^*}$: $m \\mid n$ und $n \\mid m$ → $m = n$ → antisymmetrisch ✓  (Fall i)\n\n' +
          '  $R \\circ R \\subseteq R$: $m \\mid n$ und $n \\mid k$ → $m \\mid k$ → transitiv ✓  (Fall ii)',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Antisymmetrisch ≠ Asymmetrisch:\n' +
          '  Antisymmetrisch (i): Hin und Zurück nur bei $x=y$ erlaubt\n' +
          '  Asymmetrisch (iii): Hin und Zurück ist NIEMALS möglich\n\n' +
          '• $R^{-1} = R$ ist SYMMETRIE (v), nicht Reflexivität.\n\n' +
          '• $R \\circ R \\subseteq R$ ist die TRANSITIVITÄT (ii) in Mengensprache.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Überprüfe: Kann eine Relation gleichzeitig symmetrisch und asymmetrisch sein?\n' +
          '  Symmetrisch: $R^{-1} = R$ → $R \\cap R^{-1} = R$\n' +
          '  Asymmetrisch: $R \\cap R^{-1} = \\emptyset$\n' +
          '  Beide zusammen: $R = \\emptyset$ – nur die leere Relation!\n\n' +
          'Das zeigt, dass diese Eigenschaften im Allgemeinen unverträglich sind.',
      },
    ],
    loesung:
      '(i)  $R \\cap R^{-1} \\subseteq I_M$ → antisymmetrisch\n\n' +
      '(ii) $R \\circ R \\subseteq R$ → transitiv\n\n' +
      '(iii) $R \\cap R^{-1} = \\emptyset$ → asymmetrisch\n\n' +
      '(iv) $I_M \\cap R = \\emptyset$ → irreflexiv\n\n' +
      '(v)  $R^{-1} = R$ → symmetrisch\n\n' +
      '(vi) $I_M \\subseteq R$ → reflexiv',
    schwierigkeit: 'einfach',
    kategorie: 'Relationen',
  },
]
