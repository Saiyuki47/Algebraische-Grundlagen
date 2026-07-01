import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'binomische-formeln',
  titel: 'Binomische Formeln',
  inhalt:
    '**Worum geht es?**\n' +
    'Die binomischen Formeln sagen dir, wie man das Quadrat einer Summe/Differenz und das Produkt aus Summe und Differenz **ohne Umweg** ausmultipliziert. Man braucht sie in beide Richtungen: **vorwärts** (Klammer auflösen, $\\to$ ausmultiplizieren) und **rückwärts** (einen Term als Klammer schreiben, $\\to$ faktorisieren). Rückwärts sind sie das wichtigste Werkzeug, um Wurzeln oder das $\\mathrm{i}$ aus einem Nenner zu bekommen und um quadratische Terme zu vereinfachen.\n' +
    '\n' +
    '**Die drei Formeln**\n' +
    '1. Binomische Formel: $(a+b)^2 = a^2 + 2ab + b^2$.\n' +
    '2. Binomische Formel: $(a-b)^2 = a^2 - 2ab + b^2$.\n' +
    '3. Binomische Formel: $(a+b)(a-b) = a^2 - b^2$ (Plus mal Minus $\\to$ Differenz der Quadrate).\n' +
    'Sie gelten für **beliebige** Zahlen oder Terme $a$ und $b$ — reelle wie komplexe. Merke: bei $(\\pm)^2$ bleibt das **mittlere** Glied $2ab$, nur sein Vorzeichen wechselt; bei der 3. Formel fällt das mittlere Glied ganz weg.\n' +
    '\n' +
    '**Woher kommt das? (kurze Herleitung)**\n' +
    'Alles folgt aus dem Distributivgesetz („jeder mit jedem"): $(a+b)^2 = (a+b)(a+b) = a\\cdot a + a\\cdot b + b\\cdot a + b\\cdot b = a^2 + 2ab + b^2$. Bei $(a+b)(a-b) = a^2 - ab + ab - b^2$ heben sich $-ab$ und $+ab$ auf, es bleibt $a^2 - b^2$.\n' +
    '\n' +
    '**Leserichtung 1 — Ausmultiplizieren (vorwärts)**\n' +
    'Passende Formel nach dem Muster der Klammer wählen und $a$, $b$ einsetzen. Wichtig: quadriert wird der **ganze** Summand samt Koeffizient und Vorzeichen, z. B. steckt in $(3x)^2$ die $9$: $(3x+2)^2 = (3x)^2 + 2\\cdot 3x\\cdot 2 + 2^2 = 9x^2 + 12x + 4$.\n' +
    '\n' +
    '**Leserichtung 2 — Faktorisieren (rückwärts)**\n' +
    'So erkennst du, dass ein Term eine binomische Formel ist:\n' +
    '1. Sind **zwei** Glieder Quadrate $a^2$ und $b^2$ (z. B. $9x^2 = (3x)^2$, $25 = 5^2$)? Dann $a$ und $b$ als Wurzeln ablesen.\n' +
    '2. Steht dazwischen $\\pm 2ab$? Dann ist es $(a\\pm b)^2$ (Vorzeichen des Mittelglieds = Vorzeichen in der Klammer).\n' +
    '3. Steht **eine Differenz zweier Quadrate** $a^2 - b^2$ ganz ohne Mittelglied? Dann ist es $(a+b)(a-b)$.\n' +
    '\n' +
    '**Überblick**\n' +
    '| Formel | ausmultipliziert | faktorisiert |\n' +
    '|---|---|---|\n' +
    '| 1. | $a^2 + 2ab + b^2$ | $(a+b)^2$ |\n' +
    '| 2. | $a^2 - 2ab + b^2$ | $(a-b)^2$ |\n' +
    '| 3. | $a^2 - b^2$ | $(a+b)(a-b)$ |\n' +
    '\n' +
    '**Anwendung bei komplexen Zahlen**\n' +
    'Mit $\\mathrm{i}^2 = -1$ liefern die Formeln zwei Standardtricks (für $z = a + b\\mathrm{i}$ mit reellen $a,b$):\n' +
    '• **Quadrieren:** $(a+b\\mathrm{i})^2 = a^2 + 2ab\\mathrm{i} + (b\\mathrm{i})^2 = a^2 - b^2 + 2ab\\,\\mathrm{i}$, denn $(b\\mathrm{i})^2 = b^2\\mathrm{i}^2 = -b^2$.\n' +
    '• **Nenner reell machen:** Mit dem konjugierten $\\overline{z} = a - b\\mathrm{i}$ und der 3. Formel gilt $(a+b\\mathrm{i})(a-b\\mathrm{i}) = a^2 - (b\\mathrm{i})^2 = a^2 + b^2$ — eine **reelle** Zahl (das Betragsquadrat $\\lvert z\\rvert^2$). Deshalb erweitert man Brüche mit komplexem Nenner mit dem konjugierten Nenner.\n' +
    'Ganz analog macht die 3. Formel einen Nenner mit **Wurzeln** rational, z. B. $(\\sqrt3+\\sqrt5)(\\sqrt3-\\sqrt5) = 3 - 5 = -2$.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• $(a+b)^2 = a^2 + b^2$ — **falsch**, das Mittelglied $2ab$ fehlt.\n' +
    '• Koeffizient nicht mitquadrieren: $(3x)^2 = 9x^2$, nicht $3x^2$.\n' +
    '• Vorzeichen: in $(a-b)^2$ ist das **letzte** Glied $+b^2$ (Minus mal Minus), nur das Mittelglied wird negativ.\n' +
    '• Bei komplexen Zahlen $\\mathrm{i}^2 = -1$ vergessen (nicht $+1$).',
  beispiele: [
    {
      szenario: 'Ausmultiplizieren (vorwärts)',
      beispiele: [
        '**Aufgabe:** Multipliziere $(x+4)^2$ aus.\n**Lösung:** 1. Formel mit $a=x$, $b=4$: $x^2 + 2\\cdot x\\cdot 4 + 4^2 = x^2 + 8x + 16$.\n**Ergebnis:** $x^2 + 8x + 16$.',
        '**Aufgabe:** Multipliziere $(3x-2)^2$ aus.\n**Lösung:** 2. Formel mit $a=3x$, $b=2$: $(3x)^2 - 2\\cdot 3x\\cdot 2 + 2^2 = 9x^2 - 12x + 4$ (die $3$ wird mitquadriert).\n**Ergebnis:** $9x^2 - 12x + 4$.',
        '**Aufgabe:** Multipliziere $(2a+5)(2a-5)$ aus.\n**Lösung:** 3. Formel (Summe mal Differenz) mit $a\\to 2a$, $b\\to 5$: $(2a)^2 - 5^2 = 4a^2 - 25$.\n**Ergebnis:** $4a^2 - 25$.',
      ],
    },
    {
      szenario: 'Faktorisieren (rückwärts)',
      beispiele: [
        '**Aufgabe:** Schreibe $x^2 + 10x + 25$ als Quadrat einer Klammer.\n**Lösung:** Quadrate: $x^2 = x^2$ und $25 = 5^2$, also $a=x$, $b=5$. Mittelglied $2ab = 2\\cdot x\\cdot 5 = 10x$ passt (Plus) $\\to$ 1. Formel.\n**Ergebnis:** $(x+5)^2$.',
        '**Aufgabe:** Faktorisiere $9y^2 - 24y + 16$.\n**Lösung:** $9y^2 = (3y)^2$, $16 = 4^2$, also $a=3y$, $b=4$. Mittelglied $2ab = 2\\cdot 3y\\cdot 4 = 24y$ mit Minus $\\to$ 2. Formel.\n**Ergebnis:** $(3y-4)^2$.',
        '**Aufgabe:** Faktorisiere $x^2 - 49$.\n**Lösung:** Differenz zweier Quadrate, kein Mittelglied: $x^2 = x^2$, $49 = 7^2$ $\\to$ 3. Formel mit $a=x$, $b=7$.\n**Ergebnis:** $(x+7)(x-7)$.',
      ],
    },
    {
      szenario: 'Nenner rational machen (Wurzeln)',
      beispiele: [
        '**Aufgabe:** Mache den Nenner von $\\dfrac{1}{\\sqrt3+\\sqrt5}$ rational.\n**Lösung:** Mit dem konjugierten Nenner $\\sqrt3-\\sqrt5$ erweitern; im Nenner wirkt die 3. Formel: $\\dfrac{1}{\\sqrt3+\\sqrt5}\\cdot\\dfrac{\\sqrt3-\\sqrt5}{\\sqrt3-\\sqrt5} = \\dfrac{\\sqrt3-\\sqrt5}{(\\sqrt3)^2-(\\sqrt5)^2} = \\dfrac{\\sqrt3-\\sqrt5}{3-5}$.\n**Ergebnis:** $\\dfrac{\\sqrt3-\\sqrt5}{-2}$.',
        '**Aufgabe:** Mache den Nenner von $\\dfrac{1}{\\sqrt3-\\sqrt5}$ rational.\n**Lösung:** Diesmal mit $\\sqrt3+\\sqrt5$ erweitern: $\\dfrac{1}{\\sqrt3-\\sqrt5}\\cdot\\dfrac{\\sqrt3+\\sqrt5}{\\sqrt3+\\sqrt5} = \\dfrac{\\sqrt3+\\sqrt5}{3-5}$.\n**Ergebnis:** $\\dfrac{\\sqrt3+\\sqrt5}{-2}$.',
        '**Aufgabe:** Mache den Nenner von $\\dfrac{2}{5-\\sqrt3}$ rational.\n**Lösung:** Mit $5+\\sqrt3$ erweitern: Nenner $= 5^2 - (\\sqrt3)^2 = 25 - 3 = 22$. Zähler $= 2(5+\\sqrt3) = 10 + 2\\sqrt3$.\n**Ergebnis:** $\\dfrac{10+2\\sqrt3}{22} = \\dfrac{5+\\sqrt3}{11}$.',
      ],
    },
    {
      szenario: 'Komplexe Zahlen',
      beispiele: [
        '**Aufgabe:** Berechne $(2+3\\mathrm{i})^2$.\n**Lösung:** 1. Formel mit $a=2$, $b=3\\mathrm{i}$: $2^2 + 2\\cdot 2\\cdot 3\\mathrm{i} + (3\\mathrm{i})^2 = 4 + 12\\mathrm{i} + 9\\mathrm{i}^2$. Wegen $\\mathrm{i}^2=-1$ ist $9\\mathrm{i}^2 = -9$, also $4 - 9 + 12\\mathrm{i}$.\n**Ergebnis:** $-5 + 12\\mathrm{i}$.',
        '**Aufgabe:** Berechne $(4+\\mathrm{i})(4-\\mathrm{i})$.\n**Lösung:** 3. Formel mit $a=4$, $b=\\mathrm{i}$: $4^2 - \\mathrm{i}^2 = 16 - (-1) = 16 + 1$. (Das ist $\\lvert 4+\\mathrm{i}\\rvert^2$ und reell.)\n**Ergebnis:** $17$.',
        '**Aufgabe:** Schreibe $\\dfrac{1}{3+2\\mathrm{i}}$ in der Form $a+b\\mathrm{i}$.\n**Lösung:** Mit dem konjugierten Nenner $3-2\\mathrm{i}$ erweitern; im Nenner die 3. Formel: $(3+2\\mathrm{i})(3-2\\mathrm{i}) = 3^2 - (2\\mathrm{i})^2 = 9 + 4 = 13$. Also $\\dfrac{1}{3+2\\mathrm{i}} = \\dfrac{3-2\\mathrm{i}}{13}$.\n**Ergebnis:** $\\dfrac{3}{13} - \\dfrac{2}{13}\\mathrm{i}$.',
      ],
    },
  ],
}
