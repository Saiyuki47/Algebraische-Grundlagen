import type { ClaudeAufgabe } from './_types'

// ─────────────────────────────────────────────────────────────────────────────
// Blatt 3 & 4 – Relationen: Eigenschaften, Konstruktion, Äquivalenzrelationen
// und Klassen, Verkettung/Umkehrrelation, Hüllen.
// Je eine eigens erdachte Beispielaufgabe pro Aufgabenart.
// ─────────────────────────────────────────────────────────────────────────────

export const relationen: ClaudeAufgabe[] = [
  {
    id: 'c_r_eigenschaften',
    art: 'Relationseigenschaften prüfen & klassifizieren',
    titel: 'Teilmengenrelation auf einer Potenzmenge untersuchen',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 3, Aufgabe 4',
    aufgabeText:
      'Sei $M = \\{\\ \\emptyset,\\ \\{a\\},\\ \\{b\\},\\ \\{a,b\\}\\ \\}$ die Potenzmenge von $\\{a,b\\}$. Auf $M$ sei die Relation $R$ definiert durch\n' +
      '$X\\,R\\,Y \\ :\\Leftrightarrow\\ X \\subseteq Y$ (in Worten: $X$ ist Teilmenge von $Y$).\n\n' +
      'Untersuchen Sie $R$ auf Reflexivität, Symmetrie, Antisymmetrie und Transitivität. Klassifizieren Sie $R$ danach als Äquivalenz- oder als Ordnungsrelation (partiell oder total) und belegen Sie jede nicht erfüllte Eigenschaft mit einem konkreten Gegenbeispiel.',
    referenz: ['relationen-eigenschaften'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Die vier Eigenschaften kurz gefasst (für alle $X,Y,Z \\in M$):\n' +
        '• Reflexiv: $X\\,R\\,X$ gilt immer.\n' +
        '• Symmetrisch: aus $X\\,R\\,Y$ folgt $Y\\,R\\,X$.\n' +
        '• Antisymmetrisch: aus $X\\,R\\,Y$ und $Y\\,R\\,X$ folgt $X = Y$.\n' +
        '• Transitiv: aus $X\\,R\\,Y$ und $Y\\,R\\,Z$ folgt $X\\,R\\,Z$.\n\n' +
        'Hier ist $X\\,R\\,Y$ nichts anderes als $X \\subseteq Y$ – also „jedes Element von $X$ liegt auch in $Y$".' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Prüfe jede Eigenschaft an den vier Mengen aus $M$. Nutze die bekannten Regeln für $\\subseteq$: jede Menge ist Teilmenge von sich selbst; aus $X \\subseteq Y$ und $Y \\subseteq X$ folgt $X = Y$; und $\\subseteq$ überträgt sich über Zwischenschritte. Für Symmetrie und Totalität suchst du gezielt ein Paar, das die Eigenschaft bricht.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Ein einziges konkretes Gegenbeispiel genügt, um eine Eigenschaft zu widerlegen. Für die Symmetrie reicht etwa das Paar $\\emptyset$ und $\\{a\\}$: $\\emptyset \\subseteq \\{a\\}$ ist wahr, $\\{a\\} \\subseteq \\emptyset$ dagegen falsch.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Symmetrie und Antisymmetrie nicht verwechseln: Antisymmetrie verbietet nicht, dass ein Paar in beide Richtungen steht – sie verlangt nur, dass dann $X = Y$ ist. Und „partiell" heißt nicht „unvollständig", sondern nur: nicht je zwei Elemente sind vergleichbar.' },
    ],
    loesung:
      '**Reflexivität**\n' +
      'Für jede Menge gilt $X \\subseteq X$, also $X\\,R\\,X$. $R$ ist **reflexiv**. ✓\n\n' +
      '**Symmetrie**\n' +
      'Gegenbeispiel: $\\emptyset \\subseteq \\{a\\}$, also $\\emptyset\\,R\\,\\{a\\}$; aber $\\{a\\} \\subseteq \\emptyset$ ist falsch, also gilt $\\{a\\}\\,R\\,\\emptyset$ **nicht**. $R$ ist **nicht symmetrisch**. ✗\n\n' +
      '**Antisymmetrie**\n' +
      'Sind $X \\subseteq Y$ und $Y \\subseteq X$, so enthalten beide Mengen genau dieselben Elemente, also $X = Y$. $R$ ist **antisymmetrisch**. ✓\n\n' +
      '**Transitivität**\n' +
      'Aus $X \\subseteq Y$ und $Y \\subseteq Z$ folgt $X \\subseteq Z$ (jedes Element von $X$ liegt in $Y$ und damit in $Z$). $R$ ist **transitiv**. ✓\n\n' +
      '**Klassifikation**\n' +
      '$R$ ist reflexiv, antisymmetrisch und transitiv, also eine **Ordnungsrelation**. Wegen der fehlenden Symmetrie ist $R$ **keine** Äquivalenzrelation.\n\n' +
      'Ist die Ordnung total? Nein: $\\{a\\}$ und $\\{b\\}$ sind **nicht vergleichbar**, denn weder $\\{a\\} \\subseteq \\{b\\}$ noch $\\{b\\} \\subseteq \\{a\\}$. Also ist $R$ eine **partielle Ordnungsrelation** (nicht total).',
  },
  {
    id: 'c_r_konstruieren',
    art: 'Relation mit vorgegebenen Eigenschaften konstruieren',
    titel: 'Symmetrisch, aber weder reflexiv noch transitiv',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 3, Aufgabe 5',
    aufgabeText:
      'Geben Sie auf der Menge $M = \\{1,2,3\\}$ eine Relation $R$ an, die **symmetrisch** ist, aber **weder reflexiv noch transitiv**.\n\n' +
      'Weisen Sie alle drei Punkte nach: dass $R$ symmetrisch ist und dass Reflexivität und Transitivität jeweils verletzt sind.',
    referenz: ['relationen-eigenschaften'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Eine Relation auf $M$ ist eine Teilmenge von $M \\times M$, also eine Menge von Paaren. Die Forderungen bedeuten:\n' +
        '• symmetrisch: zu jedem Paar $(x,y) \\in R$ muss auch $(y,x) \\in R$ liegen.\n' +
        '• nicht reflexiv: mindestens ein Diagonalpaar $(x,x)$ fehlt.\n' +
        '• nicht transitiv: es gibt eine Kette $(x,y),(y,z) \\in R$, aber $(x,z) \\notin R$.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Baue die Relation aus symmetrischen Paketen: Nimmst du $(1,2)$ auf, muss auch $(2,1)$ hinein. Lass alle Paare $(x,x)$ bewusst weg, dann kann $R$ nicht reflexiv sein. Baue außerdem eine „geknickte" Kette $1 \\to 2 \\to 3$, deren direkte Abkürzung $(1,3)$ du weglässt – das zerstört die Transitivität.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Ein passender Kandidat ist $R = \\{(1,2),(2,1),(2,3),(3,2)\\}$. Prüfe ihn Paar für Paar: für jede der drei Eigenschaften genügt ein einziger konkreter Beleg bzw. ein einziges fehlendes Paar.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Ein Diagonalpaar wie $(1,1)$ versehentlich mit aufnehmen macht die Sache schnell reflexiv an dieser Stelle – hier soll gar kein $(x,x)$ vorkommen. Und Vorsicht: fügst du zusätzlich $(1,3)$ und $(3,1)$ hinzu, wird die Relation transitiv; genau das soll vermieden werden.' },
    ],
    loesung:
      '**Gewählte Relation**\n' +
      '$R = \\{(1,2),(2,1),(2,3),(3,2)\\}$ auf $M = \\{1,2,3\\}$.\n\n' +
      '**Symmetrisch** ✓\n' +
      'Zu $(1,2)$ liegt $(2,1)$ in $R$, zu $(2,3)$ liegt $(3,2)$ in $R$. Zu jedem Paar ist also das umgekehrte enthalten.\n\n' +
      '**Nicht reflexiv** ✗\n' +
      'Es fehlt zum Beispiel $(1,1)$: $(1,1) \\notin R$. Damit steht $1$ nicht mit sich selbst in Relation, $R$ ist nicht reflexiv (ebenso fehlen $(2,2)$ und $(3,3)$).\n\n' +
      '**Nicht transitiv** ✗\n' +
      'Es gilt $(1,2) \\in R$ und $(2,3) \\in R$, aber $(1,3) \\notin R$. Die Kette $1 \\to 2 \\to 3$ hat keine direkte Verbindung $1 \\to 3$, also ist $R$ nicht transitiv.\n\n' +
      'Damit erfüllt $R$ genau die geforderten Eigenschaften.',
  },
  {
    id: 'c_r_aequivalenz_klassen',
    art: 'Äquivalenzrelation nachweisen + Klassen bestimmen',
    titel: 'Kongruenz modulo 5 auf den ganzen Zahlen',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 3, Aufgabe 6 / Blatt 4, Aufgabe 2',
    aufgabeText:
      'Auf $\\mathbb{Z}$ sei die Relation $\\sim$ definiert durch\n' +
      '$x \\sim y \\ :\\Leftrightarrow\\ 5 \\mid (x - y)$ (in Worten: $x - y$ ist durch $5$ teilbar).\n\n' +
      'Zeigen Sie, dass $\\sim$ eine Äquivalenzrelation ist, und geben Sie alle Äquivalenzklassen an.',
    referenz: ['aequivalenz-ordnung'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        '„$5 \\mid z$" heißt: $z$ ist ein Vielfaches von $5$, also $z = 5k$ für ein $k \\in \\mathbb{Z}$. Eine Äquivalenzrelation muss reflexiv, symmetrisch und transitiv sein – diese drei Punkte sind nachzuweisen.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Für die Reflexivität setze $y = x$ und prüfe, ob $5$ die Zahl $x - x$ teilt. Für die Symmetrie nutze, dass ein Vorzeichenwechsel die Teilbarkeit nicht ändert. Für die Transitivität addiere die beiden Vielfachen: aus $x - y = 5k$ und $y - z = 5m$ wird $x - z = 5(k+m)$.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Die Äquivalenzklasse von $x$ ist $[x] = \\{\\, y \\in \\mathbb{Z} : x \\sim y \\,\\}$, also alle Zahlen mit demselben Rest bei Division durch $5$. Beispiel: $7 \\sim 2$, denn $7 - 2 = 5$ ist durch $5$ teilbar.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Nicht vergessen, dass $0 = 5 \\cdot 0$ durch $5$ teilbar ist – daran hängt die Reflexivität. Und die Anzahl der Klassen ist genau $5$ (die Reste $0,1,2,3,4$), nicht unendlich viele: verschiedene Startzahlen mit gleichem Rest liefern dieselbe Klasse.' },
    ],
    loesung:
      '**Reflexiv**\n' +
      'Für jedes $x \\in \\mathbb{Z}$ ist $x - x = 0 = 5 \\cdot 0$, also $5 \\mid (x - x)$ und damit $x \\sim x$. ✓\n\n' +
      '**Symmetrisch**\n' +
      'Gelte $x \\sim y$, also $x - y = 5k$ für ein $k \\in \\mathbb{Z}$. Dann ist $y - x = -(x - y) = 5 \\cdot (-k)$, ebenfalls durch $5$ teilbar. Also $y \\sim x$. ✓\n\n' +
      '**Transitiv**\n' +
      'Gelte $x \\sim y$ und $y \\sim z$, also $x - y = 5k$ und $y - z = 5m$ mit $k,m \\in \\mathbb{Z}$. Addieren ergibt\n' +
      '$x - z = (x - y) + (y - z) = 5k + 5m = 5(k + m)$,\n' +
      'also $5 \\mid (x - z)$ und damit $x \\sim z$. ✓\n\n' +
      'Somit ist $\\sim$ reflexiv, symmetrisch und transitiv, also eine **Äquivalenzrelation**.\n\n' +
      '**Äquivalenzklassen**\n' +
      'Zwei Zahlen sind genau dann äquivalent, wenn sie bei Division durch $5$ denselben Rest lassen. Es gibt die Reste $0,1,2,3,4$, also genau fünf Klassen:\n' +
      '• $[0] = \\{\\, 5k : k \\in \\mathbb{Z} \\,\\} = \\{\\dots,-5,0,5,10,\\dots\\}$\n' +
      '• $[1] = \\{\\, 5k+1 : k \\in \\mathbb{Z} \\,\\} = \\{\\dots,-4,1,6,11,\\dots\\}$\n' +
      '• $[2] = \\{\\, 5k+2 : k \\in \\mathbb{Z} \\,\\} = \\{\\dots,-3,2,7,12,\\dots\\}$\n' +
      '• $[3] = \\{\\, 5k+3 : k \\in \\mathbb{Z} \\,\\} = \\{\\dots,-2,3,8,13,\\dots\\}$\n' +
      '• $[4] = \\{\\, 5k+4 : k \\in \\mathbb{Z} \\,\\} = \\{\\dots,-1,4,9,14,\\dots\\}$\n\n' +
      'Diese fünf Klassen zerlegen $\\mathbb{Z}$ vollständig und überschneidungsfrei.',
  },
  {
    id: 'c_r_klassen_rekonstruieren',
    art: 'Relation aus Äquivalenzklassen rekonstruieren',
    titel: 'Von den Klassen zurück zur Paarmenge',
    schwierigkeit: 'einfach',
    quelle: 'Blatt 4, Aufgabe 3',
    aufgabeText:
      'Eine Äquivalenzrelation $R$ auf $M = \\{1,2,3,4,5\\}$ habe genau die Äquivalenzklassen\n' +
      '$\\{1,5\\}$, $\\{2,4\\}$ und $\\{3\\}$.\n\n' +
      'Geben Sie $R$ vollständig als Menge von Paaren an und bestimmen Sie die Anzahl der Paare.',
    referenz: ['aequivalenz-ordnung'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Eine Äquivalenzklasse ist eine Gruppe von Elementen, die alle untereinander in Relation stehen. Innerhalb einer Klasse ist deshalb **jedes** Paar in $R$ – in beide Richtungen und einschließlich jedes Elements mit sich selbst. Zwischen verschiedenen Klassen steht **nichts** in Relation.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Bearbeite die Klassen einzeln. Eine Klasse mit $k$ Elementen liefert alle $k \\cdot k = k^2$ Kombinationen als Paare. Zähle am Ende die Beiträge zusammen.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Aus der Klasse $\\{1,5\\}$ (zwei Elemente) entstehen $2^2 = 4$ Paare: die Diagonale $(1,1),(5,5)$ und die gemischten $(1,5),(5,1)$. Die einelementige Klasse $\\{3\\}$ liefert nur $(3,3)$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Die Diagonalpaare $(x,x)$ nicht vergessen – sie sichern die Reflexivität. Und zu jedem gemischten Paar gehört auch das umgekehrte (Symmetrie): zu $(2,4)$ also auch $(4,2)$.' },
    ],
    loesung:
      '**Paare pro Klasse**\n' +
      '• Klasse $\\{1,5\\}$ ($2$ Elemente, $2^2 = 4$ Paare): $(1,1),(5,5),(1,5),(5,1)$.\n' +
      '• Klasse $\\{2,4\\}$ ($2$ Elemente, $2^2 = 4$ Paare): $(2,2),(4,4),(2,4),(4,2)$.\n' +
      '• Klasse $\\{3\\}$ ($1$ Element, $1^2 = 1$ Paar): $(3,3)$.\n\n' +
      '**Gesamte Relation**\n' +
      '$R = \\{(1,1),(5,5),(1,5),(5,1),\\ (2,2),(4,4),(2,4),(4,2),\\ (3,3)\\}$\n\n' +
      '**Anzahl**\n' +
      'Insgesamt $4 + 4 + 1 = 9$ Paare.',
  },
  {
    id: 'c_r_verkettung',
    art: 'Verkettung S∘R und Umkehrrelation',
    titel: 'Verkettung und Umkehrrelation zweier endlicher Relationen',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 4, Aufgabe 4',
    aufgabeText:
      'Für Mengen $A,B,C$ und Relationen $R \\subseteq A \\times B$, $S \\subseteq B \\times C$ ist die Verkettung\n' +
      '$S \\circ R = \\{\\, (a,c) \\in A \\times C : \\exists\\, b \\in B \\text{ mit } (a,b) \\in R \\text{ und } (b,c) \\in S \\,\\}$.\n\n' +
      'Seien $A = \\{1,2,3\\}$, $B = \\{4,5,6\\}$, $C = \\{7,8,9\\}$ sowie\n' +
      '$R = \\{(1,4),(1,5),(2,6),(3,4)\\} \\subseteq A \\times B$ und\n' +
      '$S = \\{(4,7),(4,8),(5,9),(6,7)\\} \\subseteq B \\times C$.\n\n' +
      'Bestimmen Sie die Verkettung $S \\circ R$ und die Umkehrrelation $R^{-1}$.',
    referenz: ['relationen-verkettung'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        '$S \\circ R$ hängt zwei Schritte hintereinander: Mit $R$ geht man von $a$ zu einem Zwischenelement $b$, mit $S$ von $b$ weiter zu $c$. Das Paar $(a,c)$ landet genau dann in $S \\circ R$, wenn es ein passendes verbindendes $b$ gibt.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Achte auf die Leserichtung: $S \\circ R$ wird von rechts nach links abgearbeitet – **zuerst $R$, dann $S$**. Gehe jedes Paar $(a,b) \\in R$ durch und suche in $S$ alle Paare, die mit genau diesem $b$ beginnen. Jede solche Fortsetzung $(b,c)$ liefert ein Paar $(a,c)$.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Die Umkehrrelation entsteht durch Vertauschen der Komponenten: $R^{-1} = \\{\\, (b,a) : (a,b) \\in R \\,\\}$. Aus $(1,4)$ wird also $(4,1)$. Es gilt $R^{-1} \\subseteq B \\times A$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Das verbindende $b$ ist die **zweite** Komponente in $R$ und die **erste** in $S$. Gibt es zu einem $b$ kein Paar in $S$, entsteht an dieser Stelle nichts. Verwechsle die Verkettung $S \\circ R$ nicht mit der Umkehrrelation – das sind zwei verschiedene Aufgaben.' },
    ],
    loesung:
      '**Verkettung $S \\circ R$**\n' +
      'Für jedes $(a,b) \\in R$ suchen wir die Paare $(b,c) \\in S$ mit gleichem $b$:\n' +
      '• $(1,4) \\in R$, in $S$ mit $4$ beginnend: $(4,7),(4,8)$ $\\Rightarrow$ $(1,7),(1,8)$\n' +
      '• $(1,5) \\in R$, in $S$ mit $5$ beginnend: $(5,9)$ $\\Rightarrow$ $(1,9)$\n' +
      '• $(2,6) \\in R$, in $S$ mit $6$ beginnend: $(6,7)$ $\\Rightarrow$ $(2,7)$\n' +
      '• $(3,4) \\in R$, in $S$ mit $4$ beginnend: $(4,7),(4,8)$ $\\Rightarrow$ $(3,7),(3,8)$\n\n' +
      '$S \\circ R = \\{(1,7),(1,8),(1,9),(2,7),(3,7),(3,8)\\}$\n\n' +
      '**Umkehrrelation $R^{-1}$**\n' +
      'Bei jedem Paar von $R$ werden die beiden Komponenten vertauscht:\n' +
      '$R^{-1} = \\{(4,1),(5,1),(6,2),(4,3)\\} \\subseteq B \\times A$.',
  },
  {
    id: 'c_r_huellen',
    art: 'Hüllen bilden (reflexiv/symmetrisch/transitiv)',
    titel: 'Reflexive, symmetrische und transitive Hülle',
    schwierigkeit: 'schwer',
    quelle: 'Blatt 4, Aufgabe 5',
    aufgabeText:
      'Auf der Menge $M = \\{1,2,3,4,5\\}$ sei die Relation $R = \\{(1,2),(2,3),(4,5)\\}$ gegeben.\n\n' +
      'a) Bilden Sie die reflexive, die symmetrische und die transitive Hülle von $R$.\n' +
      'b) Bestimmen Sie die kleinste Äquivalenzrelation auf $M$, die $R$ enthält, und geben Sie ihre Äquivalenzklassen an.',
    referenz: ['relationen-verkettung'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Eine Hülle ist immer die **kleinste** Relation mit der gewünschten Eigenschaft, die $R$ enthält:\n' +
        '• reflexive Hülle $= R \\cup \\{(x,x) : x \\in M\\}$ (Diagonale ergänzen),\n' +
        '• symmetrische Hülle $= R \\cup R^{-1}$ (jedes umgekehrte Paar ergänzen),\n' +
        '• transitive Hülle $= R \\cup R^2 \\cup R^3 \\cup \\dots$ (alle Verkettungen ergänzen), mit $R^2 = R \\circ R$.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Für die transitive Hülle bildest du so lange Potenzen $R^2, R^3, \\dots$, bis nichts Neues mehr dazukommt, und vereinigst alles. Suche dazu die Wege der Länge $2$, dann der Länge $3$ und so weiter.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Die kleinste Äquivalenzrelation erhältst du, indem du **nacheinander** reflexiv, dann symmetrisch, dann transitiv abschließt. Die Reihenfolge ist wichtig: die bloße Vereinigung der drei einzelnen Hüllen wäre im Allgemeinen noch nicht transitiv.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Die transitive Hülle fügt **keine** Diagonalpaare hinzu – das leistet nur die reflexive Hülle. Und die Äquivalenzklassen liest man am Ende daran ab, welche Elemente über Ketten miteinander verbunden sind.' },
    ],
    loesung:
      '**a) Die drei Hüllen von $R = \\{(1,2),(2,3),(4,5)\\}$**\n\n' +
      '**Reflexive Hülle** (Diagonale ergänzen):\n' +
      '$R \\cup \\{(1,1),(2,2),(3,3),(4,4),(5,5)\\}$\n' +
      '$= \\{(1,2),(2,3),(4,5),(1,1),(2,2),(3,3),(4,4),(5,5)\\}$.\n\n' +
      '**Symmetrische Hülle** ($R \\cup R^{-1}$, umgekehrte Paare ergänzen):\n' +
      '$\\{(1,2),(2,3),(4,5),(2,1),(3,2),(5,4)\\}$.\n\n' +
      '**Transitive Hülle** (Verkettungen ergänzen):\n' +
      '$R^2 = R \\circ R$: der einzige Weg der Länge $2$ ist $1 \\to 2 \\to 3$, also $R^2 = \\{(1,3)\\}$.\n' +
      '$R^3 = \\emptyset$ (kein Weg der Länge $3$, da nach $3$ und nach $5$ nichts weitergeht).\n' +
      'Transitive Hülle $= R \\cup R^2 = \\{(1,2),(2,3),(4,5),(1,3)\\}$.\n\n' +
      '**b) Kleinste Äquivalenzrelation, die $R$ enthält**\n\n' +
      'Wir schließen nacheinander ab:\n' +
      '**Reflexiv:** $\\{(1,2),(2,3),(4,5)\\} \\cup \\{(1,1),(2,2),(3,3),(4,4),(5,5)\\}$.\n' +
      '**Dann symmetrisch:** ergänze $(2,1),(3,2),(5,4)$.\n' +
      '**Dann transitiv:** aus $1 \\to 2 \\to 3$ folgt $(1,3)$, aus der Symmetrie $3 \\to 2 \\to 1$ auch $(3,1)$.\n\n' +
      'Ergebnis:\n' +
      '$\\{(1,1),(2,2),(3,3),(1,2),(2,1),(2,3),(3,2),(1,3),(3,1),\\ (4,4),(5,5),(4,5),(5,4)\\}$\n\n' +
      'Das sind $9 + 4 = 13$ Paare. Die Elemente $1,2,3$ sind untereinander verbunden, ebenso $4,5$; die **Äquivalenzklassen** sind daher\n' +
      '$[1] = \\{1,2,3\\}$ und $[4] = \\{4,5\\}$.',
  },
]
