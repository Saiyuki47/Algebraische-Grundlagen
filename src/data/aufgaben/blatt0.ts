import type { Aufgabe } from '../../types'

export const b0: Aufgabe[] = [
  {
    id: 'b0_a1a',
    titel: 'Graphen von Sinus und Cosinus',
    aufgabeText: 'Graphen von Sinus und Cosinus skizzieren.',
    aufgabeSections: [
      {
        text: '(a) Skizzieren Sie die Graphen der Sinus- und der Cosinusfunktion.',
      },
    ],
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Gefragt sind zwei Graphen in EINEM Koordinatensystem: einer für $\\sin(x)$ und einer für $\\cos(x)$.\n\n' +
          'Die Achsen:\n' +
          '• $x$-Achse = der Winkel (im Bogenmaß)\n' +
          '• $y$-Achse = der Funktionswert, immer zwischen $-1$ und $1$\n\n' +
          'Beide Funktionen stammen vom Einheitskreis: Läuft ein Punkt gegen den Uhrzeigersinn um den Kreis, ist $\\sin$ seine Höhe und $\\cos$ seine waagerechte Position. Beide wiederholen sich nach einer vollen Umdrehung – die Periode ist $2\\pi$.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '1. Achsen zeichnen und die $x$-Achse in vier gleiche Abschnitte einteilen:\n' +
          '   $0$ — $\\frac{\\pi}{2}$ — $\\pi$ — $\\frac{3\\pi}{2}$ — $2\\pi$  (also $0°$ — $90°$ — $180°$ — $270°$ — $360°$).\n\n' +
          '2. Die Schlüsselwerte aus dem Einheitskreis ablesen und in eine Tabelle eintragen:\n\n' +
          '| $x$ | $0$ | $\\frac{\\pi}{2}$ | $\\pi$ | $\\frac{3\\pi}{2}$ | $2\\pi$ |\n' +
          '|-----|-----|-----------------|-------|------------------|--------|\n' +
          '| $\\sin$ | $0$ | $1$ | $0$ | $-1$ | $0$ |\n' +
          '| $\\cos$ | $1$ | $0$ | $-1$ | $0$ | $1$ |\n\n' +
          '3. Die Punkte eintragen und mit einer weichen Wellenlinie verbinden.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Wie ein einzelner Wert entsteht (Punkt läuft um den Einheitskreis):\n' +
          '• bei $90°$ steht der Punkt ganz oben → Höhe $1$ → $\\sin(90°)=1$, waagerechte Position $0$ → $\\cos(90°)=0$\n' +
          '• bei $180°$ steht er ganz links → Höhe $0$ → $\\sin(180°)=0$, waagerechte Position $-1$ → $\\cos(180°)=-1$\n\n' +
          'Verlauf der Kurven:\n' +
          '• Sinus startet bei $0$, hoch auf $1$, zurück auf $0$, runter auf $-1$, zurück auf $0$.\n' +
          '• Kosinus startet bei $1$, fällt auf $0$, weiter auf $-1$, steigt auf $0$, zurück auf $1$.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• $\\sin$ und $\\cos$ vertauschen: $\\sin$ startet bei $0$, $\\cos$ startet bei $1$.\n\n' +
          '• Kurven über $1$ oder unter $-1$ zeichnen – beide bleiben IMMER im Bereich $[-1,\\,1]$.\n\n' +
          '• $\\cos$ ist der $\\sin$ um $\\frac{\\pi}{2}$ nach LINKS verschoben, nicht nach rechts.\n\n' +
          '• Achsenbeschriftung vergessen oder Grad und Bogenmaß mischen – einheitlich $0,\\ \\frac{\\pi}{2},\\ \\pi,\\ \\frac{3\\pi}{2},\\ 2\\pi$ verwenden.',
      },
    ],
    loesung: '',
    loesungSections: [
      {
        text:
          '(a)  Sinus & Cosinus – Periode $2\\pi$, Wertebereich $[-1,1]$:\n\n' +
          '| $x$ | $0$ | $\\dfrac{\\pi}{2}$ | $\\pi$ | $\\dfrac{3\\pi}{2}$ | $2\\pi$ |\n' +
          '|-----|-----|-----------------|-------|------------------|--------|\n' +
          '| $\\sin$ | $0$ | $1$ | $0$ | $-1$ | $0$ |\n' +
          '| $\\cos$ | $1$ | $0$ | $-1$ | $0$ | $1$ |',
        graphId: 'b0_a1_sincos',
      },
    ],
    schwierigkeit: 'einfach',
    kategorie: 'Trigonometrie',
  },
  {
    id: 'b0_a1b',
    titel: 'Sinus und Cosinus im Einheitskreis',
    aufgabeText: 'Sinus und Cosinus im Einheitskreis einzeichnen.',
    aufgabeSections: [
      {
        text: '(b) Zeichnen Sie $\\sin(\\varphi)$ und $\\cos(\\varphi)$ in folgende Zeichnung ein.',
      },
      {
        graphId: 'b0_a1_einheitskreis_leer',
      },
    ],
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Der Einheitskreis ist ein Kreis mit Radius $1$ um den Ursprung. Zu einem Winkel $\\varphi$ (gemessen vom rechten Ende der $x$-Achse, gegen den Uhrzeigersinn) gehört genau ein Punkt $P$ auf dem Kreis.\n\n' +
          'Die zentrale Aussage: $P = (\\cos\\varphi,\\ \\sin\\varphi)$.\n' +
          '• $\\cos\\varphi$ liest man WAAGERECHT ab (die $x$-Koordinate von $P$).\n' +
          '• $\\sin\\varphi$ liest man SENKRECHT ab (die $y$-Koordinate von $P$).\n\n' +
          'Gefragt ist, wo in der Zeichnung diese beiden Strecken stecken.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '1. Achsen und Kreis mit Radius $1$ zeichnen, den Winkel $\\varphi$ vom rechten Ende der $x$-Achse abtragen und den Punkt $P$ auf dem Kreis markieren.\n\n' +
          '2. Von $P$ aus das Lot fällen: eine senkrechte Linie nach unten bis zur $x$-Achse, exakt im rechten Winkel ($90°$). Der Treffpunkt ist der Fußpunkt (kleines Quadrat als Markierung für den rechten Winkel).\n\n' +
          '3. $\\cos(\\varphi)$ einzeichnen: die waagerechte Strecke vom Ursprung bis zum Fußpunkt; mit $\\cos(\\varphi)$ beschriften.\n\n' +
          '4. $\\sin(\\varphi)$ einzeichnen: die senkrechte Strecke vom Fußpunkt hinauf bis $P$; mit $\\sin(\\varphi)$ beschriften.\n\n' +
          'Es entsteht ein rechtwinkliges Dreieck mit den Seiten Radius $1$, $\\cos\\varphi$ und $\\sin\\varphi$.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Beispiel $\\varphi = 60°$: Der Punkt liegt bei $P = (\\cos 60°,\\ \\sin 60°) = \\left(\\frac{1}{2},\\ \\frac{\\sqrt{3}}{2}\\right)$.\n' +
          '• waagerechte Strecke vom Ursprung zum Fußpunkt: $\\cos 60° = \\frac{1}{2}$\n' +
          '• senkrechte Strecke vom Fußpunkt zu $P$: $\\sin 60° = \\frac{\\sqrt{3}}{2} \\approx 0{,}87$\n\n' +
          'Im rechtwinkligen Dreieck ist $\\cos\\varphi$ die Ankathete, $\\sin\\varphi$ die Gegenkathete und der Radius $1$ die Hypotenuse. Daraus folgt der „trigonometrische Pythagoras" $\\sin^2\\varphi + \\cos^2\\varphi = 1$.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• $\\cos$ und $\\sin$ vertauschen: „Kosinus quer, Sinus hoch" – $\\cos$ ist waagerecht, $\\sin$ senkrecht.\n\n' +
          '• Den Winkel von der falschen Stelle aus messen – er wird immer vom rechten Ende der $x$-Achse gegen den Uhrzeigersinn abgetragen.\n\n' +
          '• Das Lot schräg statt im rechten Winkel fällen – es muss senkrecht ($90°$) auf die $x$-Achse treffen.\n\n' +
          '• $\\sin(\\varphi)$ als Länge auf dem Kreisbogen deuten – es ist die senkrechte Höhe des Punktes, nicht die Bogenlänge.',
      },
    ],
    loesung: '',
    loesungSections: [
      {
        text:
          '(b)  Einheitskreis – jeder Punkt hat die Koordinaten $(\\cos\\varphi,\\, \\sin\\varphi)$:\n\n' +
          '$\\cos(\\varphi)$ = $x$-Koordinate (waagerecht)\n' +
          '$\\sin(\\varphi)$ = $y$-Koordinate (senkrecht)',
        graphId: 'b0_a1_einheitskreis',
      },
    ],
    schwierigkeit: 'einfach',
    kategorie: 'Trigonometrie',
  },
  {
    id: 'b0_a1c',
    titel: 'Umrechnung Gradmaß → Bogenmaß',
    aufgabeText: 'Winkel vom Gradmaß ins Bogenmaß umrechnen.',
    aufgabeSections: [
      {
        text:
          '(c) Rechnen Sie folgende Winkel vom Gradmaß ins Bogenmaß um.\n\n' +
          '| Winkel im Gradmaß | $0°$ | $360°$ | $90°$ | $60°$ | $36°$ | $29°$ |\n' +
          '| Winkel im Bogenmaß |  |  |  |  |  |  |',
      },
    ],
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Grad ($°$) und Bogenmaß (Radiant) sind nur zwei Einheiten für denselben Winkel – wie Meter und Zentimeter für dieselbe Länge.\n\n' +
          'Anker zum Merken:\n' +
          '• voller Kreis: $360° = 2\\pi$\n' +
          '• halbe Drehung: $180° = \\pi$\n\n' +
          'Aus $180° = \\pi$ folgt direkt der Umrechnungsfaktor $\\dfrac{\\pi}{180}$ pro Grad.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Es gibt nur EINE Formel:\n' +
          '$x_{\\text{rad}} = x_{°} \\cdot \\dfrac{\\pi}{180}$\n\n' +
          '1. Gradzahl einsetzen und mit $\\dfrac{\\pi}{180}$ multiplizieren.\n' +
          '2. Den Bruch so weit wie möglich kürzen.\n' +
          '3. Lässt er sich nicht kürzen, als Bruch stehen lassen – das ist eine vollständige Antwort.\n\n' +
          'Alle Werte:\n' +
          '• $0° \\to 0$\n' +
          '• $360° \\to \\dfrac{360\\pi}{180} = 2\\pi$\n' +
          '• $90° \\to \\dfrac{90\\pi}{180} = \\dfrac{\\pi}{2}$\n' +
          '• $60° \\to \\dfrac{60\\pi}{180} = \\dfrac{\\pi}{3}$\n' +
          '• $36° \\to \\dfrac{36\\pi}{180} = \\dfrac{\\pi}{5}$\n' +
          '• $29° \\to \\dfrac{29\\pi}{180}$ (nicht kürzbar)',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Beispiel $60°$:\n' +
          '$60 \\cdot \\dfrac{\\pi}{180} = \\dfrac{60\\pi}{180} = \\dfrac{\\pi}{3}$\n\n' +
          'Beispiel $36°$:\n' +
          '$36 \\cdot \\dfrac{\\pi}{180} = \\dfrac{36\\pi}{180} = \\dfrac{\\pi}{5}$\n\n' +
          'Kontrolle: $\\dfrac{\\pi}{2}$ ist ein Viertelkreis, also $90°$. ✓',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Faktor verkehrt herum: Grad → Bogenmaß ist „$\\times \\dfrac{\\pi}{180}$" (das $\\pi$ steht OBEN, damit im Ergebnis ein $\\pi$ erscheint).\n\n' +
          '• Kürzen vergessen: $\\dfrac{90\\pi}{180}$ ist erst als $\\dfrac{\\pi}{2}$ fertig vereinfacht.\n\n' +
          '• Bei $29°$ verzweifeln: $\\dfrac{29\\pi}{180}$ lässt sich nicht kürzen und bleibt als Bruch stehen.\n\n' +
          '• Das $\\pi$ unterschlagen – das Bogenmaß ist eine Zahl MIT $\\pi$, nicht die nackte Gradzahl.',
      },
    ],
    loesung: '',
    loesungSections: [
      {
        text:
          '(c)  Gradmaß → Bogenmaß  ($\\times\\,\\tfrac{\\pi}{180}$):\n\n' +
          '| Gradmaß | $0°$ | $360°$ | $90°$ | $60°$ | $36°$ | $29°$ |\n' +
          '|---------|------|--------|-------|-------|-------|-------|\n' +
          '| Bogenmaß | $0$ | $2\\pi$ | $\\dfrac{\\pi}{2}$ | $\\dfrac{\\pi}{3}$ | $\\dfrac{\\pi}{5}$ | $\\dfrac{29\\pi}{180}$ |\n\n' +
          'Beispielrechnung für $29°$: $\\quad \\dfrac{29}{360} \\cdot 2\\pi = \\dfrac{29}{180}\\pi$',
      },
    ],
    schwierigkeit: 'einfach',
    kategorie: 'Trigonometrie',
  },
  {
    id: 'b0_a1d',
    titel: 'Umrechnung Bogenmaß → Gradmaß',
    aufgabeText: 'Winkel vom Bogenmaß ins Gradmaß umrechnen.',
    aufgabeSections: [
      {
        text:
          '(d) Rechnen Sie folgende Winkel vom Bogenmaß ins Gradmaß um.\n\n' +
          '| Winkel im Bogenmaß | $\\pi$ | $5\\pi$ | $\\frac{2\\pi}{3}$ | $\\frac{\\pi}{6}$ | $\\frac{\\pi}{18}$ | $\\frac{2\\pi}{17}$ |\n' +
          '| Winkel im Gradmaß |  |  |  |  |  |  |',
      },
    ],
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Der umgekehrte Weg zu (c): von Bogenmaß zurück nach Grad. Dieselbe Idee, nur die Formel andersherum.\n\n' +
          'Anker bleibt $180° = \\pi$. Daraus wird aus jedem Bogenmaß-Winkel eine Gradzahl.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Die Formel:\n' +
          '$x_{°} = x_{\\text{rad}} \\cdot \\dfrac{180}{\\pi}$\n\n' +
          '1. Bogenmaß einsetzen und mit $\\dfrac{180}{\\pi}$ multiplizieren.\n' +
          '2. Die beiden $\\pi$ kürzen sich fast immer weg.\n' +
          '3. Danach nur noch mit Zahlen rechnen.\n\n' +
          'Alle Werte:\n' +
          '• $\\pi \\to \\pi \\cdot \\dfrac{180}{\\pi} = 180°$\n' +
          '• $5\\pi \\to 5 \\cdot 180 = 900°$\n' +
          '• $\\dfrac{2\\pi}{3} \\to \\dfrac{2 \\cdot 180}{3} = 120°$\n' +
          '• $\\dfrac{\\pi}{6} \\to \\dfrac{180}{6} = 30°$\n' +
          '• $\\dfrac{\\pi}{18} \\to \\dfrac{180}{18} = 10°$\n' +
          '• $\\dfrac{2\\pi}{17} \\to \\dfrac{2 \\cdot 180}{17} = \\dfrac{360}{17}° \\approx 21{,}2°$',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Beispiel $\\dfrac{2\\pi}{3}$:\n' +
          '$\\dfrac{2\\pi}{3} \\cdot \\dfrac{180}{\\pi} = \\dfrac{2 \\cdot 180}{3} = \\dfrac{360}{3} = 120°$\n\n' +
          'Beispiel $\\dfrac{\\pi}{6}$:\n' +
          '$\\dfrac{\\pi}{6} \\cdot \\dfrac{180}{\\pi} = \\dfrac{180}{6} = 30°$\n\n' +
          'Erst die beiden $\\pi$ durchstreichen, dann bleibt eine reine Zahlenrechnung.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Faktor verkehrt herum: Bogenmaß → Grad ist „$\\times \\dfrac{180}{\\pi}$" (das $\\pi$ steht jetzt UNTEN, damit es sich gegen das $\\pi$ im Winkel kürzt).\n\n' +
          '• Das $\\pi$ nicht kürzen und stehen lassen – im Gradergebnis darf kein $\\pi$ mehr vorkommen.\n\n' +
          '• Über $900°$ stolpern: Werte über $360°$ sind erlaubt ($900° = 720° + 180°$, also zweieinhalb Umdrehungen).\n\n' +
          '• Bei $\\dfrac{2\\pi}{17}$ unnötig runden: $\\dfrac{360}{17}°$ als Bruch ist eine exakte, vollständige Antwort.',
      },
    ],
    loesung: '',
    loesungSections: [
      {
        text:
          '(d)  Bogenmaß → Gradmaß  ($\\times\\,\\tfrac{180}{\\pi}$):\n\n' +
          '| Bogenmaß | $\\pi$ | $5\\pi$ | $\\dfrac{2\\pi}{3}$ | $\\dfrac{\\pi}{6}$ | $\\dfrac{\\pi}{18}$ | $\\dfrac{2\\pi}{17}$ |\n' +
          '|----------|-------|--------|------------------|-----------------|------------------|--------------------|\n' +
          '| Gradmaß | $180°$ | $900°$ | $120°$ | $30°$ | $10°$ | $\\left(\\dfrac{360}{17}\\right)°$ |',
      },
    ],
    schwierigkeit: 'einfach',
    kategorie: 'Trigonometrie',
  },
  {
    id: 'b0_a1e',
    titel: 'Tangensfunktion',
    aufgabeText: 'Tangensfunktion skizzieren.',
    aufgabeSections: [
      {
        text: '(e) Skizzieren Sie die Tangensfunktion.',
      },
    ],
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Der Tangens ist Sinus geteilt durch Kosinus: $\\tan(x) = \\dfrac{\\sin(x)}{\\cos(x)}$.\n\n' +
          'Das Wichtigste: Wo $\\cos(x) = 0$ ist, würde man durch $0$ teilen. Dort ist $\\tan$ NICHT definiert und der Graph hat eine senkrechte Asymptote („Sperrlinie").\n\n' +
          'Die Periode ist $\\pi$ (nicht $2\\pi$ wie bei $\\sin$ und $\\cos$): schon nach einer halben Umdrehung sieht der Graph wieder gleich aus.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '1. Gestrichelte senkrechte Asymptoten dort einzeichnen, wo $\\cos(x) = 0$ ist: bei $x = \\dfrac{\\pi}{2} + k\\pi$ (also $\\dots,\\ -\\dfrac{\\pi}{2},\\ \\dfrac{\\pi}{2},\\ \\dfrac{3\\pi}{2},\\ \\dots$).\n\n' +
          '2. In einem Streifen, z.B. $\\left(-\\dfrac{\\pi}{2},\\ \\dfrac{\\pi}{2}\\right)$, die Schlüsselpunkte eintragen:\n' +
          '• $\\tan\\!\\left(-\\dfrac{\\pi}{4}\\right) = -1$\n' +
          '• $\\tan(0) = 0$\n' +
          '• $\\tan\\!\\left(\\dfrac{\\pi}{4}\\right) = 1$\n\n' +
          '3. Die Punkte zu einer Kurve verbinden, die links unten aus der Asymptote ($-\\infty$) kommt und rechts oben ($+\\infty$) gegen die nächste Asymptote läuft.\n\n' +
          '4. Dieses Muster in jedem Streifen wiederholen (Periode $\\pi$).',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Jeder $\\tan$-Wert entsteht aus $\\sin$ und $\\cos$ – im rechtwinkligen Dreieck $\\tan(\\alpha) = \\dfrac{\\text{Gegenkathete}}{\\text{Ankathete}}$:\n\n' +
          '| $\\alpha$ | $\\sin(\\alpha)$ | $\\cos(\\alpha)$ | $\\tan(\\alpha)$ |\n' +
          '|---|---|---|---|\n' +
          '| $0°$ | $0$ | $1$ | $0$ |\n' +
          '| $45°$ | $\\approx 0{,}71$ | $\\approx 0{,}71$ | $1$ |\n' +
          '| $90°$ | $1$ | $0$ | — |\n' +
          '| $135°$ | $\\approx 0{,}71$ | $\\approx -0{,}71$ | $-1$ |\n' +
          '| $180°$ | $0$ | $-1$ | $0$ |\n\n' +
          'Bei $90°$ ist $\\cos(\\alpha) = 0$ – Teilen durch $0$ geht nicht, dort sitzt die Asymptote.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Periode $2\\pi$ annehmen: Der Tangens hat die Periode $\\pi$, das Muster wiederholt sich doppelt so oft wie bei $\\sin$ und $\\cos$.\n\n' +
          '• Die Asymptoten vergessen: Wo $\\cos(x) = 0$ ist, ist $\\tan$ nicht definiert – dort gehört eine senkrechte Sperrlinie hin.\n\n' +
          '• Einen größten/kleinsten Wert suchen: $\\tan$ läuft in jedem Ast bis $\\pm\\infty$, hat also KEIN Maximum und KEIN Minimum.\n\n' +
          '• Nullstellen falsch setzen: Sie liegen dort, wo auch $\\sin$ null ist, nämlich bei $x = k\\pi$.',
      },
    ],
    loesung: '',
    loesungSections: [
      {
        text:
          '(e)  Tangensfunktion:\n\n' +
          '$\\tan(x) = \\dfrac{\\sin(x)}{\\cos(x)}$, Periode $\\pi$\n\n' +
          'Polstellen (senkrechte Asymptoten) bei $x = \\dfrac{\\pi}{2} + k\\pi$, $k \\in \\mathbb{Z}$',
        graphId: 'b0_a1_tan',
      },
    ],
    schwierigkeit: 'einfach',
    kategorie: 'Trigonometrie',
  },
  {
    id: 'b0_a1f',
    titel: 'Arkusfunktionen: Definitions- und Wertebereich',
    aufgabeText: 'Definitions- und Wertebereiche der Arkusfunktionen angeben.',
    aufgabeSections: [
      {
        text: '(f) Geben Sie die Definitionsbereiche und Wertemengen von $\\arcsin$, $\\arccos$ und $\\arctan$ an.',
      },
    ],
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Gefragt sind für jede der drei Umkehrfunktionen zwei Dinge:\n' +
          '• Definitionsbereich = was darf man hineinstecken?\n' +
          '• Wertemenge = was kommt heraus?\n\n' +
          'Die Arkusfunktionen machen $\\sin$, $\\cos$, $\\tan$ rückgängig: man gibt einen Wert ein und bekommt den passenden Winkel zurück. Dabei tauschen Eingang und Ausgang die Rollen.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '1. Eingang bestimmen: $\\sin$ und $\\cos$ liefern nur Werte zwischen $-1$ und $1$ → in $\\arcsin$ und $\\arccos$ darf man nur Zahlen aus $[-1,1]$ einsetzen. $\\tan$ nimmt jeden Wert an → in $\\arctan$ darf ganz $\\mathbb{R}$ hinein.\n\n' +
          '2. Ausgang festlegen: Damit die Antwort eindeutig ist, wird der Ausgabe-Winkel auf einen festen Bereich beschränkt.\n\n' +
          'So sehen die drei aus (Definitionsbereich → Wertemenge):\n' +
          '$\\arcsin:\\ [-1,1] \\to \\left[-\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right]$\n' +
          '$\\arccos:\\ [-1,1] \\to [0, \\pi]$\n' +
          '$\\arctan:\\ \\mathbb{R} \\to \\left(-\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right)$',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Klammern richtig lesen: eckig $[\\,]$ = Rand gehört dazu; rund $(\\,)$ = Rand gehört nicht dazu.\n\n' +
          'Beispiel $\\arcsin$: Eingang $[-1,1]$ (Rand $\\pm 1$ erlaubt), Ausgang $\\left[-\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right]$ (Rand $\\pm\\dfrac{\\pi}{2}$ wird erreicht).\n\n' +
          'Beispiel $\\arctan$: Eingang ganz $\\mathbb{R}$, Ausgang $\\left(-\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right)$ mit RUNDEN Klammern – die Randwerte $\\pm\\dfrac{\\pi}{2}$ werden nie ganz erreicht.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Wertemengen von $\\arcsin$ und $\\arccos$ verwechseln: gleicher Eingang $[-1,1]$, aber $\\arccos$ läuft von $0$ bis $\\pi$, $\\arcsin$ von $-\\dfrac{\\pi}{2}$ bis $\\dfrac{\\pi}{2}$.\n\n' +
          '• Bei $\\arctan$ den Definitionsbereich einschränken: Eingang ist ganz $\\mathbb{R}$, nicht $[-1,1]$.\n\n' +
          '• Eckige und runde Klammern vertauschen: bei $\\arctan$ ist die Wertemenge ein offenes Intervall (runde Klammern).\n\n' +
          '• Definitionsbereich und Wertemenge vertauschen – immer „was darf rein → was kommt raus".',
      },
    ],
    loesung: '',
    loesungSections: [
      {
        text:
          '(f)  Arkusfunktionen – Definitionsbereich → Wertebereich:\n\n' +
          '$\\arcsin : [-1,\\,1] \\to \\left[-\\dfrac{\\pi}{2},\\, \\dfrac{\\pi}{2}\\right]$\n' +
          '$\\arccos : [-1,\\,1] \\to [0,\\, \\pi]$\n' +
          '$\\arctan : \\mathbb{R} \\to \\left(-\\dfrac{\\pi}{2},\\, \\dfrac{\\pi}{2}\\right)$  (offenes Intervall!)',
      },
    ],
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
    ],
    loesung:
      '(a) $\\dfrac{1}{\\sqrt{3}+\\sqrt{5}} = \\dfrac{1}{\\sqrt{3}+\\sqrt{5}} \\cdot \\dfrac{\\sqrt{3}-\\sqrt{5}}{\\sqrt{3}-\\sqrt{5}} = \\dfrac{\\sqrt{3}-\\sqrt{5}}{3-5} = \\dfrac{\\sqrt{3}-\\sqrt{5}}{-2}$\n\n' +
      '(b) $\\dfrac{1}{\\sqrt{3}-\\sqrt{5}} = \\dfrac{1}{\\sqrt{3}-\\sqrt{5}} \\cdot \\dfrac{\\sqrt{3}+\\sqrt{5}}{\\sqrt{3}+\\sqrt{5}} = \\dfrac{\\sqrt{3}+\\sqrt{5}}{3-5} = \\dfrac{\\sqrt{3}+\\sqrt{5}}{-2}$',
    schwierigkeit: 'einfach',
    kategorie: 'Algebraische Umformungen',
  },
]
