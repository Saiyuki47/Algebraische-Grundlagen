import type { ClaudeAufgabe } from './_types'

// ─────────────────────────────────────────────────────────────────────────────
// Komplexe Zahlen – Blätter 1–3.
// Je eine eigens erdachte Beispielaufgabe pro Aufgabenart der Übungsblätter.
// ─────────────────────────────────────────────────────────────────────────────

export const komplexeZahlen: ClaudeAufgabe[] = [
  {
    id: 'c_k_kartesisch',
    art: 'Komplexe Grundrechenarten',
    titel: 'Konjugierte, Betrag und Grundrechenarten',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 1, Aufgabe 2',
    aufgabeText:
      'Seien $z_1 = 3 + 2\\mathrm{i}$ und $z_2 = 1 - 4\\mathrm{i}$. Berechnen Sie:\n' +
      '(a) $\\overline{z_1}$ und $\\overline{z_2}$\n' +
      '(b) $|z_1|$ und $|z_2|$\n' +
      '(c) $z_1 + z_2$ und $z_1 - z_2$\n' +
      '(d) $z_1 \\cdot z_2$\n' +
      '(e) $\\dfrac{z_1}{z_2}$\n' +
      'Geben Sie alle Ergebnisse in der Form $x + y\\mathrm{i}$ mit $x, y \\in \\mathbb{R}$ an.',
    referenz: ['komplexe-grundoperationen'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Für $z = x + y\\mathrm{i}$ mit $x, y \\in \\mathbb{R}$ gilt:\n' +
        '• Konjugierte: $\\overline{z} = x - y\\mathrm{i}$ (Vorzeichen des Imaginärteils umdrehen, Spiegelung an der reellen Achse).\n' +
        '• Betrag: $|z| = \\sqrt{x^2 + y^2}$ (Abstand vom Ursprung), mit $|z|^2 = z\\,\\overline{z}$.\n' +
        '• Addition/Subtraktion: Real- und Imaginärteil getrennt.\n' +
        '• Multiplikation: ausmultiplizieren und $\\mathrm{i}^2 = -1$ einsetzen.\n' +
        '• Division: mit der Konjugierten des Nenners erweitern, damit der Nenner reell wird.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Multiplikation: $(x_1 + y_1\\mathrm{i})(x_2 + y_2\\mathrm{i}) = (x_1 x_2 - y_1 y_2) + (x_1 y_2 + x_2 y_1)\\mathrm{i}$.\n\n' +
        'Division: erweitere mit $\\overline{z_2}$:\n' +
        '$\\dfrac{z_1}{z_2} = \\dfrac{z_1 \\cdot \\overline{z_2}}{z_2 \\cdot \\overline{z_2}} = \\dfrac{z_1 \\cdot \\overline{z_2}}{|z_2|^2}$.\n' +
        'Der Nenner $|z_2|^2$ ist reell, damit steht das Ergebnis sauber in der Form $x + y\\mathrm{i}$.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Für $w = 2 + \\mathrm{i}$ und $v = 1 - \\mathrm{i}$:\n' +
        '• Produkt: $w\\,v = (2+\\mathrm{i})(1-\\mathrm{i}) = 2 - 2\\mathrm{i} + \\mathrm{i} - \\mathrm{i}^2 = 2 - \\mathrm{i} + 1 = 3 - \\mathrm{i}$.\n' +
        '• Quotient: $\\dfrac{w}{v} = \\dfrac{(2+\\mathrm{i})(1+\\mathrm{i})}{(1-\\mathrm{i})(1+\\mathrm{i})} = \\dfrac{2 + 2\\mathrm{i} + \\mathrm{i} - 1}{1 + 1} = \\dfrac{1 + 3\\mathrm{i}}{2} = \\dfrac{1}{2} + \\dfrac{3}{2}\\mathrm{i}$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        '• $\\mathrm{i}^2 = -1$ nicht vergessen: aus $-8\\mathrm{i}^2$ wird $+8$ (reell).\n' +
        '• Bei der Division müssen Zähler UND Nenner mit $\\overline{z_2}$ multipliziert werden.\n' +
        '• $\\mathrm{Im}(z)$ ist eine reelle Zahl: $\\mathrm{Im}(3+2\\mathrm{i}) = 2$, nicht $2\\mathrm{i}$.\n' +
        '• Der Betrag ist nie negativ und wird nicht komponentenweise gebildet: $|3+2\\mathrm{i}| = \\sqrt{13}$, nicht $3+2$.' },
    ],
    loesung:
      '**(a) Konjugierte**\n' +
      'Vorzeichen des Imaginärteils umdrehen:\n' +
      '$\\overline{z_1} = 3 - 2\\mathrm{i}$, $\\quad \\overline{z_2} = 1 + 4\\mathrm{i}$.\n\n' +
      '**(b) Beträge**\n' +
      '$|z_1| = \\sqrt{3^2 + 2^2} = \\sqrt{9 + 4} = \\sqrt{13}$.\n' +
      '$|z_2| = \\sqrt{1^2 + (-4)^2} = \\sqrt{1 + 16} = \\sqrt{17}$.\n\n' +
      '**(c) Summe und Differenz** (komponentenweise)\n' +
      '$z_1 + z_2 = (3 + 1) + (2 - 4)\\mathrm{i} = 4 - 2\\mathrm{i}$.\n' +
      '$z_1 - z_2 = (3 - 1) + (2 - (-4))\\mathrm{i} = 2 + 6\\mathrm{i}$.\n\n' +
      '**(d) Produkt** (ausmultiplizieren, $\\mathrm{i}^2 = -1$)\n' +
      '$z_1 \\cdot z_2 = (3 + 2\\mathrm{i})(1 - 4\\mathrm{i}) = 3 - 12\\mathrm{i} + 2\\mathrm{i} - 8\\mathrm{i}^2 = 3 - 10\\mathrm{i} + 8 = 11 - 10\\mathrm{i}$.\n\n' +
      '**(e) Quotient** (mit $\\overline{z_2} = 1 + 4\\mathrm{i}$ erweitern)\n' +
      '$\\dfrac{z_1}{z_2} = \\dfrac{(3 + 2\\mathrm{i})(1 + 4\\mathrm{i})}{(1 - 4\\mathrm{i})(1 + 4\\mathrm{i})} = \\dfrac{3 + 12\\mathrm{i} + 2\\mathrm{i} + 8\\mathrm{i}^2}{1^2 + 4^2} = \\dfrac{3 + 14\\mathrm{i} - 8}{17} = \\dfrac{-5 + 14\\mathrm{i}}{17} = -\\dfrac{5}{17} + \\dfrac{14}{17}\\mathrm{i}$.\n\n' +
      '**Kontrolle**\n' +
      'Der Nenner $(1 - 4\\mathrm{i})(1 + 4\\mathrm{i}) = 1 + 16 = 17 = |z_2|^2$ ist reell — genau das war das Ziel des Erweiterns.',
  },
  {
    id: 'c_k_mengen',
    art: 'Mengen in der Gaußschen Zahlenebene',
    titel: 'Kreisscheibe, Halbebenen und Mittelsenkrechte',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 2, Aufgabe 1',
    aufgabeText:
      'Veranschaulichen Sie die folgenden Mengen in der komplexen Zahlenebene:\n' +
      '(a) $A := \\{z \\in \\mathbb{C} : |z - (2 - \\mathrm{i})| \\leq 2\\}$\n' +
      '(b) $B := \\{z \\in \\mathbb{C} : \\mathrm{Re}(z) \\geq 1 \\text{ und } \\mathrm{Im}(z) < 2\\}$\n' +
      '(c) $C := \\{z \\in \\mathbb{C} : |z - 2\\mathrm{i}| = |z + 2|\\}$',
    referenz: ['gauss-mengen'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Der Ausdruck $|z - z_0|$ ist der Abstand von $z$ zum festen Punkt $z_0$. Damit lassen sich Figuren beschreiben:\n' +
        '• $|z - z_0| = r$ → Kreis um $z_0$ mit Radius $r$ (nur der Rand).\n' +
        '• $|z - z_0| \\leq r$ → ausgefüllte Kreisscheibe (Rand dabei).\n' +
        '• Bedingung an $\\mathrm{Re}(z)$ → senkrechte Gerade oder Halbebene.\n' +
        '• Bedingung an $\\mathrm{Im}(z)$ → waagerechte Gerade oder Halbebene.\n' +
        '• $|z - a| = |z - b|$ → Gleichabstand von $a$ und $b$ → Mittelsenkrechte.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        '(a) Klammerinhalt gleich null setzen: $z - (2 - \\mathrm{i}) = 0 \\Rightarrow z_0 = 2 - \\mathrm{i}$, also Mittelpunkt $(2, -1)$, Radius $2$.\n\n' +
        '(b) Beide Bedingungen mit „und" bilden den Durchschnitt zweier Halbebenen: rechts von $x = 1$ (Rand dabei) UND unterhalb von $y = 2$ (Rand nicht dabei).\n\n' +
        '(c) Setze $z = x + y\\mathrm{i}$ ein und quadriere beide Beträge, dann fallen die quadratischen Terme weg und es bleibt eine Geradengleichung.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Rechnung zu (c) mit $z = x + y\\mathrm{i}$:\n' +
        '$|z - 2\\mathrm{i}|^2 = x^2 + (y - 2)^2$ und $|z + 2|^2 = (x + 2)^2 + y^2$.\n' +
        'Der Punkt $2\\mathrm{i}$ ist $(0, 2)$, der Punkt $-2$ ist $(-2, 0)$. Gesucht sind alle $z$, die von beiden gleich weit entfernt sind.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        '• Bei $|z - (2 - \\mathrm{i})|$ ist der Mittelpunkt $2 - \\mathrm{i}$, also $(2, -1)$ — der Imaginärteil ist $-1$ (unter der reellen Achse).\n' +
        '• $\\leq$ heißt Rand gehört dazu (durchgezogen), $<$ heißt Rand fehlt (gestrichelt).\n' +
        '• „und" ist der Schnitt (beide Bedingungen gleichzeitig), nicht die Vereinigung.' },
    ],
    loesung:
      '**(a) Kreisscheibe**\n' +
      'Aus $z - (2 - \\mathrm{i}) = 0$ folgt der Mittelpunkt $z_0 = 2 - \\mathrm{i}$, also Punkt $(2, -1)$.\n' +
      '$A$ ist die abgeschlossene Kreisscheibe um $(2, -1)$ mit Radius $2$. Wegen $\\leq$ gehört der Kreisrand dazu (durchgezogen).\n\n' +
      '**(b) Schnitt zweier Halbebenen**\n' +
      'Mit $z = x + y\\mathrm{i}$ bedeutet die Bedingung $x \\geq 1$ und $y < 2$.\n' +
      '$B$ ist der Bereich rechts der senkrechten Geraden $x = 1$ (Rand durchgezogen, da $\\geq$) und zugleich unterhalb der waagerechten Geraden $y = 2$ (Rand gestrichelt, da $<$). Das ergibt ein nach rechts-unten offenes Viertel der Ebene.\n\n' +
      '**(c) Mittelsenkrechte**\n' +
      'Setze $z = x + y\\mathrm{i}$ und quadriere:\n' +
      '$x^2 + (y - 2)^2 = (x + 2)^2 + y^2$.\n' +
      'Ausmultiplizieren: $x^2 + y^2 - 4y + 4 = x^2 + 4x + 4 + y^2$.\n' +
      'Die Terme $x^2$, $y^2$ und $4$ heben sich auf: $-4y = 4x \\Rightarrow y = -x$.\n\n' +
      '$C$ ist also die Gerade $y = -x$, gleichbedeutend mit $\\mathrm{Re}(z) + \\mathrm{Im}(z) = 0$. Das ist genau die Mittelsenkrechte der Strecke zwischen $2\\mathrm{i} = (0, 2)$ und $-2 = (-2, 0)$ (Kontrolle: der Mittelpunkt $(-1, 1)$ erfüllt $y = -x$).',
  },
  {
    id: 'c_k_betrag_konjugation_beweis',
    art: 'Rechenregel beweisen',
    titel: 'Multiplikativität des Betrags beweisen',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 1, Aufgabe 5',
    aufgabeText:
      'Seien $z, w \\in \\mathbb{C}$. Beweisen Sie die Rechenregel\n' +
      '$|z \\cdot w| = |z| \\cdot |w|$,\n' +
      'indem Sie $z = x + y\\mathrm{i}$ und $w = u + v\\mathrm{i}$ mit $x, y, u, v \\in \\mathbb{R}$ ansetzen.',
    referenz: ['komplexe-grundoperationen'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Ein Beweis über Komponenten läuft immer gleich: setze $z = x + y\\mathrm{i}$ und $w = u + v\\mathrm{i}$ an, rechne beide Seiten getrennt aus und zeige, dass dasselbe herauskommt.\n\n' +
        'Nützlich ist hier, statt $|z \\cdot w|$ direkt das Quadrat $|z \\cdot w|^2$ zu betrachten: Wurzeln sind unpraktisch, Quadrate lassen sich sauber ausmultiplizieren. Ganz am Ende zieht man die Wurzel.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        '1. Produkt in kartesischer Form: $z \\cdot w = (xu - yv) + (xv + yu)\\mathrm{i}$.\n' +
        '2. Betrag quadrieren: $|z \\cdot w|^2 = (xu - yv)^2 + (xv + yu)^2$.\n' +
        '3. Ausmultiplizieren; die gemischten Terme heben sich auf.\n' +
        '4. Zu $(x^2 + y^2)(u^2 + v^2)$ faktorisieren, das ist $|z|^2 |w|^2$.\n' +
        '5. Wurzel ziehen (beide Seiten $\\geq 0$).' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Erinnerung an den Betrag: $|x + y\\mathrm{i}|^2 = x^2 + y^2$.\n\n' +
        'Die beiden Quadrate lauten:\n' +
        '$(xu - yv)^2 = x^2u^2 - 2xuyv + y^2v^2$,\n' +
        '$(xv + yu)^2 = x^2v^2 + 2xvyu + y^2u^2$.\n' +
        'Beim Addieren fällt $-2xuyv + 2xvyu = 0$ weg.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        '• Nicht linke und rechte Seite gleichzeitig umformen — jede Seite getrennt berechnen und erst am Schluss vergleichen.\n' +
        '• $\\mathrm{i}^2 = -1$ beim Produkt beachten: aus $yv\\,\\mathrm{i}^2$ wird $-yv$.\n' +
        '• Der Betrag ist $\\geq 0$; die Wurzel aus $|z|^2 |w|^2$ ist $|z|\\,|w|$, nicht $\\pm|z|\\,|w|$.' },
    ],
    loesung:
      '**Ansatz**\n' +
      'Sei $z = x + y\\mathrm{i}$ und $w = u + v\\mathrm{i}$ mit $x, y, u, v \\in \\mathbb{R}$.\n\n' +
      '**Produkt bilden**\n' +
      '$z \\cdot w = (x + y\\mathrm{i})(u + v\\mathrm{i}) = xu + xv\\mathrm{i} + yu\\mathrm{i} + yv\\mathrm{i}^2 = (xu - yv) + (xv + yu)\\mathrm{i}$.\n\n' +
      '**Betrag quadrieren**\n' +
      '$|z \\cdot w|^2 = (xu - yv)^2 + (xv + yu)^2$.\n\n' +
      '**Ausmultiplizieren**\n' +
      '$(xu - yv)^2 = x^2u^2 - 2xuyv + y^2v^2$,\n' +
      '$(xv + yu)^2 = x^2v^2 + 2xvyu + y^2u^2$.\n' +
      'Die gemischten Terme $-2xuyv$ und $+2xvyu$ heben sich auf. Es bleibt\n' +
      '$|z \\cdot w|^2 = x^2u^2 + y^2v^2 + x^2v^2 + y^2u^2$.\n\n' +
      '**Faktorisieren**\n' +
      '$x^2u^2 + x^2v^2 + y^2u^2 + y^2v^2 = x^2(u^2 + v^2) + y^2(u^2 + v^2) = (x^2 + y^2)(u^2 + v^2) = |z|^2 \\cdot |w|^2$.\n\n' +
      '**Wurzel ziehen**\n' +
      'Da Beträge nie negativ sind, folgt\n' +
      '$|z \\cdot w| = \\sqrt{|z|^2 \\cdot |w|^2} = |z| \\cdot |w|$.\n\n' +
      'Damit ist die Regel bewiesen. $\\Box$',
  },
  {
    id: 'c_k_polarform',
    art: 'Kartesisch → Polarform',
    titel: 'Polardarstellung mit Quadrantenbeachtung',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 2, Aufgabe 3',
    aufgabeText:
      'Skizzieren Sie die folgenden Zahlen in der Gaußschen Zahlenebene und bestimmen Sie ihre Polardarstellung $z = r\\,e^{\\mathrm{i}\\varphi}$ mit $r \\geq 0$ und $\\varphi \\in [0, 2\\pi)$.\n\n' +
      '(a) $z_1 = -1 + \\sqrt{3}\\,\\mathrm{i}$\n' +
      '(b) $z_2 = 3 - 3\\mathrm{i}$',
    referenz: ['polardarstellung'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Die Polardarstellung $z = r\\,e^{\\mathrm{i}\\varphi}$ beschreibt $z$ durch Länge $r = |z|$ und Winkel $\\varphi$ (gegen den Uhrzeigersinn ab der positiven reellen Achse).\n' +
        'Über die Eulersche Formel gilt $z = r(\\cos\\varphi + \\mathrm{i}\\sin\\varphi)$, also $\\mathrm{Re}(z) = r\\cos\\varphi$ und $\\mathrm{Im}(z) = r\\sin\\varphi$.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Schritt 1 – Betrag: $r = \\sqrt{\\mathrm{Re}(z)^2 + \\mathrm{Im}(z)^2}$.\n\n' +
        'Schritt 2 – Winkel über $\\cos\\varphi = \\dfrac{\\mathrm{Re}(z)}{r}$:\n' +
        '• Falls $\\mathrm{Im}(z) \\geq 0$ (obere Halbebene): $\\varphi = \\arccos\\!\\left(\\dfrac{\\mathrm{Re}(z)}{r}\\right)$.\n' +
        '• Falls $\\mathrm{Im}(z) < 0$ (untere Halbebene): $\\varphi = 2\\pi - \\arccos\\!\\left(\\dfrac{\\mathrm{Re}(z)}{r}\\right)$.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Standardwerte: $\\arccos\\!\\left(-\\tfrac{1}{2}\\right) = \\tfrac{2\\pi}{3}$, $\\arccos\\!\\left(\\tfrac{\\sqrt{2}}{2}\\right) = \\tfrac{\\pi}{4}$, $\\arccos\\!\\left(\\tfrac{1}{2}\\right) = \\tfrac{\\pi}{3}$, $\\arccos(0) = \\tfrac{\\pi}{2}$.\n\n' +
        'Probe: Setze $r$ und $\\varphi$ zurück ein — $r\\cos\\varphi$ und $r\\sin\\varphi$ müssen wieder Real- und Imaginärteil ergeben.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        '• $\\arccos$ liefert nur Winkel in $[0, \\pi]$. Für die untere Halbebene ($\\mathrm{Im}(z) < 0$) muss man $2\\pi - \\arccos(\\ldots)$ nehmen.\n' +
        '• Der Betrag ist immer $\\geq 0$: $|-1 + \\sqrt{3}\\,\\mathrm{i}| = 2$, nicht $-2$.\n' +
        '• Das Ergebnis muss im Bereich $[0, 2\\pi)$ liegen.' },
    ],
    loesung:
      '**Teil (a): $z_1 = -1 + \\sqrt{3}\\,\\mathrm{i}$** (2. Quadrant, denn $\\mathrm{Re} < 0$, $\\mathrm{Im} > 0$)\n\n' +
      'Betrag: $r_1 = \\sqrt{(-1)^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = \\sqrt{4} = 2$.\n\n' +
      'Winkel: $\\cos\\varphi_1 = \\dfrac{-1}{2}$. Da $\\mathrm{Im}(z_1) = \\sqrt{3} > 0$, ist\n' +
      '$\\varphi_1 = \\arccos\\!\\left(-\\dfrac{1}{2}\\right) = \\dfrac{2\\pi}{3}$.\n\n' +
      'Also $z_1 = 2\\,e^{\\mathrm{i}\\frac{2\\pi}{3}}$.\n' +
      'Probe: $2\\cos\\tfrac{2\\pi}{3} = 2\\cdot(-\\tfrac{1}{2}) = -1$ und $2\\sin\\tfrac{2\\pi}{3} = 2\\cdot\\tfrac{\\sqrt{3}}{2} = \\sqrt{3}$. ✓\n\n' +
      '**Teil (b): $z_2 = 3 - 3\\mathrm{i}$** (4. Quadrant, denn $\\mathrm{Re} > 0$, $\\mathrm{Im} < 0$)\n\n' +
      'Betrag: $r_2 = \\sqrt{3^2 + (-3)^2} = \\sqrt{9 + 9} = \\sqrt{18} = 3\\sqrt{2}$.\n\n' +
      'Winkel: $\\cos\\varphi_2 = \\dfrac{3}{3\\sqrt{2}} = \\dfrac{1}{\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2}$. Da $\\mathrm{Im}(z_2) = -3 < 0$, ist\n' +
      '$\\varphi_2 = 2\\pi - \\arccos\\!\\left(\\dfrac{\\sqrt{2}}{2}\\right) = 2\\pi - \\dfrac{\\pi}{4} = \\dfrac{7\\pi}{4}$.\n\n' +
      'Also $z_2 = 3\\sqrt{2}\\,e^{\\mathrm{i}\\frac{7\\pi}{4}}$.\n' +
      'Probe: $3\\sqrt{2}\\cos\\tfrac{7\\pi}{4} = 3\\sqrt{2}\\cdot\\tfrac{\\sqrt{2}}{2} = 3$ und $3\\sqrt{2}\\sin\\tfrac{7\\pi}{4} = 3\\sqrt{2}\\cdot(-\\tfrac{\\sqrt{2}}{2}) = -3$. ✓',
  },
  {
    id: 'c_k_kartesisch_aus_polar',
    art: 'Polarform → kartesisch',
    titel: 'Von der Polarform zurück in $x + y\\mathrm{i}$',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 2, Aufgabe 4',
    aufgabeText:
      'Bestimmen Sie die kartesische Darstellung $x + y\\mathrm{i}$ (mit $x, y \\in \\mathbb{R}$) der folgenden Zahlen.\n\n' +
      '(a) $z_1 = 2\\,e^{\\mathrm{i}\\frac{3\\pi}{4}}$\n' +
      '(b) $z_2 = 4\\,e^{\\mathrm{i}\\frac{5\\pi}{3}}$\n' +
      '(c) $z_3 = 3\\,e^{\\mathrm{i}\\frac{9\\pi}{4}}$',
    referenz: ['polardarstellung'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Die Eulersche Formel $e^{\\mathrm{i}\\varphi} = \\cos\\varphi + \\mathrm{i}\\sin\\varphi$ verbindet Polar- und kartesische Form. Für $z = r\\,e^{\\mathrm{i}\\varphi}$ gilt $\\mathrm{Re}(z) = r\\cos\\varphi$ und $\\mathrm{Im}(z) = r\\sin\\varphi$.\n\n' +
        'Da $\\cos$ und $\\sin$ die Periode $2\\pi$ haben, darf man von großen Winkeln ganze Vielfache von $2\\pi$ abziehen.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        '1. Winkel bei Bedarf auf $[0, 2\\pi)$ reduzieren (Vielfache von $2\\pi$ abziehen).\n' +
        '2. $\\cos\\varphi$ und $\\sin\\varphi$ als Standardwerte bestimmen.\n' +
        '3. Mit dem Betrag $r$ multiplizieren: $x = r\\cos\\varphi$, $y = r\\sin\\varphi$.\n' +
        '4. Ergebnis als $x + y\\mathrm{i}$ hinschreiben.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Wichtige Standardwerte:\n' +
        '• $\\tfrac{3\\pi}{4}$: $\\cos = -\\tfrac{\\sqrt{2}}{2}$, $\\sin = \\tfrac{\\sqrt{2}}{2}$.\n' +
        '• $\\tfrac{5\\pi}{3}$: $\\cos = \\tfrac{1}{2}$, $\\sin = -\\tfrac{\\sqrt{3}}{2}$.\n' +
        '• $\\tfrac{\\pi}{4}$: $\\cos = \\sin = \\tfrac{\\sqrt{2}}{2}$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        '• Große Winkel nicht reduzieren: $\\tfrac{9\\pi}{4}$ ist mehr als $2\\pi$, also erst $2\\pi = \\tfrac{8\\pi}{4}$ abziehen.\n' +
        '• $\\cos$ (Realteil) und $\\sin$ (Imaginärteil) nicht vertauschen.\n' +
        '• Vorfaktor $r$ nicht vergessen: bei $z_2$ steht $r = 4$ vor dem $e$.' },
    ],
    loesung:
      '**(a) $z_1 = 2\\,e^{\\mathrm{i}\\frac{3\\pi}{4}}$**\n' +
      '$z_1 = 2\\left(\\cos\\tfrac{3\\pi}{4} + \\mathrm{i}\\sin\\tfrac{3\\pi}{4}\\right) = 2\\left(-\\tfrac{\\sqrt{2}}{2} + \\mathrm{i}\\tfrac{\\sqrt{2}}{2}\\right) = -\\sqrt{2} + \\sqrt{2}\\,\\mathrm{i}$.\n\n' +
      '**(b) $z_2 = 4\\,e^{\\mathrm{i}\\frac{5\\pi}{3}}$**\n' +
      '$z_2 = 4\\left(\\cos\\tfrac{5\\pi}{3} + \\mathrm{i}\\sin\\tfrac{5\\pi}{3}\\right) = 4\\left(\\tfrac{1}{2} - \\mathrm{i}\\tfrac{\\sqrt{3}}{2}\\right) = 2 - 2\\sqrt{3}\\,\\mathrm{i}$.\n\n' +
      '**(c) $z_3 = 3\\,e^{\\mathrm{i}\\frac{9\\pi}{4}}$** (Winkel zuerst reduzieren)\n' +
      '$\\tfrac{9\\pi}{4} - 2\\pi = \\tfrac{9\\pi}{4} - \\tfrac{8\\pi}{4} = \\tfrac{\\pi}{4}$, also $z_3 = 3\\,e^{\\mathrm{i}\\frac{\\pi}{4}}$.\n' +
      '$z_3 = 3\\left(\\cos\\tfrac{\\pi}{4} + \\mathrm{i}\\sin\\tfrac{\\pi}{4}\\right) = 3\\left(\\tfrac{\\sqrt{2}}{2} + \\mathrm{i}\\tfrac{\\sqrt{2}}{2}\\right) = \\dfrac{3\\sqrt{2}}{2} + \\dfrac{3\\sqrt{2}}{2}\\,\\mathrm{i}$.',
  },
  {
    id: 'c_k_potenzen_i',
    art: 'Potenzen von i',
    titel: 'Hohe Potenzen von i über den Rest mod 4',
    schwierigkeit: 'einfach',
    quelle: 'Blatt 2, Aufgabe 5a',
    aufgabeText:
      'Verwenden Sie den Zyklus $\\mathrm{i}^0 = 1$, $\\mathrm{i}^1 = \\mathrm{i}$, $\\mathrm{i}^2 = -1$, $\\mathrm{i}^3 = -\\mathrm{i}$ und berechnen Sie:\n' +
      '(a) $\\mathrm{i}^{2027}$\n' +
      '(b) $\\mathrm{i}^{50} - \\mathrm{i}^{100}$\n' +
      '(c) $\\mathrm{i}^{2024} + \\mathrm{i}^{2025} + \\mathrm{i}^{2026} + \\mathrm{i}^{2027}$',
    referenz: [],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Die Potenzen von $\\mathrm{i}$ wiederholen sich im 4er-Takt: $1, \\mathrm{i}, -1, -\\mathrm{i}, 1, \\mathrm{i}, \\ldots$ Nach vier Schritten ist man wieder am Anfang.\n' +
        'Deshalb hängt $\\mathrm{i}^n$ nur vom Rest $n \\bmod 4$ ab (dem Rest bei Division durch $4$).' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Rest $r = n \\bmod 4$ bestimmen und ablesen:\n' +
        '• $r = 0$: $\\mathrm{i}^n = 1$\n' +
        '• $r = 1$: $\\mathrm{i}^n = \\mathrm{i}$\n' +
        '• $r = 2$: $\\mathrm{i}^n = -1$\n' +
        '• $r = 3$: $\\mathrm{i}^n = -\\mathrm{i}$' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Rest ausrechnen: $2027 = 4 \\cdot 506 + 3$, also $2027 \\bmod 4 = 3$ und $\\mathrm{i}^{2027} = \\mathrm{i}^3 = -\\mathrm{i}$.\n\n' +
        'Nützliche Beobachtung: Vier aufeinanderfolgende Potenzen von $\\mathrm{i}$ ergeben zusammen $1 + \\mathrm{i} - 1 - \\mathrm{i} = 0$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        '• $\\mathrm{i}^4 = 1$ (nicht $-1$). Der Zyklus ist $1, \\mathrm{i}, -1, -\\mathrm{i}$.\n' +
        '• Beim Rest genau rechnen: $100 \\bmod 4 = 0$, also $\\mathrm{i}^{100} = 1$ (nicht $-1$).' },
    ],
    loesung:
      '**(a) $\\mathrm{i}^{2027}$**\n' +
      '$2027 = 4 \\cdot 506 + 3$, also $2027 \\bmod 4 = 3$.\n' +
      '$\\Rightarrow \\mathrm{i}^{2027} = \\mathrm{i}^3 = -\\mathrm{i}$.\n\n' +
      '**(b) $\\mathrm{i}^{50} - \\mathrm{i}^{100}$**\n' +
      '$50 \\bmod 4 = 2 \\Rightarrow \\mathrm{i}^{50} = \\mathrm{i}^2 = -1$.\n' +
      '$100 \\bmod 4 = 0 \\Rightarrow \\mathrm{i}^{100} = \\mathrm{i}^0 = 1$.\n' +
      '$\\Rightarrow \\mathrm{i}^{50} - \\mathrm{i}^{100} = -1 - 1 = -2$.\n\n' +
      '**(c) $\\mathrm{i}^{2024} + \\mathrm{i}^{2025} + \\mathrm{i}^{2026} + \\mathrm{i}^{2027}$**\n' +
      'Die Reste sind $0, 1, 2, 3$, also durchlaufen die vier Summanden einen vollen Zyklus:\n' +
      '$\\mathrm{i}^{2024} + \\mathrm{i}^{2025} + \\mathrm{i}^{2026} + \\mathrm{i}^{2027} = 1 + \\mathrm{i} + (-1) + (-\\mathrm{i}) = 0$.\n\n' +
      '**Kurz:** Jede Folge aus vier aufeinanderfolgenden Potenzen von $\\mathrm{i}$ summiert sich zu $0$.',
  },
  {
    id: 'c_k_konvergenz',
    art: 'Konvergenz komplexer Folgen',
    titel: 'Grenzwerte komplexer Folgen bestimmen',
    schwierigkeit: 'schwer',
    quelle: 'Blatt 2, Aufgabe 6',
    aufgabeText:
      'Eine komplexe Zahlenfolge $(z_n)$ konvergiert gegen $z \\in \\mathbb{C}$, falls zu jedem $\\varepsilon > 0$ ein $N \\in \\mathbb{N}$ existiert, sodass für alle $n \\geq N$ gilt: $|z_n - z| < \\varepsilon$.\n\n' +
      'Untersuchen Sie die folgenden Folgen auf Konvergenz und geben Sie im Konvergenzfall den Grenzwert an:\n' +
      '(a) $z_n = \\dfrac{2n - \\mathrm{i}}{n}$\n' +
      '(b) $w_n = \\left(\\dfrac{1 - \\mathrm{i}}{2}\\right)^{\\!n}$',
    referenz: ['folgen-konvergenz'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Konvergenz $z_n \\to z$ bedeutet: der Abstand $|z_n - z|$ wird beliebig klein und bleibt klein. Weil $|z_n - z|$ eine gewöhnliche reelle Zahl ist, führt man komplexe Konvergenz auf eine reelle Nullfolge zurück:\n' +
        '$z_n \\to z \\iff |z_n - z| \\to 0$.\n\n' +
        'Bei Potenzfolgen $w_n = r^n$ entscheidet der Betrag $|r|$: bei $|r| < 1$ geht $|r^n| = |r|^n \\to 0$.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        '1. Folge in Real- und Imaginärteil zerlegen oder als Potenz erkennen.\n' +
        '2. Grenzwert $z$ vermuten.\n' +
        '3. Abstand $|z_n - z|$ berechnen und zeigen, dass er gegen $0$ geht.\n' +
        '4. Für den formalen $\\varepsilon$-Nachweis: zu vorgegebenem $\\varepsilon > 0$ ein passendes $N$ angeben, ab dem $|z_n - z| < \\varepsilon$ gilt.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Zerlegen: $\\dfrac{2n - \\mathrm{i}}{n} = \\dfrac{2n}{n} - \\dfrac{\\mathrm{i}}{n} = 2 - \\dfrac{1}{n}\\mathrm{i}$.\n\n' +
        'Betrag einer Potenz: $|w_n| = \\left|\\dfrac{1 - \\mathrm{i}}{2}\\right|^n$, und $\\left|\\dfrac{1 - \\mathrm{i}}{2}\\right| = \\dfrac{|1 - \\mathrm{i}|}{2} = \\dfrac{\\sqrt{2}}{2} = \\dfrac{1}{\\sqrt{2}}$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        '• Betrag komponentenweise bilden: $\\left|\\tfrac{1}{2} - \\tfrac{1}{2}\\mathrm{i}\\right| = \\tfrac{1}{\\sqrt{2}}$, nicht $\\tfrac{1}{2} + \\tfrac{1}{2} = 1$.\n' +
        '• Bei Konvergenz den Grenzwert vergessen (hier $2$ bzw. $0$).\n' +
        '• „Ein paar nahe Glieder" reichen nicht: ab einem Index müssen ALLE Glieder in der $\\varepsilon$-Umgebung liegen.' },
    ],
    loesung:
      '**Folge (a): $z_n = \\dfrac{2n - \\mathrm{i}}{n}$**\n' +
      'Zerlegen: $z_n = \\dfrac{2n}{n} - \\dfrac{1}{n}\\mathrm{i} = 2 - \\dfrac{1}{n}\\mathrm{i}$.\n\n' +
      'Vermuteter Grenzwert: $z = 2$. Abstand:\n' +
      '$|z_n - 2| = \\left|-\\dfrac{1}{n}\\mathrm{i}\\right| = \\dfrac{1}{n} \\longrightarrow 0$.\n\n' +
      '$\\varepsilon$-Nachweis: Sei $\\varepsilon > 0$. Wähle $N \\in \\mathbb{N}$ mit $N > \\dfrac{1}{\\varepsilon}$. Für alle $n \\geq N$ gilt dann\n' +
      '$|z_n - 2| = \\dfrac{1}{n} \\leq \\dfrac{1}{N} < \\varepsilon$.\n' +
      'Also konvergiert $(z_n)$ gegen $2$.\n\n' +
      '**Folge (b): $w_n = \\left(\\dfrac{1 - \\mathrm{i}}{2}\\right)^{\\!n}$**\n' +
      'Betrag der Basis:\n' +
      '$\\left|\\dfrac{1 - \\mathrm{i}}{2}\\right| = \\dfrac{|1 - \\mathrm{i}|}{2} = \\dfrac{\\sqrt{1^2 + (-1)^2}}{2} = \\dfrac{\\sqrt{2}}{2} = \\dfrac{1}{\\sqrt{2}} \\approx 0{,}707 < 1$.\n\n' +
      'Mit der Regel $|w_n| = |r|^n$ folgt\n' +
      '$|w_n - 0| = |w_n| = \\left(\\dfrac{1}{\\sqrt{2}}\\right)^{\\!n} \\longrightarrow 0$,\n' +
      'da eine Zahl mit Betrag kleiner als $1$ beim Potenzieren immer kleiner wird. Also konvergiert $(w_n)$ gegen $0$.\n\n' +
      '**Zusammenfassung**\n' +
      '$(z_n) \\to 2$ und $(w_n) \\to 0$.',
  },
  {
    id: 'c_k_mult_polar',
    art: 'Multiplikation & Division in Polarform',
    titel: 'Beträge mal/geteilt, Winkel plus/minus',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 3, Aufgabe 1',
    aufgabeText:
      'Berechnen Sie in Polarform und geben Sie das Ergebnis mit Winkel $\\varphi \\in [0, 2\\pi)$ an.\n\n' +
      '(a) $3\\,e^{\\mathrm{i}\\frac{\\pi}{4}} \\cdot 2\\,e^{\\mathrm{i}\\frac{\\pi}{3}}$\n' +
      '(b) $\\dfrac{10\\,e^{\\mathrm{i}\\frac{5\\pi}{6}}}{2\\,e^{\\mathrm{i}\\frac{\\pi}{2}}}$\n' +
      '(c) $\\dfrac{4\\,e^{\\mathrm{i}\\frac{\\pi}{6}}}{2\\,e^{\\mathrm{i}\\frac{4\\pi}{3}}}$',
    referenz: ['polardarstellung'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'In Polarform sind Multiplikation und Division besonders einfach, weil sie auf die Potenzregel $e^a \\cdot e^b = e^{a+b}$ zurückgehen:\n' +
        '• Multiplikation: Beträge multiplizieren, Winkel addieren.\n' +
        '• Division: Beträge dividieren, Winkel subtrahieren.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Für $r_1 e^{\\mathrm{i}\\varphi_1}$ und $r_2 e^{\\mathrm{i}\\varphi_2}$:\n' +
        '$r_1 e^{\\mathrm{i}\\varphi_1} \\cdot r_2 e^{\\mathrm{i}\\varphi_2} = (r_1 r_2)\\,e^{\\mathrm{i}(\\varphi_1 + \\varphi_2)}$,\n' +
        '$\\dfrac{r_1 e^{\\mathrm{i}\\varphi_1}}{r_2 e^{\\mathrm{i}\\varphi_2}} = \\dfrac{r_1}{r_2}\\,e^{\\mathrm{i}(\\varphi_1 - \\varphi_2)}$.\n' +
        'Am Ende den Winkel bei Bedarf in $[0, 2\\pi)$ bringen (Vielfache von $2\\pi$ addieren/abziehen).' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Winkel addieren mit gemeinsamem Nenner: $\\tfrac{\\pi}{4} + \\tfrac{\\pi}{3} = \\tfrac{3\\pi}{12} + \\tfrac{4\\pi}{12} = \\tfrac{7\\pi}{12}$.\n\n' +
        'Negativer Winkel reparieren: wird der Winkel negativ, addiere $2\\pi$, z. B. $-\\tfrac{7\\pi}{6} + 2\\pi = \\tfrac{5\\pi}{6}$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        '• Beträge addieren statt multiplizieren — nur die Winkel werden addiert.\n' +
        '• Bei der Division die Winkel addieren statt subtrahieren.\n' +
        '• Ein negatives Ergebnis für $\\varphi$ stehen lassen: erst durch $+2\\pi$ in $[0, 2\\pi)$ bringen.' },
    ],
    loesung:
      '**(a) Multiplikation**\n' +
      'Beträge multiplizieren: $r = 3 \\cdot 2 = 6$.\n' +
      'Winkel addieren: $\\varphi = \\dfrac{\\pi}{4} + \\dfrac{\\pi}{3} = \\dfrac{3\\pi}{12} + \\dfrac{4\\pi}{12} = \\dfrac{7\\pi}{12}$.\n' +
      '$\\Rightarrow 3\\,e^{\\mathrm{i}\\frac{\\pi}{4}} \\cdot 2\\,e^{\\mathrm{i}\\frac{\\pi}{3}} = 6\\,e^{\\mathrm{i}\\frac{7\\pi}{12}}$.\n\n' +
      '**(b) Division**\n' +
      'Beträge dividieren: $r = \\dfrac{10}{2} = 5$.\n' +
      'Winkel subtrahieren: $\\varphi = \\dfrac{5\\pi}{6} - \\dfrac{\\pi}{2} = \\dfrac{5\\pi}{6} - \\dfrac{3\\pi}{6} = \\dfrac{2\\pi}{6} = \\dfrac{\\pi}{3}$.\n' +
      '$\\Rightarrow \\dfrac{10\\,e^{\\mathrm{i}\\frac{5\\pi}{6}}}{2\\,e^{\\mathrm{i}\\frac{\\pi}{2}}} = 5\\,e^{\\mathrm{i}\\frac{\\pi}{3}}$.\n\n' +
      '**(c) Division mit Winkelkorrektur**\n' +
      'Beträge: $r = \\dfrac{4}{2} = 2$.\n' +
      'Winkel: $\\varphi = \\dfrac{\\pi}{6} - \\dfrac{4\\pi}{3} = \\dfrac{\\pi}{6} - \\dfrac{8\\pi}{6} = -\\dfrac{7\\pi}{6}$.\n' +
      'Das ist negativ, also $+2\\pi$: $-\\dfrac{7\\pi}{6} + \\dfrac{12\\pi}{6} = \\dfrac{5\\pi}{6}$.\n' +
      '$\\Rightarrow \\dfrac{4\\,e^{\\mathrm{i}\\frac{\\pi}{6}}}{2\\,e^{\\mathrm{i}\\frac{4\\pi}{3}}} = 2\\,e^{\\mathrm{i}\\frac{5\\pi}{6}}$.',
  },
  {
    id: 'c_k_nte_wurzeln',
    art: 'n-te Wurzeln',
    titel: 'Alle Lösungen von $z^3 = 8\\mathrm{i}$',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 3, Aufgabe 2',
    aufgabeText:
      'Bestimmen Sie alle $z \\in \\mathbb{C}$ mit $z^3 = 8\\mathrm{i}$. Geben Sie die Lösungen in Polarform und in der Form $x + y\\mathrm{i}$ an und beschreiben Sie ihre Lage in der komplexen Zahlenebene.',
    referenz: ['nte-wurzeln'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Im Komplexen hat $z^n = w$ (für $w \\neq 0$) immer genau $n$ verschiedene Lösungen, die $n$-ten Wurzeln von $w$. Sie liegen alle auf einem Kreis um den Ursprung und sind gleichmäßig um je $\\dfrac{2\\pi}{n}$ verteilt.\n' +
        'Für $z^3 = 8\\mathrm{i}$ erwarten wir also $3$ Lösungen im Winkelabstand $\\dfrac{2\\pi}{3} = 120^\\circ$.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Schreibe die rechte Seite in Polarform $w = r\\,e^{\\mathrm{i}\\varphi}$. Dann sind die Wurzeln\n' +
        '$z_k = r^{1/n}\\,e^{\\mathrm{i}\\frac{\\varphi + 2\\pi k}{n}}$ für $k = 0, 1, \\ldots, n-1$.\n' +
        '1. Betrag der Wurzeln: $r^{1/n}$.\n' +
        '2. Grundwinkel: $\\dfrac{\\varphi}{n}$ (für $k = 0$).\n' +
        '3. Jede weitere Lösung dreht um $\\dfrac{2\\pi}{n}$ weiter.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Polarform von $8\\mathrm{i}$: die Zahl liegt auf der positiven imaginären Achse, also $r = 8$ und $\\varphi = \\dfrac{\\pi}{2}$, das heißt $8\\mathrm{i} = 8\\,e^{\\mathrm{i}\\frac{\\pi}{2}}$.\n' +
        'Wurzelbetrag: $8^{1/3} = 2$ (denn $2^3 = 8$).' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        '• Es sind genau $3$ Lösungen, nicht $1$.\n' +
        '• $k$ läuft von $0$ bis $n - 1$ (also $0, 1, 2$), nicht von $1$ bis $n$.\n' +
        '• Winkel von $8\\mathrm{i}$ ist $\\dfrac{\\pi}{2}$ (positive imaginäre Achse), nicht $0$.' },
    ],
    loesung:
      '**Polarform der rechten Seite**\n' +
      '$8\\mathrm{i} = 8\\,e^{\\mathrm{i}\\frac{\\pi}{2}}$, also $r = 8$, $\\varphi = \\dfrac{\\pi}{2}$, $n = 3$.\n\n' +
      '**Wurzelformel anwenden** ($8^{1/3} = 2$)\n' +
      '$z_k = 2\\,e^{\\mathrm{i}\\frac{\\frac{\\pi}{2} + 2\\pi k}{3}}$ für $k = 0, 1, 2$.\n\n' +
      '$z_0 = 2\\,e^{\\mathrm{i}\\frac{\\pi/2}{3}} = 2\\,e^{\\mathrm{i}\\frac{\\pi}{6}}$\n' +
      '$z_1 = 2\\,e^{\\mathrm{i}\\left(\\frac{\\pi}{6} + \\frac{2\\pi}{3}\\right)} = 2\\,e^{\\mathrm{i}\\frac{5\\pi}{6}}$\n' +
      '$z_2 = 2\\,e^{\\mathrm{i}\\left(\\frac{\\pi}{6} + \\frac{4\\pi}{3}\\right)} = 2\\,e^{\\mathrm{i}\\frac{3\\pi}{2}}$\n\n' +
      '**In kartesischer Form** (über $\\cos$ und $\\sin$)\n' +
      '$z_0 = 2\\left(\\cos\\tfrac{\\pi}{6} + \\mathrm{i}\\sin\\tfrac{\\pi}{6}\\right) = 2\\left(\\tfrac{\\sqrt{3}}{2} + \\tfrac{1}{2}\\mathrm{i}\\right) = \\sqrt{3} + \\mathrm{i}$.\n' +
      '$z_1 = 2\\left(\\cos\\tfrac{5\\pi}{6} + \\mathrm{i}\\sin\\tfrac{5\\pi}{6}\\right) = 2\\left(-\\tfrac{\\sqrt{3}}{2} + \\tfrac{1}{2}\\mathrm{i}\\right) = -\\sqrt{3} + \\mathrm{i}$.\n' +
      '$z_2 = 2\\left(\\cos\\tfrac{3\\pi}{2} + \\mathrm{i}\\sin\\tfrac{3\\pi}{2}\\right) = 2(0 - \\mathrm{i}) = -2\\mathrm{i}$.\n\n' +
      '**Probe** (eine Lösung genügt zur Kontrolle)\n' +
      '$(-2\\mathrm{i})^3 = -8\\,\\mathrm{i}^3 = -8\\cdot(-\\mathrm{i}) = 8\\mathrm{i}$. ✓\n\n' +
      '**Lage in der Ebene**\n' +
      'Die drei Punkte $\\sqrt{3} + \\mathrm{i}$, $-\\sqrt{3} + \\mathrm{i}$ und $-2\\mathrm{i}$ liegen auf dem Kreis mit Radius $2$ um den Ursprung, bei den Winkeln $30^\\circ$, $150^\\circ$ und $270^\\circ$ — also gleichmäßig im Abstand von $120^\\circ$ (ein gleichseitiges Dreieck).',
  },
  {
    id: 'c_k_drehung',
    art: 'Multiplikation als Drehung',
    titel: 'Eine Zahl mit $e^{\\mathrm{i}\\varphi}$ drehen',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 3, Aufgabe 3',
    aufgabeText:
      'Drehen Sie die komplexe Zahl $z = \\sqrt{3} + \\mathrm{i}$ um den Winkel $\\dfrac{\\pi}{3}$ einmal gegen den Uhrzeigersinn und einmal im Uhrzeigersinn. Schreiben Sie beide Ergebnisse in der Form $x + y\\mathrm{i}$.',
    referenz: ['polardarstellung'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Multiplikation mit $e^{\\mathrm{i}\\varphi}$ hat Betrag $1$ und ändert daher nur den Winkel, nicht die Länge — das ist genau eine Drehung um den Ursprung.\n' +
        '• Gegen den Uhrzeigersinn um $\\varphi$: mal $e^{\\mathrm{i}\\varphi}$.\n' +
        '• Im Uhrzeigersinn um $\\varphi$: mal $e^{-\\mathrm{i}\\varphi}$.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        '1. Drehfaktor mit der Eulerschen Formel bestimmen: $e^{\\mathrm{i}\\frac{\\pi}{3}} = \\cos\\tfrac{\\pi}{3} + \\mathrm{i}\\sin\\tfrac{\\pi}{3}$.\n' +
        '2. Mit $z$ multiplizieren und ausmultiplizieren ($\\mathrm{i}^2 = -1$).\n' +
        '3. Ergebnis ordentlich als $x + y\\mathrm{i}$ schreiben.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Drehfaktoren:\n' +
        '$e^{\\mathrm{i}\\frac{\\pi}{3}} = \\dfrac{1}{2} + \\dfrac{\\sqrt{3}}{2}\\mathrm{i}$, $\\quad e^{-\\mathrm{i}\\frac{\\pi}{3}} = \\dfrac{1}{2} - \\dfrac{\\sqrt{3}}{2}\\mathrm{i}$.\n' +
        'Bei $e^{-\\mathrm{i}\\varphi}$ dreht sich nur das Vorzeichen des Imaginärteils um.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        '• Plus-Winkel = gegen den Uhrzeigersinn, Minus-Winkel = im Uhrzeigersinn — nicht vertauschen.\n' +
        '• $\\mathrm{i}^2 = -1$ beim Ausmultiplizieren beachten.\n' +
        '• Probe über den Betrag: eine Drehung ändert $|z|$ nicht, hier bleibt $|z| = 2$.' },
    ],
    loesung:
      '**Vorüberlegung**\n' +
      'Der Betrag von $z = \\sqrt{3} + \\mathrm{i}$ ist $|z| = \\sqrt{(\\sqrt{3})^2 + 1^2} = \\sqrt{4} = 2$. Eine Drehung lässt diesen Betrag unverändert.\n\n' +
      '**Gegen den Uhrzeigersinn** (mal $e^{\\mathrm{i}\\frac{\\pi}{3}} = \\tfrac{1}{2} + \\tfrac{\\sqrt{3}}{2}\\mathrm{i}$)\n' +
      '$\\left(\\dfrac{1}{2} + \\dfrac{\\sqrt{3}}{2}\\mathrm{i}\\right)(\\sqrt{3} + \\mathrm{i}) = \\dfrac{\\sqrt{3}}{2} + \\dfrac{1}{2}\\mathrm{i} + \\dfrac{3}{2}\\mathrm{i} + \\dfrac{\\sqrt{3}}{2}\\mathrm{i}^2$\n' +
      '$= \\dfrac{\\sqrt{3}}{2} - \\dfrac{\\sqrt{3}}{2} + \\left(\\dfrac{1}{2} + \\dfrac{3}{2}\\right)\\mathrm{i} = 0 + 2\\mathrm{i} = 2\\mathrm{i}$.\n\n' +
      '**Im Uhrzeigersinn** (mal $e^{-\\mathrm{i}\\frac{\\pi}{3}} = \\tfrac{1}{2} - \\tfrac{\\sqrt{3}}{2}\\mathrm{i}$)\n' +
      '$\\left(\\dfrac{1}{2} - \\dfrac{\\sqrt{3}}{2}\\mathrm{i}\\right)(\\sqrt{3} + \\mathrm{i}) = \\dfrac{\\sqrt{3}}{2} + \\dfrac{1}{2}\\mathrm{i} - \\dfrac{3}{2}\\mathrm{i} - \\dfrac{\\sqrt{3}}{2}\\mathrm{i}^2$\n' +
      '$= \\dfrac{\\sqrt{3}}{2} + \\dfrac{\\sqrt{3}}{2} + \\left(\\dfrac{1}{2} - \\dfrac{3}{2}\\right)\\mathrm{i} = \\sqrt{3} - \\mathrm{i}$.\n\n' +
      '**Ergebnis und Probe**\n' +
      'Gegen den Uhrzeigersinn: $2\\mathrm{i}$; im Uhrzeigersinn: $\\sqrt{3} - \\mathrm{i}$.\n' +
      'Beträge zur Kontrolle: $|2\\mathrm{i}| = 2$ und $|\\sqrt{3} - \\mathrm{i}| = \\sqrt{3 + 1} = 2$ — beide gleich $|z| = 2$. ✓',
  },
  {
    id: 'c_k_komposition',
    art: 'Komposition & Umkehrfunktion',
    titel: 'Verkettung bilden und umkehren',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 1, Aufgabe 6',
    aufgabeText:
      'Gegeben seien die reellen Funktionen $f(x) = 3x - 6$ und $g(x) = x^2 + 1$.\n' +
      '(a) Bestimmen Sie $g \\circ f$ und $f \\circ g$ und vergleichen Sie.\n' +
      '(b) Ist $f$ invertierbar? Falls ja, geben Sie $f^{-1}$ an.\n' +
      '(c) Ist $g$ auf ganz $\\mathbb{R}$ invertierbar? Begründen Sie und geben Sie ggf. eine Einschränkung mit Umkehrfunktion an.',
    referenz: [],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Komposition $g \\circ f$ heißt „erst $f$, dann $g$": $(g \\circ f)(x) = g(f(x))$ (von rechts nach links lesen).\n\n' +
        'Umkehrbar (invertierbar) ist eine Funktion, wenn sie bijektiv ist. Eine lineare Funktion $ax + b$ mit $a \\neq 0$ ist immer bijektiv; eine Parabel wie $x^2 + 1$ ist auf ganz $\\mathbb{R}$ nicht injektiv.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Komposition: das innere Ergebnis in die äußere Funktion einsetzen und vereinfachen.\n\n' +
        'Umkehrfunktion: $y = f(x)$ setzen, nach $x$ auflösen, dann $x = f^{-1}(y)$ ablesen. Probe über $f(f^{-1}(x)) = x$.\n\n' +
        'Injektivität prüfen: gibt es zwei verschiedene $x$ mit gleichem Funktionswert, ist die Funktion nicht injektiv.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Auflösen von $y = 3x - 6$ nach $x$:\n' +
        '$y + 6 = 3x \\Rightarrow x = \\dfrac{y + 6}{3}$.\n\n' +
        'Nicht-Injektivität von $g$: $g(1) = 1^2 + 1 = 2$ und $g(-1) = (-1)^2 + 1 = 2$ — zwei verschiedene Eingaben, gleicher Wert.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        '• Reihenfolge bei $g \\circ f$: erst $f$, dann $g$ — nicht umgekehrt.\n' +
        '• $g \\circ f \\neq f \\circ g$ im Allgemeinen (nicht kommutativ).\n' +
        '• $g(x) = x^2 + 1$ ist auf ganz $\\mathbb{R}$ nicht umkehrbar; erst eine Einschränkung des Definitionsbereichs macht sie eindeutig umkehrbar.' },
    ],
    loesung:
      '**(a) Kompositionen**\n' +
      '$g \\circ f$: erst $f$, dann $g$:\n' +
      '$(g \\circ f)(x) = g(f(x)) = (3x - 6)^2 + 1 = 9x^2 - 36x + 36 + 1 = 9x^2 - 36x + 37$.\n\n' +
      '$f \\circ g$: erst $g$, dann $f$:\n' +
      '$(f \\circ g)(x) = f(g(x)) = 3(x^2 + 1) - 6 = 3x^2 + 3 - 6 = 3x^2 - 3$.\n\n' +
      'Die beiden sind verschieden ($9x^2 - 36x + 37 \\neq 3x^2 - 3$), die Komposition ist also nicht kommutativ.\n\n' +
      '**(b) Umkehrfunktion von $f$**\n' +
      '$f(x) = 3x - 6$ ist linear mit Steigung $3 \\neq 0$, also bijektiv und invertierbar.\n' +
      'Auflösen: $y = 3x - 6 \\Rightarrow x = \\dfrac{y + 6}{3}$.\n' +
      'Also $f^{-1}(x) = \\dfrac{x + 6}{3}$.\n' +
      'Probe: $f\\!\\left(\\dfrac{x + 6}{3}\\right) = 3\\cdot\\dfrac{x + 6}{3} - 6 = x + 6 - 6 = x$. ✓\n\n' +
      '**(c) Umkehrbarkeit von $g$**\n' +
      'Auf ganz $\\mathbb{R}$ ist $g(x) = x^2 + 1$ nicht injektiv, denn $g(1) = g(-1) = 2$. Also ist $g$ auf $\\mathbb{R}$ nicht invertierbar.\n\n' +
      'Schränkt man den Definitionsbereich auf $[0, \\infty)$ ein, so ist $g:[0, \\infty) \\to [1, \\infty)$ streng monoton wachsend und damit bijektiv. Auflösen von $y = x^2 + 1$ mit $x \\geq 0$:\n' +
      '$x^2 = y - 1 \\Rightarrow x = \\sqrt{y - 1}$.\n' +
      'Also $g^{-1}(x) = \\sqrt{x - 1}$ für $x \\geq 1$.',
  },
]
