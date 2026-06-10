import type { Aufgabe } from '../../types'

export const b0: Aufgabe[] = [
  {
    id: 'b0_a1',
    titel: 'Trigonometrische Funktionen – Graphen & Einheitskreis',
    aufgabeText:
      '(a) Skizzieren Sie die Graphen der Sinus- und der Cosinusfunktion.\n' +
      '(b) Zeichnen Sie $\\sin(\\varphi)$ und $\\cos(\\varphi)$ in den Einheitskreis ein.\n' +
      '(c) Rechnen Sie vom Gradmaß ins Bogenmaß um: $0°$, $360°$, $90°$, $60°$, $36°$, $29°$.\n' +
      '(d) Rechnen Sie vom Bogenmaß ins Gradmaß um: $\\pi$, $5\\pi$, $\\frac{2\\pi}{3}$, $\\frac{\\pi}{6}$, $\\frac{\\pi}{18}$, $\\frac{2\\pi}{17}$.\n' +
      '(e) Skizzieren Sie die Tangensfunktion.\n' +
      '(f) Geben Sie Definitionsbereiche und Wertemengen von $\\arcsin$, $\\arccos$ und $\\arctan$ an.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Der Einheitskreis ist ein Kreis mit Radius 1 um den Ursprung $(0,0)$. Bewegt man sich von $(1,0)$ aus gegen den Uhrzeigersinn, gibt der Winkel $\\varphi$ an, wie weit man gelaufen ist.\n\n' +
          'Die Koordinaten des aktuellen Punktes sind immer $(\\cos(\\varphi),\\, \\sin(\\varphi))$:\n' +
          '  $\\cos(\\varphi)$ = x-Koordinate (horizontale Position)\n' +
          '  $\\sin(\\varphi)$ = y-Koordinate (vertikale Position)\n\n' +
          'Bogenmaß ist die mathematische Standardeinheit für Winkel: Ein voller Kreis = $2\\pi$, eine halbe Drehung = $\\pi$.\n\n' +
          'Arkusfunktionen ($\\arcsin$, $\\arccos$, $\\arctan$) sind die Umkehrfunktionen – sie liefern bei einem gegebenen Funktionswert den zugehörigen Winkel. Damit sie eindeutig sind, werden ihre Wertebereiche eingeschränkt.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '(a)/(b) Fünf Schlüsselpunkte auswendig lernen:\n' +
          '  $\\varphi = 0$:              Punkt $(1,\\,0)$     → $\\sin=0$, $\\cos=1$\n' +
          '  $\\varphi = \\frac{\\pi}{2}$:  Punkt $(0,\\,1)$     → $\\sin=1$, $\\cos=0$\n' +
          '  $\\varphi = \\pi$:            Punkt $(-1,\\,0)$    → $\\sin=0$, $\\cos=-1$\n' +
          '  $\\varphi = \\frac{3\\pi}{2}$: Punkt $(0,\\,-1)$   → $\\sin=-1$, $\\cos=0$\n' +
          '  $\\varphi = 2\\pi$:           Punkt $(1,\\,0)$     → wie $\\varphi=0$\n\n' +
          '(c) Grad → Bogenmaß: $x_{\\mathrm{rad}} = x_{°} \\cdot \\dfrac{\\pi}{180}$\n' +
          '(d) Bogenmaß → Grad: $x_{°} = x_{\\mathrm{rad}} \\cdot \\dfrac{180}{\\pi}$\n\n' +
          '(e) Tangens: $\\tan(\\varphi) = \\dfrac{\\sin(\\varphi)}{\\cos(\\varphi)}$, Polstellen bei $\\varphi = \\frac{\\pi}{2} + k\\pi$\n\n' +
          '(f) Wertebereiche der Arkusfunktionen direkt angeben:\n' +
          '  $\\arcsin$: $[-1,1] \\to [-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$,   $\\arccos$: $[-1,1] \\to [0,\\pi]$,   $\\arctan$: $\\mathbb{R} \\to (-\\frac{\\pi}{2}, \\frac{\\pi}{2})$',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Umrechnung Grad → Bogenmaß:\n' +
          '  $60° \\cdot \\dfrac{\\pi}{180} = \\dfrac{60\\pi}{180} = \\dfrac{\\pi}{3}$\n\n' +
          'Umrechnung Bogenmaß → Grad:\n' +
          '  $\\dfrac{\\pi}{6} \\cdot \\dfrac{180}{\\pi} = \\dfrac{180}{6} = 30°$\n\n' +
          'Einheitskreis bei $\\varphi = \\frac{\\pi}{4}$ (= 45°):\n' +
          '  Punkt $\\left(\\dfrac{\\sqrt{2}}{2},\\, \\dfrac{\\sqrt{2}}{2}\\right)$\n' +
          '  → $\\cos\\!\\left(\\frac{\\pi}{4}\\right) = \\dfrac{\\sqrt{2}}{2}$,   $\\sin\\!\\left(\\frac{\\pi}{4}\\right) = \\dfrac{\\sqrt{2}}{2}$\n\n' +
          'Arkusfunktions-Probe: $\\arccos(-1) = \\pi$, denn $\\cos(\\pi) = -1$ und $\\pi \\in [0,\\pi]$ ✓',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Bogenmaß ≠ Gradmaß: Mathematik arbeitet standardmäßig mit Bogenmaß. $\\sin(90)$ (Bogenmaß) ist NICHT $\\sin(90°)$.\n\n' +
          '• Arkusfunktionen haben eingeschränkte Wertemengen, weil $\\sin$/$\\cos$/$\\tan$ nicht injektiv sind. $\\arcsin(0)$ ist NUR $0$, nicht $\\pm\\pi, \\pm 2\\pi, \\ldots$\n\n' +
          '• $\\arctan$ hat einen OFFENEN Wertebereich: $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ – die Randwerte werden nie angenommen.\n\n' +
          '• Tangens-Graph: An den Polstellen $\\frac{\\pi}{2} + k\\pi$ muss eine gestrichelte senkrechte Asymptote eingezeichnet werden.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Prüfe die fünf Schlüsselpunkte: Ist $\\sin\\!\\left(\\frac{\\pi}{2}\\right) = 1$ und $\\cos\\!\\left(\\frac{\\pi}{2}\\right) = 0$?\n\n' +
          'Umrechnung Probe: $36° \\cdot \\frac{\\pi}{180} = \\frac{36\\pi}{180} = \\frac{\\pi}{5}$. Zurückrechnen: $\\frac{\\pi}{5} \\cdot \\frac{180}{\\pi} = 36°$ ✓\n\n' +
          'Arkusfunktionen: Liegt der gesuchte Winkel im angegebenen Wertebereich? Falls nein, ist er falsch.',
      },
    ],
    loesung:
      '(a) $\\sin$ und $\\cos$: Periode $2\\pi$, Wertebereich $[-1, 1]$.\n' +
      '    Tabelle: $x = 0,\\ \\tfrac{\\pi}{2},\\ \\pi,\\ \\tfrac{3\\pi}{2},\\ 2\\pi$\n' +
      '    $\\sin$: $0, 1, 0, -1, 0$\n' +
      '    $\\cos$: $1, 0, -1, 0, 1$\n\n' +
      '(b) Im Einheitskreis: $\\cos(\\varphi)$ = $x$-Koordinate, $\\sin(\\varphi)$ = $y$-Koordinate.\n\n' +
      '(c) Gradmaß → Bogenmaß ($\\times\\frac{\\pi}{180}$):\n' +
      '    $0° = 0$,  $360° = 2\\pi$,  $90° = \\frac{\\pi}{2}$,  $60° = \\frac{\\pi}{3}$,  $36° = \\frac{\\pi}{5}$,  $29° = \\frac{29\\pi}{180}$\n\n' +
      '(d) Bogenmaß → Gradmaß ($\\times\\frac{180}{\\pi}$):\n' +
      '    $\\pi = 180°$,  $5\\pi = 900°$,  $\\frac{2\\pi}{3} = 120°$,  $\\frac{\\pi}{6} = 30°$,  $\\frac{\\pi}{18} = 10°$,  $\\frac{2\\pi}{17} = \\left(\\frac{360}{17}\\right)°$\n\n' +
      '(e) $\\tan(x) = \\frac{\\sin(x)}{\\cos(x)}$: Polstellen bei $x = \\frac{\\pi}{2} + k\\pi$, $k \\in \\mathbb{Z}$, Periode $\\pi$.\n\n' +
      '(f) $\\arcsin : [-1,\\,1] \\to \\left[-\\frac{\\pi}{2},\\, \\frac{\\pi}{2}\\right]$\n' +
      '    $\\arccos : [-1,\\,1] \\to [0,\\, \\pi]$\n' +
      '    $\\arctan : \\mathbb{R} \\to \\left(-\\frac{\\pi}{2},\\, \\frac{\\pi}{2}\\right)$',
    schwierigkeit: 'einfach',
    kategorie: 'Trigonometrie',
  },
  {
    id: 'b0_a2',
    titel: 'Trigonometrische Funktionswerte berechnen',
    aufgabeText:
      'Bestimmen Sie folgende Funktionswerte:\n' +
      '(a) $\\sin(-64\\pi)$   (b) $\\cos(-64\\pi)$   (c) $\\tan(-64\\pi)$\n' +
      '(d) $\\sin(65\\pi)$    (e) $\\cos(65\\pi)$    (f) $\\tan(65\\pi)$\n' +
      '(g) $\\sin\\!\\left(\\frac{\\pi}{4}\\right)$    (h) $\\cos\\!\\left(\\frac{\\pi}{4}\\right)$    (i) $\\tan\\!\\left(\\frac{\\pi}{4}\\right)$\n' +
      '(j) $\\arctan(1)$   (k) $\\arcsin(1)$   (l) $\\arccos(1)$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Periodizität bedeutet: Eine Funktion wiederholt sich nach einem festen Intervall exakt.\n\n' +
          '$\\sin$ und $\\cos$ haben die Periode $2\\pi$:  $\\sin(x + 2\\pi) = \\sin(x)$ für alle $x$\n' +
          '$\\tan$ hat die Periode $\\pi$:  $\\tan(x + \\pi) = \\tan(x)$ für alle $x$\n\n' +
          'Anschaulich: Jedes Vielfache von $2\\pi$ entspricht einer vollen Umdrehung auf dem Einheitskreis – man landet wieder am Startpunkt.\n\n' +
          'Arkusfunktionen $\\arcsin$, $\\arccos$, $\\arctan$ liefern immer den eindeutigen Hauptwert aus dem festgelegten Wertebereich.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Für Argumente der Form $n\\pi$ (ganzzahliges Vielfaches von $\\pi$):\n\n' +
          '1. Prüfe, ob $n$ gerade oder ungerade ist.\n' +
          '2. Gerades $n$: $n\\pi$ ist ein Vielfaches von $2\\pi$ → gleicher Punkt wie bei $\\varphi = 0$\n' +
          '   → $\\sin(n\\pi) = 0$, $\\cos(n\\pi) = 1$\n' +
          '3. Ungerades $n$: $n\\pi = (n-1)\\pi + \\pi$ → $(n-1)\\pi$ ist Vielfaches von $2\\pi$, es bleibt $+\\pi$\n' +
          '   → $\\sin(n\\pi) = \\sin(\\pi) = 0$, $\\cos(n\\pi) = \\cos(\\pi) = -1$\n\n' +
          'Für $\\frac{\\pi}{4}$: Standardwerte auswendig lernen (45°-Dreieck).\n\n' +
          'Für Arkusfunktionen: „Welcher Winkel im Wertebereich hat den gesuchten Wert?" rückwärts denken.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Beispiel: $\\sin(-100\\pi)$\n' +
          '  $n = -100$ ist gerade → wie bei $\\varphi = 0$ → $\\sin(-100\\pi) = 0$, $\\cos(-100\\pi) = 1$\n\n' +
          'Beispiel: $\\cos(7\\pi)$\n' +
          '  $n = 7$ ist ungerade → wie bei $\\varphi = \\pi$ → $\\cos(7\\pi) = \\cos(\\pi) = -1$\n\n' +
          'Werte bei $\\frac{\\pi}{4}$ (= 45°) aus dem 45°-60°-90°-Dreieck:\n' +
          '  $\\sin\\!\\left(\\frac{\\pi}{4}\\right) = \\cos\\!\\left(\\frac{\\pi}{4}\\right) = \\dfrac{\\sqrt{2}}{2}$,   $\\tan\\!\\left(\\frac{\\pi}{4}\\right) = 1$\n\n' +
          'Arkusfunktionen rückwärts lesen:\n' +
          '  $\\arctan(1)$: Welcher Winkel in $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ hat $\\tan = 1$? → $\\frac{\\pi}{4}$',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• $-64\\pi$: Da $-64$ gerade ist, ist $\\sin(-64\\pi) = 0$, NICHT $\\sin(0) \\cdot (-64)$. Periodizität nutzen, nicht multiplizieren!\n\n' +
          '• $\\cos(n\\pi) = 1$ (gerades $n$) vs. $\\cos(n\\pi) = -1$ (ungerades $n$) – das Vorzeichen hängt von der Parität ab.\n\n' +
          '• $\\tan(n\\pi) = 0$ für alle $n \\in \\mathbb{Z}$ (da $\\sin(n\\pi) = 0$ immer, solange $\\tan$ definiert ist).\n\n' +
          '• Arkusfunktionen: $\\arctan(1) = \\frac{\\pi}{4}$, NICHT $\\frac{5\\pi}{4}$ – obwohl beide $\\tan = 1$ haben, liegt $\\frac{5\\pi}{4}$ nicht im Wertebereich von $\\arctan$.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Für die Arkusfunktions-Aufgaben: Liegt der gefundene Winkel im korrekten Wertebereich?\n' +
          '  $\\arcsin$: Ergebnis muss in $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$ liegen\n' +
          '  $\\arccos$: Ergebnis muss in $[0, \\pi]$ liegen\n' +
          '  $\\arctan$: Ergebnis muss in $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ liegen\n\n' +
          'Probe: Wende die Originalfunktion auf das Ergebnis an: $\\tan(\\arctan(1)) = 1$ ✓',
      },
    ],
    loesung:
      '(a) $\\sin(-64\\pi) = \\sin(0) = 0$\n' +
      '(b) $\\cos(-64\\pi) = \\cos(0) = 1$\n' +
      '(c) $\\tan(-64\\pi) = \\tan(0) = 0$\n' +
      '(d) $\\sin(65\\pi) = \\sin(\\pi) = 0$\n' +
      '(e) $\\cos(65\\pi) = \\cos(\\pi) = -1$\n' +
      '(f) $\\tan(65\\pi) = \\tan(\\pi) = 0$\n' +
      '(g) $\\sin\\!\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$\n' +
      '(h) $\\cos\\!\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$\n' +
      '(i) $\\tan\\!\\left(\\frac{\\pi}{4}\\right) = 1$\n' +
      '(j) $\\arctan(1) = \\frac{\\pi}{4}$   (da $\\tan\\!\\left(\\frac{\\pi}{4}\\right) = 1$ und $\\frac{\\pi}{4} \\in \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$)\n' +
      '(k) $\\arcsin(1) = \\frac{\\pi}{2}$   (da $\\sin\\!\\left(\\frac{\\pi}{2}\\right) = 1$ und $\\frac{\\pi}{2} \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$)\n' +
      '(l) $\\arccos(1) = 0$              (da $\\cos(0) = 1$ und $0 \\in [0, \\pi]$)',
    schwierigkeit: 'einfach',
    kategorie: 'Trigonometrie',
  },
  {
    id: 'b0_a3',
    titel: 'Urbilder trigonometrischer Funktionen',
    aufgabeText:
      'Bestimmen Sie folgende Urbilder (Mengen aller Lösungen):\n' +
      '(a) $\\sin^{-1}(\\{1\\})$   (b) $\\sin^{-1}(\\{0\\})$   (c) $\\sin^{-1}(\\{-1\\})$\n' +
      '(d) $\\cos^{-1}(\\{1\\})$   (e) $\\cos^{-1}(\\{0\\})$   (f) $\\cos^{-1}(\\{-1\\})$\n' +
      '(g) $\\tan^{-1}(\\{1\\})$   (h) $\\tan^{-1}(\\{0\\})$   (i) $\\tan^{-1}(\\{-1\\})$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'WICHTIG: Die Notation $\\sin^{-1}(\\{y\\})$ bedeutet hier das Urbild der Menge $\\{y\\}$ – also ALLE $x \\in \\mathbb{R}$ mit $\\sin(x) = y$. Das sind unendlich viele Werte!\n\n' +
          'Unterschied zur Arkusfunktion:\n' +
          '  $\\arcsin(1) = \\dfrac{\\pi}{2}$ → genau EIN Wert (der Hauptwert)\n' +
          '  $\\sin^{-1}(\\{1\\}) = \\left\\{\\dfrac{\\pi}{2} + 2k\\pi : k \\in \\mathbb{Z}\\right\\}$ → unendlich viele Werte\n\n' +
          'Warum unendlich viele? Weil $\\sin$ periodisch ist: Ist $x_0$ eine Lösung, so ist $x_0 + 2\\pi$, $x_0 + 4\\pi$, $x_0 - 2\\pi$, … ebenfalls Lösungen.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '1. Finde alle Lösungen $x_0 \\in [0, 2\\pi)$ (eine Periode), die die Gleichung erfüllen.\n' +
          '   Nutze den Einheitskreis oder bekannte Werte.\n\n' +
          '2. Prüfe, ob es in $[0, 2\\pi)$ eine zweite Lösung gibt:\n' +
          '   $\\sin$: Oft zwei Lösungen pro Periode (z. B. $\\sin(x) = 0$ bei $x=0$ und $x=\\pi$)\n' +
          '   $\\cos$: Ebenfalls meist zwei pro Periode\n' +
          '   $\\tan$: Genau eine pro Periode (Periode $\\pi$!)\n\n' +
          '3. Addiere für alle Lösungen das Periodenmuster:\n' +
          '   Für $\\sin$/$\\cos$: $x_0 + 2k\\pi$, $k \\in \\mathbb{Z}$\n' +
          '   Für $\\tan$: $x_0 + k\\pi$, $k \\in \\mathbb{Z}$\n\n' +
          '4. Falls zwei Startlösungen $x_0, x_1$: Prüfe, ob sie sich durch $+k\\pi$ oder $+2k\\pi$ beschreiben lassen.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Beispiel: $\\cos^{-1}(\\{0\\})$ – wo gilt $\\cos(x) = 0$?\n' +
          '  Im Einheitskreis: $x$-Koordinate = 0 bei $x = \\frac{\\pi}{2}$ und $x = \\frac{3\\pi}{2}$\n' +
          '  Abstand zwischen beiden: $\\frac{3\\pi}{2} - \\frac{\\pi}{2} = \\pi$\n' +
          '  → Beide lassen sich zusammenfassen: $\\cos^{-1}(\\{0\\}) = \\left\\{\\dfrac{\\pi}{2} + k\\pi : k \\in \\mathbb{Z}\\right\\}$\n\n' +
          'Schreibweise: $\\{a + k\\pi : k \\in \\mathbb{Z}\\}$ bedeutet: alle Zahlen der Form $a, a\\pm\\pi, a\\pm 2\\pi, \\ldots$\n\n' +
          'Grafische Hilfe: Zeichne den Graphen von $\\sin$ und die waagerechte Linie $y = c$. Alle Schnittpunkte sind die Lösungen.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Nur einen einzigen Wert angeben statt die gesamte Menge – bei Urbildern gefragt ist IMMER die vollständige Lösungsmenge.\n\n' +
          '• Für $\\sin(x) = \\pm 1$ gibt es EINE Lösung pro Periode (nicht zwei), weil der Scheitelpunkt nur einmal pro Periode erreicht wird.\n' +
          '  $\\sin^{-1}(\\{1\\}) = \\{\\frac{\\pi}{2} + 2k\\pi : k \\in \\mathbb{Z}\\}$ – Periode ist $2\\pi$, nicht $\\pi$.\n\n' +
          '• $\\tan$ hat die Periode $\\pi$, NICHT $2\\pi$! Also: $\\tan^{-1}(\\{0\\}) = \\{k\\pi : k \\in \\mathbb{Z}\\}$.\n\n' +
          '• Negative Argumente: $\\sin^{-1}(\\{-1\\}) \\neq -\\sin^{-1}(\\{1\\})$ als Mengen (obwohl die Werte verwandt sind).',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Wähle einen konkreten Wert $k = 0, 1, -1$ und prüfe, ob er in der Lösung liegt:\n' +
          '  Für $\\sin^{-1}(\\{0\\}) = \\{k\\pi : k \\in \\mathbb{Z}\\}$: Gilt $\\sin(0) = 0$? Ja ✓  Gilt $\\sin(\\pi) = 0$? Ja ✓  Gilt $\\sin(2) = 0$? Nein (2 ∉ Lösung) ✓\n\n' +
          'Handelt es sich um eine unendliche Menge? (Falls nicht: etwas fehlt!)\n\n' +
          'Stimmt das Periodenintervall ($2k\\pi$ oder $k\\pi$)?',
      },
    ],
    loesung:
      '(a) $\\sin^{-1}(\\{1\\})  = \\left\\{\\, \\frac{\\pi}{2} + 2k\\pi : k \\in \\mathbb{Z} \\,\\right\\}$\n' +
      '(b) $\\sin^{-1}(\\{0\\})  = \\{\\, k\\pi : k \\in \\mathbb{Z} \\,\\}$\n' +
      '(c) $\\sin^{-1}(\\{-1\\}) = \\left\\{\\, \\frac{3\\pi}{2} + 2k\\pi : k \\in \\mathbb{Z} \\,\\right\\}$\n' +
      '(d) $\\cos^{-1}(\\{1\\})  = \\{\\, 2k\\pi : k \\in \\mathbb{Z} \\,\\}$\n' +
      '(e) $\\cos^{-1}(\\{0\\})  = \\left\\{\\, \\frac{\\pi}{2} + k\\pi : k \\in \\mathbb{Z} \\,\\right\\}$\n' +
      '(f) $\\cos^{-1}(\\{-1\\}) = \\{\\, (2k+1)\\pi : k \\in \\mathbb{Z} \\,\\}$\n' +
      '(g) $\\tan^{-1}(\\{1\\})  = \\left\\{\\, \\frac{\\pi}{4} + k\\pi : k \\in \\mathbb{Z} \\,\\right\\}$\n' +
      '(h) $\\tan^{-1}(\\{0\\})  = \\{\\, k\\pi : k \\in \\mathbb{Z} \\,\\}$\n' +
      '(i) $\\tan^{-1}(\\{-1\\}) = \\left\\{\\, -\\frac{\\pi}{4} + k\\pi : k \\in \\mathbb{Z} \\,\\right\\}$',
    schwierigkeit: 'mittel',
    kategorie: 'Trigonometrie',
  },
  {
    id: 'b0_a4',
    titel: 'Teilmengen von $\\mathbb{R} \\times \\mathbb{R}$ skizzieren',
    aufgabeText:
      'Skizzieren Sie folgende Teilmengen von $\\mathbb{R} \\times \\mathbb{R}$:\n' +
      '(a) $M_1 = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x^2 + y^2 = 1\\}$\n' +
      '(b) $M_2 = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x^2 + y^2 = 4\\}$\n' +
      '(c) $M_3 = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x^2 + y^2 < 4\\}$\n' +
      '(d) $M_4 = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x^2 + y^2 < 4 \\text{ und } x^2 + y^2 > 1\\}$\n' +
      '(e) $M_5 = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x = y\\}$\n' +
      '(f) $M_6 = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x \\geq y\\}$\n' +
      '(g) $M_7 = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x = -2y\\}$\n' +
      '(h) $M_8 = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x \\geq 2 \\text{ und } y < 3\\}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          '$\\mathbb{R} \\times \\mathbb{R}$ ist die gewöhnliche zweidimensionale Zahlenebene (Koordinatensystem). Jeder Punkt $(x,y)$ hat eine $x$-Koordinate (horizontal) und eine $y$-Koordinate (vertikal).\n\n' +
          'Mengenschreibweise: $M = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : \\text{Bedingung}\\}$ bedeutet: „Alle Punkte der Ebene, für die die Bedingung gilt."\n\n' +
          'Kreisgleichung: Nach dem Satz des Pythagoras ist $\\sqrt{x^2 + y^2}$ der Abstand eines Punktes $(x,y)$ vom Ursprung.\n' +
          '  $x^2+y^2 = r^2$ → alle Punkte mit Abstand $r$ = Kreis mit Radius $r$\n' +
          '  $x^2+y^2 < r^2$ → alle Punkte mit Abstand $< r$ = offene Kreisscheibe\n\n' +
          'Lineare Gleichungen: $y = mx + b$ beschreibt eine Gerade.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Für jede Bedingung: Geometrische Bedeutung erkennen.\n\n' +
          'Kreisbedingungen $x^2+y^2 = r^2$:\n' +
          '  → Kreis mit Radius $r$ um den Ursprung (nur der Rand)\n' +
          '  $r^2 = 1 \\Rightarrow r = 1$ (Einheitskreis);  $r^2 = 4 \\Rightarrow r = 2$\n\n' +
          'Ungleichungen → Flächen:\n' +
          '  $<$ oder $>$: gestrichelter Rand (Rand gehört NICHT dazu)\n' +
          '  $\\leq$ oder $\\geq$: durchgezogener Rand (Rand gehört dazu)\n\n' +
          'Geraden aus linearen Gleichungen:\n' +
          '  $x = y$: Winkelhalbierende (Steigung 1, durch Ursprung)\n' +
          '  $x = -2y$ → $y = -\\frac{x}{2}$: Gerade mit Steigung $-\\frac{1}{2}$\n\n' +
          '„und" bedeutet Schnittmenge: BEIDE Bedingungen müssen gleichzeitig gelten.\n' +
          '„oder" bedeutet Vereinigung: Mindestens EINE Bedingung muss gelten.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Kreisring $M_4$: „$x^2+y^2 < 4$ und $x^2+y^2 > 1$"\n' +
          '  → Alle Punkte mit $1 < \\sqrt{x^2+y^2} < 2$\n' +
          '  → Fläche zwischen Einheitskreis und Kreis mit Radius 2, OHNE beide Ränder\n' +
          '  → Offener Kreisring, beide Kreise gestrichelt zeichnen\n\n' +
          'Halbebene $M_6$: $x \\geq y$\n' +
          '  Randgerade: $x = y$ (Winkelhalbierende) – durchgezogen, da $\\geq$\n' +
          '  Testpunkt $(2, 0)$: $2 \\geq 0$ ✓ → liegt in $M_6$\n' +
          '  Testpunkt $(0, 2)$: $0 \\geq 2$ ✗ → liegt NICHT in $M_6$\n' +
          '  → Halbebene rechts-unten der Winkelhalbierenden',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Randdarstellung verwechseln: Bei $<$ oder $>$ muss der Rand GESTRICHELT sein. Bei $\\leq$ oder $\\geq$ ist er DURCHGEZOGEN.\n\n' +
          '• $x^2+y^2 = 4$: Der Radius ist $r = \\sqrt{4} = 2$, NICHT $4$!\n\n' +
          '• Für $M_7$ ($x = -2y$): Erst nach $y$ umstellen: $y = -\\frac{x}{2}$. Steigung ist $-\\frac{1}{2}$, nicht $-2$.\n\n' +
          '• $M_8$ („und"): Es handelt sich um den Schnitt zweier Halbebenen – ein Rechteck ohne zwei Ränder, nicht um einen Streifen.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Prüfe mit konkreten Testpunkten:\n' +
          '  Liegt $(0,0)$ in $M_3$ ($x^2+y^2 < 4$)? $0+0 = 0 < 4$ ✓\n' +
          '  Liegt $(2,0)$ in $M_3$? $4+0 = 4 \\not< 4$ ✗ (Rand nicht drin)\n\n' +
          'Für jede Skizze: Markiere einen Punkt, der offensichtlich drin liegt (✓) und einen, der offensichtlich nicht drin liegt (✗), und prüfe die Bedingung.',
      },
    ],
    loesung:
      '(a) $M_1$: Einheitskreis (Kreis mit Radius $1$, Mittelpunkt Ursprung) – nur der Rand.\n' +
      '(b) $M_2$: Kreis mit Radius $2$, Mittelpunkt Ursprung – nur der Rand.\n' +
      '(c) $M_3$: Offene Kreisscheibe mit Radius $2$ (Inneres ohne Rand).\n' +
      '(d) $M_4$: Kreisring – offene Fläche zwischen Einheitskreis und Kreis mit Radius $2$ (beide Ränder ausgeschlossen).\n' +
      '(e) $M_5$: Gerade $y = x$ (Winkelhalbierende des 1. und 3. Quadranten).\n' +
      '(f) $M_6$: Halbebene unterhalb und auf der Geraden $y = x$, d.h. $x \\geq y$.\n' +
      '(g) $M_7$: Gerade $y = -\\frac{x}{2}$ durch den Ursprung (Steigung $-\\frac{1}{2}$).\n' +
      '(h) $M_8$: $x \\geq 2$ (rechts der Geraden $x = 2$ inkl.) und $y < 3$ (unterhalb $y = 3$, Rand ausgeschlossen).',
    schwierigkeit: 'mittel',
    kategorie: 'Mengen & $\\mathbb{R}\\times\\mathbb{R}$',
  },
  {
    id: 'b0_a5',
    titel: 'Mengen in $\\mathbb{R} \\times \\mathbb{R}$ beschreiben',
    aufgabeText:
      'Geben Sie folgende Teilmengen von $\\mathbb{R} \\times \\mathbb{R}$ in Mengenschreibweise an\n' +
      '(Form: $M = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : \\text{Eigenschaft}\\}$):\n\n' +
      '$A$ = Koordinatenachsen ($x$-Achse und $y$-Achse)\n' +
      '$B$ = beide Winkelhalbierende ($y = x$ und $y = -x$)\n' +
      '$C$ = waagerechter Streifen mit $-2 \\leq y \\leq 2$\n' +
      '$D$ = Äußeres des Einheitskreises (ohne Rand)',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Dies ist die Umkehraufgabe zu Aufgabe 4: Geometrische Beschreibung → algebraische Bedingung.\n\n' +
          'Grundprinzip: Überlege, welche Gleichung oder Ungleichung in $x$ und $y$ genau die beschriebenen Punkte erfasst – und nur diese.\n\n' +
          'Wichtige Grundlagen:\n' +
          '  Achsen: $x$-Achse = alle Punkte mit $y = 0$; $y$-Achse = alle Punkte mit $x = 0$\n' +
          '  Geraden: $y = mx + b$ ist die allgemeine Geradenform (Steigung $m$, Achsenabschnitt $b$)\n' +
          '  Kreise: Einheitskreis = $x^2 + y^2 = 1$; Abstand vom Ursprung = $\\sqrt{x^2+y^2}$\n' +
          '  „oder" verbindet zwei Mengen (Vereinigung); „und" schneidet sie (Schnittmenge)',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Für jede Menge: Schreibe die geometrische Bedingung als algebraische Formel.\n\n' +
          '$A$ – Koordinatenachsen:\n' +
          '  $x$-Achse: alle $(x,y)$ mit $y = 0$\n' +
          '  $y$-Achse: alle $(x,y)$ mit $x = 0$\n' +
          '  Vereinigung → Bedingung: $x = 0$ ODER $y = 0$\n\n' +
          '$B$ – Winkelhalbierende:\n' +
          '  $y = x$ → Bedingung: $x = y$\n' +
          '  $y = -x$ → Bedingung: $x = -y$ (d.h. $x + y = 0$)\n' +
          '  Vereinigung → Bedingung: $x = y$ ODER $x = -y$\n\n' +
          '$C$ – Waagerechter Streifen:\n' +
          '  Zwischen den Geraden $y = -2$ und $y = 2$, inklusive: $-2 \\leq y \\leq 2$\n' +
          '  ($x$ ist dabei beliebig – keine Einschränkung an $x$!)\n\n' +
          '$D$ – Äußeres des Einheitskreises OHNE Rand:\n' +
          '  Abstand vom Ursprung echt größer als 1: $x^2 + y^2 > 1$',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Fertige Antworten im richtigen Format:\n\n' +
          '$A = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x = 0 \\text{ oder } y = 0\\}$\n\n' +
          '$B = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x = y \\text{ oder } x = -y\\}$\n\n' +
          '$C = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : -2 \\leq y \\leq 2\\}$\n\n' +
          '$D = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x^2 + y^2 > 1\\}$\n\n' +
          'Hinweis: Die Gleichheitsbedingung im Randfall: $>1$ (offen, kein Rand) vs. $\\geq 1$ (geschlossen, mit Rand).',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• $A$ ist die VEREINIGUNG beider Achsen → Verknüpfung mit „oder", nicht „und".\n' +
          '  $\\{x = 0 \\text{ und } y = 0\\}$ wäre nur der Ursprung $(0,0)$!\n\n' +
          '• Bei $C$: Die Bedingung betrifft NUR $y$ – $x$ kommt nicht vor. Nicht fälschlicherweise $x$ einschränken.\n\n' +
          '• $D$ ohne Rand: $x^2+y^2 > 1$ (strikte Ungleichung), NICHT $x^2+y^2 \\geq 1$ (das würde den Kreisrand mit einschließen).\n\n' +
          '• $B$: Die Bedingung $y = -x$ kann auch als $x + y = 0$ geschrieben werden – beide Formen sind korrekt.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Teste deine Antwort mit konkreten Punkten:\n' +
          '  $A$: Liegt $(3, 0)$ in $A$? $x=3, y=0$ → $y=0$ ✓   Liegt $(1,1)$ in $A$? $x\\neq 0$ und $y\\neq 0$ ✗\n' +
          '  $C$: Liegt $(100, 1.5)$ in $C$? $-2 \\leq 1.5 \\leq 2$ ✓   Liegt $(0, 3)$ in $C$? $3 > 2$ ✗\n' +
          '  $D$: Liegt $(2,0)$ in $D$? $4+0 = 4 > 1$ ✓   Liegt $(0.5, 0)$ in $D$? $0.25 < 1$ ✗',
      },
    ],
    loesung:
      '$A = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x = 0 \\text{ oder } y = 0\\}$\n' +
      '$B = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x = y \\text{ oder } x = -y\\}$\n' +
      '$C = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : -2 \\leq y \\leq 2\\}$\n' +
      '$D = \\{(x,y) \\in \\mathbb{R}{\\times}\\mathbb{R} : x^2 + y^2 > 1\\}$',
    schwierigkeit: 'einfach',
    kategorie: 'Mengen & $\\mathbb{R}\\times\\mathbb{R}$',
  },
  {
    id: 'b0_a6',
    titel: 'Nenner rational machen',
    aufgabeText:
      'Machen Sie den Nenner rational (im Nenner soll keine irrationale Zahl stehen):\n' +
      '(a) $\\dfrac{1}{\\sqrt{3} + \\sqrt{5}}$\n' +
      '(b) $\\dfrac{1}{\\sqrt{3} - \\sqrt{5}}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Eine irrationale Zahl wie $\\sqrt{3}$ oder $\\sqrt{5}$ hat unendlich viele Dezimalstellen ohne Muster und lässt sich nicht als Bruch rationaler Zahlen schreiben. Steht sie im Nenner, ist der Bruch schwer weiterzuverarbeiten.\n\n' +
          'Das Werkzeug: Die 3. binomische Formel $(a+b)(a-b) = a^2 - b^2$ eliminiert Wurzeln:\n' +
          '  Mit $a = \\sqrt{3}$, $b = \\sqrt{5}$:\n' +
          '  $(\\sqrt{3}+\\sqrt{5})(\\sqrt{3}-\\sqrt{5}) = (\\sqrt{3})^2 - (\\sqrt{5})^2 = 3 - 5 = -2$ ✓\n\n' +
          'Die Wurzeln verschwinden, weil beim Quadrieren $\\sqrt{x}^2 = x$ gilt – das Ergebnis ist eine rationale Zahl.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '1. Identifiziere den Nenner, z.B. $(\\sqrt{3} + \\sqrt{5})$.\n\n' +
          '2. Bilde den konjugierten Ausdruck: Drehe nur das Vorzeichen zwischen den beiden Termen um.\n' +
          '   Konjugat zu $(\\sqrt{3} + \\sqrt{5})$ ist $(\\sqrt{3} - \\sqrt{5})$.\n\n' +
          '3. Erweitere den Bruch, indem du Zähler UND Nenner mit dem Konjugat multiplizierst:\n' +
          '   $\\dfrac{1}{\\sqrt{3}+\\sqrt{5}} \\cdot \\dfrac{\\sqrt{3}-\\sqrt{5}}{\\sqrt{3}-\\sqrt{5}} = \\dfrac{\\sqrt{3}-\\sqrt{5}}{(\\sqrt{3})^2-(\\sqrt{5})^2}$\n' +
          '   (Erlaubt: Multiplizieren mit $\\frac{X}{X} = 1$ ändert den Wert nicht)\n\n' +
          '4. Vereinfache den neuen Nenner mit der 3. binomischen Formel:\n' +
          '   $(\\sqrt{3})^2 - (\\sqrt{5})^2 = 3 - 5 = -2$\n\n' +
          '5. Schreibe das Ergebnis.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Allgemeines Prinzip für $\\dfrac{1}{\\sqrt{a} \\pm \\sqrt{b}}$:\n' +
          '  Konjugat: $(\\sqrt{a} \\mp \\sqrt{b})$\n' +
          '  Neuer Nenner: $a - b$\n\n' +
          'Für (a): Nenner $= \\sqrt{3}+\\sqrt{5}$, Konjugat $= \\sqrt{3}-\\sqrt{5}$\n' +
          '  $\\dfrac{1}{\\sqrt{3}+\\sqrt{5}} \\cdot \\dfrac{\\sqrt{3}-\\sqrt{5}}{\\sqrt{3}-\\sqrt{5}} = \\dfrac{\\sqrt{3}-\\sqrt{5}}{3-5} = \\dfrac{\\sqrt{3}-\\sqrt{5}}{-2}$\n\n' +
          'Für (b): Nenner $= \\sqrt{3}-\\sqrt{5}$, Konjugat $= \\sqrt{3}+\\sqrt{5}$\n' +
          '  $\\dfrac{1}{\\sqrt{3}-\\sqrt{5}} \\cdot \\dfrac{\\sqrt{3}+\\sqrt{5}}{\\sqrt{3}+\\sqrt{5}} = \\dfrac{\\sqrt{3}+\\sqrt{5}}{3-5} = \\dfrac{\\sqrt{3}+\\sqrt{5}}{-2}$',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Nur den Nenner mit dem Konjugat multiplizieren – der Zähler muss EBENFALLS damit multipliziert werden! Sonst verändert man den Bruchswert.\n\n' +
          '• Konjugat falsch bilden: Das Vorzeichen wird NUR zwischen den beiden Termen gedreht, nicht vor dem ersten Term:\n' +
          '  Konjugat zu $(\\sqrt{3}+\\sqrt{5})$ ist $(\\sqrt{3}-\\sqrt{5})$, NICHT $(-\\sqrt{3}+\\sqrt{5})$.\n\n' +
          '• Ergebnis vereinfachen vergessen: $\\dfrac{\\sqrt{3}-\\sqrt{5}}{-2}$ ist korrekt – man muss das Minuszeichen nicht in die Wurzel ziehen.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Steht im Nenner des Ergebnisses noch eine Wurzel? Falls ja: Fehler!\n\n' +
          'Probe: Multipliziere Zähler und Nenner mit dem Konjugat und prüfe, ob das Produkt der Nenner eine rationale Zahl ergibt:\n' +
          '  $(\\sqrt{3}+\\sqrt{5})(\\sqrt{3}-\\sqrt{5}) = 3 - 5 = -2$ ✓ (rationale Zahl)\n\n' +
          'Wertprobe: Berechne den Originalbruch und das Ergebnis numerisch:\n' +
          '  $\\dfrac{1}{\\sqrt{3}+\\sqrt{5}} \\approx \\dfrac{1}{1.732+2.236} \\approx \\dfrac{1}{3.968} \\approx 0.252$\n' +
          '  $\\dfrac{\\sqrt{3}-\\sqrt{5}}{-2} \\approx \\dfrac{1.732-2.236}{-2} = \\dfrac{-0.504}{-2} \\approx 0.252$ ✓',
      },
    ],
    loesung:
      '(a) $\\dfrac{1}{\\sqrt{3}+\\sqrt{5}} = \\dfrac{1}{\\sqrt{3}+\\sqrt{5}} \\cdot \\dfrac{\\sqrt{3}-\\sqrt{5}}{\\sqrt{3}-\\sqrt{5}} = \\dfrac{\\sqrt{3}-\\sqrt{5}}{3-5} = \\dfrac{\\sqrt{3}-\\sqrt{5}}{-2}$\n\n' +
      '(b) $\\dfrac{1}{\\sqrt{3}-\\sqrt{5}} = \\dfrac{1}{\\sqrt{3}-\\sqrt{5}} \\cdot \\dfrac{\\sqrt{3}+\\sqrt{5}}{\\sqrt{3}+\\sqrt{5}} = \\dfrac{\\sqrt{3}+\\sqrt{5}}{3-5} = \\dfrac{\\sqrt{3}+\\sqrt{5}}{-2}$',
    schwierigkeit: 'einfach',
    kategorie: 'Algebraische Umformungen',
  },
]
