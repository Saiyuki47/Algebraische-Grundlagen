import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'determinanten',
  titel: 'Determinanten',
  inhalt:
    '**Worum geht es?**\n' +
    'Die **Determinante** ordnet jeder **quadratischen** Matrix $A$ (gleich viele Zeilen wie Spalten) eine einzige Zahl $\\det(A)$ zu. Ihr wichtigster Nutzen: Man liest an ihr ab, ob ein lineares Gleichungssystem mit $n$ Gleichungen und $n$ Unbekannten **eindeutig lösbar** ist — und zwar ohne das System selbst zu lösen. Geometrisch misst $\\det(A)$ zudem, wie stark $A$ Flächen bzw. Volumina streckt (Faktor $0$ bedeutet: Alles wird plattgedrückt).\n' +
    '\n' +
    '**Schreibweise**\n' +
    'Man schreibt die Determinante von $A$ als $\\det(A)$ oder mit senkrechten Strichen statt Klammern, z. B. $\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}$. Nur **quadratische** Matrizen haben eine Determinante.\n' +
    '\n' +
    '**Die 2×2-Determinante**\n' +
    'Für $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ gilt $\\det(A) = ad - bc$: Produkt der **Hauptdiagonale** ($a \\cdot d$) minus Produkt der **Nebendiagonale** ($b \\cdot c$).\n' +
    '\n' +
    '**Die 3×3-Determinante — Regel von Sarrus**\n' +
    'Für $A = \\begin{pmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{pmatrix}$ schreibt man die ersten beiden Spalten rechts noch einmal daneben und bildet drei „Plus-Diagonalen" (von links oben nach rechts unten) minus drei „Minus-Diagonalen" (von rechts oben nach links unten):\n' +
    '$\\det(A) = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{31}a_{22}a_{13} - a_{32}a_{23}a_{11} - a_{33}a_{21}a_{12}$.\n' +
    'Achtung: Sarrus funktioniert **nur** für $n = 3$, nicht für größere Matrizen.\n' +
    '\n' +
    '**Laplace-Entwicklung (für jedes $n$)**\n' +
    'Man entwickelt nach einer beliebigen Zeile oder Spalte und führt so eine $n\\times n$-Determinante auf kleinere zurück. Bezeichne mit $A_{kl}$ die **Streichungsmatrix**, die aus $A$ durch Streichen von Zeile $k$ und Spalte $l$ entsteht; $\\det(A_{kl})$ heißt **Minor**. Für ein festes $l$ (Entwicklung nach **Spalte** $l$) gilt $\\det(A) = \\sum_{k=1}^{n} (-1)^{k+l}\\, a_{kl}\\, \\det(A_{kl})$; für ein festes $k$ (Entwicklung nach **Zeile** $k$) gilt $\\det(A) = \\sum_{l=1}^{n} (-1)^{k+l}\\, a_{kl}\\, \\det(A_{kl})$.\n' +
    'Der Ausdruck $(-1)^{k+l}\\det(A_{kl})$ heißt **Kofaktor**. Das Vorzeichen $(-1)^{k+l}$ folgt dem **Schachbrettmuster** $\\begin{pmatrix} + & - & + \\\\ - & + & - \\\\ + & - & + \\end{pmatrix}$. Tipp: Entwickle nach der Zeile/Spalte mit den **meisten Nullen** — jeder Nulleintrag spart einen ganzen Minor.\n' +
    '\n' +
    '**Wie rechnet man Schritt für Schritt?**\n' +
    '1. $n = 2$: direkt $ad - bc$.\n' +
    '2. $n = 3$: Regel von Sarrus (oder Laplace).\n' +
    '3. $n \\ge 4$: Laplace nach der Zeile/Spalte mit den meisten Nullen entwickeln, bis nur noch $2\\times2$- oder $3\\times3$-Determinanten übrig sind.\n' +
    '4. Alternative: durch Zeilenumformungen auf **Dreiecksform** bringen (siehe unten) und das Diagonalprodukt ablesen.\n' +
    '\n' +
    '**Rechenregeln**\n' +
    'Sie erlauben schnelles Rechnen und den Umgang mit Umformungen:\n' +
    '| Situation | Wirkung auf $\\det$ |\n' +
    '|---|---|\n' +
    '| Zwei Zeilen (oder Spalten) vertauschen | Vorzeichen wechselt: $\\det \\to -\\det$ |\n' +
    '| Eine Zeile (Spalte) mit $\\lambda \\neq 0$ multiplizieren | $\\det \\to \\lambda \\cdot \\det$ |\n' +
    '| Vielfaches einer Zeile zu einer anderen addieren | $\\det$ bleibt unverändert |\n' +
    '| Dreiecks- / Diagonalmatrix | $\\det = a_{11}\\cdot a_{22}\\cdots a_{nn}$ (Diagonalprodukt) |\n' +
    '| Nullzeile oder Nullspalte vorhanden | $\\det = 0$ |\n' +
    '| Transponieren | $\\det(A^{T}) = \\det(A)$ |\n' +
    '| Produkt zweier Matrizen | $\\det(AB) = \\det(A)\\cdot\\det(B)$ |\n' +
    'Weil $\\det(A^{T}) = \\det(A)$ gilt, darf man alle Zeilenregeln genauso mit Spalten anwenden. Der **Faktor herausziehen** ist die Umkehrung der Multiplikationsregel: Hat eine ganze Zeile den gemeinsamen Faktor $\\lambda$, so ist $\\det = \\lambda \\cdot (\\text{Determinante mit gekürzter Zeile})$.\n' +
    '\n' +
    '**Zusammenhang mit Invertierbarkeit und Lösbarkeit**\n' +
    'Die Determinante ist der Test für „nicht ausgeartet". Für eine quadratische $n\\times n$-Matrix $A$ sind äquivalent: $A$ ist **invertierbar** $\\iff \\det(A) \\neq 0 \\iff$ das LGS $A\\vec{x} = \\vec{b}$ ist **eindeutig lösbar** (für jede rechte Seite $\\vec{b}$). Umgekehrt: Ist $\\det(A) = 0$, so hat das LGS **keine** oder **unendlich viele** Lösungen — was von beidem eintritt, hängt von der rechten Seite $\\vec{b}$ ab.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Determinante einer **nicht-quadratischen** Matrix bilden — gibt es nicht.\n' +
    '• Bei $2\\times2$ Haupt- und Nebendiagonale vertauschen: es ist $ad - bc$, nicht $bc - ad$.\n' +
    '• Regel von Sarrus auf $4\\times4$ (oder größer) anwenden — nur für $n = 3$ erlaubt.\n' +
    '• Bei Laplace das Vorzeichen $(-1)^{k+l}$ vergessen oder falsch setzen.\n' +
    '• Beim Zeilentausch den Vorzeichenwechsel unterschlagen.',
  beispiele: [
    {
      szenario: '2×2-Determinante (ad − bc)',
      beispiele: [
        '**Aufgabe:** Berechne $\\det(A)$ für $A = \\begin{pmatrix} 3 & 5 \\\\ 9 & -3 \\end{pmatrix}$.\n**Lösung:** Hauptdiagonale minus Nebendiagonale: $\\det(A) = 3 \\cdot (-3) - 9 \\cdot 5 = -9 - 45$.\n**Ergebnis:** $\\det(A) = -54$.',
        '**Aufgabe:** Berechne $\\det(A)$ für $A = \\begin{pmatrix} 2 & -1 \\\\ -1 & -1 \\end{pmatrix}$ und entscheide, ob das LGS $A\\vec{x}=\\vec{b}$ eindeutig lösbar ist.\n**Lösung:** $\\det(A) = 2 \\cdot (-1) - (-1) \\cdot (-1) = -2 - 1 = -3$. Wegen $\\det(A) \\neq 0$ ist $A$ invertierbar.\n**Ergebnis:** $\\det(A) = -3 \\neq 0$, das LGS ist eindeutig lösbar.',
        '**Aufgabe:** Prüfe über die Determinante, ob $A = \\begin{pmatrix} 2 & 1 \\\\ -4 & -2 \\end{pmatrix}$ eine eindeutige Lösung liefert.\n**Lösung:** $\\det(A) = 2 \\cdot (-2) - (-4) \\cdot 1 = -4 + 4 = 0$. Die Nebendiagonale hebt die Hauptdiagonale auf.\n**Ergebnis:** $\\det(A) = 0$, also **keine** eindeutige Lösung (keine oder unendlich viele).',
      ],
    },
    {
      szenario: '3×3-Determinante (Regel von Sarrus)',
      beispiele: [
        '**Aufgabe:** Berechne $\\det(M)$ für $M = \\begin{pmatrix} 2 & 1 & 3 \\\\ 1 & 4 & 7 \\\\ -1 & 0 & 5 \\end{pmatrix}$ mit Sarrus.\n**Lösung:** Plus-Diagonalen: $2 \\cdot 4 \\cdot 5 + 1 \\cdot 7 \\cdot (-1) + 3 \\cdot 1 \\cdot 0 = 40 - 7 + 0$. Minus-Diagonalen: $(-1) \\cdot 4 \\cdot 3 + 0 \\cdot 7 \\cdot 2 + 5 \\cdot 1 \\cdot 1 = -12 + 0 + 5$. Zusammen: $(40 - 7 + 0) - (-12 + 0 + 5) = 33 + 7$.\n**Ergebnis:** $\\det(M) = 40$.',
        '**Aufgabe:** Berechne $\\det(D)$ für $D = \\begin{pmatrix} 1 & 2 & 0 \\\\ 3 & -1 & 4 \\\\ 0 & 5 & 2 \\end{pmatrix}$.\n**Lösung:** Plus: $1 \\cdot (-1) \\cdot 2 + 2 \\cdot 4 \\cdot 0 + 0 \\cdot 3 \\cdot 5 = -2 + 0 + 0$. Minus: $0 \\cdot (-1) \\cdot 0 + 5 \\cdot 4 \\cdot 1 + 2 \\cdot 3 \\cdot 2 = 0 + 20 + 12$. Zusammen: $-2 - 32$.\n**Ergebnis:** $\\det(D) = -34$.',
        '**Aufgabe:** Berechne $\\det(E)$ für die Diagonalmatrix $E = \\begin{pmatrix} 4 & 0 & 0 \\\\ 0 & 3 & 0 \\\\ 0 & 0 & 2 \\end{pmatrix}$.\n**Lösung:** Bei einer Diagonalmatrix ist $\\det$ das Produkt der Diagonaleinträge (alle anderen Sarrus-Produkte enthalten eine $0$): $4 \\cdot 3 \\cdot 2$.\n**Ergebnis:** $\\det(E) = 24$.',
      ],
    },
    {
      szenario: 'Laplace-Entwicklung nach Zeile/Spalte',
      beispiele: [
        '**Aufgabe:** Berechne $\\det(B)$ für $B = \\begin{pmatrix} 1 & 2 & 4 \\\\ -2 & 7 & 2 \\\\ 0 & -1 & 0 \\end{pmatrix}$ durch Entwicklung nach Zeile 3.\n**Lösung:** Zeile 3 hat nur den Eintrag $-1$ an Position $(3,2)$. Kofaktor-Vorzeichen $(-1)^{3+2} = -1$. Streichungsmatrix (Zeile 3, Spalte 2 weg): $\\begin{pmatrix} 1 & 4 \\\\ -2 & 2 \\end{pmatrix}$ mit Minor $1 \\cdot 2 - 4 \\cdot (-2) = 2 + 8 = 10$. Also $\\det(B) = (-1) \\cdot (-1) \\cdot 10$.\n**Ergebnis:** $\\det(B) = 10$.',
        '**Aufgabe:** Berechne $\\det(C)$ für $C = \\begin{pmatrix} 2 & 1 & 0 & 3 \\\\ 1 & 1 & -4 & 2 \\\\ 1 & 4 & 0 & 7 \\\\ -1 & 0 & 0 & 5 \\end{pmatrix}$ (Sarrus geht hier nicht, da $4\\times4$).\n**Lösung:** Spalte 3 hat nur einen Eintrag $\\neq 0$: $-4$ an Position $(2,3)$. Kofaktor-Vorzeichen $(-1)^{2+3} = -1$, Faktor also $-(-4) = 4$. Streiche Zeile 2 und Spalte 3; übrig bleibt $\\begin{pmatrix} 2 & 1 & 3 \\\\ 1 & 4 & 7 \\\\ -1 & 0 & 5 \\end{pmatrix}$, deren Determinante mit Sarrus $40$ ergibt (siehe Szenario oben). Also $\\det(C) = 4 \\cdot 40$.\n**Ergebnis:** $\\det(C) = 160$.',
        '**Aufgabe:** Berechne $\\det(F)$ für $F = \\begin{pmatrix} 3 & 0 & 0 \\\\ 5 & 2 & 0 \\\\ 7 & 1 & 4 \\end{pmatrix}$ durch Entwicklung nach Zeile 1.\n**Lösung:** Zeile 1 hat nur $a_{11} = 3$ ($\\neq 0$), Vorzeichen $(-1)^{1+1} = +1$. Minor (Zeile 1, Spalte 1 weg): $\\begin{pmatrix} 2 & 0 \\\\ 1 & 4 \\end{pmatrix}$ mit Wert $2 \\cdot 4 - 0 \\cdot 1 = 8$. Also $\\det(F) = 3 \\cdot 8$. (Probe: $F$ ist untere Dreiecksmatrix, Diagonalprodukt $3 \\cdot 2 \\cdot 4 = 24$.)\n**Ergebnis:** $\\det(F) = 24$.',
      ],
    },
    {
      szenario: 'Rechenregeln & Dreiecksform',
      beispiele: [
        '**Aufgabe:** Es sei $\\det\\begin{pmatrix} 2 & -1 \\\\ -1 & -1 \\end{pmatrix} = -3$. Bestimme ohne Neuberechnung $\\det\\begin{pmatrix} -1 & -1 \\\\ 2 & -1 \\end{pmatrix}$ und $\\det\\begin{pmatrix} 10 & -5 \\\\ -1 & -1 \\end{pmatrix}$.\n**Lösung:** Die erste Matrix entsteht durch **Zeilentausch** $\\Rightarrow$ Vorzeichenwechsel: $-(-3) = 3$. Die zweite entsteht durch Multiplikation der ersten Zeile mit $5$ $\\Rightarrow$ Determinante mal $5$: $5 \\cdot (-3) = -15$.\n**Ergebnis:** $3$ bzw. $-15$.',
        '**Aufgabe:** Berechne $\\det(C)$ für $C = \\begin{pmatrix} 6 & 6 & 6 \\\\ 2 & 0 & 1 \\\\ 3 & 3 & 2 \\end{pmatrix}$, indem du auf Zeilenstufenform (Dreiecksform) umformst.\n**Lösung:** Zeile 1 durch Herausziehen des Faktors $6$: $\\det(C) = 6 \\cdot \\det\\begin{pmatrix} 1 & 1 & 1 \\\\ 2 & 0 & 1 \\\\ 3 & 3 & 2 \\end{pmatrix}$. Nun $(ii) - 2\\,(i)$ und $(iii) - 3\\,(i)$ (ändern $\\det$ nicht): $6 \\cdot \\det\\begin{pmatrix} 1 & 1 & 1 \\\\ 0 & -2 & -1 \\\\ 0 & 0 & -1 \\end{pmatrix}$. Dreiecksmatrix, Diagonalprodukt: $6 \\cdot (1 \\cdot (-2) \\cdot (-1))$.\n**Ergebnis:** $\\det(C) = 12$.',
        '**Aufgabe:** Warum ist $\\det\\begin{pmatrix} 1 & 2 & 3 & 4 \\\\ 1 & -1 & 4 & 7 \\\\ 1 & 2 & 3 & 4 \\\\ 10 & 3 & -2 & -4 \\end{pmatrix} = 0$?\n**Lösung:** Subtrahiert man Zeile 1 von Zeile 3 (Regel: $\\det$ bleibt gleich), entsteht in Zeile 3 eine **Nullzeile** $(0\\ 0\\ 0\\ 0)$, denn Zeile 1 und Zeile 3 sind identisch. Eine Matrix mit Nullzeile hat Determinante $0$.\n**Ergebnis:** $\\det = 0$ (die Matrix ist nicht invertierbar).',
      ],
    },
  ],
}
