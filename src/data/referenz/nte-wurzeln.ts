import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'nte-wurzeln',
  titel: 'n-te Wurzeln & Drehung',
  inhalt:
    '**Worum geht es?**\n' +
    'In $\\mathbb{R}$ hat $x^2 = 4$ zwei Lösungen und $x^2 = -4$ gar keine. In $\\mathbb{C}$ ist das viel systematischer: Die Gleichung $z^n = w$ hat für jedes $w \\neq 0$ **immer genau** $n$ Lösungen, die sogenannten **n-ten Wurzeln** von $w$. Am einfachsten findet man sie in der **Polardarstellung** $w = r\\,e^{\\mathrm{i}\\varphi}$, denn dort ist Potenzieren nur „Betrag hoch $n$, Winkel mal $n$". Geometrisch liegen die $n$ Wurzeln als **regelmäßiges n-Eck** auf einem Kreis. Eng verwandt: Multiplizieren mit $e^{\\mathrm{i}\\varphi}$ ist eine **Drehung** der Zahlenebene.\n' +
    '\n' +
    '**Vorbaustein: Multiplikation = Beträge mal, Winkel plus**\n' +
    'Sind $z = r\\,e^{\\mathrm{i}\\varphi}$ und $w = s\\,e^{\\mathrm{i}\\psi}$ in Polardarstellung ($r, s \\ge 0$), so ist\n' +
    '$z\\,w = r\\,s\\;e^{\\mathrm{i}(\\varphi + \\psi)}$.\n' +
    'Bei der Multiplikation werden also die **Beträge multipliziert** und die **Winkel (Argumente) addiert**. Speziell beim Potenzieren ($w = z$, $n$-mal): $z^n = r^n\\,e^{\\mathrm{i}\\,n\\varphi}$ (Formel von de Moivre). Genau diese Regel dreht man beim Wurzelziehen um.\n' +
    '\n' +
    '**Drehung: Multiplizieren mit $e^{\\mathrm{i}\\varphi}$**\n' +
    'Weil $\\lvert e^{\\mathrm{i}\\varphi}\\rvert = 1$ ist, ändert die Multiplikation mit $e^{\\mathrm{i}\\varphi}$ den Betrag **nicht**, sondern nur den Winkel um $+\\varphi$. Anschaulich: $e^{\\mathrm{i}\\varphi}\\cdot z$ ist $z$ um den Ursprung **gegen den Uhrzeigersinn** um den Winkel $\\varphi$ gedreht; $e^{-\\mathrm{i}\\varphi}\\cdot z$ dreht **im Uhrzeigersinn**. Merkwerte: $e^{\\mathrm{i}\\pi/2} = \\mathrm{i}$ (Vierteldrehung nach links), $e^{\\mathrm{i}\\pi} = -1$ (Halbdrehung).\n' +
    '\n' +
    '**Satz (Lösungen von $z^n = w$)**\n' +
    'Seien $n \\in \\mathbb{N}$, $n \\ge 1$, $r > 0$, $\\varphi \\in \\mathbb{R}$ und $w = r\\,e^{\\mathrm{i}\\varphi}$. Dann besitzt die Gleichung $z^n = w$ **genau n verschiedene** komplexe Lösungen, nämlich\n' +
    '$z_k = \\sqrt[n]{r}\\;e^{\\mathrm{i}\\left(\\frac{\\varphi}{n} + \\frac{2k\\pi}{n}\\right)}, \\quad k = 0, 1, \\dots, n-1$.\n' +
    'Dabei ist $\\sqrt[n]{r}$ die **reelle** $n$-te Wurzel des Betrags $r > 0$.\n' +
    '\n' +
    '**Warum genau $n$ Lösungen?**\n' +
    'Damit $z^n = w$ gilt, muss der Betrag passen ($\\lvert z\\rvert^n = r$, also $\\lvert z\\rvert = \\sqrt[n]{r}$ — eindeutig) und der Winkel bis auf Vielfache von $2\\pi$: $n\\cdot(\\text{Winkel von }z) = \\varphi + 2k\\pi$ für ein $k \\in \\mathbb{Z}$. Auflösen nach dem Winkel gibt $\\frac{\\varphi}{n} + \\frac{2k\\pi}{n}$. Für $k = 0, 1, \\dots, n-1$ liefert das $n$ verschiedene Winkel; ab $k = n$ wiederholen sich die Zahlen (man ist einmal um den Kreis herum). Deshalb genau $n$ Stück — nicht mehr, nicht weniger.\n' +
    '\n' +
    '**Geometrie: regelmäßiges $n$-Eck**\n' +
    'Alle Lösungen haben denselben Betrag $\\sqrt[n]{r}$, liegen also auf einem **Kreis** mit Radius $\\sqrt[n]{r}$ um den Ursprung. Von einer Lösung zur nächsten wächst der Winkel um $\\frac{2\\pi}{n}$; die $n$ Punkte sind damit **gleichmäßig** über den Kreis verteilt und bilden die Ecken eines **regelmäßigen n-Ecks**. Die „erste" Ecke $z_0$ liegt beim Winkel $\\frac{\\varphi}{n}$.\n' +
    '\n' +
    '**$n$-te Einheitswurzeln (Spezialfall $w = 1$)**\n' +
    'Für $w = 1 = 1\\cdot e^{\\mathrm{i}\\cdot 0}$ (also $r = 1$, $\\varphi = 0$) heißen die Lösungen **n-te Einheitswurzeln**:\n' +
    '$z_k = e^{\\mathrm{i}\\frac{2k\\pi}{n}}, \\quad k = 0, 1, \\dots, n-1$.\n' +
    'Sie liegen auf dem **Einheitskreis** (Radius $1$); $z_0 = 1$ ist immer dabei. Für $n = 6$ ergibt sich das folgende regelmäßige Sechseck:\n' +
    '\n' +
    '| $k$ | Winkel | $z_k$ (Polar) | $z_k$ (kartesisch) |\n' +
    '|---|---|---|---|\n' +
    '| $0$ | $0$ | $1$ | $1$ |\n' +
    '| $1$ | $\\frac{\\pi}{3}$ | $e^{\\mathrm{i}\\pi/3}$ | $\\frac{1}{2} + \\frac{\\sqrt{3}}{2}\\,\\mathrm{i}$ |\n' +
    '| $2$ | $\\frac{2\\pi}{3}$ | $e^{\\mathrm{i}2\\pi/3}$ | $-\\frac{1}{2} + \\frac{\\sqrt{3}}{2}\\,\\mathrm{i}$ |\n' +
    '| $3$ | $\\pi$ | $e^{\\mathrm{i}\\pi}$ | $-1$ |\n' +
    '| $4$ | $\\frac{4\\pi}{3}$ | $e^{\\mathrm{i}4\\pi/3}$ | $-\\frac{1}{2} - \\frac{\\sqrt{3}}{2}\\,\\mathrm{i}$ |\n' +
    '| $5$ | $\\frac{5\\pi}{3}$ | $e^{\\mathrm{i}5\\pi/3}$ | $\\frac{1}{2} - \\frac{\\sqrt{3}}{2}\\,\\mathrm{i}$ |\n' +
    '\n' +
    '**Wie rechnet man $z^n = w$ Schritt für Schritt?**\n' +
    '1. $w$ in **Polardarstellung** $w = r\\,e^{\\mathrm{i}\\varphi}$ bringen (Betrag $r = \\lvert w\\rvert$, Winkel $\\varphi$ ablesen/bestimmen).\n' +
    '2. Den **Radius** der Wurzeln berechnen: $\\sqrt[n]{r}$ (reelle $n$-te Wurzel).\n' +
    '3. Den **Startwinkel** $\\frac{\\varphi}{n}$ nehmen und für $z_0, z_1, \\dots, z_{n-1}$ jeweils $\\frac{2\\pi}{n}$ addieren.\n' +
    '4. So die $n$ Lösungen $z_k = \\sqrt[n]{r}\\,e^{\\mathrm{i}(\\varphi/n + 2k\\pi/n)}$ hinschreiben; bei Bedarf mit $e^{\\mathrm{i}\\alpha} = \\cos\\alpha + \\mathrm{i}\\sin\\alpha$ in die kartesische Form $x + y\\,\\mathrm{i}$ umrechnen.\n' +
    '5. **Skizze:** Kreis mit Radius $\\sqrt[n]{r}$, erste Ecke bei $\\frac{\\varphi}{n}$, dann im Abstand $\\frac{2\\pi}{n}$ als regelmäßiges $n$-Eck eintragen.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Den Radius vergessen: bei $z^n = w$ ist $\\lvert z_k\\rvert = \\sqrt[n]{r}$, **nicht** $r$ (nur bei $r = 1$ gleich).\n' +
    '• Nur eine Lösung angeben — es sind **immer n** (regelmäßiges n-Eck).\n' +
    '• Den Startwinkel $\\varphi$ nicht durch $n$ teilen: der erste Winkel ist $\\frac{\\varphi}{n}$, nicht $\\varphi$.\n' +
    '• Als Schrittweite $2\\pi$ statt $\\frac{2\\pi}{n}$ nehmen (dann landet man immer auf derselben Zahl).\n' +
    '• Über $k = n-1$ hinaus zählen — $k = n$ liefert wieder $z_0$.\n' +
    '• Drehrichtung verwechseln: $e^{+\\mathrm{i}\\varphi}$ dreht **gegen** den Uhrzeigersinn, $e^{-\\mathrm{i}\\varphi}$ **mit** dem Uhrzeigersinn.',
  beispiele: [
    {
      szenario: 'Multiplikation & Drehung in Polarform',
      beispiele: [
        '**Aufgabe:** Berechne $3\\,e^{\\mathrm{i}\\pi/3} \\cdot 2\\,e^{\\mathrm{i}5\\pi/6}$.\n**Lösung:** Beträge multiplizieren ($3\\cdot 2 = 6$), Winkel addieren: $\\frac{\\pi}{3} + \\frac{5\\pi}{6} = \\frac{2\\pi}{6} + \\frac{5\\pi}{6} = \\frac{7\\pi}{6}$.\n**Ergebnis:** $6\\,e^{\\mathrm{i}7\\pi/6}$.',
        '**Aufgabe:** Berechne $e^{\\mathrm{i}\\pi} \\cdot e^{3\\pi\\mathrm{i}}$ und $2\\,e^{\\mathrm{i}\\pi/9} \\cdot 4\\,e^{-\\mathrm{i}\\pi/9}$.\n**Lösung:** Erstes Produkt: Beträge $1\\cdot 1 = 1$, Winkel $\\pi + 3\\pi = 4\\pi$, und $e^{\\mathrm{i}4\\pi} = e^{\\mathrm{i}\\cdot 0} = 1$. Zweites: Beträge $2\\cdot 4 = 8$, Winkel $\\frac{\\pi}{9} - \\frac{\\pi}{9} = 0$, also $8\\,e^{\\mathrm{i}\\cdot 0}$.\n**Ergebnis:** $1$ bzw. $8$.',
        '**Aufgabe:** Drehe $z = -1 + 2\\,\\mathrm{i}$ um $\\frac{\\pi}{2}$ gegen den Uhrzeigersinn und um $\\frac{\\pi}{2}$ im Uhrzeigersinn; gib das Ergebnis als $x + y\\,\\mathrm{i}$ an.\n**Lösung:** Gegen den Uhrzeigersinn: mal $e^{\\mathrm{i}\\pi/2} = \\mathrm{i}$: $\\mathrm{i}\\cdot(-1 + 2\\,\\mathrm{i}) = -\\mathrm{i} + 2\\,\\mathrm{i}^2 = -2 - \\mathrm{i}$. Im Uhrzeigersinn: mal $e^{-\\mathrm{i}\\pi/2} = -\\mathrm{i}$: $-\\mathrm{i}\\cdot(-1 + 2\\,\\mathrm{i}) = \\mathrm{i} - 2\\,\\mathrm{i}^2 = 2 + \\mathrm{i}$.\n**Ergebnis:** $-2 - \\mathrm{i}$ (gegen den Uhrzeigersinn) bzw. $2 + \\mathrm{i}$ (im Uhrzeigersinn).',
      ],
    },
    {
      szenario: 'Gleichung zⁿ = w lösen',
      beispiele: [
        '**Aufgabe:** Bestimme alle $z \\in \\mathbb{C}$ mit $z^4 = 16$ und skizziere sie.\n**Lösung:** Polardarstellung $16 = 16\\,e^{\\mathrm{i}\\cdot 0}$, also $n = 4$, $r = 16$, $\\varphi = 0$. Radius der Wurzeln $\\sqrt[4]{16} = 2$, Startwinkel $\\frac{0}{4} = 0$, Schrittweite $\\frac{2\\pi}{4} = \\frac{\\pi}{2}$: $z_0 = 2\\,e^{\\mathrm{i}\\cdot 0} = 2$, $z_1 = 2\\,e^{\\mathrm{i}\\pi/2} = 2\\,\\mathrm{i}$, $z_2 = 2\\,e^{\\mathrm{i}\\pi} = -2$, $z_3 = 2\\,e^{\\mathrm{i}3\\pi/2} = -2\\,\\mathrm{i}$. Skizze: Quadrat mit Ecken auf dem Kreis um $0$ mit Radius $2$ (auf den Achsen).\n**Ergebnis:** $z \\in \\{2,\\ 2\\,\\mathrm{i},\\ -2,\\ -2\\,\\mathrm{i}\\}$.',
        '**Aufgabe:** Bestimme alle $z \\in \\mathbb{C}$ mit $z^3 = -\\mathrm{i}$.\n**Lösung:** Es ist $-\\mathrm{i} = 1\\cdot e^{\\mathrm{i}3\\pi/2}$, also $n = 3$, $r = 1$, $\\varphi = \\frac{3\\pi}{2}$. Radius $\\sqrt[3]{1} = 1$, Startwinkel $\\frac{\\varphi}{3} = \\frac{\\pi}{2}$, Schrittweite $\\frac{2\\pi}{3}$: $z_0 = e^{\\mathrm{i}\\pi/2}$, $z_1 = e^{\\mathrm{i}(\\pi/2 + 2\\pi/3)} = e^{\\mathrm{i}7\\pi/6}$, $z_2 = e^{\\mathrm{i}(\\pi/2 + 4\\pi/3)} = e^{\\mathrm{i}11\\pi/6}$.\n**Ergebnis:** $z \\in \\{ e^{\\mathrm{i}\\pi/2},\\ e^{\\mathrm{i}7\\pi/6},\\ e^{\\mathrm{i}11\\pi/6} \\}$ (Radius $1$, gleichseitiges Dreieck).',
        '**Aufgabe:** Bestimme alle Quadratwurzeln von $-9$, d. h. alle $z$ mit $z^2 = -9$.\n**Lösung:** $-9 = 9\\,e^{\\mathrm{i}\\pi}$, also $n = 2$, $r = 9$, $\\varphi = \\pi$. Radius $\\sqrt{9} = 3$, Startwinkel $\\frac{\\pi}{2}$, Schrittweite $\\frac{2\\pi}{2} = \\pi$: $z_0 = 3\\,e^{\\mathrm{i}\\pi/2} = 3\\,\\mathrm{i}$, $z_1 = 3\\,e^{\\mathrm{i}3\\pi/2} = -3\\,\\mathrm{i}$.\n**Ergebnis:** $z = 3\\,\\mathrm{i}$ und $z = -3\\,\\mathrm{i}$ (also $z = \\pm 3\\,\\mathrm{i}$).',
      ],
    },
    {
      szenario: 'Einheitswurzeln & Skizze',
      beispiele: [
        '**Aufgabe:** Bestimme die dritten Einheitswurzeln (Lösungen von $z^3 = 1$) in kartesischer Form.\n**Lösung:** $n = 3$, $r = 1$, $\\varphi = 0$: $z_k = e^{\\mathrm{i}2k\\pi/3}$. Also $z_0 = e^{\\mathrm{i}\\cdot 0} = 1$; $z_1 = e^{\\mathrm{i}2\\pi/3} = \\cos\\frac{2\\pi}{3} + \\mathrm{i}\\sin\\frac{2\\pi}{3} = -\\frac{1}{2} + \\frac{\\sqrt{3}}{2}\\,\\mathrm{i}$; $z_2 = e^{\\mathrm{i}4\\pi/3} = -\\frac{1}{2} - \\frac{\\sqrt{3}}{2}\\,\\mathrm{i}$.\n**Ergebnis:** $z \\in \\left\\{ 1,\\ -\\frac{1}{2} + \\frac{\\sqrt{3}}{2}\\,\\mathrm{i},\\ -\\frac{1}{2} - \\frac{\\sqrt{3}}{2}\\,\\mathrm{i} \\right\\}$.',
        '**Aufgabe:** Bestimme die vierten Einheitswurzeln (Lösungen von $z^4 = 1$).\n**Lösung:** $z_k = e^{\\mathrm{i}2k\\pi/4} = e^{\\mathrm{i}k\\pi/2}$, Schrittweite $\\frac{\\pi}{2}$: $z_0 = 1$, $z_1 = e^{\\mathrm{i}\\pi/2} = \\mathrm{i}$, $z_2 = e^{\\mathrm{i}\\pi} = -1$, $z_3 = e^{\\mathrm{i}3\\pi/2} = -\\mathrm{i}$.\n**Ergebnis:** $z \\in \\{1,\\ \\mathrm{i},\\ -1,\\ -\\mathrm{i}\\}$ (Quadrat auf dem Einheitskreis).',
        '**Aufgabe:** Wie sieht die Skizze der sechsten Einheitswurzeln ($z^6 = 1$) aus, und welchen Winkelabstand haben benachbarte Wurzeln?\n**Lösung:** Es gibt $6$ Wurzeln auf dem Einheitskreis (Radius $1$), beginnend bei $z_0 = 1$ (Winkel $0$). Der Winkelabstand ist $\\frac{2\\pi}{6} = \\frac{\\pi}{3} = 60^\\circ$; sie bilden ein regelmäßiges Sechseck mit Ecken bei den Winkeln $0, \\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\pi, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}$.\n**Ergebnis:** Regelmäßiges Sechseck auf dem Einheitskreis, Winkelabstand $\\frac{\\pi}{3}$ ($60^\\circ$).',
      ],
    },
  ],
}
