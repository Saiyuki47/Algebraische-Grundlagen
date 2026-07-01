import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'relationen-eigenschaften',
  titel: 'Relationen – Eigenschaften',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine **Relation** stellt Elemente miteinander in Beziehung – z. B. „ist kleiner als", „teilt", „hat am selben Tag Geburtstag wie". Um solche Beziehungen zu vergleichen und einzuordnen, prüft man sie auf einige **Grundeigenschaften**: reflexiv, symmetrisch, antisymmetrisch, transitiv. Aus diesen setzen sich später die wichtigen Bausteine zusammen – **Äquivalenzrelationen** (klassifizieren, „gleich behandeln") und **Ordnungsrelationen** (anordnen, „vergleichen").\n' +
    '\n' +
    '**Was ist eine (binäre) Relation?**\n' +
    'Sind $A$ und $B$ Mengen, so ist eine **binäre** (zweistellige) Relation zwischen $A$ und $B$ einfach eine Teilmenge $R \\subseteq A \\times B$ des kartesischen Produkts, also eine Menge geordneter Paare. Steht ein Paar in der Relation, schreibt man gleichbedeutend $(a,b) \\in R$ oder $a\\,R\\,b$. Interessiert man sich für Beziehungen **innerhalb einer** Menge $M$, betrachtet man eine **Relation auf M**: $R \\subseteq M \\times M$. Übliche Schreibweisen sind dann $x\\,R\\,y$, $x \\sim_R y$ oder kurz $x \\sim y$; für „steht nicht in Relation" $x \\not\\sim_R y$.\n' +
    '\n' +
    '**Die vier Eigenschaften (Relation $R$ auf $M$)**\n' +
    'Sei $R$ eine Relation auf einer Menge $M$. $R$ heißt\n' +
    '• **reflexiv**, falls für alle $x \\in M$ gilt $x \\sim_R x$ (jedes Element steht zu sich selbst in Relation).\n' +
    '• **symmetrisch**, falls für alle $x,y \\in M$ gilt: aus $x \\sim_R y$ folgt $y \\sim_R x$ (Paare sind „umkehrbar").\n' +
    '• **antisymmetrisch**, falls für alle $x,y \\in M$ gilt: aus $x \\sim_R y$ und $y \\sim_R x$ folgt $x = y$ (nur bei gleichen Elementen dürfen beide Richtungen gelten).\n' +
    '• **transitiv**, falls für alle $x,y,z \\in M$ gilt: aus $x \\sim_R y$ und $y \\sim_R z$ folgt $x \\sim_R z$ (Beziehungen sind „durchschaltbar").\n' +
    'Verwandte Begriffe: **irreflexiv** ($x \\not\\sim_R x$ für alle $x$) und **asymmetrisch** (aus $x \\sim_R y$ folgt $y \\not\\sim_R x$). Achtung: „nicht symmetrisch" bedeutet **nicht** automatisch antisymmetrisch – das sind verschiedene Eigenschaften.\n' +
    '\n' +
    '**Wie prüft man eine Eigenschaft nach?**\n' +
    '1. **Nachweisen** (Eigenschaft gilt): Nimm **beliebige** Elemente mit der Voraussetzung an (bei Transitivität etwa $x \\sim_R y$ und $y \\sim_R z$) und **zeige allgemein** die Behauptung ($x \\sim_R z$). Ein Rechenbeispiel genügt hier **nicht** – es muss für alle Elemente gelten.\n' +
    '2. **Widerlegen** (Eigenschaft gilt nicht): Ein **einziges Gegenbeispiel** reicht. Für „nicht transitiv" etwa konkrete $x,y,z$ mit $x \\sim_R y$, $y \\sim_R z$, aber $x \\not\\sim_R z$.\n' +
    'Bei **endlichen** Relationen hilft der **Pfeilgraph**: ein Knoten je Element, ein Pfeil $x \\to y$ für jedes $(x,y) \\in R$. Dann ist $R$ reflexiv $\\Leftrightarrow$ jeder Knoten hat eine Schleife; symmetrisch $\\Leftrightarrow$ jeder Pfeil hat den Gegenpfeil; transitiv $\\Leftrightarrow$ zu jedem Pfad $x \\to y \\to z$ gibt es die Abkürzung $x \\to z$.\n' +
    '\n' +
    '**Merke: leere Voraussetzung = Eigenschaft gilt**\n' +
    'Wird die Voraussetzung einer „wenn … dann"-Bedingung **nie** erfüllt, so ist die Aussage **automatisch wahr** (leere Implikation). Beispiel: $R = \\{(2,4)\\}$ auf $\\{2,4,5,8\\}$ ist **transitiv**, weil es keine Paare $x \\sim y$, $y \\sim z$ gibt – die Voraussetzung tritt nie ein.\n' +
    '\n' +
    '**Kurze Kennzeichnung mit $I_M$, $R^{-1}$, $R \\circ R$**\n' +
    'Mit der Identitätsrelation $I_M = \\{(x,x) : x \\in M\\}$ und der Umkehrrelation $R^{-1} = \\{(y,x) : (x,y) \\in R\\}$ lassen sich die Eigenschaften auch mengentheoretisch fassen:\n' +
    '| Eigenschaft | gleichbedeutend mit |\n' +
    '|---|---|\n' +
    '| reflexiv | $I_M \\subseteq R$ |\n' +
    '| irreflexiv | $I_M \\cap R = \\emptyset$ |\n' +
    '| symmetrisch | $R^{-1} = R$ |\n' +
    '| antisymmetrisch | $R \\cap R^{-1} \\subseteq I_M$ |\n' +
    '| asymmetrisch | $R \\cap R^{-1} = \\emptyset$ |\n' +
    '| transitiv | $R \\circ R \\subseteq R$ |\n' +
    '\n' +
    '**Ausblick: Äquivalenz vs. Ordnung**\n' +
    'Zwei Eigenschaftskombinationen sind besonders wichtig (Details je eigene Karte): eine **Äquivalenzrelation** ist **reflexiv, symmetrisch und transitiv** (z. B. „gleicher Rest bei Division"); eine **Ordnungsrelation** ist **reflexiv, antisymmetrisch und transitiv** (z. B. $\\leq$ oder „teilt").\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Eine Eigenschaft „mit einem Beispiel beweisen" – Nachweis braucht **alle** Elemente, nur Widerlegen braucht ein Gegenbeispiel.\n' +
    '• „nicht symmetrisch" mit „antisymmetrisch" verwechseln.\n' +
    '• Reflexivität übersehen: **ein einziges** fehlendes Paar $(x,x)$ macht $R$ schon nicht reflexiv.\n' +
    '• Bei leerer Voraussetzung fälschlich auf „Eigenschaft verletzt" schließen – sie ist dann erfüllt.',
  beispiele: [
    {
      szenario: 'Konkrete Relation auf alle Eigenschaften prüfen',
      beispiele: [
        '**Aufgabe:** $M := \\{2,4,5,8\\}$, $R := \\{(2,2),(2,4),(4,2),(5,8)\\}$. Welche der vier Eigenschaften gelten?\n**Lösung:** **Reflexiv?** Nein: $(4,4) \\notin R$ (auch $(5,5),(8,8)$ fehlen). **Symmetrisch?** Nein: $(5,8) \\in R$, aber $(8,5) \\notin R$. **Antisymmetrisch?** Nein: $(2,4)$ und $(4,2) \\in R$, aber $2 \\neq 4$. **Transitiv?** Nein: $(4,2),(2,4) \\in R$, aber $(4,4) \\notin R$.\n**Ergebnis:** $R$ hat **keine** der vier Eigenschaften.',
        '**Aufgabe:** $R_3 := \\{(m,n) \\in \\mathbb{N}^{*} \\times \\mathbb{N}^{*} : m \\text{ teilt } n\\}$ (Teilbarkeit). Prüfe reflexiv, antisymmetrisch, transitiv.\n**Lösung:** **Reflexiv:** jede Zahl teilt sich selbst ($m \\mid m$), also ja. **Antisymmetrisch:** teilt $m \\mid n$ und $n \\mid m$ bei natürlichen Zahlen, so ist $m = n$ – ja. **Transitiv:** aus $m \\mid n$ und $n \\mid k$ folgt $m \\mid k$ – ja. **Symmetrisch** dagegen nicht: $2 \\mid 4$, aber $4 \\nmid 2$.\n**Ergebnis:** reflexiv, antisymmetrisch, transitiv – also eine **Ordnungsrelation** (partielle Ordnung).',
        '**Aufgabe:** $M$ = alle Menschen, $x\\,R_2\\,y$ genau dann, wenn $x$ und $y$ am selben Tag Geburtstag haben **oder** gleich groß sind. Welche Eigenschaften gelten?\n**Lösung:** **Reflexiv:** jeder hat mit sich selbst denselben Geburtstag – ja. **Symmetrisch:** die Bedingung ist in $x,y$ symmetrisch – ja. **Transitiv?** Nein: $x$ und $y$ gleich groß, $y$ und $z$ am selben Tag Geburtstag; dann müssen $x$ und $z$ weder gleich groß sein noch am selben Tag Geburtstag haben.\n**Ergebnis:** reflexiv und symmetrisch, aber **nicht** transitiv (also keine Äquivalenzrelation).',
      ],
    },
    {
      szenario: 'Eine einzelne Eigenschaft nachweisen oder widerlegen',
      beispiele: [
        '**Aufgabe:** Zeige, dass $R_3 := \\{(x,y) \\in \\mathbb{Z} \\times \\mathbb{Z} : 3 \\text{ teilt } y - x\\}$ **transitiv** ist.\n**Lösung:** Seien $x,y,z \\in \\mathbb{Z}$ **beliebig** mit $x \\sim y$ und $y \\sim z$, also $3 \\mid y - x$ und $3 \\mid z - y$. Zu zeigen: $3 \\mid z - x$. Es ist $z - x = (z - y) + (y - x)$, eine Summe zweier durch $3$ teilbarer Zahlen, also selbst durch $3$ teilbar. Damit $x \\sim z$.\n**Ergebnis:** $R_3$ ist transitiv (Nachweis für **alle** $x,y,z$).',
        '**Aufgabe:** Ist $R := \\{(2,4)\\}$ auf $M := \\{2,4,5,8\\}$ transitiv?\n**Lösung:** Transitivität verlangt: aus $x \\sim y$ **und** $y \\sim z$ folgt $x \\sim z$. Für ein zweites benötigtes Paar $y \\sim z$ müsste $y = 4$ links auftreten – es gibt aber nur $(2,4)$. Die Voraussetzung „$x \\sim y$ und $y \\sim z$" ist also **nie** erfüllt, die Implikation damit stets wahr (leere Aussage).\n**Ergebnis:** $R$ ist transitiv.',
        '**Aufgabe:** Widerlege, dass $R_< := \\{(x,y) \\in \\mathbb{N} \\times \\mathbb{N} : x < y\\}$ reflexiv ist – und bestimme, was stattdessen gilt.\n**Lösung:** Reflexiv hieße $x < x$ für alle $x$ – das ist für **kein** $x$ wahr, insbesondere $(1,1) \\notin R_<$. Also nicht reflexiv, sondern sogar **irreflexiv**. Weiter: $x < y$ und $y < x$ zugleich ist unmöglich, also **asymmetrisch** (und transitiv, da aus $x<y$, $y<z$ folgt $x<z$).\n**Ergebnis:** $R_<$ ist irreflexiv, asymmetrisch und transitiv (nicht reflexiv).',
      ],
    },
    {
      szenario: 'Relation mit vorgegebenen Eigenschaften konstruieren',
      beispiele: [
        '**Aufgabe:** Gib eine Relation auf $\\mathbb{N}$ an, die **reflexiv**, aber **weder symmetrisch noch transitiv** ist.\n**Lösung:** Nimm alle Schleifen (für Reflexivität) und füge zwei „einseitige" Pfeile hinzu, die die Kette $1 \\to 2 \\to 3$ nicht schließen: $R = \\{(n,n) : n \\in \\mathbb{N}\\} \\cup \\{(1,2),(2,3)\\}$. Nicht symmetrisch: $(1,2) \\in R$, $(2,1) \\notin R$. Nicht transitiv: $(1,2),(2,3) \\in R$, aber $(1,3) \\notin R$.\n**Ergebnis:** $R = \\{(n,n) : n \\in \\mathbb{N}\\} \\cup \\{(1,2),(2,3)\\}$.',
        '**Aufgabe:** Gib eine Relation auf $\\mathbb{N}$ an, die **symmetrisch**, aber **weder reflexiv noch transitiv** ist.\n**Lösung:** $R = \\{(1,2),(2,1)\\}$. Symmetrisch: zu $(1,2)$ ist $(2,1)$ dabei. Nicht reflexiv: $(1,1) \\notin R$. Nicht transitiv: $(1,2),(2,1) \\in R$, aber $(1,1) \\notin R$.\n**Ergebnis:** $R = \\{(1,2),(2,1)\\}$.',
        '**Aufgabe:** Gib eine Relation auf $\\mathbb{N}$ an, die **transitiv**, aber **weder reflexiv noch symmetrisch** ist.\n**Lösung:** $R = \\{(1,2)\\}$. Transitiv: die Voraussetzung tritt nie ein (leere Aussage). Nicht reflexiv: $(1,1) \\notin R$. Nicht symmetrisch: $(1,2) \\in R$, $(2,1) \\notin R$. (Als Gegenstück ist $R = \\mathbb{N} \\times \\mathbb{N}$ reflexiv, symmetrisch **und** transitiv.)\n**Ergebnis:** $R = \\{(1,2)\\}$.',
      ],
    },
  ],
}
