import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'sin-cos',
  titel: 'Sinus & Cosinus – Werte',
  inhalt:
    '**Worum geht es?**\n' +
    'Sinus und Cosinus ordnen jedem Winkel eine Zahl zwischen $-1$ und $1$ zu. Sie beschreiben Kreisbewegung und alles Periodische (Schwingungen, Wellen) und sind die Bausteine der **Polardarstellung** komplexer Zahlen: $z = r(\\cos\\varphi + i\\sin\\varphi)$. Wer die paar Standardwerte und die Vorzeichen in den Quadranten sicher kennt, rechnet die meisten Aufgaben ohne Taschenrechner.\n' +
    '\n' +
    '**Definition am Einheitskreis**\n' +
    'Der **Einheitskreis** ist der Kreis mit Radius $1$ um den Ursprung. Trägt man einen Winkel $\\varphi$ von der positiven $x$-Achse **gegen den Uhrzeigersinn** ab, so trifft der Winkelstrahl den Kreis in genau einem Punkt $P$. Dann ist $\\cos\\varphi$ die **x-Koordinate** von $P$ (waagerecht) und $\\sin\\varphi$ die **y-Koordinate** von $P$ (senkrecht):\n' +
    '$P = (\\cos\\varphi,\\ \\sin\\varphi)$.\n' +
    'Weil $P$ auf dem Kreis mit Radius $1$ liegt, gilt stets $-1 \\le \\cos\\varphi \\le 1$ und $-1 \\le \\sin\\varphi \\le 1$.\n' +
    '\n' +
    '**Bogenmaß**\n' +
    'Winkel misst man am Einheitskreis im **Bogenmaß**: als Länge des zugehörigen Kreisbogens. Ein voller Umlauf hat den Umfang $2\\pi$, also entspricht $360^\\circ = 2\\pi$. Wichtige Marken: $180^\\circ = \\pi$, $90^\\circ = \\frac{\\pi}{2}$, $60^\\circ = \\frac{\\pi}{3}$, $45^\\circ = \\frac{\\pi}{4}$, $30^\\circ = \\frac{\\pi}{6}$. Umrechnung allgemein: $\\varphi_{\\text{rad}} = \\varphi_{\\text{grad}} \\cdot \\dfrac{\\pi}{180}$.\n' +
    '\n' +
    '**Standardwerte im 1. Quadranten**\n' +
    'Diese fünf Zeilen auswendig — der Rest folgt über die Quadranten-Vorzeichen. Der $\\sin$ wächst von $0$ auf $1$, der $\\cos$ fällt von $1$ auf $0$.\n' +
    '| $\\varphi$ | $0$ | $\\frac{\\pi}{6}$ | $\\frac{\\pi}{4}$ | $\\frac{\\pi}{3}$ | $\\frac{\\pi}{2}$ |\n' +
    '|---|---|---|---|---|---|\n' +
    '| $\\sin\\varphi$ | $0$ | $\\frac{1}{2}$ | $\\frac{\\sqrt2}{2}$ | $\\frac{\\sqrt3}{2}$ | $1$ |\n' +
    '| $\\cos\\varphi$ | $1$ | $\\frac{\\sqrt3}{2}$ | $\\frac{\\sqrt2}{2}$ | $\\frac{1}{2}$ | $0$ |\n' +
    'Merkhilfe: Schreibe in der $\\sin$-Zeile $\\frac{\\sqrt0}{2},\\frac{\\sqrt1}{2},\\frac{\\sqrt2}{2},\\frac{\\sqrt3}{2},\\frac{\\sqrt4}{2}$ — die Wurzeln $0,1,2,3,4$ der Reihe nach. Der $\\cos$ ist dieselbe Zeile rückwärts.\n' +
    '\n' +
    '**Vorzeichen in den vier Quadranten**\n' +
    'Das Vorzeichen von $\\cos\\varphi$ ist das der $x$-Koordinate, das von $\\sin\\varphi$ das der $y$-Koordinate. So findet man jeden Wert aus dem 1. Quadranten über den **Bezugswinkel** (den spitzen Winkel zur $x$-Achse).\n' +
    '| Quadrant | Winkelbereich | $\\cos\\varphi$ | $\\sin\\varphi$ |\n' +
    '|---|---|---|---|\n' +
    '| I | $0$ bis $\\frac{\\pi}{2}$ | $+$ | $+$ |\n' +
    '| II | $\\frac{\\pi}{2}$ bis $\\pi$ | $-$ | $+$ |\n' +
    '| III | $\\pi$ bis $\\frac{3\\pi}{2}$ | $-$ | $-$ |\n' +
    '| IV | $\\frac{3\\pi}{2}$ bis $2\\pi$ | $+$ | $-$ |\n' +
    '\n' +
    '**Periodizität & Symmetrie**\n' +
    'Nach einem vollen Umlauf wiederholt sich alles: $\\sin(\\varphi + 2\\pi) = \\sin\\varphi$ und $\\cos(\\varphi + 2\\pi) = \\cos\\varphi$ (Periode $2\\pi$). Man darf also beliebig oft $2\\pi$ addieren oder abziehen. Weiter ist $\\cos$ **gerade**: $\\cos(-\\varphi) = \\cos\\varphi$, und $\\sin$ **ungerade**: $\\sin(-\\varphi) = -\\sin\\varphi$. An den Achsen: $\\sin 0 = 0$, $\\cos 0 = 1$, $\\sin\\frac{\\pi}{2} = 1$, $\\cos\\frac{\\pi}{2} = 0$, $\\sin\\pi = 0$, $\\cos\\pi = -1$.\n' +
    '\n' +
    '**Grundidentität (trigonometrischer Pythagoras)**\n' +
    'Weil der Punkt $(\\cos\\varphi, \\sin\\varphi)$ auf dem Einheitskreis $x^2 + y^2 = 1$ liegt, gilt für **jeden** Winkel:\n' +
    '$\\sin^2\\varphi + \\cos^2\\varphi = 1$.\n' +
    'Kennt man einen der beiden Werte und den Quadranten, folgt der andere: $\\cos\\varphi = \\pm\\sqrt{1 - \\sin^2\\varphi}$ (Vorzeichen nach Quadrant). Achtung: $\\sin^2\\varphi$ meint $(\\sin\\varphi)^2$, nicht $\\sin(\\varphi^2)$.\n' +
    '\n' +
    '**Bezug zur Polardarstellung komplexer Zahlen**\n' +
    'Eine komplexe Zahl $z = x + iy$ ist der Punkt $(x, y)$ der Ebene. Mit Betrag $r = \\lvert z\\rvert = \\sqrt{x^2 + y^2}$ und Argument (Winkel) $\\varphi$ schreibt man sie in **Polarform**:\n' +
    '$z = r(\\cos\\varphi + i\\sin\\varphi)$, also $x = r\\cos\\varphi$ und $y = r\\sin\\varphi$.\n' +
    'Für $r = 1$ ist das genau der Einheitskreis-Punkt von oben. Dieselbe Zahl heißt mit der Euler-Formel kurz $z = r\\,e^{i\\varphi}$ — Sinus und Cosinus sind also die Brücke zwischen kartesischer und Polardarstellung.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• $\\sin$ und $\\cos$ verwechseln — $\\cos$ ist die waagerechte ($x$-), $\\sin$ die senkrechte ($y$-) Koordinate.\n' +
    '• Grad und Bogenmaß mischen ($\\frac{\\pi}{2}$ ist $90^\\circ$, nicht etwa $\\frac{\\pi}{2}$ Grad).\n' +
    '• Vorzeichen im Quadranten vergessen (z. B. $\\cos\\frac{2\\pi}{3} = -\\frac12$, nicht $+\\frac12$).\n' +
    '• $\\sin^2\\varphi$ als $\\sin(\\varphi^2)$ lesen.',
  beispiele: [
    {
      szenario: 'Standardwerte & Achsen ablesen',
      beispiele: [
        '**Aufgabe:** Bestimme $\\sin\\frac{\\pi}{4}$ und $\\cos\\frac{\\pi}{4}$.\n**Lösung:** $\\frac{\\pi}{4} = 45^\\circ$ liegt im 1. Quadranten; aus der Tabelle sind Höhe und Breite gleich groß.\n**Ergebnis:** $\\sin\\frac{\\pi}{4} = \\cos\\frac{\\pi}{4} = \\frac{\\sqrt2}{2}$.',
        '**Aufgabe:** Bestimme $\\tan\\frac{\\pi}{4}$.\n**Lösung:** $\\tan\\varphi = \\frac{\\sin\\varphi}{\\cos\\varphi} = \\frac{\\sqrt2/2}{\\sqrt2/2}$; Zähler und Nenner sind gleich.\n**Ergebnis:** $1$.',
        '**Aufgabe:** Bestimme $\\sin\\frac{\\pi}{2}$, $\\cos\\frac{\\pi}{2}$ und $\\cos\\pi$.\n**Lösung:** $\\frac{\\pi}{2} = 90^\\circ$ ist der Punkt $(0,1)$ oben auf dem Kreis, also $\\cos\\frac{\\pi}{2}=0$, $\\sin\\frac{\\pi}{2}=1$. $\\pi = 180^\\circ$ ist der Punkt $(-1,0)$ links.\n**Ergebnis:** $\\sin\\frac{\\pi}{2}=1$, $\\cos\\frac{\\pi}{2}=0$, $\\cos\\pi=-1$.',
      ],
    },
    {
      szenario: 'Vorzeichen über die Quadranten',
      beispiele: [
        '**Aufgabe:** Bestimme $\\cos\\frac{2\\pi}{3}$.\n**Lösung:** $\\frac{2\\pi}{3} = 120^\\circ$ liegt im 2. Quadranten, dort ist $\\cos$ negativ. Bezugswinkel zur $x$-Achse: $\\pi - \\frac{2\\pi}{3} = \\frac{\\pi}{3}$, und $\\cos\\frac{\\pi}{3} = \\frac12$.\n**Ergebnis:** $-\\frac12$.',
        '**Aufgabe:** Bestimme $\\sin\\frac{7\\pi}{6}$.\n**Lösung:** $\\frac{7\\pi}{6} = 210^\\circ$ liegt im 3. Quadranten, dort ist $\\sin$ negativ. Bezugswinkel: $\\frac{7\\pi}{6} - \\pi = \\frac{\\pi}{6}$, und $\\sin\\frac{\\pi}{6} = \\frac12$.\n**Ergebnis:** $-\\frac12$.',
        '**Aufgabe:** Bestimme $\\cos\\frac{5\\pi}{4}$.\n**Lösung:** $\\frac{5\\pi}{4} = 225^\\circ$ liegt im 3. Quadranten, dort ist $\\cos$ negativ. Bezugswinkel: $\\frac{5\\pi}{4} - \\pi = \\frac{\\pi}{4}$, und $\\cos\\frac{\\pi}{4} = \\frac{\\sqrt2}{2}$.\n**Ergebnis:** $-\\frac{\\sqrt2}{2}$.',
      ],
    },
    {
      szenario: 'Periodizität nutzen',
      beispiele: [
        '**Aufgabe:** Bestimme $\\cos(-64\\pi)$ und $\\sin(-64\\pi)$.\n**Lösung:** $-64\\pi$ ist ein Vielfaches von $2\\pi$ ($-64\\pi = -32\\cdot 2\\pi$), landet also wieder beim Startpunkt $(1,0)$. Somit derselbe Wert wie bei $\\varphi = 0$.\n**Ergebnis:** $\\cos(-64\\pi)=1$, $\\sin(-64\\pi)=0$.',
        '**Aufgabe:** Bestimme $\\cos(5\\pi)$ und $\\sin(5\\pi)$.\n**Lösung:** $2\\pi$ abziehen, bis der Winkel in $[0,2\\pi)$ liegt: $5\\pi - 2\\cdot 2\\pi = \\pi$. Also gleich wie bei $\\varphi = \\pi$, dem Punkt $(-1,0)$.\n**Ergebnis:** $\\cos(5\\pi)=-1$, $\\sin(5\\pi)=0$.',
        '**Aufgabe:** Bestimme $\\sin\\frac{9\\pi}{4}$.\n**Lösung:** $\\frac{9\\pi}{4} - 2\\pi = \\frac{9\\pi}{4} - \\frac{8\\pi}{4} = \\frac{\\pi}{4}$. Also gleich $\\sin\\frac{\\pi}{4}$.\n**Ergebnis:** $\\frac{\\sqrt2}{2}$.',
      ],
    },
    {
      szenario: 'Grundidentität anwenden',
      beispiele: [
        '**Aufgabe:** Gegeben $\\sin\\varphi = \\frac35$ mit $\\varphi$ im 1. Quadranten. Bestimme $\\cos\\varphi$.\n**Lösung:** $\\cos^2\\varphi = 1 - \\sin^2\\varphi = 1 - \\frac{9}{25} = \\frac{16}{25}$. Im 1. Quadranten ist $\\cos$ positiv, also die positive Wurzel.\n**Ergebnis:** $\\cos\\varphi = \\frac45$.',
        '**Aufgabe:** Gegeben $\\cos\\varphi = -\\frac{5}{13}$ mit $\\varphi$ im 2. Quadranten. Bestimme $\\sin\\varphi$.\n**Lösung:** $\\sin^2\\varphi = 1 - \\cos^2\\varphi = 1 - \\frac{25}{169} = \\frac{144}{169}$. Im 2. Quadranten ist $\\sin$ positiv.\n**Ergebnis:** $\\sin\\varphi = \\frac{12}{13}$.',
        '**Aufgabe:** Vereinfache $\\sin^2\\varphi + \\cos^2\\varphi + \\cos^2\\varphi$ (drei Summanden).\n**Lösung:** Die ersten beiden ergeben nach der Grundidentität $1$, es bleibt $1 + \\cos^2\\varphi$.\n**Ergebnis:** $1 + \\cos^2\\varphi$.',
      ],
    },
  ],
}
