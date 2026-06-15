import type { Aufgabe } from '../../types'

export const b3: Aufgabe[] = [
  {
    id: 'b3_a1',
    titel: 'Multiplikation komplexer Zahlen in Polarform',
    aufgabeText:
      'Führen Sie folgende Multiplikationen komplexer Zahlen durch:\n' +
      '(a) $3e^{\\mathrm{i}\\frac{\\pi}{3}} \\cdot 2e^{\\mathrm{i}\\frac{5\\pi}{6}}$\n' +
      '(b) $e^{\\mathrm{i}\\pi} \\cdot e^{3\\pi\\mathrm{i}}$\n' +
      '(c) $2e^{\\mathrm{i}\\frac{\\pi}{9}} \\cdot 4e^{-\\mathrm{i}\\frac{\\pi}{9}}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Die Polarform $z = r\\,e^{\\mathrm{i}\\varphi}$ macht die Multiplikation komplexer Zahlen besonders einfach:\n\n' +
          'Regel: $r_1 e^{\\mathrm{i}\\varphi_1} \\cdot r_2 e^{\\mathrm{i}\\varphi_2} = (r_1 \\cdot r_2)\\, e^{\\mathrm{i}(\\varphi_1+\\varphi_2)}$\n\n' +
          'Geometrische Bedeutung:\n' +
          '  Beträge werden MULTIPLIZIERT (Streckung)\n' +
          '  Winkel werden ADDIERT (Drehung)\n\n' +
          'Dies folgt direkt aus den Rechenregeln für die Exponentialfunktion: $e^a \\cdot e^b = e^{a+b}$.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '1. Beträge der beiden Zahlen ablesen und multiplizieren: $r = r_1 \\cdot r_2$\n' +
          '2. Winkel addieren: $\\varphi = \\varphi_1 + \\varphi_2$\n' +
          '3. Falls $\\varphi \\geq 2\\pi$: auf $[0, 2\\pi)$ reduzieren (Periodizität)\n' +
          '4. Ergebnis als $r\\,e^{\\mathrm{i}\\varphi}$ aufschreiben\n\n' +
          'Für (b): $e^{\\mathrm{i}\\pi} \\cdot e^{3\\pi\\mathrm{i}} = e^{\\mathrm{i}(\\pi + 3\\pi)} = e^{4\\pi\\mathrm{i}}$\n' +
          '  $4\\pi = 2 \\cdot 2\\pi$ → zwei volle Umrundungen → $e^{4\\pi\\mathrm{i}} = e^{0} = 1$\n\n' +
          'Für (c): Winkel heben sich auf ($\\frac{\\pi}{9} + (-\\frac{\\pi}{9}) = 0$)',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Beispiel: $2e^{\\mathrm{i}\\frac{\\pi}{4}} \\cdot 3e^{\\mathrm{i}\\frac{\\pi}{4}}$\n' +
          '  Beträge: $2 \\cdot 3 = 6$\n' +
          '  Winkel: $\\frac{\\pi}{4} + \\frac{\\pi}{4} = \\frac{\\pi}{2}$\n' +
          '  Ergebnis: $6\\,e^{\\mathrm{i}\\frac{\\pi}{2}} = 6\\mathrm{i}$\n\n' +
          'Winkeladdition mit Brüchen:\n' +
          '  $\\frac{\\pi}{3} + \\frac{5\\pi}{6} = \\frac{2\\pi}{6} + \\frac{5\\pi}{6} = \\frac{7\\pi}{6}$\n\n' +
          'Reduktion: $\\frac{7\\pi}{6} < 2\\pi$, also keine Reduktion nötig.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Beträge ADDIEREN statt multiplizieren: Falsch! Nur die Winkel werden addiert.\n\n' +
          '• Vorzeichen beim Winkel: Ein negativer Winkel bedeutet Drehung im Uhrzeigersinn.\n' +
          '  $e^{\\mathrm{i}\\frac{\\pi}{9}} \\cdot e^{-\\mathrm{i}\\frac{\\pi}{9}} = e^{\\mathrm{i}0} = 1$ (nicht $e^{\\mathrm{i}\\frac{2\\pi}{9}}$!).\n\n' +
          '• Winkelreduktion vergessen: Das Ergebnis $e^{4\\pi\\mathrm{i}}$ muss als $1$ erkannt werden.',
      },
    ],
    loesung:
      '(a) Beträge multiplizieren, Winkel addieren:\n' +
      '  $r = 3 \\cdot 2 = 6$, $\\varphi = \\frac{\\pi}{3} + \\frac{5\\pi}{6} = \\frac{2\\pi}{6} + \\frac{5\\pi}{6} = \\frac{7\\pi}{6}$\n' +
      '  $\\Rightarrow 6\\,e^{\\mathrm{i}\\frac{7\\pi}{6}}$\n\n' +
      '(b) $r = 1 \\cdot 1 = 1$, $\\varphi = \\pi + 3\\pi = 4\\pi = 2 \\cdot 2\\pi$ (zwei volle Umdrehungen)\n' +
      '  $e^{\\mathrm{i} \\cdot 4\\pi} = e^{\\mathrm{i} \\cdot 0} = 1$\n\n' +
      '(c) $r = 2 \\cdot 4 = 8$, $\\varphi = \\frac{\\pi}{9} + \\left(-\\frac{\\pi}{9}\\right) = 0$\n' +
      '  $e^{\\mathrm{i} \\cdot 0} = 1$, also $8 \\cdot 1 = 8$',
    schwierigkeit: 'einfach',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b3_a2',
    titel: '$n$-te Wurzeln komplexer Zahlen',
    aufgabeText:
      '(a) Geben Sie sämtliche komplexe Lösungen der Gleichung $z^4 = 16$ an und skizzieren Sie die Lösungen in der komplexen Zahlenebene.\n\n' +
      '(b) Geben Sie sämtliche $z \\in \\mathbb{C}$ an, die die Gleichung $z^3 = -\\mathrm{i}$ erfüllen.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Im Komplexen hat die Gleichung $z^n = w$ genau $n$ verschiedene Lösungen (im Gegensatz zu $\\mathbb{R}$, wo es oft nur 1 oder 2 gibt).\n\n' +
          'Die Lösungen heißen die $n$-ten Wurzeln von $w$ und sind gleichmäßig auf einem Kreis verteilt:\n' +
          '  Alle $n$ Lösungen liegen auf einem Kreis mit Radius $r^{1/n}$ um den Ursprung\n' +
          '  Sie sind gleichmäßig verteilt, mit je $\\frac{2\\pi}{n}$ Abstand zwischen benachbarten Lösungen\n\n' +
          'Formel für die $n$-ten Wurzeln von $w = r\\,e^{\\mathrm{i}\\varphi}$:\n' +
          '  $z_k = r^{1/n}\\,e^{\\mathrm{i}\\frac{\\varphi + 2\\pi k}{n}},\\quad k = 0, 1, \\ldots, n-1$',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '1. Rechte Seite in Polarform schreiben: $w = r\\,e^{\\mathrm{i}\\varphi}$\n' +
          '   Betrag: $r = |w|$\n' +
          '   Winkel: $\\varphi$ (Hauptwert in $[0, 2\\pi)$)\n\n' +
          '2. $n$-te Wurzel des Betrags berechnen: $r^{1/n} = \\sqrt[n]{r}$\n\n' +
          '3. Für $k = 0, 1, \\ldots, n-1$ die Lösungen berechnen:\n' +
          '   $z_k = r^{1/n}\\,e^{\\mathrm{i}\\frac{\\varphi + 2\\pi k}{n}}$\n\n' +
          '(a) $16 = 16\\,e^{\\mathrm{i}\\cdot0}$: $r=16$, $\\varphi=0$, $n=4$\n' +
          '    Betrag der Wurzeln: $16^{1/4} = 2$\n\n' +
          '(b) $-\\mathrm{i} = e^{\\mathrm{i}\\frac{3\\pi}{2}}$: $r=1$, $\\varphi=\\frac{3\\pi}{2}$, $n=3$',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Beispiel: Alle Lösungen von $z^2 = -1 = e^{\\mathrm{i}\\pi}$ ($r=1$, $\\varphi=\\pi$, $n=2$):\n' +
          '  $z_0 = e^{\\mathrm{i}\\frac{\\pi}{2}} = \\mathrm{i}$\n' +
          '  $z_1 = e^{\\mathrm{i}\\frac{\\pi+2\\pi}{2}} = e^{\\mathrm{i}\\frac{3\\pi}{2}} = -\\mathrm{i}$\n\n' +
          'Probe: $\\mathrm{i}^2 = -1$ ✓ und $(-\\mathrm{i})^2 = \\mathrm{i}^2 = -1$ ✓\n\n' +
          'Für (b): $-\\mathrm{i}$ im Einheitskreis einzeichnen: Punkt $(0, -1)$.\n' +
          '  Winkel von $(0,-1)$: $\\varphi = \\frac{3\\pi}{2}$ (270°)',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Vergessen, dass es genau $n$ Lösungen gibt (nicht 1 oder 2)!\n\n' +
          '• Falscher Winkel für $-\\mathrm{i}$: $-\\mathrm{i}$ hat Winkel $\\frac{3\\pi}{2}$, NICHT $-\\frac{\\pi}{2}$. (Obwohl beides äquivalent ist, muss man mit $[0, 2\\pi)$ arbeiten.)\n\n' +
          '• $k$ läuft von $0$ bis $n-1$, NICHT von $1$ bis $n$.\n\n' +
          '• Die Winkel der Lösungen nicht korrekt berechnen: $\\frac{\\varphi + 2\\pi k}{n}$, nicht $\\frac{\\varphi}{n} + 2\\pi k$.',
      },
    ],
    loesung:
      '(a) $z^4 = 16 = 16\\,e^{\\mathrm{i}\\cdot0}$: $r=16$, $\\varphi=0$, $n=4$.\n' +
      '  $z_k = 16^{1/4}\\,e^{\\mathrm{i}\\frac{0+2\\pi k}{4}} = 2\\,e^{\\mathrm{i}\\frac{\\pi k}{2}}$ für $k=0,1,2,3$:\n' +
      '  $z_0 = 2\\,e^{\\mathrm{i}\\cdot0} = 2$\n' +
      '  $z_1 = 2\\,e^{\\mathrm{i}\\frac{\\pi}{2}} = 2\\mathrm{i}$\n' +
      '  $z_2 = 2\\,e^{\\mathrm{i}\\pi} = -2$\n' +
      '  $z_3 = 2\\,e^{\\mathrm{i}\\frac{3\\pi}{2}} = -2\\mathrm{i}$\n\n' +
      '(b) $-\\mathrm{i} = e^{\\mathrm{i}\\frac{3\\pi}{2}}$: $r=1$, $\\varphi=\\frac{3\\pi}{2}$, $n=3$.\n' +
      '  $z_k = e^{\\mathrm{i}\\frac{\\frac{3\\pi}{2}+2\\pi k}{3}}$ für $k=0,1,2$:\n' +
      '  $z_0 = e^{\\mathrm{i}\\frac{3\\pi/2}{3}} = e^{\\mathrm{i}\\frac{\\pi}{2}} = \\mathrm{i}$\n' +
      '  $z_1 = e^{\\mathrm{i}\\frac{3\\pi/2+2\\pi}{3}} = e^{\\mathrm{i}\\frac{7\\pi/2}{3}} = e^{\\mathrm{i}\\frac{7\\pi}{6}}$\n' +
      '  $z_2 = e^{\\mathrm{i}\\frac{3\\pi/2+4\\pi}{3}} = e^{\\mathrm{i}\\frac{11\\pi/2}{3}} = e^{\\mathrm{i}\\frac{11\\pi}{6}}$',
    schwierigkeit: 'mittel',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b3_a3',
    titel: 'Multiplikation als Drehung in der Gaußschen Zahlenebene',
    aufgabeText:
      '(a) Sei $\\varphi \\in [0, 2\\pi)$. Was passiert anschaulich bei der Multiplikation einer komplexen Zahl $z$ mit $e^{\\mathrm{i}\\varphi}$ bzw. $e^{-\\mathrm{i}\\varphi}$, also wo liegen $e^{\\mathrm{i}\\varphi} z$ und $e^{-\\mathrm{i}\\varphi} z$ in der komplexen Zahlenebene verglichen mit $z$?\n\n' +
      '(b) Drehen Sie unter Verwendung Ihrer Überlegungen aus Teil (a) die komplexe Zahl $z = -1 + 2\\mathrm{i}$ um $\\tfrac{\\pi}{2}$ gegen den Uhrzeigersinn und im Uhrzeigersinn und schreiben Sie das Ergebnis jeweils in der Form $x + y\\mathrm{i}$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Eine der schönsten Eigenschaften der komplexen Multiplikation:\n\n' +
          '  $e^{\\mathrm{i}\\varphi} \\cdot z$ = $z$ um Winkel $\\varphi$ GEGEN den Uhrzeigersinn gedreht\n' +
          '  $e^{-\\mathrm{i}\\varphi} \\cdot z$ = $z$ um Winkel $\\varphi$ IM Uhrzeigersinn gedreht\n\n' +
          'Warum? In Polarform $z = r\\,e^{\\mathrm{i}\\psi}$:\n' +
          '  $e^{\\mathrm{i}\\varphi} \\cdot r\\,e^{\\mathrm{i}\\psi} = r\\,e^{\\mathrm{i}(\\psi+\\varphi)}$\n' +
          '  Der Betrag $r$ bleibt gleich (keine Streckung!), nur der Winkel ändert sich um $\\varphi$.\n\n' +
          'Spezialfälle:\n' +
          '  Multiplikation mit $\\mathrm{i} = e^{\\mathrm{i}\\frac{\\pi}{2}}$: Drehung um $90°$ gegen den Uhrzeigersinn\n' +
          '  Multiplikation mit $-\\mathrm{i} = e^{-\\mathrm{i}\\frac{\\pi}{2}}$: Drehung um $90°$ im Uhrzeigersinn',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '(a) Nutze Polarform: Schreibe $z = r\\,e^{\\mathrm{i}\\psi}$, multipliziere und beobachte, was mit Betrag und Winkel passiert.\n\n' +
          '(b) Drehung um $\\frac{\\pi}{2}$:\n' +
          '  Gegen den Uhrzeigersinn: Multipliziere mit $e^{\\mathrm{i}\\frac{\\pi}{2}} = \\cos\\frac{\\pi}{2} + \\mathrm{i}\\sin\\frac{\\pi}{2} = \\mathrm{i}$\n' +
          '  Im Uhrzeigersinn: Multipliziere mit $e^{-\\mathrm{i}\\frac{\\pi}{2}} = \\cos\\frac{\\pi}{2} - \\mathrm{i}\\sin\\frac{\\pi}{2} = -\\mathrm{i}$\n\n' +
          'Berechnung:\n' +
          '  Gegen den UZS: $\\mathrm{i} \\cdot (-1+2\\mathrm{i}) = ?$\n' +
          '  Im UZS: $(-\\mathrm{i}) \\cdot (-1+2\\mathrm{i}) = ?$',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Beispiel: Drehe $z = 3 + \\mathrm{i}$ um $\\frac{\\pi}{2}$ gegen den Uhrzeigersinn.\n' +
          '  Multiplikation mit $\\mathrm{i}$: $\\mathrm{i}(3+\\mathrm{i}) = 3\\mathrm{i} + \\mathrm{i}^2 = 3\\mathrm{i} - 1 = -1 + 3\\mathrm{i}$\n\n' +
          'Probe: Beträge vergleichen:\n' +
          '  $|3+\\mathrm{i}| = \\sqrt{10}$,  $|-1+3\\mathrm{i}| = \\sqrt{1+9} = \\sqrt{10}$ ✓ (gleicher Betrag)\n\n' +
          'Für $z = -1+2\\mathrm{i}$, gegen den UZS:\n' +
          '  $\\mathrm{i}(-1+2\\mathrm{i}) = -\\mathrm{i} + 2\\mathrm{i}^2 = -\\mathrm{i} - 2 = -2 - \\mathrm{i}$',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Richtung verwechseln: Positiver Winkel (z.B. $e^{\\mathrm{i}\\frac{\\pi}{2}}$) dreht GEGEN den Uhrzeigersinn; negativer ($e^{-\\mathrm{i}\\frac{\\pi}{2}}$) dreht IM Uhrzeigersinn.\n\n' +
          '• $\\mathrm{i}^2 = -1$ vergessen: $\\mathrm{i} \\cdot (-1+2\\mathrm{i}) = -\\mathrm{i} + 2\\mathrm{i}^2 = -\\mathrm{i} - 2$.\n\n' +
          '• Ergebnis muss in $x+y\\mathrm{i}$-Form sein: Nicht als $-2 + (-1)\\mathrm{i}$ lassen, sondern $-2 - \\mathrm{i}$ schreiben.',
      },
    ],
    loesung:
      '(a) In Polarform $z = r\\,e^{\\mathrm{i}\\psi}$:\n' +
      '  $e^{\\mathrm{i}\\varphi} \\cdot r\\,e^{\\mathrm{i}\\psi} = r\\,e^{\\mathrm{i}(\\psi+\\varphi)}$ → Betrag $r$ unverändert, Winkel um $\\varphi$ erhöht.\n' +
      '  Multiplikation mit $e^{\\mathrm{i}\\varphi}$: Drehung um $\\varphi$ gegen den Uhrzeigersinn.\n' +
      '  Multiplikation mit $e^{-\\mathrm{i}\\varphi}$: Drehung um $\\varphi$ im Uhrzeigersinn.\n\n' +
      '(b) Drehung von $z = -1+2\\mathrm{i}$ um $\\frac{\\pi}{2}$:\n' +
      '  $e^{\\mathrm{i}\\frac{\\pi}{2}} = \\cos\\frac{\\pi}{2} + \\mathrm{i}\\sin\\frac{\\pi}{2} = \\mathrm{i}$\n' +
      '  $e^{-\\mathrm{i}\\frac{\\pi}{2}} = -\\mathrm{i}$\n\n' +
      '  Gegen den Uhrzeigersinn: $\\mathrm{i}\\cdot(-1+2\\mathrm{i}) = -\\mathrm{i} + 2\\mathrm{i}^2 = -\\mathrm{i} - 2 = -2 - \\mathrm{i}$\n' +
      '  Im Uhrzeigersinn: $(-\\mathrm{i})\\cdot(-1+2\\mathrm{i}) = \\mathrm{i} - 2\\mathrm{i}^2 = \\mathrm{i} + 2 = 2 + \\mathrm{i}$',
    schwierigkeit: 'mittel',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b3_a4',
    titel: 'Eigenschaften von Relationen',
    aufgabeText:
      'Überlegen Sie bei nachfolgenden Relationen jeweils, welche der Eigenschaften Reflexivität, Irreflexivität, Symmetrie, Asymmetrie, Transitivität, Antisymmetrie erfüllt sind.\n\n' +
      '(a) $M$ = Menge aller Menschen. Relation $R_1$: $xR_1y$, falls $x$ und $y$ am selben Tag Geburtstag haben.\n\n' +
      '(b) $M$ = Menge aller Menschen. Relation $R_2$: $xR_2y$, falls $x$ und $y$ am selben Tag Geburtstag haben oder gleich groß sind.\n\n' +
      '(c) Relation $R_3$ auf $\\mathbb{N}^*$: $R_3 := \\{(m,n) : m \\text{ teilt } n \\text{ ohne Rest}\\}$.\n\n' +
      '(d) Relation $R_4$ auf $\\mathbb{R} \\times \\mathbb{R}$: $(a,b)\\,R_4\\,(c,d)$, falls $a < c$ oder ($a = c$ und $b \\leq d$). Sind Äquivalenz- oder Ordnungsrelationen dabei?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Definitionen der Eigenschaften für eine Relation $R$ auf einer Menge $M$:\n\n' +
          '• Reflexiv: $\\forall x \\in M: xRx$ (jedes Element steht mit sich selbst in Relation)\n' +
          '• Irreflexiv: $\\forall x \\in M: \\neg(xRx)$ (kein Element steht mit sich selbst in Relation)\n' +
          '• Symmetrisch: $xRy \\Rightarrow yRx$ (Richtung egal)\n' +
          '• Antisymmetrisch: $xRy \\wedge yRx \\Rightarrow x=y$ (wenn hin und zurück, dann gleich)\n' +
          '• Asymmetrisch: $xRy \\Rightarrow \\neg(yRx)$ (kein Hin und Zurück möglich)\n' +
          '• Transitiv: $xRy \\wedge yRz \\Rightarrow xRz$\n\n' +
          'Klassifikation:\n' +
          '  Äquivalenzrelation = reflexiv + symmetrisch + transitiv\n' +
          '  Partielle Ordnung = reflexiv + antisymmetrisch + transitiv\n' +
          '  Totale Ordnung = partielle Ordnung + alle Paare vergleichbar',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Für jede Relation:\n' +
          '1. Reflexivität: Gilt $xRx$ für alle $x$? (Anschaulich: hat jede Person denselben Geburtstag wie sich selbst?)\n' +
          '2. Symmetrie: Wenn $xRy$ gilt, folgt dann $yRx$? (Wenn A und B gleichen Geburtstag haben, gilt das auch für B und A?)\n' +
          '3. Transitivität: Wenn $xRy$ und $yRz$, folgt $xRz$? (Gegenbeispiel reicht zur Widerlegung!)\n' +
          '4. Antisymmetrie: Können $xRy$ und $yRx$ gleichzeitig gelten mit $x \\neq y$?\n\n' +
          'Tipps:\n' +
          '  Gegenbeispiele suchen für Eigenschaften, die NICHT gelten\n' +
          '  Für Transitivität: Suche eine Kette $x \\to y \\to z$ und prüfe ob $x \\to z$',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Teilbarkeitsrelation $R_3$ ($m \\mid n$):\n' +
          '  Reflexiv: $m \\mid m$ für alle $m$ ✓ (jede Zahl teilt sich selbst)\n' +
          '  Antisymmetrisch: $m \\mid n$ und $n \\mid m$ → $m = n$ ✓ (für natürliche Zahlen)\n' +
          '  Transitiv: $m \\mid n$ und $n \\mid k$ → $m \\mid k$ ✓ (z.B. $2 \\mid 4$ und $4 \\mid 8$ → $2 \\mid 8$)\n' +
          '  Nicht symmetrisch: $2 \\mid 4$ aber $4 \\nmid 2$ ✗\n' +
          '  → $R_3$ ist eine PARTIELLE ORDNUNG (keine totale Ordnung, da z.B. 2 und 3 nicht vergleichbar)',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Symmetrie ≠ Antisymmetrie: Symmetrisch bedeutet immer Hin und zurück; antisymmetrisch bedeutet Hin und zurück nur bei gleichen Elementen.\n\n' +
          '• Reflexiv ≠ nicht irreflexiv: Eine Relation kann weder reflexiv noch irreflexiv sein (gemischt).\n\n' +
          '• Transitivität von $R_2$ (Geburtstag ODER Größe): Gegenbeispiel suchen!\n' +
          '  A und B haben gleichen Geburtstag ($A\\,R_2\\,B$); B und C sind gleich groß ($B\\,R_2\\,C$). Gilt $A\\,R_2\\,C$? Nicht notwendigerweise!',
      },
    ],
    loesung:
      '(a) $R_1$: reflexiv, symmetrisch, transitiv → Äquivalenzrelation.\n\n' +
      '(b) $R_2$: reflexiv, symmetrisch. Nicht transitiv (Gegenbeispiel: gleicher Geburtstag + gleiche Größe müssen nicht transitiv verknüpft sein) → keine Äquivalenzrelation, keine Ordnungsrelation.\n\n' +
      '(c) $R_3$ (Teilbarkeit): reflexiv, antisymmetrisch, transitiv → partielle Ordnungsrelation.\n\n' +
      '(d) $R_4$ (lexikographische Ordnung): reflexiv, antisymmetrisch, transitiv, alle Paare vergleichbar → totale Ordnungsrelation.\n\n' +
      '$R_1$ ist Äquivalenzrelation; $R_3$ und $R_4$ sind Ordnungsrelationen ($R_3$ partiell, $R_4$ total).',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },
  {
    id: 'b3_a5',
    titel: 'Relationen mit vorgegebenen Eigenschaften konstruieren',
    aufgabeText:
      'Geben Sie eine Relation auf $\\mathbb{N}$ an, die\n' +
      '(a) reflexiv ist, aber weder symmetrisch noch transitiv;\n' +
      '(b) symmetrisch ist, aber weder reflexiv noch transitiv;\n' +
      '(c) transitiv ist, aber weder reflexiv noch symmetrisch;\n' +
      '(d) reflexiv, transitiv und symmetrisch ist.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Eine Relation auf $\\mathbb{N}$ ist eine Teilmenge $R \\subseteq \\mathbb{N} \\times \\mathbb{N}$.\n\n' +
          'Die drei Eigenschaften:\n' +
          '  Reflexiv: alle $(n,n) \\in R$\n' +
          '  Symmetrisch: $(a,b) \\in R \\Rightarrow (b,a) \\in R$\n' +
          '  Transitiv: $(a,b) \\in R$ und $(b,c) \\in R \\Rightarrow (a,c) \\in R$\n\n' +
          'Wichtig: Die Eigenschaften sind unabhängig voneinander. Man kann jede Kombination haben.\n\n' +
          'Für kleine Mengen reichen oft winzige Relationen auf $\\{1, 2, 3\\}$ als Beispiel.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '(a) Reflexiv aber nicht symmetrisch, nicht transitiv:\n' +
          '  Starte mit $R = \\{(n,n) : n \\in \\mathbb{N}\\}$ (Identitätsrelation – reflexiv)\n' +
          '  Füge $(1,2)$ hinzu aber NICHT $(2,1)$ → bricht Symmetrie\n' +
          '  Füge $(2,3)$ hinzu aber NICHT $(1,3)$ → bricht Transitivität\n\n' +
          '(b) Symmetrisch, nicht reflexiv, nicht transitiv:\n' +
          '  Nimm $R = \\{(1,2),(2,1)\\}$\n' +
          '  Symmetrisch ✓; nicht reflexiv ($(1,1) \\notin R$) ✓; nicht transitiv ($(1,2),(2,1) \\in R$ aber $(1,1) \\notin R$) ✓\n\n' +
          '(c) Transitiv, nicht reflexiv, nicht symmetrisch:\n' +
          '  Nimm $R = \\{(1,2)\\}$ oder die leere Relation $\\emptyset$\n\n' +
          '(d) Alle drei Eigenschaften = Äquivalenzrelation:\n' +
          '  Einfachste Möglichkeit: $R = \\mathbb{N} \\times \\mathbb{N}$ (alles in Relation)',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Für endliche Überprüfung auf $\\{1,2,3\\}$:\n\n' +
          '(a) $R = \\{(1,1),(2,2),(3,3),(1,2),(2,3)\\}$\n' +
          '  Reflexiv: $(1,1),(2,2),(3,3) \\in R$ ✓\n' +
          '  Nicht symmetrisch: $(1,2) \\in R$, aber $(2,1) \\notin R$ ✓\n' +
          '  Nicht transitiv: $(1,2),(2,3) \\in R$, aber $(1,3) \\notin R$ ✓\n\n' +
          '(b) $R = \\{(1,2),(2,1)\\}$\n' +
          '  Symmetrisch: $(1,2)$ und $(2,1)$ beide drin ✓\n' +
          '  Nicht reflexiv: $(1,1) \\notin R$ ✓\n' +
          '  Nicht transitiv: $(1,2),(2,1) \\in R$ aber $(1,1) \\notin R$ ✓',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Die leere Relation $\\emptyset$ ist symmetrisch und transitiv (trivialerweise), aber NICHT reflexiv.\n\n' +
          '• Für (d): $\\mathbb{N} \\times \\mathbb{N}$ funktioniert, aber auch jede einzelne Äquivalenzklasse $\\{(n,m) : n \\bmod k = m \\bmod k\\}$.\n\n' +
          '• Transitivität prüfen: Für JEDEN Pfad $a \\to b \\to c$ muss $(a,c) \\in R$ gelten.',
      },
    ],
    loesung:
      '(a) $R = \\{(n,n) : n \\in \\mathbb{N}\\} \\cup \\{(1,2),(2,3)\\}$\n' +
      '(reflexiv, nicht symmetrisch da $(2,1) \\notin R$, nicht transitiv da $(1,3) \\notin R$)\n\n' +
      '(b) $R = \\{(1,2),(2,1)\\}$\n' +
      '(symmetrisch, nicht reflexiv, nicht transitiv)\n\n' +
      '(c) $R = \\{(1,2)\\}$\n' +
      '(transitiv, nicht reflexiv, nicht symmetrisch)\n\n' +
      '(d) $R = \\mathbb{N} \\times \\mathbb{N}$\n' +
      '(reflexiv, symmetrisch, transitiv → Äquivalenzrelation)',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },
  {
    id: 'b3_a6',
    titel: 'Äquivalenzrelationen und Äquivalenzklassen',
    aufgabeText:
      'Welche der folgenden Relationen sind Äquivalenzrelationen? Geben Sie bei den Äquivalenzrelationen jeweils die Äquivalenzklassen an.\n\n' +
      '(a) $R_1 := \\{(1,1),(2,2),(2,4),(4,4)\\} \\subseteq \\{1,2,3,4\\} \\times \\{1,2,3,4\\}$\n\n' +
      '(b) $R_2 := \\{(x,y) : f(x) = f(y)\\} \\subseteq [0,1] \\times [0,1]$, wobei $f(x) = \\begin{cases} 1, & x \\in \\mathbb{Q} \\\\ 0, & x \\notin \\mathbb{Q} \\end{cases}$\n\n' +
      '(c) $R_3$ auf $\\mathbb{Z}$: $x\\,R_3\\,y$ falls $x + y$ gerade ist.\n\n' +
      '(d) $R_4$ auf $\\mathbb{N}^*$: $x\\,R_4\\,y$ falls $a, b \\in \\mathbb{N}^*$ existieren, so dass $y = ax^b$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Eine Äquivalenzrelation ist reflexiv + symmetrisch + transitiv.\n\n' +
          'Äquivalenzklassen: Die Äquivalenzklasse von $x$ ist $[x] = \\{y : xRy\\}$ (alle Elemente, die mit $x$ in Relation stehen).\n\n' +
          'Wichtig: Äquivalenzklassen bilden eine PARTITION der Grundmenge:\n' +
          '  Sie sind paarweise disjunkt (kein Element liegt in zwei verschiedenen Klassen)\n' +
          '  Ihre Vereinigung ist die gesamte Menge\n\n' +
          'Tipp für (b): Jede durch eine Funktion definierte Relation $xRy :\\Leftrightarrow f(x) = f(y)$ ist automatisch eine Äquivalenzrelation. Die Äquivalenzklassen sind die Urbilder der Funktionswerte.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Für jede Relation: Systematisch prüfen\n\n' +
          '(a) Endliche Relation explizit durchgehen:\n' +
          '  Reflexiv: Sind $(1,1),(2,2),(3,3),(4,4)$ alle enthalten?\n' +
          '  Symmetrisch: Für jedes $(a,b)$: ist auch $(b,a)$ enthalten?\n' +
          '  Transitiv: Für alle Ketten $(a,b),(b,c)$: ist $(a,c)$ enthalten?\n\n' +
          '(c) $x + y$ gerade $\\Leftrightarrow$ $x$ und $y$ haben dieselbe Parität (beide gerade oder beide ungerade)\n' +
          '  → Äquivalenzklassen: gerade Zahlen und ungerade Zahlen\n\n' +
          '(d) Symmetrie prüfen: Aus $y = ax^b$ folgt NICHT unbedingt $x = cy^d$',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Für (b): Äquivalenzklassen berechnen:\n' +
          '  Alle $x \\in [0,1] \\cap \\mathbb{Q}$ haben $f(x) = 1$ → sie sind alle äquivalent zueinander\n' +
          '  Alle $x \\in [0,1] \\setminus \\mathbb{Q}$ haben $f(x) = 0$ → sie sind alle äquivalent zueinander\n' +
          '  Klassen: $[0,1] \\cap \\mathbb{Q}$ und $[0,1] \\setminus \\mathbb{Q}$\n\n' +
          'Für (c) auf $\\mathbb{Z}$:\n' +
          '  $x + y$ gerade ↔ beide gerade oder beide ungerade\n' +
          '  Klasse der geraden Zahlen: $[0] = \\{\\ldots,-4,-2,0,2,4,\\ldots\\}$\n' +
          '  Klasse der ungeraden Zahlen: $[1] = \\{\\ldots,-3,-1,1,3,5,\\ldots\\}$',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Für (a): $(3,3) \\notin R_1$! Die Relation ist nicht reflexiv (das Element 3 fehlt). Damit ist $R_1$ KEINE Äquivalenzrelation.\n\n' +
          '• Für (a): $(2,4) \\in R_1$ aber $(4,2) \\notin R_1$ → auch nicht symmetrisch.\n\n' +
          '• Für (d): Asymmetrie zu zeigen reicht als Gegenbeispiel: Wenn $1 R_4 2$ (mit $a=2, b=1$: $2 = 2\\cdot1^1$), folgt nicht $2 R_4 1$.',
      },
    ],
    loesung:
      '(a) $R_1 = \\{(1,1),(2,2),(2,4),(4,4)\\}$:\n' +
      '  Reflexiv? $(3,3) \\notin R_1$ → ✗ Nicht reflexiv.\n' +
      '  Symmetrisch? $(2,4) \\in R_1$, aber $(4,2) \\notin R_1$ → ✗ Nicht symmetrisch.\n' +
      '  → Keine Äquivalenzrelation.\n\n' +
      '(b) $R_2$: $xR_2y \\Leftrightarrow f(x) = f(y)$. Jede Relation der Form $f(x)=f(y)$ ist automatisch eine Äquivalenzrelation:\n' +
      '  Reflexiv: $f(x) = f(x)$ → ✓; Symmetrisch: $f(x)=f(y) \\Rightarrow f(y)=f(x)$ → ✓; Transitiv: → ✓\n' +
      '  Äquivalenzklassen = Urbilder: $f^{-1}(1) = [0,1]\\cap\\mathbb{Q}$ und $f^{-1}(0) = [0,1]\\setminus\\mathbb{Q}$.\n\n' +
      '(c) $R_3$: $xR_3y \\Leftrightarrow x+y$ gerade $\\Leftrightarrow$ $x$ und $y$ haben gleiche Parität.\n' +
      '  Reflexiv: $x+x=2x$ gerade → ✓; Symmetrisch: ✓; Transitiv: gleiche Parität ist transitiv → ✓\n' +
      '  → Äquivalenzrelation. Klassen: gerade $\\mathbb{Z}$ und ungerade $\\mathbb{Z}$.\n\n' +
      '(d) $R_4$: $xR_4y \\Leftrightarrow \\exists\\,a,b\\in\\mathbb{N}^*: y = ax^b$.\n' +
      '  Symmetrisch? Gegenbeispiel: $1\\,R_4\\,2$ (mit $a=2,b=1$: $2=2\\cdot1^1$).\n' +
      '  Gilt $2\\,R_4\\,1$? Bräuchte $a,b$ mit $1=a\\cdot2^b$, also $a=\\frac{1}{2^b}$, aber $a\\in\\mathbb{N}^*$ → unmöglich.\n' +
      '  → Nicht symmetrisch → Keine Äquivalenzrelation.',
    schwierigkeit: 'schwer',
    kategorie: 'Relationen',
  },
]
