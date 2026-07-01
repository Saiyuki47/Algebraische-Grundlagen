import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'koerper',
  titel: 'Körper',
  inhalt:
    '**Worum geht es?**\n' +
    'Ein **Körper** ist eine algebraische Struktur, in der man **uneingeschränkt rechnen** kann: addieren, subtrahieren, multiplizieren und – außer durch $0$ – auch **dividieren**. Genau diese Rechengesetze kennt man von $\\mathbb{Q}$, $\\mathbb{R}$ und $\\mathbb{C}$. Der Körperbegriff fasst zusammen, was all diese Zahlbereiche gemeinsam haben, und macht so denselben Rechenkomfort auch für endliche Strukturen wie $\\mathbb{Z}_p$ verfügbar.\n' +
    '\n' +
    '**Wiederholung: Gruppe und Ring**\n' +
    'Eine **Gruppe** $(G,\\ast)$ ist eine Menge mit einer assoziativen Verknüpfung, einem neutralen Element und einem Inversen zu jedem Element; ist $\\ast$ zusätzlich kommutativ, heißt die Gruppe **kommutativ** (abelsch). Ein **Ring** $(R,+,\\cdot)$ hat **zwei** Verknüpfungen: $(R,+)$ ist eine kommutative Gruppe, $\\cdot$ ist assoziativ, und es gelten die **Distributivgesetze** $a\\cdot(b+c)=a\\cdot b+a\\cdot c$ und $(a+b)\\cdot c=a\\cdot c+b\\cdot c$. Ist $\\cdot$ auch kommutativ und gibt es ein neutrales Element $1\\in R$ mit $a\\cdot 1=1\\cdot a=a$, so ist $R$ ein **kommutativer Ring mit Eins**.\n' +
    '\n' +
    '**Definition: Körper**\n' +
    'Eine Menge $K$ mit zwei Verknüpfungen $+$ und $\\cdot$ heißt **Körper**, falls gilt:\n' +
    '(i) $(K,+)$ ist eine kommutative Gruppe (neutrales Element $0$);\n' +
    '(ii) $(K\\setminus\\{0\\},\\cdot)$ ist eine kommutative Gruppe (neutrales Element $1$);\n' +
    '(iii) es gelten die **Distributivgesetze** $a\\cdot(b+c)=a\\cdot b+a\\cdot c$ und $(a+b)\\cdot c=a\\cdot c+b\\cdot c$.\n' +
    'Kurz: Ein Körper ist ein **kommutativer Ring mit Eins**, in dem $1\\neq 0$ ist und **jedes** Element $a\\neq 0$ ein multiplikatives **Inverses** $a^{-1}$ besitzt (mit $a\\cdot a^{-1}=1$). Dividieren heißt dann nichts anderes als $\\frac{a}{b}=a\\cdot b^{-1}$ für $b\\neq 0$.\n' +
    '\n' +
    '**Die Hierarchie: Gruppe $\\subset$ Ring $\\subset$ Körper**\n' +
    'Jeder Körper ist ein kommutativer Ring mit Eins, und jeder Ring $(R,+,\\cdot)$ ist bezüglich $+$ eine kommutative Gruppe. Die Umkehrung gilt **nicht**: Es gibt Ringe, die keine Körper sind. Der Unterschied steckt allein in Bedingung (ii) – ob auch die **Multiplikation** außerhalb der $0$ eine Gruppe bildet, jedes Element also ein Inverses hat.\n' +
    '\n' +
    '| Struktur | verlangt wird | Beispiel | Gegenbeispiel |\n' +
    '|---|---|---|---|\n' +
    '| Gruppe | eine Verknüpfung, invertierbar | $(\\mathbb{Z},+)$ | $(\\mathbb{N},+)$ |\n' +
    '| kommutativer Ring mit $1$ | $+$-Gruppe, $\\cdot$ assoz./komm., Distrib. | $(\\mathbb{Z},+,\\cdot)$ | $(2\\mathbb{Z},+,\\cdot)$ |\n' +
    '| Körper | zusätzlich: jedes $a\\neq 0$ hat $a^{-1}$ | $(\\mathbb{Q},+,\\cdot)$ | $(\\mathbb{Z},+,\\cdot)$ |\n' +
    '\n' +
    '**Wichtige Beispiele**\n' +
    '$(\\mathbb{Q},+,\\cdot)$, $(\\mathbb{R},+,\\cdot)$ und $(\\mathbb{C},+,\\cdot)$ sind Körper. $(\\mathbb{Z},+,\\cdot)$ ist **kein** Körper: es ist zwar ein kommutativer Ring mit Eins, aber z. B. hat $2$ kein Inverses in $\\mathbb{Z}$ (denn $\\frac{1}{2}\\notin\\mathbb{Z}$). $\\mathbb{Z}$ ist also das Standard-Beispiel dafür, dass „Ring mit Eins" noch **nicht** „Körper" bedeutet.\n' +
    '\n' +
    '**Endliche Körper: wann ist $\\mathbb{Z}_n$ ein Körper?**\n' +
    'Der Restklassenring $(\\mathbb{Z}_n,+,\\cdot)$ ist für jedes $n\\geq 2$ ein kommutativer Ring mit Eins. Ob er ein **Körper** ist, entscheidet die folgende zentrale Aussage:\n' +
    '$\\mathbb{Z}_n$ ist genau dann ein Körper, wenn $n$ eine Primzahl ist.\n' +
    'Begründung über die **Inversen**: Eine Restklasse $[k]$ ist in $\\mathbb{Z}_n$ genau dann invertierbar, wenn $\\gcd(k,n)=1$. Ist $n=p$ prim, so ist $\\gcd(k,p)=1$ für **alle** $k\\in\\{1,\\dots,p-1\\}$ – also hat jedes Element $\\neq[0]$ ein Inverses, und $\\mathbb{Z}_p$ ist ein Körper. Ist $n$ **nicht** prim, etwa $n=a\\cdot b$ mit $1<a,b<n$, so ist $\\gcd(a,n)\\neq 1$, also besitzt $[a]$ **kein** Inverses; außerdem gilt $[a]\\cdot[b]=[n]=[0]$, obwohl $[a]\\neq[0]$ und $[b]\\neq[0]$ – man hat einen **Nullteiler**.\n' +
    '\n' +
    '**Nullteilerfreiheit**\n' +
    'Ein Element $a\\neq 0$ heißt **Nullteiler**, wenn es ein $b\\neq 0$ gibt mit $a\\cdot b=0$. In jedem Körper gilt dagegen: aus $a\\cdot b=0$ folgt $a=0$ **oder** $b=0$ – ein Körper ist also **nullteilerfrei**. Der Grund: invertierbare Elemente können keine Nullteiler sein (aus $a\\cdot b=0$ mit $a$ invertierbar folgt $b=a^{-1}\\cdot a\\cdot b=a^{-1}\\cdot 0=0$). Ein $\\mathbb{Z}_n$ mit zusammengesetztem $n$ hat Nullteiler und kann deshalb kein Körper sein.\n' +
    '\n' +
    '**Wie prüft man, ob eine Struktur ein Körper ist?**\n' +
    '1. Sind zwei Verknüpfungen $+$ und $\\cdot$ gegeben und liefern sie wieder Elemente von $K$ (Abgeschlossenheit)?\n' +
    '2. Ist $(K,+)$ eine **kommutative Gruppe**? (Assoziativität, neutrales Element $0$, Inverse $-a$, Kommutativität.)\n' +
    '3. Ist $\\cdot$ assoziativ und kommutativ, gibt es eine $1\\neq 0$, und gelten die **Distributivgesetze**? Damit ist $K$ ein kommutativer Ring mit Eins.\n' +
    '4. **Entscheidend:** Hat **jedes** $a\\neq 0$ ein multiplikatives Inverses $a^{-1}$? Falls ja, ist $K$ ein Körper; findet man **ein** Element $\\neq 0$ ohne Inverses (bzw. einen Nullteiler), ist $K$ **kein** Körper.\n' +
    'Merkregel für $\\mathbb{Z}_n$: einfach prüfen, ob $n$ **prim** ist.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• „$1\\neq 0$" vergessen: in einem Körper müssen die neutralen Elemente von $+$ und $\\cdot$ **verschieden** sein.\n' +
    '• Verlangen, dass **jedes** Element ein Inverses hat – auch die $0$. Richtig ist: **nur** die Elemente $\\neq 0$ (die $0$ hat nie ein multiplikatives Inverses).\n' +
    '• $\\mathbb{Z}$ für einen Körper halten, weil man dort „gut rechnen kann" – man kann in $\\mathbb{Z}$ nicht uneingeschränkt dividieren.\n' +
    '• Meinen, $\\mathbb{Z}_n$ sei immer ein Körper: das gilt nur für **primes** $n$ (z. B. ist $\\mathbb{Z}_6$ keiner, denn $[2]\\cdot[3]=[0]$).',
  beispiele: [
    {
      szenario: 'Ist es ein Körper? (ja/nein mit Begründung)',
      beispiele: [
        '**Aufgabe:** Ist $(\\mathbb{Z},+,\\cdot)$ ein Körper?\n**Lösung:** $(\\mathbb{Z},+)$ ist eine kommutative Gruppe, $\\cdot$ ist assoziativ und kommutativ mit Eins $1$, die Distributivgesetze gelten – $\\mathbb{Z}$ ist also ein kommutativer Ring mit Eins. Bedingung (ii) scheitert aber: $2\\neq 0$ hat kein Inverses in $\\mathbb{Z}$, denn $\\frac{1}{2}\\notin\\mathbb{Z}$. Somit ist $(\\mathbb{Z}\\setminus\\{0\\},\\cdot)$ keine Gruppe.\n**Ergebnis:** Nein, $\\mathbb{Z}$ ist kein Körper (nur ein kommutativer Ring mit Eins).',
        '**Aufgabe:** Ist $(\\mathbb{Q},+,\\cdot)$ ein Körper?\n**Lösung:** $(\\mathbb{Q},+)$ ist kommutative Gruppe; $\\cdot$ ist assoziativ, kommutativ, hat die Eins $1$ und erfüllt die Distributivgesetze. Zu jedem Bruch $\\frac{a}{b}\\neq 0$ (also $a\\neq 0$) gibt es das Inverse $\\frac{b}{a}\\in\\mathbb{Q}$ mit $\\frac{a}{b}\\cdot\\frac{b}{a}=1$. Alle drei Körperbedingungen sind erfüllt.\n**Ergebnis:** Ja, $\\mathbb{Q}$ ist ein Körper.',
        '**Aufgabe:** Ist $(\\mathbb{Z}_6,+,\\cdot)$ ein Körper?\n**Lösung:** $\\mathbb{Z}_6$ ist ein kommutativer Ring mit Eins. $6=2\\cdot 3$ ist aber **nicht** prim: $\\gcd(2,6)=2\\neq 1$, also hat $[2]$ kein Inverses. Konkret ist $[2]\\cdot[3]=[6]=[0]$, obwohl $[2]\\neq[0]$ und $[3]\\neq[0]$ – ein Nullteiler.\n**Ergebnis:** Nein, $\\mathbb{Z}_6$ ist kein Körper.',
      ],
    },
    {
      szenario: 'ℤₙ Körper? (Primzahltest)',
      beispiele: [
        '**Aufgabe:** Ist $(\\mathbb{Z}_7,+,\\cdot)$ ein Körper?\n**Lösung:** Es gilt: $\\mathbb{Z}_n$ ist genau dann ein Körper, wenn $n$ prim ist. $7$ ist eine Primzahl, also ist $\\gcd(k,7)=1$ für alle $k\\in\\{1,\\dots,6\\}$, und jedes Element $\\neq[0]$ ist invertierbar (z. B. $[2]^{-1}=[4]$ wegen $[2][4]=[8]=[1]$).\n**Ergebnis:** Ja, $\\mathbb{Z}_7$ ist ein Körper.',
        '**Aufgabe:** Ist $(\\mathbb{Z}_8,+,\\cdot)$ ein Körper?\n**Lösung:** $8$ ist keine Primzahl. Nur die Restklassen $[k]$ mit $\\gcd(k,8)=1$ sind invertierbar, also $[1],[3],[5],[7]$; die geraden Klassen $[2],[4],[6]\\neq[0]$ haben **kein** Inverses. Zudem $[2]\\cdot[4]=[8]=[0]$ (Nullteiler).\n**Ergebnis:** Nein, $\\mathbb{Z}_8$ ist kein Körper.',
        '**Aufgabe:** Für welche $n\\in\\{2,\\dots,12\\}$ ist $\\mathbb{Z}_n$ ein Körper?\n**Lösung:** Genau für die primen $n$. Im Bereich $2$ bis $12$ sind das $2,3,5,7,11$. Die zusammengesetzten $n=4,6,8,9,10,12$ liefern jeweils Nullteiler und damit keinen Körper.\n**Ergebnis:** $\\mathbb{Z}_n$ ist ein Körper für $n\\in\\{2,3,5,7,11\\}$.',
      ],
    },
    {
      szenario: 'Inverse in ℤₙ bestimmen',
      beispiele: [
        '**Aufgabe:** Gib alle Elemente von $\\mathbb{Z}_7^{\\ast}$ und ihre multiplikativen Inversen an.\n**Lösung:** Da $7$ prim ist, ist $\\mathbb{Z}_7^{\\ast}=\\{[1],[2],[3],[4],[5],[6]\\}$ (alle $\\neq[0]$). Inverse: $[1]^{-1}=[1]$; $[2]^{-1}=[4]$ (denn $[2][4]=[8]=[1]$); $[3]^{-1}=[5]$ ($[3][5]=[15]=[1]$); $[4]^{-1}=[2]$; $[5]^{-1}=[3]$; $[6]^{-1}=[6]$ ($[6][6]=[36]=[1]$).\n**Ergebnis:** Jedes Element $\\neq[0]$ ist invertierbar – $\\mathbb{Z}_7$ ist ein Körper.',
        '**Aufgabe:** Ist $[96]$ in $\\mathbb{Z}_{296}$ invertierbar?\n**Lösung:** Invertierbar ist $[k]$ genau dann, wenn $\\gcd(k,n)=1$. Da $2$ sowohl $96$ als auch $296$ teilt, ist $\\gcd(96,296)\\geq 2\\neq 1$.\n**Ergebnis:** Nein, $[96]$ ist in $\\mathbb{Z}_{296}$ nicht invertierbar. (Entsprechend ist $\\mathbb{Z}_{296}$ kein Körper.)',
        '**Aufgabe:** Ist $[26]$ in $\\mathbb{Z}_{73}$ invertierbar? Falls ja, gib das Inverse an.\n**Lösung:** $73$ ist prim, also ist jedes Element $\\neq[0]$ invertierbar, insbesondere $[26]$. Das Inverse liefert der erweiterte euklidische Algorithmus: $\\gcd(26,73)=1$ und $5\\cdot 73-14\\cdot 26=1$, also $[-14]\\cdot[26]=[1]$. Wegen $[-14]=[-14+73]=[59]$ folgt $[26]^{-1}=[59]$.\n**Ergebnis:** Ja, $[26]^{-1}=[59]$ in $\\mathbb{Z}_{73}$.',
      ],
    },
  ],
}
