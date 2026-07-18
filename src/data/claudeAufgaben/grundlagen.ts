import type { ClaudeAufgabe } from './_types'

// ─────────────────────────────────────────────────────────────────────────────
// Blatt 0 – Trigonometrie, Teilmengen von R×R, algebraische Umformungen.
// Je eine eigens erdachte Beispielaufgabe pro Aufgabenart.
// ─────────────────────────────────────────────────────────────────────────────

export const grundlagen: ClaudeAufgabe[] = [
  {
    id: 'c_g_sincos_graph',
    art: 'Graphen von Sinus & Cosinus',
    titel: 'Schnittpunkte von Sinus und Cosinus',
    schwierigkeit: 'einfach',
    quelle: 'Blatt 0, Aufgabe 1a',
    aufgabeText:
      'Skizzieren Sie die Graphen von $\\sin(x)$ und $\\cos(x)$ über dem Intervall $[0,\\ 2\\pi]$ in ein gemeinsames Koordinatensystem.\n\n' +
      'Bestimmen Sie außerdem alle $x \\in [0,\\ 2\\pi]$, für die $\\sin(x) = \\cos(x)$ gilt, und lesen Sie den zugehörigen Funktionswert ab.',
    referenz: ['sin-cos'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Beide Funktionen haben die Periode $2\\pi$ und den Wertebereich $[-1,\\ 1]$. $\\sin$ startet in $0$ bei $0$ und steigt, $\\cos$ startet bei $1$ und fällt. Ein Schnittpunkt liegt dort, wo sich die beiden Kurven kreuzen.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Trage zuerst die Stützstellen $0,\\ \\tfrac{\\pi}{2},\\ \\pi,\\ \\tfrac{3\\pi}{2},\\ 2\\pi$ aus der Wertetabelle ab und verbinde sie zu glatten Wellen. Für die Schnittpunkte löst du $\\sin(x)=\\cos(x)$, also (für $\\cos x \\neq 0$) $\\tan(x) = 1$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        '$\\tan(x)=1$ hat wegen der Periode $\\pi$ **zwei** Lösungen in $[0,2\\pi]$, nicht nur eine. Vergiss die zweite Lösung im dritten Quadranten nicht.' },
    ],
    loesung:
      '**Skizze**\n' +
      '$\\sin$ (rot) und $\\cos$ (blau) über $[0,2\\pi]$ mit den Stützstellen:\n\n' +
      '| $x$ | $0$ | $\\tfrac{\\pi}{2}$ | $\\pi$ | $\\tfrac{3\\pi}{2}$ | $2\\pi$ |\n' +
      '| --- | --- | --- | --- | --- | --- |\n' +
      '| $\\sin x$ | $0$ | $1$ | $0$ | $-1$ | $0$ |\n' +
      '| $\\cos x$ | $1$ | $0$ | $-1$ | $0$ | $1$ |\n\n' +
      '**Schnittpunkte**\n' +
      '$\\sin(x)=\\cos(x)$. Für $\\cos x \\neq 0$ teilen wir durch $\\cos x$:\n' +
      '$\\tan(x) = 1$.\n\n' +
      'Im Intervall $[0,2\\pi]$ hat $\\tan(x)=1$ die Lösungen\n' +
      '$x_1 = \\dfrac{\\pi}{4}$ und $x_2 = \\dfrac{\\pi}{4} + \\pi = \\dfrac{5\\pi}{4}$.\n\n' +
      '**Funktionswerte**\n' +
      '• bei $x_1=\\tfrac{\\pi}{4}$: $\\sin\\tfrac{\\pi}{4}=\\cos\\tfrac{\\pi}{4}=\\dfrac{\\sqrt{2}}{2}\\approx 0{,}71$.\n' +
      '• bei $x_2=\\tfrac{5\\pi}{4}$: $\\sin\\tfrac{5\\pi}{4}=\\cos\\tfrac{5\\pi}{4}=-\\dfrac{\\sqrt{2}}{2}\\approx -0{,}71$.\n\n' +
      'Die Kurven kreuzen sich also in $\\left(\\tfrac{\\pi}{4},\\ \\tfrac{\\sqrt2}{2}\\right)$ und $\\left(\\tfrac{5\\pi}{4},\\ -\\tfrac{\\sqrt2}{2}\\right)$.',
  },
  {
    id: 'c_g_einheitskreis',
    art: 'Einheitskreis: sin & cos ablesen',
    titel: 'Koordinaten eines Punktes am Einheitskreis',
    schwierigkeit: 'einfach',
    quelle: 'Blatt 0, Aufgabe 1b',
    aufgabeText:
      'Ein Punkt $P$ liegt auf dem Einheitskreis und gehört zum Winkel $\\varphi = 150^\\circ$ (gemessen vom rechten Ende der $x$-Achse gegen den Uhrzeigersinn).\n\n' +
      'a) Geben Sie die Koordinaten von $P$ an.\n' +
      'b) Welche Strecke in der Zeichnung entspricht $\\cos(\\varphi)$, welche $\\sin(\\varphi)$, und welches Vorzeichen haben sie?',
    referenz: ['sin-cos'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Für jeden Winkel gilt $P = (\\cos\\varphi,\\ \\sin\\varphi)$. $\\cos\\varphi$ ist die waagerechte ($x$-)Koordinate, $\\sin\\varphi$ die senkrechte ($y$-)Koordinate.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        '$150^\\circ$ liegt im 2. Quadranten. Nutze den Bezugswinkel $180^\\circ-150^\\circ=30^\\circ$: die Beträge sind $\\cos 30^\\circ$ und $\\sin 30^\\circ$; die Vorzeichen kommen aus dem Quadranten (2. Quadrant: $x<0$, $y>0$).' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        '„Kosinus quer, Sinus hoch": $\\cos$ liest man waagerecht ab, $\\sin$ senkrecht. Im 2. Quadranten ist $\\cos(\\varphi)$ negativ – die Strecke zeigt nach **links**.' },
    ],
    loesung:
      '**a) Koordinaten**\n' +
      '$150^\\circ$ hat den Bezugswinkel $30^\\circ$ und liegt im 2. Quadranten.\n' +
      '$\\cos 150^\\circ = -\\cos 30^\\circ = -\\dfrac{\\sqrt3}{2}$, $\\quad \\sin 150^\\circ = +\\sin 30^\\circ = \\dfrac{1}{2}$.\n\n' +
      'Also $P = \\left(-\\dfrac{\\sqrt3}{2},\\ \\dfrac{1}{2}\\right) \\approx (-0{,}87,\\ 0{,}5)$.\n\n' +
      '**b) Strecken und Vorzeichen**\n' +
      '• $\\cos(\\varphi)$ ist die waagerechte Strecke vom Ursprung zum Fußpunkt des Lots von $P$ auf die $x$-Achse. Da $P$ links liegt, ist $\\cos(\\varphi)=-\\tfrac{\\sqrt3}{2}<0$ (Strecke nach links).\n' +
      '• $\\sin(\\varphi)$ ist die senkrechte Strecke vom Fußpunkt hinauf zu $P$. Sie ist $\\sin(\\varphi)=\\tfrac12>0$ (nach oben).\n\n' +
      'Kontrolle mit dem trigonometrischen Pythagoras: $\\left(-\\tfrac{\\sqrt3}{2}\\right)^2 + \\left(\\tfrac12\\right)^2 = \\tfrac34+\\tfrac14 = 1$. ✓',
  },
  {
    id: 'c_g_tangens',
    art: 'Tangensfunktion & Polstellen',
    titel: 'Tangens skizzieren und Definitionslücken bestimmen',
    schwierigkeit: 'einfach',
    quelle: 'Blatt 0, Aufgabe 1e',
    aufgabeText:
      'Skizzieren Sie die Funktion $\\tan(x) = \\dfrac{\\sin(x)}{\\cos(x)}$ über $[-\\pi,\\ \\pi]$.\n\n' +
      'Geben Sie alle Definitionslücken (senkrechte Asymptoten) in diesem Intervall sowie die Nullstellen und die Periode an.',
    referenz: ['sin-cos'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Der Tangens ist als Quotient $\\tfrac{\\sin x}{\\cos x}$ überall dort **nicht** definiert, wo $\\cos(x)=0$ ist – dort teilt man durch null und der Graph hat eine senkrechte Asymptote.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Suche die Nullstellen von $\\cos$ (Asymptoten) und die Nullstellen von $\\sin$ (Nullstellen von $\\tan$). Zwischen zwei Asymptoten steigt $\\tan$ monoton von $-\\infty$ nach $+\\infty$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Die Periode des Tangens ist $\\pi$ (nicht $2\\pi$ wie bei $\\sin$/$\\cos$). Der Graph wiederholt sich also doppelt so oft.' },
    ],
    loesung:
      '**Definitionslücken (Asymptoten)**\n' +
      '$\\cos(x)=0$ bei $x = \\dfrac{\\pi}{2}+k\\pi$. In $[-\\pi,\\pi]$ sind das\n' +
      '$x = -\\dfrac{\\pi}{2}$ und $x = \\dfrac{\\pi}{2}$ – dort verlaufen senkrechte Asymptoten.\n\n' +
      '**Nullstellen**\n' +
      '$\\tan(x)=0$, wo $\\sin(x)=0$: bei $x=-\\pi,\\ 0,\\ \\pi$.\n\n' +
      '**Verlauf**\n' +
      '• Auf $\\left(-\\tfrac{\\pi}{2},\\ \\tfrac{\\pi}{2}\\right)$ steigt $\\tan$ streng monoton von $-\\infty$ (rechts der Asymptote bei $-\\tfrac{\\pi}{2}$) durch $(0,0)$ bis $+\\infty$ (links der Asymptote bei $\\tfrac{\\pi}{2}$).\n' +
      '• Stützwert: $\\tan\\tfrac{\\pi}{4}=1$, $\\tan\\left(-\\tfrac{\\pi}{4}\\right)=-1$.\n\n' +
      '**Periode:** $\\pi$.',
  },
  {
    id: 'c_g_winkelumrechnung',
    art: 'Grad ↔ Bogenmaß umrechnen',
    titel: 'Winkel in beide Richtungen umrechnen',
    schwierigkeit: 'einfach',
    quelle: 'Blatt 0, Aufgaben 1c/1d',
    aufgabeText:
      'a) Rechnen Sie $135^\\circ$ und $210^\\circ$ ins Bogenmaß um.\n' +
      'b) Rechnen Sie $\\dfrac{3\\pi}{4}$ und $\\dfrac{7\\pi}{6}$ ins Gradmaß um.',
    referenz: ['winkelumrechnung'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Eine volle Umdrehung ist $360^\\circ = 2\\pi$. Daraus folgt der Umrechnungsfaktor $180^\\circ = \\pi$.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Grad → Bogenmaß: mit $\\dfrac{\\pi}{180^\\circ}$ multiplizieren. Bogenmaß → Grad: mit $\\dfrac{180^\\circ}{\\pi}$ multiplizieren.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Kürze vor dem Rechnen: $\\tfrac{135}{180}=\\tfrac{3}{4}$. Wer erst multipliziert und dann kürzt, verrechnet sich leichter.' },
    ],
    loesung:
      '**a) Grad → Bogenmaß** (mal $\\tfrac{\\pi}{180^\\circ}$)\n' +
      '$135^\\circ = 135\\cdot\\dfrac{\\pi}{180} = \\dfrac{135}{180}\\pi = \\dfrac{3\\pi}{4}$.\n' +
      '$210^\\circ = 210\\cdot\\dfrac{\\pi}{180} = \\dfrac{210}{180}\\pi = \\dfrac{7\\pi}{6}$.\n\n' +
      '**b) Bogenmaß → Grad** (mal $\\tfrac{180^\\circ}{\\pi}$)\n' +
      '$\\dfrac{3\\pi}{4} = \\dfrac{3}{4}\\cdot 180^\\circ = 135^\\circ$.\n' +
      '$\\dfrac{7\\pi}{6} = \\dfrac{7}{6}\\cdot 180^\\circ = 210^\\circ$.\n\n' +
      'a) und b) sind zueinander die Gegenprobe. ✓',
  },
  {
    id: 'c_g_arkus',
    art: 'Arkusfunktionen: Def.- & Wertebereich',
    titel: 'Umkehrfunktionen richtig einschränken',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 0, Aufgabe 1f',
    aufgabeText:
      'Geben Sie Definitionsbereich und Wertemenge von $\\arccos$ an und begründen Sie beide.\n\n' +
      'Berechnen Sie damit $\\arccos\\left(-\\tfrac{1}{2}\\right)$ und erklären Sie, warum das Ergebnis **nicht** $-60^\\circ$ ist.',
    referenz: ['arkusfunktionen'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        '$\\arccos$ macht $\\cos$ rückgängig. Da $\\cos$ nur Werte in $[-1,1]$ liefert, ist das genau der erlaubte Eingang von $\\arccos$. Damit die Umkehrung eindeutig ist, schränkt man $\\cos$ auf $[0,\\pi]$ ein – das wird die Wertemenge von $\\arccos$.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Eingang und Ausgang tauschen die Rollen: Der Wertebereich von $\\cos$ (also $[-1,1]$) wird zum Definitionsbereich von $\\arccos$; der eingeschränkte Definitionsbereich von $\\cos$ (also $[0,\\pi]$) wird zur Wertemenge von $\\arccos$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Das Ergebnis von $\\arccos$ muss im Intervall $[0,\\pi]$ liegen. Ein negativer Winkel wie $-60^\\circ$ ist deshalb ausgeschlossen.' },
    ],
    loesung:
      '**Definitionsbereich und Wertemenge**\n' +
      '$\\arccos:\\ [-1,\\ 1] \\to [0,\\ \\pi]$.\n\n' +
      '• Definitionsbereich $[-1,1]$: $\\cos$ nimmt nur Werte zwischen $-1$ und $1$ an, also darf man nur solche Zahlen in die Umkehrfunktion einsetzen.\n' +
      '• Wertemenge $[0,\\pi]$: Auf $[0,\\pi]$ ist $\\cos$ streng monoton fallend und damit umkehrbar; deshalb gibt $\\arccos$ genau die Winkel aus diesem Intervall zurück.\n\n' +
      '**Berechnung**\n' +
      'Gesucht ist der Winkel $\\alpha \\in [0,\\pi]$ mit $\\cos\\alpha = -\\tfrac12$.\n' +
      'Es gilt $\\cos 120^\\circ = -\\tfrac12$ und $120^\\circ = \\tfrac{2\\pi}{3} \\in [0,\\pi]$.\n' +
      'Also $\\arccos\\!\\left(-\\tfrac12\\right) = \\dfrac{2\\pi}{3} \\ (=120^\\circ)$.\n\n' +
      'Zwar ist auch $\\cos(-120^\\circ)=-\\tfrac12$, aber $-120^\\circ \\notin [0,\\pi]$. Und $-60^\\circ$ erfüllt $\\cos(-60^\\circ)=+\\tfrac12 \\neq -\\tfrac12$ – doppelt falsch.',
  },
  {
    id: 'c_g_funktionswerte',
    art: 'Trigonometrische Funktionswerte berechnen',
    titel: 'Werte über Periodizität und Symmetrie',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 0, Aufgabe 2',
    aufgabeText:
      'Bestimmen Sie ohne Taschenrechner:\n' +
      'a) $\\sin\\!\\left(\\dfrac{7\\pi}{2}\\right)$, b) $\\cos(5\\pi)$, c) $\\sin\\!\\left(-\\dfrac{\\pi}{6}\\right)$, d) $\\tan\\!\\left(\\dfrac{5\\pi}{4}\\right)$.',
    referenz: ['sin-cos'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Nutze die Periode ($\\sin,\\cos$: $2\\pi$; $\\tan$: $\\pi$), um das Argument in den Bereich $[0,2\\pi)$ bzw. $[0,\\pi)$ zu holen, und die Symmetrie: $\\sin$ ist ungerade ($\\sin(-x)=-\\sin x$), $\\cos$ ist gerade ($\\cos(-x)=\\cos x$).' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Ziehe von großen Argumenten ganze Vielfache der Periode ab, z. B. $\\tfrac{7\\pi}{2} = \\tfrac{3\\pi}{2} + 2\\pi$. Danach den bekannten Stützwert ablesen.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Beim Abziehen der Periode muss ein **ganzes** Vielfaches von $2\\pi$ (bzw. $\\pi$ bei $\\tan$) verwendet werden – nicht einfach „$\\pi$ abziehen", wenn es gerade passt.' },
    ],
    loesung:
      '**a)** $\\dfrac{7\\pi}{2} = \\dfrac{3\\pi}{2} + 2\\pi \\Rightarrow \\sin\\dfrac{7\\pi}{2} = \\sin\\dfrac{3\\pi}{2} = -1$.\n\n' +
      '**b)** $5\\pi = \\pi + 2\\cdot 2\\pi \\Rightarrow \\cos(5\\pi) = \\cos(\\pi) = -1$.\n\n' +
      '**c)** $\\sin$ ist ungerade: $\\sin\\!\\left(-\\tfrac{\\pi}{6}\\right) = -\\sin\\tfrac{\\pi}{6} = -\\dfrac{1}{2}$.\n\n' +
      '**d)** $\\tan$ hat Periode $\\pi$: $\\dfrac{5\\pi}{4} = \\dfrac{\\pi}{4} + \\pi \\Rightarrow \\tan\\dfrac{5\\pi}{4} = \\tan\\dfrac{\\pi}{4} = 1$.',
  },
  {
    id: 'c_g_urbilder',
    art: 'Urbilder trigonometrischer Funktionen',
    titel: 'Alle Lösungen einer Sinusgleichung',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 0, Aufgabe 3',
    aufgabeText:
      'Bestimmen Sie alle $x \\in \\mathbb{R}$ mit $\\sin(x) = \\dfrac{1}{2}$.\n\n' +
      'Geben Sie das Urbild $\\sin^{-1}\\!\\left(\\left\\{\\tfrac12\\right\\}\\right)$ als Menge an.',
    referenz: ['urbilder'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Gesucht sind **alle** Winkel mit demselben Sinuswert, nicht nur der eine Wert aus $\\arcsin$. Am Einheitskreis gibt es zu einem positiven $\\sin$-Wert zwei Winkel pro Umlauf (im 1. und im 2. Quadranten).' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Finde den Hauptwert ($\\arcsin\\tfrac12=\\tfrac{\\pi}{6}$), den Partnerwinkel ($\\pi-\\tfrac{\\pi}{6}=\\tfrac{5\\pi}{6}$) und hänge dann die Periode $+2k\\pi$ an, $k\\in\\mathbb{Z}$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Nur $\\tfrac{\\pi}{6}$ anzugeben ist unvollständig. Es fehlen der zweite Winkel $\\tfrac{5\\pi}{6}$ und die Periodenvielfachen.' },
    ],
    loesung:
      '**Zwei Grundlösungen pro Umlauf**\n' +
      '$\\arcsin\\tfrac12 = \\dfrac{\\pi}{6}$ (1. Quadrant). Der zweite Winkel mit gleichem Sinus liegt im 2. Quadranten:\n' +
      '$x = \\pi - \\dfrac{\\pi}{6} = \\dfrac{5\\pi}{6}$.\n\n' +
      '**Alle Lösungen (Periode $2\\pi$)**\n' +
      '$x = \\dfrac{\\pi}{6} + 2k\\pi \\quad\\text{oder}\\quad x = \\dfrac{5\\pi}{6} + 2k\\pi, \\qquad k \\in \\mathbb{Z}$.\n\n' +
      '**Als Urbildmenge**\n' +
      '$\\sin^{-1}\\!\\left(\\left\\{\\tfrac12\\right\\}\\right) = \\left\\{\\ \\dfrac{\\pi}{6}+2k\\pi \\ :\\ k\\in\\mathbb{Z}\\ \\right\\} \\cup \\left\\{\\ \\dfrac{5\\pi}{6}+2k\\pi \\ :\\ k\\in\\mathbb{Z}\\ \\right\\}$.',
  },
  {
    id: 'c_g_rxr_skizze',
    art: 'Teilmengen von R×R skizzieren',
    titel: 'Kreisring in der Ebene zeichnen',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 0, Aufgabe 4',
    aufgabeText:
      'Skizzieren Sie die Menge\n' +
      '$M = \\{\\,(x,y) \\in \\mathbb{R}\\times\\mathbb{R} \\ :\\ 1 \\le x^2 + y^2 \\le 4,\\ \\ y \\ge 0 \\,\\}$.\n\n' +
      'Beschreiben Sie die Menge in Worten und geben Sie an, welche Randkurven dazugehören.',
    referenz: ['kreise-mengen'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        '$x^2+y^2 = r^2$ ist der Kreis um den Ursprung mit Radius $r$. $x^2+y^2 \\le r^2$ ist die ausgefüllte Kreisscheibe, $x^2+y^2 \\ge r^2$ das Äußere.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Zerlege die Bedingung: $x^2+y^2\\ge 1$ (außerhalb des Kreises mit Radius $1$) UND $x^2+y^2\\le 4$ (innerhalb des Kreises mit Radius $2$) UND $y\\ge 0$ (obere Halbebene). Der Durchschnitt ist die gesuchte Menge.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Bei $\\le$ / $\\ge$ (statt $<$/$>$) gehört der Rand **dazu** – durchgezogene Linie. Bei $y\\ge 0$ zählt die $x$-Achse mit.' },
    ],
    loesung:
      '**Beschreibung**\n' +
      '$M$ ist der obere halbe **Kreisring** (Annulus) um den Ursprung: alle Punkte, deren Abstand zum Ursprung zwischen $1$ und $2$ liegt und die auf oder oberhalb der $x$-Achse liegen.\n\n' +
      '**Skizze (Beschreibung)**\n' +
      '• innerer Randkreis: Radius $1$, oberer Halbkreis – gehört dazu (durchgezogen).\n' +
      '• äußerer Randkreis: Radius $2$, oberer Halbkreis – gehört dazu (durchgezogen).\n' +
      '• die beiden Strecken auf der $x$-Achse von $x=-2$ bis $x=-1$ und von $x=1$ bis $x=2$ – gehören dazu ($y=0$ ist erlaubt).\n' +
      '• die gesamte Fläche zwischen den Halbkreisen ist ausgefüllt.\n\n' +
      '**Randzugehörigkeit:** Wegen $\\le$, $\\ge$ und $y\\ge 0$ ist der komplette Rand Teil der Menge.',
  },
  {
    id: 'c_g_rxr_beschreiben',
    art: 'Mengen in R×R durch Bedingung beschreiben',
    titel: 'Von der Skizze zur Mengenschreibweise',
    schwierigkeit: 'einfach',
    quelle: 'Blatt 0, Aufgabe 5',
    aufgabeText:
      'Beschreiben Sie in Mengenschreibweise $\\{(x,y)\\in\\mathbb{R}\\times\\mathbb{R} : \\dots\\}$:\n\n' +
      'a) das abgeschlossene Quadrat mit den Ecken $(0,0),\\ (2,0),\\ (2,2),\\ (0,2)$;\n' +
      'b) die Gerade durch $(0,1)$ mit Steigung $2$;\n' +
      'c) alle Punkte, die von der $y$-Achse einen Abstand kleiner als $3$ haben.',
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Jede Bedingung an $x$ und $y$ schneidet eine Teilmenge der Ebene aus. „Und"-Bedingungen verbindet man mit Komma (Durchschnitt).' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Quadrat: $x$ und $y$ je auf ein Intervall einschränken. Gerade: Geradengleichung $y=mx+b$. Abstand zur $y$-Achse: das ist $|x|$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Der Abstand eines Punktes $(x,y)$ zur $y$-Achse ist $|x|$ (nicht $|y|$). Zur $x$-Achse wäre es $|y|$.' },
    ],
    loesung:
      '**a)** $\\{(x,y) : 0 \\le x \\le 2,\\ \\ 0 \\le y \\le 2\\}$.\n\n' +
      '**b)** Die Gerade hat die Gleichung $y = 2x + 1$:\n' +
      '$\\{(x,y) : y = 2x + 1\\}$.\n\n' +
      '**c)** Abstand zur $y$-Achse ist $|x|$:\n' +
      '$\\{(x,y) : |x| < 3\\} = \\{(x,y) : -3 < x < 3\\}$ (senkrechter Streifen, Ränder nicht enthalten).',
  },
  {
    id: 'c_g_nenner_rational',
    art: 'Terme umformen / Nenner rational machen',
    titel: 'Bruch mit Wurzel im Nenner vereinfachen',
    schwierigkeit: 'einfach',
    quelle: 'Blatt 0, Aufgabe 6',
    aufgabeText:
      'Machen Sie den Nenner rational und vereinfachen Sie so weit wie möglich:\n' +
      '$\\dfrac{5}{\\sqrt{7}-\\sqrt{2}}$.',
    referenz: ['binomische-formeln'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Ein Nenner der Form $\\sqrt a - \\sqrt b$ wird rational, wenn man mit dem „konjugierten" Term $\\sqrt a + \\sqrt b$ erweitert – dann greift die 3. binomische Formel $(u-v)(u+v)=u^2-v^2$.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Erweitern heißt: Zähler UND Nenner mit demselben Term multiplizieren. Der Wert des Bruchs ändert sich dadurch nicht.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Nur den Nenner zu multiplizieren verändert den Bruch! Immer Zähler und Nenner gleichzeitig erweitern.' },
    ],
    loesung:
      '**Mit dem konjugierten Nenner erweitern**\n' +
      '$\\dfrac{5}{\\sqrt7-\\sqrt2} \\cdot \\dfrac{\\sqrt7+\\sqrt2}{\\sqrt7+\\sqrt2} = \\dfrac{5(\\sqrt7+\\sqrt2)}{(\\sqrt7-\\sqrt2)(\\sqrt7+\\sqrt2)}$.\n\n' +
      '**Nenner mit 3. binomischer Formel**\n' +
      '$(\\sqrt7-\\sqrt2)(\\sqrt7+\\sqrt2) = (\\sqrt7)^2 - (\\sqrt2)^2 = 7 - 2 = 5$.\n\n' +
      '**Kürzen**\n' +
      '$\\dfrac{5(\\sqrt7+\\sqrt2)}{5} = \\sqrt7 + \\sqrt2$.\n\n' +
      'Ergebnis: $\\dfrac{5}{\\sqrt7-\\sqrt2} = \\sqrt7+\\sqrt2 \\approx 4{,}06$.',
  },
]
