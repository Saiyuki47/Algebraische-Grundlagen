import type { Aufgabe } from '../../types'

// Hinweis: Aufgabe 1 von Blatt 4 ist wortgleich mit Aufgabe 6 von Blatt 3
// (Relationen R1–R4). Das Übungsblatt verweist dafür auf die bereits in
// blatt3.ts vorhandenen Karten b3_a6a–b3_a6d.

export const b4: Aufgabe[] = [
  // ─── Aufgabe 2: Äquivalenzrelationen erkennen (a/b/c/d) ────────────────────
  {
    id: 'b4_a2a',
    titel: 'Äquivalenzrelation? – $y-x$ durch 2 oder 3 teilbar ($R_1$)',
    aufgabeText: 'Welche der folgenden Relationen sind Äquivalenzrelationen? Geben Sie bei Äquivalenzrelationen die Äquivalenzklassen an.\n\nDie Relation $R_1$ auf $\\mathbb{Z}$ sei definiert durch $x\\,R_1\\,y$, falls $y - x$ durch $2$ oder durch $3$ teilbar ist.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was prüfen wir?',
        inhalt:
          'Eine Äquivalenzrelation ist reflexiv, symmetrisch UND transitiv. Wir prüfen alle drei. Das „oder" (teilbar durch 2 oder durch 3) ist hier der kritische Punkt für die Transitivität.\n\n' +
          '„$d$ teilt $z$" heißt: $z$ ist ein Vielfaches von $d$, also $z = d \\cdot k$ für ein ganzes $k$.',
      },
      {
        icon: '🔍',
        titel: 'Reflexiv und symmetrisch',
        inhalt:
          'Reflexiv? $y - x$ mit $x = y$ ergibt $0$. Ist $0$ durch $2$ teilbar? Ja ($0 = 2\\cdot 0$). Also gilt $x\\,R_1\\,x$. ✓\n\n' +
          'Symmetrisch? Wenn $y - x$ durch $2$ oder $3$ teilbar ist, dann ist auch $x - y = -(y-x)$ durch dieselbe Zahl teilbar (Vorzeichen ändert die Teilbarkeit nicht). ✓',
      },
      {
        icon: '📝',
        titel: 'Transitivität widerlegen',
        inhalt:
          'Für Transitivität reicht EIN Gegenbeispiel. Suche Zahlen, bei denen die Differenzen einzeln durch 2 bzw. 3 teilbar sind, die Gesamtdifferenz aber nicht:\n\n' +
          'Nimm $x = 0$, $y = 2$, $z = 5$.\n' +
          '  $y - x = 2$ → durch 2 teilbar, also $0\\,R_1\\,2$. ✓\n' +
          '  $z - y = 3$ → durch 3 teilbar, also $2\\,R_1\\,5$. ✓\n' +
          '  $z - x = 5$ → weder durch 2 noch durch 3 teilbar, also NICHT $0\\,R_1\\,5$. ✗\n\n' +
          'Damit ist $R_1$ nicht transitiv.',
      },
      {
        icon: '⚠️',
        titel: 'Folgerung',
        inhalt:
          '• Da die Transitivität fehlt, ist $R_1$ keine Äquivalenzrelation (Äquivalenzklassen entfallen).',
      },
    ],
    loesung:
      '$R_1$ ist KEINE Äquivalenzrelation, da sie nicht transitiv ist.\n\n' +
      'Gegenbeispiel: $0\\,R_1\\,2$ (denn $2-0=2$ ist durch 2 teilbar) und $2\\,R_1\\,5$ (denn $5-2=3$ ist durch 3 teilbar), aber NICHT $0\\,R_1\\,5$ (denn $5-0=5$ ist weder durch 2 noch durch 3 teilbar).',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },
  {
    id: 'b4_a2b',
    titel: 'Äquivalenzrelation? – $xy > 0$ ($R_2$)',
    aufgabeText: 'Welche der folgenden Relationen sind Äquivalenzrelationen? Geben Sie bei Äquivalenzrelationen die Äquivalenzklassen an.\n\nDie Relation $R_2$ auf $\\mathbb{R} \\setminus \\{0\\}$ sei definiert durch $x\\,R_2\\,y$, falls $xy > 0$ ist.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was bedeutet $xy > 0$?',
        inhalt:
          'Ein Produkt $xy$ ist genau dann positiv, wenn $x$ und $y$ DASSELBE Vorzeichen haben (beide positiv oder beide negativ). Bei unterschiedlichen Vorzeichen wäre das Produkt negativ.\n\n' +
          'Die Grundmenge $\\mathbb{R} \\setminus \\{0\\}$ sind alle reellen Zahlen außer der Null, also gibt es kein Vorzeichen-Problem mit 0.\n\n' +
          'Die Relation bedeutet also: „$x$ und $y$ haben gleiches Vorzeichen".',
      },
      {
        icon: '🔍',
        titel: 'Eigenschaften prüfen',
        inhalt:
          'Reflexiv? $x \\cdot x = x^2 > 0$ für alle $x \\neq 0$. ✓\n\n' +
          'Symmetrisch? $xy = yx$, also egal in welcher Reihenfolge. ✓\n\n' +
          'Transitiv? Haben $x,y$ gleiches Vorzeichen und $y,z$ gleiches Vorzeichen, so haben auch $x,z$ gleiches Vorzeichen. ✓',
      },
      {
        icon: '📝',
        titel: 'Äquivalenzklassen',
        inhalt:
          'Es gibt genau zwei Vorzeichen-Gruppen:\n' +
          '  die positiven Zahlen: $(0, \\infty)$\n' +
          '  die negativen Zahlen: $(-\\infty, 0)$\n\n' +
          'Das sind die beiden Äquivalenzklassen.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Die Null ist ausgeschlossen, deshalb gibt es keine dritte Klasse. Mit Null wäre die Relation nicht reflexiv ($0 \\cdot 0 = 0 \\not> 0$).',
      },
    ],
    loesung:
      '$R_2$ ist eine Äquivalenzrelation.\n\n' +
      'Begründung: $xy > 0$ heißt $x$ und $y$ haben gleiches Vorzeichen. Reflexiv ($x^2 > 0$), symmetrisch ($xy = yx$), transitiv (gleiches Vorzeichen überträgt sich).\n\n' +
      'Äquivalenzklassen: $(0, \\infty)$ (positive Zahlen) und $(-\\infty, 0)$ (negative Zahlen).',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },
  {
    id: 'b4_a2c',
    titel: 'Äquivalenzrelation? – $x+y$ ungerade ($R_3$)',
    aufgabeText: 'Welche der folgenden Relationen sind Äquivalenzrelationen? Geben Sie bei Äquivalenzrelationen die Äquivalenzklassen an.\n\nDie Relation $R_3$ auf $\\mathbb{Z}$ sei definiert durch $x\\,R_3\\,y$, falls $x + y$ eine ungerade Zahl ist.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Wann ist eine Summe ungerade?',
        inhalt:
          'Eine Summe $x + y$ ist genau dann ungerade, wenn die beiden Zahlen UNTERSCHIEDLICHE Parität haben (eine gerade, eine ungerade).\n\n' +
          'Diese „unterschiedlich"-Bedingung ist der Grund, warum es schiefgeht – schon die Reflexivität bricht.',
      },
      {
        icon: '🔍',
        titel: 'Reflexivität widerlegen',
        inhalt:
          'Reflexiv? Wir bräuchten $x\\,R_3\\,x$, also $x + x = 2x$ ungerade. Aber $2x$ ist IMMER gerade. Also gilt $x\\,R_3\\,x$ für KEIN $x$. → nicht reflexiv.',
      },
      {
        icon: '📝',
        titel: 'Transitivität widerlegen',
        inhalt:
          'Auch die Transitivität fehlt. Gegenbeispiel:\n' +
          '  $1 + 2 = 3$ ungerade → $1\\,R_3\\,2$. ✓\n' +
          '  $2 + 3 = 5$ ungerade → $2\\,R_3\\,3$. ✓\n' +
          '  $1 + 3 = 4$ gerade → NICHT $1\\,R_3\\,3$. ✗',
      },
      {
        icon: '⚠️',
        titel: 'Folgerung',
        inhalt:
          '• $R_3$ ist weder reflexiv noch transitiv → keine Äquivalenzrelation. (Sie ist allerdings symmetrisch, das genügt aber nicht.)',
      },
    ],
    loesung:
      '$R_3$ ist KEINE Äquivalenzrelation, da sie nicht reflexiv und nicht transitiv ist.\n\n' +
      'Nicht reflexiv: $x + x = 2x$ ist immer gerade, also nie ungerade.\n' +
      'Nicht transitiv: $1\\,R_3\\,2$ ($1+2=3$ ungerade) und $2\\,R_3\\,3$ ($2+3=5$ ungerade), aber NICHT $1\\,R_3\\,3$ ($1+3=4$ gerade).',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },
  {
    id: 'b4_a2d',
    titel: 'Äquivalenzrelation? – $x^2 = y^2$ ($R_4$)',
    aufgabeText: 'Welche der folgenden Relationen sind Äquivalenzrelationen? Geben Sie bei Äquivalenzrelationen die Äquivalenzklassen an.\n\nDie Relation $R_4$ auf $\\mathbb{R}$ sei definiert durch $x\\,R_4\\,y$, falls $x^2 = y^2$ gilt.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Relation der Form $f(x) = f(y)$',
        inhalt:
          'Mit $f(x) = x^2$ ist $x\\,R_4\\,y$ genau dann, wenn $f(x) = f(y)$. Und jede solche Relation ist automatisch eine Äquivalenzrelation (Gleichheit ist reflexiv, symmetrisch, transitiv).',
      },
      {
        icon: '🔍',
        titel: 'Wann ist $x^2 = y^2$?',
        inhalt:
          '$x^2 = y^2$ ist gleichbedeutend mit $|x| = |y|$, also $y = x$ oder $y = -x$.\n\n' +
          'Beispiel: $3^2 = (-3)^2 = 9$, also $3\\,R_4\\,(-3)$. Eine Zahl und ihr Negatives stehen in Relation.',
      },
      {
        icon: '📝',
        titel: 'Äquivalenzklassen',
        inhalt:
          'Jede Klasse enthält eine Zahl und ihr Negatives: $\\{x, -x\\}$.\n\n' +
          '  Für $x = 0$: die Klasse $\\{0\\}$ (denn $-0 = 0$).\n' +
          '  Für $x > 0$: die Klasse $\\{x, -x\\}$ mit zwei Elementen.\n\n' +
          'Man kann alle Klassen durch die nichtnegativen Vertreter beschreiben: $\\{\\{x, -x\\} : x \\geq 0\\}$.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Die Klasse von $0$ hat nur ein Element, alle anderen Klassen genau zwei.',
      },
    ],
    loesung:
      '$R_4$ ist eine Äquivalenzrelation.\n\n' +
      'Begründung: Mit $f(x) = x^2$ ist $x\\,R_4\\,y \\Leftrightarrow f(x) = f(y)$; solche Relationen sind stets reflexiv, symmetrisch und transitiv. Es gilt $x^2 = y^2 \\Leftrightarrow y = x$ oder $y = -x$.\n\n' +
      'Menge der Äquivalenzklassen: $\\{\\{x, -x\\} : x \\geq 0\\}$.',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },

  // ─── Aufgabe 3: Relation aus Äquivalenzklassen rekonstruieren (a/b/c) ──────
  {
    id: 'b4_a3a',
    titel: 'Relation aus Klassen rekonstruieren – drei Klassen',
    aufgabeText: 'Die Äquivalenzrelation $R$ auf $\\{1,2,3,4,5,6\\}$ führe auf die drei Äquivalenzklassen $\\{1,3,4\\}$, $\\{2,5\\}$ und $\\{6\\}$. Geben Sie $R$ an, indem Sie alle Elemente von $R$ auflisten.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Klassen → Relation',
        inhalt:
          'Eine Äquivalenzklasse ist eine Gruppe von Elementen, die alle untereinander in Relation stehen. Innerhalb einer Klasse ist also JEDES Paar (in beide Richtungen, inklusive jedem Element mit sich selbst) in $R$.\n\n' +
          'Zwischen verschiedenen Klassen steht NICHTS in Relation.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehen pro Klasse',
        inhalt:
          'Für eine Klasse mit $k$ Elementen gehören $k \\times k = k^2$ Paare zu $R$ (alle Kombinationen).\n\n' +
          '  Klasse $\\{1,3,4\\}$ (3 Elemente): $3^2 = 9$ Paare.\n' +
          '  Klasse $\\{2,5\\}$ (2 Elemente): $2^2 = 4$ Paare.\n' +
          '  Klasse $\\{6\\}$ (1 Element): $1^2 = 1$ Paar.\n\n' +
          'Insgesamt $9 + 4 + 1 = 14$ Paare.',
      },
      {
        icon: '📝',
        titel: 'Paare auflisten',
        inhalt:
          'Klasse $\\{1,3,4\\}$: alle Paare aus $\\{1,3,4\\}$:\n' +
          '  $(1,1),(3,3),(4,4)$ (Diagonale)\n' +
          '  $(1,3),(3,1),(1,4),(4,1),(3,4),(4,3)$ (gemischt, beide Richtungen)\n\n' +
          'Klasse $\\{2,5\\}$: $(2,2),(5,5),(2,5),(5,2)$\n\n' +
          'Klasse $\\{6\\}$: $(6,6)$',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Die Diagonale (Paare $(x,x)$) nicht vergessen – sie sorgt für die Reflexivität.\n\n' +
          '• Beide Richtungen aufschreiben: zu $(1,3)$ gehört auch $(3,1)$ (Symmetrie).',
      },
    ],
    loesung:
      '$R = \\{(1,1),(3,3),(4,4),(1,3),(3,1),(1,4),(4,1),(3,4),(4,3),\\ (2,2),(5,5),(2,5),(5,2),\\ (6,6)\\}$\n\n' +
      'Das sind alle Paare innerhalb der Klassen $\\{1,3,4\\}$ (9 Paare), $\\{2,5\\}$ (4 Paare) und $\\{6\\}$ (1 Paar), zusammen 14 Paare.',
    schwierigkeit: 'einfach',
    kategorie: 'Relationen',
  },
  {
    id: 'b4_a3b',
    titel: 'Relation aus Klassen rekonstruieren – einelementige Klassen',
    aufgabeText: 'Die Äquivalenzrelation $S$ auf $\\mathbb{N}$ führe auf die einelementigen Äquivalenzklassen $\\{0\\}, \\{1\\}, \\{2\\}, \\ldots$. Geben Sie $S$ an.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was bedeuten einelementige Klassen?',
        inhalt:
          'Jede Klasse enthält nur ein einziges Element. Das heißt: jede Zahl steht nur mit sich selbst in Relation, mit keiner anderen.',
      },
      {
        icon: '🔍',
        titel: 'Die zugehörige Relation',
        inhalt:
          'Aus einer einelementigen Klasse $\\{n\\}$ entsteht genau das eine Paar $(n,n)$.\n\n' +
          'Insgesamt also alle Paare der Form $(n,n)$ – das ist die Identitätsrelation.',
      },
      {
        icon: '📝',
        titel: 'Lösung notieren',
        inhalt:
          '$S = \\{(n,n) : n \\in \\mathbb{N}\\}$\n\n' +
          'Das ist die kleinstmögliche Äquivalenzrelation (nur die Diagonale).',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Diese Relation heißt auch Identitätsrelation oder Gleichheitsrelation.',
      },
    ],
    loesung:
      '$S = \\{(n,n) : n \\in \\mathbb{N}\\}$\n\n' +
      'Da jede Klasse nur ein Element hat, steht jede Zahl nur mit sich selbst in Relation. Das ist die Identitätsrelation.',
    schwierigkeit: 'einfach',
    kategorie: 'Relationen',
  },
  {
    id: 'b4_a3c',
    titel: 'Relation aus Klassen rekonstruieren – nur eine Klasse',
    aufgabeText: 'Die Äquivalenzrelation $T$ auf $\\mathbb{N}$ führe auf nur eine Äquivalenzklasse, nämlich $\\mathbb{N}$. Geben Sie $T$ an.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was bedeutet eine einzige Klasse?',
        inhalt:
          'Wenn es nur eine Klasse gibt und diese die ganze Menge $\\mathbb{N}$ ist, dann steht JEDES Element mit JEDEM in Relation.',
      },
      {
        icon: '🔍',
        titel: 'Die zugehörige Relation',
        inhalt:
          'Alle Paare $(m,n)$ aus $\\mathbb{N} \\times \\mathbb{N}$ gehören zu $T$. Das ist die Allrelation.',
      },
      {
        icon: '📝',
        titel: 'Lösung notieren',
        inhalt:
          '$T = \\mathbb{N} \\times \\mathbb{N}$\n\n' +
          'Das ist die größtmögliche Äquivalenzrelation (alle Paare).',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Teil (b) ergab die kleinste Äquivalenzrelation, Teil (c) die größte – die beiden Extremfälle.',
      },
    ],
    loesung:
      '$T = \\mathbb{N} \\times \\mathbb{N}$\n\n' +
      'Da alle Elemente in einer einzigen Klasse liegen, steht jedes Element mit jedem in Relation – das sind alle Paare aus $\\mathbb{N} \\times \\mathbb{N}$.',
    schwierigkeit: 'einfach',
    kategorie: 'Relationen',
  },

  // ─── Aufgabe 4: Verkettung und Umkehrrelation ─────────────────────────────
  {
    id: 'b4_a4',
    titel: 'Verkettung $S \\circ R$ und Umkehrrelation',
    aufgabeText:
      'Sind $A, B, C$ Mengen und $R \\subseteq A \\times B$, $S \\subseteq B \\times C$, so ist die Verkettung (Verknüpfung) der Relationen $S$ und $R$ gegeben durch\n' +
      '$S \\circ R = \\{(a,c) \\in A \\times C : \\exists\\, b \\in B \\text{ so dass } (a,b) \\in R \\text{ und } (b,c) \\in S\\}$.\n\n' +
      'Seien $A = B = \\{1,2,3,4,5\\}$ und $C = \\{6,7,8,9,10\\}$,\n' +
      '$R := \\{(1,2),(2,3),(3,4),(4,5),(5,1)\\} \\subseteq A \\times B$\n' +
      'und $S := \\{(1,8),(1,9),(1,6),(2,6),(3,7),(3,10),(5,7)\\} \\subseteq B \\times C$.\n\n' +
      'Bilden Sie die Verknüpfung $S \\circ R$. Geben Sie dann die Umkehrrelation von $S \\circ R$ an.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Verkettung verstehen',
        inhalt:
          '$S \\circ R$ verknüpft zwei Schritte: Erst geht man mit $R$ von $a$ nach $b$, dann mit $S$ von $b$ nach $c$. Das Paar $(a,c)$ landet in $S \\circ R$, wenn es ein „Zwischenelement" $b$ gibt, das beide Schritte verbindet.\n\n' +
          'Achtung Leserichtung: $S \\circ R$ wird von rechts nach links gelesen – zuerst $R$, dann $S$.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehen Schritt für Schritt',
        inhalt:
          'Gehe jedes Paar $(a,b) \\in R$ durch und suche in $S$ alle Paare, die bei genau diesem $b$ beginnen:\n\n' +
          '  $(1,2) \\in R$: in $S$ beginnt mit 2: $(2,6)$ → liefert $(1,6)$\n' +
          '  $(2,3) \\in R$: in $S$ beginnt mit 3: $(3,7),(3,10)$ → liefert $(2,7),(2,10)$\n' +
          '  $(3,4) \\in R$: in $S$ beginnt mit 4: keins → nichts\n' +
          '  $(4,5) \\in R$: in $S$ beginnt mit 5: $(5,7)$ → liefert $(4,7)$\n' +
          '  $(5,1) \\in R$: in $S$ beginnt mit 1: $(1,8),(1,9),(1,6)$ → liefert $(5,8),(5,9),(5,6)$',
      },
      {
        icon: '📝',
        titel: 'Umkehrrelation bilden',
        inhalt:
          'Die Umkehrrelation $(S \\circ R)^{-1}$ entsteht, indem man bei jedem Paar die beiden Einträge VERTAUSCHT:\n' +
          '  aus $(a,c)$ wird $(c,a)$.\n\n' +
          'Beispiel: aus $(1,6)$ wird $(6,1)$.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Reihenfolge: Das verbindende $b$ ist die ZWEITE Komponente in $R$ und die ERSTE in $S$.\n\n' +
          '• Bei $(3,4) \\in R$ gibt es kein passendes $S$-Paar (kein $(4,\\cdot)$ in $S$), also entsteht hier kein Paar.',
      },
    ],
    loesung:
      'Man verknüpft jedes Paar $(a,b) \\in R$ mit allen $(b,c) \\in S$ über das gemeinsame $b$:\n' +
      '  über $(1,2),(2,6)$: $(1,6)$\n' +
      '  über $(2,3),(3,7),(3,10)$: $(2,7),(2,10)$\n' +
      '  über $(4,5),(5,7)$: $(4,7)$\n' +
      '  über $(5,1),(1,8),(1,9),(1,6)$: $(5,8),(5,9),(5,6)$\n' +
      '  über $(3,4)$: kein passendes $S$-Paar → nichts\n\n' +
      '$S \\circ R = \\{(1,6),(2,7),(2,10),(4,7),(5,8),(5,9),(5,6)\\}$\n\n' +
      'Umkehrrelation (beide Komponenten vertauscht):\n' +
      '$(S \\circ R)^{-1} = \\{(6,1),(7,2),(10,2),(7,4),(8,5),(9,5),(6,5)\\}$',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },

  // ─── Aufgabe 5: Hüllen (a/b/c/d) ──────────────────────────────────────────
  {
    id: 'b4_a5a',
    titel: 'Reflexive Hülle der „kleiner"-Relation',
    aufgabeText: 'Was ist die reflexive Hülle der „kleiner"-Relation $R_< = \\{(x,y) \\in \\mathbb{R} \\times \\mathbb{R} : x < y\\}$ auf $\\mathbb{R}$?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was ist eine reflexive Hülle?',
        inhalt:
          'Die reflexive Hülle einer Relation $R$ ist die KLEINSTE reflexive Relation, die $R$ enthält. Praktisch: man fügt zu $R$ genau die fehlenden Diagonalpaare $(x,x)$ hinzu, damit sie reflexiv wird – und sonst nichts.\n\n' +
          'Formel: reflexive Hülle $= R \\cup \\{(x,x) : x \\in M\\}$.',
      },
      {
        icon: '🔍',
        titel: 'Auf $R_<$ angewandt',
        inhalt:
          '$R_<$ enthält alle Paare mit $x < y$, aber kein Paar $(x,x)$ (denn $x < x$ ist falsch). Wir ergänzen alle $(x,x)$:\n' +
          '  $R_< \\cup \\{(x,x) : x \\in \\mathbb{R}\\}$\n\n' +
          'Das bedeutet: $x < y$ ODER $x = y$, also $x \\leq y$.',
      },
      {
        icon: '📝',
        titel: 'Ergebnis',
        inhalt:
          'Die reflexive Hülle von $R_<$ ist die „kleiner-gleich"-Relation $R_\\leq = \\{(x,y) : x \\leq y\\}$.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• „Kleinste reflexive Relation": Man fügt nur die Diagonale hinzu, keine weiteren Paare.',
      },
    ],
    loesung:
      'Die reflexive Hülle entsteht durch Hinzufügen der Diagonale:\n' +
      '  $R_< \\cup \\{(x,x) : x \\in \\mathbb{R}\\} = R_\\leq$\n\n' +
      'Das ist die „kleiner-gleich"-Relation $\\{(x,y) : x \\leq y\\}$.',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },
  {
    id: 'b4_a5b',
    titel: 'Symmetrische Hülle der „kleiner-gleich"-Relation',
    aufgabeText: 'Was ist die symmetrische Hülle der „kleiner-gleich"-Relation $R_\\leq = \\{(x,y) \\in \\mathbb{R} \\times \\mathbb{R} : x \\leq y\\}$ auf $\\mathbb{R}$?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was ist eine symmetrische Hülle?',
        inhalt:
          'Die symmetrische Hülle ist die kleinste symmetrische Relation, die $R$ enthält. Man fügt zu jedem Paar $(x,y)$ auch das umgekehrte Paar $(y,x)$ hinzu.\n\n' +
          'Formel: symmetrische Hülle $= R \\cup R^{-1}$ (Relation vereinigt mit ihrer Umkehrung).',
      },
      {
        icon: '🔍',
        titel: 'Auf $R_\\leq$ angewandt',
        inhalt:
          '$R_\\leq$ enthält alle Paare mit $x \\leq y$. Die Umkehrung $R_\\leq^{-1}$ enthält alle Paare mit $y \\leq x$ (also $x \\geq y$).\n\n' +
          'Vereinigung: alle Paare mit $x \\leq y$ ODER $x \\geq y$.',
      },
      {
        icon: '📝',
        titel: 'Ergebnis',
        inhalt:
          'Für JE ZWEI reelle Zahlen gilt immer $x \\leq y$ oder $x \\geq y$ (sie sind stets vergleichbar). Also ist die Vereinigung ganz $\\mathbb{R} \\times \\mathbb{R}$ – jedes Paar ist enthalten.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Hier wird die Hülle so groß wie möglich, weil reelle Zahlen total geordnet sind (je zwei vergleichbar).',
      },
    ],
    loesung:
      'Die symmetrische Hülle ist $R_\\leq \\cup R_\\leq^{-1}$:\n' +
      '  $\\{(x,y) : x \\leq y\\} \\cup \\{(x,y) : y \\leq x\\}$\n\n' +
      'Da für je zwei reelle Zahlen stets $x \\leq y$ oder $y \\leq x$ gilt, ergibt das alle Paare:\n' +
      '  $R_\\leq \\cup R_\\leq^{-1} = \\mathbb{R} \\times \\mathbb{R}$',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },
  {
    id: 'b4_a5c',
    titel: 'Transitive Hülle einer Relation',
    aufgabeText: 'Bilden Sie die transitive Hülle der Relation $R = \\{(1,2),(1,3),(2,3),(3,4),(5,6)\\}$ auf der Menge $\\{1,\\ldots,6\\}$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was ist eine transitive Hülle?',
        inhalt:
          'Die transitive Hülle ist die kleinste transitive Relation, die $R$ enthält. Man fügt alle Paare hinzu, die durch „Verkettung" entstehen: Gibt es einen Weg $a \\to b \\to c$, so muss auch $a \\to c$ dabei sein.\n\n' +
          'Technisch: man bildet $R, R^2, R^3, \\ldots$ und vereinigt alles. Dabei ist $R^2 = R \\circ R$ (zwei Schritte), $R^3$ (drei Schritte) usw.',
      },
      {
        icon: '🔍',
        titel: 'Potenzen berechnen',
        inhalt:
          '$R^2 = R \\circ R$: alle Paare, die in zwei Schritten erreichbar sind.\n' +
          '  $1 \\to 2 \\to 3$: $(1,3)$\n' +
          '  $1 \\to 3 \\to 4$: $(1,4)$\n' +
          '  $2 \\to 3 \\to 4$: $(2,4)$\n' +
          '  → $R^2 = \\{(1,3),(1,4),(2,4)\\}$\n\n' +
          '$R^3 = R \\circ R^2$: drei Schritte.\n' +
          '  $1 \\to 2 \\to 3 \\to 4$: $(1,4)$\n' +
          '  → $R^3 = \\{(1,4)\\}$\n\n' +
          '$R^4 = \\emptyset$ (keine längeren Wege).',
      },
      {
        icon: '📝',
        titel: 'Vereinigen',
        inhalt:
          'Transitive Hülle $= R \\cup R^2 \\cup R^3$:\n' +
          '  aus $R$: $(1,2),(1,3),(2,3),(3,4),(5,6)$\n' +
          '  neu aus $R^2$: $(1,4),(2,4)$\n' +
          '  aus $R^3$: $(1,4)$ (war schon dabei)\n\n' +
          'Der Weg $5 \\to 6$ hat keine Fortsetzung, also bleibt $(5,6)$ allein.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Man muss so lange Potenzen bilden, bis nichts Neues mehr dazukommt ($R^4 = \\emptyset$).\n\n' +
          '• Die transitive Hülle fügt KEINE Diagonalpaare hinzu (das wäre die reflexive Hülle).',
      },
    ],
    loesung:
      'Berechne die Potenzen:\n' +
      '  $R^2 = R \\circ R = \\{(1,3),(1,4),(2,4)\\}$\n' +
      '  $R^3 = R \\circ R^2 = \\{(1,4)\\}$\n' +
      '  $R^4 = \\emptyset$\n\n' +
      'Transitive Hülle $= \\bigcup_{n \\geq 1} R^n = R \\cup R^2 \\cup R^3$:\n' +
      '  $\\{(1,2),(1,3),(2,3),(3,4),(5,6),(1,4),(2,4)\\}$',
    schwierigkeit: 'schwer',
    kategorie: 'Relationen',
  },
  {
    id: 'b4_a5d',
    titel: 'Kleinste Äquivalenzrelation, die $S$ enthält',
    aufgabeText: 'Bilden Sie die kleinste Äquivalenzrelation auf $\\{1,\\ldots,6\\}$, die $S = \\{(2,1),(1,5),(3,4)\\}$ enthält. Was sind die Äquivalenzklassen?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Strategie: drei Hüllen nacheinander',
        inhalt:
          'Um aus $S$ die kleinste Äquivalenzrelation zu machen, braucht man Reflexivität, Symmetrie und Transitivität. Das erreicht man, indem man der Reihe nach bildet:\n' +
          '1. reflexive Hülle (Diagonale ergänzen)\n' +
          '2. davon die symmetrische Hülle (umgekehrte Paare ergänzen)\n' +
          '3. davon die transitive Hülle (Verkettungen ergänzen)\n\n' +
          'Die Reihenfolge reflexiv → symmetrisch → transitiv ist wichtig, damit am Ende wirklich alle Eigenschaften gelten.',
      },
      {
        icon: '🔍',
        titel: 'Schritt 1 & 2: reflexiv und symmetrisch',
        inhalt:
          'Reflexive Hülle $S_r$: $S$ plus alle $(n,n)$ für $n \\in \\{1,\\ldots,6\\}$:\n' +
          '  $S_r = \\{(2,1),(1,5),(3,4),(1,1),(2,2),(3,3),(4,4),(5,5),(6,6)\\}$\n\n' +
          'Symmetrische Hülle $(S_r)_s$: zu jedem Paar das umgekehrte ergänzen:\n' +
          '  neu: $(1,2),(5,1),(4,3)$',
      },
      {
        icon: '📝',
        titel: 'Schritt 3: transitive Hülle',
        inhalt:
          'Jetzt Verkettungen ergänzen. Aus $(2,1)$ und $(1,5)$ folgt $(2,5)$; aus Symmetrie auch $(5,2)$.\n\n' +
          'So „verschmelzen" die Elemente $1, 2, 5$ zu einer Gruppe und $3, 4$ zu einer anderen. $6$ bleibt allein.',
      },
      {
        icon: '⚠️',
        titel: 'Äquivalenzklassen ablesen',
        inhalt:
          'Am Ende erkennt man die Klassen daran, welche Elemente zusammen in Relation stehen:\n' +
          '  $[1] = \\{1,2,5\\}$, $[3] = \\{3,4\\}$, $[6] = \\{6\\}$.\n\n' +
          'Fehler vermeiden: Wirklich erst reflexiv, dann symmetrisch, dann transitiv – sonst übersieht man Paare.',
      },
    ],
    loesung:
      'Reflexive Hülle:\n' +
      '  $S_r = \\{(2,1),(1,5),(3,4),(1,1),(2,2),(3,3),(4,4),(5,5),(6,6)\\}$\n\n' +
      'Davon die symmetrische Hülle:\n' +
      '  $(S_r)_s = \\{(2,1),(1,2),(1,5),(5,1),(3,4),(4,3),(1,1),(2,2),(3,3),(4,4),(5,5),(6,6)\\}$\n\n' +
      'Davon die transitive Hülle (gesuchte Äquivalenzrelation):\n' +
      '  $((S_r)_s)_t = \\{(2,1),(1,2),(1,5),(5,1),(2,5),(5,2),(3,4),(4,3),(1,1),(2,2),(3,3),(4,4),(5,5),(6,6)\\}$\n\n' +
      'Es gibt drei Äquivalenzklassen:\n' +
      '  $[1] = \\{1,2,5\\}$, $[3] = \\{3,4\\}$, $[6] = \\{6\\}$.',
    schwierigkeit: 'schwer',
    kategorie: 'Relationen',
  },

  // ─── Aufgabe 6: mengentheoretische Charakterisierungen ────────────────────
  {
    id: 'b4_a6',
    titel: 'Mengentheoretische Charakterisierung der Eigenschaften',
    aufgabeText:
      'Sei $R$ eine Relation auf einer nicht-leeren Menge $M$ und sei $I_M = \\{(x,x) : x \\in M\\}$ die Identitätsrelation auf $M$.\n\n' +
      'Füllen Sie von den Begriffen reflexiv, irreflexiv, symmetrisch, asymmetrisch, transitiv und antisymmetrisch jeweils den passenden in die Lücken ein:\n' +
      '(a) $R$ ist genau dann ____, wenn $R \\cap R^{-1} \\subseteq I_M$ gilt.\n' +
      '(b) $R$ ist genau dann ____, wenn $R \\circ R \\subseteq R$ gilt.\n' +
      '(c) $R$ ist genau dann ____, wenn $R \\cap R^{-1} = \\emptyset$ gilt.\n' +
      '(d) $R$ ist genau dann ____, wenn $I_M \\cap R = \\emptyset$ gilt.\n' +
      '(e) $R$ ist genau dann ____, wenn $R^{-1} = R$ gilt.\n' +
      '(f) $R$ ist genau dann ____, wenn $I_M \\subseteq R$ gilt.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Bausteine der Formeln',
        inhalt:
          'Drei Zutaten tauchen auf:\n' +
          '  $R^{-1}$ = Umkehrrelation (alle Paare $(y,x)$ mit $(x,y) \\in R$).\n' +
          '  $I_M$ = Identität, also die Diagonale $\\{(x,x)\\}$.\n' +
          '  $R \\circ R$ = Verkettung (zwei Schritte hintereinander).\n\n' +
          '$\\cap$ ist Durchschnitt, $\\subseteq$ ist Teilmenge, $\\emptyset$ ist die leere Menge.',
      },
      {
        icon: '🔍',
        titel: 'Formeln mit $I_M$ deuten',
        inhalt:
          '(f) $I_M \\subseteq R$: Die ganze Diagonale steckt in $R$, also $(x,x) \\in R$ für alle $x$ → das ist genau REFLEXIV.\n\n' +
          '(d) $I_M \\cap R = \\emptyset$: Kein Diagonalpaar liegt in $R$, also nie $(x,x) \\in R$ → das ist IRREFLEXIV.',
      },
      {
        icon: '📝',
        titel: 'Formeln mit $R^{-1}$ deuten',
        inhalt:
          '(e) $R^{-1} = R$: Mit jedem $(x,y)$ ist auch $(y,x)$ in $R$ → SYMMETRISCH.\n\n' +
          '(a) $R \\cap R^{-1} \\subseteq I_M$: Wenn $(x,y)$ und $(y,x)$ beide in $R$ sind, muss $x = y$ sein → ANTISYMMETRISCH.\n\n' +
          '(c) $R \\cap R^{-1} = \\emptyset$: $(x,y)$ und $(y,x)$ können NIE beide in $R$ sein → ASYMMETRISCH.',
      },
      {
        icon: '⚠️',
        titel: 'Die Verkettungsformel',
        inhalt:
          '(b) $R \\circ R \\subseteq R$: Jeder Zwei-Schritte-Weg $x \\to y \\to z$ ist auch als direkter Schritt $x \\to z$ in $R$ → TRANSITIV.\n\n' +
          'Unterschied (a) vs. (c): antisymmetrisch erlaubt $x=y$ (Diagonale ok), asymmetrisch verbietet auch das (gar kein gemeinsames Paar).',
      },
    ],
    loesung:
      '(a) antisymmetrisch — wenn $R \\cap R^{-1} \\subseteq I_M$ gilt.\n' +
      '(b) transitiv — wenn $R \\circ R \\subseteq R$ gilt.\n' +
      '(c) asymmetrisch — wenn $R \\cap R^{-1} = \\emptyset$ gilt.\n' +
      '(d) irreflexiv — wenn $I_M \\cap R = \\emptyset$ gilt.\n' +
      '(e) symmetrisch — wenn $R^{-1} = R$ gilt.\n' +
      '(f) reflexiv — wenn $I_M \\subseteq R$ gilt.',
    schwierigkeit: 'schwer',
    kategorie: 'Relationen',
  },
]
