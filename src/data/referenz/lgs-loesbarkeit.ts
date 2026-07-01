import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'lgs-loesbarkeit',
  titel: 'Lösbarkeit & Lösungsmenge von LGS',
  inhalt:
    '**Worum geht es?**\n' +
    'Hat man ein lineares Gleichungssystem $A\\vec x=\\vec b$ mit dem Gauß-Verfahren auf **Zeilenstufenform (ZSF)** gebracht, stellen sich drei Fragen: Gibt es überhaupt eine Lösung? Wenn ja, wie viele — genau eine oder unendlich viele? Und wie sieht die ganze **Lösungsmenge** $L(A\\mid\\vec b)$ aus? Diese Karte beantwortet das mit einem einzigen Werkzeug: dem **Rang** der Matrix. So kann man die Anzahl der Lösungen ablesen, ohne jede Lösung einzeln auszurechnen.\n' +
    '\n' +
    '**Rang einer Matrix**\n' +
    'Bringt man $A$ bzw. die erweiterte Koeffizientenmatrix $(A\\mid\\vec b)$ durch elementare Zeilenumformungen auf ZSF, so ist der **Rang** die Anzahl der Nicht-Nullzeilen (also die Anzahl der Stufen bzw. Zeilenköpfe):\n' +
    '$\\operatorname{rg}(A)=\\#\\text{Nicht-Nullzeilen in der ZSF von }A$.\n' +
    'Der Rang ändert sich unter Zeilenumformungen nicht; er ist also eine feste Kennzahl des Systems. Wichtig: $\\operatorname{rg}(A)\\le\\operatorname{rg}(A\\mid\\vec b)$ immer, denn $(A\\mid\\vec b)$ hat eine Spalte mehr.\n' +
    '\n' +
    '**Gebundene und freie Variablen**\n' +
    'Jeder Zeilenkopf der ZSF gehört zu einer Spalte $x_i$ — das ist eine **gebundene Variable**. Die übrigen Unbekannten sind **freie Variablen** (Parameter, meist $r,s,\\dots$). Bei $n$ Unbekannten gilt:\n' +
    '$\\#\\text{gebundene Variablen}=\\operatorname{rg}(A)$ und $\\#\\text{freie Variablen}=n-\\operatorname{rg}(A)$.\n' +
    'Die freien Variablen sind die „Freiheitsgrade" der Lösungsmenge.\n' +
    '\n' +
    '**Lösbarkeitskriterium (Rangkriterium)**\n' +
    'Ein LGS ist **genau dann lösbar**, wenn Koeffizientenmatrix und erweiterte Matrix denselben Rang haben:\n' +
    '$A\\vec x=\\vec b \\text{ lösbar} \\iff \\operatorname{rg}(A)=\\operatorname{rg}(A\\mid\\vec b)$.\n' +
    'Ist $\\operatorname{rg}(A)<\\operatorname{rg}(A\\mid\\vec b)$, so enthält die ZSF eine **Widerspruchszeile** der Form $0=c$ mit $c\\neq0$ (links nur Nullen, rechts ein Wert $\\neq0$). Diese Gleichung ist von keinem $\\vec x$ erfüllbar, also ist $L(A\\mid\\vec b)=\\varnothing$.\n' +
    '\n' +
    '**Anzahl der Lösungen (falls lösbar)**\n' +
    'Ist das System lösbar ($\\operatorname{rg}(A)=\\operatorname{rg}(A\\mid\\vec b)=:r$), entscheidet der Vergleich mit der Zahl $n$ der Unbekannten über die Anzahl:\n' +
    '$\\operatorname{rg}(A)=n \\Rightarrow$ **genau eine** Lösung (keine freien Variablen);\n' +
    '$\\operatorname{rg}(A)<n \\Rightarrow$ **unendlich viele** Lösungen (es gibt $n-r$ freie Variablen).\n' +
    '\n' +
    '**Entscheidungs-Schema**\n' +
    'Aus der ZSF von $(A\\mid\\vec b)$ liest man mit $r=\\operatorname{rg}(A)$ und $n$ Unbekannten direkt ab:\n' +
    '| Situation in der ZSF | Ränge | Lösungsmenge |\n' +
    '|---|---|---|\n' +
    '| Widerspruchszeile $0=c,\\ c\\neq0$ | $\\operatorname{rg}(A)<\\operatorname{rg}(A\\mid\\vec b)$ | keine ($\\varnothing$) |\n' +
    '| lösbar, keine freie Variable | $\\operatorname{rg}(A)=\\operatorname{rg}(A\\mid\\vec b)=n$ | genau eine |\n' +
    '| lösbar, $\\ge 1$ freie Variable | $\\operatorname{rg}(A)=\\operatorname{rg}(A\\mid\\vec b)<n$ | unendlich viele |\n' +
    '\n' +
    '**Homogenes LGS**\n' +
    'Ist $\\vec b=\\vec 0$, heißt das LGS **homogen**. Es ist **immer lösbar**, denn $\\vec x=\\vec 0$ (die **triviale Lösung**) erfüllt jede Gleichung — der Fall „keine Lösung" kann nicht eintreten. Die rechte Seite bleibt unter dem Gauß-Verfahren $\\vec 0$ und wird oft gar nicht mitgeführt. Die Lösungsmenge $L(A\\mid\\vec 0)$ ist ein **Untervektorraum** des $\\mathbb{R}^n$ (der **Lösungsraum** bzw. Kern von $A$): mit $\\vec x,\\vec y$ sind auch $\\vec x+\\vec y$ und $\\mu\\vec x$ Lösungen. Genau dann gibt es außer $\\vec 0$ weitere Lösungen, wenn $\\operatorname{rg}(A)<n$.\n' +
    '\n' +
    '**Struktur der Lösungsmenge (affiner Raum)**\n' +
    'Ist ein inhomogenes System lösbar, so hat die Lösungsmenge die Bauform\n' +
    '$L(A\\mid\\vec b)=\\vec x_0+L(A\\mid\\vec 0)$,\n' +
    'also **eine spezielle (partikuläre) Lösung** $\\vec x_0$ **plus** der komplette Lösungsraum des zugehörigen homogenen Systems. Man erhält $L$, indem man die freien Variablen $r,s,\\dots$ als Parameter setzt und in **Parameterdarstellung** schreibt: ein konstanter Stützvektor $\\vec x_0$ plus je ein Richtungsvektor pro freier Variable. Geometrisch ist das ein **affiner Raum** (Punkt, Gerade, Ebene, …) — verschoben um $\\vec x_0$ aus dem Ursprung. Bei genau einer Lösung fehlen die Richtungsvektoren, $L=\\{\\vec x_0\\}$.\n' +
    '\n' +
    '**Sonderfall: quadratisches LGS ($n$ Gl., $n$ Unb.)**\n' +
    'Bei gleich vielen Gleichungen wie Unbekannten liefert die **Determinante** ein bequemes Kriterium: $A\\vec x=\\vec b$ ist **genau dann eindeutig lösbar** ($\\lvert L\\rvert=1$), wenn $\\det A\\neq0$. Ist $\\det A=0$, gibt es keine eindeutige Lösung — dann **keine oder unendlich viele**, je nach rechter Seite $\\vec b$ (mehr dazu in der Karte „Determinanten").\n' +
    '\n' +
    '**So bestimmt man die Lösungsmenge (Schritt für Schritt)**\n' +
    '1. $(A\\mid\\vec b)$ mit dem Gauß-Verfahren auf Zeilenstufenform bringen.\n' +
    '2. Prüfen auf Widerspruchszeile $0=c$ ($c\\neq0$): falls vorhanden $\\to L=\\varnothing$, fertig.\n' +
    '3. Ränge ablesen: gebundene Variablen = Zeilenköpfe, freie Variablen = Rest; freie Variablen umbenennen ($r,s,\\dots$).\n' +
    '4. Gleichungen von **unten nach oben** nach den gebundenen Variablen auflösen und einsetzen.\n' +
    '5. Lösungsmenge als Parameterdarstellung (Stützvektor + Richtungsvektoren) angeben.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Ränge von $A$ und $(A\\mid\\vec b)$ verwechseln — lösbar heißt **gleiche** Ränge, nicht „$A$ hat vollen Rang".\n' +
    '• Die Anzahl $n$ der Unbekannten mit der Anzahl $m$ der Gleichungen verwechseln; für „genau eine vs. unendlich" zählt $n$ (Spalten), nicht $m$.\n' +
    '• Eine Nullzeile $0=0$ für einen Widerspruch halten — sie ist harmlos und liefert nur eine freie Variable. Nur $0=c$ mit $c\\neq0$ ist ein Widerspruch.\n' +
    '• Bei „unendlich viele" den homogenen Anteil (die Richtungsvektoren) vergessen und nur $\\vec x_0$ hinschreiben.\n' +
    '• Behaupten, ein homogenes System könne unlösbar sein — es ist stets lösbar ($\\vec 0$).',
  beispiele: [
    {
      szenario: 'Anzahl der Lösungen aus der ZSF ablesen',
      beispiele: [
        '**Aufgabe:** Wie viele Lösungen hat das LGS mit ZSF $\\left(\\begin{smallmatrix}1&1&2&\\mid&1\\\\0&1&1&\\mid&1\\\\0&0&-4&\\mid&0\\end{smallmatrix}\\right)$? (3 Unbekannte)\n**Lösung:** Drei Nicht-Nullzeilen, keine Widerspruchszeile, also $\\operatorname{rg}(A)=\\operatorname{rg}(A\\mid\\vec b)=3$. Das System ist lösbar, und $\\operatorname{rg}(A)=3=n$ (keine freie Variable).\n**Ergebnis:** Genau eine Lösung. (Rückwärts: $x_3=0,\\ x_2=1,\\ x_1=0$, also $\\vec x=(0,1,0)$.)',
        '**Aufgabe:** Wie viele Lösungen hat das LGS mit ZSF $\\left(\\begin{smallmatrix}1&1&2&\\mid&1\\\\0&1&1&\\mid&1\\\\0&0&0&\\mid&-4\\end{smallmatrix}\\right)$?\n**Lösung:** Die letzte Zeile bedeutet $0x_1+0x_2+0x_3=-4$, eine Widerspruchszeile ($c=-4\\neq0$). Also $\\operatorname{rg}(A)=2<3=\\operatorname{rg}(A\\mid\\vec b)$.\n**Ergebnis:** Keine Lösung, $L=\\varnothing$.',
        '**Aufgabe:** Wie viele Lösungen hat das LGS mit ZSF $\\left(\\begin{smallmatrix}1&1&2&4&\\mid&1\\\\0&1&1&-2&\\mid&-1\\\\0&0&0&3&\\mid&3\\end{smallmatrix}\\right)$? (4 Unbekannte)\n**Lösung:** Keine Widerspruchszeile, drei Zeilenköpfe (Spalten $x_1,x_2,x_4$): $\\operatorname{rg}(A)=\\operatorname{rg}(A\\mid\\vec b)=3$, aber $n=4$, also $\\operatorname{rg}(A)=3<4$. Es gibt $4-3=1$ freie Variable ($x_3$).\n**Ergebnis:** Unendlich viele Lösungen.',
      ],
    },
    {
      szenario: 'Lösungsmenge in Parameterform (unendlich viele)',
      beispiele: [
        '**Aufgabe:** Bestimme $L$ zu $2x_1+4x_2-2x_3=6,\\ x_1+2x_2-x_3=3$.\n**Lösung:** ZSF: $\\frac12(\\text{i})$ liefert $x_1+2x_2-x_3=3$, danach $(\\text{ii})-(\\text{i})$ eine Nullzeile. Also $\\operatorname{rg}(A)=\\operatorname{rg}(A\\mid\\vec b)=1<3=n$: eine gebundene Variable $x_1$, zwei freie $x_2=r,\\ x_3=s$. Aus $x_1+2r-s=3$ folgt $x_1=3-2r+s$.\n**Ergebnis:** $L=\\left\\{\\left(\\begin{smallmatrix}3-2r+s\\\\r\\\\s\\end{smallmatrix}\\right):r,s\\in\\mathbb{R}\\right\\}$ (spezielle Lösung $(3,0,0)$ plus 2-parametriger homogener Anteil, eine Ebene).',
        '**Aufgabe:** Bestimme $L$ aus der ZSF $x_1+2x_2=6,\\ -2x_2+x_3=-2$ (3 Unbekannte).\n**Lösung:** $\\operatorname{rg}(A)=\\operatorname{rg}(A\\mid\\vec b)=2<3$: gebunden $x_1,x_2$, frei $x_3=r$. Aus Zeile 2: $x_2=1+\\tfrac12 r$; einsetzen in Zeile 1: $x_1=6-2x_2=4-r$.\n**Ergebnis:** $L=\\left\\{\\left(\\begin{smallmatrix}4-r\\\\1+\\frac12 r\\\\r\\end{smallmatrix}\\right):r\\in\\mathbb{R}\\right\\}$ (eine Gerade: Stützvektor $(4,1,0)$, Richtung $(-1,\\tfrac12,1)$).',
        '**Aufgabe:** Bestimme $L$ aus der ZSF $x_1+x_2+2x_3+4x_4=1,\\ x_2+x_3-2x_4=-1,\\ 3x_4=3$ (4 Unbekannte).\n**Lösung:** Gebunden $x_1,x_2,x_4$, frei $x_3=r$. Aus Zeile 3: $x_4=1$; Zeile 2: $x_2=-1-r+2\\cdot1=1-r$; Zeile 1: $x_1=1-x_2-2r-4\\cdot1=1-(1-r)-2r-4=-4-r$.\n**Ergebnis:** $L=\\left\\{\\left(\\begin{smallmatrix}-4-r\\\\1-r\\\\r\\\\1\\end{smallmatrix}\\right):r\\in\\mathbb{R}\\right\\}$.',
      ],
    },
    {
      szenario: 'Homogenes LGS & Parameterabhängigkeit',
      beispiele: [
        '**Aufgabe:** Zeige, dass das homogene LGS $x_1+2x_2-x_3=0,\\ 2x_1+4x_2-2x_3=0$ unendlich viele Lösungen hat, und gib den Lösungsraum an.\n**Lösung:** $\\vec b=\\vec 0$, also lösbar ($\\vec 0$ ist Lösung). Zeile 2 ist das Doppelte von Zeile 1, ZSF hat eine Nicht-Nullzeile: $\\operatorname{rg}(A)=1<3=n$. Frei: $x_2=r,\\ x_3=s$; aus $x_1=-2r+s$.\n**Ergebnis:** $L=\\left\\{\\left(\\begin{smallmatrix}-2r+s\\\\r\\\\s\\end{smallmatrix}\\right):r,s\\in\\mathbb{R}\\right\\}$ — ein 2-dimensionaler Untervektorraum (enthält $\\vec 0$).',
        '**Aufgabe:** Für welche $\\alpha\\in\\mathbb{R}$ hat das homogene System $\\alpha x_1+\\alpha x_2=0,\\ \\alpha x_1+(\\alpha-1)x_2=0$ keine, genau eine bzw. unendlich viele Lösungen?\n**Lösung:** Homogen $\\Rightarrow$ nie „keine". Für $\\alpha\\neq0$: $(\\text{ii})-(\\text{i})$ gibt $\\left(\\begin{smallmatrix}\\alpha&\\alpha\\\\0&-1\\end{smallmatrix}\\right)$, $\\operatorname{rg}(A)=2=n$ $\\Rightarrow$ genau eine (nur $\\vec 0$). Für $\\alpha=0$: $A_0=\\left(\\begin{smallmatrix}0&0\\\\0&-1\\end{smallmatrix}\\right)$, $\\operatorname{rg}(A_0)=1<2$ $\\Rightarrow$ unendlich viele.\n**Ergebnis:** (i) tritt nie ein; (ii) $\\alpha\\neq0$: genau eine ($\\vec 0$); (iii) $\\alpha=0$: unendlich viele.',
        '**Aufgabe:** Das quadratische System zu $A=\\left(\\begin{smallmatrix}2&-1\\\\-1&-1\\end{smallmatrix}\\right)$ hat wie viele Lösungen (für beliebiges $\\vec b$)?\n**Lösung:** $\\det A=2\\cdot(-1)-(-1)\\cdot(-1)=-2-1=-3\\neq0$. Bei quadratischem $A$ mit $\\det A\\neq0$ ist das System für jede rechte Seite eindeutig lösbar ($\\operatorname{rg}(A)=2=n$).\n**Ergebnis:** Genau eine Lösung, unabhängig von $\\vec b$.',
      ],
    },
  ],
}
