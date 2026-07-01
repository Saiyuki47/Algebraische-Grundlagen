import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'komplexe-grundoperationen',
  titel: 'Komplexe Zahlen – Grundoperationen',
  inhalt:
    '**Worum geht es?**\n' +
    'Die Gleichung $x^2 = -1$ hat in $\\mathbb{R}$ keine Lösung – keine reelle Zahl quadriert zu etwas Negativem. Man erweitert $\\mathbb{R}$ deshalb zur Menge der **komplexen Zahlen** $\\mathbb{C}$, in der es eine Zahl $\\mathrm{i}$ mit $\\mathrm{i}^2 = -1$ gibt. Damit lässt sich jedes Polynom lösen, und man rechnet mit $+$, $-$, $\\cdot$ und $:$ fast genauso wie mit reellen Zahlen – man muss nur überall $\\mathrm{i}^2$ durch $-1$ ersetzen.\n' +
    '\n' +
    '**Imaginäre Einheit und kartesische Darstellung**\n' +
    'Die **imaginäre Einheit** ist die Zahl $\\mathrm{i}$ mit der Grundeigenschaft $\\mathrm{i}^2 = -1$. Jede komplexe Zahl schreibt man in **kartesischer Darstellung** als $z = a + b\\,\\mathrm{i}$ mit $a, b \\in \\mathbb{R}$. Dabei heißt $a$ **Realteil** und $b$ **Imaginärteil**:\n' +
    '$\\operatorname{Re} z = a$ und $\\operatorname{Im} z = b$.\n' +
    'Achtung: der Imaginärteil ist die **reelle** Zahl $b$ (ohne $\\mathrm{i}$). Für $b = 0$ ist $z = a$ reell; für $a = 0$ heißt $z = b\\,\\mathrm{i}$ **rein imaginär**. Zwei komplexe Zahlen sind gleich, wenn Real- **und** Imaginärteil übereinstimmen.\n' +
    '\n' +
    '**Addition und Subtraktion (komponentenweise)**\n' +
    'Real- und Imaginärteile werden getrennt addiert bzw. subtrahiert. Für $z = a + b\\,\\mathrm{i}$ und $w = c + d\\,\\mathrm{i}$:\n' +
    '$z + w = (a+c) + (b+d)\\,\\mathrm{i}$\n' +
    '$z - w = (a-c) + (b-d)\\,\\mathrm{i}$\n' +
    '\n' +
    '**Multiplikation (ausmultiplizieren, $\\mathrm{i}^2=-1$)**\n' +
    'Man multipliziert wie zwei Klammern (Distributivgesetz) aus und ersetzt am Ende $\\mathrm{i}^2 = -1$:\n' +
    '$z \\cdot w = (a + b\\,\\mathrm{i})(c + d\\,\\mathrm{i}) = ac + ad\\,\\mathrm{i} + bc\\,\\mathrm{i} + bd\\,\\mathrm{i}^2 = (ac - bd) + (ad + bc)\\,\\mathrm{i}$.\n' +
    'Man muss sich diese Formel nicht merken – Ausmultiplizieren und $\\mathrm{i}^2 = -1$ einsetzen genügt.\n' +
    '\n' +
    '**Konjugierte und Betrag**\n' +
    'Die **komplex Konjugierte** von $z = a + b\\,\\mathrm{i}$ entsteht durch Vorzeichenwechsel im Imaginärteil:\n' +
    '$\\overline{z} = a - b\\,\\mathrm{i}$.\n' +
    'Der **Betrag** (Abstand vom Ursprung in der Gaußschen Ebene) ist\n' +
    '$\\lvert z\\rvert = \\sqrt{a^2 + b^2} \\ge 0$.\n' +
    'Zentraler Zusammenhang – die Konjugierte macht das Produkt **reell**:\n' +
    '$z\\,\\overline{z} = (a+b\\,\\mathrm{i})(a-b\\,\\mathrm{i}) = a^2 + b^2 = \\lvert z\\rvert^2$.\n' +
    '\n' +
    '**Division – Erweitern mit der Konjugierten**\n' +
    'Ein Bruch $\\frac{z}{w}$ (mit $w \\neq 0$) wird reell im Nenner gemacht, indem man mit $\\overline{w}$ erweitert. Wegen $w\\,\\overline{w} = \\lvert w\\rvert^2$ steht dann unten eine reelle Zahl:\n' +
    '$\\frac{z}{w} = \\frac{z\\,\\overline{w}}{w\\,\\overline{w}} = \\frac{z\\,\\overline{w}}{\\lvert w\\rvert^2}$.\n' +
    'Vorgehen: (1) Zähler und Nenner mit $\\overline{w}$ multiplizieren; (2) Zähler ausmultiplizieren ($\\mathrm{i}^2=-1$); (3) durch die reelle Zahl $\\lvert w\\rvert^2 = c^2 + d^2$ teilen und in $x + y\\,\\mathrm{i}$ sortieren. Speziell $\\frac{1}{z} = \\frac{\\overline{z}}{\\lvert z\\rvert^2}$ für $z \\neq 0$.\n' +
    '\n' +
    '**Überblick (alle vier Grundrechenarten)**\n' +
    '| Rechenart | Regel |\n' +
    '|---|---|\n' +
    '| Addition | $(a+b\\,\\mathrm{i}) + (c+d\\,\\mathrm{i}) = (a+c)+(b+d)\\,\\mathrm{i}$ |\n' +
    '| Subtraktion | $(a+b\\,\\mathrm{i}) - (c+d\\,\\mathrm{i}) = (a-c)+(b-d)\\,\\mathrm{i}$ |\n' +
    '| Multiplikation | $(a+b\\,\\mathrm{i})(c+d\\,\\mathrm{i}) = (ac-bd)+(ad+bc)\\,\\mathrm{i}$ |\n' +
    '| Division | $\\frac{z}{w} = \\frac{z\\,\\overline{w}}{\\lvert w\\rvert^2}$ (mit $\\overline{w}$ erweitern) |\n' +
    '\n' +
    '**Nützliche Rechenregeln**\n' +
    'Für $z, w \\in \\mathbb{C}$ gilt: $\\overline{\\overline{z}} = z$; $\\overline{z+w} = \\overline{z} + \\overline{w}$; $\\overline{z\\cdot w} = \\overline{z}\\cdot\\overline{w}$; $\\lvert z\\cdot w\\rvert = \\lvert z\\rvert\\cdot\\lvert w\\rvert$; $\\lvert\\overline{z}\\rvert = \\lvert z\\rvert$. Real- und Imaginärteil kann man auch so gewinnen: $\\operatorname{Re} z = \\tfrac{1}{2}(z + \\overline{z})$ und $\\operatorname{Im} z = \\tfrac{1}{2\\mathrm{i}}(z - \\overline{z})$.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• $\\mathrm{i}^2$ nicht durch $-1$ ersetzen (dann bleibt die Multiplikation unfertig).\n' +
    '• Den Imaginärteil mit $\\mathrm{i}$ angeben: $\\operatorname{Im}(3+4\\,\\mathrm{i}) = 4$, nicht $4\\,\\mathrm{i}$.\n' +
    '• Bei der Division mit dem falschen Faktor erweitern – erweitert wird immer mit der Konjugierten des **Nenners** $\\overline{w}$.\n' +
    '• Beim Konjugieren nur das Vorzeichen des Imaginärteils drehen, den Realteil unverändert lassen.\n' +
    '• $\\lvert z\\rvert^2$ und $z^2$ verwechseln: $\\lvert z\\rvert^2 = z\\,\\overline{z}$ ist reell, $z^2 = z\\cdot z$ im Allgemeinen nicht.',
  beispiele: [
    {
      szenario: 'Realteil, Imaginärteil, Konjugierte, Betrag',
      beispiele: [
        '**Aufgabe:** Bestimme $\\operatorname{Re}$ und $\\operatorname{Im}$ von $-6 + 4\\,\\mathrm{i}$, von $\\mathrm{i}$ und von $-1$.\n**Lösung:** $\\operatorname{Re}$ ist die Zahl ohne $\\mathrm{i}$, $\\operatorname{Im}$ der Vorfaktor von $\\mathrm{i}$. Bei $\\mathrm{i} = 0 + 1\\,\\mathrm{i}$ ist der Realteil $0$; bei $-1 = -1 + 0\\,\\mathrm{i}$ ist der Imaginärteil $0$.\n**Ergebnis:** $\\operatorname{Re}(-6+4\\,\\mathrm{i}) = -6$, $\\operatorname{Im}(-6+4\\,\\mathrm{i}) = 4$; $\\operatorname{Re}(\\mathrm{i}) = 0$, $\\operatorname{Im}(\\mathrm{i}) = 1$; $\\operatorname{Re}(-1) = -1$, $\\operatorname{Im}(-1) = 0$.',
        '**Aufgabe:** Bestimme $\\overline{z_1}$ und $\\overline{z_2}$ für $z_1 = \\sqrt{3} - \\mathrm{i}$ und $z_2 = -2\\sqrt{3} + 2\\,\\mathrm{i}$.\n**Lösung:** Beim Konjugieren nur das Vorzeichen des Imaginärteils umkehren, Realteil bleibt.\n**Ergebnis:** $\\overline{z_1} = \\sqrt{3} + \\mathrm{i}$ und $\\overline{z_2} = -2\\sqrt{3} - 2\\,\\mathrm{i}$.',
        '**Aufgabe:** Berechne $\\lvert z_1\\rvert$ und $\\lvert z_2\\rvert$ für $z_1 = \\sqrt{3} - \\mathrm{i}$ und $z_2 = -2\\sqrt{3} + 2\\,\\mathrm{i}$.\n**Lösung:** $\\lvert z\\rvert = \\sqrt{a^2+b^2}$. Für $z_1$: $\\sqrt{(\\sqrt{3})^2 + (-1)^2} = \\sqrt{3+1} = \\sqrt{4}$. Für $z_2$: $\\sqrt{(-2\\sqrt{3})^2 + 2^2} = \\sqrt{12 + 4} = \\sqrt{16}$.\n**Ergebnis:** $\\lvert z_1\\rvert = 2$ und $\\lvert z_2\\rvert = 4$.',
      ],
    },
    {
      szenario: 'Addition, Subtraktion, Multiplikation',
      beispiele: [
        '**Aufgabe:** Berechne $z_1 + z_2$ und $z_1 - z_2$ für $z_1 = \\sqrt{3} - \\mathrm{i}$ und $z_2 = -2\\sqrt{3} + 2\\,\\mathrm{i}$.\n**Lösung:** Komponentenweise. Summe: Realteile $\\sqrt{3} + (-2\\sqrt{3}) = -\\sqrt{3}$, Imaginärteile $-1 + 2 = 1$. Differenz: $\\sqrt{3} - (-2\\sqrt{3}) = 3\\sqrt{3}$, $-1 - 2 = -3$.\n**Ergebnis:** $z_1 + z_2 = -\\sqrt{3} + \\mathrm{i}$ und $z_1 - z_2 = 3\\sqrt{3} - 3\\,\\mathrm{i}$.',
        '**Aufgabe:** Berechne $(1 + 2\\,\\mathrm{i})(2 + 3\\,\\mathrm{i})$.\n**Lösung:** Ausmultiplizieren: $1\\cdot 2 + 1\\cdot 3\\,\\mathrm{i} + 2\\,\\mathrm{i}\\cdot 2 + 2\\,\\mathrm{i}\\cdot 3\\,\\mathrm{i} = 2 + 3\\,\\mathrm{i} + 4\\,\\mathrm{i} + 6\\,\\mathrm{i}^2$. Mit $\\mathrm{i}^2 = -1$: $2 - 6 + 7\\,\\mathrm{i}$.\n**Ergebnis:** $-4 + 7\\,\\mathrm{i}$.',
        '**Aufgabe:** Berechne $(3 - 2\\,\\mathrm{i})\\cdot(2 + 4\\,\\mathrm{i})$.\n**Lösung:** Ausmultiplizieren: $6 + 12\\,\\mathrm{i} - 4\\,\\mathrm{i} - 8\\,\\mathrm{i}^2 = 6 + 8\\,\\mathrm{i} - 8\\cdot(-1) = 6 + 8 + 8\\,\\mathrm{i}$.\n**Ergebnis:** $14 + 8\\,\\mathrm{i}$.',
      ],
    },
    {
      szenario: 'Division (Erweitern mit der Konjugierten)',
      beispiele: [
        '**Aufgabe:** Schreibe $\\frac{1}{\\mathrm{i}}$ in der Form $x + y\\,\\mathrm{i}$.\n**Lösung:** Mit $\\overline{\\mathrm{i}} = -\\mathrm{i}$ erweitern: $\\frac{1}{\\mathrm{i}}\\cdot\\frac{-\\mathrm{i}}{-\\mathrm{i}} = \\frac{-\\mathrm{i}}{-\\mathrm{i}^2} = \\frac{-\\mathrm{i}}{1}$ (denn $-\\mathrm{i}^2 = 1$).\n**Ergebnis:** $-\\mathrm{i}$.',
        '**Aufgabe:** Schreibe $\\frac{1 + 2\\,\\mathrm{i}}{3 - 2\\,\\mathrm{i}}$ in der Form $x + y\\,\\mathrm{i}$.\n**Lösung:** Nenner $w = 3 - 2\\,\\mathrm{i}$, also $\\overline{w} = 3 + 2\\,\\mathrm{i}$ und $\\lvert w\\rvert^2 = 3^2 + 2^2 = 13$. Zähler: $(1+2\\,\\mathrm{i})(3+2\\,\\mathrm{i}) = 3 + 2\\,\\mathrm{i} + 6\\,\\mathrm{i} + 4\\,\\mathrm{i}^2 = 3 - 4 + 8\\,\\mathrm{i} = -1 + 8\\,\\mathrm{i}$. Teilen durch $13$.\n**Ergebnis:** $-\\frac{1}{13} + \\frac{8}{13}\\,\\mathrm{i}$.',
        '**Aufgabe:** Berechne $\\frac{z_1}{z_2}$ für $z_1 = \\sqrt{3} - \\mathrm{i}$ und $z_2 = -2\\sqrt{3} + 2\\,\\mathrm{i}$.\n**Lösung:** Hier ist $z_2 = -2(\\sqrt{3} - \\mathrm{i}) = -2\\,z_1$, also $\\frac{z_1}{z_2} = \\frac{z_1}{-2\\,z_1} = -\\frac{1}{2}$. (Zur Kontrolle mit $\\overline{z_2} = -2\\sqrt{3} - 2\\,\\mathrm{i}$ erweitern, $\\lvert z_2\\rvert^2 = 16$: der Zähler ergibt $-8$, also $\\frac{-8}{16}$.)\n**Ergebnis:** $-\\frac{1}{2}$.',
      ],
    },
  ],
}
