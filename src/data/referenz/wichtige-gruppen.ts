import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'wichtige-gruppen',
  titel: 'Wichtige Gruppen',
  inhalt:
    '**Worum geht es?**\n' +
    'Die **Gruppenaxiome** (Assoziativität, Neutralelement, Inverses) sammeln die Regeln zum Rechnen — aber welche konkreten Mengen mit welcher Verknüpfung sind eigentlich Gruppen? Diese Karte ist ein **Katalog der wichtigsten Standardbeispiele**: die Zahlbereiche, die Restklassengruppen $\\mathbb{Z}_n$, die primen Restklassengruppen $\\mathbb{Z}_n^\\ast$, die symmetrischen Gruppen $S_n$ und die Diedergruppen. An diesen Beispielen prüft man Definitionen und Sätze, und sie liefern die „üblichen Verdächtigen", wenn man in der Klausur eine Gruppe (oder ein Gegenbeispiel) braucht.\n' +
    '\n' +
    '**Kurz-Erinnerung: was macht ein Beispiel zur Gruppe?**\n' +
    'Zu einer Gruppe $(G,\\ast)$ gehört immer **beides**: die Menge $G$ **und** die Verknüpfung $\\ast: G \\times G \\to G$. Man muss vier Dinge kennen: (1) die Menge ist **abgeschlossen** ($a \\ast b \\in G$), (2) die Verknüpfung ist assoziativ, (3) es gibt ein **Neutralelement** $e$, (4) jedes $a$ hat ein **Inverses** $a^{-1}$. Dieselbe Menge kann mit $+$ eine Gruppe sein und mit $\\cdot$ keine (z. B. $\\mathbb{Z}$).\n' +
    '\n' +
    '**Ordnung, endlich vs. unendlich**\n' +
    'Die **Ordnung** einer Gruppe ist ihre Elementanzahl, geschrieben $\\lvert G\\rvert$. Ist $\\lvert G\\rvert$ eine natürliche Zahl, heißt $G$ **endlich**, sonst **unendlich**. So sind $(\\mathbb{Z},+)$, $(\\mathbb{R}\\setminus\\{0\\},\\cdot)$ unendlich, während $\\mathbb{Z}_n$, $\\mathbb{Z}_n^\\ast$, $S_n$ und die Diedergruppe endlich sind.\n' +
    '\n' +
    '**Die Zahlbereiche (additiv und multiplikativ)**\n' +
    'Bei $+$ ist das Neutralelement stets $0$ und das Inverse zu $a$ ist $-a$; bei $\\cdot$ ist das Neutralelement $1$ und das Inverse zu $a$ ist $\\tfrac{1}{a}$. Additiv sind $(\\mathbb{Z},+)$, $(\\mathbb{Q},+)$, $(\\mathbb{R},+)$, $(\\mathbb{C},+)$ Gruppen. Multiplikativ muss man die $0$ herausnehmen (sie hat kein Inverses): $(\\mathbb{Q}\\setminus\\{0\\},\\cdot)$, $(\\mathbb{R}\\setminus\\{0\\},\\cdot)$, $(\\mathbb{C}\\setminus\\{0\\},\\cdot)$ sind Gruppen. **Keine** Gruppen sind $(\\mathbb{N},+)$ (keine Inversen), $(\\mathbb{N},\\cdot)$ und $(\\mathbb{Z},\\cdot)$ (nur $\\pm 1$ sind invertierbar). Alle diese Gruppen sind **abelsch**.\n' +
    '\n' +
    '**Additive Restklassengruppe $(\\mathbb{Z}_n,+)$**\n' +
    'Sei $n \\in \\mathbb{N}^\\ast$. Die Elemente sind die **Restklassen** $\\mathbb{Z}_n = \\{[0],[1],\\dots,[n-1]\\}$, also die möglichen Reste bei Division durch $n$. Gerechnet wird per Repräsentant und dann mod $n$: $[a] + [b] = [a+b]$. Neutralelement ist $[0]$, das Inverse zu $[a]$ ist $[-a] = [n-a]$. $(\\mathbb{Z}_n,+)$ ist eine **abelsche** Gruppe der Ordnung $\\lvert \\mathbb{Z}_n\\rvert = n$.\n' +
    '\n' +
    '**Prime Restklassengruppe $(\\mathbb{Z}_n^\\ast,\\cdot)$**\n' +
    'Mit $\\cdot$ ist $\\mathbb{Z}_n$ **keine** Gruppe (z. B. hat $[0]$ nie ein Inverses, und in $\\mathbb{Z}_9$ ist $[3]\\cdot[3]=[0]$). Man nimmt deshalb nur die zu $n$ teilerfremden Klassen: $\\mathbb{Z}_n^\\ast = \\{[a] : \\gcd(a,n) = 1\\}$. Genau diese $[a]$ besitzen ein multiplikatives Inverses. $(\\mathbb{Z}_n^\\ast,\\cdot)$ ist eine **abelsche** Gruppe mit Neutralelement $[1]$; ihre Ordnung ist $\\lvert \\mathbb{Z}_n^\\ast\\rvert = \\varphi(n)$ (Eulersche Phi-Funktion). Ist $n = p$ **prim**, so sind alle $[1],\\dots,[p-1]$ teilerfremd, also $\\lvert \\mathbb{Z}_p^\\ast\\rvert = p-1$.\n' +
    '\n' +
    '**Symmetrische Gruppe $S_n$**\n' +
    'Für $X = \\{1,\\dots,n\\}$ ist $S_n = \\{f: X \\to X \\mid f \\text{ bijektiv}\\}$ die Menge aller **Permutationen** von $X$, mit der **Hintereinanderausführung** $\\circ$ als Verknüpfung. $(S_n,\\circ)$ ist eine Gruppe: Neutralelement ist die identische Abbildung $\\mathrm{id}$, das Inverse ist die **Umkehrabbildung** $f^{-1}$. Die Ordnung ist $\\lvert S_n\\rvert = n!$. Achtung: für $n \\ge 3$ ist $S_n$ **nicht abelsch** (die Reihenfolge der Abbildungen zählt).\n' +
    '\n' +
    '**Diedergruppe $D_n$ (Symmetrien eines $n$-Ecks)**\n' +
    'Die **Diedergruppe** $D_n$ besteht aus allen Deckabbildungen (Symmetrien) eines regelmäßigen $n$-Ecks: den $n$ **Drehungen** (um Vielfache von $\\tfrac{360^\\circ}{n}$) und den $n$ **Spiegelungen**. Verknüpfung ist wieder das Hintereinanderausführen $\\circ$, Neutralelement die Drehung um $0^\\circ$, Inverses die „Rückwärts"-Bewegung. Die Ordnung ist $\\lvert D_n\\rvert = 2n$. Für $n \\ge 3$ ist $D_n$ **nicht abelsch** (erst drehen, dann spiegeln liefert i. A. etwas anderes als umgekehrt).\n' +
    '\n' +
    '**Übersichtstabelle**\n' +
    '| Gruppe | Verknüpfung | Neutral $e$ | Inverses zu $a$ | Abelsch? | Ordnung |\n' +
    '|---|---|---|---|---|---|\n' +
    '| $(\\mathbb{Z},+)$ | $+$ | $0$ | $-a$ | ja | $\\infty$ |\n' +
    '| $(\\mathbb{Q},+),\\ (\\mathbb{R},+)$ | $+$ | $0$ | $-a$ | ja | $\\infty$ |\n' +
    '| $(\\mathbb{Q}\\setminus\\{0\\},\\cdot),\\ (\\mathbb{R}\\setminus\\{0\\},\\cdot)$ | $\\cdot$ | $1$ | $\\tfrac{1}{a}$ | ja | $\\infty$ |\n' +
    '| $(\\mathbb{Z}_n,+)$ | $+$ | $[0]$ | $[n-a]$ | ja | $n$ |\n' +
    '| $(\\mathbb{Z}_n^\\ast,\\cdot)$ | $\\cdot$ | $[1]$ | $[a]^{-1}$ | ja | $\\varphi(n)$ |\n' +
    '| $(S_n,\\circ)$ | $\\circ$ | $\\mathrm{id}$ | $f^{-1}$ | nein ($n\\ge 3$) | $n!$ |\n' +
    '| $(D_n,\\circ)$ | $\\circ$ | Drehung $0^\\circ$ | Rückdrehung/-spiegelung | nein ($n\\ge 3$) | $2n$ |\n' +
    '\n' +
    '**Wozu die Standardbeispiele?**\n' +
    'Sie sind die **Testfälle** der Gruppentheorie: An $(\\mathbb{Z},+)$ und $\\mathbb{Z}_n$ sieht man abelsche Gruppen, an $S_n$ und $D_n$ die nicht-abelschen. Braucht man ein **Gegenbeispiel** (etwas ist keine Gruppe), greift man zu $(\\mathbb{N},+)$ oder $(\\mathbb{Z},\\cdot)$. $\\mathbb{Z}_n$ und $\\mathbb{Z}_n^\\ast$ sind außerdem die Grundlage für Kongruenzrechnung, Prüfziffern und Kryptographie (RSA rechnet in $\\mathbb{Z}_n^\\ast$).\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Bei $\\cdot$ die $0$ **nicht** entfernen: $(\\mathbb{R},\\cdot)$ ist keine Gruppe, da $0$ kein Inverses hat.\n' +
    '• $(\\mathbb{Z}_n,\\cdot)$ pauschal für eine Gruppe halten — nur die teilerfremden Klassen $\\mathbb{Z}_n^\\ast$ bilden eine.\n' +
    '• $S_n$ oder $D_n$ (ab $n=3$) für abelsch halten — die Reihenfolge der Abbildungen zählt.\n' +
    '• Ordnung von $S_n$ mit $n$ statt $n!$ oder die von $D_n$ mit $n$ statt $2n$ angeben.',
  beispiele: [
    {
      szenario: 'Zahlbereiche einordnen',
      beispiele: [
        '**Aufgabe:** Ist $(\\mathbb{R}\\setminus\\{0\\},\\cdot)$ eine Gruppe? Gib Neutral- und Inverses an.\n**Lösung:** Produkt zweier von $0$ verschiedener reeller Zahlen ist wieder $\\neq 0$ (abgeschlossen); $\\cdot$ ist auf $\\mathbb{R}$ assoziativ. Neutralelement $1$, Inverses zu $a$ ist $\\tfrac{1}{a}$ (existiert, da $a \\neq 0$).\n**Ergebnis:** Ja, abelsche Gruppe, unendlich; $e = 1$, $a^{-1} = \\tfrac{1}{a}$.',
        '**Aufgabe:** Ist $(\\mathbb{Z},\\cdot)$ eine Gruppe?\n**Lösung:** Assoziativ und Neutralelement $1$ vorhanden. Aber das Inverse zu $a$ müsste $\\tfrac{1}{a}$ sein, und das liegt nur für $a = 1$ und $a = -1$ in $\\mathbb{Z}$. Schon zu $2$ fehlt ein ganzzahliges Inverses.\n**Ergebnis:** Nein — nur $\\pm 1$ sind invertierbar, also keine Gruppe.',
        '**Aufgabe:** Warum ist $(\\mathbb{N},+)$ keine Gruppe, $(\\mathbb{Z},+)$ aber schon?\n**Lösung:** In beiden ist $+$ abgeschlossen und assoziativ, Neutralelement $0$. In $\\mathbb{N}$ fehlt jedoch zu jedem $a > 0$ das Inverse $-a$ (negative Zahlen sind nicht in $\\mathbb{N}$). In $\\mathbb{Z}$ ist $-a$ stets vorhanden.\n**Ergebnis:** $(\\mathbb{Z},+)$ ist Gruppe, $(\\mathbb{N},+)$ nicht (keine additiven Inversen).',
      ],
    },
    {
      szenario: 'Restklassengruppen ℤₙ und ℤₙ*',
      beispiele: [
        '**Aufgabe:** Rechne in $(\\mathbb{Z}_9,+)$: $[21] + [17]$. Gib das Ergebnis als $[k]$ mit $k \\in \\{0,\\dots,8\\}$ an.\n**Lösung:** $[21] + [17] = [38]$. Rest von $38$ bei Division durch $9$: $38 = 4\\cdot 9 + 2$, also $[38] = [2]$.\n**Ergebnis:** $[2]$.',
        '**Aufgabe:** Bestimme in $(\\mathbb{Z}_9,+)$ das additive Inverse von $[4]$.\n**Lösung:** Gesucht $[b]$ mit $[4] + [b] = [0]$, also $b \\equiv -4 \\equiv 5 \\pmod 9$. Probe: $[4] + [5] = [9] = [0]$.\n**Ergebnis:** $-[4] = [5]$ (allgemein $[n-a]$).',
        '**Aufgabe:** Bestimme die prime Restklassengruppe $\\mathbb{Z}_9^\\ast$ und ihre Ordnung.\n**Lösung:** Aufnehmen alle $[a]$ mit $\\gcd(a,9)=1$, also die nicht durch $3$ teilbaren: $\\mathbb{Z}_9^\\ast = \\{[1],[2],[4],[5],[7],[8]\\}$. Das sind $\\varphi(9) = 6$ Elemente; Neutralelement $[1]$.\n**Ergebnis:** $\\lvert \\mathbb{Z}_9^\\ast\\rvert = 6$; $[3],[6]$ fehlen, weil sie nicht teilerfremd zu $9$ sind.',
      ],
    },
    {
      szenario: 'Warum ℤₙ mit · scheitert',
      beispiele: [
        '**Aufgabe:** Ist $(\\mathbb{Z}_9,\\cdot)$ (alle Klassen) eine Gruppe? Betrachte $[6]\\cdot[12]$.\n**Lösung:** $[6]\\cdot[12] = [72] = [0]$ (denn $72 = 8\\cdot 9$). Das Produkt zweier von $[0]$ verschiedener Elemente ist $[0]$; solche **Nullteiler** können kein Inverses haben, und $[0]$ selbst ohnehin nicht.\n**Ergebnis:** Nein — mit allen Klassen ist $\\mathbb{Z}_9$ keine multiplikative Gruppe (nur $\\mathbb{Z}_9^\\ast$ ist eine).',
        '**Aufgabe:** Darf man in $(\\mathbb{Z}_6,\\cdot)$ „kürzen", d. h. folgt aus $[a][x] = [a][y]$ mit $[a] \\neq [0]$ stets $[x] = [y]$?\n**Lösung:** Nein. Gegenbeispiel $[a] = [2]$, $[x] = [4]$, $[y] = [1]$: $[2][4] = [8] = [2]$ und $[2][1] = [2]$, also $[2][4] = [2][1]$, obwohl $[4] \\neq [1]$.\n**Ergebnis:** Kürzen ist in $\\mathbb{Z}_6$ nicht erlaubt — $[2]$ ist nicht invertierbar (Kürzen gilt nur in $\\mathbb{Z}_n^\\ast$).',
        '**Aufgabe:** Rechne in $(\\mathbb{Z}_{12345},\\cdot)$: $[12346] \\cdot [6613]$, Ergebnis als $[k]$ mit $k \\in \\{0,\\dots,12344\\}$.\n**Lösung:** Reduziere zuerst: $12346 = 1\\cdot 12345 + 1$, also $[12346] = [1]$. Damit $[12346]\\cdot[6613] = [1]\\cdot[6613] = [6613]$ (kein Taschenrechner nötig).\n**Ergebnis:** $[6613]$.',
      ],
    },
    {
      szenario: 'Symmetrische Gruppe S₃ (nicht abelsch)',
      beispiele: [
        '**Aufgabe:** Wie viele Elemente hat $S_3 = \\{f:\\{1,2,3\\}\\to\\{1,2,3\\} \\mid f \\text{ bijektiv}\\}$, und was ist das Neutralelement?\n**Lösung:** Die Ordnung ist $\\lvert S_3\\rvert = 3! = 6$; man kann alle als $\\left(\\begin{smallmatrix}1&2&3\\\\ f(1)&f(2)&f(3)\\end{smallmatrix}\\right)$ auflisten. Neutralelement ist die Identität $\\pi_1 = \\left(\\begin{smallmatrix}1&2&3\\\\ 1&2&3\\end{smallmatrix}\\right)$.\n**Ergebnis:** $6$ Elemente; $e = \\mathrm{id} = \\pi_1$.',
        '**Aufgabe:** Zeige, dass $(S_3,\\circ)$ nicht abelsch ist.\n**Lösung:** Nimm $\\pi_2 = \\left(\\begin{smallmatrix}1&2&3\\\\ 1&3&2\\end{smallmatrix}\\right)$ und $\\pi_3 = \\left(\\begin{smallmatrix}1&2&3\\\\ 2&1&3\\end{smallmatrix}\\right)$. Dann ist $\\pi_2 \\circ \\pi_3 = \\pi_5$, aber $\\pi_3 \\circ \\pi_2 = \\pi_4$, und $\\pi_4 \\neq \\pi_5$.\n**Ergebnis:** $\\pi_2 \\circ \\pi_3 \\neq \\pi_3 \\circ \\pi_2$, also ist $S_3$ nicht kommutativ.',
        '**Aufgabe:** Bestimme das Inverse der Permutation $f = \\left(\\begin{smallmatrix}1&2&3\\\\ 2&3&1\\end{smallmatrix}\\right)$ in $S_3$.\n**Lösung:** Das Inverse ist die Umkehrabbildung: $f$ bildet $1\\mapsto 2$, $2\\mapsto 3$, $3\\mapsto 1$; also $f^{-1}$ mit $2\\mapsto 1$, $3\\mapsto 2$, $1\\mapsto 3$, d. h. $1\\mapsto 3$, $2\\mapsto 1$, $3\\mapsto 2$.\n**Ergebnis:** $f^{-1} = \\left(\\begin{smallmatrix}1&2&3\\\\ 3&1&2\\end{smallmatrix}\\right)$.',
      ],
    },
  ],
}
