import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'rechnen-restklassen',
  titel: 'Rechnen mit Restklassen & Inverse',
  inhalt:
    '**Worum geht es?**\n' +
    'In $\\mathbb{Z}_n$ rechnet man nicht mit einzelnen Zahlen, sondern mit **Restklassen** $[a]$ — man interessiert sich nur für den **Rest bei Division durch n**. Das ist die Mathematik hinter Uhrzeit (mod $12$), Wochentagen (mod $7$) und Prüfziffern. Damit kann man riesige Zahlen mod $n$ klein rechnen und — falls möglich — sogar „durch $[a]$ teilen", indem man mit dem **Inversen** $[a]^{-1}$ multipliziert.\n' +
    '\n' +
    '**Erinnerung: was ist $\\mathbb{Z}_n$?**\n' +
    'Für $n \\in \\mathbb{N}$, $n \\ge 2$, ist $\\mathbb{Z}_n = \\{[0], [1], \\dots, [n-1]\\}$ mit $[k] = \\{k + nz : z \\in \\mathbb{Z}\\}$. Zwei Zahlen liegen in **derselben** Klasse, wenn sie denselben Rest lassen: $[a] = [b] \\iff n \\mid (b-a) \\iff a \\equiv b \\bmod n$. Jede Klasse hat einen **Standardvertreter** in $\\{0, \\dots, n-1\\}$ (den Rest).\n' +
    '\n' +
    '**Addition und Multiplikation**\n' +
    'Auf $\\mathbb{Z}_n$ definiert man $+$ und $\\cdot$ über **beliebige Vertreter**:\n' +
    '$[a] + [b] := [a + b]$ und $[a] \\cdot [b] := [a \\cdot b]$.\n' +
    'Man rechnet also mit den Zahlen ganz normal und nimmt am Ende den Rest mod $n$. Beispiel in $\\mathbb{Z}_4$: $[2] + [3] = [5] = [1]$ und $[2] \\cdot [3] = [6] = [2]$.\n' +
    '\n' +
    '**Warum ist das erlaubt? (Wohldefiniertheit)**\n' +
    'Die Verknüpfungen sind **wohldefiniert**, d. h. das Ergebnis hängt **nicht** vom gewählten Vertreter ab. Rechnet man statt mit $a, b$ mit anderen Vertretern $a\\prime \\equiv a$, $b\\prime \\equiv b$, kommt dieselbe Klasse heraus. Grund: die Teilbarkeitsrelation ist eine **Kongruenzrelation** — sie ist mit $+$ und $\\cdot$ verträglich. Praktisch: man darf jederzeit einen Summanden oder Faktor durch seinen Rest ersetzen.\n' +
    '\n' +
    '**Große Zahlen und Potenzen reduzieren**\n' +
    'Weil man Vertreter frei tauschen darf, reduziert man **so früh wie möglich** mod $n$ — nicht erst am Schluss. Für Potenzen gilt $[a]^k = [a^k]$; bequemer rechnet man **schrittweise**: nach jeder Multiplikation wieder mod $n$ reduzieren, so bleiben die Zahlen klein. (Z. B. $[2]^{10}$ in $\\mathbb{Z}_7$: $[2]^3 = [8] = [1]$, also $[2]^{10} = [2]^9 \\cdot [2] = [1]^3 \\cdot [2] = [2]$.)\n' +
    '\n' +
    '**Verknüpfungstafeln (Beispiel $\\mathbb{Z}_4$)**\n' +
    'Eine **Verknüpfungstafel** listet alle Ergebnisse auf. Links steht der erste, oben der zweite Operand:\n' +
    '| $+$ | $[0]$ | $[1]$ | $[2]$ | $[3]$ |\n' +
    '|---|---|---|---|---|\n' +
    '| $[0]$ | $[0]$ | $[1]$ | $[2]$ | $[3]$ |\n' +
    '| $[1]$ | $[1]$ | $[2]$ | $[3]$ | $[0]$ |\n' +
    '| $[2]$ | $[2]$ | $[3]$ | $[0]$ | $[1]$ |\n' +
    '| $[3]$ | $[3]$ | $[0]$ | $[1]$ | $[2]$ |\n' +
    '\n' +
    '| $\\cdot$ | $[0]$ | $[1]$ | $[2]$ | $[3]$ |\n' +
    '|---|---|---|---|---|\n' +
    '| $[0]$ | $[0]$ | $[0]$ | $[0]$ | $[0]$ |\n' +
    '| $[1]$ | $[0]$ | $[1]$ | $[2]$ | $[3]$ |\n' +
    '| $[2]$ | $[0]$ | $[2]$ | $[0]$ | $[2]$ |\n' +
    '| $[3]$ | $[0]$ | $[3]$ | $[2]$ | $[1]$ |\n' +
    '\n' +
    '**Additives Inverse**\n' +
    '$(\\mathbb{Z}_n, +)$ ist für **jedes** $n \\ge 2$ eine kommutative Gruppe. Neutralelement ist $[0]$, und das Inverse zu $[k]$ ist $[-k]$. Als Standardvertreter in $\\{0, \\dots, n-1\\}$ schreibt man $[-k] = [n - k]$. Beispiel in $\\mathbb{Z}_4$: das additive Inverse zu $[3]$ ist $[-3] = [1]$, denn $[3] + [1] = [0]$.\n' +
    '\n' +
    '**Multiplikatives Inverse — wann existiert es?**\n' +
    'Ein multiplikatives Inverses $[a]^{-1}$ ist eine Klasse mit $[a] \\cdot [a]^{-1} = [1]$. **Kriterium (Satz):** $[a] \\in \\mathbb{Z}_n$ ist genau dann invertierbar bezüglich $\\cdot$, wenn $\\mathrm{ggT}(a, n) = 1$ ($a$ und $n$ **teilerfremd**). Anders als bei $+$ ist also **nicht** jedes Element invertierbar: $[0]$ nie, und $[a]$ mit einem gemeinsamen Teiler von $a$ und $n$ auch nicht.\n' +
    '\n' +
    '**Die Einheiten $\\mathbb{Z}_n^{\\ast}$**\n' +
    'Die invertierbaren Elemente heißen **Einheiten**; sie bilden die Menge $\\mathbb{Z}_n^{\\ast} = \\{[a] \\in \\mathbb{Z}_n : \\mathrm{ggT}(a, n) = 1\\}$. $(\\mathbb{Z}_n^{\\ast}, \\cdot)$ ist eine Gruppe. Ist $n$ eine **Primzahl**, so ist jede Klasse außer $[0]$ invertierbar, also $\\mathbb{Z}_p^{\\ast} = \\{[1], \\dots, [p-1]\\}$. Beispiel: $\\mathbb{Z}_8^{\\ast} = \\{[1], [3], [5], [7]\\}$ (die ungeraden Reste).\n' +
    '\n' +
    '**Inverses berechnen (erweiterter Euklid)**\n' +
    'Ist $\\mathrm{ggT}(a, n) = 1$, liefert der euklidische Algorithmus (rückwärts eingesetzt) Zahlen $s, t \\in \\mathbb{Z}$ mit $s\\,a + t\\,n = 1$. Modulo $n$ fällt $t\\,n$ weg, es bleibt $[s] \\cdot [a] = [1]$ — also ist $[a]^{-1} = [s]$.\n' +
    '1. Euklid: $\\mathrm{ggT}(a, n)$ bestimmen (Division mit Rest, bis Rest $0$).\n' +
    '2. Ist der ggT $\\neq 1$: **kein** Inverses, fertig.\n' +
    '3. Ist er $1$: Schritte **rückwärts** einsetzen, bis $1 = s\\,a + t\\,n$ dasteht.\n' +
    '4. $[a]^{-1} = [s]$; nötigenfalls $+n$ addieren, damit der Vertreter in $\\{0, \\dots, n-1\\}$ liegt.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Reste **negativ** lassen: der Standardvertreter ist immer $\\ge 0$, also $[-3] = [1]$ in $\\mathbb{Z}_4$ (nicht $[-3]$ stehen lassen).\n' +
    '• Bei $+$ und $\\cdot$ erst am Ende reduzieren, statt zwischendurch — führt zu unnötig großen Zahlen.\n' +
    '• Glauben, jedes Element habe ein **multiplikatives** Inverses. Nur die teilerfremden ($\\mathrm{ggT} = 1$) haben eins.\n' +
    '• Bei $s\\,a + t\\,n = 1$ das $t$ statt des $s$ als Inverses nehmen — das Inverse ist der Koeffizient von $a$ (nicht der von $n$).',
  beispiele: [
    {
      szenario: 'Rechnen & Reduzieren in ℤₙ',
      beispiele: [
        '**Aufgabe:** Berechne $[9] + [8]$ in $\\mathbb{Z}_5$.\n**Lösung:** Vertreter zuerst reduzieren: $[9] = [4]$, $[8] = [3]$. Dann $[4] + [3] = [7] = [2]$ (denn $7 = 1 \\cdot 5 + 2$). Direkt: $[9+8] = [17] = [2]$, weil $17 = 3 \\cdot 5 + 2$.\n**Ergebnis:** $[2]$.',
        '**Aufgabe:** Berechne $[7] \\cdot [6]$ in $\\mathbb{Z}_9$.\n**Lösung:** $[7] \\cdot [6] = [42]$. Rest von $42$ bei $9$: $42 = 4 \\cdot 9 + 6$. Alternativ mit dem Vertreter $[7] = [-2]$: $[-2] \\cdot [6] = [-12] = [-12 + 18] = [6]$.\n**Ergebnis:** $[6]$.',
        '**Aufgabe:** Berechne $[2]^{10}$ in $\\mathbb{Z}_7$.\n**Lösung:** Schrittweise reduzieren: $[2]^2 = [4]$, $[2]^3 = [8] = [1]$. Also $[2]^{10} = ([2]^3)^3 \\cdot [2] = [1]^3 \\cdot [2] = [2]$.\n**Ergebnis:** $[2]$.',
      ],
    },
    {
      szenario: 'Additives Inverse & Verknüpfungstafel',
      beispiele: [
        '**Aufgabe:** Bestimme das additive Inverse von $[3]$ in $\\mathbb{Z}_4$.\n**Lösung:** Gesucht ist $[-3]$; Standardvertreter $[-3] = [-3 + 4] = [1]$. Probe: $[3] + [1] = [4] = [0]$.\n**Ergebnis:** $[1]$.',
        '**Aufgabe:** Bestimme das additive Inverse von $[7]$ in $\\mathbb{Z}_{12}$.\n**Lösung:** $[-7] = [-7 + 12] = [5]$. Probe: $[7] + [5] = [12] = [0]$.\n**Ergebnis:** $[5]$.',
        '**Aufgabe:** Ist $(\\mathbb{Z}_4, \\cdot)$ eine Gruppe? Welche Elemente sind invertierbar?\n**Lösung:** Aus der Multiplikationstafel: $[0]$ und $[2]$ haben **keine** $[1]$ in ihrer Zeile (z. B. $[2] \\cdot [x]$ ergibt nie $[1]$), also nicht invertierbar. Invertierbar sind nur $[1]$ und $[3]$ (mit $\\mathrm{ggT}(1,4) = \\mathrm{ggT}(3,4) = 1$).\n**Ergebnis:** Keine Gruppe; invertierbar sind $[1]$ und $[3]$, und $(\\{[1], [3]\\}, \\cdot)$ ist eine Gruppe.',
      ],
    },
    {
      szenario: 'Einheiten ℤₙ* und ihre Inversen',
      beispiele: [
        '**Aufgabe:** Gib $\\mathbb{Z}_7^{\\ast}$ und alle multiplikativen Inversen an.\n**Lösung:** $7$ ist prim, also $\\mathbb{Z}_7^{\\ast} = \\{[1], [2], [3], [4], [5], [6]\\}$. Inverse durch Probieren ($[a][b] = [1]$): $[1]^{-1} = [1]$; $[2]^{-1} = [4]$ (da $[8] = [1]$); $[3]^{-1} = [5]$ (da $[15] = [1]$); $[4]^{-1} = [2]$; $[5]^{-1} = [3]$; $[6]^{-1} = [6]$ (da $[36] = [1]$).\n**Ergebnis:** $\\mathbb{Z}_7^{\\ast} = \\{[1], \\dots, [6]\\}$; Inverse wie oben.',
        '**Aufgabe:** Gib $\\mathbb{Z}_8^{\\ast}$ und alle Inversen an.\n**Lösung:** Teilerfremd zu $8$ sind die ungeraden Reste: $\\mathbb{Z}_8^{\\ast} = \\{[1], [3], [5], [7]\\}$. Hier ist jedes Element **selbstinvers**: $[1][1] = [1]$, $[3][3] = [9] = [1]$, $[5][5] = [25] = [1]$, $[7][7] = [49] = [1]$.\n**Ergebnis:** $\\mathbb{Z}_8^{\\ast} = \\{[1], [3], [5], [7]\\}$; jedes Element ist sein eigenes Inverses.',
        '**Aufgabe:** Ist $[96]$ in $\\mathbb{Z}_{296}$ invertierbar?\n**Lösung:** $96$ und $296$ sind beide gerade, also teilt $2$ beide: $\\mathrm{ggT}(96, 296) \\ge 2 \\neq 1$. Das Kriterium ist verletzt.\n**Ergebnis:** Nein, $[96]$ ist nicht invertierbar.',
      ],
    },
    {
      szenario: 'Inverses via erweitertem Euklid',
      beispiele: [
        '**Aufgabe:** Bestimme $[6]^{-1}$ in $\\mathbb{Z}_{25}$.\n**Lösung:** Euklid: $25 = 4 \\cdot 6 + 1$, also $\\mathrm{ggT}(6, 25) = 1$ → invertierbar. Rückwärts: $1 = 25 - 4 \\cdot 6 = 1 \\cdot 25 + (-4) \\cdot 6$, also $s = -4$. Standardvertreter: $[-4] = [-4 + 25] = [21]$. Probe: $[6] \\cdot [21] = [126] = [1]$ (da $126 = 5 \\cdot 25 + 1$).\n**Ergebnis:** $[6]^{-1} = [21]$.',
        '**Aufgabe:** Bestimme $[26]^{-1}$ in $\\mathbb{Z}_{73}$.\n**Lösung:** Euklid: $73 = 2 \\cdot 26 + 21$; $26 = 1 \\cdot 21 + 5$; $21 = 4 \\cdot 5 + 1$; $5 = 5 \\cdot 1 + 0$, also $\\mathrm{ggT}(26, 73) = 1$. Rückwärts: $1 = 21 - 4 \\cdot 5 = 21 - 4(26 - 21) = 5 \\cdot 21 - 4 \\cdot 26 = 5(73 - 2 \\cdot 26) - 4 \\cdot 26 = 5 \\cdot 73 - 14 \\cdot 26$. Also $s = -14$ und $[-14] = [-14 + 73] = [59]$.\n**Ergebnis:** $[26]^{-1} = [59]$.',
        '**Aufgabe:** Löse $[6] \\cdot [z] = [9]$ in $\\mathbb{Z}_{11}$.\n**Lösung:** Erst $[6]^{-1}$ in $\\mathbb{Z}_{11}$: Euklid $11 = 1 \\cdot 6 + 5$, $6 = 1 \\cdot 5 + 1$; rückwärts $1 = 6 - 5 = 6 - (11 - 6) = 2 \\cdot 6 - 11$, also $[6]^{-1} = [2]$. Damit $[z] = [6]^{-1} \\cdot [9] = [2] \\cdot [9] = [18] = [7]$.\n**Ergebnis:** $[z] = [7]$.',
      ],
    },
  ],
}
