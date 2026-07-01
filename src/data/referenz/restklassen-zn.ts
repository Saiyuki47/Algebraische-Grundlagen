import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'restklassen-zn',
  titel: 'Restklassen ℤₙ',
  inhalt:
    '**Worum geht es?**\n' +
    'Oft interessiert nicht eine Zahl selbst, sondern nur ihr **Rest** bei Division durch ein festes $n$ – etwa bei Uhrzeiten (Stunden modulo $12$), Wochentagen (modulo $7$) oder Prüfziffern. Man fasst dann alle Zahlen mit demselben Rest zu einer **Restklasse** zusammen und rechnet nur noch mit diesen endlich vielen Klassen. So wird aus der unendlichen Menge $\\mathbb{Z}$ die handliche Menge $\\mathbb{Z}_n$ mit genau $n$ Elementen – die Grundlage für modulares Rechnen, Prüfziffern und die Restklassenringe.\n' +
    '\n' +
    '**Teilbarkeit und Division mit Rest**\n' +
    'Für $a, b \\in \\mathbb{Z}$ heißt $b$ ein **Teiler** von $a$ (Schreibweise $b \\mid a$), wenn es ein $z \\in \\mathbb{Z}$ gibt mit $a = z \\cdot b$. Zu jedem $a \\in \\mathbb{Z}$ und $n \\in \\mathbb{N}$ gibt es **eindeutig** bestimmte Zahlen $q \\in \\mathbb{Z}$ und $r \\in \\{0, 1, \\dots, n-1\\}$ mit\n' +
    '$a = q \\cdot n + r$.\n' +
    'Dabei ist $r$ der **Rest**; man schreibt $r = a \\bmod n$. Wichtig: Der Rest ist **nie negativ**, er liegt immer zwischen $0$ und $n-1$.\n' +
    '\n' +
    '**Kongruenz modulo n**\n' +
    'Zwei Zahlen $a, b \\in \\mathbb{Z}$ heißen **kongruent modulo n**, wenn $n$ die Differenz teilt:\n' +
    '$a \\equiv b \\pmod{n} \\iff n \\mid (b - a)$.\n' +
    'Anschaulich bedeutet das: $a$ und $b$ lassen bei Division durch $n$ **denselben Rest**, also $a \\bmod n = b \\bmod n$. Diese Relation $R_n$ ist eine **Äquivalenzrelation** auf $\\mathbb{Z}$: sie ist reflexiv ($n \\mid 0$), symmetrisch (mit $n \\mid (b-a)$ auch $n \\mid (a-b)$) und transitiv.\n' +
    '\n' +
    '**Die Restklasse $[a]_n$**\n' +
    'Die **Restklasse** von $a$ modulo $n$ ist die Menge aller zu $a$ kongruenten Zahlen:\n' +
    '$[a]_n = \\{\\, a + k n : k \\in \\mathbb{Z} \\,\\}$\n' +
    '(kurz $[a]$, wenn $n$ feststeht). Sie enthält also $a$ und alle Zahlen, die sich von $a$ um ein Vielfaches von $n$ unterscheiden – z. B. ist in $\\mathbb{Z}_5$ die Klasse $[2] = \\{\\dots, -8, -3, 2, 7, 12, \\dots\\}$. Jedes Element einer Klasse heißt **Vertreter** (Repräsentant); jeder Vertreter beschreibt dieselbe Klasse: $b \\in [a] \\iff [b] = [a] \\iff a \\equiv b \\pmod{n}$.\n' +
    '\n' +
    '**Die Restklassenmenge $\\mathbb{Z}_n$**\n' +
    'Für $n \\in \\mathbb{N}$, $n \\geq 2$, gibt es genau $n$ verschiedene Restklassen – eine für jeden möglichen Rest $0, 1, \\dots, n-1$. Ihre Gesamtheit ist\n' +
    '$\\mathbb{Z}_n = \\{\\, [0], [1], \\dots, [n-1] \\,\\}$.\n' +
    'Man wählt üblicherweise die **kleinsten nichtnegativen Vertreter** $0, \\dots, n-1$ (den Rest). Weil $R_n$ eine Äquivalenzrelation ist, bilden diese Klassen eine **Partition** von $\\mathbb{Z}$: sie sind paarweise **disjunkt** (verschiedene Klassen haben kein gemeinsames Element) und **überdecken** ganz $\\mathbb{Z}$ (jede ganze Zahl liegt in genau einer Klasse).\n' +
    '\n' +
    '**Wie bestimmt man die Klasse einer Zahl?**\n' +
    '1. Teile $a$ mit Rest durch $n$: berechne $r = a \\bmod n$ mit $0 \\leq r \\leq n-1$.\n' +
    '2. Dann ist $[a]_n = [r]_n$ – der Rest ist der **Standardvertreter**.\n' +
    'Bei **negativem** $a$ so oft $n$ addieren, bis man in $\\{0, \\dots, n-1\\}$ landet: z. B. $-3 \\bmod 5 = 2$ (denn $-3 = (-1)\\cdot 5 + 2$), **nicht** $-3$. Für **Kongruenz** $a \\equiv b$ genügt es zu prüfen, ob $n \\mid (b-a)$ ist, oder beide Reste zu vergleichen.\n' +
    '\n' +
    '**Übersicht $\\mathbb{Z}_5$**\n' +
    '| Klasse | Rest | einige Vertreter |\n' +
    '|---|---|---|\n' +
    '| $[0]$ | $0$ | $\\dots, -5, 0, 5, 10, \\dots$ |\n' +
    '| $[1]$ | $1$ | $\\dots, -4, 1, 6, 11, \\dots$ |\n' +
    '| $[2]$ | $2$ | $\\dots, -3, 2, 7, 12, \\dots$ |\n' +
    '| $[3]$ | $3$ | $\\dots, -2, 3, 8, 13, \\dots$ |\n' +
    '| $[4]$ | $4$ | $\\dots, -1, 4, 9, 14, \\dots$ |\n' +
    '\n' +
    '**Merkregeln & häufige Fehler**\n' +
    '• Der Rest ist **nie negativ**: $-1 \\bmod 12 = 11$, nicht $-1$.\n' +
    '• $[a] = [b]$ heißt **nicht** $a = b$, sondern nur gleicher Rest ($a \\equiv b \\pmod{n}$); so ist $[7] = [2]$ in $\\mathbb{Z}_5$.\n' +
    '• $\\mathbb{Z}_n$ hat immer **genau** $n$ Elemente – nicht mehr, nicht weniger.\n' +
    '• Rechnen **mit** den Klassen ($[a]+[b]$, $[a]\\cdot[b]$, Inverse) ist ein eigenes Thema – siehe Karte „Rechnen mit Restklassen & Inverse".',
  beispiele: [
    {
      szenario: 'Klasse / Standardvertreter bestimmen',
      beispiele: [
        '**Aufgabe:** Welche Restklasse in $\\mathbb{Z}_9$ ist $[21]$? Gib sie als $[k]$ mit $k \\in \\{0, \\dots, 8\\}$ an.\n**Lösung:** Division mit Rest: $21 = 2 \\cdot 9 + 3$, also $21 \\bmod 9 = 3$. Der Rest $3$ ist der Standardvertreter.\n**Ergebnis:** $[21] = [3]$.',
        '**Aufgabe:** Bestimme die Restklasse von $-29$ in $\\mathbb{Z}_9$.\n**Lösung:** Der Rest muss in $\\{0, \\dots, 8\\}$ liegen. $-29 = (-4) \\cdot 9 + 7$, denn $-36 + 7 = -29$. Also $-29 \\bmod 9 = 7$ (nicht negativ!).\n**Ergebnis:** $[-29] = [7]$.',
        '**Aufgabe:** In welcher Klasse von $\\mathbb{Z}_7$ liegt das Jahr $2026$?\n**Lösung:** $2026 = 289 \\cdot 7 + 3$ (denn $289 \\cdot 7 = 2023$), also $2026 \\bmod 7 = 3$.\n**Ergebnis:** $[2026] = [3]$ in $\\mathbb{Z}_7$.',
      ],
    },
    {
      szenario: 'Kongruenz prüfen',
      beispiele: [
        '**Aufgabe:** Gilt $17 \\equiv 2 \\pmod 5$?\n**Lösung:** Prüfe, ob $5 \\mid (17 - 2)$. Es ist $17 - 2 = 15 = 3 \\cdot 5$, also teilt $5$ die Differenz. (Kontrolle: $17 \\bmod 5 = 2$ und $2 \\bmod 5 = 2$, gleiche Reste.)\n**Ergebnis:** Ja, $17 \\equiv 2 \\pmod 5$.',
        '**Aufgabe:** Sind $38$ und $3$ kongruent modulo $7$?\n**Lösung:** $38 - 3 = 35 = 5 \\cdot 7$, also $7 \\mid 35$. Beide haben Rest $3$ bei Division durch $7$.\n**Ergebnis:** Ja, $38 \\equiv 3 \\pmod 7$, d. h. $[38] = [3]$ in $\\mathbb{Z}_7$.',
        '**Aufgabe:** Gilt $50 \\equiv -1 \\pmod{12}$?\n**Lösung:** $50 - (-1) = 51$. Ist $12 \\mid 51$? Nein, $51 = 4 \\cdot 12 + 3$. (Reste: $50 \\bmod 12 = 2$, aber $-1 \\bmod 12 = 11$ – verschieden.)\n**Ergebnis:** Nein, $50 \\not\\equiv -1 \\pmod{12}$.',
      ],
    },
    {
      szenario: 'Restklassenmenge auflisten',
      beispiele: [
        '**Aufgabe:** Gib alle Elemente von $\\mathbb{Z}_7$ an.\n**Lösung:** Für $n = 7$ gibt es genau $7$ Klassen, eine je Rest $0, \\dots, 6$. Als Standardvertreter nimmt man diese Reste selbst.\n**Ergebnis:** $\\mathbb{Z}_7 = \\{[0], [1], [2], [3], [4], [5], [6]\\}$.',
        '**Aufgabe:** Wie viele Elemente hat $\\mathbb{Z}_{12345}$ und wie lauten seine Standardvertreter?\n**Lösung:** $\\mathbb{Z}_n$ hat für jedes $n \\geq 2$ genau $n$ Klassen; die kleinsten nichtnegativen Vertreter sind $0, 1, \\dots, n-1$.\n**Ergebnis:** $12345$ Elemente, Vertreter $0, 1, \\dots, 12344$.',
        '**Aufgabe:** Welche Zahlen aus $\\{-3, 4, 9, 20\\}$ liegen in derselben Restklasse von $\\mathbb{Z}_7$?\n**Lösung:** Reste bestimmen: $-3 \\bmod 7 = 4$, $4 \\bmod 7 = 4$, $9 \\bmod 7 = 2$, $20 \\bmod 7 = 6$. Gleicher Rest $4$ bei $-3$ und $4$.\n**Ergebnis:** $-3$ und $4$ liegen beide in $[4]$; $9 \\in [2]$ und $20 \\in [6]$ sind eigene Klassen.',
      ],
    },
  ],
}
