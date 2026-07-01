import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'polardarstellung',
  titel: 'Polardarstellung',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine komplexe Zahl kann man kartesisch als $z = x + \\mathrm{i}\\,y$ schreiben (Punkt mit Koordinaten $x$ und $y$) oder über ihre Lage in der Gaußschen Zahlenebene: wie **weit** liegt sie vom Ursprung weg und in welche **Richtung**? Genau das ist die **Polardarstellung** $z = r\\,\\mathrm{e}^{\\mathrm{i}\\varphi}$. Sie ist die natürliche Sprache fürs Multiplizieren, Dividieren, Potenzieren und Wurzelziehen: dort wird sie zur reinen Rechnung mit Längen und Winkeln.\n' +
    '\n' +
    '**Definition: Betrag und Argument**\n' +
    'Sei $0 \\neq z = x + \\mathrm{i}\\,y$ mit $x, y \\in \\mathbb{R}$. Der **Betrag** $r = \\lvert z\\rvert = \\sqrt{x^2 + y^2}$ ist der Abstand von $z$ zum Ursprung (Pythagoras). Das **Argument** $\\varphi = \\arg z$ ist der Winkel (im Bogenmaß, gegen den Uhrzeigersinn von der positiven reellen Achse aus) zum Zeiger von $z$. Mit $\\cos\\varphi = \\tfrac{x}{r}$ und $\\sin\\varphi = \\tfrac{y}{r}$ folgt die **trigonometrische Form** und daraus die **Polarform**:\n' +
    '$z = r(\\cos\\varphi + \\mathrm{i}\\sin\\varphi) = r\\,\\mathrm{e}^{\\mathrm{i}\\varphi}$\n' +
    'Dabei ist $\\mathrm{e}^{\\mathrm{i}\\varphi} := \\cos\\varphi + \\mathrm{i}\\sin\\varphi$ (Euler). Es gilt stets $r = \\lvert z\\rvert$.\n' +
    '\n' +
    '**Eindeutigkeit des Arguments (mod $2\\pi$)**\n' +
    'Weil $\\cos$ und $\\sin$ die Periode $2\\pi$ haben, ist $\\varphi$ nur **bis auf Vielfache von 2π** festgelegt: mit $\\varphi$ ist auch jedes $\\varphi + 2k\\pi$ ($k \\in \\mathbb{Z}$) ein Argument von $z$. Um Eindeutigkeit zu erzwingen, wählt man den **Hauptwert** $\\varphi \\in [0, 2\\pi)$. Für $z = 0$ ist $r = 0$ und der Winkel unbestimmt (kein Argument).\n' +
    '\n' +
    '**Umrechnung Polar $\\to$ kartesisch**\n' +
    'Aus $z = r\\,\\mathrm{e}^{\\mathrm{i}\\varphi} = r(\\cos\\varphi + \\mathrm{i}\\sin\\varphi)$ liest man Real- und Imaginärteil direkt ab:\n' +
    '$x = r\\cos\\varphi \\quad (\\text{Realteil}), \\qquad y = r\\sin\\varphi \\quad (\\text{Imaginärteil})$\n' +
    'Also $z = r\\cos\\varphi + \\mathrm{i}\\,r\\sin\\varphi$. Winkel $> 2\\pi$ oder $< 0$ darf man vorher um Vielfache von $2\\pi$ verschieben (z. B. $\\tfrac{15\\pi}{4} \\to \\tfrac{7\\pi}{4}$).\n' +
    '\n' +
    '**Umrechnung kartesisch $\\to$ Polar (mit Quadranten-Korrektur)**\n' +
    'Für $z = x + \\mathrm{i}\\,y \\neq 0$:\n' +
    '1. Betrag: $r = \\lvert z\\rvert = \\sqrt{x^2 + y^2}$.\n' +
    '2. Winkel über $\\arccos$ (Verfahren der Vorlesung): $\\varphi = \\arccos\\tfrac{x}{\\lvert z\\rvert}$, falls $y \\geq 0$; und $\\varphi = 2\\pi - \\arccos\\tfrac{x}{\\lvert z\\rvert}$, falls $y < 0$.\n' +
    'Der Grund für die Fallunterscheidung: $\\arccos$ liefert nur Werte in $[0, \\pi]$ (obere Halbebene). Für $y < 0$ (untere Halbebene) muss man den Winkel an der reellen Achse spiegeln, also $2\\pi - \\arccos(\\dots)$ nehmen. Die $\\arccos$-Werte liest man aus der Winkeltabelle ab.\n' +
    '\n' +
    '**Alternative über $\\arctan$**\n' +
    'Verbreitet ist auch, $\\varphi$ aus $\\tan\\varphi = \\tfrac{y}{x}$ zu bestimmen. Achtung: $\\arctan$ liefert nur Werte in $(-\\tfrac{\\pi}{2}, \\tfrac{\\pi}{2})$ und unterscheidet die Quadranten links der Imaginärachse nicht. Deshalb ist eine **Quadranten-Korrektur** nötig: im 2. und 3. Quadranten ($x < 0$) addiert man $\\pi$, danach ggf. $+2\\pi$ für den Hauptwert $[0, 2\\pi)$. Die $\\arccos$-Methode oben umgeht diese Fallen und ist in dieser Vorlesung der Standard.\n' +
    '\n' +
    '**Multiplikation und Division in Polarform**\n' +
    'Sind $z = r\\,\\mathrm{e}^{\\mathrm{i}\\varphi}$ und $w = s\\,\\mathrm{e}^{\\mathrm{i}\\psi}$, dann gilt:\n' +
    '$z \\cdot w = r\\,s\\;\\mathrm{e}^{\\mathrm{i}(\\varphi + \\psi)} \\qquad \\frac{z}{w} = \\frac{r}{s}\\;\\mathrm{e}^{\\mathrm{i}(\\varphi - \\psi)} \\quad (w \\neq 0)$\n' +
    'In Worten: Bei der **Multiplikation** werden die **Beträge multipliziert** und die **Winkel addiert**; bei der **Division** werden die **Beträge dividiert** und die **Winkel subtrahiert**. (Beweis über die Additionstheoreme von $\\cos$ und $\\sin$; passt zur Rechenregel $\\lvert z\\,w\\rvert = \\lvert z\\rvert\\,\\lvert w\\rvert$.)\n' +
    '\n' +
    '**Geometrisch: Drehstreckung**\n' +
    'Die Multiplikation mit $w = s\\,\\mathrm{e}^{\\mathrm{i}\\psi}$ ist eine **Drehstreckung**: der Zeiger von $z$ wird um den Faktor $s$ **gestreckt** (Länge) und um den Winkel $\\psi$ **gedreht**. Beispiel: Multiplikation mit $\\mathrm{i} = \\mathrm{e}^{\\mathrm{i}\\pi/2}$ ist eine reine Drehung um $90^\\circ$ (Betrag $1$).\n' +
    '\n' +
    '**Wichtige Standard-Zeiger**\n' +
    '| $z$ | $r = \\lvert z\\rvert$ | $\\varphi = \\arg z$ | Polarform |\n' +
    '|---|---|---|---|\n' +
    '| $1$ | $1$ | $0$ | $\\mathrm{e}^{\\mathrm{i}\\cdot 0}$ |\n' +
    '| $\\mathrm{i}$ | $1$ | $\\tfrac{\\pi}{2}$ | $\\mathrm{e}^{\\mathrm{i}\\pi/2}$ |\n' +
    '| $-1$ | $1$ | $\\pi$ | $\\mathrm{e}^{\\mathrm{i}\\pi}$ |\n' +
    '| $-\\mathrm{i}$ | $1$ | $\\tfrac{3\\pi}{2}$ | $\\mathrm{e}^{\\mathrm{i}3\\pi/2}$ |\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Bei $y < 0$ die Korrektur $2\\pi - \\arccos(\\dots)$ vergessen (Winkel landet in der falschen Halbebene).\n' +
    '• $\\arctan\\tfrac{y}{x}$ ohne Quadranten-Korrektur benutzen (z. B. bei $x < 0$).\n' +
    '• $x$ und $y$ in $x = r\\cos\\varphi$, $y = r\\sin\\varphi$ vertauschen ($\\cos$ gehört zum Realteil).\n' +
    '• Beim Multiplizieren die Winkel multiplizieren statt addieren.\n' +
    '• Das Argument nicht in den Hauptwert $[0, 2\\pi)$ zurückholen (Vielfache von $2\\pi$ abziehen/addieren).',
  beispiele: [
    {
      szenario: 'Kartesisch → Polar (Übungsblatt Aufgabe 3)',
      beispiele: [
        '**Aufgabe:** Bestimme die Polardarstellung von $z = -2 - 2\\mathrm{i}$.\n**Lösung:** Betrag: $r = \\sqrt{(-2)^2 + (-2)^2} = \\sqrt{8} = 2\\sqrt{2}$. Winkel: $\\cos\\varphi = \\tfrac{x}{r} = \\tfrac{-2}{2\\sqrt{2}} = -\\tfrac{\\sqrt{2}}{2}$. Da $\\operatorname{Im}(z) = -2 < 0$, gilt $\\varphi = 2\\pi - \\arccos\\!\\left(-\\tfrac{\\sqrt{2}}{2}\\right) = 2\\pi - \\tfrac{3\\pi}{4} = \\tfrac{5\\pi}{4}$.\n**Ergebnis:** $z = 2\\sqrt{2}\\,\\mathrm{e}^{\\mathrm{i}\\,5\\pi/4}$ (3. Quadrant).',
        '**Aufgabe:** Bestimme die Polardarstellung von $z = -3\\mathrm{i}$.\n**Lösung:** Hier ist $x = 0$, $y = -3$. Betrag: $r = \\sqrt{0^2 + (-3)^2} = 3$. Winkel: $\\cos\\varphi = \\tfrac{0}{3} = 0$. Da $\\operatorname{Im}(z) = -3 < 0$, gilt $\\varphi = 2\\pi - \\arccos(0) = 2\\pi - \\tfrac{\\pi}{2} = \\tfrac{3\\pi}{2}$.\n**Ergebnis:** $z = 3\\,\\mathrm{e}^{\\mathrm{i}\\,3\\pi/2}$ (Zeiger zeigt nach unten).',
        '**Aufgabe:** Bestimme die Polardarstellung von $z = 1 - \\sqrt{3}\\,\\mathrm{i}$.\n**Lösung:** Betrag: $r = \\sqrt{1^2 + (-\\sqrt{3})^2} = \\sqrt{1 + 3} = 2$. Winkel: $\\cos\\varphi = \\tfrac{1}{2}$. Da $\\operatorname{Im}(z) = -\\sqrt{3} < 0$, gilt $\\varphi = 2\\pi - \\arccos\\!\\left(\\tfrac{1}{2}\\right) = 2\\pi - \\tfrac{\\pi}{3} = \\tfrac{5\\pi}{3}$.\n**Ergebnis:** $z = 2\\,\\mathrm{e}^{\\mathrm{i}\\,5\\pi/3}$ (4. Quadrant).',
      ],
    },
    {
      szenario: 'Polar → kartesisch (Übungsblatt Aufgabe 4)',
      beispiele: [
        '**Aufgabe:** Bestimme die kartesische Form von $z = \\mathrm{e}^{\\mathrm{i}\\pi/2}$.\n**Lösung:** Es ist $r = 1$, $\\varphi = \\tfrac{\\pi}{2}$. Also $x = r\\cos\\varphi = \\cos\\tfrac{\\pi}{2} = 0$ und $y = r\\sin\\varphi = \\sin\\tfrac{\\pi}{2} = 1$.\n**Ergebnis:** $z = 0 + 1\\cdot\\mathrm{i} = \\mathrm{i}$.',
        '**Aufgabe:** Bestimme die kartesische Form von $z = 2\\,\\mathrm{e}^{2\\pi\\mathrm{i}}$.\n**Lösung:** Hier $r = 2$, $\\varphi = 2\\pi$. Wegen $\\cos(2\\pi) = 1$ und $\\sin(2\\pi) = 0$: $x = 2\\cdot 1 = 2$, $y = 2\\cdot 0 = 0$.\n**Ergebnis:** $z = 2$ (der Winkel $2\\pi$ entspricht $0$; die Zahl liegt auf der positiven reellen Achse).',
        '**Aufgabe:** Bestimme die kartesische Form von $z = \\mathrm{e}^{\\mathrm{i}\\,15\\pi/4}$.\n**Lösung:** Winkel in den Hauptwert holen: $\\tfrac{15\\pi}{4} - 2\\pi = \\tfrac{15\\pi}{4} - \\tfrac{8\\pi}{4} = \\tfrac{7\\pi}{4}$. Mit $r = 1$: $x = \\cos\\tfrac{7\\pi}{4} = \\tfrac{\\sqrt{2}}{2}$, $y = \\sin\\tfrac{7\\pi}{4} = -\\tfrac{\\sqrt{2}}{2}$.\n**Ergebnis:** $z = \\tfrac{\\sqrt{2}}{2} - \\tfrac{\\sqrt{2}}{2}\\,\\mathrm{i}$.',
      ],
    },
    {
      szenario: 'Rechnen in Polarform (Multiplikation & Beträge)',
      beispiele: [
        '**Aufgabe:** Berechne $z \\cdot w$ für $z = 2\\,\\mathrm{e}^{\\mathrm{i}\\pi/6}$ und $w = 3\\,\\mathrm{e}^{\\mathrm{i}\\pi/3}$.\n**Lösung:** Beträge multiplizieren: $2 \\cdot 3 = 6$. Winkel addieren: $\\tfrac{\\pi}{6} + \\tfrac{\\pi}{3} = \\tfrac{\\pi}{6} + \\tfrac{2\\pi}{6} = \\tfrac{3\\pi}{6} = \\tfrac{\\pi}{2}$.\n**Ergebnis:** $z\\,w = 6\\,\\mathrm{e}^{\\mathrm{i}\\pi/2} = 6\\mathrm{i}$.',
        '**Aufgabe:** Finde $z \\in \\mathbb{C}$ mit $z \\cdot w = -4\\mathrm{i}$, wobei $w = 4\\,\\mathrm{e}^{\\mathrm{i}\\,5\\pi/4}$ (Probe mit $z = \\mathrm{e}^{\\mathrm{i}\\pi/4}$).\n**Lösung:** Für $z = \\mathrm{e}^{\\mathrm{i}\\pi/4}$ gilt $z\\,w = 1\\cdot 4\\,\\mathrm{e}^{\\mathrm{i}(\\pi/4 + 5\\pi/4)} = 4\\,\\mathrm{e}^{\\mathrm{i}\\,3\\pi/2} = 4\\left(\\cos\\tfrac{3\\pi}{2} + \\mathrm{i}\\sin\\tfrac{3\\pi}{2}\\right) = 4\\left(0 + \\mathrm{i}\\cdot(-1)\\right)$.\n**Ergebnis:** $z\\,w = -4\\mathrm{i}$; die Probe stimmt (Beträge mal, Winkel plus).',
        '**Aufgabe:** Bestimme $\\left\\lvert (6 + 2\\mathrm{i})(2 + \\mathrm{i})\\right\\rvert$.\n**Lösung:** Der Betrag ist multiplikativ: $\\lvert z\\,w\\rvert = \\lvert z\\rvert\\,\\lvert w\\rvert$. Also $\\lvert 6 + 2\\mathrm{i}\\rvert\\cdot\\lvert 2 + \\mathrm{i}\\rvert = \\sqrt{36 + 4}\\cdot\\sqrt{4 + 1} = \\sqrt{40}\\cdot\\sqrt{5} = \\sqrt{200}$.\n**Ergebnis:** $\\sqrt{200} = 10\\sqrt{2}$.',
      ],
    },
  ],
}
