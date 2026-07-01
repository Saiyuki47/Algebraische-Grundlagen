import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'kreise-mengen',
  titel: 'Kreise & Mengen in der Ebene',
  inhalt:
    '**Worum geht es?**\n' +
    'Oft beschreibt man eine Menge von Punkten in der Ebene nicht durch Aufzählen, sondern durch eine **Bedingung**: „alle Punkte mit Abstand $2$ vom Ursprung" ist eine Kreislinie, „alle Punkte mit Abstand $<2$" die volle Kreisscheibe. Hier lernst du, solche Bedingungen zu **zeichnen** und umgekehrt eine Skizze in **Mengenschreibweise** aufzuschreiben. Das ist die geometrische Sprache hinter komplexen Zahlen (Gaußsche Zahlenebene), Betrag und Konvergenz.\n' +
    '\n' +
    '**Punkte in der Ebene = komplexe Zahlen**\n' +
    'Ein Punkt der Ebene ist ein Paar $(x,y) \\in \\mathbb{R}\\times\\mathbb{R} = \\mathbb{R}^2$ mit **Rechtswert** $x$ und **Hochwert** $y$. Genau derselbe Punkt ist die komplexe Zahl $z = x + y\\,\\mathrm{i}$ in der **Gaußschen Zahlenebene**: $x = \\operatorname{Re}(z)$ auf der waagerechten, $y = \\operatorname{Im}(z)$ auf der senkrechten Achse. Der **Abstand** zweier Punkte $(x,y)$ und $(m_1,m_2)$ ist $\\sqrt{(x-m_1)^2 + (y-m_2)^2}$; komplex geschrieben ist das genau der Betrag $\\lvert z - z_0\\rvert$ mit $z_0 = m_1 + m_2\\,\\mathrm{i}$.\n' +
    '\n' +
    '**Die Kreisgleichung**\n' +
    'Ein **Kreis** ist die Menge aller Punkte mit **festem Abstand** $r$ (Radius, $r>0$) von einem festen Punkt $M=(m_1,m_2)$ (Mittelpunkt). „Abstand $=r$" quadriert ergibt die Kreisgleichung\n' +
    '$(x - m_1)^2 + (y - m_2)^2 = r^2$.\n' +
    'Der **Einheitskreis** ist der Sonderfall $M=(0,0)$, $r=1$: $x^2 + y^2 = 1$. In der Gaußschen Zahlenebene lautet dieselbe Kreislinie kurz $\\lvert z - z_0\\rvert = r$ mit Mittelpunkt $z_0 = m_1 + m_2\\,\\mathrm{i}$ — denn $\\lvert z - z_0\\rvert^2 = (x-m_1)^2 + (y-m_2)^2$.\n' +
    '\n' +
    '**Merke — Mittelpunkt am Vorzeichen ablesen:** In $(x-m_1)^2$ steht das $m_1$ mit **umgekehrtem** Vorzeichen. $(x+1)^2 + (y-2)^2 = 9$ hat also Mittelpunkt $(-1, 2)$ und Radius $3$. Genauso ist bei $\\lvert z + 1 - \\mathrm{i}\\rvert$ der Mittelpunkt $z_0 = -1 + \\mathrm{i}$, also $(-1,1)$, denn $z + 1 - \\mathrm{i} = z - (-1+\\mathrm{i})$.\n' +
    '\n' +
    '**Mengen durch (Un)gleichungen**\n' +
    'Ersetzt man in der Kreisbedingung das $=$ durch $<,\\le,>,\\ge$, entstehen Flächen statt einer Linie. Weitere Bausteine sind Geraden ($x=y$, $x=-2y$) und Halbebenen ($x\\ge y$).\n' +
    '| Bedingung | Menge / Bild |\n' +
    '|---|---|\n' +
    '| $(x-m_1)^2+(y-m_2)^2 = r^2$ | **Kreislinie** (nur der Rand) |\n' +
    '| $(x-m_1)^2+(y-m_2)^2 \\le r^2$ | **abgeschlossene Kreisscheibe** (voll, mit Rand) |\n' +
    '| $(x-m_1)^2+(y-m_2)^2 < r^2$ | **offene Kreisscheibe** (voll, ohne Rand) |\n' +
    '| $(x-m_1)^2+(y-m_2)^2 > r^2$ | **Außenbereich** (alles außerhalb) |\n' +
    '| $r_1^2 < x^2+y^2 < r_2^2$ | **Kreisring** zwischen zwei Kreisen |\n' +
    '| $y = m\\,x + b$ | **Gerade** |\n' +
    '| $y \\le m\\,x + b$ | **Halbebene** (Fläche unterhalb der Geraden) |\n' +
    '\n' +
    '**Wie zeichnet man eine beschriebene Menge?**\n' +
    '1. **Randlinie bestimmen:** Ungleichung als Gleichung lesen und diese Kurve zeichnen (Kreis: Mittelpunkt eintragen, mit Radius $r$ herumzeichnen; Gerade: zwei Punkte einsetzen).\n' +
    '2. **Rand: durchgezogen oder gestrichelt?** Bei $\\le$ bzw. $\\ge$ gehört der Rand dazu → **durchgezogene** Linie. Bei $<$ bzw. $>$ gehört er nicht dazu → **gestrichelte** Linie.\n' +
    '3. **Welche Seite füllen?** Einen **Testpunkt** einsetzen (oft $(0,0)$). Erfüllt er die Bedingung, wird seine Seite/das Innere schraffiert, sonst die andere Seite.\n' +
    '4. Bei „**und**" (Durchschnitt) nur den **gemeinsamen** Bereich färben; bei „**oder**" (Vereinigung) **beide** Bereiche.\n' +
    '\n' +
    '**Umgekehrt: Skizze aufschreiben**\n' +
    'Form immer $M = \\{(x,y) \\in \\mathbb{R}\\times\\mathbb{R} : \\text{Bedingung}\\}$. Runder Kreis um den Ursprung → $x^2+y^2 \\;(=,<,>)\\; r^2$; schräge Gerade durch $0$ → $y = m x$ bzw. $x = c\\,y$; waagerechter/senkrechter Streifen → Ungleichung nur in $y$ bzw. nur in $x$ (z. B. $-2 \\le y \\le 2$); zwei sich kreuzende Geraden → mit „**oder**" verbinden.\n' +
    '\n' +
    '**Sonderfall Mittelsenkrechte:** $\\lvert z\\rvert = \\lvert z-1\\rvert$ heißt „gleich weit von $0$ wie von $1$". Das ist keine Kurve um einen Punkt, sondern die **Mittelsenkrechte** der Strecke von $0$ bis $1$ — hier die senkrechte Gerade $x = \\tfrac{1}{2}$.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Vorzeichen des Mittelpunkts verwechseln: $(x-3)^2$ heißt $m_1 = +3$, nicht $-3$.\n' +
    '• $r$ und $r^2$ verwechseln: rechts steht $r^2$. Bei $x^2+y^2=9$ ist $r=3$ (nicht $9$).\n' +
    '• Rand-Strichart falsch: $<$/$>$ gestrichelt, $\\le$/$\\ge$ durchgezogen.\n' +
    '• Bei „und" versehentlich beide Bereiche färben statt nur den Durchschnitt.\n' +
    '• Vergessen zu testen, welche Seite gemeint ist — Testpunkt einsetzen.',
  beispiele: [
    {
      szenario: 'Kreise & Kreisscheiben zeichnen (Blatt 0, Aufg. 4)',
      beispiele: [
        '**Aufgabe:** Skizziere $M = \\{(x,y) \\in \\mathbb{R}\\times\\mathbb{R} : x^2 + y^2 = 1\\}$.\n**Lösung:** Kreisgleichung mit $m_1=m_2=0$ und $r^2=1$, also $r=1$. Nur $=$, keine Ungleichung → gezeichnet wird ausschließlich die Randlinie.\n**Ergebnis:** Kreislinie (Einheitskreis) um den Ursprung mit Radius $1$; nichts gefüllt.',
        '**Aufgabe:** Skizziere $M = \\{(x,y) \\in \\mathbb{R}\\times\\mathbb{R} : x^2 + y^2 < 4\\}$.\n**Lösung:** Randkurve $x^2+y^2=4$ ist der Kreis um $0$ mit $r=\\sqrt{4}=2$. Wegen $<$ gehört der Rand nicht dazu → **gestrichelt**. Testpunkt $(0,0)$: $0 < 4$ ✓, also das Innere füllen.\n**Ergebnis:** Volle (offene) Kreisscheibe, Radius $2$, Rand gestrichelt.',
        '**Aufgabe:** Skizziere $M = \\{(x,y) \\in \\mathbb{R}\\times\\mathbb{R} : (x-1)^2 + (y+2)^2 \\le 9\\}$.\n**Lösung:** Mittelpunkt $(1,-2)$ (Vorzeichen umkehren!), Radius $r=\\sqrt{9}=3$. Wegen $\\le$ gehört der Rand dazu → **durchgezogen**. Testpunkt $(1,-2)$ (der Mittelpunkt): $0 \\le 9$ ✓ → Inneres füllen.\n**Ergebnis:** Abgeschlossene Kreisscheibe um $(1,-2)$ mit Radius $3$, Rand durchgezogen.',
      ],
    },
    {
      szenario: 'Kreisring, Gerade, Halbebene (Blatt 0, Aufg. 4)',
      beispiele: [
        '**Aufgabe:** Skizziere $M = \\{(x,y) \\in \\mathbb{R}\\times\\mathbb{R} : x^2 + y^2 < 4 \\text{ und } x^2 + y^2 > 1\\}$.\n**Lösung:** Zwei Kreise um $0$: innen $r_1=1$, außen $r_2=2$. „und" → Durchschnitt: die Fläche zwischen beiden. Beide Ungleichungen echt ($<,>$) → **beide** Randkreise gestrichelt. Testpunkt $(1{,}5\\,;\\,0)$: $2{,}25<4$ ✓ und $2{,}25>1$ ✓.\n**Ergebnis:** Kreisring ($1 < x^2+y^2 < 4$), beide Ränder gestrichelt.',
        '**Aufgabe:** Skizziere $M = \\{(x,y) \\in \\mathbb{R}\\times\\mathbb{R} : x = -2y\\}$.\n**Lösung:** Gleichung einer Geraden durch den Ursprung. Zwei Punkte einsetzen: $y=0 \\Rightarrow x=0$, also $(0,0)$; $y=-1 \\Rightarrow x=2$, also $(2,-1)$. Verbinden.\n**Ergebnis:** Fallende Gerade durch $(0,0)$ und $(2,-1)$ (Steigung $-\\tfrac12$).',
        '**Aufgabe:** Skizziere $M = \\{(x,y) \\in \\mathbb{R}\\times\\mathbb{R} : x \\ge y\\}$.\n**Lösung:** Randgerade $x=y$ (Winkelhalbierende, durchgezogen wegen $\\ge$). Testpunkt $(1,0)$: $1 \\ge 0$ ✓ → die Seite unterhalb der Geraden gehört dazu.\n**Ergebnis:** Halbebene unterhalb/rechts der Geraden $x=y$, Randgerade durchgezogen.',
      ],
    },
    {
      szenario: 'Menge in Mengenschreibweise angeben (Blatt 0, Aufg. 5)',
      beispiele: [
        '**Aufgabe:** Die Skizze zeigt die volle Ebene außerhalb des Einheitskreises (Rand nicht dabei). Gib $M$ an.\n**Lösung:** „Außerhalb Kreis um $0$, Radius $1$" heißt Abstand vom Ursprung $>1$, also $x^2+y^2 > 1$ (echt, da Rand fehlt).\n**Ergebnis:** $M = \\{(x,y) \\in \\mathbb{R}\\times\\mathbb{R} : x^2 + y^2 > 1\\}$.',
        '**Aufgabe:** Die Skizze zeigt einen waagerechten Streifen zwischen $y=-2$ und $y=2$ (beide Ränder dabei). Gib $M$ an.\n**Lösung:** $x$ ist beliebig, nur $y$ ist eingeschränkt; Ränder gehören dazu → $\\le$.\n**Ergebnis:** $M = \\{(x,y) \\in \\mathbb{R}\\times\\mathbb{R} : -2 \\le y \\le 2\\}$.',
        '**Aufgabe:** Die Skizze zeigt die beiden Winkelhalbierenden (das „X" durch den Ursprung). Gib $M$ an.\n**Lösung:** Es sind zwei Geraden: $y=x$ und $y=-x$, gleichwertig $x=y$ bzw. $x=-y$. Beide zusammen → mit „oder" verbinden.\n**Ergebnis:** $M = \\{(x,y) \\in \\mathbb{R}\\times\\mathbb{R} : x = y \\text{ oder } x = -y\\}$.',
      ],
    },
    {
      szenario: 'Mengen in der Gaußschen Zahlenebene (Blatt 2, Aufg. 1)',
      beispiele: [
        '**Aufgabe:** Veranschauliche $A = \\{z \\in \\mathbb{C} : 1 < \\lvert z - 2\\mathrm{i}\\rvert < 2\\}$.\n**Lösung:** $\\lvert z - 2\\mathrm{i}\\rvert$ ist der Abstand von $z$ zum Punkt $z_0 = 2\\mathrm{i}$, also $(0,2)$. Bedingung: Abstand zwischen $1$ und $2$ → Kreisring um $(0,2)$ mit Innenradius $1$, Außenradius $2$. Beide $<$ → Ränder gestrichelt.\n**Ergebnis:** Offener Kreisring um $(0,2)$, $1 < \\lvert z-2\\mathrm{i}\\rvert < 2$.',
        '**Aufgabe:** Veranschauliche $B = \\{z \\in \\mathbb{C} : \\lvert z + 1 - \\mathrm{i}\\rvert > 1\\}$.\n**Lösung:** $z + 1 - \\mathrm{i} = z - (-1 + \\mathrm{i})$, also Mittelpunkt $z_0 = -1 + \\mathrm{i}$, das ist $(-1,1)$, Radius $1$. „$>1$" heißt Abstand größer als $1$ → alles **außerhalb** des Kreises. Wegen $>$ Rand gestrichelt, nicht dazugehörig.\n**Ergebnis:** Gesamte Ebene ohne die abgeschlossene Kreisscheibe um $(-1,1)$ mit Radius $1$.',
        '**Aufgabe:** Veranschauliche $C = \\{z \\in \\mathbb{C} : \\lvert z\\rvert = \\lvert z - 1\\rvert\\}$.\n**Lösung:** „gleich weit von $0$ wie von $1$" → Mittelsenkrechte der Strecke von $0$ bis $1$. Nachrechnen mit $z=x+y\\mathrm{i}$: $x^2+y^2 = (x-1)^2 + y^2 \\Rightarrow 0 = -2x + 1 \\Rightarrow x = \\tfrac12$.\n**Ergebnis:** Senkrechte Gerade $x = \\tfrac12$ (parallel zur $y$-Achse).',
      ],
    },
  ],
}
