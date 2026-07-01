import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'urbilder',
  titel: 'Bild & Urbild',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine Funktion $f\\colon D \\to Z$ schickt jedes einzelne $x$ auf einen Wert $f(x)$. Oft will man aber nicht einen einzelnen Punkt betrachten, sondern **ganze Mengen**: Wohin wird eine Menge $M$ von Ausgangswerten abgebildet (das **Bild**)? Und welche Ausgangswerte landen in einer vorgegebenen Zielmenge $N$ (das **Urbild**)? Diese beiden Begriffe brauchst du überall — beim Bestimmen von Wertebereichen, beim Lösen von Gleichungen wie $\\sin x = 1$ und als Grundlage für Relationen und Äquivalenzklassen.\n' +
    '\n' +
    '**Das Bild einer Menge**\n' +
    'Sei $f\\colon D \\to Z$ und $M \\subseteq D$. Das **Bild** von $M$ unter $f$ ist die Menge aller Funktionswerte, die aus $M$ herauskommen:\n' +
    '$f(M) = \\{\\, f(x) : x \\in M \\,\\}$.\n' +
    'Es ist also eine **Teilmenge der Zielmenge**: $f(M) \\subseteq Z$. Nimmt man die ganze Definitionsmenge, erhält man den **Wertebereich** (die Bildmenge) von $f$: $f(D) = \\{\\, f(x) : x \\in D \\,\\}$. Beispiel: für $f(x) = x^2$ auf $\\mathbb{R}$ ist $f(\\mathbb{R}) = [0, \\infty)$, denn Quadrate sind nie negativ.\n' +
    '\n' +
    '**Das Urbild einer Menge**\n' +
    'Sei $N \\subseteq Z$. Das **Urbild** (die Urbildmenge) von $N$ unter $f$ ist die Menge **aller** $x$ aus der Definitionsmenge, deren Wert in $N$ liegt:\n' +
    '$f^{-1}(N) = \\{\\, x \\in D : f(x) \\in N \\,\\}$.\n' +
    'Es ist eine **Teilmenge der Definitionsmenge**: $f^{-1}(N) \\subseteq D$. Man bekommt das Urbild, indem man die Gleichung bzw. Bedingung $f(x) \\in N$ nach $x$ auflöst und **alle** Lösungen sammelt. Ist $N = \\{b\\}$ einelementig, schreibt man kurz $f^{-1}(\\{b\\}) = \\{\\, x \\in D : f(x) = b \\,\\}$ — die Menge aller $x$ mit Funktionswert $b$.\n' +
    '\n' +
    '**Wichtig: Urbild braucht KEINE Umkehrfunktion!**\n' +
    'Das Urbild $f^{-1}(N)$ ist für **jede** Funktion definiert — auch wenn $f$ gar nicht umkehrbar ist. Das Symbol $f^{-1}$ bezeichnet hier eine **Mengenoperation**, nicht die Umkehrfunktion. Nur wenn $f$ bijektiv ist, existiert zusätzlich eine echte Umkehrfunktion, und dann stimmen die Werte überein. So ist etwa $\\sin^{-1}(\\{1\\})$ das Urbild und liefert **unendlich viele** Stellen $\\{\\, \\tfrac{\\pi}{2} + 2k\\pi : k \\in \\mathbb{Z} \\,\\}$, während die Umkehrfunktion $\\arcsin(1) = \\tfrac{\\pi}{2}$ genau **einen** Wert ergibt. Das Urbild kann also leer, endlich oder unendlich sein — je nachdem, wie viele $x$ getroffen werden.\n' +
    '\n' +
    '**Wie bestimmt man Bild und Urbild?**\n' +
    '1. **Bild** $f(M)$: Setze der Reihe nach die Elemente von $M$ ein (bei endlichem $M$) bzw. überlege, welche Werte $f(x)$ annimmt, wenn $x$ durch $M$ läuft. Sammle diese Werte zu einer Menge.\n' +
    '2. **Urbild** $f^{-1}(N)$: Löse die Bedingung $f(x) \\in N$ nach $x$ auf. Bei periodischen Funktionen ($\\sin,\\cos,\\tan$) **alle** Lösungen mit dem Zusatz $+\\,k\\pi$ bzw. $+\\,2k\\pi$, $k \\in \\mathbb{Z}$, angeben.\n' +
    '3. Prüfe zum Schluss die richtige „Seite": $f(M)$ liegt in der **Zielmenge**, $f^{-1}(N)$ in der **Definitionsmenge**.\n' +
    '\n' +
    '**Rechenregeln (mit $\\cup$ und $\\cap$)**\n' +
    'Das Urbild verträgt sich mit **allen** Mengenoperationen, das Bild nur teilweise:\n' +
    '| Regel | Bild $f(\\cdot)$ | Urbild $f^{-1}(\\cdot)$ |\n' +
    '|---|---|---|\n' +
    '| Vereinigung | $f(A \\cup B) = f(A) \\cup f(B)$ | $f^{-1}(A \\cup B) = f^{-1}(A) \\cup f^{-1}(B)$ |\n' +
    '| Durchschnitt | $f(A \\cap B) \\subseteq f(A) \\cap f(B)$ | $f^{-1}(A \\cap B) = f^{-1}(A) \\cap f^{-1}(B)$ |\n' +
    '| Komplement | keine einfache Regel | $f^{-1}(Z \\setminus A) = D \\setminus f^{-1}(A)$ |\n' +
    'Merke: beim **Urbild** darf man Vereinigung, Durchschnitt und Komplement einfach „hineinziehen" (Gleichheit). Beim **Bild** gilt für den Durchschnitt nur $\\subseteq$ — Gleichheit erst, wenn $f$ injektiv ist.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• $f^{-1}$ mit der Umkehrfunktion verwechseln und nur **einen** Wert angeben — das Urbild sammelt **alle** Lösungen.\n' +
    '• Bei $\\sin,\\cos,\\tan$ den Zusatz $+\\,k\\pi$ bzw. $+\\,2k\\pi$ vergessen (nur eine Periode angeben).\n' +
    '• Bild und Urbild vertauschen: $f(M)$ liegt in der Zielmenge, $f^{-1}(N)$ in der Definitionsmenge.\n' +
    '• Beim Bild fälschlich $f(A \\cap B) = f(A) \\cap f(B)$ setzen — hier gilt im Allgemeinen nur $\\subseteq$.',
  beispiele: [
    {
      szenario: 'Bild einer Menge bestimmen',
      beispiele: [
        '**Aufgabe:** Sei $f\\colon \\mathbb{R} \\to \\mathbb{R}$, $f(x) = x^2$, und $M = \\{-2, -1, 0, 1, 3\\}$. Bestimme das Bild $f(M)$.\n**Lösung:** Jedes Element einsetzen: $f(-2)=4$, $f(-1)=1$, $f(0)=0$, $f(1)=1$, $f(3)=9$. Doppelte Werte ($1$ tritt zweimal auf) nur einmal aufführen.\n**Ergebnis:** $f(M) = \\{0, 1, 4, 9\\}$.',
        '**Aufgabe:** Bestimme den Wertebereich $f(\\mathbb{R})$ von $f(x) = x^2$ und von $g(x) = \\sin x$.\n**Lösung:** Für $f$ läuft $x$ durch ganz $\\mathbb{R}$; Quadrate sind $\\ge 0$ und jeder Wert $\\ge 0$ wird erreicht. Für $g$ pendelt $\\sin x$ zwischen $-1$ und $1$ und nimmt jeden Zwischenwert an.\n**Ergebnis:** $f(\\mathbb{R}) = [0, \\infty)$ und $g(\\mathbb{R}) = [-1, 1]$.',
        '**Aufgabe:** Sei $f\\colon \\mathbb{R} \\to \\mathbb{R}$, $f(x) = 2x + 1$, und $M = [0, 3]$. Bestimme $f(M)$.\n**Lösung:** $f$ ist streng steigend, also wird das Intervall auf ein Intervall abgebildet. Ränder einsetzen: $f(0) = 1$, $f(3) = 7$.\n**Ergebnis:** $f(M) = [1, 7]$.',
      ],
    },
    {
      szenario: 'Urbild bei sin, cos, tan (Übungsblatt 0)',
      beispiele: [
        '**Aufgabe:** Bestimme das Urbild $\\sin^{-1}(\\{1\\})$, also alle $x \\in \\mathbb{R}$ mit $\\sin x = 1$.\n**Lösung:** $\\sin x = 1$ gilt am „höchsten Punkt" des Einheitskreises, erstmals bei $x = \\tfrac{\\pi}{2}$. Wegen der Periode $2\\pi$ wiederholt sich das: $x = \\tfrac{\\pi}{2} + 2k\\pi$. Nicht nur $\\arcsin(1) = \\tfrac{\\pi}{2}$, sondern **alle** diese Stellen gehören dazu.\n**Ergebnis:** $\\sin^{-1}(\\{1\\}) = \\{\\, \\tfrac{\\pi}{2} + 2k\\pi : k \\in \\mathbb{Z} \\,\\}$.',
        '**Aufgabe:** Bestimme $\\sin^{-1}(\\{0\\})$ und $\\cos^{-1}(\\{0\\})$.\n**Lösung:** $\\sin x = 0$ an den Nullstellen des Sinus: bei $0, \\pi, 2\\pi, \\dots$, also allen ganzzahligen Vielfachen von $\\pi$. $\\cos x = 0$ dagegen bei $\\tfrac{\\pi}{2}, \\tfrac{3\\pi}{2}, \\dots$, also bei $\\tfrac{\\pi}{2}$ plus jedem Vielfachen von $\\pi$.\n**Ergebnis:** $\\sin^{-1}(\\{0\\}) = \\{\\, k\\pi : k \\in \\mathbb{Z} \\,\\}$ und $\\cos^{-1}(\\{0\\}) = \\{\\, \\tfrac{\\pi}{2} + k\\pi : k \\in \\mathbb{Z} \\,\\}$.',
        '**Aufgabe:** Bestimme $\\tan^{-1}(\\{1\\})$ und $\\tan^{-1}(\\{-1\\})$.\n**Lösung:** $\\tan x = 1$ zuerst bei $x = \\tfrac{\\pi}{4}$; der Tangens hat Periode $\\pi$, also alle $\\tfrac{\\pi}{4} + k\\pi$. Ebenso $\\tan x = -1$ zuerst bei $x = -\\tfrac{\\pi}{4}$, dann $+\\,k\\pi$.\n**Ergebnis:** $\\tan^{-1}(\\{1\\}) = \\{\\, \\tfrac{\\pi}{4} + k\\pi : k \\in \\mathbb{Z} \\,\\}$ und $\\tan^{-1}(\\{-1\\}) = \\{\\, -\\tfrac{\\pi}{4} + k\\pi : k \\in \\mathbb{Z} \\,\\}$.',
      ],
    },
    {
      szenario: 'Urbild als Mengenoperation & Rechenregeln',
      beispiele: [
        '**Aufgabe:** Sei $f\\colon \\mathbb{R} \\to \\mathbb{R}$, $f(x) = x^2$. Bestimme das Urbild $f^{-1}([1, 4])$.\n**Lösung:** Gesucht sind alle $x$ mit $1 \\le x^2 \\le 4$. Das bedeutet $1 \\le \\lvert x\\rvert \\le 2$, also $x$ zwischen $1$ und $2$ oder zwischen $-2$ und $-1$. Obwohl $f$ nicht umkehrbar ist, ist das Urbild wohldefiniert.\n**Ergebnis:** $f^{-1}([1, 4]) = [-2, -1] \\cup [1, 2]$.',
        '**Aufgabe:** Sei $f\\colon \\mathbb{R} \\to \\mathbb{R}$, $f(x) = x^2$. Zeige an $A = \\{1\\}$, $B = \\{4\\}$, dass beim Bild der Durchschnitt nicht erhalten bleiben muss.\n**Lösung:** Betrachte statt Bilder die Urbilder als Mengen: $f^{-1}(A) = \\{-1, 1\\}$, $f^{-1}(B) = \\{-2, 2\\}$. Für das Urbild gilt sauber $f^{-1}(A \\cup B) = \\{-2, -1, 1, 2\\} = f^{-1}(A) \\cup f^{-1}(B)$.\n**Ergebnis:** Das Urbild zieht $\\cup$ als Gleichheit hindurch: $f^{-1}(A \\cup B) = f^{-1}(A) \\cup f^{-1}(B)$.',
        '**Aufgabe:** Sei $f\\colon \\mathbb{R} \\to \\mathbb{R}$, $f(x) = x^2$. Bestimme $f^{-1}(\\{-1\\})$ und $f^{-1}((-\\infty, 0))$.\n**Lösung:** Gesucht sind $x$ mit $x^2 = -1$ bzw. $x^2 < 0$. Ein Quadrat ist nie negativ, also gibt es keine Lösung.\n**Ergebnis:** Beide Urbilder sind leer: $f^{-1}(\\{-1\\}) = \\emptyset$ und $f^{-1}((-\\infty, 0)) = \\emptyset$.',
      ],
    },
  ],
}
