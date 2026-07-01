import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'ringe',
  titel: 'Ringe',
  inhalt:
    '**Worum geht es?**\n' +
    'In einem **Ring** hat man — wie bei den ganzen Zahlen — **zwei** Rechenoperationen gleichzeitig: eine Addition $+$ und eine Multiplikation $\\cdot$, die durch die Distributivgesetze miteinander verzahnt sind. Der Ringbegriff fasst all die Zahlbereiche und Strukturen zusammen, in denen man „ganz normal" plus und mal rechnen kann ($\\mathbb{Z}$, $\\mathbb{Z}_n$, Polynome, Matrizen), ohne dass man notwendig teilen darf. Er steht damit zwischen der **Gruppe** (nur eine Verknüpfung) und dem **Körper** (plus, mal und uneingeschränktes Teilen).\n' +
    '\n' +
    '**Definition (Ring)**\n' +
    'Sei $R \\neq \\emptyset$ eine Menge mit zwei Verknüpfungen $+ : R \\times R \\to R$ und $\\cdot : R \\times R \\to R$. Dann heißt $(R, +, \\cdot)$ (kurz $R$) ein **Ring**, falls:\n' +
    '$(i)$ $(R, +)$ ist eine **kommutative Gruppe** (additiv: es gibt eine $0$, jedes $a$ hat ein Negatives $-a$, $+$ ist assoziativ und kommutativ);\n' +
    '$(ii)$ $\\cdot$ ist **assoziativ**: $(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$ für alle $a, b, c \\in R$;\n' +
    '$(iii)$ es gelten die **Distributivgesetze**: $a \\cdot (b + c) = a \\cdot b + a \\cdot c$ und $(a + b) \\cdot c = a \\cdot c + b \\cdot c$ für alle $a, b, c \\in R$.\n' +
    'Die Distributivgesetze sind das einzige Bindeglied zwischen $+$ und $\\cdot$ — nur sie verknüpfen die beiden Operationen.\n' +
    '\n' +
    '**Kommutativer Ring · Ring mit Eins**\n' +
    'Ist zusätzlich die Multiplikation **kommutativ** ($a \\cdot b = b \\cdot a$), so heißt $R$ **kommutativer Ring**. Gibt es ein neutrales Element bezüglich $\\cdot$, also ein **Einselement** $1 \\in R$ mit $a \\cdot 1 = 1 \\cdot a = a$ für alle $a$, so ist $R$ ein **Ring mit Eins**. Beides zusammen: **kommutativer Ring mit Eins**. Für $\\cdot$ wird also **nicht** verlangt, dass es eine $1$ oder Inverse gibt — das ist der Unterschied zur Gruppe.\n' +
    '\n' +
    '**Wichtige Grundregeln**\n' +
    'In jedem Ring gilt (obwohl es nicht in den Axiomen steht) $a \\cdot 0 = 0 \\cdot a = 0$ für alle $a \\in R$ — die $0$ „schluckt" bei der Multiplikation. Ferner $(-a) \\cdot b = a \\cdot (-b) = -(a \\cdot b)$. Diese Regeln folgen aus den Distributivgesetzen.\n' +
    '\n' +
    '**Einheiten (invertierbare Elemente)**\n' +
    'In einem Ring mit Eins heißt $a \\in R$ eine **Einheit**, wenn $a$ bezüglich $\\cdot$ invertierbar ist, d. h. es gibt ein $a^{-1} \\in R$ mit $a \\cdot a^{-1} = a^{-1} \\cdot a = 1$. In $\\mathbb{Z}$ sind nur $1$ und $-1$ Einheiten; in $\\mathbb{Z}_n$ ist $[k]$ genau dann eine Einheit, wenn $\\gcd(k, n) = 1$ (die Menge dieser Einheiten heißt $\\mathbb{Z}_n^{*}$). In einem **Körper** ist jedes Element $\\neq 0$ eine Einheit.\n' +
    '\n' +
    '**Nullteiler und Nullteilerfreiheit**\n' +
    'Ein Element $a \\in R \\setminus \\{0\\}$ heißt **Nullteiler**, falls es ein $b \\in R \\setminus \\{0\\}$ gibt mit $a \\cdot b = 0$ oder $b \\cdot a = 0$. Zwei von $0$ verschiedene Elemente ergeben also **multipliziert** $0$. Gibt es in $R$ **keine** Nullteiler, heißt $R$ **nullteilerfrei**; ein kommutativer Ring mit Eins ($1 \\neq 0$), der nullteilerfrei ist, heißt **Integritätsring** (Integritätsbereich). Wichtig: Eine **Einheit ist nie ein Nullteiler** — ist $a$ invertierbar und $a \\cdot b = 0$, so folgt $b = a^{-1} \\cdot (a \\cdot b) = a^{-1} \\cdot 0 = 0$.\n' +
    '\n' +
    '**Beispiele — Überblick**\n' +
    '| Struktur | Ring? | komm. + Eins? | Nullteiler? | Einheiten |\n' +
    '|---|---|---|---|---|\n' +
    '| $\\mathbb{Z}$ | ja | ja | keine (Integritätsring) | nur $1, -1$ |\n' +
    '| $\\mathbb{Q}, \\mathbb{R}, \\mathbb{C}$ | ja | ja | keine (sogar Körper) | alle $\\neq 0$ |\n' +
    '| $\\mathbb{Z}_n$, $n$ prim | ja | ja | keine (Körper $\\mathbb{Z}_p$) | alle $\\neq [0]$ |\n' +
    '| $\\mathbb{Z}_n$, $n$ nicht prim | ja | ja | ja (z. B. $[2],[3]$ in $\\mathbb{Z}_6$) | $[k]$ mit $\\gcd(k,n)=1$ |\n' +
    '| Polynomring $\\mathbb{R}[x]$ | ja | ja | keine (Integritätsring) | nur konstante $\\neq 0$ |\n' +
    '| $n\\times n$-Matrizen | ja | Eins ja, nicht komm. | ja | invertierbare Matrizen |\n' +
    '\n' +
    'In $\\mathbb{Z}_6$ etwa ist $[2] \\cdot [3] = [6] = [0]$, obwohl $[2] \\neq [0]$ und $[3] \\neq [0]$: der „Satz vom Nullprodukt" gilt dort **nicht**.\n' +
    '\n' +
    '**Wie prüft man die Ringaxiome?**\n' +
    '1. $(R, +)$ als **kommutative Gruppe** nachweisen: Abgeschlossenheit von $+$, Assoziativität, neutrales Element $0$, zu jedem $a$ ein Negatives $-a$, Kommutativität.\n' +
    '2. **Abgeschlossenheit** und **Assoziativität** von $\\cdot$ zeigen.\n' +
    '3. Beide **Distributivgesetze** nachrechnen.\n' +
    '4. Optional prüfen: ist $\\cdot$ kommutativ (kommutativer Ring)? gibt es eine $1$ (Ring mit Eins)?\n' +
    'Für die volle Körper-Eigenschaft müsste zusätzlich **jedes** $a \\neq 0$ ein multiplikatives Inverses besitzen (siehe Karte „Körper").\n' +
    '\n' +
    '**Abgrenzung Gruppe – Ring – Körper**\n' +
    '**Gruppe:** eine Menge mit **einer** Verknüpfung (neutrales Element + Inverse). **Ring:** **zwei** Verknüpfungen; unter $+$ eine kommutative Gruppe, unter $\\cdot$ nur assoziativ (Inverse/Eins nicht verlangt). **Körper:** ein kommutativer Ring mit Eins, in dem sogar $(K \\setminus \\{0\\}, \\cdot)$ eine kommutative Gruppe ist — man darf durch jedes Element $\\neq 0$ teilen. Jeder Körper ist ein kommutativer Ring mit Eins, aber nicht umgekehrt: $\\mathbb{Z}$ ist ein kommutativer Ring mit Eins, aber **kein** Körper (nur $\\pm 1$ sind invertierbar).\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Für $\\cdot$ eine $1$ oder Inverse voraussetzen — ein Ring braucht **weder** Einselement **noch** multiplikative Inverse.\n' +
    '• Annehmen, aus $a \\cdot b = 0$ folge stets $a = 0$ oder $b = 0$ — das gilt nur in **nullteilerfreien** Ringen (z. B. Körpern), nicht in $\\mathbb{Z}_6$.\n' +
    '• Einheit und Nullteiler verwechseln: eine Einheit kann **nie** Nullteiler sein.\n' +
    '• $\\mathbb{Z}_n$ pauschal für einen Körper halten — das gilt **nur**, wenn $n$ eine Primzahl ist.',
  beispiele: [
    {
      szenario: 'Ringaxiome prüfen / einordnen',
      beispiele: [
        '**Aufgabe:** Ist $(\\mathbb{Z}, +, \\cdot)$ ein kommutativer Ring mit Eins? Ist er ein Körper?\n**Lösung:** $(\\mathbb{Z}, +)$ ist eine kommutative Gruppe ($0$ neutral, Negatives $-a$). Die Multiplikation ist assoziativ und kommutativ, die Distributivgesetze gelten, und $1$ ist Einselement — also kommutativer Ring mit Eins. Für einen Körper müsste jedes $a \\neq 0$ ein Inverses in $\\mathbb{Z}$ haben; aber z. B. $2$ hat keins ($\\frac{1}{2} \\notin \\mathbb{Z}$).\n**Ergebnis:** Kommutativer Ring mit Eins, aber **kein** Körper.',
        '**Aufgabe:** Ist $(\\mathbb{Z}_n, +, \\cdot)$ für $n \\ge 2$ ein kommutativer Ring mit Eins?\n**Lösung:** $(\\mathbb{Z}_n, +)$ ist eine kommutative Gruppe (neutrales $[0]$, Negatives $[-a]=[n-a]$). Die Restklassen-Multiplikation ist assoziativ und kommutativ, die Distributivgesetze werden von $\\mathbb{Z}$ vererbt, und $[1]$ ist Einselement.\n**Ergebnis:** Ja, $\\mathbb{Z}_n$ ist für jedes $n \\ge 2$ ein kommutativer Ring mit Eins.',
        '**Aufgabe:** Zeige, dass in **jedem** Ring $a \\cdot 0 = 0$ gilt.\n**Lösung:** Es ist $0 = 0 + 0$, also mit dem Distributivgesetz $a \\cdot 0 = a \\cdot (0 + 0) = a \\cdot 0 + a \\cdot 0$. Addiert man auf beiden Seiten das Negative $-(a \\cdot 0)$, bleibt links $0$ und rechts $a \\cdot 0$.\n**Ergebnis:** $a \\cdot 0 = 0$ (entsprechend $0 \\cdot a = 0$).',
      ],
    },
    {
      szenario: 'Nullteiler und Nullteilerfreiheit',
      beispiele: [
        '**Aufgabe:** Bestimme Nullteiler in $\\mathbb{Z}_6$.\n**Lösung:** Gesucht sind $[a],[b] \\neq [0]$ mit $[a][b]=[0]$. Es gilt $[2] \\cdot [3] = [6] = [0]$ und $[4] \\cdot [3] = [12] = [0]$, obwohl keiner der Faktoren $[0]$ ist. Also sind $[2], [3]$ und $[4]$ Nullteiler; $6$ ist keine Primzahl.\n**Ergebnis:** $[2], [3], [4]$ sind Nullteiler in $\\mathbb{Z}_6$ — $\\mathbb{Z}_6$ ist **nicht** nullteilerfrei.',
        '**Aufgabe:** Warum ist $\\mathbb{Z}$ ein Integritätsring?\n**Lösung:** $\\mathbb{Z}$ ist ein kommutativer Ring mit Eins und $1 \\neq 0$. Aus $a \\cdot b = 0$ mit ganzen Zahlen folgt stets $a = 0$ oder $b = 0$ (Produkt zweier von $0$ verschiedener ganzer Zahlen ist $\\neq 0$). Es gibt also keine Nullteiler.\n**Ergebnis:** $\\mathbb{Z}$ ist nullteilerfrei, also ein **Integritätsring** (aber kein Körper).',
        '**Aufgabe:** Kann in $\\mathbb{Z}_7$ ein Element $\\neq [0]$ ein Nullteiler sein?\n**Lösung:** $7$ ist prim, also ist $\\mathbb{Z}_7$ sogar ein Körper und jedes $[a] \\neq [0]$ ist invertierbar (eine Einheit). Eine Einheit ist nie Nullteiler: aus $[a][b]=[0]$ folgt $[b] = [a]^{-1}([a][b]) = [a]^{-1}[0] = [0]$.\n**Ergebnis:** Nein, $\\mathbb{Z}_7$ ist nullteilerfrei — kein Element $\\neq [0]$ ist Nullteiler.',
      ],
    },
    {
      szenario: 'Einheiten bestimmen',
      beispiele: [
        '**Aufgabe:** Bestimme alle Einheiten von $\\mathbb{Z}_8$ und ihre Inversen.\n**Lösung:** Einheit ist $[k]$ genau dann, wenn $\\gcd(k, 8) = 1$, also $\\mathbb{Z}_8^{*} = \\{[1], [3], [5], [7]\\}$. Inverse durch Probieren: $[3][3]=[9]=[1]$, $[5][5]=[25]=[1]$, $[7][7]=[49]=[1]$, $[1][1]=[1]$ — jedes Element ist zu sich selbst invers.\n**Ergebnis:** Einheiten $\\{[1],[3],[5],[7]\\}$; $[1]^{-1}=[1]$, $[3]^{-1}=[3]$, $[5]^{-1}=[5]$, $[7]^{-1}=[7]$.',
        '**Aufgabe:** Ist $[96]$ in $\\mathbb{Z}_{296}$ eine Einheit?\n**Lösung:** $[96]$ ist genau dann invertierbar, wenn $\\gcd(96, 296) = 1$. Da $2$ sowohl $96$ als auch $296$ teilt, ist $\\gcd(96, 296) \\ge 2 \\neq 1$.\n**Ergebnis:** Nein, $[96]$ ist **keine** Einheit in $\\mathbb{Z}_{296}$.',
        '**Aufgabe:** Ist $[26]$ in $\\mathbb{Z}_{73}$ eine Einheit? Falls ja, gib das Inverse an.\n**Lösung:** $73$ ist prim, also ist jedes $\\neq [0]$ invertierbar, insbesondere $[26]$. Das Inverse liefert der erweiterte euklidische Algorithmus: aus $\\gcd(26,73)=1$ folgt $5 \\cdot 73 - 14 \\cdot 26 = 1$, also $[-14] \\cdot [26] = [1]$ und $[-14] = [-14 + 73] = [59]$.\n**Ergebnis:** Ja, $[26]^{-1} = [59]$ in $\\mathbb{Z}_{73}$.',
      ],
    },
  ],
}
