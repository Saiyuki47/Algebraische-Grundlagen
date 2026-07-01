import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'relationen-verkettung',
  titel: 'Relationen – Verkettung & Hüllen',
  inhalt:
    '**Worum geht es?**\n' +
    'Aus gegebenen Relationen baut man neue: Zwei Relationen lassen sich **hintereinanderausführen** (Verkettung), man kann sie **umkehren** (inverse Relation) und **iterieren** (Potenzen). Damit lässt sich eine Relation außerdem zur kleinsten größeren Relation ergänzen, die eine gewünschte Eigenschaft hat – ihrer **Hülle**. Das ist der Standardweg, um z. B. aus einer beliebigen Relation eine Äquivalenzrelation zu machen.\n' +
    '\n' +
    '**Verkettung (Komposition)**\n' +
    'Sind $A, B, C$ Mengen und $R \\subseteq A \\times B$, $S \\subseteq B \\times C$, so ist die **Verkettung** $S \\circ R \\subseteq A \\times C$ definiert durch\n' +
    '$S \\circ R = \\{(a,c) \\in A \\times C : \\exists\\, b \\in B \\text{ mit } (a,b) \\in R \\text{ und } (b,c) \\in S\\}$.\n' +
    'Man verbindet $a$ mit $c$, wenn es ein **Zwischenelement** $b$ gibt, über das $R$ von $a$ nach $b$ und $S$ von $b$ nach $c$ führt. Wichtig: $S \\circ R$ bedeutet **erst R, dann S** (wie bei Funktionen $g \\circ f$: erst $f$, dann $g$). Die Reihenfolge ist entscheidend, denn im Allgemeinen ist $S \\circ R \\neq R \\circ S$.\n' +
    '\n' +
    '**Inverse Relation (Umkehrrelation)**\n' +
    'Die **Umkehrrelation** von $R \\subseteq A \\times B$ entsteht durch Vertauschen der Paar-Komponenten:\n' +
    '$R^{-1} = \\{(y,x) \\in B \\times A : (x,y) \\in R\\}$.\n' +
    'Jeder Pfeil wird also umgedreht. $R^{-1}$ existiert für **jede** Relation (kein Sonderfall nötig); ist $R$ zusätzlich eine bijektive Funktion, so ist $R^{-1}$ gerade die Umkehrfunktion. Es gilt stets $(R^{-1})^{-1} = R$.\n' +
    '\n' +
    '**Potenzen einer Relation**\n' +
    'Ist $R$ eine Relation auf **einer** Menge $M$ (also $R \\subseteq M \\times M$), kann man $R$ mit sich selbst verketten. Man setzt $R^1 = R$ und\n' +
    '$R^{n+1} = R \\circ R^n$.\n' +
    'Anschaulich: $(x,y) \\in R^n$ heißt, man kommt von $x$ zu $y$ über **genau n Pfeile** in $R$ (einen Weg der Länge $n$). Auf endlichen Mengen bricht die Folge ab: irgendwann ist $R^{n} = \\emptyset$ oder wiederholt sich.\n' +
    '\n' +
    '**Hüllen – eine Eigenschaft „erzwingen"**\n' +
    'Die **Hülle** von $R$ bezüglich einer Eigenschaft E ist die **kleinste** Relation, die $R$ enthält und E besitzt. „Kleinste" heißt: man fügt nur die Paare hinzu, die E zwingend verlangt, und **kein einziges** mehr. Man vergrößert $R$ also so sparsam wie möglich.\n' +
    '\n' +
    '| Hülle | Man ergänzt $R$ um … | Formel |\n' +
    '|---|---|---|\n' +
    '| reflexive Hülle $R_r$ | alle Paare $(x,x)$ | $R \\cup I_M$ |\n' +
    '| symmetrische Hülle $R_s$ | zu jedem Pfeil den Rückpfeil | $R \\cup R^{-1}$ |\n' +
    '| transitive Hülle $R_t$ | alle „Durchreich"-Paare | $R \\cup R^2 \\cup R^3 \\cup \\dots$ |\n' +
    '\n' +
    'Dabei ist $I_M = \\{(x,x) : x \\in M\\}$ die **Identitätsrelation** auf $M$. Die transitive Hülle schreibt man kompakt als $R^{+} = \\bigcup_{n \\ge 1} R^n$ (auf endlichem $M$ eine endliche Vereinigung, da $R^n$ ab einem $n$ leer wird).\n' +
    '\n' +
    '**Wie bildet man die transitive Hülle Schritt für Schritt?**\n' +
    '1. $R^2 = R \\circ R$ berechnen: für jedes Paar $(x,y) \\in R$ und $(y,z) \\in R$ nimm $(x,z)$ auf.\n' +
    '2. Weiter $R^3 = R \\circ R^2$, $R^4 = R \\circ R^3$, … bis $R^{n} = \\emptyset$ (oder nichts Neues mehr auftaucht).\n' +
    '3. Alle Potenzen vereinigen: $R^{+} = R \\cup R^2 \\cup R^3 \\cup \\dots$.\n' +
    'Kleinste **Äquivalenzrelation**, die $R$ enthält: nacheinander **reflexive**, dann **symmetrische**, dann **transitive** Hülle bilden – in dieser Reihenfolge, sonst kann das Ergebnis erneut eine Eigenschaft verlieren.\n' +
    '\n' +
    '**Nützliche Charakterisierungen (über $\\circ$ und $R^{-1}$)**\n' +
    '$R$ ist **reflexiv** genau dann, wenn $I_M \\subseteq R$. $R$ ist **symmetrisch** genau dann, wenn $R^{-1} = R$. $R$ ist **transitiv** genau dann, wenn $R \\circ R \\subseteq R$ (Verketten führt aus $R$ nicht heraus). $R$ ist **antisymmetrisch** genau dann, wenn $R \\cap R^{-1} \\subseteq I_M$, und **asymmetrisch** genau dann, wenn $R \\cap R^{-1} = \\emptyset$.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Reihenfolge bei $S \\circ R$ verwechseln – gemeint ist **erst R, dann S**; man sucht das Zwischenelement in der Mitte.\n' +
    '• Bei der Hülle **zu viel** hinzufügen: die Hülle ist die *kleinste* passende Relation, nicht einfach $M \\times M$.\n' +
    '• Bei der transitiven Hülle nach $R^2$ aufhören – man muss weiter potenzieren, bis nichts Neues mehr dazukommt.\n' +
    '• Für eine Äquivalenz-Hülle die drei Hüllen in falscher Reihenfolge bilden (nötig ist reflexiv → symmetrisch → transitiv).',
  beispiele: [
    {
      szenario: 'Verkettung & Umkehrrelation berechnen',
      beispiele: [
        '**Aufgabe:** $A = B = \\{1,2,3,4,5\\}$, $C = \\{6,7,8,9,10\\}$, $R = \\{(1,2),(2,3),(3,4),(4,5),(5,1)\\}$, $S = \\{(1,8),(1,9),(1,6),(2,6),(3,7),(3,10),(5,7)\\}$. Bilde $S \\circ R$.\n**Lösung:** Für jedes $(a,b) \\in R$ suche alle $(b,c) \\in S$ und nimm $(a,c)$. $(1,2) \\in R$ und $(2,6) \\in S \\Rightarrow (1,6)$. $(2,3)$ und $(3,7),(3,10) \\Rightarrow (2,7),(2,10)$. $(3,4)$: kein $(4,\\cdot) \\in S$. $(4,5)$ und $(5,7) \\Rightarrow (4,7)$. $(5,1)$ und $(1,8),(1,9),(1,6) \\Rightarrow (5,8),(5,9),(5,6)$.\n**Ergebnis:** $S \\circ R = \\{(1,6),(2,7),(2,10),(4,7),(5,8),(5,9),(5,6)\\}$.',
        '**Aufgabe:** Gib zur Verkettung aus der vorigen Aufgabe die Umkehrrelation $(S \\circ R)^{-1}$ an.\n**Lösung:** In jedem Paar die Komponenten vertauschen (jeden Pfeil umdrehen).\n**Ergebnis:** $(S \\circ R)^{-1} = \\{(6,1),(7,2),(10,2),(7,4),(8,5),(9,5),(6,5)\\}$.',
        '**Aufgabe:** Sei $M = \\{1,2,3,4\\}$ und $R = \\{(1,2),(2,3),(3,4)\\}$. Bestimme $R^2$ (also $R \\circ R$).\n**Lösung:** Wege der Länge $2$: $(1,2)$ und $(2,3) \\Rightarrow (1,3)$; $(2,3)$ und $(3,4) \\Rightarrow (2,4)$; von $4$ geht kein weiterer Pfeil ab.\n**Ergebnis:** $R^2 = \\{(1,3),(2,4)\\}$.',
      ],
    },
    {
      szenario: 'Reflexive & symmetrische Hülle',
      beispiele: [
        '**Aufgabe:** Bestimme die reflexive Hülle der „kleiner"-Relation $R_< = \\{(x,y) \\in \\mathbb{R} \\times \\mathbb{R} : x < y\\}$ auf $\\mathbb{R}$.\n**Lösung:** Reflexiv fehlen genau die Paare $(x,x)$. Ergänze $R_< \\cup I_{\\mathbb{R}} = R_< \\cup \\{(x,x) : x \\in \\mathbb{R}\\}$. Aus $x < y$ oder $x = y$ wird $x \\le y$.\n**Ergebnis:** die „kleiner-gleich"-Relation $R_{\\le} = \\{(x,y) : x \\le y\\}$.',
        '**Aufgabe:** Bestimme die symmetrische Hülle der „kleiner-gleich"-Relation $R_{\\le} = \\{(x,y) \\in \\mathbb{R} \\times \\mathbb{R} : x \\le y\\}$ auf $\\mathbb{R}$.\n**Lösung:** Ergänze zu jedem Pfeil den Rückpfeil: $R_{\\le} \\cup R_{\\le}^{-1}$. Nun ist $(x,y)$ enthalten, falls $x \\le y$ **oder** $y \\le x$ – und das trifft auf je zwei reelle Zahlen immer zu.\n**Ergebnis:** $\\mathbb{R} \\times \\mathbb{R}$ (die Allrelation).',
        '**Aufgabe:** Sei $M = \\{1,2,3\\}$ und $R = \\{(1,2),(2,3)\\}$. Bilde die symmetrische Hülle $R_s$.\n**Lösung:** $R^{-1} = \\{(2,1),(3,2)\\}$; vereinige $R \\cup R^{-1}$.\n**Ergebnis:** $R_s = \\{(1,2),(2,1),(2,3),(3,2)\\}$.',
      ],
    },
    {
      szenario: 'Transitive Hülle & Äquivalenz-Hülle',
      beispiele: [
        '**Aufgabe:** Bilde die transitive Hülle von $R = \\{(1,2),(1,3),(2,3),(3,4),(5,6)\\}$ auf $\\{1,\\dots,6\\}$.\n**Lösung:** $R^2 = R \\circ R = \\{(1,3),(1,4),(2,4)\\}$ (z. B. $(1,2)$ und $(2,3) \\Rightarrow (1,3)$; $(1,3)$ und $(3,4) \\Rightarrow (1,4)$; $(2,3)$ und $(3,4) \\Rightarrow (2,4)$). $R^3 = R \\circ R^2 = \\{(1,4)\\}$. $R^4 = \\emptyset$. Vereinigen: $R \\cup R^2 \\cup R^3$.\n**Ergebnis:** $R^{+} = \\{(1,2),(1,3),(2,3),(3,4),(5,6),(1,4),(2,4)\\}$.',
        '**Aufgabe:** Bestimme die kleinste Äquivalenzrelation auf $\\{1,\\dots,6\\}$, die $S = \\{(2,1),(1,5),(3,4)\\}$ enthält, und gib die Äquivalenzklassen an.\n**Lösung:** Erst reflexive Hülle: $S_r = S \\cup \\{(1,1),\\dots,(6,6)\\}$. Dann symmetrische Hülle $(S_r)_s$: zusätzlich $(1,2),(5,1),(4,3)$. Dann transitive Hülle: aus $(2,1)$ und $(1,5)$ folgt $(2,5)$, symmetrisch $(5,2)$. Mehr kommt nicht hinzu.\n**Ergebnis:** Äquivalenzrelation mit Klassen $[1] = \\{1,2,5\\}$, $[3] = \\{3,4\\}$, $[6] = \\{6\\}$.',
        '**Aufgabe:** Sei $M = \\{1,2,3\\}$ und $R = \\{(1,2),(2,3)\\}$. Ist $R$ transitiv, und wie lautet die transitive Hülle?\n**Lösung:** $R^2 = \\{(1,3)\\}$, und $(1,3) \\notin R$ – also ist $R$ **nicht** transitiv. Da $R^3 = \\emptyset$, ist $R^{+} = R \\cup R^2$.\n**Ergebnis:** $R^{+} = \\{(1,2),(2,3),(1,3)\\}$ (transitiv).',
      ],
    },
  ],
}
