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
          'Dabei ist $z_0$ eine fest vorgegebene komplexe Zahl – der Bezugspunkt der Figur (meist ihr Mittelpunkt). Das variable $z$ steht dagegen für alle Punkte, welche die Bedingung erfüllen. Die kleine $0$ ist nur ein Name (ein Index), der dieses feste $z_0$ vom beweglichen $z$ unterscheidet – sie bedeutet keine Rechnung und nicht die Zahl Null.\n\n' +
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
          'Sicherer Trick für den Mittelpunkt: Setze den Klammerinhalt $= 0$ und löse nach $z$ auf. Das Ergebnis ist der Mittelpunkt $z_0$.\n\n' +
          'Mittelpunkt aus $|z - z_0|$ ablesen:\n' +
          '  $|z - 2\\mathrm{i}|$: steht schon als $z - z_0$ → $z - 2\\mathrm{i} = 0$, also $z_0 = 2\\mathrm{i}$ → Punkt $(0, 2)$\n' +
          '  $|z + 1 - \\mathrm{i}|$: erst zu $|z - (-1+\\mathrm{i})|$ umschreiben → $z_0 = -1+\\mathrm{i}$ → Punkt $(-1, 1)$\n' +
          '  $|z - (3+2\\mathrm{i})|$: Mittelpunkt $(3, 2)$\n\n' +
          'Warum bei (a) nichts „umgedreht" wird, bei (b) aber schon:\n' +
          '  Das Minus in $|z - z_0|$ gehört zur Formel, nicht zum Mittelpunkt – es dreht nie etwas um.\n' +
          '  (a) $|z - 2\\mathrm{i}|$: Das Minus steht schon da, du liest $z_0 = 2\\mathrm{i}$ direkt ab – der Mittelpunkt ist $(0, 2)$, nicht $-2\\mathrm{i}$.\n' +
          '  (b) $|z + 1 - \\mathrm{i}|$: Hier steht ein Plus. Damit es die Form $z - z_0$ bekommt, klammerst du ein Minus aus – dabei kippen die Vorzeichen im Inneren: $z + 1 - \\mathrm{i} = z - (-1 + \\mathrm{i})$. Also $z_0 = -1 + \\mathrm{i}$.\n' +
          '  Kurz: Du drehst nie den fertigen Mittelpunkt um, sondern nur die Vorzeichen beim Umschreiben in die $z - z_0$-Form. Steht das Minus schon (wie bei a), gibt es nichts zu drehen.\n\n' +
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
    ],
    loesung: '',
    loesungSections: [
      {
        text:
          '(a) Offener Kreisring um $z_0 = 2\\mathrm{i}$ = Punkt $(0,2)$, innerer Radius $1$, äußerer Radius $2$ (beide Ränder gestrichelt).\n' +
          '**Kommentar:** Die Bedingung $1 < |z - 2\\mathrm{i}| < 2$ verlangt, dass der Abstand zum Punkt $2\\mathrm{i} = (0,2)$ zwischen $1$ und $2$ liegt. Das ist der Bereich zwischen zwei Kreisen um $(0,2)$ – ein Kreisring. Weil nur $<$ (und kein $\\leq$) dasteht, gehören die beiden Ränder nicht dazu und werden gestrichelt gezeichnet.\n\n' +
          '(b) Offenes Äußeres des Kreises mit Mittelpunkt $-1+\\mathrm{i}$ und Radius $1$ (Kreisrand gestrichelt).\n' +
          '**Kommentar:** Erst bringt man $|z + 1 - \\mathrm{i}|$ in die Form $|z - z_0|$: $|z - (-1+\\mathrm{i})|$, also Mittelpunkt $-1+\\mathrm{i} = (-1,1)$. Die Bedingung $> 1$ heißt „mehr als $1$ entfernt", also alle Punkte außerhalb des Kreises mit Radius $1$. Das $>$ ohne $=$ schließt den Rand aus → gestrichelt.\n\n' +
          '(c) $|z| = |z-1|$: Gleichabstand von $0$ und $1$ → vertikale Gerade $\\mathrm{Re}(z) = \\tfrac{1}{2}$ (Mittelsenkrechte).\n' +
          '**Kommentar:** $|z|$ ist der Abstand zum Punkt $0$, $|z-1|$ der Abstand zum Punkt $1$. Sind beide gleich, liegt $z$ genau in der Mitte zwischen $0$ und $1$ – auf der Mittelsenkrechten. Das ist die senkrechte Gerade durch $\\mathrm{Re}(z) = \\tfrac{1}{2}$.',
        graphId: 'b2_a1',
      },
    ],
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
          'Potenzgesetze (am Beispiel $(2\\sqrt{2})^6$ aus dem Lösungsweg):\n' +
          '  Produktregel: $(a\\cdot b)^n = a^n\\cdot b^n$ (jeder Faktor wird einzeln potenziert)\n' +
          '  Potenz einer Potenz: $(a^m)^n = a^{m\\cdot n}$ – die Exponenten werden MULTIPLIZIERT, nicht addiert\n' +
          '  Wurzel als Potenz: $\\sqrt{a} = a^{1/2}$, daher $(\\sqrt{a})^2 = a$\n\n' +
          'Warum wird die $6$ als $2\\cdot 3$ zerlegt (und nicht z. B. als $2\\cdot 4$)?\n' +
          '  Beim Schachteln $(a^m)^n$ werden die Exponenten multipliziert und müssen wieder $6$ ergeben: $2\\cdot 3 = 6$ ✓, aber $2\\cdot 4 = 8 \\neq 6$ ✗ – das wäre $(2\\sqrt{2})^8$, ein ganz anderer Wert.\n' +
          '  Man nimmt gezielt den Faktor $2$ (also zuerst quadrieren), weil das Quadrieren die Wurzel beseitigt: $(2\\sqrt{2})^2 = 2^2\\cdot(\\sqrt{2})^2 = 4\\cdot 2 = 8$.\n' +
          '  Danach bleibt nur noch $8^3$:  $(2\\sqrt{2})^6 = \\left((2\\sqrt{2})^2\\right)^3 = 8^3 = 512$. Genauso $(\\sqrt{2})^6 = \\left((\\sqrt{2})^2\\right)^3 = 2^3 = 8$.\n\n' +
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
    ],
    loesung:
      '(a) $\\left|\\left(\\dfrac{2+2\\mathrm{i}}{1-\\mathrm{i}}\\right)^{6}\\right| = \\dfrac{|2+2\\mathrm{i}|^6}{|1-\\mathrm{i}|^6} = \\dfrac{(2\\sqrt{2})^6}{(\\sqrt{2})^6} = \\dfrac{8^3}{2^3} = \\dfrac{512}{8} = 64$.\n' +
      '**Kommentar:** Statt alles auszumultiplizieren, nutzt man die Betragsregeln $\\left|\\frac{z}{w}\\right| = \\frac{|z|}{|w|}$ und $|z^n| = |z|^n$ – so darf man Bruch und Potenz einzeln auf die Beträge anwenden. Mit $|2+2\\mathrm{i}| = 2\\sqrt{2}$ und $|1-\\mathrm{i}| = \\sqrt{2}$ bleibt $\\frac{(2\\sqrt{2})^6}{(\\sqrt{2})^6}$. Über das Quadrieren wird $(2\\sqrt{2})^6 = 8^3 = 512$ und $(\\sqrt{2})^6 = 2^3 = 8$, also $\\frac{512}{8} = 64$.\n\n' +
      '(b) $|(6+2\\mathrm{i})(2+\\mathrm{i})| = \\sqrt{40}\\cdot\\sqrt{5} = \\sqrt{200} = 10\\sqrt{2}$.\n' +
      '**Kommentar:** Hier greift $|z \\cdot w| = |z| \\cdot |w|$: der Betrag eines Produkts ist das Produkt der Einzelbeträge. Es ist $|6+2\\mathrm{i}| = \\sqrt{36+4} = \\sqrt{40}$ und $|2+\\mathrm{i}| = \\sqrt{4+1} = \\sqrt{5}$. Multipliziert ergibt $\\sqrt{40}\\cdot\\sqrt{5} = \\sqrt{200} = 10\\sqrt{2}$ (denn $\\sqrt{200} = \\sqrt{100\\cdot 2} = 10\\sqrt{2}$).\n\n' +
      '(c) $\\left|\\dfrac{\\sqrt{3}}{2} - \\dfrac{1}{2}\\mathrm{i}\\right|^{15} = 1^{15} = 1$.\n' +
      '**Kommentar:** Die Basis $\\frac{\\sqrt{3}}{2} - \\frac{1}{2}\\mathrm{i}$ hat den Betrag $1$ (sie liegt auf dem Einheitskreis, denn $\\frac{3}{4} + \\frac{1}{4} = 1$). Mit $|z^n| = |z|^n$ folgt $|z|^{15} = 1^{15} = 1$ – eine Zahl vom Betrag $1$ behält ihren Betrag $1$ in jeder Potenz.',
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
    ],
    loesung: '',
    loesungSections: [
      { graphId: 'b2_a3' },
      {
        text:
          '**Lösungsweg**\n' +
          'Für jede Zahl bestimmen wir den Betrag $r$ und den Winkel $\\varphi$ und setzen beides in die Polarform $z = r\\,e^{\\mathrm{i}\\varphi}$ ein. Die $\\arccos$-Werte lesen wir aus der Wertetabelle der Standardwinkel ab.\n\n' +
          '**Teil (a)**\n' +
          'Gesucht ist die Polarform von $z_1 = -2 - 2\\mathrm{i}$.\n\n' +
          '1.) $r_1 = |z_1| = \\sqrt{(-2)^2 + (-2)^2} = \\sqrt{8} = 2\\sqrt{2}$\n' +
          '**Kommentar:** $r_1$ ist der Betrag, also der Abstand von $z_1$ zum Ursprung. Nach Pythagoras nimmt man die Wurzel aus $\\mathrm{Re}^2 + \\mathrm{Im}^2 = (-2)^2 + (-2)^2 = 8$. Dabei ist $\\sqrt{8} = \\sqrt{4 \\cdot 2} = 2\\sqrt{2}$ (die $4$ wird als $2$ aus der Wurzel gezogen).\n\n' +
          '2.) $\\cos(\\varphi_1) = \\frac{\\mathrm{Re}(z_1)}{|z_1|} = \\frac{-2}{2\\sqrt{2}} = -\\frac{\\sqrt{2}}{2}$; da $\\mathrm{Im}(z_1) = -2 < 0$ ist, ist $\\varphi_1 = 2\\pi - \\arccos\\!\\left(-\\frac{\\sqrt{2}}{2}\\right) = 2\\pi - \\dfrac{3\\pi}{4} = \\dfrac{5\\pi}{4}$.\n' +
          '**Kommentar:** Den Winkel findet man über seinen Kosinus $\\cos\\varphi = \\frac{\\mathrm{Re}(z)}{r}$. Der $\\arccos$ liefert aber nur Winkel zwischen $0$ und $\\pi$ (obere Halbebene). Weil $\\mathrm{Im}(z_1)$ negativ ist, liegt $z_1$ in der unteren Halbebene, deshalb spiegelt man mit $2\\pi - \\arccos(\\ldots)$. Den Wert $\\arccos\\!\\left(-\\frac{\\sqrt{2}}{2}\\right) = \\frac{3\\pi}{4}$ liest man aus der Wertetabelle ab.\n\n' +
          'Somit ist $z_1 = r_1 e^{\\mathrm{i}\\varphi_1} = 2\\sqrt{2}\\,e^{\\mathrm{i}\\frac{5\\pi}{4}}$.\n' +
          '**Kommentar:** Betrag $r_1$ und Winkel $\\varphi_1$ werden in die Polarform $z = r\\,e^{\\mathrm{i}\\varphi}$ eingesetzt – das ist das Endergebnis für (a).\n\n' +
          '**Teil (b)**\n' +
          'Gesucht ist die Polarform von $z_2 = -3\\mathrm{i}$.\n\n' +
          '1.) $r_2 = |z_2| = \\sqrt{(0)^2 + (-3)^2} = \\sqrt{9} = 3$\n' +
          '**Kommentar:** $z_2 = -3\\mathrm{i}$ hat Realteil $0$ und Imaginärteil $-3$. Der Betrag ist $\\sqrt{0^2 + (-3)^2} = \\sqrt{9} = 3$.\n\n' +
          '2.) $\\cos(\\varphi_2) = \\frac{\\mathrm{Re}(z_2)}{|z_2|} = \\frac{0}{3} = 0$; da $\\mathrm{Im}(z_2) = -3 < 0$ ist, ist $\\varphi_2 = 2\\pi - \\arccos(0) = 2\\pi - \\dfrac{\\pi}{2} = \\dfrac{3\\pi}{2}$.\n' +
          '**Kommentar:** $\\cos\\varphi = 0$ bedeutet, der Winkel zeigt senkrecht (gerade nach oben oder unten). Weil $\\mathrm{Im}(z_2) < 0$ ist, zeigt er nach unten: $2\\pi - \\arccos(0) = \\frac{3\\pi}{2}$. Das passt, denn $\\frac{3\\pi}{2}$ ist die negative imaginäre Achse – genau dort liegt $-3\\mathrm{i}$.\n\n' +
          'Somit ist $z_2 = r_2 e^{\\mathrm{i}\\varphi_2} = 3\\,e^{\\mathrm{i}\\frac{3\\pi}{2}}$.\n' +
          '**Kommentar:** Einsetzen von $r_2 = 3$ und $\\varphi_2 = \\frac{3\\pi}{2}$ in die Polarform – Endergebnis für (b).\n\n' +
          '**Teil (c)**\n' +
          'Gesucht ist die Polarform von $z_3 = \\frac{\\sqrt{3}}{2} + \\frac{1}{2}\\mathrm{i}$.\n\n' +
          '1.) $r_3 = |z_3| = \\sqrt{\\left(\\frac{\\sqrt{3}}{2}\\right)^2 + \\left(\\frac{1}{2}\\right)^2} = \\sqrt{\\frac{3}{4} + \\frac{1}{4}} = 1$\n' +
          '**Kommentar:** Es ist $\\left(\\frac{\\sqrt{3}}{2}\\right)^2 = \\frac{3}{4}$ und $\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$; zusammen $\\frac{3}{4} + \\frac{1}{4} = 1$, und $\\sqrt{1} = 1$. $z_3$ liegt also auf dem Einheitskreis (Betrag genau $1$).\n\n' +
          '2.) $\\cos(\\varphi_3) = \\frac{\\mathrm{Re}(z_3)}{|z_3|} = \\frac{\\frac{\\sqrt{3}}{2}}{1} = \\frac{\\sqrt{3}}{2}$; da $\\mathrm{Im}(z_3) = \\frac{1}{2} > 0$ ist, ist $\\varphi_3 = \\arccos\\!\\left(\\frac{\\sqrt{3}}{2}\\right) = \\dfrac{\\pi}{6}$.\n' +
          '**Kommentar:** Hier ist $\\mathrm{Im}(z_3) = \\frac{1}{2} > 0$ (obere Halbebene), deshalb braucht man kein $2\\pi - \\ldots$, sondern nimmt den $\\arccos$ direkt. $\\arccos\\!\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{\\pi}{6}$ stammt aus der Wertetabelle.\n\n' +
          'Somit ist $z_3 = r_3 e^{\\mathrm{i}\\varphi_3} = 1 \\cdot e^{\\mathrm{i}\\frac{\\pi}{6}} = e^{\\mathrm{i}\\frac{\\pi}{6}}$.\n' +
          '**Kommentar:** Weil $r_3 = 1$ ist, fällt der Vorfaktor weg – das Endergebnis für (c) ist $e^{\\mathrm{i}\\frac{\\pi}{6}}$.\n\n' +
          '**Teil (d)**\n' +
          'Gesucht ist die Polarform von $z_4 = 1 - \\sqrt{3}\\,\\mathrm{i}$.\n\n' +
          '1.) $r_4 = |z_4| = \\sqrt{1^2 + (-\\sqrt{3})^2} = \\sqrt{1 + 3} = 2$\n' +
          '**Kommentar:** $z_4$ hat Realteil $1$ und Imaginärteil $-\\sqrt{3}$. Es ist $(-\\sqrt{3})^2 = 3$, also $\\sqrt{1 + 3} = \\sqrt{4} = 2$.\n\n' +
          '2.) $\\cos(\\varphi_4) = \\frac{\\mathrm{Re}(z_4)}{|z_4|} = \\frac{1}{2}$; da $\\mathrm{Im}(z_4) = -\\sqrt{3} < 0$ ist, ist $\\varphi_4 = 2\\pi - \\arccos\\!\\left(\\frac{1}{2}\\right) = 2\\pi - \\dfrac{\\pi}{3} = \\dfrac{5\\pi}{3}$.\n' +
          '**Kommentar:** $\\cos\\varphi = \\frac{1}{2}$, und weil $\\mathrm{Im}(z_4) < 0$ ist, liegt $z_4$ in der unteren Halbebene: $2\\pi - \\arccos\\!\\left(\\frac{1}{2}\\right) = 2\\pi - \\frac{\\pi}{3} = \\frac{5\\pi}{3}$. Der Wert $\\arccos\\!\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{3}$ stammt aus der Wertetabelle.\n\n' +
          'Somit ist $z_4 = r_4 e^{\\mathrm{i}\\varphi_4} = 2\\,e^{\\mathrm{i}\\frac{5\\pi}{3}}$.\n' +
          '**Kommentar:** Einsetzen von $r_4 = 2$ und $\\varphi_4 = \\frac{5\\pi}{3}$ in die Polarform – Endergebnis für (d).',
      },
    ],
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
    ],
    loesung: '',
    loesungSections: [
      { graphId: 'b2_a4' },
      {
        text:
          '(a) $z_1 = e^{\\mathrm{i}\\frac{\\pi}{2}} = \\cos\\frac{\\pi}{2} + \\mathrm{i}\\sin\\frac{\\pi}{2} = \\mathrm{i}$\n' +
          '**Kommentar:** Mit der Eulerschen Formel $e^{\\mathrm{i}\\varphi} = \\cos\\varphi + \\mathrm{i}\\sin\\varphi$ setzt man $\\varphi = \\frac{\\pi}{2}$ ein. Es ist $\\cos\\frac{\\pi}{2} = 0$ und $\\sin\\frac{\\pi}{2} = 1$, also $z_1 = 0 + \\mathrm{i}\\cdot 1 = \\mathrm{i}$. Der Betrag ist $1$, daher kein Vorfaktor.\n\n' +
          '(b) $z_2 = 2e^{\\mathrm{i}\\cdot2\\pi}$: vollständige Umdrehung → $e^{2\\pi\\mathrm{i}}=1$,  $z_2 = 2$\n' +
          '**Kommentar:** Der Winkel $2\\pi$ ist eine volle Umdrehung – man landet wieder am Start, also $e^{\\mathrm{i}\\cdot 2\\pi} = \\cos 2\\pi + \\mathrm{i}\\sin 2\\pi = 1$. Mit dem Vorfaktor $r = 2$ ist $z_2 = 2 \\cdot 1 = 2$.\n\n' +
          '(c) Winkel: $\\frac{15\\pi}{4} - 2\\pi = \\frac{7\\pi}{4}$  →  $z_3 = \\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2}\\,\\mathrm{i}$\n' +
          '**Kommentar:** Der Winkel $\\frac{15\\pi}{4}$ ist größer als $2\\pi$, deshalb zieht man eine volle Umdrehung $2\\pi = \\frac{8\\pi}{4}$ ab: $\\frac{15\\pi}{4} - \\frac{8\\pi}{4} = \\frac{7\\pi}{4}$ (gleiche Richtung, gleicher Wert). Bei $\\frac{7\\pi}{4}$ ist $\\cos = \\frac{\\sqrt{2}}{2}$ und $\\sin = -\\frac{\\sqrt{2}}{2}$, und mit $r = 1$ folgt $z_3 = \\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2}\\mathrm{i}$.\n\n' +
          '(d) Winkel: $-\\frac{7\\pi}{2} + 4\\pi = \\frac{\\pi}{2}$  →  $z_4 = 3\\mathrm{i}$\n' +
          '**Kommentar:** Der Winkel $-\\frac{7\\pi}{2}$ ist negativ, deshalb addiert man volle Umdrehungen ($2\\pi$), hier zweimal, also $4\\pi = \\frac{8\\pi}{2}$: $-\\frac{7\\pi}{2} + \\frac{8\\pi}{2} = \\frac{\\pi}{2}$. Bei $\\frac{\\pi}{2}$ ist $\\cos = 0$ und $\\sin = 1$, und mit $r = 3$ folgt $z_4 = 3\\mathrm{i}$.',
      },
    ],
    schwierigkeit: 'mittel',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b2_a5a',
    titel: 'Potenzen von $\\mathrm{i}$',
    aufgabeText:
      'Bestimmen Sie $\\mathrm{i}^2$, $\\mathrm{i}^3$, $\\mathrm{i}^4$, $\\mathrm{i}^5$ und geben Sie eine Formel zur Berechnung von $\\mathrm{i}^n$, $n \\in \\mathbb{N}$ an. Hinweis: $\\mathrm{i}^0 := 1$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Die Potenzen von $\\mathrm{i}$ folgen einem 4er-Zyklus:\n' +
          '  $\\mathrm{i}^0 = 1$,  $\\mathrm{i}^1 = \\mathrm{i}$,  $\\mathrm{i}^2 = -1$,  $\\mathrm{i}^3 = -\\mathrm{i}$,  $\\mathrm{i}^4 = 1$,  $\\mathrm{i}^5 = \\mathrm{i}$, …\n' +
          '  Nach 4 Schritten ist man wieder am Anfang. Daher: $\\mathrm{i}^n$ hängt nur vom Rest $n \\bmod 4$ ab.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Schritt-für-Schritt Potenzen berechnen:\n' +
          '  $\\mathrm{i}^1 = \\mathrm{i}$\n' +
          '  $\\mathrm{i}^2 = \\mathrm{i} \\cdot \\mathrm{i} = -1$ (Definition!)\n' +
          '  $\\mathrm{i}^3 = \\mathrm{i}^2 \\cdot \\mathrm{i} = (-1)\\cdot\\mathrm{i} = -\\mathrm{i}$\n' +
          '  $\\mathrm{i}^4 = \\mathrm{i}^2 \\cdot \\mathrm{i}^2 = (-1)(-1) = 1$\n' +
          '  $\\mathrm{i}^5 = \\mathrm{i}^4 \\cdot \\mathrm{i} = 1 \\cdot \\mathrm{i} = \\mathrm{i}$\n\n' +
          'Formel: Berechne $r = n \\bmod 4$ (Rest bei Division durch 4):\n' +
          '  $r=0$: $\\mathrm{i}^n=1$;  $r=1$: $\\mathrm{i}^n=\\mathrm{i}$;  $r=2$: $\\mathrm{i}^n=-1$;  $r=3$: $\\mathrm{i}^n=-\\mathrm{i}$',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Große Potenzen über den Rest $n \\bmod 4$ berechnen:\n' +
          '  $\\mathrm{i}^{15}$: wegen $15 = 3\\cdot 4 + 3$ ist $15 \\bmod 4 = 3$, also $\\mathrm{i}^{15} = \\mathrm{i}^3 = -\\mathrm{i}$\n' +
          '  $\\mathrm{i}^{100}$: $100 \\bmod 4 = 0$, also $\\mathrm{i}^{100} = 1$\n' +
          '  $\\mathrm{i}^{42}$: $42 \\bmod 4 = 2$, also $\\mathrm{i}^{42} = -1$\n\n' +
          'Merkschema (Zyklus der Länge 4): $1,\\ \\mathrm{i},\\ -1,\\ -\\mathrm{i},\\ 1,\\ \\mathrm{i},\\ -1,\\ -\\mathrm{i},\\ \\ldots$',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• $\\mathrm{i}^4 = 1$, NICHT $\\mathrm{i}^4 = -1$ oder $\\mathrm{i}$! Der Zyklus ist $1, \\mathrm{i}, -1, -\\mathrm{i}, 1, \\mathrm{i}, \\ldots$\n\n' +
          '• Für $n = 0$: $\\mathrm{i}^0 = 1$ per Definition (wie bei jeder Zahl außer 0).',
      },
    ],
    loesung:
      '$\\mathrm{i}^2 = -1$, $\\mathrm{i}^3 = -\\mathrm{i}$, $\\mathrm{i}^4 = 1$, $\\mathrm{i}^5 = \\mathrm{i}$.\n' +
      '$\\mathrm{i}^n = \\begin{cases} 1 & n \\equiv 0 \\pmod{4} \\\\ \\mathrm{i} & n \\equiv 1 \\pmod{4} \\\\ -1 & n \\equiv 2 \\pmod{4} \\\\ -\\mathrm{i} & n \\equiv 3 \\pmod{4} \\end{cases}$\n' +
      '**Kommentar:** Ausgangspunkt ist $\\mathrm{i}^2 = -1$ (Definition). Jede höhere Potenz ist die vorherige mal $\\mathrm{i}$: $\\mathrm{i}^3 = \\mathrm{i}^2\\cdot\\mathrm{i} = -\\mathrm{i}$, $\\mathrm{i}^4 = (-1)(-1) = 1$, $\\mathrm{i}^5 = \\mathrm{i}^4\\cdot\\mathrm{i} = \\mathrm{i}$. Ab $\\mathrm{i}^4 = 1$ wiederholt sich der Zyklus alle $4$ Schritte. Deshalb hängt $\\mathrm{i}^n$ nur vom Rest $n \\bmod 4$ ab – genau das beschreibt die Fallunterscheidung ($n \\equiv r \\pmod 4$ heißt: $n$ hat bei Division durch $4$ den Rest $r$).',
    schwierigkeit: 'mittel',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b2_a5b',
    titel: 'Eulersche Formel über Potenzreihen',
    aufgabeText:
      'Sei $\\varphi \\in \\mathbb{R}$. Überlegen Sie anhand der Reihendarstellungen der Exponential-, Sinus- und Cosinusfunktion, dass $\\exp(\\mathrm{i}\\varphi)$ die gleichen Summanden wie $\\cos(\\varphi) + \\mathrm{i}\\sin(\\varphi)$ hat.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          '**Das Ziel:** Zeige, dass $\\exp(\\mathrm{i}\\varphi)$ dieselbe Summe ergibt wie $\\cos(\\varphi) + \\mathrm{i}\\sin(\\varphi)$. Die Idee: Man schreibt die Funktionen als Potenzreihe (unendliche Summe von Potenzen) und vergleicht die Summanden Stück für Stück.\n\n' +
          'Diese drei Reihen darfst du als bekannt voraussetzen:\n' +
          '  $\\exp(x) = \\sum_{k=0}^{\\infty} \\dfrac{x^k}{k!} = 1 + x + \\dfrac{x^2}{2!} + \\dfrac{x^3}{3!} + \\dfrac{x^4}{4!} + \\ldots$  — alle Potenzen\n' +
          '  $\\cos(x) = 1 - \\dfrac{x^2}{2!} + \\dfrac{x^4}{4!} - \\ldots$  — nur gerade Potenzen, Vorzeichen wechselt\n' +
          '  $\\sin(x) = x - \\dfrac{x^3}{3!} + \\dfrac{x^5}{5!} - \\ldots$  — nur ungerade Potenzen, Vorzeichen wechselt\n\n' +
          'Erinnerung: $k!$ („k Fakultät") ist $1\\cdot 2\\cdot 3 \\cdots k$, z. B. $3! = 6$, und $0! = 1$.\n\n' +
          'Der ganze Beweis lebt davon, dass $\\mathrm{i}$ beim Potenzieren im 4er-Takt kreist: $\\mathrm{i}^0=1$, $\\mathrm{i}^1=\\mathrm{i}$, $\\mathrm{i}^2=-1$, $\\mathrm{i}^3=-\\mathrm{i}$, $\\mathrm{i}^4=1$, … Genau dieses Muster zerlegt die eine $\\exp$-Reihe in die zwei Reihen von $\\cos$ und $\\sin$.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '**Schritt 1 – Einsetzen:** Ersetze in der Exponentialreihe das Argument durch $z = \\mathrm{i}\\varphi$:  $\\exp(\\mathrm{i}\\varphi) = \\sum_{k=0}^{\\infty} \\dfrac{(\\mathrm{i}\\varphi)^k}{k!}$.\n\n' +
          '**Schritt 2 – Potenz aufspalten:** Es ist $(\\mathrm{i}\\varphi)^k = \\mathrm{i}^k \\cdot \\varphi^k$. Der Faktor $\\mathrm{i}^k$ entscheidet, ob ein Summand reell (ohne $\\mathrm{i}$) oder imaginär (mit $\\mathrm{i}$) ist.\n\n' +
          '**Schritt 3 – Potenzen von i einsetzen:** Für gerade Exponenten gilt $\\mathrm{i}^{2k} = (-1)^k$, für ungerade $\\mathrm{i}^{2k+1} = (-1)^k\\,\\mathrm{i}$. Das erzeugt die wechselnden Vorzeichen.\n\n' +
          '**Schritt 4 – Sortieren:** Teile die Summe in Summanden mit geradem Index ($k=0,2,4,\\ldots$) und ungeradem Index ($k=1,3,5,\\ldots$).\n\n' +
          '**Schritt 5 – Erkennen:** Die geraden Summanden sind reell und bilden die Reihe von $\\cos(\\varphi)$. Aus den ungeraden klammerst du $\\mathrm{i}$ aus und erhältst $\\mathrm{i}\\sin(\\varphi)$. Zusammen: $\\cos(\\varphi)+\\mathrm{i}\\sin(\\varphi)$.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Wir rechnen die ersten Summanden von $\\exp(\\mathrm{i}\\varphi) = \\sum_{k=0}^{\\infty} \\dfrac{(\\mathrm{i}\\varphi)^k}{k!}$ einzeln aus und benutzen $(\\mathrm{i}\\varphi)^k = \\mathrm{i}^k \\varphi^k$:\n' +
          '  $k=0$: $\\dfrac{\\mathrm{i}^0\\varphi^0}{0!} = 1$\n' +
          '  $k=1$: $\\dfrac{\\mathrm{i}^1\\varphi^1}{1!} = \\mathrm{i}\\varphi$\n' +
          '  $k=2$: $\\dfrac{\\mathrm{i}^2\\varphi^2}{2!} = -\\dfrac{\\varphi^2}{2!}$  (wegen $\\mathrm{i}^2 = -1$)\n' +
          '  $k=3$: $\\dfrac{\\mathrm{i}^3\\varphi^3}{3!} = -\\dfrac{\\mathrm{i}\\varphi^3}{3!}$  (wegen $\\mathrm{i}^3 = -\\mathrm{i}$)\n' +
          '  $k=4$: $\\dfrac{\\mathrm{i}^4\\varphi^4}{4!} = +\\dfrac{\\varphi^4}{4!}$  (wegen $\\mathrm{i}^4 = 1$)\n' +
          '  $k=5$: $\\dfrac{\\mathrm{i}^5\\varphi^5}{5!} = +\\dfrac{\\mathrm{i}\\varphi^5}{5!}$  (wegen $\\mathrm{i}^5 = \\mathrm{i}$)\n\n' +
          'Alles zusammengeschrieben:\n' +
          '  $\\exp(\\mathrm{i}\\varphi) = 1 + \\mathrm{i}\\varphi - \\dfrac{\\varphi^2}{2!} - \\dfrac{\\mathrm{i}\\varphi^3}{3!} + \\dfrac{\\varphi^4}{4!} + \\dfrac{\\mathrm{i}\\varphi^5}{5!} - \\ldots$\n\n' +
          'Jetzt nach reell und imaginär sortieren:\n' +
          '  reelle Terme (ohne $\\mathrm{i}$): $1 - \\dfrac{\\varphi^2}{2!} + \\dfrac{\\varphi^4}{4!} - \\ldots = \\cos(\\varphi)$\n' +
          '  imaginäre Terme ($\\mathrm{i}$ ausklammern): $\\mathrm{i}\\left(\\varphi - \\dfrac{\\varphi^3}{3!} + \\dfrac{\\varphi^5}{5!} - \\ldots\\right) = \\mathrm{i}\\sin(\\varphi)$\n\n' +
          'Ergebnis: $\\exp(\\mathrm{i}\\varphi) = \\cos(\\varphi) + \\mathrm{i}\\sin(\\varphi)$ ✓',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Das $\\mathrm{i}$ mitpotenzieren: $(\\mathrm{i}\\varphi)^k = \\mathrm{i}^k \\cdot \\varphi^k$, nicht nur $\\varphi^k$. Erst das $\\mathrm{i}^k$ erzeugt die Vorzeichen und die Aufteilung in zwei Reihen.\n\n' +
          '• Gerade und ungerade Potenzen vertauschen: gerade Potenzen sind reell und gehören zu $\\cos$, ungerade tragen den Faktor $\\mathrm{i}$ und gehören zu $\\sin$.\n\n' +
          '• Vorzeichen falsch: $\\mathrm{i}^2 = -1$ (nicht $+1$). Daraus entsteht das Muster $+,-,+,-$ in beiden Reihen.\n\n' +
          '• Das $\\mathrm{i}$ bei $\\sin$ vergessen auszuklammern: $\\mathrm{i}\\varphi - \\dfrac{\\mathrm{i}\\varphi^3}{3!} + \\ldots = \\mathrm{i}\\sin(\\varphi)$, also steht am Ende $\\mathrm{i}\\sin(\\varphi)$ und nicht $\\sin(\\varphi)$.',
      },
    ],
    loesung:
      '**Schritt 1 – In die Exponentialreihe einsetzen**\n' +
      'Setze $z = \\mathrm{i}\\varphi$ in $\\exp(z) = \\sum_{k=0}^{\\infty} \\dfrac{z^k}{k!}$ ein:\n' +
      '$\\exp(\\mathrm{i}\\varphi) = \\sum_{k=0}^{\\infty} \\dfrac{(\\mathrm{i}\\varphi)^k}{k!} = 1 + \\mathrm{i}\\varphi + \\dfrac{(\\mathrm{i}\\varphi)^2}{2!} + \\dfrac{(\\mathrm{i}\\varphi)^3}{3!} + \\dfrac{(\\mathrm{i}\\varphi)^4}{4!} + \\ldots$\n' +
      '**Kommentar:** Mehr passiert hier nicht – das Argument der bekannten Reihe ist jetzt $\\mathrm{i}\\varphi$ statt $x$.\n\n' +
      '**Schritt 2 – Potenzen von i ausrechnen**\n' +
      'Wegen $(\\mathrm{i}\\varphi)^k = \\mathrm{i}^k\\varphi^k$ und $\\mathrm{i}^2 = -1$, $\\mathrm{i}^3 = -\\mathrm{i}$, $\\mathrm{i}^4 = 1$, $\\mathrm{i}^5 = \\mathrm{i}$, … wird daraus:\n' +
      '$\\exp(\\mathrm{i}\\varphi) = 1 + \\mathrm{i}\\varphi - \\dfrac{\\varphi^2}{2!} - \\dfrac{\\mathrm{i}\\varphi^3}{3!} + \\dfrac{\\varphi^4}{4!} + \\dfrac{\\mathrm{i}\\varphi^5}{5!} - \\ldots$\n' +
      '**Kommentar:** Jeder Summand erhält seinen Faktor $\\mathrm{i}^k$. Der 4er-Zyklus von $\\mathrm{i}$ erzeugt die Vorzeichenfolge $+,-,+,-$ und sorgt dafür, dass genau jeder zweite Summand ein $\\mathrm{i}$ trägt.\n\n' +
      '**Schritt 3 – Nach reell und imaginär sortieren**\n' +
      'reelle Summanden (gerade Potenzen): $1 - \\dfrac{\\varphi^2}{2!} + \\dfrac{\\varphi^4}{4!} - \\ldots = \\cos(\\varphi)$\n' +
      'imaginäre Summanden ($\\mathrm{i}$ ausklammern): $\\mathrm{i}\\left(\\varphi - \\dfrac{\\varphi^3}{3!} + \\dfrac{\\varphi^5}{5!} - \\ldots\\right) = \\mathrm{i}\\sin(\\varphi)$\n' +
      '**Kommentar:** Die Summanden ohne $\\mathrm{i}$ bilden Stück für Stück die Reihe von $\\cos(\\varphi)$. Bei den Summanden mit $\\mathrm{i}$ klammert man das $\\mathrm{i}$ aus; in der Klammer steht dann genau die Reihe von $\\sin(\\varphi)$.\n\n' +
      '**Schritt 4 – Ergebnis**\n' +
      '$\\exp(\\mathrm{i}\\varphi) = \\cos(\\varphi) + \\mathrm{i}\\sin(\\varphi)$\n' +
      '**Kommentar:** Beide Seiten haben Summand für Summand denselben Wert – damit ist die Eulersche Formel gezeigt.',
    schwierigkeit: 'schwer',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b2_a6a',
    titel: 'Konvergenz: $\\varepsilon$-Umgebungen',
    aufgabeText:
      'Eine komplexe Zahlenfolge ist eine Abbildung von $\\mathbb{N}$ nach $\\mathbb{C}$. Die Konvergenz ist analog zur Konvergenz reeller Zahlenfolgen definiert, das heißt, eine komplexe Zahlenfolge $(z_n)$ konvergiert gegen $z \\in \\mathbb{C}$, falls zu jedem $\\varepsilon > 0$ ein $N \\in \\mathbb{N}$ existiert, so dass für alle $n \\geq N$ gilt: $|z_n - z| < \\varepsilon$.\n\n' +
      'Sei $\\varepsilon > 0$. Wie sieht für $z \\in \\mathbb{C}$ die Menge $\\{w \\in \\mathbb{C} : |w - z| < \\varepsilon\\}$ aus? Wie sieht für $x \\in \\mathbb{R}$ die Menge $\\{y \\in \\mathbb{R} : |y - x| < \\varepsilon\\}$ aus?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          '**Was ist gefragt?** Du sollst beschreiben (am besten skizzieren), wie die Menge aller Punkte aussieht, die von einem festen Punkt einen Abstand kleiner als $\\varepsilon$ haben – einmal in der komplexen Ebene $\\mathbb{C}$, einmal auf der reellen Zahlengerade $\\mathbb{R}$. So eine Menge heißt $\\varepsilon$-Umgebung des Punktes.\n\n' +
          '**Der Abstand:** $|w - z|$ ist der Abstand zwischen den Punkten $w$ und $z$. Die Bedingung $|w - z| < \\varepsilon$ heißt also einfach: $w$ liegt näher als $\\varepsilon$ an $z$.\n\n' +
          '**Warum ist das wichtig? (Konvergenz)** Eine Folge $(z_n)$ konvergiert gegen einen Grenzwert $z$, wenn ihre Glieder $z$ beliebig nahe kommen und nahe bleiben. „Nahe" wird mit $|z_n - z| < \\varepsilon$ gemessen – und das bedeutet genau: $z_n$ liegt in der $\\varepsilon$-Umgebung von $z$. Konvergenz heißt also anschaulich: Egal wie klein du diese Umgebung machst, ab einem Index liegen ALLE Folgenglieder darin. Diese Aufgabe klärt, wie diese „Umgebung" überhaupt aussieht.\n\n' +
          '**Worauf es ankommt:** Entscheidend ist der Raum:\n' +
          '  • in $\\mathbb{C}$ (Ebene, 2 Dimensionen) → die Punkte bilden eine Fläche: eine Kreisscheibe.\n' +
          '  • in $\\mathbb{R}$ (Zahlengerade, 1 Dimension) → die Punkte bilden eine Strecke: ein Intervall.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '**Schritt 1 – Bedingung verstehen:** Die Ungleichung verlangt „Abstand zum festen Punkt kleiner als $\\varepsilon$". Gesucht ist die Menge ALLER Punkte, die das erfüllen.\n\n' +
          '**Schritt 2 – Komplexe Ebene:** In der Ebene gibt es Abstand in alle Richtungen. Alle Punkte mit Abstand $< \\varepsilon$ von $z$ füllen eine Kreisscheibe um $z$ mit Radius $\\varepsilon$.\n\n' +
          '**Schritt 3 – Reelle Zahlengerade:** Hier gibt es nur links und rechts. Alle Punkte mit Abstand $< \\varepsilon$ von $x$ bilden das Stück von $x-\\varepsilon$ bis $x+\\varepsilon$, also das Intervall $(x-\\varepsilon, x+\\varepsilon)$.\n\n' +
          '**Schritt 4 – Offen oder abgeschlossen?** Weil $<$ (und nicht $\\leq$) verlangt wird, gehört der Rand NICHT dazu: die Kreislinie bzw. die beiden Endpunkte fehlen. Die Menge ist offen.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Beispiel in $\\mathbb{C}$ mit $z = 1 + \\mathrm{i}$ und $\\varepsilon = 0{,}5$:\n' +
          '  $\\{w \\in \\mathbb{C} : |w - (1+\\mathrm{i})| < 0{,}5\\}$ = offene Kreisscheibe um den Punkt $(1,\\, 1)$ mit Radius $0{,}5$.\n' +
          '  Test: Liegt $w = 1{,}2 + \\mathrm{i}$ drin? Abstand $|w - z| = |0{,}2| = 0{,}2 < 0{,}5$ → ja.\n\n' +
          'Beispiel in $\\mathbb{R}$ mit $x = 3$ und $\\varepsilon = 0{,}5$:\n' +
          '  $\\{y \\in \\mathbb{R} : |y - 3| < 0{,}5\\}$ = offenes Intervall $(2{,}5,\\ 3{,}5)$.\n' +
          '  Test: $y = 3{,}4$ liegt drin (Abstand $0{,}4$), $y = 3{,}5$ nicht (genau auf dem Rand, und $<$ ist echt).\n\n' +
          'Merke: dieselbe Bedingung „Abstand $< \\varepsilon$", aber in $\\mathbb{C}$ eine Fläche, in $\\mathbb{R}$ eine Strecke.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Rand mitnehmen: Wegen $<$ (nicht $\\leq$) ist die Menge OFFEN – der Kreisrand bzw. die Intervallgrenzen gehören nicht dazu.\n\n' +
          '• Dimension verwechseln: In $\\mathbb{C}$ ist es eine Kreisscheibe (Fläche), in $\\mathbb{R}$ ein Intervall (Strecke) – nicht gleich behandeln.\n\n' +
          '• $|w - z|$ ist ein Abstand, also immer $\\geq 0$; er beschreibt keine Richtung, nur „wie weit weg".\n\n' +
          '• Den Sinn übersehen: Diese $\\varepsilon$-Umgebung ist genau der „Toleranzkreis" aus der Konvergenz-Definition $|z_n - z| < \\varepsilon$.',
      },
    ],
    loesung: '',
    loesungSections: [
      {
        text:
          '**Die Menge in der komplexen Ebene**\n' +
          '$\\{w \\in \\mathbb{C} : |w - z| < \\varepsilon\\}$ = offene Kreisscheibe mit Mittelpunkt $z$ und Radius $\\varepsilon$.\n' +
          '**Kommentar:** $|w - z|$ ist der Abstand von $w$ zu $z$. „Abstand $< \\varepsilon$" erfüllen in der Ebene alle Punkte, die innerhalb des Kreises um $z$ mit Radius $\\varepsilon$ liegen – also die ganze Kreisfläche. Wegen $<$ (nicht $\\leq$) gehört die Kreislinie nicht dazu: die Scheibe ist offen.\n\n' +
          '**Die Menge auf der reellen Zahlengerade**\n' +
          '$\\{y \\in \\mathbb{R} : |y - x| < \\varepsilon\\}$ = offenes Intervall $(x - \\varepsilon,\\ x + \\varepsilon)$.\n' +
          '**Kommentar:** Auf der Zahlengerade gibt es nur zwei Richtungen. „Abstand von $x$ kleiner als $\\varepsilon$" erfüllen genau die Zahlen zwischen $x-\\varepsilon$ und $x+\\varepsilon$. Die beiden Endpunkte fehlen (offen), weil der Abstand echt kleiner als $\\varepsilon$ sein muss.',
      },
      {
        text: 'So sehen die beiden Mengen schematisch aus (Beispiel, der Rand ist gestrichelt bzw. hohl, weil er nicht dazugehört):',
      },
      { graphId: 'b2_a6a' },
      {
        text:
          '**Zusammenhang mit Konvergenz**\n' +
          'Beide Mengen sind dieselbe Idee – die $\\varepsilon$-Umgebung von $z$ bzw. $x$ – nur in $\\mathbb{C}$ als Fläche und in $\\mathbb{R}$ als Strecke.\n' +
          '**Kommentar:** Genau diese Umgebung steckt in der Konvergenz-Definition: $|z_n - z| < \\varepsilon$ heißt „$z_n$ liegt in der $\\varepsilon$-Umgebung von $z$". Eine Folge konvergiert gegen $z$, wenn ab einem Index alle Glieder in jeder noch so kleinen solchen Umgebung liegen.',
      },
    ],
    schwierigkeit: 'mittel',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b2_a6b',
    titel: 'Konvergenz konkreter Folgen',
    aufgabeText:
      'Eine komplexe Zahlenfolge ist eine Abbildung von $\\mathbb{N}$ nach $\\mathbb{C}$. Die Konvergenz ist analog zur Konvergenz reeller Zahlenfolgen definiert, das heißt, eine komplexe Zahlenfolge $(z_n)$ konvergiert gegen $z \\in \\mathbb{C}$, falls zu jedem $\\varepsilon > 0$ ein $N \\in \\mathbb{N}$ existiert, so dass für alle $n \\geq N$ gilt: $|z_n - z| < \\varepsilon$.\n\n' +
      'Seien nun $z_n = \\mathrm{i}^n$ und $w_n = \\left(\\tfrac{1}{2} + \\tfrac{1}{2}\\,\\mathrm{i}\\right)^n$. Welche der Folgen $(z_n)$, $(|z_n|)$ und $(w_n)$ konvergiert? Was ist im Falle von Konvergenz der Grenzwert?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          '**Was ist eine Folge?** Eine Zahlenfolge ist eine unendliche, durchnummerierte Liste $z_1, z_2, z_3, \\ldots$ – zu jedem Index $n \\in \\mathbb{N}$ gehört ein Wert $z_n$ (hier eine komplexe Zahl).\n\n' +
          '**Was bedeutet Konvergenz?** Die Folge $(z_n)$ konvergiert gegen eine feste Zahl $z$ (den Grenzwert), wenn die Glieder $z_n$ dem Wert $z$ für wachsendes $n$ beliebig nahe kommen und auch nahe bleiben. Bild dazu: Egal wie klein du einen Kreis um $z$ zeichnest – ab irgendeinem Index liegen ALLE weiteren Glieder in diesem Kreis.\n\n' +
          '**Die Definition Wort für Wort:** „Zu jedem $\\varepsilon > 0$ gibt es ein $N$, sodass für alle $n \\geq N$ gilt $|z_n - z| < \\varepsilon$."\n' +
          '  • $\\varepsilon$ = die erlaubte Toleranz (Radius des Kreises um $z$), beliebig klein.\n' +
          '  • $N$ = ab welchem Index es klappen muss (darf von $\\varepsilon$ abhängen).\n' +
          '  • $|z_n - z| < \\varepsilon$ = der Abstand von $z_n$ zum Grenzwert ist kleiner als $\\varepsilon$.\n\n' +
          '**Merksatz:** $(z_n)$ konvergiert genau dann gegen $z$, wenn der Abstand $|z_n - z| \\to 0$ geht. So lässt sich komplexe Konvergenz auf eine einfache reelle Nullfolge zurückführen.\n\n' +
          '**Wenn nichts passt – Divergenz:** Gibt es keinen solchen Grenzwert (die Glieder beruhigen sich nie, springen oder wachsen), heißt die Folge divergent.\n\n' +
          '**Werkzeug für Potenzfolgen:** Bei $w_n = r^n$ entscheidet der Betrag $|r|$:\n' +
          '  • $|r| < 1$: $|r^n| = |r|^n \\to 0$, also $r^n \\to 0$.\n' +
          '  • $|r| > 1$: $|r^n| \\to \\infty$, die Folge divergiert.\n' +
          '  • $|r| = 1$: der Betrag bleibt $1$, aber die Folge kann sich auf dem Kreis weiterdrehen und konvergiert dann nicht.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '**So gehst du bei jeder Folge vor:**\n' +
          '  1. Schreibe die ersten Glieder hin und suche ein Muster.\n' +
          '  2. Rate einen möglichen Grenzwert $z$.\n' +
          '  3. Prüfe, ob der Abstand $|z_n - z| \\to 0$ geht. Wenn ja: konvergent mit Grenzwert $z$. Beruhigen sich die Glieder nie: divergent.\n\n' +
          '**Tipp bei Potenzfolgen:** Schau zuerst auf den Betrag – aus $|r| < 1$ folgt sofort $r^n \\to 0$.\n\n' +
          'Angewandt auf die drei Folgen dieser Aufgabe:\n' +
          '  • $(z_n) = (\\mathrm{i}^n)$: Glieder $1, \\mathrm{i}, -1, -\\mathrm{i}, 1, \\ldots$ springen im Kreis und beruhigen sich nie → divergent.\n' +
          '  • $(|z_n|) = (|\\mathrm{i}^n|)$: jeder Betrag ist $1$, also die konstante Folge $1, 1, 1, \\ldots$ → konvergiert gegen $1$.\n' +
          '  • $(w_n)$ mit $w_n = \\left(\\tfrac{1}{2}+\\tfrac{1}{2}\\mathrm{i}\\right)^n$: Betrag $|w_n| = \\left(\\tfrac{1}{\\sqrt{2}}\\right)^n \\to 0$ → konvergiert gegen $0$.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Betrag von $w_n$ Schritt für Schritt (Betrag einer komplexen Zahl: $|x+y\\mathrm{i}| = \\sqrt{x^2+y^2}$):\n' +
          '  $\\left|\\tfrac{1}{2}+\\tfrac{1}{2}\\mathrm{i}\\right| = \\sqrt{\\left(\\tfrac{1}{2}\\right)^2 + \\left(\\tfrac{1}{2}\\right)^2} = \\sqrt{\\tfrac{1}{4}+\\tfrac{1}{4}} = \\sqrt{\\tfrac{1}{2}} = \\tfrac{1}{\\sqrt{2}} \\approx 0{,}707$\n' +
          '  Mit der Regel $|r^n| = |r|^n$ folgt $|w_n| = \\left(\\tfrac{1}{\\sqrt{2}}\\right)^n$.\n\n' +
          'Dass das gegen $0$ geht, sieht man an Zahlen:\n' +
          '  $n=1$: $\\approx 0{,}71$,  $n=2$: $0{,}5$,  $n=4$: $0{,}25$,  $n=10$: $\\approx 0{,}03$,  $n=20$: $\\approx 0{,}001$ — wird immer kleiner.\n\n' +
          'Warum konvergiert $(w_n)$ damit gegen $0$? Der Abstand zum Grenzwert $0$ ist $|w_n - 0| = |w_n| \\to 0$ – genau die Definition der Konvergenz gegen $0$.\n\n' +
          'Warum springt $(z_n) = (\\mathrm{i}^n)$? Die vier Werte $1, \\mathrm{i}, -1, -\\mathrm{i}$ liegen auf dem Einheitskreis und kehren immer wieder. Egal welchen Grenzwert $z$ man vermutet: in einen kleinen Kreis um $z$ passen nicht alle vier Werte → keine Konvergenz.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Betrag und Folge verwechseln: $(|z_n|)$ kann konvergieren, obwohl $(z_n)$ selbst NICHT konvergiert. Bei $(\\mathrm{i}^n)$ ist $|z_n| = 1$ konstant (Grenzwert $1$), aber $(z_n)$ springt und divergiert.\n\n' +
          '• Betrag falsch berechnen: $\\left|\\tfrac{1}{2}+\\tfrac{1}{2}\\mathrm{i}\\right| = \\tfrac{1}{\\sqrt{2}}$, NICHT $\\tfrac{1}{2}+\\tfrac{1}{2} = 1$. Real- und Imaginärteil werden quadriert und unter der Wurzel addiert, nicht einfach zusammengezählt.\n\n' +
          '• „Ein paar nahe Glieder" reichen nicht: Konvergenz verlangt, dass ab einem Index ALLE Glieder im $\\varepsilon$-Kreis liegen – und das für jedes noch so kleine $\\varepsilon$.\n\n' +
          '• Grenzwert vergessen: Bei Konvergenz ist immer auch der Grenzwert anzugeben (hier $1$ bzw. $0$).',
      },
    ],
    loesung:
      '**Folge 1 – die Potenzen von i**\n' +
      '$(z_n) = (\\mathrm{i}^n)$ ist nicht konvergent (divergent).\n' +
      '**Kommentar:** Die Glieder durchlaufen im 4er-Takt die Werte $1, \\mathrm{i}, -1, -\\mathrm{i}$ und wiederholen das endlos. Sie nähern sich keinem festen Wert: Wählt man irgendeinen Kandidaten $z$ und einen kleinen Kreis (Radius $\\varepsilon$) um ihn, so liegen nie alle vier Werte gleichzeitig darin. Also gibt es keinen Grenzwert.\n\n' +
      '**Folge 2 – die Beträge**\n' +
      '$(|z_n|) = (|\\mathrm{i}^n|) = (1, 1, 1, \\ldots)$ konvergiert gegen $1$.\n' +
      '**Kommentar:** Jeder der Werte $1, \\mathrm{i}, -1, -\\mathrm{i}$ hat den Betrag $1$ (alle liegen auf dem Einheitskreis). Damit ist $(|z_n|)$ die konstante Folge $1, 1, 1, \\ldots$. Eine konstante Folge konvergiert gegen genau diesen Wert, denn $|z_n - 1| = 0 < \\varepsilon$ ist für jedes $n$ erfüllt.\n\n' +
      '**Folge 3 – die Folge w**\n' +
      '$(w_n) = \\left(\\tfrac{1}{2}+\\tfrac{1}{2}\\mathrm{i}\\right)^n$ konvergiert gegen $0$.\n' +
      '**Warum hier der Betrag?** Die Glieder $w_n$ sind komplexe Zahlen, die beim Potenzieren gleichzeitig kleiner werden UND sich drehen – sie laufen spiralförmig auf $0$ zu. Den komplexen Wert selbst zu verfolgen ist mühsam. Der Betrag $|w_n|$ ist dagegen nur eine einfache reelle Zahl: der Abstand von $w_n$ zum Nullpunkt. Damit wird aus einem 2D-Problem (Drehen und Schrumpfen) ein leichtes 1D-Problem (nur „wie weit weg von $0$").\n' +
      '**Der Clou:** Genau dieser Abstand steckt schon in der Konvergenz-Definition. „$w_n \\to 0$" bedeutet ja $|w_n - 0| < \\varepsilon$, also $|w_n| < \\varepsilon$. Den Betrag zu ziehen ist deshalb kein Trick und kein Umweg, sondern direkt das, was man zeigen muss: dass $|w_n| \\to 0$ geht.\n' +
      '**Kommentar:** Den Betrag rechnet man mit der Regel $|z^n| = |z|^n$ aus (Betrag einer Potenz = Potenz des Betrags), also $|w_n| = \\left|\\tfrac{1}{2}+\\tfrac{1}{2}\\mathrm{i}\\right|^n$. Der Basis-Betrag ist $\\left|\\tfrac{1}{2}+\\tfrac{1}{2}\\mathrm{i}\\right| = \\sqrt{\\tfrac{1}{4}+\\tfrac{1}{4}} = \\tfrac{1}{\\sqrt{2}} \\approx 0{,}707 < 1$. Damit ist $|w_n| = \\left(\\tfrac{1}{\\sqrt{2}}\\right)^n \\to 0$, weil eine Zahl mit Betrag kleiner $1$ beim Potenzieren immer kleiner wird. Wegen $|w_n - 0| = |w_n| \\to 0$ konvergiert $(w_n)$ damit gegen $0$.\n\n' +
      '**Zusammenfassung**\n' +
      '$(z_n)$ divergiert,  $(|z_n|) \\to 1$,  $(w_n) \\to 0$.\n' +
      '**Kommentar:** Beachte den Unterschied zwischen $(z_n)$ und $(|z_n|)$: Der Betrag kann konvergieren, obwohl die Folge selbst springt und keinen Grenzwert hat.',
    schwierigkeit: 'schwer',
    kategorie: 'Komplexe Zahlen',
  },
]
