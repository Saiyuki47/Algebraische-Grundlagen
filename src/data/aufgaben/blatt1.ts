import type { Aufgabe } from '../../types'

export const b1: Aufgabe[] = [
  {
    id: 'b1_a1',
    titel: 'Gaußsche Zahlenebene – Real- und Imaginärteil',
    aufgabeText:
      'Skizzieren Sie $-6 + 4\\mathrm{i}$, $\\mathrm{i}$, $-\\mathrm{i}$ und $-1$ in der Gaußschen Zahlenebene und geben Sie folgende Werte an:\n' +
      '(a) $\\mathrm{Re}(-6+4\\mathrm{i})$\n' +
      '(b) $\\mathrm{Im}(-6+4\\mathrm{i})$\n' +
      '(c) $\\mathrm{Re}(\\mathrm{i})$\n' +
      '(d) $\\mathrm{Im}(\\mathrm{i})$\n' +
      '(e) $\\mathrm{Re}(-\\mathrm{i})$\n' +
      '(f) $\\mathrm{Im}(-\\mathrm{i})$\n' +
      '(g) $\\mathrm{Re}(-1)$\n' +
      '(h) $\\mathrm{Im}(-1)$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Eine komplexe Zahl $z = x + y\\mathrm{i}$ entspricht dem Punkt $(x, y)$ in der Gaußschen Zahlenebene:\n' +
          '  $x = \\mathrm{Re}(z)$ ist der Realteil → entspricht der $x$-Koordinate (horizontale Achse)\n' +
          '  $y = \\mathrm{Im}(z)$ ist der Imaginärteil → entspricht der $y$-Koordinate (vertikale Achse)\n\n' +
          'Die Gaußsche Zahlenebene ist wie das normale Koordinatensystem aufgebaut:\n' +
          '  Horizontale Achse = reelle Achse (alle reellen Zahlen liegen hier)\n' +
          '  Vertikale Achse = imaginäre Achse (rein imaginäre Zahlen $y\\mathrm{i}$ liegen hier)\n\n' +
          'Wichtig: Der Imaginärteil von $z = x + y\\mathrm{i}$ ist die reelle Zahl $y$, NICHT $y\\mathrm{i}$.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Für jede komplexe Zahl $z = x + y\\mathrm{i}$:\n' +
          '1. Realteil ablesen: $\\mathrm{Re}(z) = x$ (der Koeffizient OHNE $\\mathrm{i}$)\n' +
          '2. Imaginärteil ablesen: $\\mathrm{Im}(z) = y$ (der Koeffizient MIT $\\mathrm{i}$, aber als reelle Zahl)\n' +
          '3. Punkt $(x, y)$ in der Gaußschen Zahlenebene einzeichnen\n\n' +
          'Spezialfälle:\n' +
          '  Rein imaginäre Zahlen: $\\mathrm{i} = 0 + 1\\cdot\\mathrm{i}$ → $\\mathrm{Re}(\\mathrm{i}) = 0$, $\\mathrm{Im}(\\mathrm{i}) = 1$\n' +
          '  Reelle Zahlen: $-1 = -1 + 0\\cdot\\mathrm{i}$ → $\\mathrm{Re}(-1) = -1$, $\\mathrm{Im}(-1) = 0$\n' +
          '  Negativ-imaginäre: $-\\mathrm{i} = 0 + (-1)\\cdot\\mathrm{i}$ → $\\mathrm{Re}(-\\mathrm{i}) = 0$, $\\mathrm{Im}(-\\mathrm{i}) = -1$',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Beispiel: $z = 3 - 5\\mathrm{i}$\n' +
          '  Schreibe als $z = 3 + (-5)\\mathrm{i}$\n' +
          '  $\\mathrm{Re}(z) = 3$   (der Anteil ohne $\\mathrm{i}$)\n' +
          '  $\\mathrm{Im}(z) = -5$  (der Koeffizient von $\\mathrm{i}$, NICHT $-5\\mathrm{i}$)\n' +
          '  Punkt in der Ebene: $(3, -5)$ → rechts auf der reellen Achse, 5 nach unten\n\n' +
          'Beispiel: $z = -6 + 4\\mathrm{i}$\n' +
          '  $\\mathrm{Re}(z) = -6$  → 6 Einheiten nach links\n' +
          '  $\\mathrm{Im}(z) = 4$   → 4 Einheiten nach oben\n' +
          '  Punkt: $(-6, 4)$ im zweiten Quadranten',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Verwechslung von Real- und Imaginärteil: Bei $z = x + y\\mathrm{i}$ ist $x$ der Realteil und $y$ (ohne $\\mathrm{i}$!) der Imaginärteil.\n\n' +
          '• $\\mathrm{Im}(z)$ ist eine reelle Zahl! $\\mathrm{Im}(3+5\\mathrm{i}) = 5$, NICHT $5\\mathrm{i}$.\n\n' +
          '• $\\mathrm{i}$ selbst: $\\mathrm{i} = 0 + 1\\cdot\\mathrm{i}$, also $\\mathrm{Re}(\\mathrm{i}) = 0$ und $\\mathrm{Im}(\\mathrm{i}) = 1$ (nicht $\\mathrm{i}$!).\n\n' +
          '• $-1$ ist eine reelle Zahl: $-1 = -1 + 0\\cdot\\mathrm{i}$, also $\\mathrm{Im}(-1) = 0$.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Kann ich jede komplexe Zahl als $x + y\\mathrm{i}$ schreiben (mit $x, y \\in \\mathbb{R}$)?\n\n' +
          'Probe: $\\mathrm{Re}(z) + \\mathrm{Im}(z)\\cdot\\mathrm{i}$ muss die ursprüngliche Zahl ergeben:\n' +
          '  $\\mathrm{Re}(-6+4\\mathrm{i}) + \\mathrm{Im}(-6+4\\mathrm{i})\\cdot\\mathrm{i} = (-6) + 4\\mathrm{i} = -6+4\\mathrm{i}$ ✓\n\n' +
          'Für alle Punkte: Liegen reelle Zahlen auf der horizontalen Achse und rein imaginäre auf der vertikalen?',
      },
    ],
    loesung: '',
    loesungSections: [
      { graphId: 'b1_a1' },
      {
        text:
          '(a) $\\mathrm{Re}(-6+4\\mathrm{i}) = -6$\n' +
          '(b) $\\mathrm{Im}(-6+4\\mathrm{i}) = 4$\n' +
          '(c) $\\mathrm{Re}(\\mathrm{i}) = 0$\n' +
          '(d) $\\mathrm{Im}(\\mathrm{i}) = 1$\n' +
          '(e) $\\mathrm{Re}(-\\mathrm{i}) = 0$\n' +
          '(f) $\\mathrm{Im}(-\\mathrm{i}) = -1$\n' +
          '(g) $\\mathrm{Re}(-1) = -1$\n' +
          '(h) $\\mathrm{Im}(-1) = 0$',
      },
    ],
    schwierigkeit: 'einfach',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b1_a2',
    titel: 'Komplexe Zahlen – Konjugierte, Betrag und Rechenoperationen',
    aufgabeText:
      'Seien $z_1 = \\sqrt{3} - \\mathrm{i}$ und $z_2 = -2\\sqrt{3} + 2\\mathrm{i}$. Berechnen Sie:\n' +
      '(a) $\\overline{z_1}$ und $\\overline{z_2}$\n' +
      '(b) $|z_1|$ und $|z_2|$\n' +
      '(c) $z_1 + z_2$\n' +
      '(d) $z_1 - z_2$\n' +
      '(e) $z_1 \\cdot z_2$\n' +
      '(f) $\\dfrac{z_1}{z_2}$\n' +
      'Geben Sie Ergebnisse in der Form $x + y\\mathrm{i}$ mit $x, y \\in \\mathbb{R}$ an.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Für $z = x + y\\mathrm{i}$ mit $x, y \\in \\mathbb{R}$ gilt:\n\n' +
          'Konjugierte: $\\overline{z} = x - y\\mathrm{i}$ → Vorzeichen des Imaginärteils umkehren\n' +
          '  Geometrisch: Spiegelung an der reellen Achse\n\n' +
          'Betrag: $|z| = \\sqrt{x^2 + y^2}$ → Abstand vom Ursprung in der Gaußschen Zahlenebene\n' +
          '  Nützliche Eigenschaft: $|z|^2 = z \\cdot \\overline{z} = x^2 + y^2$\n\n' +
          'Addition/Subtraktion: Komponentenweise (Real- und Imaginärteile getrennt)\n\n' +
          'Multiplikation: Ausmultiplizieren wie $(a+b)(c+d)$, dann $\\mathrm{i}^2 = -1$ einsetzen\n\n' +
          'Division: Zähler und Nenner mit der Konjugierten des Nenners erweitern, um den Imaginärteil aus dem Nenner zu eliminieren',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Konjugierte (a): Vorzeichen des Imaginärteils umdrehen:\n' +
          '  $z = x + y\\mathrm{i}$ → $\\overline{z} = x - y\\mathrm{i}$\n\n' +
          'Betrag (b): $|x + y\\mathrm{i}| = \\sqrt{x^2 + y^2}$\n\n' +
          'Addition/Subtraktion (c/d): $(x_1 + y_1\\mathrm{i}) \\pm (x_2 + y_2\\mathrm{i}) = (x_1 \\pm x_2) + (y_1 \\pm y_2)\\mathrm{i}$\n\n' +
          'Multiplikation (e): Ausmultiplizieren und $\\mathrm{i}^2 = -1$:\n' +
          '  $(x_1 + y_1\\mathrm{i})(x_2 + y_2\\mathrm{i}) = (x_1 x_2 - y_1 y_2) + (x_1 y_2 + x_2 y_1)\\mathrm{i}$\n\n' +
          'Division (f): Mit $\\overline{z_2}$ erweitern:\n' +
          '  $\\dfrac{z_1}{z_2} = \\dfrac{z_1 \\cdot \\overline{z_2}}{z_2 \\cdot \\overline{z_2}} = \\dfrac{z_1 \\cdot \\overline{z_2}}{|z_2|^2}$\n' +
          '  Der Nenner $|z_2|^2 = z_2 \\cdot \\overline{z_2}$ ist jetzt eine reelle Zahl.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Für $w = 2 + 3\\mathrm{i}$, $v = 1 - \\mathrm{i}$:\n\n' +
          'Konjugierte: $\\overline{w} = 2 - 3\\mathrm{i}$\n\n' +
          'Betrag: $|w| = \\sqrt{4 + 9} = \\sqrt{13}$\n\n' +
          'Produkt: $w \\cdot v = (2+3\\mathrm{i})(1-\\mathrm{i}) = 2 - 2\\mathrm{i} + 3\\mathrm{i} - 3\\mathrm{i}^2 = 2 + \\mathrm{i} + 3 = 5 + \\mathrm{i}$\n\n' +
          'Division: $\\dfrac{w}{v} = \\dfrac{(2+3\\mathrm{i})(1+\\mathrm{i})}{(1-\\mathrm{i})(1+\\mathrm{i})} = \\dfrac{2+2\\mathrm{i}+3\\mathrm{i}-3}{1+1} = \\dfrac{-1+5\\mathrm{i}}{2} = -\\dfrac{1}{2} + \\dfrac{5}{2}\\mathrm{i}$',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Bei der Division: BEIDE – Zähler UND Nenner – müssen mit $\\overline{z_2}$ multipliziert werden.\n\n' +
          '• $\\mathrm{i}^2 = -1$ nicht vergessen! Bei der Multiplikation entsteht aus $y_1 y_2 \\mathrm{i}^2$ der Term $-y_1 y_2$ (reell).\n\n' +
          '• Betrag: $|\\sqrt{3} - \\mathrm{i}| = \\sqrt{(\\sqrt{3})^2 + (-1)^2} = \\sqrt{3+1} = 2$, nicht $\\sqrt{3}-1$!\n\n' +
          '• Ergebnis muss immer in der Form $x + y\\mathrm{i}$ stehen – nicht als $\\frac{\\ldots}{\\ldots+\\ldots\\mathrm{i}}$.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Probe für die Division: $z_1 = \\dfrac{z_1}{z_2} \\cdot z_2$?\n\n' +
          'Für den Betrag: $|z_1 \\cdot z_2| = |z_1| \\cdot |z_2|$ (Betragsregel)\n\n' +
          'Hat das Ergebnis die Form $x + y\\mathrm{i}$ mit rein reellen $x, y$? Falls im Nenner noch $\\mathrm{i}$ steht: Schritt nicht abgeschlossen.',
      },
    ],
    loesung:
      '(a) $\\overline{z_1} = \\sqrt{3} + \\mathrm{i}$, $\\overline{z_2} = -2\\sqrt{3} - 2\\mathrm{i}$\n' +
      '(b) $|z_1| = 2$, $|z_2| = 4$\n' +
      '(c) $z_1 + z_2 = -\\sqrt{3} + \\mathrm{i}$\n' +
      '(d) $z_1 - z_2 = 3\\sqrt{3} - 3\\mathrm{i}$\n' +
      '(e) $z_1 \\cdot z_2 = -4 + 4\\sqrt{3}\\,\\mathrm{i}$\n' +
      '(f) $\\dfrac{z_1}{z_2} = -\\dfrac{1}{2}$',
    schwierigkeit: 'mittel',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b1_a3',
    titel: 'Komplexe Zahlen in $x + y\\mathrm{i}$',
    aufgabeText:
      'Formen Sie die komplexen Zahlen in die Form $x + y\\mathrm{i}$ mit $x, y \\in \\mathbb{R}$ um:\n' +
      '(a) $(3 - 2\\mathrm{i}) \\cdot (2 + 4\\mathrm{i})$\n' +
      '(b) $\\dfrac{1}{\\mathrm{i}}$\n' +
      '(c) $\\dfrac{1 + 2\\mathrm{i}}{3 - 2\\mathrm{i}}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Komplexe Zahlen werden wie algebraische Ausdrücke gerechnet – mit einer wichtigen Zusatzregel:\n' +
          '  $\\mathrm{i}^2 = -1$\n\n' +
          'Multiplikation: $(a + b\\mathrm{i})(c + d\\mathrm{i})$ wie ein Doppel-Binomialprodukt ausrechnen:\n' +
          '  $= ac + ad\\mathrm{i} + bc\\mathrm{i} + bd\\mathrm{i}^2 = ac + (ad+bc)\\mathrm{i} + bd(-1) = (ac-bd) + (ad+bc)\\mathrm{i}$\n\n' +
          'Division: Ziel ist es, den Nenner zu einer reellen Zahl zu machen. Dazu erweitert man mit der Konjugierten des Nenners:\n' +
          '  $\\dfrac{z_1}{z_2} = \\dfrac{z_1 \\cdot \\overline{z_2}}{z_2 \\cdot \\overline{z_2}} = \\dfrac{z_1 \\cdot \\overline{z_2}}{|z_2|^2}$\n\n' +
          'Der Nenner $|z_2|^2 = z_2 \\cdot \\overline{z_2}$ ist nach der 3. binomischen Formel immer reell.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Für (a) – Multiplikation:\n' +
          '  1. Ausmultiplizieren (FOIL): jedes Glied von links mit jedem Glied rechts\n' +
          '  2. $\\mathrm{i}^2 = -1$ einsetzen\n' +
          '  3. Real- und Imaginärteile sammeln\n\n' +
          'Für (b) – Division durch $\\mathrm{i}$:\n' +
          '  Konjugat von $\\mathrm{i}$ ist $-\\mathrm{i}$\n' +
          '  Erweitern: $\\dfrac{1}{\\mathrm{i}} = \\dfrac{1 \\cdot (-\\mathrm{i})}{\\mathrm{i} \\cdot (-\\mathrm{i})} = \\dfrac{-\\mathrm{i}}{-\\mathrm{i}^2} = \\dfrac{-\\mathrm{i}}{1} = -\\mathrm{i}$\n\n' +
          'Für (c) – Division allgemein:\n' +
          '  Konjugat des Nenners $(3-2\\mathrm{i})$ ist $(3+2\\mathrm{i})$\n' +
          '  Erweitern und vereinfachen',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Multiplikationsbeispiel: $(1 + 2\\mathrm{i})(3 - \\mathrm{i})$\n' +
          '  $= 1\\cdot3 + 1\\cdot(-\\mathrm{i}) + 2\\mathrm{i}\\cdot3 + 2\\mathrm{i}\\cdot(-\\mathrm{i})$\n' +
          '  $= 3 - \\mathrm{i} + 6\\mathrm{i} - 2\\mathrm{i}^2$\n' +
          '  $= 3 - \\mathrm{i} + 6\\mathrm{i} + 2$   (da $\\mathrm{i}^2=-1$)\n' +
          '  $= 5 + 5\\mathrm{i}$\n\n' +
          'Divisionsbeispiel: $\\dfrac{1+\\mathrm{i}}{2-\\mathrm{i}}$\n' +
          '  $= \\dfrac{(1+\\mathrm{i})(2+\\mathrm{i})}{(2-\\mathrm{i})(2+\\mathrm{i})} = \\dfrac{2+\\mathrm{i}+2\\mathrm{i}-1}{4+1} = \\dfrac{1+3\\mathrm{i}}{5} = \\dfrac{1}{5} + \\dfrac{3}{5}\\mathrm{i}$',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• $\\mathrm{i}^2 = \\mathbf{-1}$, nicht $+1$ und nicht $\\mathrm{i}$! Dies ist die häufigste Fehlerquelle.\n\n' +
          '• Bei der Division: Nur mit der Konjugierten des NENNERS erweitern, nicht mit der des Zählers.\n\n' +
          '• Konjugat von $3 - 2\\mathrm{i}$ ist $3 + 2\\mathrm{i}$ (nur das Vorzeichen von $\\mathrm{i}$ dreht sich, nicht das der 3).\n\n' +
          '• Ergebnis muss in $x + y\\mathrm{i}$-Form sein – kein $\\mathrm{i}$ im Nenner!',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Für (a): $\\mathrm{Re}((3-2\\mathrm{i})(2+4\\mathrm{i})) = 3\\cdot2 - (-2)\\cdot4 = 6 + 8 = 14$?\n' +
          '  Formel: $\\mathrm{Re}(z_1 z_2) = \\mathrm{Re}(z_1)\\mathrm{Re}(z_2) - \\mathrm{Im}(z_1)\\mathrm{Im}(z_2)$\n\n' +
          'Für Divisionen: Probe durch Rückmultiplizieren:\n' +
          '  Ergebnis $\\cdot$ Nenner = Zähler?\n\n' +
          'Ist das Endergebnis in der Form $x + y\\mathrm{i}$ mit rein reellen $x, y$? ✓',
      },
    ],
    loesung:
      '(a) $(3-2\\mathrm{i})(2+4\\mathrm{i}) = 6+12\\mathrm{i}-4\\mathrm{i}-8\\mathrm{i}^2 = 6+8\\mathrm{i}+8 = 14+8\\mathrm{i}$\n' +
      '(b) $\\dfrac{1}{\\mathrm{i}} = \\dfrac{-\\mathrm{i}}{-\\mathrm{i}^2} = -\\mathrm{i}$\n' +
      '(c) $\\dfrac{1+2\\mathrm{i}}{3-2\\mathrm{i}} = \\dfrac{(1+2\\mathrm{i})(3+2\\mathrm{i})}{(3-2\\mathrm{i})(3+2\\mathrm{i})} = \\dfrac{3+2\\mathrm{i}+6\\mathrm{i}-4}{9+4} = \\dfrac{-1+8\\mathrm{i}}{13} = -\\dfrac{1}{13}+\\dfrac{8}{13}\\mathrm{i}$',
    schwierigkeit: 'mittel',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b1_a4',
    titel: 'Mengen in der Gaußschen Zahlenebene',
    aufgabeText:
      'Veranschaulichen Sie die folgenden Mengen in der komplexen Zahlenebene:\n' +
      '(a) $A := \\{z \\in \\mathbb{C} : |z| \\leq 3\\}$\n' +
      '(b) $B := \\{z \\in \\mathbb{C} : \\mathrm{Im}(z) = -1\\}$\n' +
      '(c) $C := \\{z \\in \\mathbb{C} : \\mathrm{Re}(z) < -1 \\text{ und } \\mathrm{Im}(z) \\geq 2\\}$\n' +
      '(d) $D := \\{z \\in \\mathbb{C} : \\mathrm{Re}(z) - \\mathrm{Im}(z) = 0\\}$\n' +
      '(e) $E := \\{z \\in \\mathbb{C} : \\mathrm{Re}(z) < 1 \\text{ und } |z| = 2\\}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'In der Gaußschen Zahlenebene entspricht $z = x + y\\mathrm{i}$ dem Punkt $(x, y)$:\n' +
          '  $\\mathrm{Re}(z) = x$ entspricht der horizontalen Position\n' +
          '  $\\mathrm{Im}(z) = y$ entspricht der vertikalen Position\n' +
          '  $|z| = \\sqrt{x^2+y^2}$ ist der Abstand vom Ursprung\n\n' +
          'Jede Bedingung definiert eine geometrische Figur:\n' +
          '  Bedingung an $|z|$ → Kreis oder Kreisscheibe\n' +
          '  Bedingung an $\\mathrm{Re}(z)$ → senkrechte Linie oder Halbebene\n' +
          '  Bedingung an $\\mathrm{Im}(z)$ → waagerechte Linie oder Halbebene\n' +
          '  Lineare Bedingung an $\\mathrm{Re}(z)$ und $\\mathrm{Im}(z)$ → Gerade',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Schreibe $z = x + y\\mathrm{i}$ und übersetze jede Bedingung:\n\n' +
          '(a) $|z| \\leq 3$: $\\sqrt{x^2+y^2} \\leq 3$ → geschlossene Kreisscheibe mit Radius 3\n\n' +
          '(b) $\\mathrm{Im}(z) = -1$: $y = -1$ → waagerechte Gerade bei $y = -1$\n\n' +
          '(c) $\\mathrm{Re}(z) < -1$ und $\\mathrm{Im}(z) \\geq 2$:\n' +
          '    $x < -1$ (links der Geraden $x=-1$, Rand ausgeschlossen)\n' +
          '    und $y \\geq 2$ (oberhalb der Geraden $y=2$, Rand inklusive)\n' +
          '    → Schnitt zweier Halbebenen = ein offenes Eck oben-links\n\n' +
          '(d) $\\mathrm{Re}(z) - \\mathrm{Im}(z) = 0$: $x - y = 0 \\Leftrightarrow x = y$ → Winkelhalbierende\n\n' +
          '(e) $|z| = 2$ und $\\mathrm{Re}(z) < 1$: Kreis mit Radius 2, aber nur der linke Teil mit $x < 1$',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Für (e): Kreis $|z|=2$ hat Gleichung $x^2+y^2=4$, also Punkte mit Abstand 2 vom Ursprung.\n' +
          '  Die Bedingung $\\mathrm{Re}(z) < 1$ (also $x < 1$) schneidet diesen Kreis ab.\n' +
          '  Wo liegt die Schnittstelle? Bei $x=1$: $1 + y^2 = 4 \\Rightarrow y = \\pm\\sqrt{3}$\n' +
          '  → Kreisbogen von $1-\\sqrt{3}\\mathrm{i}$ bis $1+\\sqrt{3}\\mathrm{i}$ auf der linken Seite (x < 1)\n\n' +
          'Merkhilfe: Bei $<$ oder $>$ (ohne $=$) ist der Rand gestrichelt zu zeichnen.\n' +
          '  Bei $\\leq$ oder $\\geq$ (mit $=$) ist der Rand durchgezogen.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• $|z| \\leq 3$: Die Scheibe enthält das Innere UND den Rand. Bei $|z| < 3$ ohne Rand.\n\n' +
          '• Für (c): Das „und" bedeutet Schnittmenge – beide Bedingungen müssen GLEICHZEITIG gelten. Das ist ein Viertel der Ebene, keine Vereinigung.\n\n' +
          '• Für (e): Es ist nur ein Teilkreisbogen, kein vollständiger Kreis! Der Kreis $|z|=2$ wird durch $\\mathrm{Re}(z) < 1$ auf einen Bogen eingeschränkt.\n\n' +
          '• $\\mathrm{Im}(z) = -1$: Die Gerade $y = -1$ liegt UNTER der reellen Achse.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Prüfe mit konkreten Punkten:\n' +
          '  Liegt $z = 3 + 0\\mathrm{i}$ in $A$? $|z| = 3 \\leq 3$ ✓ (Randpunkt)\n' +
          '  Liegt $z = 0 - \\mathrm{i}$ in $B$? $\\mathrm{Im}(z) = -1$ ✓\n' +
          '  Liegt $z = -2 + 3\\mathrm{i}$ in $C$? $\\mathrm{Re}=-2 < -1$ ✓ und $\\mathrm{Im}=3 \\geq 2$ ✓\n\n' +
          'Haben alle Figuren korrekte Ränder (gestrichelt vs. durchgezogen)?',
      },
    ],
    loesung: '',
    loesungSections: [
      {
        text:
          '(a) Geschlossene Kreisscheibe mit Radius $3$ um den Ursprung (Rand inklusive).\n' +
          '(b) Horizontale Gerade $\\mathrm{Im}(z) = -1$, d.h. $y = -1$.\n' +
          '(c) Alle Punkte mit $\\mathrm{Re}(z) < -1$ (gestrichelter Rand) und $\\mathrm{Im}(z) \\geq 2$ (durchgezogener Rand).\n' +
          '(d) Gerade $\\mathrm{Re}(z) = \\mathrm{Im}(z)$, also $y = x$ (Winkelhalbierende).\n' +
          '(e) Kreisbogen $|z|=2$ für $\\mathrm{Re}(z) < 1$ (linker Großteil, Rand gestrichelt).',
        graphId: 'b1_a4',
      },
    ],
    schwierigkeit: 'mittel',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b1_a5',
    titel: 'Rechenregeln für Betrag und Konjugation',
    aufgabeText:
      'Seien $z, w \\in \\mathbb{C}$. Zeigen Sie folgende Rechenregeln:\n' +
      '(a) $|z|^2 = z \\cdot \\overline{z}$\n' +
      '(b) $\\overline{z + w} = \\overline{z} + \\overline{w}$\n' +
      '(c) $\\overline{z \\cdot w} = \\overline{z} \\cdot \\overline{w}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Ein mathematischer Beweis für komplexe Zahlen läuft meist so ab:\n\n' +
          '1. Setze $z = x + y\\mathrm{i}$ und $w = u + v\\mathrm{i}$ mit $x, y, u, v \\in \\mathbb{R}$ an.\n' +
          '2. Berechne die linke Seite der Gleichung direkt.\n' +
          '3. Berechne die rechte Seite direkt.\n' +
          '4. Zeige, dass beide Seiten gleich sind.\n\n' +
          'Zentrale Regeln, die du brauchst:\n' +
          '  $\\overline{x + y\\mathrm{i}} = x - y\\mathrm{i}$   (Konjugation dreht das Vorzeichen des Imaginärteils)\n' +
          '  $|x + y\\mathrm{i}|^2 = x^2 + y^2$\n' +
          '  $\\mathrm{i}^2 = -1$',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Für jeden Beweis: Setze $z = x + y\\mathrm{i}$ und $w = u + v\\mathrm{i}$ ein.\n\n' +
          '(a) Berechne $z \\cdot \\overline{z}$:\n' +
          '  $(x+y\\mathrm{i})(x-y\\mathrm{i}) = x^2 - y^2\\mathrm{i}^2 = x^2 + y^2 = |z|^2$ ✓\n\n' +
          '(b) Linke Seite: $\\overline{z+w} = \\overline{(x+u)+(y+v)\\mathrm{i}} = (x+u) - (y+v)\\mathrm{i}$\n' +
          '    Rechte Seite: $\\overline{z}+\\overline{w} = (x-y\\mathrm{i})+(u-v\\mathrm{i}) = (x+u)-(y+v)\\mathrm{i}$ ✓\n\n' +
          '(c) Berechne $z \\cdot w$ zuerst, dann konjugieren; und vergleiche mit $\\overline{z} \\cdot \\overline{w}$.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Beweis für (c) vollständig:\n' +
          '  Linke Seite: $\\overline{zw} = \\overline{(x+y\\mathrm{i})(u+v\\mathrm{i})}$\n' +
          '  $= \\overline{xu + xv\\mathrm{i} + yu\\mathrm{i} + yv\\mathrm{i}^2}$\n' +
          '  $= \\overline{(xu-yv) + (xv+yu)\\mathrm{i}}$\n' +
          '  $= (xu-yv) - (xv+yu)\\mathrm{i}$\n\n' +
          '  Rechte Seite: $\\overline{z} \\cdot \\overline{w} = (x-y\\mathrm{i})(u-v\\mathrm{i})$\n' +
          '  $= xu - xv\\mathrm{i} - yu\\mathrm{i} + yv\\mathrm{i}^2$\n' +
          '  $= (xu-yv) - (xv+yu)\\mathrm{i}$ ✓',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Beide Seiten gleichzeitig umformen (Rundtrick): Immer linke und rechte Seite GETRENNT berechnen und am Ende vergleichen.\n\n' +
          '• $\\mathrm{i}^2 = -1$ vergessen: Bei $z \\cdot w$ entsteht ein $yv\\mathrm{i}^2$-Term, der zu $-yv$ wird.\n\n' +
          '• Konjugation: Das Vorzeichen wechselt NUR beim Imaginärteil. $\\overline{x + y\\mathrm{i}} = x - y\\mathrm{i}$, nicht $-x + y\\mathrm{i}$.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Stehen am Ende zwei IDENTISCHE Ausdrücke (linke = rechte Seite)?\n\n' +
          'Probe mit konkreten Zahlen: $z = 2+\\mathrm{i}$, $w = 1-3\\mathrm{i}$:\n' +
          '  (a) $|z|^2 = 4+1=5$; $z\\cdot\\overline{z} = (2+\\mathrm{i})(2-\\mathrm{i}) = 4+1=5$ ✓\n' +
          '  (b) $\\overline{z+w} = \\overline{3-2\\mathrm{i}} = 3+2\\mathrm{i}$; $\\overline{z}+\\overline{w} = (2-\\mathrm{i})+(1+3\\mathrm{i}) = 3+2\\mathrm{i}$ ✓',
      },
    ],
    loesung:
      '(a) $z \\cdot \\overline{z} = (x+y\\mathrm{i})(x-y\\mathrm{i}) = x^2 - y^2\\mathrm{i}^2 = x^2 + y^2 = |z|^2$ ✓\n\n' +
      '(b) $\\overline{z+w} = \\overline{(x+u)+(y+v)\\mathrm{i}} = (x+u)-(y+v)\\mathrm{i}$;\n' +
      '    $\\overline{z}+\\overline{w} = (x-y\\mathrm{i})+(u-v\\mathrm{i}) = (x+u)-(y+v)\\mathrm{i}$ ✓\n\n' +
      '(c) $\\overline{z \\cdot w} = \\overline{(xu-yv)+(xv+yu)\\mathrm{i}} = (xu-yv)-(xv+yu)\\mathrm{i}$;\n' +
      '    $\\overline{z} \\cdot \\overline{w} = (x-y\\mathrm{i})(u-v\\mathrm{i}) = xu - xv\\mathrm{i} - yu\\mathrm{i} + yv\\mathrm{i}^2 = (xu-yv)-(xv+yu)\\mathrm{i}$ ✓',
    schwierigkeit: 'mittel',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b1_a6',
    titel: 'Komposition und Umkehrfunktion',
    aufgabeText:
      'Gegeben seien $f(x) = 2x + 1$ und $g(x) = x^2$.\n' +
      'Bestimmen Sie $g \\circ f$ und prüfen Sie, ob $f$ invertierbar ist. Falls ja, geben Sie $f^{-1}$ an.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Komposition $g \\circ f$ bedeutet: Erst $f$ anwenden, dann $g$ auf das Ergebnis.\n' +
          '  $(g \\circ f)(x) = g(f(x))$\n\n' +
          'Eselsbrücke: $g \\circ f$ = „$g$ nach $f$" = erst $f$, dann $g$ (von rechts nach links lesen!)\n\n' +
          'Umkehrfunktion $f^{-1}$: Dreht die Zuordnung um. Wenn $f(x) = y$, dann $f^{-1}(y) = x$.\n' +
          '  Eine Funktion ist invertierbar, wenn sie bijektiv ist (injektiv + surjektiv).\n' +
          '  Für streng monotone Funktionen (immer steigend oder immer fallend) ist dies erfüllt.\n' +
          '  Eine lineare Funktion $f(x) = mx + b$ mit $m \\neq 0$ ist immer bijektiv (also invertierbar).',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Komposition berechnen:\n' +
          '  1. Berechne zuerst $f(x)$\n' +
          '  2. Setze das Ergebnis in $g$ ein: $g(f(x))$\n' +
          '  3. Vereinfachen\n\n' +
          'Umkehrfunktion bestimmen:\n' +
          '  1. Schreibe $y = f(x)$\n' +
          '  2. Löse die Gleichung nach $x$ auf: $x = \\ldots$\n' +
          '  3. Ersetze $x$ durch $f^{-1}(y)$: $f^{-1}(y) = \\ldots$\n' +
          '  4. Optional: Schreibe mit $x$ statt $y$: $f^{-1}(x) = \\ldots$\n\n' +
          'Probe: $f(f^{-1}(x)) = x$ und $f^{-1}(f(x)) = x$ müssen gelten.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Komposition für $f(x) = 2x+1$, $g(x) = x^2$:\n' +
          '  $(g \\circ f)(x) = g(f(x)) = g(2x+1) = (2x+1)^2$\n\n' +
          'Umkehrfunktion von $f(x) = 2x+1$:\n' +
          '  $y = 2x + 1$\n' +
          '  $y - 1 = 2x$\n' +
          '  $x = \\dfrac{y-1}{2}$\n' +
          '  Also: $f^{-1}(y) = \\dfrac{y-1}{2}$\n\n' +
          'Probe: $f(f^{-1}(y)) = f\\!\\left(\\frac{y-1}{2}\\right) = 2 \\cdot \\frac{y-1}{2} + 1 = y-1+1 = y$ ✓',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Reihenfolge bei $g \\circ f$ verwechseln: $(g \\circ f)(x) = g(f(x))$ – erst $f$, dann $g$. NICHT erst $g$!\n\n' +
          '• $g \\circ f \\neq f \\circ g$: Komposition ist im Allgemeinen nicht kommutativ.\n' +
          '  $(g \\circ f)(x) = (2x+1)^2$ vs. $(f \\circ g)(x) = f(x^2) = 2x^2+1$ → verschieden!\n\n' +
          '• $g(x) = x^2$ ist NICHT invertierbar (auf ganz $\\mathbb{R}$), weil $g(-1) = g(1) = 1$ (nicht injektiv).',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Probe für die Umkehrfunktion: Gilt $f(f^{-1}(x)) = x$?\n' +
          '  $f\\!\\left(\\frac{x-1}{2}\\right) = 2 \\cdot \\frac{x-1}{2} + 1 = (x-1)+1 = x$ ✓\n\n' +
          'Gilt auch $f^{-1}(f(x)) = x$?\n' +
          '  $f^{-1}(2x+1) = \\frac{(2x+1)-1}{2} = \\frac{2x}{2} = x$ ✓',
      },
    ],
    loesung:
      '$(g \\circ f)(x) = g(f(x)) = (2x+1)^2$\n\n' +
      '$f$ ist invertierbar (lineare Funktion mit Steigung $2 \\neq 0$).\n\n' +
      '$f^{-1}(y) = \\dfrac{y-1}{2}$',
    schwierigkeit: 'einfach',
    kategorie: 'Funktionen',
  },
]
