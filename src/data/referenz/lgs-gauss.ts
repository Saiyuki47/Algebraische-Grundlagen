import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'lgs-gauss',
  titel: 'Lineare Gleichungssysteme & Gauß-Algorithmus',
  inhalt:
    '**Worum geht es?**\n' +
    'Viele Fragen führen auf mehrere lineare Gleichungen, die **gleichzeitig** gelten sollen — etwa der Schnittpunkt zweier Geraden ($2x+1=y$ und $-x-5=y$). Ein solches **lineares Gleichungssystem** (kurz **LGS**) sucht Zahlen $x_1,\\dots,x_n$, die alle Gleichungen zugleich erfüllen. Der **Gauß-Algorithmus** ist das systematische Standardverfahren, um solche Lösungen zu finden — es funktioniert immer und für beliebig viele Gleichungen und Unbekannte.\n' +
    '\n' +
    '**Was ist ein LGS?**\n' +
    'Ein reelles LGS mit $m$ Gleichungen und $n$ Unbekannten hat die Form $a_{11}x_1 + \\dots + a_{1n}x_n = b_1$, …, $a_{m1}x_1 + \\dots + a_{mn}x_n = b_m$. Die $a_{ij}\\in\\mathbb{R}$ heißen **Koeffizienten**, $x_1,\\dots,x_n$ die **Unbekannten** und $b_1,\\dots,b_m$ die **rechte Seite**. Kurz schreibt man $A\\vec x = \\vec b$, wobei $A$ die $m\\times n$-**Koeffizientenmatrix** ist, $\\vec b\\in\\mathbb{R}^m$ die rechte Seite und $\\vec x\\in\\mathbb{R}^n$ die Unbekannten. Ist $b_1=\\dots=b_m=0$, heißt das LGS **homogen** (dann ist $\\vec x=\\vec 0$ stets eine Lösung).\n' +
    '\n' +
    '**Koeffizientenmatrix und erweiterte Koeffizientenmatrix**\n' +
    'Die **Koeffizientenmatrix** $A$ enthält nur die $a_{ij}$. Nimmt man die rechte Seite als zusätzliche Spalte (durch einen Strich abgetrennt) dazu, entsteht die **erweiterte Koeffizientenmatrix** $(A\\mid \\vec b)$. Sie kodiert das gesamte LGS und ist das Objekt, an dem man rechnet. Die **Lösungsmenge** $L(A\\mid\\vec b)$ ist die Menge aller $\\vec x\\in\\mathbb{R}^n$, die alle Gleichungen erfüllen.\n' +
    '\n' +
    '**Elementare Zeilenumformungen (Z1–Z3)**\n' +
    'Die entscheidende Beobachtung: Die folgenden drei Umformungen **ändern die Lösungsmenge nicht**. Man darf sie also beliebig oft anwenden.\n' +
    '\n' +
    '| Kürzel | Umformung | Bedingung |\n' +
    '|---|---|---|\n' +
    '| $(Z_1)$ | Vertauschen zweier Zeilen | — |\n' +
    '| $(Z_2)$ | Multiplikation einer Zeile mit $\\lambda$ | $\\lambda\\neq 0$ |\n' +
    '| $(Z_3)$ | Addition eines Vielfachen einer Zeile zu einer **anderen** Zeile | — |\n' +
    '\n' +
    'Man führt sie aus Bequemlichkeit **nur an der erweiterten Koeffizientenmatrix** $(A\\mid\\vec b)$ durch, nicht am ausgeschriebenen Gleichungssystem.\n' +
    '\n' +
    '**Zeilenstufenform (ZSF)**\n' +
    'Ziel der Umformungen ist die **Zeilenstufenform**. Eine Matrix ist in ZSF, wenn (1) je tiefer die Zeile, desto weiter rechts ihr **Zeilenkopf** (der erste Eintrag $\\neq 0$ von links) steht — dadurch stehen unter jedem Zeilenkopf nur Nullen — und (2) etwaige **Nullzeilen** ganz unten stehen. Aus der ZSF der erweiterten Matrix lässt sich die Lösung ablesen.\n' +
    '\n' +
    '**Der Gauß-Algorithmus: Vorwärtselimination**\n' +
    'Man erzeugt die ZSF Spalte für Spalte („Treppe von links oben nach rechts unten"):\n' +
    '1. Hat $A$ vorne ganze **führende Nullspalten**, streiche sie in Gedanken und arbeite mit dem verkürzten System weiter.\n' +
    '2. Der Eintrag links oben (das **Pivot**) muss $\\neq 0$ sein — nötigenfalls mit $(Z_1)$ eine passende Zeile nach oben tauschen.\n' +
    '3. Mit $(Z_3)$ die **Spalte unterhalb des Pivots zu Null machen** (zu jeder unteren Zeile ein passendes Vielfaches der Pivotzeile addieren).\n' +
    '4. Oberste Zeile und erledigte Spalte gedanklich streichen und die Schritte 2.–3. auf das verkürzte System **wiederholen**, bis die Matrix in ZSF ist.\n' +
    '\n' +
    '**Rückwärtseinsetzen**\n' +
    'Aus der ZSF schreibt man das (kürzere) LGS wieder aus und löst **von unten nach oben** auf: Die unterste nichttriviale Gleichung nach ihrer **gebundenen Variablen** (Variable am Zeilenkopf) auflösen, das Ergebnis in die darüberliegende Gleichung einsetzen, und so weiter bis zur ersten Zeile. Variablen ohne Zeilenkopf sind **freie Variablen**; man benennt sie um (z. B. $r,s\\in\\mathbb{R}$) und lässt sie im Ergebnis als Parameter stehen.\n' +
    '\n' +
    '**Reduzierte (normierte) Zeilenstufenform — Gauß-Jordan**\n' +
    'Führt man die Elimination weiter, erhält man die **normierte ZSF** (auch reduzierte ZSF, Gauß-Jordan): (a) Matrix in ZSF, (b) jeder Zeilenkopf ist mit $(Z_2)$ auf $1$ gebracht, und (c) auch **oberhalb** jedes Zeilenkopfes stehen mit $(Z_3)$ nur noch Nullen. Vorteil: Die Lösung lässt sich direkt ablesen, ohne Rückwärtseinsetzen. Vorgehen: erst ZSF, dann jede Nicht-Nullzeile durch ihren Zeilenkopf teilen, dann von unten nach oben die Spalten über den Köpfen ausräumen.\n' +
    '\n' +
    '**Kompaktes Schema**\n' +
    '$A\\vec x=\\vec b \\;\\to\\; (A\\mid\\vec b) \\;\\xrightarrow{Z_1,Z_2,Z_3}\\; \\text{ZSF} \\;\\to\\; \\text{Rückwärtseinsetzen} \\;\\to\\; L(A\\mid\\vec b)$.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Bei $(Z_2)$ mit $\\lambda=0$ multiplizieren — verboten, das löscht die Zeile und verändert die Lösungsmenge.\n' +
    '• Bei $(Z_3)$ ein Vielfaches einer Zeile zu **sich selbst** addieren statt zu einer anderen Zeile.\n' +
    '• Beim Umformen die **rechte Seite** (letzte Spalte) vergessen mitzurechnen.\n' +
    '• Eine Nullzeile $0\\;\\dots\\;0 \\mid c$ mit $c\\neq 0$ übersehen — sie bedeutet $0=c$, also **keine Lösung**.\n' +
    '• Beim Rückwärtseinsetzen freie Variablen fest wählen, statt sie als Parameter zu behalten.',
  beispiele: [
    {
      szenario: 'Erweiterte Koeffizientenmatrix aufstellen',
      beispiele: [
        '**Aufgabe:** Gib die erweiterte Koeffizientenmatrix zu $2x_1+x_2=1$, $-4x_1-2x_2=-3$, $3x_1+4x_2=0$, $-4x_1=7$ an.\n**Lösung:** Pro Gleichung die Koeffizienten von $x_1,x_2$ in eine Zeile, rechte Seite hinter den Strich; fehlt eine Variable, steht dort $0$ (z. B. $-4x_1=7$ liefert $-4,\\ 0\\mid 7$).\n**Ergebnis:** $(A\\mid\\vec b)=\\left(\\begin{smallmatrix} 2 & 1 & 1\\\\ -4 & -2 & -3\\\\ 3 & 4 & 0\\\\ -4 & 0 & 7\\end{smallmatrix}\\right)$ (Trennstrich vor der letzten Spalte).',
        '**Aufgabe:** Stelle für $3x_3+2x_1+1=-x_2$ und $4x_1+3x_2-1=0$ die erweiterte Koeffizientenmatrix (Spalten $x_1,x_2,x_3$) auf.\n**Lösung:** Erst sortieren: $2x_1+x_2+3x_3=-1$ und $4x_1+3x_2+0x_3=1$. Koeffizienten spaltenweise ablesen.\n**Ergebnis:** $(A\\mid\\vec b)=\\left(\\begin{smallmatrix} 2 & 1 & 3 & -1\\\\ 4 & 3 & 0 & 1\\end{smallmatrix}\\right)$.',
        '**Aufgabe:** Ist $x_1x_2+x_2x_3=0$, $x_1-2x_2=x_3$ ein LGS?\n**Lösung:** In der ersten Gleichung treten **Produkte** von Unbekannten auf ($x_1x_2$, $x_2x_3$). Ein LGS erlaubt nur Summen $a_{ij}x_j$ mit konstanten $a_{ij}$, keine Produkte oder Beträge der Variablen.\n**Ergebnis:** Kein LGS (nicht linear).',
      ],
    },
    {
      szenario: 'Gauß mit eindeutiger Lösung',
      beispiele: [
        '**Aufgabe:** Löse $x_1+2x_2=6$, $x_1+x_3=4$, $x_1+4x_2-x_3=8$.\n**Lösung:** $(A\\mid\\vec b)=\\left(\\begin{smallmatrix} 1 & 2 & 0 & 6\\\\ 1 & 0 & 1 & 4\\\\ 1 & 4 & -1 & 8\\end{smallmatrix}\\right)$. Mit (ii)$-$(i) und (iii)$-$(i): $\\left(\\begin{smallmatrix} 1 & 2 & 0 & 6\\\\ 0 & -2 & 1 & -2\\\\ 0 & 2 & -1 & 2\\end{smallmatrix}\\right)$. Dann (iii)$+$(ii): letzte Zeile wird $0\\;0\\;0\\mid 0$. Gebunden: $x_1,x_2$; frei: $r=x_3$. Rückwärts: aus $-2x_2+r=-2$ folgt $x_2=1+\\tfrac12 r$, aus $x_1+2x_2=6$ folgt $x_1=4-r$.\n**Ergebnis:** $L=\\{(4-r,\\ 1+\\tfrac12 r,\\ r)^{\\top}: r\\in\\mathbb{R}\\}$ — unendlich viele Lösungen.',
        '**Aufgabe:** Löse $2x_1+4x_2+6x_3=0$, $3x_1+9x_2-3x_3=6$, $2x_2-16x_3=8$, $2x_1+5x_2+4x_3=1$.\n**Lösung:** Nach $\\tfrac12$(i), dann (ii)$-3$(i) und (iv)$-2$(i), $\\tfrac13$(ii), (iii)$-2$(ii) und (iv)$-$(ii), $-\\tfrac18$(iii), schließlich (iv)$-2$(iii) entsteht die ZSF mit Zeilen $x_1+2x_2+3x_3=0$, $x_2-4x_3=2$, $x_3=-\\tfrac12$ und einer Nullzeile. Rückwärts: $x_3=-\\tfrac12$, dann $x_2=2+4x_3=0$, dann $x_1=-2x_2-3x_3=\\tfrac32$.\n**Ergebnis:** $L=\\{(\\tfrac32,\\ 0,\\ -\\tfrac12)^{\\top}\\}$ — genau eine Lösung.',
        '**Aufgabe:** Lies die Lösung aus der ZSF $\\left(\\begin{smallmatrix} 1 & 1 & 2 & 1\\\\ 0 & 1 & 1 & 1\\\\ 0 & 0 & -4 & 0\\end{smallmatrix}\\right)$ ab.\n**Lösung:** Drei Zeilenköpfe in den Spalten $x_1,x_2,x_3$, keine freien Variablen. Rückwärts: aus $-4x_3=0$ folgt $x_3=0$; aus $x_2+x_3=1$ folgt $x_2=1$; aus $x_1+x_2+2x_3=1$ folgt $x_1=0$.\n**Ergebnis:** $L=\\{(0,\\ 1,\\ 0)^{\\top}\\}$.',
      ],
    },
    {
      szenario: 'Widerspruch — leere Lösungsmenge',
      beispiele: [
        '**Aufgabe:** Löse $x_1+2x_2-x_3+x_4=1$, $x_1+4x_2-3x_3-x_4=0$, $2x_1+6x_2-4x_3=0$.\n**Lösung:** $(A\\mid\\vec b)=\\left(\\begin{smallmatrix} 1 & 2 & -1 & 1 & 1\\\\ 1 & 4 & -3 & -1 & 0\\\\ 2 & 6 & -4 & 0 & 0\\end{smallmatrix}\\right)$. Mit (ii)$-$(i) und (iii)$-2$(i), danach (iii)$-$(ii) wird die letzte Zeile $0\\;0\\;0\\;0\\mid -1$, also die Gleichung $0=-1$.\n**Ergebnis:** Widerspruch, $L=\\varnothing$ (keine Lösung).',
        '**Aufgabe:** Was folgt aus der ZSF-Zeile $\\left(\\begin{smallmatrix} 0 & 0 & 0 & -4\\end{smallmatrix}\\right)$ (Spalten $x_1,x_2,x_3$, rechts $-4$)?\n**Lösung:** Diese Zeile bedeutet $0\\cdot x_1+0\\cdot x_2+0\\cdot x_3=-4$, also $0=-4$ — das ist für keine Belegung erfüllbar.\n**Ergebnis:** Das LGS hat keine Lösung, $L=\\varnothing$.',
        '**Aufgabe:** Wie erkennt man an der ZSF sofort „keine Lösung"?\n**Lösung:** Man sucht eine **Nullzeile im Koeffizienten-Teil**, deren rechte Seite $\\neq 0$ ist: die ganze Zeile links vom Strich ist $0$, rechts steht ein Wert $c\\neq 0$. Sie steht für $0=c$.\n**Ergebnis:** Genau dann keine Lösung; andernfalls (keine solche Zeile) ist das LGS lösbar.',
      ],
    },
    {
      szenario: 'Normierte ZSF (Gauß-Jordan)',
      beispiele: [
        '**Aufgabe:** Bringe $\\left(\\begin{smallmatrix} 2 & 4 & 6\\\\ 0 & 2 & -2\\end{smallmatrix}\\right)$ in normierte ZSF.\n**Lösung:** Zeilenköpfe auf $1$ normieren: $\\tfrac12$(i) und $\\tfrac12$(ii) geben $\\left(\\begin{smallmatrix} 1 & 2 & 3\\\\ 0 & 1 & -1\\end{smallmatrix}\\right)$. Dann über dem zweiten Kopf (Spalte 2) Null erzeugen: (i)$-2$(ii).\n**Ergebnis:** $\\left(\\begin{smallmatrix} 1 & 0 & 5\\\\ 0 & 1 & -1\\end{smallmatrix}\\right)$ (Köpfe $=1$, darüber und darunter Nullen).',
        '**Aufgabe:** Lies aus der normierten ZSF $\\left(\\begin{smallmatrix} 1 & 0 & 0 & 3\\\\ 0 & 1 & 0 & -1\\\\ 0 & 0 & 1 & 2\\end{smallmatrix}\\right)$ die Lösung ab.\n**Lösung:** Jede Zeile enthält genau eine Unbekannte: $x_1=3$, $x_2=-1$, $x_3=2$. Kein Rückwärtseinsetzen nötig — der Vorteil der reduzierten Form.\n**Ergebnis:** $L=\\{(3,\\ -1,\\ 2)^{\\top}\\}$.',
        '**Aufgabe:** Löse $2x_1+4x_2-2x_3=6$, $x_1+2x_2-x_3=3$ und deute das Ergebnis.\n**Lösung:** $\\left(\\begin{smallmatrix} 2 & 4 & -2 & 6\\\\ 1 & 2 & -1 & 3\\end{smallmatrix}\\right)$; nach $\\tfrac12$(i) sind beide Zeilen gleich, (ii)$-$(i) liefert eine Nullzeile: $\\left(\\begin{smallmatrix} 1 & 2 & -1 & 3\\\\ 0 & 0 & 0 & 0\\end{smallmatrix}\\right)$ (schon normierte ZSF). Gebunden: $x_1$; frei: $r=x_2$, $s=x_3$. Aus $x_1+2r-s=3$ folgt $x_1=3-2r+s$.\n**Ergebnis:** $L=\\{(3-2r+s,\\ r,\\ s)^{\\top}: r,s\\in\\mathbb{R}\\}$ (zwei freie Parameter).',
      ],
    },
  ],
}
