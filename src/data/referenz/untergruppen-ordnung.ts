import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'untergruppen-ordnung',
  titel: 'Untergruppen, Ordnung & zyklische Gruppen',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine Gruppe kann große oder komplizierte „Teil-Gruppen" in sich tragen — z. B. steckt in $(\\mathbb{Z},+)$ die Menge aller Vielfachen von $3$ als eigene Gruppe. Solche **Untergruppen** verraten den Bau einer Gruppe. Zwei Zahlen messen ihn: die **Ordnung** $\\lvert G\\rvert$ (wie viele Elemente hat $G$) und die **Ordnung eines Elements** $\\operatorname{ord}(a)$ (wie oft muss man $a$ mit sich verknüpfen, bis $e$ herauskommt). Am wichtigsten ist der **Satz von Lagrange**: die Ordnung jeder Untergruppe teilt $\\lvert G\\rvert$ — daraus folgt sofort $\\operatorname{ord}(a) \\mid \\lvert G\\rvert$. Das schränkt drastisch ein, welche Untergruppen und Elementordnungen überhaupt möglich sind.\n' +
    '\n' +
    '**Definition: Untergruppe**\n' +
    'Sei $(G,\\ast)$ eine Gruppe mit Neutralelement $e$. Eine Teilmenge $U \\subseteq G$ heißt **Untergruppe** von $G$ (Schreibweise $U \\le G$), wenn $(U,\\ast)$ mit **derselben** Verknüpfung selbst wieder eine Gruppe ist. Konkret bedeutet das drei Bedingungen:\n' +
    '(U0) $U$ ist **nichtleer** (gleichwertig: $e \\in U$).\n' +
    '(U1) **Abgeschlossen** unter $\\ast$: für alle $a,b \\in U$ ist $a \\ast b \\in U$.\n' +
    '(U2) **Abgeschlossen unter Inversenbildung**: für jedes $a \\in U$ ist auch $a^{-1} \\in U$.\n' +
    'Assoziativität muss man **nicht** prüfen — sie „erbt" sich von $G$ auf jede Teilmenge. Jede Gruppe hat die beiden **trivialen** Untergruppen $\\{e\\}$ und $G$ selbst; alle anderen heißen **echte** Untergruppen.\n' +
    '\n' +
    '**Untergruppenkriterium**\n' +
    'Statt (U0)–(U2) einzeln zu prüfen, genügt ein einziger Test. Eine nichtleere Teilmenge $U \\subseteq G$ ist genau dann eine Untergruppe, wenn gilt: für alle $a,b \\in U$ ist $a \\ast b^{-1} \\in U$. (Bei additiver Schreibweise: $a - b \\in U$.) Das fasst Abgeschlossenheit und Inversenbildung in einem Schritt zusammen.\n' +
    '\n' +
    '**Ordnung einer Gruppe und eines Elements**\n' +
    'Die **Ordnung** einer Gruppe ist ihre Elementanzahl $\\lvert G\\rvert$; ist sie endlich, heißt $G$ **endliche Gruppe**. Die **Ordnung eines Elements** $a \\in G$ ist die kleinste natürliche Zahl $k \\ge 1$ mit $a^k = e$ (dabei ist $a^k = a \\ast a \\ast \\dots \\ast a$ mit $k$ Faktoren, bei $+$ ist $a^k = k\\cdot a$). Schreibweise $\\operatorname{ord}(a)$. Gibt es kein solches $k$, so ist $\\operatorname{ord}(a) = \\infty$. Stets gilt $\\operatorname{ord}(e) = 1$, und $\\operatorname{ord}(a) = 1$ nur für $a = e$.\n' +
    '\n' +
    '**Erzeugte (zyklische) Untergruppe**\n' +
    'Sammelt man alle Potenzen eines festen Elements $a$, entsteht die **von a erzeugte Untergruppe**\n' +
    '$\\langle a\\rangle = \\{a^k : k \\in \\mathbb{Z}\\} = \\{\\dots, a^{-2}, a^{-1}, e, a, a^2, \\dots\\}$.\n' +
    'Sie ist die **kleinste** Untergruppe, die $a$ enthält. Wichtiger Zusammenhang: $\\lvert\\langle a\\rangle\\rvert = \\operatorname{ord}(a)$ — die Größe der erzeugten Untergruppe ist genau die Ordnung des Elements. Bei endlicher Ordnung $\\operatorname{ord}(a) = n$ ist $\\langle a\\rangle = \\{e, a, a^2, \\dots, a^{n-1}\\}$.\n' +
    '\n' +
    '**Zyklische Gruppe**\n' +
    'Eine Gruppe $G$ heißt **zyklisch**, wenn es ein Element $g \\in G$ gibt mit $G = \\langle g\\rangle$; ein solches $g$ heißt **erzeugendes Element** (Erzeuger). Zyklische Gruppen sind stets **abelsch**, denn $g^i \\ast g^j = g^{i+j} = g^j \\ast g^i$. Beispiele: $(\\mathbb{Z},+) = \\langle 1\\rangle$ (unendlich zyklisch) und $(\\mathbb{Z}_n,+) = \\langle [1]\\rangle$ (endlich zyklisch mit $n$ Elementen).\n' +
    '\n' +
    '**Satz von Lagrange**\n' +
    'Ist $G$ eine **endliche** Gruppe und $U \\le G$ eine Untergruppe, so **teilt** $\\lvert U\\rvert$ die Zahl $\\lvert G\\rvert$:\n' +
    '$\\lvert U\\rvert \\mid \\lvert G\\rvert$.\n' +
    'Da $\\langle a\\rangle$ eine Untergruppe mit $\\lvert\\langle a\\rangle\\rvert = \\operatorname{ord}(a)$ ist, folgt sofort die **Folgerung**: $\\operatorname{ord}(a) \\mid \\lvert G\\rvert$ für jedes $a \\in G$. Weitere Folgerung: $a^{\\lvert G\\rvert} = e$ für alle $a \\in G$, und jede Gruppe von **Primzahlordnung** $p$ ist zyklisch (jedes $a \\neq e$ erzeugt bereits ganz $G$).\n' +
    '\n' +
    '**Wie bestimmt man das? (Schritt für Schritt)**\n' +
    '1. **Ordnung eines Elements:** Potenzen $a^1, a^2, a^3, \\dots$ (bzw. Vielfache $1a, 2a, \\dots$) nacheinander bilden, bis zum ersten Mal $e$ herauskommt; der Exponent ist $\\operatorname{ord}(a)$.\n' +
    '2. **Erzeugte Untergruppe** $\\langle a\\rangle$: genau diese durchlaufenen Potenzen bis $a^{\\operatorname{ord}(a)} = e$ aufsammeln.\n' +
    '3. **Zyklisch?** Ein Element suchen, dessen Ordnung gleich $\\lvert G\\rvert$ ist. Findet man eines, ist $G$ zyklisch (und dieses Element ein Erzeuger); haben **alle** Elemente kleinere Ordnung, ist $G$ nicht zyklisch.\n' +
    '4. **Untergruppe prüfen:** $U \\neq \\emptyset$ und Untergruppenkriterium $a \\ast b^{-1} \\in U$ nachweisen — als schneller Vorab-Filter: nach Lagrange muss $\\lvert U\\rvert$ ein Teiler von $\\lvert G\\rvert$ sein.\n' +
    '\n' +
    '**Beispiele im Überblick**\n' +
    '| Gruppe $G$ | $\\lvert G\\rvert$ | zyklisch? | Erzeuger / Bemerkung |\n' +
    '|---|---|---|---|\n' +
    '| $(\\mathbb{Z}_7^{\\ast},\\cdot)$ | $6$ | ja | $\\langle 3\\rangle = \\mathbb{Z}_7^{\\ast}$, $\\operatorname{ord}(3)=6$ |\n' +
    '| $(\\mathbb{Z}_8^{\\ast},\\cdot)$ | $4$ | nein | jedes $a\\neq 1$ hat Ordnung $2$ |\n' +
    '| $(\\mathbb{Z}_n,+)$ | $n$ | ja | Erzeuger $[1]$ |\n' +
    '| $E=\\{z\\in\\mathbb{C}:z^4=1\\}$ | $4$ | ja | $\\langle i\\rangle$, $\\operatorname{ord}(i)=4$ |\n' +
    '| $(S_3,\\circ)$ | $6$ | nein | größte Elementordnung ist $3$ |\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• **Abgeschlossenheit / Inverses** einer Untergruppe vergessen: eine Teilmenge kann $e$ enthalten und trotzdem keine Untergruppe sein (z. B. $\\{0,1,2\\} \\subseteq \\mathbb{Z}$ mit $+$: $1+2 = 3$ fällt heraus).\n' +
    '• $\\lvert G\\rvert$ teilbar heißt **nicht**, dass zu jedem Teiler ein Element dieser Ordnung existiert — Lagrange liefert nur, dass Ordnungen **Teiler** sein müssen (in $\\mathbb{Z}_8^{\\ast}$ gibt es kein Element der Ordnung $4$, obwohl $4 \\mid 4$).\n' +
    '• „$\\lvert G\\rvert$ gerade/klein, also zyklisch" — falsch: $\\mathbb{Z}_8^{\\ast}$ und $S_3$ sind nicht zyklisch.\n' +
    '• Beim Bilden von $\\operatorname{ord}(a)$ über die $e$-Potenz **hinausrechnen**: gesucht ist der **kleinste** Exponent mit $a^k = e$.\n' +
    '• additiv vs. multiplikativ verwechseln: bei $+$ heißt $a^k$ das $k$-fache $k\\cdot a$, und $e = 0$; bei $\\cdot$ ist $e = 1$.',
  beispiele: [
    {
      szenario: 'Ordnung eines Elements bestimmen',
      beispiele: [
        '**Aufgabe:** Bestimme in $(\\mathbb{Z}_7^{\\ast},\\cdot)$ die Ordnung von $[3]$.\n**Lösung:** Potenzen modulo $7$ bilden, bis $[1]$ erscheint: $3^1=3$, $3^2=9\\equiv 2$, $3^3\\equiv 2\\cdot 3=6$, $3^4\\equiv 6\\cdot 3=18\\equiv 4$, $3^5\\equiv 4\\cdot 3=12\\equiv 5$, $3^6\\equiv 5\\cdot 3=15\\equiv 1$. Erstmals $[1]$ bei $k=6$.\n**Ergebnis:** $\\operatorname{ord}([3])=6$.',
        '**Aufgabe:** Bestimme in $(\\mathbb{Z}_8^{\\ast},\\cdot)$ die Ordnung von $[3]$.\n**Lösung:** $3^1=3\\neq 1$, $3^2=9\\equiv 1 \\pmod 8$. Schon bei $k=2$ kommt $[1]$ heraus.\n**Ergebnis:** $\\operatorname{ord}([3])=2$.',
        '**Aufgabe:** Bestimme in $(\\mathbb{Z}_6,+)$ die Ordnung von $[2]$ (additiv!).\n**Lösung:** Vielfache bilden bis zur $[0]$: $1\\cdot[2]=[2]$, $2\\cdot[2]=[4]$, $3\\cdot[2]=[6]=[0]$. Erstmals $[0]$ bei $k=3$.\n**Ergebnis:** $\\operatorname{ord}([2])=3$.',
      ],
    },
    {
      szenario: 'Erzeugte Untergruppe ⟨a⟩ & zyklisch',
      beispiele: [
        '**Aufgabe:** Bestimme $\\langle [2]\\rangle$ in $(\\mathbb{Z}_7^{\\ast},\\cdot)$. Ist die Gruppe damit zyklisch?\n**Lösung:** $2^1=2$, $2^2=4$, $2^3=8\\equiv 1$. Also $\\langle [2]\\rangle=\\{[1],[2],[4]\\}$ mit $\\operatorname{ord}([2])=3$. Das sind nur $3$ von $6$ Elementen, $[2]$ erzeugt $\\mathbb{Z}_7^{\\ast}$ **nicht**. (Ein Erzeuger ist z. B. $[3]$ mit Ordnung $6$.)\n**Ergebnis:** $\\langle [2]\\rangle=\\{[1],[2],[4]\\}$, eine echte Untergruppe der Ordnung $3$; $\\mathbb{Z}_7^{\\ast}$ ist zyklisch, aber nicht über $[2]$.',
        '**Aufgabe:** Zeige, dass $E=\\{z\\in\\mathbb{C}:z^4=1\\}$ mit $\\cdot$ zyklisch ist, und gib einen Erzeuger an.\n**Lösung:** Die Lösungen von $z^4=1$ sind $E=\\{1,\\,i,\\,-1,\\,-i\\}$, also $\\lvert E\\rvert=4$. Potenzen von $i$: $i^1=i$, $i^2=-1$, $i^3=-i$, $i^4=1$. Somit $\\langle i\\rangle=\\{1,i,-1,-i\\}=E$ und $\\operatorname{ord}(i)=4=\\lvert E\\rvert$.\n**Ergebnis:** $E$ ist zyklisch mit Erzeuger $i$ (ebenso $-i$).',
        '**Aufgabe:** Ist $(S_3,\\circ)$ zyklisch?\n**Lösung:** $\\lvert S_3\\rvert=6$. Die Ordnungen der Elemente sind: Identität $\\operatorname{ord}=1$; die drei Transpositionen (z. B. $\\bigl(\\begin{smallmatrix}1&2&3\\\\1&3&2\\end{smallmatrix}\\bigr)$) haben $\\operatorname{ord}=2$; die beiden $3$-Zykel $\\operatorname{ord}=3$. Kein Element hat Ordnung $6$, also erzeugt keines ganz $S_3$.\n**Ergebnis:** Nein, $S_3$ ist nicht zyklisch (und wegen $\\sigma\\circ\\tau\\neq\\tau\\circ\\sigma$ auch nicht abelsch).',
      ],
    },
    {
      szenario: 'Untergruppe nachweisen / widerlegen',
      beispiele: [
        '**Aufgabe:** Ist $U=\\{3z:z\\in\\mathbb{Z}\\}$ (alle Vielfachen von $3$) eine Untergruppe von $(\\mathbb{Z},+)$?\n**Lösung:** $U\\neq\\emptyset$, denn $0=3\\cdot 0\\in U$. Untergruppenkriterium (additiv $a-b\\in U$): für $a=3z_1$, $b=3z_2$ ist $a-b=3z_1-3z_2=3(z_1-z_2)\\in U$.\n**Ergebnis:** Ja, $U=3\\mathbb{Z}\\le(\\mathbb{Z},+)$ (eine unendliche zyklische Untergruppe, $U=\\langle 3\\rangle$).',
        '**Aufgabe:** Ist $U=\\{[1],[3]\\}$ eine Untergruppe von $(\\mathbb{Z}_8^{\\ast},\\cdot)$?\n**Lösung:** $U\\neq\\emptyset$ und $[1]\\in U$. Abgeschlossen: $[3]\\cdot[3]=[9]=[1]\\in U$. Inverse: $[3]^{-1}=[3]$ (da $[3][3]=[1]$) und $[1]^{-1}=[1]$, beide in $U$. Alternativ direkt $\\langle [3]\\rangle=\\{[1],[3]\\}$, und erzeugte Mengen sind stets Untergruppen. Nach Lagrange passt $\\lvert U\\rvert=2 \\mid 4=\\lvert\\mathbb{Z}_8^{\\ast}\\rvert$.\n**Ergebnis:** Ja, $U\\le\\mathbb{Z}_8^{\\ast}$, Ordnung $2$.',
        '**Aufgabe:** Ist $U=\\{[0],[2],[3]\\}$ eine Untergruppe von $(\\mathbb{Z}_6,+)$?\n**Lösung:** Erst der Lagrange-Schnelltest: $\\lvert U\\rvert=3$ teilt $\\lvert\\mathbb{Z}_6\\rvert=6$, also (noch) kein Widerspruch. Aber Abgeschlossenheit prüfen: $[2]+[3]=[5]\\notin U$.\n**Ergebnis:** Nein — $U$ ist nicht abgeschlossen unter $+$, also keine Untergruppe.',
      ],
    },
    {
      szenario: 'Satz von Lagrange anwenden',
      beispiele: [
        '**Aufgabe:** Welche Elementordnungen sind in einer Gruppe mit $\\lvert G\\rvert=6$ überhaupt möglich?\n**Lösung:** Nach der Folgerung aus Lagrange muss $\\operatorname{ord}(a)$ ein Teiler von $6$ sein. Die Teiler von $6$ sind $1,2,3,6$.\n**Ergebnis:** Möglich sind nur die Ordnungen $1,2,3,6$ — etwa $4$ oder $5$ kann kein Element haben.',
        '**Aufgabe:** In $(\\mathbb{Z}_8^{\\ast},\\cdot)$ gilt $\\lvert G\\rvert=4$. Welche Untergruppen-Ordnungen kommen in Frage, und gibt es ein Element der Ordnung $4$?\n**Lösung:** Untergruppenordnungen müssen $4$ teilen: möglich sind $1,2,4$. Für ein Element der Ordnung $4$ müsste $G=\\langle a\\rangle$ zyklisch sein. Es ist aber $3^2=5^2=7^2\\equiv 1$, jedes $a\\neq[1]$ hat Ordnung $2$.\n**Ergebnis:** Untergruppen der Ordnung $1,2,4$ sind erlaubt; ein Element der Ordnung $4$ existiert **nicht** ($\\mathbb{Z}_8^{\\ast}$ ist nicht zyklisch, obwohl $4\\mid 4$).',
        '**Aufgabe:** Begründe mit Lagrange, dass jede Gruppe $G$ mit $\\lvert G\\rvert=5$ zyklisch ist.\n**Lösung:** $5$ ist prim. Wähle irgendein $a\\neq e$. Dann teilt $\\operatorname{ord}(a)$ die $5$, ist aber $\\neq 1$ (nur $e$ hat Ordnung $1$), also $\\operatorname{ord}(a)=5$. Damit hat $\\langle a\\rangle$ schon $5=\\lvert G\\rvert$ Elemente, also $\\langle a\\rangle=G$.\n**Ergebnis:** $G$ ist zyklisch — allgemein ist jede Gruppe von Primzahlordnung zyklisch.',
      ],
    },
  ],
}
