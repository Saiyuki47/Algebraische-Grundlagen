import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'arkusfunktionen',
  titel: 'Arkusfunktionen',
  inhalt:
    '**Worum geht es?**\n' +
    'Die **Arkusfunktionen** $\\arcsin$, $\\arccos$ und $\\arctan$ sind die **Umkehrfunktionen** von $\\sin$, $\\cos$ und $\\tan$. Sie beantworten die umgekehrte Frage: nicht „welchen Wert hat der Sinus des Winkels $\\varphi$?", sondern „**welcher Winkel** $\\varphi$ hat einen gegebenen Sinuswert?". Das braucht man überall dort, wo aus einem Verhältnis oder aus Koordinaten ein Winkel zurückgerechnet werden soll — etwa beim **Argument einer komplexen Zahl** oder beim Umrechnen kartesischer in Polarkoordinaten.\n' +
    '\n' +
    '**Warum muss man den Definitionsbereich einschränken?**\n' +
    'Eine Funktion ist nur dann umkehrbar, wenn sie **injektiv** (eineindeutig) ist — jeder Wert darf nur von genau einem Argument getroffen werden. $\\sin$, $\\cos$ und $\\tan$ sind aber **periodisch**: unendlich viele Winkel haben denselben Funktionswert (z. B. $\\sin 0 = \\sin\\pi = \\sin 2\\pi = 0$). Auf ganz $\\mathbb{R}$ gibt es also keine eindeutige Umkehrung. Deshalb schränkt man den Definitionsbereich auf ein Intervall ein, auf dem die Funktion **streng monoton** und damit injektiv ist. Der so festgelegte eindeutige Rückgabewert heißt **Hauptwert**.\n' +
    '\n' +
    '**Definition & Wertebereiche**\n' +
    'Auf dem jeweils gewählten Monotonie-Intervall gilt die Umkehrung; der Wertebereich der Arkusfunktion ist genau dieses Intervall:\n' +
    '$\\arcsin: [-1,1] \\to \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$ (Umkehrung von $\\sin$ auf $\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$)\n' +
    '$\\arccos: [-1,1] \\to [0, \\pi]$ (Umkehrung von $\\cos$ auf $[0,\\pi]$)\n' +
    '$\\arctan: \\mathbb{R} \\to \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$ (Umkehrung von $\\tan$ auf $\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)$)\n' +
    'Beachte die Definitionsbereiche: $\\arcsin$ und $\\arccos$ nehmen nur Argumente aus $[-1,1]$ an (das ist der Wertebereich von $\\sin,\\cos$); $\\arctan$ ist für **jede** reelle Zahl definiert, da $\\tan$ alle reellen Werte annimmt. Die Grenzen $\\pm\\frac{\\pi}{2}$ werden von $\\arctan$ nie erreicht (offenes Intervall) — sie sind die **waagerechten Asymptoten**.\n' +
    '\n' +
    '**Wichtige Werte im Überblick**\n' +
    '| $x$ | $\\arcsin x$ | $\\arccos x$ | $\\arctan x$ |\n' +
    '|---|---|---|---|\n' +
    '| $-1$ | $-\\frac{\\pi}{2}$ | $\\pi$ | — |\n' +
    '| $0$ | $0$ | $\\frac{\\pi}{2}$ | $0$ |\n' +
    '| $\\frac{1}{2}$ | $\\frac{\\pi}{6}$ | $\\frac{\\pi}{3}$ | — |\n' +
    '| $1$ | $\\frac{\\pi}{2}$ | $0$ | $\\frac{\\pi}{4}$ |\n' +
    'Merkregel: $\\arccos$ läuft **fallend** von $\\pi$ (bei $-1$) auf $0$ (bei $1$), $\\arcsin$ läuft **steigend** von $-\\frac{\\pi}{2}$ auf $\\frac{\\pi}{2}$. Es gilt stets $\\arcsin x + \\arccos x = \\frac{\\pi}{2}$.\n' +
    '\n' +
    '**Umkehrfunktion vs. Urbild (wichtiger Unterschied)**\n' +
    'Die Arkusfunktion liefert **einen** Hauptwert. Fragt man dagegen nach **allen** Winkeln mit gegebenem Funktionswert (dem vollständigen **Urbild** $\\sin^{-1}(\\{c\\})$), muss man die Periodizität ergänzen. Beispiel: $\\arcsin 1 = \\frac{\\pi}{2}$ (ein Wert), aber $\\sin^{-1}(\\{1\\}) = \\left\\{\\frac{\\pi}{2} + 2k\\pi : k \\in \\mathbb{Z}\\right\\}$ (unendlich viele). Bei $\\arctan$/$\\tan$ ist die Periode $\\pi$, nicht $2\\pi$.\n' +
    '\n' +
    '**Anwendung: Winkel aus Koordinaten (Argument einer komplexen Zahl)**\n' +
    'Zu einem Punkt $(x,y) \\neq (0,0)$ bzw. einer komplexen Zahl $z = x + \\mathrm{i}\\,y$ sucht man den Winkel $\\varphi$ mit $\\tan\\varphi = \\frac{y}{x}$. Naiv $\\varphi = \\arctan\\frac{y}{x}$ zu setzen ist **fehleranfällig**: Da $\\arctan$ nur Werte in $\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)$ liefert, landet man immer in der rechten Halbebene und **verliert die Quadranteninformation** ($\\frac{y}{x}$ ist für $(x,y)$ und $(-x,-y)$ gleich). Man muss den **Quadranten von (x,y)** prüfen und korrigieren:\n' +
    '$\\varphi = \\arctan\\frac{y}{x}$ für $x > 0$ (1./4. Quadrant, korrektes Ergebnis)\n' +
    '$\\varphi = \\arctan\\frac{y}{x} + \\pi$ für $x < 0,\\ y \\geq 0$ (2. Quadrant)\n' +
    '$\\varphi = \\arctan\\frac{y}{x} - \\pi$ für $x < 0,\\ y < 0$ (3. Quadrant)\n' +
    '$\\varphi = +\\frac{\\pi}{2}$ für $x = 0,\\ y > 0$ und $\\varphi = -\\frac{\\pi}{2}$ für $x = 0,\\ y < 0$.\n' +
    'So erhält man das **Hauptargument** $\\varphi \\in (-\\pi, \\pi]$.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• $\\arcsin$/$\\arccos$ auf ein Argument außerhalb von $[-1,1]$ anwenden (z. B. $\\arcsin 2$ existiert nicht).\n' +
    '• Beim Argument einer komplexen Zahl blind $\\arctan\\frac{y}{x}$ nehmen und den Quadranten (Vorzeichen von $x$) vergessen.\n' +
    '• Hauptwert und volles Urbild verwechseln — die Arkusfunktion gibt **nur** den Hauptwert, nicht „$+\\,k\\pi$".\n' +
    '• Grad statt Bogenmaß: die Rückgabe ist immer im **Bogenmaß** (Radiant).',
  beispiele: [
    {
      szenario: 'Definitions- & Wertebereiche (Blatt 0, Aufg. 1f)',
      beispiele: [
        '**Aufgabe:** Gib Definitionsbereich und Wertemenge von $\\arcsin$ an.\n**Lösung:** $\\arcsin$ kehrt $\\sin$ auf dem Monotonie-Intervall $\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$ um. Als Argumente kommen genau die Sinuswerte, also $[-1,1]$, in Frage; die zurückgegebenen Winkel füllen das Intervall $\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$.\n**Ergebnis:** $\\arcsin: [-1,1] \\to \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$.',
        '**Aufgabe:** Gib Definitionsbereich und Wertemenge von $\\arccos$ an.\n**Lösung:** $\\arccos$ kehrt $\\cos$ auf $[0,\\pi]$ um (dort ist $\\cos$ streng monoton fallend, also injektiv). Argumente wieder aus dem Wertebereich $[-1,1]$ von $\\cos$.\n**Ergebnis:** $\\arccos: [-1,1] \\to [0, \\pi]$.',
        '**Aufgabe:** Gib Definitionsbereich und Wertemenge von $\\arctan$ an.\n**Lösung:** $\\tan$ nimmt auf $\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)$ jeden reellen Wert genau einmal an. Also ist $\\arctan$ auf ganz $\\mathbb{R}$ definiert, und die Winkel liegen im offenen Intervall $\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)$ (Grenzen nie erreicht).\n**Ergebnis:** $\\arctan: \\mathbb{R} \\to \\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)$.',
      ],
    },
    {
      szenario: 'Werte bestimmen (Blatt 0, Aufg. 2j–l)',
      beispiele: [
        '**Aufgabe:** Bestimme $\\arctan(1)$.\n**Lösung:** Gesucht ist der Winkel $\\varphi \\in \\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)$ mit $\\tan\\varphi = 1$, also $\\sin\\varphi = \\cos\\varphi$. Das trifft für $\\varphi = \\frac{\\pi}{4}$ zu (liegt im Wertebereich).\n**Ergebnis:** $\\arctan(1) = \\frac{\\pi}{4}$.',
        '**Aufgabe:** Bestimme $\\arcsin(1)$.\n**Lösung:** Gesucht ist $\\varphi \\in \\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]$ mit $\\sin\\varphi = 1$. Der Sinus erreicht seinen Maximalwert $1$ genau am rechten Rand des Intervalls.\n**Ergebnis:** $\\arcsin(1) = \\frac{\\pi}{2}$.',
        '**Aufgabe:** Bestimme $\\arccos(1)$.\n**Lösung:** Gesucht ist $\\varphi \\in [0,\\pi]$ mit $\\cos\\varphi = 1$. Der Cosinus ist $1$ am linken Rand $\\varphi = 0$.\n**Ergebnis:** $\\arccos(1) = 0$.',
      ],
    },
    {
      szenario: 'Hauptwert vs. volles Urbild (Blatt 0, Aufg. 3)',
      beispiele: [
        '**Aufgabe:** Bestimme das Urbild $\\sin^{-1}(\\{1\\})$ (alle Winkel mit Sinus $1$) und vergleiche mit $\\arcsin 1$.\n**Lösung:** $\\arcsin 1 = \\frac{\\pi}{2}$ ist der eine Hauptwert. Wegen Periode $2\\pi$ hat $\\sin$ den Wert $1$ aber bei allen $\\frac{\\pi}{2} + 2k\\pi$.\n**Ergebnis:** $\\sin^{-1}(\\{1\\}) = \\left\\{\\frac{\\pi}{2} + 2k\\pi : k \\in \\mathbb{Z}\\right\\}$; der Hauptwert davon ist $\\frac{\\pi}{2}$.',
        '**Aufgabe:** Bestimme das Urbild $\\cos^{-1}(\\{0\\})$ und vergleiche mit $\\arccos 0$.\n**Lösung:** $\\arccos 0 = \\frac{\\pi}{2}$ (denn $\\cos\\frac{\\pi}{2}=0$, und $\\frac{\\pi}{2} \\in [0,\\pi]$). Alle Nullstellen des Cosinus liegen bei $\\frac{\\pi}{2} + k\\pi$.\n**Ergebnis:** $\\cos^{-1}(\\{0\\}) = \\left\\{\\frac{\\pi}{2} + k\\pi : k \\in \\mathbb{Z}\\right\\}$; Hauptwert $\\frac{\\pi}{2}$.',
        '**Aufgabe:** Bestimme das Urbild $\\tan^{-1}(\\{1\\})$ und vergleiche mit $\\arctan 1$.\n**Lösung:** $\\arctan 1 = \\frac{\\pi}{4}$. Der Tangens hat Periode $\\pi$ (nicht $2\\pi$!), also wiederholt sich der Wert $1$ im Abstand $\\pi$.\n**Ergebnis:** $\\tan^{-1}(\\{1\\}) = \\left\\{\\frac{\\pi}{4} + k\\pi : k \\in \\mathbb{Z}\\right\\}$; Hauptwert $\\frac{\\pi}{4}$.',
      ],
    },
    {
      szenario: 'Winkel aus Koordinaten / Argument von z',
      beispiele: [
        '**Aufgabe:** Bestimme das Argument $\\varphi$ von $z = 1 + \\mathrm{i}$, also den Winkel des Punktes $(1,1)$.\n**Lösung:** $x=1>0$ (1. Quadrant), daher direkt $\\varphi = \\arctan\\frac{y}{x} = \\arctan\\frac{1}{1} = \\arctan 1 = \\frac{\\pi}{4}$. Keine Quadrantenkorrektur nötig.\n**Ergebnis:** $\\varphi = \\frac{\\pi}{4}$ ($=45^\\circ$).',
        '**Aufgabe:** Bestimme das Argument von $z = -1 + \\mathrm{i}$, also den Winkel des Punktes $(-1,1)$.\n**Lösung:** $\\frac{y}{x} = \\frac{1}{-1} = -1$, aber $x<0,\\ y>0$ → 2. Quadrant. $\\arctan(-1) = -\\frac{\\pi}{4}$ liegt im 4. Quadranten, daher $\\pi$ addieren: $\\varphi = -\\frac{\\pi}{4} + \\pi = \\frac{3\\pi}{4}$.\n**Ergebnis:** $\\varphi = \\frac{3\\pi}{4}$ ($=135^\\circ$). (Blindes $\\arctan$ hätte fälschlich $-\\frac{\\pi}{4}$ geliefert.)',
        '**Aufgabe:** Bestimme das Argument von $z = -\\mathrm{i}$, also den Winkel des Punktes $(0,-1)$.\n**Lösung:** Hier ist $x=0$, also $\\frac{y}{x}$ undefiniert — $\\arctan$ ist nicht anwendbar. Der Punkt liegt auf der negativen $y$-Achse, der Winkel zeigt gerade nach unten.\n**Ergebnis:** $\\varphi = -\\frac{\\pi}{2}$ ($=-90^\\circ$, bzw. gleichwertig $\\frac{3\\pi}{2}$).',
      ],
    },
  ],
}
