import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'aequivalenz-ordnung',
  titel: 'Äquivalenzrelationen & Ordnungsrelationen',
  inhalt:
    '**Worum geht es?**\n' +
    'Zwei Sonderfälle von Relationen $R \\subseteq M \\times M$ tauchen überall auf. Eine **Äquivalenzrelation** fasst Elemente zu Klassen zusammen, die „im betrachteten Sinn gleich" sind – so entstehen etwa die Restklassen $\\mathbb{Z}_n$ oder die ganzen Zahlen als Differenzenklassen. Eine **Ordnungsrelation** bringt Elemente in eine Reihenfolge (kleiner-gleich, Teilbarkeit, Teilmenge). Beide erkennt man an ihren drei definierenden Eigenschaften – nur eine davon unterscheidet sie.\n' +
    '\n' +
    '**Die drei Grundeigenschaften (Erinnerung)**\n' +
    'Für eine Relation $R$ auf $M$ heißt: **reflexiv**, wenn $x \\sim_R x$ für alle $x$; **symmetrisch**, wenn aus $x \\sim_R y$ stets $y \\sim_R x$ folgt; **antisymmetrisch**, wenn aus $x \\sim_R y$ und $y \\sim_R x$ schon $x = y$ folgt; **transitiv**, wenn aus $x \\sim_R y$ und $y \\sim_R z$ stets $x \\sim_R z$ folgt. Notation: $x \\sim_R y$ bedeutet $(x,y) \\in R$.\n' +
    '\n' +
    '**Äquivalenzrelation**\n' +
    '$R$ heißt **Äquivalenzrelation**, falls $R$ **reflexiv, symmetrisch und transitiv** ist. Man schreibt dann oft $x \\sim y$ statt $x \\sim_R y$. Anschaulich: „$\\sim$" ist eine abgeschwächte Gleichheit – man darf zusammenfassen, was in einem gewissen Merkmal übereinstimmt (Beispiel: „gleicher Rest bei Division durch $3$").\n' +
    '\n' +
    '**Äquivalenzklasse, Vertreter, Quotientenmenge**\n' +
    'Ist $R$ eine Äquivalenzrelation und $x \\in M$, so ist die **Äquivalenzklasse** von $x$\n' +
    '$[x]_R := \\{\\, y \\in M : x \\sim_R y \\,\\}$\n' +
    '(kurz $[x]$). Jedes Element aus $[x]$ heißt **Vertreter** (Repräsentant) dieser Klasse – jeder Vertreter beschreibt dieselbe Klasse, es gilt $y \\in [x] \\iff [y] = [x]$. Die **Quotientenmenge** $M/\\!\\sim_R = \\{\\, [x]_R : x \\in M \\,\\}$ ist die Menge aller Äquivalenzklassen.\n' +
    '\n' +
    '**Klassen bilden eine Partition (Satz)**\n' +
    'Sei $R$ eine Äquivalenzrelation auf $M$ und $x_1, x_2 \\in M$. Dann gilt:\n' +
    '(a) Ist $x_1 \\sim_R x_2$, so ist $[x_1]_R = [x_2]_R$ (äquivalente Elemente haben dieselbe Klasse).\n' +
    '(b) Ist $x_1 \\not\\sim_R x_2$, so ist $[x_1]_R \\cap [x_2]_R = \\emptyset$ (verschiedene Klassen sind **disjunkt**).\n' +
    '(c) $\\bigcup_{x \\in M} [x]_R = M$ (die Klassen **überdecken** ganz $M$).\n' +
    'Kurz: Die Äquivalenzklassen zerlegen $M$ lückenlos und überschneidungsfrei – sie bilden eine **Partition** von $M$.\n' +
    '\n' +
    '**Restklassen als wichtigstes Beispiel**\n' +
    'Für $n \\geq 2$ und $x \\sim_{R_n} y :\\Leftrightarrow n \\mid (y - x)$ ist $[k] = \\{\\, k + nz : z \\in \\mathbb{Z} \\,\\}$ die **Restklasse modulo n** (alle Zahlen mit gleichem Rest bei Division durch $n$), und $\\mathbb{Z}/\\!\\sim_{R_n} = \\{\\,[0], [1], \\dots, [n-1]\\,\\} =: \\mathbb{Z}_n$.\n' +
    '\n' +
    '**Ordnungsrelation**\n' +
    '$R$ heißt **Ordnungsrelation** (Halbordnung), falls $R$ **reflexiv, antisymmetrisch und transitiv** ist. Zwei Elemente $x, y$ heißen **vergleichbar**, wenn $x \\sim_R y$ oder $y \\sim_R x$ gilt.\n' +
    '• Sind **je zwei** Elemente vergleichbar, heißt $R$ **Totalordnung** (lineare Ordnung), z. B. $\\leq$ auf $\\mathbb{N}$.\n' +
    '• Ist das nicht garantiert, spricht man von **partieller Ordnung** (Halbordnung), z. B. $\\subseteq$ auf einer Potenzmenge oder die Teilbarkeit $\\mid$ auf $\\mathbb{N}$.\n' +
    'Verwandt: $R$ heißt **strikte Ordnung**, falls $R$ transitiv und **asymmetrisch** ist (z. B. $<$); asymmetrisch heißt: nie gelten $x \\sim_R y$ und $y \\sim_R x$ zugleich.\n' +
    '\n' +
    '**Hasse-Diagramm**\n' +
    'Eine endliche Halbordnung stellt man als **Hasse-Diagramm** dar: Elemente sind Punkte; ist $x \\sim_R y$ mit $x \\neq y$ und liegt **nichts dazwischen** (keine „Zwischenstufe"), zeichnet man eine Kante mit $x$ **unter** $y$. Reflexive Schleifen und aus Transitivität folgende Kanten werden **weggelassen**. So liest man Vergleichbarkeit an Aufwärtswegen ab.\n' +
    '\n' +
    '**Größtes / kleinstes / maximales / minimales Element**\n' +
    'In einer Halbordnung auf $M$:\n' +
    '| Begriff | Bedingung | Anzahl |\n' +
    '|---|---|---|\n' +
    '| **größtes** Element $g$ | $x \\sim_R g$ für **alle** $x \\in M$ | höchstens eins |\n' +
    '| **kleinstes** Element $k$ | $k \\sim_R x$ für **alle** $x \\in M$ | höchstens eins |\n' +
    '| **maximales** Element $m$ | kein $x \\neq m$ mit $m \\sim_R x$ | evtl. mehrere |\n' +
    '| **minimales** Element $m$ | kein $x \\neq m$ mit $x \\sim_R m$ | evtl. mehrere |\n' +
    'Größtes/kleinstes vergleicht sich mit **allen** (existiert oft nicht); maximal/minimal heißt nur „nichts steht darüber/darunter". In einer **Total**ordnung fallen die Begriffe zusammen.\n' +
    '\n' +
    '**Wie erkennt man was? (Schritt für Schritt)**\n' +
    '1. Alle drei Eigenschaften einzeln prüfen: **reflexiv?**, **transitiv?**, dann **symmetrisch?** *oder* **antisymmetrisch?**\n' +
    '2. reflexiv + symmetrisch + transitiv $\\Rightarrow$ **Äquivalenzrelation**; reflexiv + antisymmetrisch + transitiv $\\Rightarrow$ **Ordnungsrelation**.\n' +
    '3. Ein **einziges** Gegenbeispiel widerlegt eine Eigenschaft (z. B. ein Paar $(x,y) \\in R$ mit $(y,x) \\notin R$ und $x \\neq y$ widerlegt Symmetrie).\n' +
    '4. Bei Äquivalenz: Klassen $[x]$ bestimmen und $M/\\!\\sim$ angeben. Bei Ordnung: prüfen, ob **total** (je zwei vergleichbar) oder nur **partiell**.\n' +
    '\n' +
    '**Gegenüberstellung**\n' +
    '| | Äquivalenzrelation | Ordnungsrelation |\n' +
    '|---|---|---|\n' +
    '| reflexiv | ja | ja |\n' +
    '| transitiv | ja | ja |\n' +
    '| dritte Eigenschaft | **symmetrisch** | **antisymmetrisch** |\n' +
    '| Ergebnis / Struktur | Partition in Klassen $[x]$ | Reihenfolge (Hasse-Diagramm) |\n' +
    '| typisches Beispiel | $\\equiv \\pmod n$ | $\\leq$, $\\subseteq$, $\\mid$ |\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Symmetrie und Antisymmetrie verwechseln – genau **diese** eine Eigenschaft entscheidet zwischen Äquivalenz und Ordnung.\n' +
    '• Reflexivität vergessen: $R_1 = \\{(1,1),(2,2),(2,4),(4,4)\\}$ auf $\\{1,2,3,4\\}$ ist keine Äquivalenzrelation, weil $3$ nicht mit sich selbst in Relation steht.\n' +
    '• „$x + y$ gerade" wirkt symmetrisch und ist es auch – aber „$x + y$ **ungerade**" ist nicht reflexiv (denn $x + x = 2x$ ist gerade), also keine Äquivalenzrelation.\n' +
    '• Maximal mit größt verwechseln: ein maximales Element muss **nicht** mit allen vergleichbar sein.',
  beispiele: [
    {
      szenario: 'Äquivalenzrelation nachweisen & Klassen angeben',
      beispiele: [
        '**Aufgabe:** Ist $x \\sim_{R_3} y :\\Leftrightarrow x + y$ gerade auf $\\mathbb{Z}$ eine Äquivalenzrelation? Gib die Klassen an.\n**Lösung:** Reflexiv: $x + x = 2x$ ist gerade, also $x \\sim x$. Symmetrisch: $x + y = y + x$, Bedingung symmetrisch in $x,y$. Transitiv: sind $x+y$ und $y+z$ gerade, so ist $(x+y)+(y+z) = x + z + 2y$ gerade, also auch $x + z$ gerade. Alle drei erfüllt. Zwei Zahlen sind genau dann verwandt, wenn sie **gleiche Parität** haben.\n**Ergebnis:** Äquivalenzrelation; Klassen $\\{2z : z \\in \\mathbb{Z}\\}$ (gerade) und $\\{2z+1 : z \\in \\mathbb{Z}\\}$ (ungerade).',
        '**Aufgabe:** Bestimme für $x \\sim_{R_3} y :\\Leftrightarrow 3 \\mid (y - x)$ auf $\\mathbb{Z}$ die Klasse $[1]$ und die Quotientenmenge.\n**Lösung:** $[1] = \\{ y \\in \\mathbb{Z} : 3 \\mid (y-1) \\} = \\{ 3k + 1 : k \\in \\mathbb{Z} \\} = \\{\\dots, -2, 1, 4, 7, \\dots\\}$. Ebenso $[0] = \\{3k\\}$ und $[2] = \\{3k+2\\}$; weiter ist $[3] = [0]$, $[-1] = [2]$ usw.\n**Ergebnis:** $[1] = \\{3k+1 : k \\in \\mathbb{Z}\\}$, und $\\mathbb{Z}/\\!\\sim_{R_3} = \\{[0], [1], [2]\\}$.',
        '**Aufgabe:** Ist $x \\sim y :\\Leftrightarrow x^2 = y^2$ auf $\\mathbb{R}$ eine Äquivalenzrelation? Gib die Klassen an.\n**Lösung:** Reflexiv ($x^2 = x^2$), symmetrisch ($x^2 = y^2 \\Rightarrow y^2 = x^2$), transitiv ($x^2 = y^2$, $y^2 = z^2 \\Rightarrow x^2 = z^2$). $x^2 = y^2$ bedeutet $y = x$ oder $y = -x$, also enthält jede Klasse genau $x$ und $-x$.\n**Ergebnis:** Äquivalenzrelation; Klassen $\\{x, -x\\}$, d. h. $M/\\!\\sim = \\{\\, \\{x, -x\\} : x \\geq 0 \\,\\}$.',
      ],
    },
    {
      szenario: 'Warum KEINE Äquivalenzrelation? (Gegenbeispiel)',
      beispiele: [
        '**Aufgabe:** Ist $R_1 = \\{(1,1),(2,2),(2,4),(4,4)\\}$ auf $\\{1,2,3,4\\}$ eine Äquivalenzrelation?\n**Lösung:** Reflexiv? Nein: $(3,3) \\notin R_1$, also fehlt die Reflexivität. Symmetrisch? Auch nein: $(2,4) \\in R_1$, aber $(4,2) \\notin R_1$. Schon eine verletzte Eigenschaft genügt.\n**Ergebnis:** Keine Äquivalenzrelation (weder reflexiv noch symmetrisch).',
        '**Aufgabe:** Ist $x \\sim y :\\Leftrightarrow y - x$ durch $2$ **oder** durch $3$ teilbar auf $\\mathbb{Z}$ eine Äquivalenzrelation?\n**Lösung:** Reflexiv ($0$ teilbar) und symmetrisch (Teilbarkeit von $y-x$ und $x-y$ gleich) sind erfüllt. Transitiv? Nein: $2 \\sim 4$ (Differenz $2$, durch $2$ teilbar) und $4 \\sim 7$ (Differenz $3$, durch $3$ teilbar), aber $7 - 2 = 5$ ist weder durch $2$ noch durch $3$ teilbar, also $2 \\not\\sim 7$.\n**Ergebnis:** Keine Äquivalenzrelation (nicht transitiv).',
        '**Aufgabe:** Ist $x \\sim y :\\Leftrightarrow x + y$ **ungerade** auf $\\mathbb{Z}$ eine Äquivalenzrelation?\n**Lösung:** Reflexiv? $x + x = 2x$ ist immer gerade, also gilt $x \\sim x$ **nie** – Reflexivität verletzt. (Zusätzlich nicht transitiv: $1 \\sim 2$ und $2 \\sim 3$, aber $1 + 3 = 4$ gerade, also $1 \\not\\sim 3$.)\n**Ergebnis:** Keine Äquivalenzrelation (nicht reflexiv, nicht transitiv).',
      ],
    },
    {
      szenario: 'Ordnungsrelationen: total oder partiell?',
      beispiele: [
        '**Aufgabe:** Ist $\\leq$ auf $\\mathbb{N}$ eine Ordnungsrelation, und ist sie total?\n**Lösung:** Reflexiv ($x \\leq x$), antisymmetrisch ($x \\leq y$ und $y \\leq x \\Rightarrow x = y$), transitiv ($x \\leq y \\leq z \\Rightarrow x \\leq z$). Je zwei Zahlen sind vergleichbar: stets $x \\leq y$ oder $y \\leq x$.\n**Ergebnis:** Ordnungsrelation, sogar **Totalordnung**; kleinstes Element $0$, kein größtes.',
        '**Aufgabe:** Ist $\\subseteq$ auf der Potenzmenge $\\mathbb{P}(\\{1,2\\})$ eine Ordnungsrelation? Total?\n**Lösung:** $\\subseteq$ ist reflexiv ($X \\subseteq X$), antisymmetrisch ($X \\subseteq Y$ und $Y \\subseteq X \\Rightarrow X = Y$) und transitiv. Aber $\\{1\\}$ und $\\{2\\}$ sind **nicht** vergleichbar (keine ist Teilmenge der anderen).\n**Ergebnis:** Ordnungsrelation, aber nur **partiell**; kleinstes Element $\\emptyset$, größtes $\\{1,2\\}$.',
        '**Aufgabe:** Betrachte die Teilbarkeit $\\mid$ auf $M = \\{2, 3, 4, 6, 12\\}$. Bestimme minimale und maximale Elemente.\n**Lösung:** $\\mid$ ist auf $\\mathbb{N}^{*}$ eine partielle Ordnung. Über $2$ und $3$ steht kein Teiler aus $M$ (kein $x \\in M$ mit $x \\mid 2$ bzw. $x \\mid 3$ außer ihnen selbst), also sind $2, 3$ **minimal**. $12$ wird von allen anderen geteilt und teilt nichts Größeres in $M$, also **maximal** (und zugleich größtes). $2$ und $3$ sind nicht vergleichbar, daher gibt es **kein** kleinstes Element.\n**Ergebnis:** Minimal: $2$ und $3$; maximal: $12$ (größtes Element); kein kleinstes Element.',
      ],
    },
  ],
}
