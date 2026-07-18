import type { ClaudeAufgabe } from './_types'

// ─────────────────────────────────────────────────────────────────────────────
// Blatt 5 & 6 – Gruppen, Restklassen, Einheiten, Prüfziffern, Homomorphismen.
// Je eine eigens erdachte Beispielaufgabe pro Aufgabenart (nicht vom Dozenten).
// ─────────────────────────────────────────────────────────────────────────────

export const gruppenRestklassen: ClaudeAufgabe[] = [
  {
    id: 'c_gr_gruppe_pruefen',
    art: 'Gruppe / Untergruppe nachweisen oder widerlegen',
    titel: 'Ist die Menge mit der Verknüpfung eine Gruppe?',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 5, Aufgaben 1/2',
    aufgabeText:
      'Prüfen Sie, ob die folgenden Paare aus Menge und Verknüpfung eine Gruppe bilden. Begründen Sie und geben Sie im Fall „keine Gruppe" genau an, welches Gruppenaxiom verletzt ist.\n\n' +
      'a) $(G, \\cdot)$ mit $G = \\{\\,2^n : n \\in \\mathbb{Z}\\,\\}$ und der üblichen Multiplikation.\n' +
      'b) $(\\mathbb{Z}, \\cdot)$, also die ganzen Zahlen mit der üblichen Multiplikation.',
    referenz: ['gruppenaxiome'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Eine Menge $M$ mit Verknüpfung $\\ast$ ist eine Gruppe, wenn vier Dinge gelten:\n' +
        '• **Abgeschlossenheit:** $a \\ast b$ liegt wieder in $M$.\n' +
        '• **Assoziativität:** $(a \\ast b) \\ast c = a \\ast (b \\ast c)$.\n' +
        '• **Neutralelement** $e$ mit $a \\ast e = e \\ast a = a$ (bei $\\cdot$ ist $e = 1$).\n' +
        '• **Inverse:** zu jedem $a$ gibt es $a^{-1}$ mit $a \\ast a^{-1} = e$.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Bei a) ist $G = \\{\\,\\dots, \\tfrac14, \\tfrac12, 1, 2, 4, 8, \\dots\\,\\}$ die Menge aller Zweierpotenzen mit ganzzahligem Exponenten. Rechne mit den Potenzgesetzen. Bei b) ist die kritische Frage: Hat wirklich **jedes** Element ein Inverses in der Menge?' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'In $(\\mathbb{Z}, \\cdot)$ gibt es ein Neutralelement ($1$) und die Verknüpfung ist abgeschlossen und assoziativ. Genau das täuscht: Man muss trotzdem die Inversen prüfen – und da scheitert es.' },
    ],
    loesung:
      '**a) $(G, \\cdot)$ IST eine Gruppe.**\n' +
      '• Abgeschlossen: $2^n \\cdot 2^m = 2^{n+m}$, und $n+m \\in \\mathbb{Z}$, also wieder in $G$. ✓\n' +
      '• Assoziativ: von der Multiplikation in $\\mathbb{R}$ geerbt. ✓\n' +
      '• Neutralelement: $1 = 2^0 \\in G$. ✓\n' +
      '• Inverse: zu $2^n$ ist $2^{-n} \\in G$, denn $2^n \\cdot 2^{-n} = 2^0 = 1$. ✓\n\n' +
      '($G$ ist eine Untergruppe von $((0,\\infty), \\cdot)$.)\n\n' +
      '**b) $(\\mathbb{Z}, \\cdot)$ ist KEINE Gruppe.**\n' +
      'Abgeschlossen ($a\\cdot b \\in \\mathbb{Z}$), assoziativ und mit Neutralelement $1$ – aber die **Inversen fehlen**. Zum Beispiel besitzt $2$ kein multiplikatives Inverses in $\\mathbb{Z}$: aus $2 \\cdot x = 1$ folgt $x = \\tfrac12 \\notin \\mathbb{Z}$.\n\n' +
      'Nur $1$ und $-1$ sind in $\\mathbb{Z}$ invertierbar. **Verletztes Axiom: Existenz der Inversen.**',
  },
  {
    id: 'c_gr_neutral_invers',
    art: 'Neutralelement & Inverses einer Verknüpfung',
    titel: 'Neutralelement und Inverses zu einer eigenen Verknüpfung',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 5, Aufgabe 3',
    aufgabeText:
      'Auf $G = \\mathbb{R} \\setminus \\{-1\\}$ sei die Verknüpfung $\\ast$ definiert durch\n' +
      '$a \\ast b := a + b + a \\cdot b$,\n' +
      'wobei „$+$" und „$\\cdot$" die üblichen Rechenarten auf $\\mathbb{R}$ sind. Man kann zeigen, dass $(G, \\ast)$ eine kommutative Gruppe ist. Bestimmen Sie das Neutralelement der Gruppe und das Inverse zu einem beliebigen $a \\in G$.',
    referenz: ['gruppenaxiome'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Das Neutralelement $e$ ist durch $a \\ast e = a$ **für alle** $a$ festgelegt. Setze die Definition der Verknüpfung ein und löse nach $e$ auf – rate nicht einfach $e = 0$ oder $e = 1$.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Neutralelement: $a \\ast e = a + e + a\\cdot e = a$, also $e + a\\cdot e = 0$, das heißt $e(1 + a) = 0$. Da $a \\neq -1$ ist $1 + a \\neq 0$, also muss $e = 0$ sein.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Inverses: gesucht ist $a^{-1}$ mit $a \\ast a^{-1} = e = 0$. Einsetzen liefert $a + a^{-1} + a\\cdot a^{-1} = 0$, also $a^{-1}(1 + a) = -a$ und damit $a^{-1} = -\\dfrac{a}{1+a}$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Der Wert $-1$ ist ausgeschlossen, damit man nie durch $0$ teilt. Prüfe außerdem, dass $a^{-1}$ selbst nicht $-1$ ist – sonst läge es nicht in $G$. Aus $-\\dfrac{a}{1+a} = -1$ folgte $0 = -1$, ein Widerspruch, also bleibt das Inverse stets in $G$.' },
    ],
    loesung:
      '**Neutralelement**\n' +
      '$a \\ast e = a + e + a\\cdot e = a \\ \\Rightarrow\\ e(1 + a) = 0$. Wegen $a \\neq -1$ ist $1 + a \\neq 0$, also $e = 0$.\n' +
      'Probe: $a \\ast 0 = a + 0 + a\\cdot 0 = a$. ✓\n\n' +
      '**Inverses zu $a$**\n' +
      '$a \\ast a^{-1} = a + a^{-1} + a\\cdot a^{-1} = 0 \\ \\Rightarrow\\ a^{-1}(1 + a) = -a \\ \\Rightarrow\\ a^{-1} = -\\dfrac{a}{1+a}$.\n\n' +
      'Probe:\n' +
      '$a \\ast \\left(-\\dfrac{a}{1+a}\\right) = a - \\dfrac{a}{1+a} - \\dfrac{a^2}{1+a} = a - \\dfrac{a + a^2}{1+a} = a - \\dfrac{a(1+a)}{1+a} = a - a = 0 = e$. ✓\n\n' +
      'Ergebnis: Neutralelement $e = 0$, Inverses $a^{-1} = -\\dfrac{a}{1+a}$.',
  },
  {
    id: 'c_gr_symmetrische_gruppe',
    art: 'Symmetrische Gruppe $S_3$ (Permutationen)',
    titel: 'Verketten, Invertieren und Nichtkommutativität in $S_3$',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 5, Aufgabe 5',
    aufgabeText:
      'In der symmetrischen Gruppe $(S_3, \\circ)$ seien die Permutationen\n' +
      '$\\sigma = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 1 \\end{pmatrix}$ und $\\tau = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 1 & 3 \\end{pmatrix}$ gegeben.\n\n' +
      'a) Berechnen Sie $\\sigma \\circ \\tau$ und $\\tau \\circ \\sigma$ (bei $\\circ$ wird zuerst die rechte Abbildung ausgeführt).\n' +
      'b) Bestimmen Sie das Inverse $\\sigma^{-1}$.\n' +
      'c) Folgern Sie aus a), dass $(S_3, \\circ)$ nicht kommutativ ist.',
    referenz: ['symmetrische-gruppe-s3'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        '$S_3$ besteht aus allen bijektiven Abbildungen von $\\{1,2,3\\}$ auf sich. In der Schreibweise $\\begin{pmatrix} 1 & 2 & 3 \\\\ f(1) & f(2) & f(3) \\end{pmatrix}$ steht unter jeder Zahl ihr Bild. $\\sigma$ ist der Dreierzyklus $1 \\to 2 \\to 3 \\to 1$, $\\tau$ vertauscht nur $1$ und $2$.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Bei $\\sigma \\circ \\tau$ wird jede Zahl **zuerst** durch $\\tau$, dann durch $\\sigma$ geschickt. Beispiel: $1 \\xrightarrow{\\tau} 2 \\xrightarrow{\\sigma} 3$, also $(\\sigma \\circ \\tau)(1) = 3$. So gehst du jede Zahl durch.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Das Inverse $\\sigma^{-1}$ dreht die Pfeile um: aus $1 \\to 2$ wird $2 \\to 1$, aus $2 \\to 3$ wird $3 \\to 2$, aus $3 \\to 1$ wird $1 \\to 3$. Danach nach der oberen Zeile $1,2,3$ sortieren.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Die Leserichtung bei $\\circ$ ist von **rechts nach links**. Wer erst $\\sigma$ und dann $\\tau$ anwendet, berechnet $\\tau \\circ \\sigma$ statt $\\sigma \\circ \\tau$ – der häufigste Fehler.' },
    ],
    loesung:
      '**a) Verkettungen**\n' +
      '$\\sigma \\circ \\tau$ (erst $\\tau$, dann $\\sigma$):\n' +
      '• $1 \\xrightarrow{\\tau} 2 \\xrightarrow{\\sigma} 3$\n' +
      '• $2 \\xrightarrow{\\tau} 1 \\xrightarrow{\\sigma} 2$\n' +
      '• $3 \\xrightarrow{\\tau} 3 \\xrightarrow{\\sigma} 1$\n' +
      'Also $\\sigma \\circ \\tau = \\begin{pmatrix} 1 & 2 & 3 \\\\ 3 & 2 & 1 \\end{pmatrix}$ (Vertauschung von $1$ und $3$).\n\n' +
      '$\\tau \\circ \\sigma$ (erst $\\sigma$, dann $\\tau$):\n' +
      '• $1 \\xrightarrow{\\sigma} 2 \\xrightarrow{\\tau} 1$\n' +
      '• $2 \\xrightarrow{\\sigma} 3 \\xrightarrow{\\tau} 3$\n' +
      '• $3 \\xrightarrow{\\sigma} 1 \\xrightarrow{\\tau} 2$\n' +
      'Also $\\tau \\circ \\sigma = \\begin{pmatrix} 1 & 2 & 3 \\\\ 1 & 3 & 2 \\end{pmatrix}$ (Vertauschung von $2$ und $3$).\n\n' +
      '**b) Inverses von $\\sigma$**\n' +
      'Pfeile umdrehen: $2 \\to 1,\\ 3 \\to 2,\\ 1 \\to 3$, also\n' +
      '$\\sigma^{-1} = \\begin{pmatrix} 1 & 2 & 3 \\\\ 3 & 1 & 2 \\end{pmatrix}$.\n' +
      'Probe: $1 \\xrightarrow{\\sigma^{-1}} 3 \\xrightarrow{\\sigma} 1$, $2 \\xrightarrow{\\sigma^{-1}} 1 \\xrightarrow{\\sigma} 2$, $3 \\xrightarrow{\\sigma^{-1}} 2 \\xrightarrow{\\sigma} 3$, also $\\sigma \\circ \\sigma^{-1} = \\mathrm{id}$. ✓\n\n' +
      '**c) Nicht kommutativ**\n' +
      'Aus a) ist $\\sigma \\circ \\tau = \\begin{pmatrix} 1 & 2 & 3 \\\\ 3 & 2 & 1 \\end{pmatrix} \\neq \\begin{pmatrix} 1 & 2 & 3 \\\\ 1 & 3 & 2 \\end{pmatrix} = \\tau \\circ \\sigma$.\n' +
      'Es gibt also Elemente, deren Verkettung von der Reihenfolge abhängt – $(S_3, \\circ)$ ist nicht kommutativ.',
  },
  {
    id: 'c_gr_verknuepfungstafel',
    art: 'Verknüpfungstafel ergänzen',
    titel: 'Gruppentafel über die Sudoku-Eigenschaft vervollständigen',
    schwierigkeit: 'schwer',
    quelle: 'Blatt 5, Aufgabe 6',
    aufgabeText:
      'Sei $G = \\{e, a, b, c\\}$ und $\\ast$ eine Verknüpfung auf $G$ mit Neutralelement $e$. Ergänzen Sie die folgende Verknüpfungstafel so, dass $(G, \\ast)$ eine Gruppe ist.\n\n' +
      '| $\\ast$ | $e$ | $a$ | $b$ | $c$ |\n' +
      '| --- | --- | --- | --- | --- |\n' +
      '| $e$ | $e$ | $a$ | $b$ | $c$ |\n' +
      '| $a$ | $a$ | $b$ |  |  |\n' +
      '| $b$ | $b$ |  | $e$ | $a$ |\n' +
      '| $c$ | $c$ |  | $a$ | $b$ |',
    referenz: ['wichtige-gruppen'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'In der Verknüpfungstafel jeder Gruppe kommt in **jeder Zeile und jeder Spalte jedes Element genau einmal** vor (ein „lateinisches Quadrat", wie beim Sudoku). Der Grund ist die Kürzungsregel: Käme ein Element in einer Zeile doppelt vor, gäbe es zwei verschiedene Lösungen von $a \\ast x = y$.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Das Neutralelement $e$ liefert die erste Zeile und Spalte gratis ($e \\ast x = x$ und $x \\ast e = x$). Fülle danach jede Lücke, indem du schaust, welches Element in der betreffenden Zeile **und** Spalte noch fehlt.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Zeile $a$: schon vorhanden sind $a, b$. In Spalte $b$ stehen bereits $b, e, a$, es fehlt $c$ – also $a \\ast b = c$. Danach ist in Zeile $a$ nur noch $e$ frei, also $a \\ast c = e$. Analog füllst du die Spalte unter $a$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Das lateinische Quadrat allein garantiert noch keine Gruppe (Assoziativität fehlt). Hier ist es aber gesichert, weil die fertige Tafel mit $(\\mathbb{Z}_4, +)$ übereinstimmt, und dort ist $+$ assoziativ.' },
    ],
    loesung:
      '$e$ ist neutral, also sind $e$-Zeile und $e$-Spalte klar. Mit der Regel „jedes Element genau einmal pro Zeile und Spalte" werden die vier Lücken eindeutig ergänzt:\n\n' +
      '• Zeile $a$ enthält $a, b$; in Spalte $b$ fehlt $c$ $\\Rightarrow a \\ast b = c$, danach $a \\ast c = e$.\n' +
      '• Spalte $a$ enthält $a, b$; in Zeile $b$ fehlt $c$ $\\Rightarrow b \\ast a = c$, danach $c \\ast a = e$.\n\n' +
      '| $\\ast$ | $e$ | $a$ | $b$ | $c$ |\n' +
      '| --- | --- | --- | --- | --- |\n' +
      '| $e$ | $e$ | $a$ | $b$ | $c$ |\n' +
      '| $a$ | $a$ | $b$ | $c$ | $e$ |\n' +
      '| $b$ | $b$ | $c$ | $e$ | $a$ |\n' +
      '| $c$ | $c$ | $e$ | $a$ | $b$ |\n\n' +
      'Diese Tafel ist die von $(\\mathbb{Z}_4, +)$ mit $e = [0],\\ a = [1],\\ b = [2],\\ c = [3]$. Es ist also eine zyklische Gruppe mit Erzeuger $a$ ($a \\ast a = b,\\ a \\ast a \\ast a = c,\\ a \\ast a \\ast a \\ast a = e$). Da $+$ auf $\\mathbb{Z}_4$ assoziativ ist, ist $(G, \\ast)$ eine Gruppe.',
  },
  {
    id: 'c_gr_restklassen_rechnen',
    art: 'Rechnen in $\\mathbb{Z}_n$ (Kürzen, Nullteiler)',
    titel: 'Rechnen in $\\mathbb{Z}_{12}$ und warum Kürzen scheitert',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 5, Aufgabe 4',
    aufgabeText:
      'a) Berechnen Sie in $\\mathbb{Z}_{12}$ und geben Sie das Ergebnis als $[k]$ mit $k \\in \\{0, \\dots, 11\\}$ an:\n' +
      '(i) $[7] + [8]$, (ii) $[5] \\cdot [9]$, (iii) $[5]^2$.\n\n' +
      'b) Zeigen Sie an einem Beispiel, dass man in $\\mathbb{Z}_{12}$ nicht immer „kürzen" darf: Finden Sie $[x] \\neq [y]$ und ein $[a] \\neq [0]$ mit $[a][x] = [a][y]$. Erklären Sie, woran das liegt.',
    referenz: ['rechnen-restklassen'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'In $\\mathbb{Z}_{12}$ rechnet man „modulo $12$": normal rechnen, am Ende den Rest bei Division durch $12$ nehmen. Es gilt $[a] + [b] = [a+b]$ und $[a]\\cdot[b] = [a\\cdot b]$, und $[5]^2 = [5]\\cdot[5]$.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Rechne erst in den ganzen Zahlen, dann reduziere: $7 + 8 = 15 = 12 + 3$, also $[15] = [3]$. Ebenso $5 \\cdot 9 = 45$ und $5^2 = 25$ auf den Bereich $\\{0, \\dots, 11\\}$ bringen.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Für Teil b): Ein Element $[a] \\neq [0]$ heißt **Nullteiler**, wenn es ein $[m] \\neq [0]$ mit $[a][m] = [0]$ gibt. In $\\mathbb{Z}_{12}$ ist etwa $[3]\\cdot[4] = [12] = [0]$. Solche Elemente sind nicht invertierbar, weil $\\mathrm{ggT}(3,12) = 3 \\neq 1$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Kürzen ($[a][x] = [a][y] \\Rightarrow [x] = [y]$) ist nur erlaubt, wenn $[a]$ invertierbar ist. Bei einem Nullteiler wie $[3]$ ist das falsch – nicht jedes $[a] \\neq [0]$ darf man wegkürzen, da $12$ keine Primzahl ist.' },
    ],
    loesung:
      '**a) Rechnungen in $\\mathbb{Z}_{12}$**\n' +
      '(i) $[7] + [8] = [15] = [3]$  (denn $15 = 12 + 3$).\n' +
      '(ii) $[5] \\cdot [9] = [45] = [9]$  (denn $45 = 3\\cdot 12 + 9$).\n' +
      '(iii) $[5]^2 = [25] = [1]$  (denn $25 = 2\\cdot 12 + 1$; $[5]$ ist also selbstinvers).\n\n' +
      '**b) Kürzen ist nicht erlaubt**\n' +
      'Wähle $[a] = [3]$, $[x] = [1]$, $[y] = [5]$. Dann\n' +
      '$[3]\\cdot[1] = [3]$ und $[3]\\cdot[5] = [15] = [3]$,\n' +
      'also $[3][1] = [3][5]$, obwohl $[1] \\neq [5]$.\n\n' +
      'Grund: $[3]$ ist ein **Nullteiler**, denn $[3]\\cdot[4] = [12] = [0]$ mit $[3], [4] \\neq [0]$. Wegen $\\mathrm{ggT}(3, 12) = 3 \\neq 1$ ist $[3]$ nicht invertierbar, und ohne Inverses lässt sich nicht kürzen.',
  },
  {
    id: 'c_gr_einheiten_inverse',
    art: 'Einheiten & Inverse in $\\mathbb{Z}_n$ (euklidischer Algorithmus)',
    titel: 'Ist $[17]$ in $\\mathbb{Z}_{60}$ invertierbar?',
    schwierigkeit: 'schwer',
    quelle: 'Blatt 6, Aufgaben 1/2',
    aufgabeText:
      'Ist $[17]$ in $\\mathbb{Z}_{60}$ bezüglich der Multiplikation „$\\cdot$" invertierbar? Falls ja, bestimmen Sie das Inverse und geben es in der Form $[k]$ mit $k \\in \\{0, \\dots, 59\\}$ an.',
    referenz: ['euklidischer-algorithmus'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        '$[a]$ ist in $\\mathbb{Z}_n$ genau dann invertierbar, wenn $\\mathrm{ggT}(a, n) = 1$ (also $a$ und $n$ teilerfremd sind). Prüfe deshalb zuerst mit dem euklidischen Algorithmus den größten gemeinsamen Teiler.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Euklidischer Algorithmus: teile fortlaufend die größere durch die kleinere Zahl mit Rest, bis der Rest $0$ ist. Der letzte Rest ungleich $0$ ist der $\\mathrm{ggT}$. Kommt $1$ heraus, ist $[17]$ invertierbar.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Für das Inverse setzt du **rückwärts** ein (erweiterter euklidischer Algorithmus), bis $1 = s\\cdot 60 + t\\cdot 17$ dasteht. Der Faktor $t$ vor $17$ liefert das Inverse: $[17]^{-1} = [t]$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Ist $t$ negativ, addiere $60$, bis das Ergebnis in $\\{0, \\dots, 59\\}$ liegt. Mach danach unbedingt die Probe $[17]\\cdot[k] = [1]$.' },
    ],
    loesung:
      '**Schritt 1: Euklidischer Algorithmus**\n' +
      '$60 = 3\\cdot 17 + 9$\n' +
      '$17 = 1\\cdot 9 + 8$\n' +
      '$9 = 1\\cdot 8 + 1$\n' +
      '$8 = 8\\cdot 1 + 0$\n' +
      'Der letzte Rest ungleich $0$ ist $1$, also $\\mathrm{ggT}(17, 60) = 1$. Damit ist $[17]$ invertierbar.\n\n' +
      '**Schritt 2: Rückwärts einsetzen**\n' +
      '$1 = 9 - 1\\cdot 8$\n' +
      '$= 9 - (17 - 1\\cdot 9) = 2\\cdot 9 - 1\\cdot 17$\n' +
      '$= 2\\cdot(60 - 3\\cdot 17) - 1\\cdot 17 = 2\\cdot 60 - 7\\cdot 17$.\n\n' +
      'Der Faktor vor $17$ ist $-7$, also $[17]^{-1} = [-7]$.\n\n' +
      '**Schritt 3: In den Bereich bringen und Probe**\n' +
      '$[-7] = [-7 + 60] = [53]$.\n' +
      'Probe: $17 \\cdot 53 = 901 = 15\\cdot 60 + 1$, also $[17]\\cdot[53] = [1]$. ✓\n\n' +
      'Ergebnis: $[17]^{-1} = [53]$ in $\\mathbb{Z}_{60}$.',
  },
  {
    id: 'c_gr_pruefziffer',
    art: 'ISBN-Prüfziffer',
    titel: 'Prüfziffer einer ISBN bestimmen (Fall „X")',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 6, Aufgabe 3',
    aufgabeText:
      'Ergänzen Sie die Prüfziffer $x_1 \\in \\{0, 1, \\dots, 10\\}$ in 3-540-12344-$x_1$ so, dass eine gültige ISBN-Nummer herauskommt.\n\n' +
      'Erinnerung: $x_{10}$-$x_9 x_8 x_7$-$x_6 x_5 x_4 x_3 x_2$-$x_1$ ist gültig, falls in $\\mathbb{Z}_{11}$ gilt $\\left[\\sum_{k=1}^{10} k \\cdot x_k\\right] = [0]$. Kommt für die Prüfziffer der Wert $10$ heraus, schreibt man dafür „X".',
    referenz: ['pruefziffern'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Die Ziffern werden von **hinten** gewichtet: die letzte Ziffer $x_1$ (die Prüfziffer) mit Gewicht $1$, die vorletzte $x_2$ mit Gewicht $2$, usw. bis zur ersten Ziffer $x_{10}$ mit Gewicht $10$. Gültig ist die ISBN, wenn die gewichtete Summe modulo $11$ gleich $0$ ist.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Ordne die Ziffern (ohne Bindestriche) $3\\,5\\,4\\,0\\,1\\,2\\,3\\,4\\,4$ den Positionen $x_{10}$ bis $x_2$ zu und berechne die gewichtete Summe der bekannten Terme. Danach bestimmst du $x_1$ aus $[\\text{Summe}] + [x_1] = [0]$.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Bekannte Terme: $10\\cdot 3 + 9\\cdot 5 + 8\\cdot 4 + 7\\cdot 0 + 6\\cdot 1 + 5\\cdot 2 + 4\\cdot 3 + 3\\cdot 4 + 2\\cdot 4 = 155$. Modulo $11$: $155 = 14\\cdot 11 + 1$, also $[155] = [1]$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Die Prüfziffer darf den Wert $10$ annehmen – dann schreibt man „X". Modulo $11$ ist $10$ ein gültiger Rest, denn die Prüfstelle rechnet in $\\mathbb{Z}_{11}$, nicht in $\\mathbb{Z}_{10}$.' },
    ],
    loesung:
      '**Gewichtete Summe in $\\mathbb{Z}_{11}$**\n' +
      '$\\left[\\sum_{k=1}^{10} k\\cdot x_k\\right] = [10\\cdot 3 + 9\\cdot 5 + 8\\cdot 4 + 7\\cdot 0 + 6\\cdot 1 + 5\\cdot 2 + 4\\cdot 3 + 3\\cdot 4 + 2\\cdot 4 + 1\\cdot x_1]$\n' +
      '$= [155 + x_1] = [1] + [x_1]$  (denn $155 = 14\\cdot 11 + 1$).\n\n' +
      '**Nach $x_1$ auflösen**\n' +
      'Gültig, wenn $[1] + [x_1] = [0]$, also $[x_1] = [-1] = [10]$.\n\n' +
      'Die Prüfziffer ist $x_1 = 10$, geschrieben als „X". Die gültige ISBN lautet **3-540-12344-X**.\n\n' +
      'Probe: $155 + 10 = 165 = 15\\cdot 11$, also $[165] = [0]$. ✓',
  },
  {
    id: 'c_gr_homomorphismus',
    art: 'Homomorphismus prüfen',
    titel: 'Gruppenhomomorphismus nachweisen oder widerlegen',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 6, Aufgabe 4',
    aufgabeText:
      'Eine Abbildung $\\Phi : (G, \\ast) \\to (H, \\times)$ ist ein Gruppenhomomorphismus, falls für alle $a, b \\in G$ gilt $\\Phi(a \\ast b) = \\Phi(a) \\times \\Phi(b)$; ist $\\Phi$ zusätzlich bijektiv, ein Isomorphismus. Prüfen Sie:\n\n' +
      'a) $\\Phi : (\\mathbb{R}, +) \\to ((0, \\infty), \\cdot)$, $x \\mapsto 2^x$. Homomorphismus? Sogar Isomorphismus?\n' +
      'b) $\\Psi : (\\mathbb{R}, +) \\to (\\mathbb{R}, +)$, $x \\mapsto x^2$. Homomorphismus?',
    referenz: ['gruppenaxiome'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Achte darauf, welche Verknüpfung links und rechts steht. Bei a) ist links „$+$", rechts „$\\cdot$"; die Bedingung lautet also $\\Phi(a + b) = \\Phi(a) \\cdot \\Phi(b)$. Bei b) steht auf beiden Seiten „$+$".' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Zum **Nachweis** setzt du die Definition ein und formst mit einer Rechenregel um (bei a): das Potenzgesetz $2^{a+b} = 2^a \\cdot 2^b$). Zum **Widerlegen** genügt schon ein einziges Gegenbeispiel.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Isomorphismus heißt: zusätzlich bijektiv. Die Funktion $2^x : \\mathbb{R} \\to (0, \\infty)$ ist bijektiv, die Umkehrfunktion ist $\\log_2$. Damit ist a) sogar ein Isomorphismus.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Bei b) reicht ein Gegenbeispiel: Man muss NICHT für alle $a, b$ etwas zeigen, sondern nur ein Paar finden, für das die Homomorphie-Bedingung verletzt ist.' },
    ],
    loesung:
      '**a) $\\Phi(x) = 2^x$**\n' +
      'Homomorphie mit dem Potenzgesetz:\n' +
      '$\\Phi(a + b) = 2^{a+b} = 2^a \\cdot 2^b = \\Phi(a) \\cdot \\Phi(b)$. ✓\n' +
      'Also ist $\\Phi$ ein Gruppenhomomorphismus. Die Abbildung $2^x : \\mathbb{R} \\to (0, \\infty)$ ist außerdem bijektiv (Umkehrfunktion $\\log_2$), daher ist $\\Phi$ sogar ein **Gruppenisomorphismus**.\n\n' +
      '**b) $\\Psi(x) = x^2$**\n' +
      'Prüfe $\\Psi(a + b) = \\Psi(a) + \\Psi(b)$. Gegenbeispiel $a = b = 1$:\n' +
      '$\\Psi(1 + 1) = \\Psi(2) = 4$, aber $\\Psi(1) + \\Psi(1) = 1 + 1 = 2$.\n' +
      'Wegen $4 \\neq 2$ gilt $\\Psi(a + b) \\neq \\Psi(a) + \\Psi(b)$. Also ist $\\Psi$ **kein** Gruppenhomomorphismus.\n\n' +
      '(Allgemein ist $\\Psi(a+b) = (a+b)^2 = a^2 + 2ab + b^2$, während $\\Psi(a) + \\Psi(b) = a^2 + b^2$; der Term $2ab$ stört.)',
  },
]
