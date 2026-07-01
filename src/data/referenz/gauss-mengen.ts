import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'gauss-mengen',
  titel: 'Mengen in der Gaußschen Zahlenebene',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine komplexe Zahl $z = x + \\mathrm{i}\\,y$ ist ein Zahlenpaar und lässt sich als **Punkt** in einer Ebene zeichnen – der **Gaußschen Zahlenebene**. Bedingungen an $z$ (z. B. „$\\lvert z - z_0\\rvert = r$") beschreiben dann keine einzelnen Zahlen mehr, sondern ganze **Punktmengen**: Kreise, Kreisscheiben, Geraden, Halbebenen. Das Ziel: aus einer solchen Bedingung die zugehörige Menge **erkennen, skizzieren und beschreiben**. Schlüssel dazu ist die geometrische Deutung des Betrags als Abstand.\n' +
    '\n' +
    '**Die Gaußsche Zahlenebene**\n' +
    'Man trägt $z = x + \\mathrm{i}\\,y$ als Punkt mit den Koordinaten $(x, y)$ auf. Dabei ist die **waagerechte Achse** die reelle Achse (sie trägt den **Realteil** $\\operatorname{Re} z = x$), die **senkrechte Achse** die imaginäre Achse (sie trägt den **Imaginärteil** $\\operatorname{Im} z = y$). Reelle Zahlen liegen also auf der $x$-Achse, rein imaginäre Zahlen wie $\\mathrm{i}, 2\\mathrm{i}$ auf der $y$-Achse. Der Ursprung ist $0 = 0 + 0\\,\\mathrm{i}$.\n' +
    '\n' +
    '**Betrag = Abstand zum Ursprung**\n' +
    'Der **Betrag** ist $\\lvert z\\rvert = \\sqrt{x^2 + y^2}$. Nach Pythagoras ist das genau die **Länge des Pfeils** vom Ursprung zum Punkt $z$, also der **Abstand von z zum Nullpunkt**. Beispiel: $\\lvert 3 + 4\\mathrm{i}\\rvert = \\sqrt{9 + 16} = 5$.\n' +
    '\n' +
    '**Abstand zweier Punkte**\n' +
    'Für $z = x + \\mathrm{i}\\,y$ und $z_0 = a + \\mathrm{i}\\,b$ ist\n' +
    '$\\lvert z - z_0\\rvert = \\sqrt{(x-a)^2 + (y-b)^2}$\n' +
    'der **Abstand des Punktes z vom Punkt z₀**. Das ist die zentrale Übersetzung: Wo immer $\\lvert z - z_0\\rvert$ steht, lies „Abstand von $z$ zum festen Punkt $z_0$". Damit werden Betrags-Bedingungen zu Abstands-Bedingungen und diese zu Geometrie.\n' +
    '\n' +
    '**Bedingung → Punktmenge (die vier Grundfälle)**\n' +
    'Sei $z_0$ ein fester Punkt und $r > 0$.\n' +
    '| Bedingung | Deutung | Menge |\n' +
    '|---|---|---|\n' +
    '| $\\lvert z - z_0\\rvert = r$ | Abstand zu $z_0$ ist genau $r$ | **Kreis** um $z_0$, Radius $r$ |\n' +
    '| $\\lvert z - z_0\\rvert \\le r$ | Abstand höchstens $r$ | **Kreisscheibe** (Rand dabei) |\n' +
    '| $\\lvert z - z_0\\rvert < r$ | Abstand echt kleiner $r$ | **offene Kreisscheibe** (Rand fehlt) |\n' +
    '| $\\lvert z - z_0\\rvert > r$ | Abstand echt größer $r$ | **Äußeres** des Kreises |\n' +
    '| $\\lvert z - a\\rvert = \\lvert z - b\\rvert$ | gleich weit von $a$ und $b$ | **Mittelsenkrechte** der Strecke $ab$ |\n' +
    '| $\\operatorname{Re} z \\ge c$ | $x$-Koordinate mindestens $c$ | **Halbebene** rechts von $x = c$ |\n' +
    '\n' +
    'Merke: **kleiner/größer** entscheidet über innen/außen, **Gleichheit** liefert immer nur die **Randlinie** (Kreis bzw. Gerade). Ein „$<$" oder „$>$" bedeutet **offen** (Rand gehört nicht dazu, gestrichelt zeichnen), ein „$\\le$" oder „$\\ge$" bedeutet **abgeschlossen** (Rand gehört dazu, durchgezogen).\n' +
    '\n' +
    '**Wie erkennt man die Menge? (Schritt für Schritt)**\n' +
    '1. Betrags-Ausdruck in die Form $\\lvert z - z_0\\rvert$ bringen: Vorzeichen sortieren, denn $z + c = z - (-c)$. So wird das Zentrum $z_0$ sichtbar (z. B. $\\lvert z + 1 - \\mathrm{i}\\rvert = \\lvert z - (-1 + \\mathrm{i})\\rvert$, Zentrum $-1 + \\mathrm{i}$).\n' +
    '2. Bedingung als Abstands-Aussage lesen (Abstand zu $z_0$ …).\n' +
    '3. Passenden Grundfall aus der Tabelle wählen: $=$ Kreis/Gerade, $\\le/<$ Scheibe, $\\ge/>$ Äußeres, zwei Beträge gleich $\\to$ Mittelsenkrechte.\n' +
    '4. Rand gestrichelt (bei $<, >$) oder durchgezogen (bei $\\le, \\ge$) zeichnen; das gemeinte Gebiet schraffieren.\n' +
    '5. Zur Kontrolle notfalls $z = x + \\mathrm{i}\\,y$ einsetzen und die Bedingung in $x, y$ ausrechnen (führt auf Kreis- oder Geradengleichung).\n' +
    '\n' +
    '**Rechenprobe per Einsetzen**\n' +
    'Aus $\\lvert z - z_0\\rvert = r$ wird durch Quadrieren $(x-a)^2 + (y-b)^2 = r^2$ – die **Kreisgleichung** (Mittelpunkt $(a,b)$, Radius $r$). Aus $\\lvert z\\rvert = \\lvert z - 1\\rvert$ wird $x^2 + y^2 = (x-1)^2 + y^2$, also $x = \\tfrac12$ – eine **senkrechte Gerade**. So bestätigt die Rechnung die geometrische Deutung.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Zentrum falsch: $\\lvert z + 2\\mathrm{i}\\rvert$ hat Zentrum $-2\\mathrm{i}$, nicht $+2\\mathrm{i}$ (Vorzeichen umdrehen!).\n' +
    '• Rein imaginäres Zentrum auf die falsche Achse legen: $2\\mathrm{i}$ liegt bei $(0, 2)$, nicht bei $(2, 0)$.\n' +
    '• $<$/$>$ (Rand fehlt, gestrichelt) mit $\\le$/$\\ge$ (Rand dabei, durchgezogen) verwechseln.\n' +
    '• Bei $\\lvert z - a\\rvert = \\lvert z - b\\rvert$ einen Kreis statt der Mittelsenkrechten skizzieren.\n' +
    '• Doppelte Ungleichung $1 < \\lvert z - z_0\\rvert < 2$ als eine Scheibe deuten statt als **Kreisring** zwischen zwei Kreisen.',
  beispiele: [
    {
      szenario: 'Kreis, Scheibe & Äußeres',
      beispiele: [
        '**Aufgabe:** Skizziere $\\lvert z - (2 + \\mathrm{i})\\rvert = 3$.\n**Lösung:** $\\lvert z - z_0\\rvert = r$ mit Zentrum $z_0 = 2 + \\mathrm{i}$, also Punkt $(2, 1)$, und Radius $r = 3$. Gleichheit $\\Rightarrow$ nur die Randlinie, durchgezogen.\n**Ergebnis:** Kreislinie um $(2, 1)$ mit Radius $3$.',
        '**Aufgabe:** Beschreibe $\\lvert z + 2\\mathrm{i}\\rvert \\le 2$.\n**Lösung:** Umformen: $\\lvert z + 2\\mathrm{i}\\rvert = \\lvert z - (-2\\mathrm{i})\\rvert$, Zentrum $-2\\mathrm{i}$, also $(0, -2)$, Radius $2$. „$\\le$" $\\Rightarrow$ alle Punkte mit Abstand höchstens $2$, Rand gehört dazu.\n**Ergebnis:** Abgeschlossene Kreisscheibe um $(0, -2)$ mit Radius $2$ (Rand durchgezogen).',
        '**Aufgabe:** Veranschauliche $B := \\{ z \\in \\mathbb{C} : \\lvert z + 1 - \\mathrm{i}\\rvert > 1 \\}$.\n**Lösung:** $\\lvert z + 1 - \\mathrm{i}\\rvert = \\lvert z - (-1 + \\mathrm{i})\\rvert$, Zentrum $-1 + \\mathrm{i}$, also $(-1, 1)$, Radius $1$. „$>$" $\\Rightarrow$ Abstand echt größer $1$: alle Punkte **außerhalb** des Kreises, Rand fehlt.\n**Ergebnis:** Äußeres des Kreises um $(-1, 1)$ mit Radius $1$ (Kreis gestrichelt, nicht dazu).',
      ],
    },
    {
      szenario: 'Kreisring (doppelte Ungleichung)',
      beispiele: [
        '**Aufgabe:** Veranschauliche $A := \\{ z \\in \\mathbb{C} : 1 < \\lvert z - 2\\mathrm{i}\\rvert < 2 \\}$.\n**Lösung:** Zentrum $z_0 = 2\\mathrm{i}$, also $(0, 2)$. Der Abstand zu $(0, 2)$ liegt echt zwischen $1$ und $2$. Das ist der Bereich zwischen dem inneren Kreis (Radius $1$) und dem äußeren Kreis (Radius $2$); beide Ränder fehlen.\n**Ergebnis:** Offener Kreisring um $(0, 2)$ mit innerem Radius $1$ und äußerem Radius $2$ (beide Kreise gestrichelt).',
        '**Aufgabe:** Beschreibe $\\{ z : 2 \\le \\lvert z\\rvert \\le 3 \\}$.\n**Lösung:** $\\lvert z\\rvert = \\lvert z - 0\\rvert$ ist der Abstand zum Ursprung. Er soll zwischen $2$ und $3$ liegen, jeweils **einschließlich** der Grenzen.\n**Ergebnis:** Abgeschlossener Kreisring um $0$ mit Radien $2$ und $3$ (beide Ränder gehören dazu, durchgezogen).',
        '**Aufgabe:** Welche Menge ist $\\{ z : \\lvert z - 1\\rvert \\le 2 \\}$ ohne den Punkt $z = 1$?\n**Lösung:** $\\lvert z - 1\\rvert \\le 2$ ist die abgeschlossene Kreisscheibe um $(1, 0)$ mit Radius $2$. Herausnehmen des Mittelpunkts $z = 1$ entspricht $0 < \\lvert z - 1\\rvert \\le 2$ (Abstand echt größer $0$).\n**Ergebnis:** Kreisscheibe um $(1, 0)$, Radius $2$, mit „Loch" im Mittelpunkt (punktierte Scheibe).',
      ],
    },
    {
      szenario: 'Mittelsenkrechte (zwei Beträge gleich)',
      beispiele: [
        '**Aufgabe:** Veranschauliche $C := \\{ z \\in \\mathbb{C} : \\lvert z\\rvert = \\lvert z - 1\\rvert \\}$.\n**Lösung:** $\\lvert z\\rvert = \\lvert z - 0\\rvert$ ist der Abstand zu $0$, $\\lvert z - 1\\rvert$ der Abstand zu $1$. Gesucht sind alle Punkte, die zu $0$ und zu $1$ **gleich weit** sind – das ist die Mittelsenkrechte der Strecke von $0$ bis $1$. Nachrechnen: $x^2 + y^2 = (x-1)^2 + y^2 \\Rightarrow 0 = -2x + 1 \\Rightarrow x = \\tfrac12$.\n**Ergebnis:** Senkrechte Gerade $\\operatorname{Re} z = \\tfrac12$.',
        '**Aufgabe:** Bestimme $\\{ z : \\lvert z - \\mathrm{i}\\rvert = \\lvert z + \\mathrm{i}\\rvert \\}$.\n**Lösung:** Abstand zu $\\mathrm{i} = (0,1)$ gleich Abstand zu $-\\mathrm{i} = (0,-1)$: Mittelsenkrechte der Strecke von $(0,1)$ nach $(0,-1)$. Nachrechnen: $x^2 + (y-1)^2 = x^2 + (y+1)^2 \\Rightarrow -2y = 2y \\Rightarrow y = 0$.\n**Ergebnis:** Die reelle Achse $\\operatorname{Im} z = 0$.',
        '**Aufgabe:** Bestimme $\\{ z : \\lvert z - 2\\rvert = \\lvert z - 4\\rvert \\}$.\n**Lösung:** Gleich weit von $2 = (2,0)$ und $4 = (4,0)$: Mittelsenkrechte der Strecke von $2$ bis $4$, also senkrecht durch die Mitte $x = 3$. Nachrechnen: $(x-2)^2 = (x-4)^2 \\Rightarrow -4x + 4 = -8x + 16 \\Rightarrow x = 3$.\n**Ergebnis:** Senkrechte Gerade $\\operatorname{Re} z = 3$.',
      ],
    },
    {
      szenario: 'Halbebenen (Re / Im)',
      beispiele: [
        '**Aufgabe:** Skizziere $\\{ z \\in \\mathbb{C} : \\operatorname{Re} z \\ge 1 \\}$.\n**Lösung:** $\\operatorname{Re} z = x$ ist die $x$-Koordinate; gefordert $x \\ge 1$. Das ist alles rechts der senkrechten Geraden $x = 1$, die Gerade selbst gehört dazu.\n**Ergebnis:** Abgeschlossene rechte Halbebene ab $\\operatorname{Re} z = 1$ (Randgerade durchgezogen).',
        '**Aufgabe:** Beschreibe $\\{ z : \\operatorname{Im} z < 0 \\}$.\n**Lösung:** $\\operatorname{Im} z = y$ ist die $y$-Koordinate; gefordert $y < 0$. Alle Punkte **unterhalb** der reellen Achse, die Achse selbst fehlt (echtes „$<$").\n**Ergebnis:** Offene untere Halbebene (reelle Achse gestrichelt, nicht dabei).',
        '**Aufgabe:** Veranschauliche $\\{ z : 0 \\le \\operatorname{Re} z \\le 2 \\}$.\n**Lösung:** $x = \\operatorname{Re} z$ soll zwischen $0$ und $2$ liegen (einschließlich). Das ist der senkrechte Streifen zwischen den Geraden $x = 0$ (imaginäre Achse) und $x = 2$, beide Ränder gehören dazu.\n**Ergebnis:** Abgeschlossener senkrechter Streifen $0 \\le \\operatorname{Re} z \\le 2$.',
      ],
    },
  ],
}
