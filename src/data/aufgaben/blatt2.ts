import type { Aufgabe } from '../../types'

export const b2: Aufgabe[] = [
  {
    id: 'b2_a1',
    titel: 'Mengen in der komplexen Zahlenebene',
    aufgabeText:
      'Veranschaulichen Sie nachfolgende Mengen in der komplexen Zahlenebene:\n' +
      '(a) $A := \\{z \\in \\mathbb{C} : 1 < |z - 2\\mathrm{i}| < 2\\}$\n' +
      '(b) $B := \\{z \\in \\mathbb{C} : |z + 1 - \\mathrm{i}| > 1\\}$\n' +
      '(c) $C := \\{z \\in \\mathbb{C} : |z| = |z - 1|\\}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Der Ausdruck $|z - z_0|$ misst den Abstand zwischen zwei komplexen Zahlen $z$ und $z_0$ in der Gaußschen Ebene.\n\n' +
          'Damit lassen sich geometrische Figuren beschreiben:\n' +
          '  $|z - z_0| = r$ → Kreis mit Mittelpunkt $z_0$ und Radius $r$ (nur der Rand)\n' +
          '  $|z - z_0| < r$ → offene Kreisscheibe (Inneres ohne Rand)\n' +
          '  $|z - z_0| > r$ → Äußeres des Kreises (ohne Rand)\n' +
          '  $r_1 < |z - z_0| < r_2$ → offener Kreisring (ohne beide Ränder)\n\n' +
          'Für (c): $|z| = |z - 1|$ bedeutet: Gleichabstand von $0$ und $1$ → Mittelsenkrechte.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '(a) $1 < |z - 2\\mathrm{i}| < 2$:\n' +
          '  Mittelpunkt: $z_0 = 2\\mathrm{i}$ = Punkt $(0, 2)$\n' +
          '  Innerer Radius: $1$, äußerer Radius: $2$\n' +
          '  → Offener Kreisring um $(0,2)$, beide Ränder gestrichelt\n\n' +
          '(b) $|z + 1 - \\mathrm{i}| > 1$:\n' +
          '  Schreibe als $|z - (-1 + \\mathrm{i})| > 1$\n' +
          '  Mittelpunkt: $z_0 = -1 + \\mathrm{i}$ = Punkt $(-1, 1)$, Radius $1$\n' +
          '  → Äußeres des Kreises, Rand gestrichelt\n\n' +
          '(c) $|z| = |z-1|$:\n' +
          '  Schreibe $z = x + y\\mathrm{i}$: $\\sqrt{x^2+y^2} = \\sqrt{(x-1)^2+y^2}$\n' +
          '  Quadrieren: $x^2 = (x-1)^2 \\Rightarrow x^2 = x^2 - 2x + 1 \\Rightarrow 2x = 1 \\Rightarrow x = \\frac{1}{2}$\n' +
          '  → Senkrechte Gerade $\\mathrm{Re}(z) = \\frac{1}{2}$ (Mittelsenkrechte von $0$ und $1$)',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Mittelpunkt aus $|z - z_0|$ ablesen:\n' +
          '  $|z - 2\\mathrm{i}|$: Mittelpunkt $z_0 = 2\\mathrm{i}$ → Punkt $(0, 2)$\n' +
          '  $|z + 1 - \\mathrm{i}|$: Schreibe als $|z - (-1+\\mathrm{i})|$ → Mittelpunkt $(-1, 1)$\n' +
          '  $|z - (3+2\\mathrm{i})|$: Mittelpunkt $(3, 2)$\n\n' +
          'Allgemeine Rechnung für $|z| = |z - a|$ (Mittelsenkrechte von $0$ und $a \\in \\mathbb{R}$):\n' +
          '  $x^2 + y^2 = (x-a)^2 + y^2$\n' +
          '  $x^2 = x^2 - 2ax + a^2$\n' +
          '  $0 = -2ax + a^2$\n' +
          '  $x = \\frac{a}{2}$ → senkrechte Gerade bei $x = \\frac{a}{2}$',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• $|z + 1 - \\mathrm{i}|$: Das $+1$ bedeutet $-(-1)$, also ist der Mittelpunkt $-1+\\mathrm{i}$, NICHT $1+\\mathrm{i}$!\n\n' +
          '• Kreisring (a): Beide Ränder müssen GESTRICHELT gezeichnet werden (da $<$ und $>$, ohne $=$).\n\n' +
          '• Für (b): $|z - z_0| > 1$ ist das ÄUSSERE des Kreises, also die unendlich große Region außerhalb des Kreises.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Für (a): Liegt der Punkt $2\\mathrm{i}$ (= Mittelpunkt) in $A$?\n' +
          '  $|2\\mathrm{i} - 2\\mathrm{i}| = 0$. Da $0 \\not> 1$: Nein ✓ (liegt im Loch)\n\n' +
          'Für (c): Liegt der Punkt $\\frac{1}{2} + 2\\mathrm{i}$ in $C$?\n' +
          '  $|z| = \\sqrt{\\frac{1}{4}+4}$, $|z-1| = \\sqrt{\\frac{1}{4}+4}$ ✓ (gleich)',
      },
    ],
    loesung:
      '(a) $A$ ist ein offener Kreisring um $z_0 = 2\\mathrm{i}$ mit innerem Radius $1$ und äußerem Radius $2$ (beide Ränder nicht enthalten).\n\n' +
      '(b) $B$ ist das offene Äußere des Kreises mit Mittelpunkt $-1+\\mathrm{i}$ und Radius $1$ (Kreisrand nicht enthalten).\n\n' +
      '(c) $|z| = |z-1|$ gilt genau für $\\mathrm{Re}(z) = \\tfrac{1}{2}$, d.\\,h. $C$ ist die vertikale Gerade $x = \\tfrac{1}{2}$ (Mittelsenkrechte von $0$ und $1$).',
    schwierigkeit: 'mittel',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b2_a2',
    titel: 'Beträge komplexer Zahlen berechnen',
    aufgabeText:
      'Bestimmen Sie die folgenden Beträge:\n' +
      '(a) $\\left|\\left(\\dfrac{2+2\\mathrm{i}}{1-\\mathrm{i}}\\right)^{\\!6}\\right|$\n' +
      '(b) $|(6+2\\mathrm{i})(2+\\mathrm{i})|$\n' +
      '(c) $\\left|\\left(\\dfrac{\\sqrt{3}}{2} - \\dfrac{1}{2}\\,\\mathrm{i}\\right)^{\\!15}\\right|$\n\n' +
      'Hinweis: Denken Sie an die Rechenregeln $|z \\cdot w| = |z| \\cdot |w|$ und $\\left|\\dfrac{z}{w}\\right| = \\dfrac{|z|}{|w|}$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Der Betrag einer komplexen Zahl $z = x + y\\mathrm{i}$ ist $|z| = \\sqrt{x^2+y^2}$ (Abstand vom Ursprung).\n\n' +
          'Rechenregeln für Beträge (analog zu reellen Absolutbeträgen):\n' +
          '  $|z \\cdot w| = |z| \\cdot |w|$       (Betrag des Produkts = Produkt der Beträge)\n' +
          '  $\\left|\\dfrac{z}{w}\\right| = \\dfrac{|z|}{|w|}$    (Betrag des Quotienten = Quotient der Beträge)\n' +
          '  $|z^n| = |z|^n$                 (Betrag der Potenz = Potenz des Betrags)\n\n' +
          'Strategie: Nicht ausrechnen, sondern die Betragsregeln anwenden! So werden auch komplizierte Ausdrücke einfach.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '1. Zerlege den Ausdruck in einfachere Teile.\n' +
          '2. Berechne die Beträge der einzelnen Teile: $|x + y\\mathrm{i}| = \\sqrt{x^2 + y^2}$.\n' +
          '3. Wende die Betragsregeln an.\n\n' +
          'Für (a):\n' +
          '  $\\left|\\left(\\frac{2+2\\mathrm{i}}{1-\\mathrm{i}}\\right)^6\\right| = \\left|\\frac{2+2\\mathrm{i}}{1-\\mathrm{i}}\\right|^6 = \\left(\\frac{|2+2\\mathrm{i}|}{|1-\\mathrm{i}|}\\right)^6$\n\n' +
          'Für (c): Prüfe, ob $\\left|\\frac{\\sqrt{3}}{2} - \\frac{1}{2}\\mathrm{i}\\right| = 1$ (Punkt auf dem Einheitskreis!).\n' +
          '  Dann ist $|z^{15}| = |z|^{15} = 1^{15} = 1$.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Einzelne Beträge berechnen:\n' +
          '  $|2+2\\mathrm{i}| = \\sqrt{4+4} = \\sqrt{8} = 2\\sqrt{2}$\n' +
          '  $|1-\\mathrm{i}| = \\sqrt{1+1} = \\sqrt{2}$\n' +
          '  $|6+2\\mathrm{i}| = \\sqrt{36+4} = \\sqrt{40} = 2\\sqrt{10}$\n' +
          '  $|2+\\mathrm{i}| = \\sqrt{4+1} = \\sqrt{5}$\n\n' +
          'Für (a): $\\left(\\dfrac{2\\sqrt{2}}{\\sqrt{2}}\\right)^6 = 2^6 = 64$\n\n' +
          'Einheitskreis-Check (c): $\\left(\\frac{\\sqrt{3}}{2}\\right)^2 + \\left(-\\frac{1}{2}\\right)^2 = \\frac{3}{4} + \\frac{1}{4} = 1$ ✓',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Versuchen, den Ausdruck komplex auszurechnen und erst dann den Betrag zu nehmen – das ist viel aufwendiger. Betragsregeln ZUERST anwenden!\n\n' +
          '• $|2+2\\mathrm{i}| \\neq |2|+|2\\mathrm{i}| = 2+2 = 4$ (falsch! Dreiecksungleichung gilt so nicht).\n' +
          '  Richtig: $|2+2\\mathrm{i}| = \\sqrt{4+4} = 2\\sqrt{2} \\approx 2.83$\n\n' +
          '• Bei (c): $\\frac{\\sqrt{3}}{2} - \\frac{1}{2}\\mathrm{i}$ liegt auf dem EINHEITSKREIS (Betrag = 1), daher $|z|^{15} = 1$.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Gilt $|z \\cdot w|^2 = |z|^2 \\cdot |w|^2$? (Einfacher zu prüfen, weil kein Wurzelziehen nötig)\n\n' +
          'Für (b): $|(6+2\\mathrm{i})(2+\\mathrm{i})|^2 = |6+2\\mathrm{i}|^2 \\cdot |2+\\mathrm{i}|^2 = 40 \\cdot 5 = 200$\n' +
          '  Also $|(6+2\\mathrm{i})(2+\\mathrm{i})| = \\sqrt{200} = 10\\sqrt{2}$ ✓',
      },
    ],
    loesung:
      '(a) $\\left|\\left(\\dfrac{2+2\\mathrm{i}}{1-\\mathrm{i}}\\right)^{6}\\right| = \\dfrac{|2+2\\mathrm{i}|^6}{|1-\\mathrm{i}|^6} = \\dfrac{(2\\sqrt{2})^6}{(\\sqrt{2})^6} = \\dfrac{8^3}{2^3} = \\dfrac{512}{8} = 64$.\n\n' +
      '(b) $|(6+2\\mathrm{i})(2+\\mathrm{i})| = \\sqrt{40}\\cdot\\sqrt{5} = \\sqrt{200} = 10\\sqrt{2}$.\n\n' +
      '(c) $\\left|\\dfrac{\\sqrt{3}}{2} - \\dfrac{1}{2}\\mathrm{i}\\right|^{15} = 1^{15} = 1$.',
    schwierigkeit: 'mittel',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b2_a3',
    titel: 'Polardarstellung komplexer Zahlen',
    aufgabeText:
      'Skizzieren Sie die folgenden Zahlen zunächst in der Gaußschen Zahlenebene. Bestimmen Sie dann die Polardarstellung $z = r\\,e^{\\mathrm{i}\\varphi}$ der jeweiligen Zahl.\n\n' +
      '(a) $z_1 = -2 - 2\\mathrm{i}$\n' +
      '(b) $z_2 = -3\\mathrm{i}$\n' +
      '(c) $z_3 = \\dfrac{\\sqrt{3}}{2} + \\dfrac{1}{2}\\,\\mathrm{i}$\n' +
      '(d) $z_4 = 1 - \\sqrt{3}\\,\\mathrm{i}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Die Polardarstellung $z = r\\,e^{\\mathrm{i}\\varphi}$ beschreibt eine komplexe Zahl durch:\n' +
          '  $r = |z| \\geq 0$: der Betrag (Abstand vom Ursprung)\n' +
          '  $\\varphi \\in [0, 2\\pi)$: der Argument/Winkel (Richtungswinkel, gegen den Uhrzeigersinn ab der positiven reellen Achse)\n\n' +
          'Verbindung zur kartesischen Form durch die Eulersche Formel:\n' +
          '  $z = r\\,e^{\\mathrm{i}\\varphi} = r(\\cos(\\varphi) + \\mathrm{i}\\sin(\\varphi))$\n' +
          '  → $\\mathrm{Re}(z) = r\\cos(\\varphi)$,  $\\mathrm{Im}(z) = r\\sin(\\varphi)$\n\n' +
          'Der Winkel muss immer im Bereich $[0, 2\\pi)$ angegeben werden (oder je nach Konvention $(-\\pi, \\pi]$).',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Schritt 1 – Betrag berechnen:\n' +
          '  $r = |z| = \\sqrt{\\mathrm{Re}(z)^2 + \\mathrm{Im}(z)^2}$\n\n' +
          'Schritt 2 – Winkel bestimmen:\n' +
          '  Berechne $\\cos(\\varphi) = \\dfrac{\\mathrm{Re}(z)}{r}$\n' +
          '  Dann: Falls $\\mathrm{Im}(z) \\geq 0$ (obere Halbebene): $\\varphi = \\arccos\\!\\left(\\dfrac{\\mathrm{Re}(z)}{r}\\right)$\n' +
          '  Falls $\\mathrm{Im}(z) < 0$ (untere Halbebene): $\\varphi = 2\\pi - \\arccos\\!\\left(\\dfrac{\\mathrm{Re}(z)}{r}\\right)$\n\n' +
          'Schritt 3 – Polardarstellung aufschreiben:\n' +
          '  $z = r\\,e^{\\mathrm{i}\\varphi}$\n\n' +
          'Spezialwerte: $\\arccos(0) = \\frac{\\pi}{2}$, $\\arccos(-1) = \\pi$, $\\arccos\\!\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{3}$, $\\arccos\\!\\left(-\\frac{\\sqrt{2}}{2}\\right) = \\frac{3\\pi}{4}$',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Beispiel: $z = 1 + \\mathrm{i}$\n' +
          '  Betrag: $r = \\sqrt{1+1} = \\sqrt{2}$\n' +
          '  $\\cos(\\varphi) = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$; $\\mathrm{Im}(z) = 1 > 0$ (obere Halbebene)\n' +
          '  $\\varphi = \\arccos\\!\\left(\\frac{\\sqrt{2}}{2}\\right) = \\frac{\\pi}{4}$\n' +
          '  Polardarstellung: $z = \\sqrt{2}\\,e^{\\mathrm{i}\\frac{\\pi}{4}}$\n\n' +
          'Beispiel: $z = 1 - \\mathrm{i}$ (untere Halbebene)\n' +
          '  $r = \\sqrt{2}$, $\\cos(\\varphi) = \\frac{1}{\\sqrt{2}}$; $\\mathrm{Im}(z) = -1 < 0$\n' +
          '  $\\varphi = 2\\pi - \\frac{\\pi}{4} = \\frac{7\\pi}{4}$\n' +
          '  Polardarstellung: $z = \\sqrt{2}\\,e^{\\mathrm{i}\\frac{7\\pi}{4}}$',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Falscher Quadrant: $\\arccos$ liefert immer einen Winkel in $[0, \\pi]$. Für die untere Halbebene ($\\mathrm{Im}(z) < 0$) muss man $\\varphi = 2\\pi - \\arccos(\\ldots)$ rechnen.\n\n' +
          '• Vergessen zu prüfen, ob $\\mathrm{Im}(z)$ positiv oder negativ ist.\n\n' +
          '• $\\varphi$ außerhalb $[0, 2\\pi)$: Das Ergebnis muss immer im Bereich $[0, 2\\pi)$ liegen.\n\n' +
          '• Betrag falsch: $|-2-2\\mathrm{i}| = \\sqrt{4+4} = 2\\sqrt{2}$, nicht $-2\\sqrt{2}$ (Betrag immer $\\geq 0$!).',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Rückrechnung: $r\\,e^{\\mathrm{i}\\varphi} = r(\\cos\\varphi + \\mathrm{i}\\sin\\varphi)$ muss die ursprüngliche Zahl ergeben.\n\n' +
          'Für (a): $z_1 = 2\\sqrt{2}\\,e^{\\mathrm{i}\\frac{5\\pi}{4}}$. Probe:\n' +
          '  $2\\sqrt{2}\\left(\\cos\\frac{5\\pi}{4} + \\mathrm{i}\\sin\\frac{5\\pi}{4}\\right) = 2\\sqrt{2}\\left(-\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2}\\mathrm{i}\\right) = -2 - 2\\mathrm{i}$ ✓',
      },
    ],
    loesung:
      '(a) $z_1 = -2-2\\mathrm{i}$: $r_1 = \\sqrt{4+4} = 2\\sqrt{2}$.\n' +
      '  $\\cos\\varphi = \\frac{-2}{2\\sqrt{2}} = -\\frac{\\sqrt{2}}{2}$, $\\mathrm{Im}<0$ → $\\varphi_1 = 2\\pi - \\frac{3\\pi}{4} = \\frac{5\\pi}{4}$.\n' +
      '  $z_1 = 2\\sqrt{2}\\,e^{\\mathrm{i}\\frac{5\\pi}{4}}$.\n\n' +
      '(b) $z_2 = -3\\mathrm{i} = 0 - 3\\mathrm{i}$: $r_2 = 3$.\n' +
      '  Punkt $(0,-3)$: liegt auf der negativen Imaginärachse → $\\varphi_2 = \\frac{3\\pi}{2}$.\n' +
      '  $z_2 = 3\\,e^{\\mathrm{i}\\frac{3\\pi}{2}}$.\n\n' +
      '(c) $z_3 = \\frac{\\sqrt{3}}{2} + \\frac{1}{2}\\mathrm{i}$: $r_3 = \\sqrt{\\frac{3}{4}+\\frac{1}{4}} = 1$.\n' +
      '  $\\cos\\varphi = \\frac{\\sqrt{3}/2}{1} = \\frac{\\sqrt{3}}{2}$, $\\mathrm{Im}>0$ → $\\varphi_3 = \\frac{\\pi}{6}$.\n' +
      '  $z_3 = e^{\\mathrm{i}\\frac{\\pi}{6}}$.\n\n' +
      '(d) $z_4 = 1-\\sqrt{3}\\,\\mathrm{i}$: $r_4 = \\sqrt{1+3} = 2$.\n' +
      '  $\\cos\\varphi = \\frac{1}{2}$, $\\mathrm{Im}<0$ → $\\varphi_4 = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}$.\n' +
      '  $z_4 = 2\\,e^{\\mathrm{i}\\frac{5\\pi}{3}}$.',
    schwierigkeit: 'mittel',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b2_a4',
    titel: 'Kartesische Darstellung aus Polarform',
    aufgabeText:
      'Skizzieren Sie die folgenden Zahlen zunächst in der Gaußschen Zahlenebene. Bestimmen Sie dann die kartesische Darstellung $x + y\\,\\mathrm{i}$ (mit $x, y \\in \\mathbb{R}$) der jeweiligen Zahl.\n\n' +
      '(a) $z_1 = e^{\\mathrm{i}\\frac{\\pi}{2}}$\n' +
      '(b) $z_2 = 2e^{2\\pi\\mathrm{i}}$\n' +
      '(c) $z_3 = e^{\\mathrm{i}\\frac{15\\pi}{4}}$\n' +
      '(d) $z_4 = 3e^{-\\mathrm{i}\\frac{7\\pi}{2}}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Die Eulersche Formel verbindet Polarform und kartesische Form:\n' +
          '  $e^{\\mathrm{i}\\varphi} = \\cos(\\varphi) + \\mathrm{i}\\sin(\\varphi)$\n\n' +
          'Damit gilt für $z = r\\,e^{\\mathrm{i}\\varphi}$:\n' +
          '  $\\mathrm{Re}(z) = r\\cos(\\varphi)$\n' +
          '  $\\mathrm{Im}(z) = r\\sin(\\varphi)$\n\n' +
          'Da $\\cos$ und $\\sin$ periodisch mit Periode $2\\pi$ sind, kann man große oder negative Winkel auf den Bereich $[0, 2\\pi)$ reduzieren:\n' +
          '  Solange $\\varphi \\geq 2\\pi$: subtrahiere $2\\pi$\n' +
          '  Solange $\\varphi < 0$: addiere $2\\pi$',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '1. Winkel $\\varphi$ auf $[0, 2\\pi)$ reduzieren (falls nötig)\n' +
          '2. $\\cos(\\varphi)$ und $\\sin(\\varphi)$ berechnen (Standardwerte oder Einheitskreis)\n' +
          '3. Mit Betrag $r$ multiplizieren: $x = r\\cos(\\varphi)$, $y = r\\sin(\\varphi)$\n' +
          '4. Ergebnis als $x + y\\mathrm{i}$ aufschreiben\n\n' +
          'Winkelreduktion:\n' +
          '  $\\frac{15\\pi}{4}$: $\\frac{15\\pi}{4} - 2\\pi = \\frac{15\\pi}{4} - \\frac{8\\pi}{4} = \\frac{7\\pi}{4}$\n' +
          '  $-\\frac{7\\pi}{2}$: $-\\frac{7\\pi}{2} + 4\\pi = -\\frac{7\\pi}{2} + \\frac{8\\pi}{2} = \\frac{\\pi}{2}$',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Standardwerte (unbedingt kennen):\n' +
          '  $\\varphi = 0$: $\\cos=1$, $\\sin=0$ → $e^{\\mathrm{i}\\cdot0} = 1$\n' +
          '  $\\varphi = \\frac{\\pi}{2}$: $\\cos=0$, $\\sin=1$ → $e^{\\mathrm{i}\\frac{\\pi}{2}} = \\mathrm{i}$\n' +
          '  $\\varphi = \\pi$: $\\cos=-1$, $\\sin=0$ → $e^{\\mathrm{i}\\pi} = -1$\n' +
          '  $\\varphi = \\frac{3\\pi}{2}$: $\\cos=0$, $\\sin=-1$ → $e^{\\mathrm{i}\\frac{3\\pi}{2}} = -\\mathrm{i}$\n' +
          '  $\\varphi = \\frac{\\pi}{4}$: $\\cos=\\frac{\\sqrt{2}}{2}$, $\\sin=\\frac{\\sqrt{2}}{2}$ → $e^{\\mathrm{i}\\frac{\\pi}{4}} = \\frac{\\sqrt{2}}{2}+\\frac{\\sqrt{2}}{2}\\mathrm{i}$\n' +
          '  $\\varphi = \\frac{7\\pi}{4}$: $\\cos=\\frac{\\sqrt{2}}{2}$, $\\sin=-\\frac{\\sqrt{2}}{2}$ → $e^{\\mathrm{i}\\frac{7\\pi}{4}} = \\frac{\\sqrt{2}}{2}-\\frac{\\sqrt{2}}{2}\\mathrm{i}$',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Großen Winkel nicht reduzieren: $e^{\\mathrm{i}\\frac{15\\pi}{4}} \\neq e^{\\mathrm{i}\\cdot\\frac{15\\pi}{4}}$ ohne Vereinfachung auswerten – das Ergebnis ist dasselbe wie bei $e^{\\mathrm{i}\\frac{7\\pi}{4}}$.\n\n' +
          '• $\\cos$ und $\\sin$ verwechseln: $\\mathrm{Re}(e^{\\mathrm{i}\\varphi}) = \\cos(\\varphi)$ (horizontale Komponente), $\\mathrm{Im} = \\sin(\\varphi)$ (vertikale Komponente).\n\n' +
          '• Negativer Winkel: $e^{-\\mathrm{i}\\varphi} = \\cos(\\varphi) - \\mathrm{i}\\sin(\\varphi)$ (Imaginärteil negativ!)',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Probe: $|x + y\\mathrm{i}| = r$?\n' +
          '  Für $z_4 = 3e^{-\\mathrm{i}\\frac{7\\pi}{2}}$: Ergebnis $3\\mathrm{i}$, Betrag $= 3 = r$ ✓\n\n' +
          'Liegt der Punkt im richtigen Quadranten der Gaußschen Ebene (laut Skizze)?',
      },
    ],
    loesung:
      '(a) $z_1 = e^{\\mathrm{i}\\frac{\\pi}{2}} = \\cos\\frac{\\pi}{2} + \\mathrm{i}\\sin\\frac{\\pi}{2} = 0 + \\mathrm{i} = \\mathrm{i}$.\n\n' +
      '(b) $z_2 = 2e^{\\mathrm{i}\\cdot2\\pi}$: $2\\pi$ ist eine volle Umdrehung → $e^{\\mathrm{i}\\cdot2\\pi}=1$.\n' +
      '  $z_2 = 2\\cdot(\\cos2\\pi + \\mathrm{i}\\sin2\\pi) = 2\\cdot(1+0) = 2$.\n\n' +
      '(c) Winkel reduzieren: $\\frac{15\\pi}{4} - 2\\pi = \\frac{15\\pi}{4} - \\frac{8\\pi}{4} = \\frac{7\\pi}{4}$.\n' +
      '  $z_3 = e^{\\mathrm{i}\\frac{7\\pi}{4}} = \\cos\\frac{7\\pi}{4} + \\mathrm{i}\\sin\\frac{7\\pi}{4} = \\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2}\\,\\mathrm{i}$.\n\n' +
      '(d) Negativen Winkel reduzieren: $-\\frac{7\\pi}{2} + 4\\pi = -\\frac{7\\pi}{2} + \\frac{8\\pi}{2} = \\frac{\\pi}{2}$.\n' +
      '  $z_4 = 3e^{\\mathrm{i}\\frac{\\pi}{2}} = 3(\\cos\\frac{\\pi}{2} + \\mathrm{i}\\sin\\frac{\\pi}{2}) = 3\\cdot\\mathrm{i} = 3\\mathrm{i}$.',
    schwierigkeit: 'mittel',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b2_a5',
    titel: 'Potenzen von $\\mathrm{i}$ und Eulersche Formel',
    aufgabeText:
      '(a) Bestimmen Sie $\\mathrm{i}^2$, $\\mathrm{i}^3$, $\\mathrm{i}^4$, $\\mathrm{i}^5$ und geben Sie eine Formel zur Berechnung von $\\mathrm{i}^n$, $n \\in \\mathbb{N}$ an. Hinweis: $\\mathrm{i}^0 := 1$.\n\n' +
      '(b) Sei $\\varphi \\in \\mathbb{R}$. Überlegen Sie anhand der Reihendarstellungen der Exponential-, Sinus- und Cosinusfunktion, dass $\\exp(\\mathrm{i}\\varphi)$ die gleichen Summanden wie $\\cos(\\varphi) + \\mathrm{i}\\sin(\\varphi)$ hat.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Für (a): Die Potenzen von $\\mathrm{i}$ folgen einem 4er-Zyklus:\n' +
          '  $\\mathrm{i}^0 = 1$,  $\\mathrm{i}^1 = \\mathrm{i}$,  $\\mathrm{i}^2 = -1$,  $\\mathrm{i}^3 = -\\mathrm{i}$,  $\\mathrm{i}^4 = 1$,  $\\mathrm{i}^5 = \\mathrm{i}$, …\n' +
          '  Nach 4 Schritten ist man wieder am Anfang. Daher: $\\mathrm{i}^n$ hängt nur vom Rest $n \\bmod 4$ ab.\n\n' +
          'Für (b): Die Exponentialfunktion lässt sich als Potenzreihe schreiben:\n' +
          '  $\\exp(z) = \\sum_{k=0}^{\\infty} \\dfrac{z^k}{k!} = 1 + z + \\dfrac{z^2}{2!} + \\dfrac{z^3}{3!} + \\ldots$\n\n' +
          'Durch Einsetzen von $z = \\mathrm{i}\\varphi$ und Sortieren nach geraden und ungeraden Potenzen ergibt sich die Eulersche Formel $e^{\\mathrm{i}\\varphi} = \\cos\\varphi + \\mathrm{i}\\sin\\varphi$.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '(a) Schritt-für-Schritt Potenzen berechnen:\n' +
          '  $\\mathrm{i}^1 = \\mathrm{i}$\n' +
          '  $\\mathrm{i}^2 = \\mathrm{i} \\cdot \\mathrm{i} = -1$ (Definition!)\n' +
          '  $\\mathrm{i}^3 = \\mathrm{i}^2 \\cdot \\mathrm{i} = (-1)\\cdot\\mathrm{i} = -\\mathrm{i}$\n' +
          '  $\\mathrm{i}^4 = \\mathrm{i}^2 \\cdot \\mathrm{i}^2 = (-1)(-1) = 1$\n' +
          '  $\\mathrm{i}^5 = \\mathrm{i}^4 \\cdot \\mathrm{i} = 1 \\cdot \\mathrm{i} = \\mathrm{i}$\n\n' +
          'Formel: Berechne $r = n \\bmod 4$ (Rest bei Division durch 4):\n' +
          '  $r=0$: $\\mathrm{i}^n=1$;  $r=1$: $\\mathrm{i}^n=\\mathrm{i}$;  $r=2$: $\\mathrm{i}^n=-1$;  $r=3$: $\\mathrm{i}^n=-\\mathrm{i}$\n\n' +
          '(b) Setze $z = \\mathrm{i}\\varphi$ in die Exponentialreihe ein. Nutze $\\mathrm{i}^{2k} = (-1)^k$ und $\\mathrm{i}^{2k+1} = \\mathrm{i}(-1)^k$.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Reihendarstellung einsetzen:\n' +
          '  $\\exp(\\mathrm{i}\\varphi) = \\sum_{k=0}^{\\infty} \\dfrac{(\\mathrm{i}\\varphi)^k}{k!}$\n' +
          '  $= 1 + \\mathrm{i}\\varphi + \\dfrac{(\\mathrm{i}\\varphi)^2}{2!} + \\dfrac{(\\mathrm{i}\\varphi)^3}{3!} + \\dfrac{(\\mathrm{i}\\varphi)^4}{4!} + \\ldots$\n' +
          '  $= 1 + \\mathrm{i}\\varphi - \\dfrac{\\varphi^2}{2!} - \\dfrac{\\mathrm{i}\\varphi^3}{3!} + \\dfrac{\\varphi^4}{4!} + \\ldots$\n\n' +
          'Gerade Terme (reell): $1 - \\dfrac{\\varphi^2}{2!} + \\dfrac{\\varphi^4}{4!} - \\ldots = \\cos(\\varphi)$\n' +
          'Ungerade Terme (imaginär): $\\mathrm{i}\\varphi - \\dfrac{\\mathrm{i}\\varphi^3}{3!} + \\ldots = \\mathrm{i}\\sin(\\varphi)$\n' +
          'Zusammen: $\\exp(\\mathrm{i}\\varphi) = \\cos(\\varphi) + \\mathrm{i}\\sin(\\varphi)$ ✓',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• $\\mathrm{i}^4 = 1$, NICHT $\\mathrm{i}^4 = -1$ oder $\\mathrm{i}$! Der Zyklus ist $1, \\mathrm{i}, -1, -\\mathrm{i}, 1, \\mathrm{i}, \\ldots$\n\n' +
          '• Für $n = 0$: $\\mathrm{i}^0 = 1$ per Definition (wie bei jeder Zahl außer 0).\n\n' +
          '• Bei (b): $(\\mathrm{i}\\varphi)^k = \\mathrm{i}^k \\cdot \\varphi^k$, also müssen $\\mathrm{i}^k$ und $\\varphi^k$ getrennt behandelt werden.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Prüfe: $\\mathrm{i}^{13}$. $13 = 3 \\cdot 4 + 1$, also Rest $= 1$ → $\\mathrm{i}^{13} = \\mathrm{i}$ ✓\n\n' +
          'Für (b): Gilt die Eulersche Identität $e^{\\mathrm{i}\\pi} + 1 = 0$?\n' +
          '  $e^{\\mathrm{i}\\pi} = \\cos(\\pi) + \\mathrm{i}\\sin(\\pi) = -1 + 0 = -1$, also $-1 + 1 = 0$ ✓',
      },
    ],
    loesung:
      '(a) $\\mathrm{i}^2 = -1$, $\\mathrm{i}^3 = -\\mathrm{i}$, $\\mathrm{i}^4 = 1$, $\\mathrm{i}^5 = \\mathrm{i}$.\n' +
      '$\\mathrm{i}^n = \\begin{cases} 1 & n \\equiv 0 \\pmod{4} \\\\ \\mathrm{i} & n \\equiv 1 \\pmod{4} \\\\ -1 & n \\equiv 2 \\pmod{4} \\\\ -\\mathrm{i} & n \\equiv 3 \\pmod{4} \\end{cases}$\n\n' +
      '(b) $\\exp(\\mathrm{i}\\varphi) = \\sum_{k=0}^{\\infty}\\dfrac{(\\mathrm{i}\\varphi)^k}{k!}$. Gerade Potenzen liefern $\\cos(\\varphi)$, ungerade liefern $\\mathrm{i}\\sin(\\varphi)$. Damit: $\\exp(\\mathrm{i}\\varphi) = \\cos(\\varphi) + \\mathrm{i}\\sin(\\varphi)$.',
    schwierigkeit: 'schwer',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b2_a6',
    titel: 'Konvergenz komplexer Zahlenfolgen',
    aufgabeText:
      'Eine komplexe Zahlenfolge $(z_n)$ konvergiert gegen $z \\in \\mathbb{C}$, falls zu jedem $\\varepsilon > 0$ ein $N \\in \\mathbb{N}$ existiert, so dass für alle $n \\geq N$ gilt: $|z_n - z| < \\varepsilon$.\n\n' +
      '(a) Sei $\\varepsilon > 0$. Wie sieht für $z \\in \\mathbb{C}$ die Menge $\\{w \\in \\mathbb{C} : |w - z| < \\varepsilon\\}$ aus? Wie sieht für $x \\in \\mathbb{R}$ die Menge $\\{y \\in \\mathbb{R} : |y - x| < \\varepsilon\\}$ aus?\n\n' +
      '(b) Seien $z_n = \\mathrm{i}^n$ und $w_n = \\left(\\tfrac{1}{2} + \\tfrac{1}{2}\\,\\mathrm{i}\\right)^n$. Welche der Folgen $(z_n)$, $(|z_n|)$ und $(w_n)$ konvergiert? Was ist im Falle von Konvergenz der Grenzwert?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Die $\\varepsilon$-Definition der Konvergenz sagt: Eine Folge $(z_n)$ konvergiert gegen $z$, wenn die Folgenglieder für große $n$ beliebig nah an $z$ heranrücken.\n\n' +
          '„Nah" wird gemessen mit $|z_n - z|$: der Abstand zwischen $z_n$ und dem Grenzwert $z$.\n\n' +
          'Für $w_n = r^n$ (reell oder komplex) gilt:\n' +
          '  $|r| < 1$ → $|w_n| = |r|^n \\to 0$ → $(w_n)$ konvergiert gegen $0$\n' +
          '  $|r| > 1$ → $|w_n| \\to \\infty$ → divergiert\n' +
          '  $|r| = 1$ → Betrag konstant, aber Konvergenz hängt von der Richtung ab',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '(a) Geometrische Interpretation:\n' +
          '  $\\{w \\in \\mathbb{C} : |w-z| < \\varepsilon\\}$: Abstand $< \\varepsilon$ von $z$ → offene Kreisscheibe mit Mittelpunkt $z$, Radius $\\varepsilon$\n' +
          '  $\\{y \\in \\mathbb{R} : |y-x| < \\varepsilon\\}$: Abstand $< \\varepsilon$ von $x$ auf der Zahlengerade → offenes Intervall $(x-\\varepsilon, x+\\varepsilon)$\n\n' +
          '(b) Für $(z_n) = (\\mathrm{i}^n)$:\n' +
          '  Werte: $\\mathrm{i}^0=1, \\mathrm{i}^1=\\mathrm{i}, \\mathrm{i}^2=-1, \\mathrm{i}^3=-\\mathrm{i}, \\mathrm{i}^4=1, \\ldots$ (springt ständig)\n' +
          '  → keine Konvergenz (für kein $z$ rücken alle $z_n$ beliebig nah heran)\n\n' +
          'Für $(|z_n|) = (|\\mathrm{i}^n|) = (1, 1, 1, \\ldots)$: konstant $= 1$ → konvergiert gegen $1$\n\n' +
          'Für $(w_n)$: Betrag $|w_n| = \\left|\\frac{1}{2}+\\frac{1}{2}\\mathrm{i}\\right|^n = \\left(\\frac{1}{\\sqrt{2}}\\right)^n \\to 0$',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Betragsberechnung für $w_n$:\n' +
          '  $\\left|\\frac{1}{2}+\\frac{1}{2}\\mathrm{i}\\right| = \\sqrt{\\frac{1}{4}+\\frac{1}{4}} = \\sqrt{\\frac{1}{2}} = \\frac{1}{\\sqrt{2}} \\approx 0.707$\n' +
          '  Da $\\frac{1}{\\sqrt{2}} < 1$, gilt $|w_n| = \\left(\\frac{1}{\\sqrt{2}}\\right)^n \\to 0$\n\n' +
          'Für jedes $z \\neq 0$ gilt schließlich $|w_n| < |z|$, daher $|w_n - 0| = |w_n| \\to 0$.\n' +
          '  → $(w_n)$ konvergiert gegen $0$.\n\n' +
          'Geometrisch: $(z_n)$ springt zwischen den 4 Punkten $1, \\mathrm{i}, -1, -\\mathrm{i}$ auf dem Einheitskreis – nähert sich keinem Grenzwert.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• $(z_n) = (\\mathrm{i}^n)$ hat konstanten Betrag $|z_n| = 1$, aber die Folge $(z_n)$ SELBST konvergiert nicht (weil sie springt).\n\n' +
          '• $(|z_n|) = (1, 1, 1, \\ldots)$ ist eine konstante Folge → konvergiert gegen $1$.\n\n' +
          '• Der Betrag $|\\frac{1}{2}+\\frac{1}{2}\\mathrm{i}| = \\frac{1}{\\sqrt{2}} < 1$ muss korrekt berechnet werden – die Komponenten nicht einfach addieren!',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Für $(w_n)$: Wähle $\\varepsilon = 0.01$. Ab welchem $N$ gilt $|w_n| < 0.01$?\n' +
          '  $|w_n| = \\left(\\frac{1}{\\sqrt{2}}\\right)^n < 0.01$\n' +
          '  $n > \\log_{1/\\sqrt{2}}(0.01) \\approx 13.3$, also $N = 14$.\n\n' +
          'Dies zeigt: Die Folge kommt beliebig nahe an $0$ heran. ✓',
      },
    ],
    loesung:
      '(a) $\\{w \\in \\mathbb{C} : |w-z| < \\varepsilon\\}$: offene Kreisscheibe mit Mittelpunkt $z$, Radius $\\varepsilon$.\n' +
      '$\\{y \\in \\mathbb{R} : |y-x| < \\varepsilon\\}$: offenes Intervall $(x-\\varepsilon, x+\\varepsilon)$.\n\n' +
      '(b) $(z_n) = (\\mathrm{i}^n)$: nicht konvergent (springt zwischen $1, \\mathrm{i}, -1, -\\mathrm{i}$).\n\n' +
      '$(|z_n|) = (1, 1, 1, \\ldots)$: konvergiert gegen $1$.\n\n' +
      '$(w_n)$: $|w_n| = \\left(\\tfrac{1}{\\sqrt{2}}\\right)^n \\to 0$, also konvergiert $(w_n)$ gegen $0$.',
    schwierigkeit: 'schwer',
    kategorie: 'Komplexe Zahlen',
  },
]
