import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'euler-formel',
  titel: 'Eulersche Formel & Potenzen von i',
  inhalt:
    '**Worum geht es?**\n' +
    'Die Eulersche Formel verbindet die Exponentialfunktion mit Sinus und Cosinus und macht so aus jeder komplexen Zahl auf dem Einheitskreis eine Potenz von $e$. Das ist der Schlüssel zur **Exponentialform** $z = r\\,e^{\\mathrm{i}\\varphi}$: In dieser Schreibweise werden Multiplikation und vor allem das Potenzieren komplexer Zahlen kinderleicht, weil man nur noch Beträge multipliziert und Winkel addiert. Ein Spezialfall davon ist der Zyklus der $\\mathrm{i}$-Potenzen, mit dem man $\\mathrm{i}^n$ für jedes $n$ sofort angeben kann.\n' +
    '\n' +
    '**Die Eulersche Formel**\n' +
    'Für jeden Winkel $\\varphi \\in \\mathbb{R}$ (im Bogenmaß) gilt\n' +
    '$e^{\\mathrm{i}\\varphi} = \\cos\\varphi + \\mathrm{i}\\sin\\varphi$.\n' +
    'Das erklärt, warum $e^{\\mathrm{i}\\varphi}$ genau der Punkt auf dem **Einheitskreis** zum Winkel $\\varphi$ ist: Realteil $\\cos\\varphi$, Imaginärteil $\\sin\\varphi$, Betrag $\\lvert e^{\\mathrm{i}\\varphi}\\rvert = 1$. Herleitung über die Reihen: setzt man $\\mathrm{i}\\varphi$ in die Exponentialreihe ein und nutzt $\\mathrm{i}^2=-1$, so spalten sich die Summanden genau in die Cosinus-Reihe (gerade Potenzen) und $\\mathrm{i}$ mal die Sinus-Reihe (ungerade Potenzen) auf.\n' +
    '\n' +
    '**Exponentialform einer komplexen Zahl**\n' +
    'Jede komplexe Zahl $z \\neq 0$ mit Betrag $r = \\lvert z\\rvert > 0$ und Argument (Winkel) $\\varphi$ lässt sich schreiben als\n' +
    '$z = r\\,e^{\\mathrm{i}\\varphi} = r(\\cos\\varphi + \\mathrm{i}\\sin\\varphi)$.\n' +
    'Das ist dieselbe Information wie die **Polardarstellung** $(r,\\varphi)$, nur kompakter. Umgekehrt liest man aus $r\\,e^{\\mathrm{i}\\varphi}$ per Eulerscher Formel sofort die **kartesische Form** $x + y\\,\\mathrm{i}$ ab: $x = r\\cos\\varphi$, $y = r\\sin\\varphi$.\n' +
    '\n' +
    '**Der berühmte Spezialfall**\n' +
    'Setzt man $\\varphi = \\pi$, so ist $e^{\\mathrm{i}\\pi} = \\cos\\pi + \\mathrm{i}\\sin\\pi = -1 + 0 = -1$, also die **Eulersche Identität** $e^{\\mathrm{i}\\pi} = -1$ (bzw. $e^{\\mathrm{i}\\pi} + 1 = 0$). Ebenso $e^{\\mathrm{i}\\cdot 0}=1$, $e^{\\mathrm{i}\\pi/2}=\\mathrm{i}$ und $e^{\\mathrm{i}\\cdot 2\\pi}=1$.\n' +
    '\n' +
    '**Potenzen: Satz von de Moivre**\n' +
    'Weil beim Multiplizieren die Beträge multipliziert und die Winkel addiert werden ($r\\,e^{\\mathrm{i}\\varphi}\\cdot s\\,e^{\\mathrm{i}\\psi} = rs\\,e^{\\mathrm{i}(\\varphi+\\psi)}$), folgt für die $n$-te Potenz ($n \\in \\mathbb{N}$):\n' +
    '$z^n = \\left(r\\,e^{\\mathrm{i}\\varphi}\\right)^n = r^n\\,e^{\\mathrm{i}n\\varphi} = r^n\\left(\\cos(n\\varphi) + \\mathrm{i}\\sin(n\\varphi)\\right)$.\n' +
    'In Worten: **Betrag hoch n, Winkel mal n**. Genau deshalb ist das Potenzieren in der Exponentialform so viel einfacher als das mehrfache Ausmultiplizieren in der Form $x+y\\,\\mathrm{i}$. Insbesondere ist auch der Betrag einer Potenz $\\lvert z^n\\rvert = \\lvert z\\rvert^n = r^n$.\n' +
    '\n' +
    '**Der Zyklus der $\\mathrm{i}$-Potenzen**\n' +
    'Wegen $\\mathrm{i}^2 = -1$ wiederholen sich die Potenzen von $\\mathrm{i}$ mit **Periode 4**:\n' +
    '$\\mathrm{i}^1 = \\mathrm{i},\\quad \\mathrm{i}^2 = -1,\\quad \\mathrm{i}^3 = -\\mathrm{i},\\quad \\mathrm{i}^4 = 1$,\n' +
    'und dann geht es von vorne los ($\\mathrm{i}^5 = \\mathrm{i}$ usw.). Man setzt $\\mathrm{i}^0 := 1$. Für beliebiges $n \\in \\mathbb{N}$ hängt $\\mathrm{i}^n$ also nur vom **Rest von n bei Division durch 4** ab:\n' +
    '| $n \\bmod 4$ | $0$ | $1$ | $2$ | $3$ |\n' +
    '|---|---|---|---|---|\n' +
    '| $\\mathrm{i}^n$ | $1$ | $\\mathrm{i}$ | $-1$ | $-\\mathrm{i}$ |\n' +
    'Das passt zur Exponentialform: $\\mathrm{i} = e^{\\mathrm{i}\\pi/2}$, also $\\mathrm{i}^n = e^{\\mathrm{i}n\\pi/2}$, und dieser Winkel dreht mit jedem Schritt um $90^\\circ$ weiter — nach 4 Schritten ($360^\\circ$) ist man wieder am Anfang.\n' +
    '\n' +
    '**Schritt für Schritt: $z^n$ berechnen**\n' +
    '1. $z$ in Exponentialform bringen: $r = \\lvert z\\rvert = \\sqrt{x^2+y^2}$ und Winkel $\\varphi$ bestimmen.\n' +
    '2. Potenzieren: $r^n$ ausrechnen, Winkel zu $n\\varphi$ machen.\n' +
    '3. Winkel $n\\varphi$ auf einen Standardwinkel reduzieren (Vielfache von $2\\pi$ abziehen), Werte aus der $\\sin$-/$\\cos$-Tabelle.\n' +
    '4. Falls kartesisch gefragt: $z^n = r^n\\cos(n\\varphi) + r^n\\sin(n\\varphi)\\,\\mathrm{i}$.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Beim Potenzieren den Winkel multiplizieren, aber den Betrag vergessen (oder umgekehrt): richtig ist Betrag **hoch** $n$, Winkel **mal** $n$.\n' +
    '• Bei $\\mathrm{i}^n$ die $0$ übersehen: es zählt der Rest $n \\bmod 4$, nicht $n$ direkt.\n' +
    '• Winkel in Grad statt Bogenmaß in $e^{\\mathrm{i}\\varphi}$ einsetzen.\n' +
    '• Große Winkel wie $\\frac{15\\pi}{4}$ nicht reduzieren — erst Vielfache von $2\\pi$ abziehen, dann ablesen.',
  beispiele: [
    {
      szenario: 'Potenzen von i',
      beispiele: [
        '**Aufgabe:** Bestimme $\\mathrm{i}^2$, $\\mathrm{i}^3$, $\\mathrm{i}^4$ und $\\mathrm{i}^5$.\n**Lösung:** $\\mathrm{i}^2 = -1$ (Definition von $\\mathrm{i}$). $\\mathrm{i}^3 = \\mathrm{i}^2\\cdot\\mathrm{i} = -\\mathrm{i}$. $\\mathrm{i}^4 = \\mathrm{i}^2\\cdot\\mathrm{i}^2 = (-1)(-1) = 1$. $\\mathrm{i}^5 = \\mathrm{i}^4\\cdot\\mathrm{i} = 1\\cdot\\mathrm{i} = \\mathrm{i}$.\n**Ergebnis:** $-1,\\ -\\mathrm{i},\\ 1,\\ \\mathrm{i}$ — danach beginnt der Zyklus erneut.',
        '**Aufgabe:** Berechne $\\mathrm{i}^{2026}$.\n**Lösung:** Nur der Rest modulo $4$ zählt: $2026 = 4\\cdot 506 + 2$, also $2026 \\bmod 4 = 2$. Aus der Tabelle: $n \\bmod 4 = 2$ liefert $-1$.\n**Ergebnis:** $\\mathrm{i}^{2026} = -1$.',
        '**Aufgabe:** Berechne $\\mathrm{i}^{15}$.\n**Lösung:** $15 = 4\\cdot 3 + 3$, also $15 \\bmod 4 = 3$. Aus der Tabelle: $n \\bmod 4 = 3$ liefert $-\\mathrm{i}$. (Kontrolle über die Exponentialform: $\\mathrm{i}^{15} = e^{\\mathrm{i}\\cdot 15\\pi/2} = e^{\\mathrm{i}\\cdot 3\\pi/2} = -\\mathrm{i}$.)\n**Ergebnis:** $\\mathrm{i}^{15} = -\\mathrm{i}$.',
      ],
    },
    {
      szenario: 'Exponentialform in kartesische Form',
      beispiele: [
        '**Aufgabe:** Bestimme die kartesische Form von $z = e^{\\mathrm{i}\\pi/2}$.\n**Lösung:** Eulersche Formel: $e^{\\mathrm{i}\\pi/2} = \\cos\\frac{\\pi}{2} + \\mathrm{i}\\sin\\frac{\\pi}{2} = 0 + 1\\cdot\\mathrm{i}$.\n**Ergebnis:** $z = \\mathrm{i}$.',
        '**Aufgabe:** Bestimme die kartesische Form von $z = e^{\\mathrm{i}\\cdot 15\\pi/4}$.\n**Lösung:** Winkel reduzieren: $\\frac{15\\pi}{4} - 2\\pi = \\frac{15\\pi}{4} - \\frac{8\\pi}{4} = \\frac{7\\pi}{4}$. Also $z = \\cos\\frac{7\\pi}{4} + \\mathrm{i}\\sin\\frac{7\\pi}{4} = \\frac{\\sqrt{2}}{2} + \\mathrm{i}\\left(-\\frac{\\sqrt{2}}{2}\\right)$.\n**Ergebnis:** $z = \\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2}\\,\\mathrm{i}$.',
        '**Aufgabe:** Bestimme die kartesische Form von $z = 3\\,e^{-\\mathrm{i}\\cdot 7\\pi/2}$.\n**Lösung:** Winkel reduzieren: $-\\frac{7\\pi}{2} + 4\\pi = -\\frac{7\\pi}{2} + \\frac{8\\pi}{2} = \\frac{\\pi}{2}$. Also $z = 3\\left(\\cos\\frac{\\pi}{2} + \\mathrm{i}\\sin\\frac{\\pi}{2}\\right) = 3(0 + \\mathrm{i}) = 3\\,\\mathrm{i}$.\n**Ergebnis:** $z = 3\\,\\mathrm{i}$.',
      ],
    },
    {
      szenario: 'Potenzieren über die Exponentialform',
      beispiele: [
        '**Aufgabe:** Bestimme den Betrag von $\\left(\\frac{\\sqrt{3}}{2} - \\frac{1}{2}\\,\\mathrm{i}\\right)^{15}$.\n**Lösung:** Zuerst der Betrag der Basis: $r = \\sqrt{\\left(\\frac{\\sqrt{3}}{2}\\right)^2 + \\left(-\\frac{1}{2}\\right)^2} = \\sqrt{\\frac{3}{4}+\\frac{1}{4}} = 1$. Für die Potenz gilt $\\lvert z^{15}\\rvert = r^{15} = 1^{15}$.\n**Ergebnis:** $\\left\\lvert\\left(\\frac{\\sqrt{3}}{2} - \\frac{1}{2}\\,\\mathrm{i}\\right)^{15}\\right\\rvert = 1$.',
        '**Aufgabe:** Berechne $(1 - \\mathrm{i})^{4}$ über die Exponentialform.\n**Lösung:** $r = \\lvert 1-\\mathrm{i}\\rvert = \\sqrt{1^2+(-1)^2} = \\sqrt{2}$; Winkel $\\varphi = \\frac{7\\pi}{4}$ (4. Quadrant), also $1-\\mathrm{i} = \\sqrt{2}\\,e^{\\mathrm{i}\\cdot 7\\pi/4}$. Dann $z^4 = (\\sqrt{2})^4\\,e^{\\mathrm{i}\\cdot 4\\cdot 7\\pi/4} = 4\\,e^{\\mathrm{i}\\cdot 7\\pi} = 4\\,e^{\\mathrm{i}\\pi} = 4\\cdot(-1)$.\n**Ergebnis:** $(1-\\mathrm{i})^4 = -4$.',
        '**Aufgabe:** Berechne $z^3$ für $z = 2\\,e^{\\mathrm{i}\\pi/3}$ in kartesischer Form.\n**Lösung:** Betrag hoch $3$: $2^3 = 8$. Winkel mal $3$: $3\\cdot\\frac{\\pi}{3} = \\pi$. Also $z^3 = 8\\,e^{\\mathrm{i}\\pi} = 8(\\cos\\pi + \\mathrm{i}\\sin\\pi) = 8(-1 + 0)$.\n**Ergebnis:** $z^3 = -8$.',
      ],
    },
  ],
}
