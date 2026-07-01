import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'euklidischer-algorithmus',
  titel: 'ggT & euklidischer Algorithmus',
  inhalt:
    '**Worum geht es?**\n' +
    'Der **größte gemeinsame Teiler** $\\operatorname{ggT}(a,b)$ ist die größte Zahl, durch die $a$ und $b$ beide teilbar sind. Man braucht ihn zum Kürzen von Brüchen, für Teilbarkeitsfragen und – besonders in der Informatik – zum Rechnen mit Restklassen: Ob eine Zahl modulo $n$ ein Inverses hat, hängt allein am $\\operatorname{ggT}$. Der **euklidische Algorithmus** berechnet ihn schnell, ganz ohne die Zahlen zu faktorisieren; seine erweiterte Form liefert zusätzlich das gesuchte Inverse.\n' +
    '\n' +
    '**Teiler & Division mit Rest**\n' +
    'Man sagt $b$ **teilt** $a$ (Schreibweise $b \\mid a$, sonst $b \\nmid a$), falls es ein $z \\in \\mathbb{Z}$ gibt mit $a = z \\cdot b$. Zu $a \\in \\mathbb{Z}$ und $m \\in \\mathbb{N}^{*}$ gibt es **eindeutig** bestimmte $q \\in \\mathbb{Z}$ und einen **Rest** $r \\in \\{0,\\dots,m-1\\}$ mit $a = q \\cdot m + r$. Man schreibt $r = a \\bmod m$. Wichtig: der Rest ist **nie negativ** und immer kleiner als $m$.\n' +
    '\n' +
    '**Definition ggT**\n' +
    'Seien $a,b \\in \\mathbb{Z}$, nicht beide $0$. Der $\\operatorname{ggT}(a,b)$ ist die größte Zahl $k \\in \\mathbb{N}$ mit $k \\mid a$ und $k \\mid b$. Es gilt $\\operatorname{ggT}(a,b) = \\operatorname{ggT}(b,a) = \\operatorname{ggT}(\\lvert a\\rvert,\\lvert b\\rvert)$; das Vorzeichen spielt also keine Rolle. Ist $\\operatorname{ggT}(a,b) = 1$, so heißen $a$ und $b$ **teilerfremd**.\n' +
    '\n' +
    '**Euklidischer Algorithmus (Idee)**\n' +
    'Der Trick: teilt man $a$ mit Rest durch $b$, also $a = q b + r$, so haben $a,b$ **denselben** $\\operatorname{ggT}$ wie $b,r$ – ein gemeinsamer Teiler von $b$ und $r$ teilt auch $a$ und umgekehrt. Man ersetzt daher das Paar $(a,b)$ immer wieder durch (Teiler, Rest) und rechnet, bis der Rest $0$ ist. Der **letzte Rest vor der 0** ist der $\\operatorname{ggT}$.\n' +
    '\n' +
    '**Schritt für Schritt**\n' +
    '1. Mit den Beträgen starten; die **größere** Zahl oben. Setze $r_{0} = \\lvert a\\rvert$, $r_{1} = \\lvert b\\rvert$.\n' +
    '2. Division mit Rest: $r_{0} = q_{1} r_{1} + r_{2}$ mit $0 \\le r_{2} < r_{1}$.\n' +
    '3. Genauso weiter: immer den **vorletzten Rest** durch den **letzten** teilen ($r_{1} = q_{2} r_{2} + r_{3}$, $\\dots$).\n' +
    '4. Sobald ein Rest 0 herauskommt, **stoppen**. Der davorstehende Rest ist $\\operatorname{ggT}(a,b)$.\n' +
    'Übersichtlich schreibt man jede Zeile untereinander (siehe Beispiele): pro Zeile eine Gleichung Dividend $=$ Divisor mal Quotient plus Rest.\n' +
    '\n' +
    '**Erweiterter Algorithmus & Bézout**\n' +
    'Nach dem $\\operatorname{ggT}$ gibt es immer eine **Darstellung** mit ganzen Zahlen $s,t \\in \\mathbb{Z}$:\n' +
    '$\\operatorname{ggT}(a,b) = s \\, a + t \\, b$.\n' +
    'Man findet $s,t$ durch **Rückwärtseinsetzen**: die letzte Gleichung mit Rest nach dem $\\operatorname{ggT}$ auflösen und dann Zeile für Zeile die Reste von unten nach oben durch die jeweils darüberstehende Gleichung ersetzen, bis nur noch $a$ und $b$ übrig sind.\n' +
    '\n' +
    '**Anwendung: Inverses modulo $n$**\n' +
    'Die Restklasse $[a]$ ist in $\\mathbb{Z}_{n}$ genau dann **multiplikativ invertierbar**, wenn $\\operatorname{ggT}(a,n) = 1$. Dann liefert die Bézout-Darstellung $1 = s \\, a + t \\, n$ das Inverse: modulo $n$ fällt $t \\, n$ weg, also $s \\, a \\equiv 1 \\pmod{n}$ und damit $[a]^{-1} = [s]$. Zum Schluss $s$ noch auf $\\{0,\\dots,n-1\\}$ bringen (nötigenfalls $+n$).\n' +
    '\n' +
    '**Schema Rückwärtseinsetzen**\n' +
    '| Schritt | was man tut |\n' +
    '|---|---|\n' +
    '| 1 | Vorwärts alle Zeilen $r_{k-1} = q_{k} r_{k} + r_{k+1}$ notieren, bis Rest 0 |\n' +
    '| 2 | Letzte Zeile mit Rest nach dem $\\operatorname{ggT}$ auflösen: $\\operatorname{ggT} = r_{k-1} - q_{k} r_{k}$ |\n' +
    '| 3 | Von unten den jeweils kleinsten Rest durch seine Zeile ersetzen |\n' +
    '| 4 | Zusammenfassen zu $s \\, a + t \\, b$; für ein Inverses $s$ modulo $n$ reduzieren |\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Beim nächsten Schritt Divisor und Rest nicht weiterschieben – man teilt stets den **Divisor durch den Rest** der Vorzeile.\n' +
    '• Einen Schritt **zu früh** aufhören: der $\\operatorname{ggT}$ ist der Rest **vor** der 0, nicht die 0 selbst.\n' +
    '• Negative Reste zulassen – der Rest muss in $\\{0,\\dots,m-1\\}$ liegen.\n' +
    '• Ein Inverses angeben, obwohl $\\operatorname{ggT}(a,n) \\neq 1$ – dann existiert **keines**.\n' +
    '• Das Bézout-$s$ nicht auf $\\{0,\\dots,n-1\\}$ reduzieren (z. B. $-14$ statt $59$ modulo $73$).',
  beispiele: [
    {
      szenario: 'ggT mit dem euklidischen Algorithmus',
      beispiele: [
        '**Aufgabe:** Bestimme $\\operatorname{ggT}(252,198)$.\n**Lösung:** Fortlaufend Division mit Rest, größere Zahl oben:\n$252 = 1 \\cdot 198 + 54$\n$198 = 3 \\cdot 54 + 36$\n$54 = 1 \\cdot 36 + 18$\n$36 = 2 \\cdot 18 + 0$\nDer letzte Rest vor der 0 ist $18$.\n**Ergebnis:** $\\operatorname{ggT}(252,198) = 18$.',
        '**Aufgabe:** Bestimme $\\operatorname{ggT}(1071,462)$.\n**Lösung:**\n$1071 = 2 \\cdot 462 + 147$\n$462 = 3 \\cdot 147 + 21$\n$147 = 7 \\cdot 21 + 0$\nRest 0 erreicht, davor steht $21$.\n**Ergebnis:** $\\operatorname{ggT}(1071,462) = 21$.',
        '**Aufgabe:** Sind $96$ und $36$ teilerfremd? Bestimme $\\operatorname{ggT}(96,36)$.\n**Lösung:**\n$96 = 2 \\cdot 36 + 24$\n$36 = 1 \\cdot 24 + 12$\n$24 = 2 \\cdot 12 + 0$\nDer $\\operatorname{ggT}$ ist $12$, also nicht $1$.\n**Ergebnis:** $\\operatorname{ggT}(96,36) = 12$; die Zahlen sind nicht teilerfremd.',
      ],
    },
    {
      szenario: 'Bézout-Darstellung (erweiterter Algorithmus)',
      beispiele: [
        '**Aufgabe:** Schreibe $\\operatorname{ggT}(252,198) = 18$ als $s \\cdot 252 + t \\cdot 198$.\n**Lösung:** Rückwärts durch die Zeilen von oben. Aus $54 = 1\\cdot 36 + 18$ folgt $18 = 54 - 1 \\cdot 36$. Setze $36 = 198 - 3\\cdot 54$ ein: $18 = 54 - (198 - 3\\cdot 54) = 4 \\cdot 54 - 198$. Setze $54 = 252 - 198$ ein: $18 = 4(252 - 198) - 198 = 4 \\cdot 252 - 5 \\cdot 198$.\n**Ergebnis:** $18 = 4 \\cdot 252 + (-5) \\cdot 198$, also $s = 4$ und $t = -5$.',
        '**Aufgabe:** Schreibe $\\operatorname{ggT}(1071,462) = 21$ als $s \\cdot 1071 + t \\cdot 462$.\n**Lösung:** Aus $462 = 3\\cdot 147 + 21$ folgt $21 = 462 - 3 \\cdot 147$. Setze $147 = 1071 - 2\\cdot 462$ ein: $21 = 462 - 3(1071 - 2\\cdot 462) = 7 \\cdot 462 - 3 \\cdot 1071$.\n**Ergebnis:** $21 = (-3) \\cdot 1071 + 7 \\cdot 462$, also $s = -3$ und $t = 7$.',
        '**Aufgabe:** Bestimme $s,t$ mit $\\operatorname{ggT}(120,23) = s \\cdot 120 + t \\cdot 23$.\n**Lösung:** Vorwärts: $120 = 5\\cdot 23 + 5$, $23 = 4\\cdot 5 + 3$, $5 = 1\\cdot 3 + 2$, $3 = 1\\cdot 2 + 1$, $2 = 2\\cdot 1 + 0$; also $\\operatorname{ggT} = 1$. Rückwärts: $1 = 3 - 1\\cdot 2 = 3 - (5 - 3) = 2\\cdot 3 - 5 = 2(23 - 4\\cdot 5) - 5 = 2\\cdot 23 - 9\\cdot 5 = 2\\cdot 23 - 9(120 - 5\\cdot 23) = 47 \\cdot 23 - 9 \\cdot 120$.\n**Ergebnis:** $1 = (-9) \\cdot 120 + 47 \\cdot 23$, also $s = -9$ und $t = 47$.',
      ],
    },
    {
      szenario: 'Multiplikatives Inverses modulo n',
      beispiele: [
        '**Aufgabe:** Ist $[26]$ in $\\mathbb{Z}_{73}$ bezüglich der Multiplikation invertierbar? Falls ja, gib das Inverse als $[k]$ mit $k \\in \\{0,\\dots,72\\}$ an.\n**Lösung:** $\\operatorname{ggT}(26,73)$: $73 = 2\\cdot 26 + 21$, $26 = 1\\cdot 21 + 5$, $21 = 4\\cdot 5 + 1$, $5 = 5\\cdot 1 + 0$, also $\\operatorname{ggT} = 1$ – invertierbar. Rückwärts: $1 = 21 - 4\\cdot 5 = 21 - 4(26 - 21) = 5\\cdot 21 - 4\\cdot 26 = 5(73 - 2\\cdot 26) - 4\\cdot 26 = 5\\cdot 73 - 14\\cdot 26$. Also $-14 \\cdot 26 \\equiv 1 \\pmod{73}$; reduziere $-14 + 73 = 59$.\n**Ergebnis:** $[26]^{-1} = [59]$ (Probe: $26 \\cdot 59 = 1534 = 21\\cdot 73 + 1$).',
        '**Aufgabe:** Ist $[96]$ in $\\mathbb{Z}_{296}$ bezüglich der Multiplikation invertierbar?\n**Lösung:** $\\operatorname{ggT}(96,296)$: $296 = 3\\cdot 96 + 8$, $96 = 12\\cdot 8 + 0$, also $\\operatorname{ggT}(96,296) = 8$, nicht $1$. Damit ist $[96]$ nicht invertierbar.\n**Ergebnis:** Kein Inverses (weil $96$ und $296$ nicht teilerfremd sind).',
        '**Aufgabe:** Bestimme das Inverse von $[23]$ in $\\mathbb{Z}_{120}$.\n**Lösung:** Aus dem vorigen Szenario ist $\\operatorname{ggT}(120,23) = 1$ mit $1 = -9\\cdot 120 + 47\\cdot 23$. Modulo $120$ fällt $-9\\cdot 120$ weg: $47 \\cdot 23 \\equiv 1 \\pmod{120}$, und $47$ liegt bereits in $\\{0,\\dots,119\\}$.\n**Ergebnis:** $[23]^{-1} = [47]$ (Probe: $23 \\cdot 47 = 1081 = 9\\cdot 120 + 1$).',
      ],
    },
  ],
}
