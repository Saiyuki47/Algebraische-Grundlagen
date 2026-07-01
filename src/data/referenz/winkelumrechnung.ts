import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'winkelumrechnung',
  titel: 'Winkelumrechnung (Grad ↔ Bogenmaß)',
  inhalt:
    '**Worum geht es?**\n' +
    'Ein und derselbe Winkel lässt sich in zwei Einheiten angeben: im **Gradmaß** (voller Kreis $= 360^\\circ$) oder im **Bogenmaß** (voller Kreis $= 2\\pi$). Das Gradmaß ist anschaulich (rechter Winkel $= 90^\\circ$), aber willkürlich gewählt. Das Bogenmaß ist die „natürliche" Einheit der Analysis: Nur in ihm gelten $(\\sin x)^{\\prime} = \\cos x$ und $\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$, und $\\sin$, $\\cos$, $\\tan$, $\\arcsin$, $\\dots$ werden immer im Bogenmaß gerechnet. Wer sicher zwischen beiden umrechnet, vermeidet die häufigste Fehlerquelle in der Trigonometrie.\n' +
    '\n' +
    '**Grad vs. Bogenmaß**\n' +
    'Das **Gradmaß** teilt den Vollkreis in $360$ gleiche Teile (Einheit $^\\circ$). Das **Bogenmaß** misst einen Winkel durch die **Länge des zugehörigen Bogens auf dem Einheitskreis** (Radius $1$); die Einheit heißt Radiant ($\\mathrm{rad}$) und wird meist weggelassen, eine reine Zahl. Da der ganze Einheitskreis den Umfang $2\\pi r = 2\\pi$ hat, entspricht ein voller Umlauf dem Bogenmaß $2\\pi$.\n' +
    '\n' +
    '**Die Grundgleichung**\n' +
    'Voller Umlauf: $360^\\circ = 2\\pi$, gleichbedeutend mit $180^\\circ = \\pi$. Daraus liest man den Umrechnungsfaktor ab:\n' +
    '$1^\\circ = \\dfrac{\\pi}{180} \\quad\\text{und}\\quad 1 = \\dfrac{180^\\circ}{\\pi}.$\n' +
    'Alles Weitere folgt durch Multiplikation mit dem passenden Faktor.\n' +
    '\n' +
    '**Die beiden Umrechnungsformeln**\n' +
    'Von Grad nach Bogenmaß (mit $\\frac{\\pi}{180}$ multiplizieren):\n' +
    '$x_{\\mathrm{rad}} = \\dfrac{\\pi}{180^\\circ}\\cdot x_{\\mathrm{grad}}.$\n' +
    'Von Bogenmaß nach Grad (mit $\\frac{180}{\\pi}$ multiplizieren):\n' +
    '$x_{\\mathrm{grad}} = \\dfrac{180^\\circ}{\\pi}\\cdot x_{\\mathrm{rad}}.$\n' +
    'Merkhilfe: Der gesuchte Einheitsname ($\\pi$ bzw. $180^\\circ$) steht im **Zähler** des Faktors.\n' +
    '\n' +
    '**Wie rechnet man Schritt für Schritt?**\n' +
    '1. Richtung klären: Steht ein $^\\circ$ da (Grad) oder ein $\\pi$ / eine reine Zahl (Bogenmaß)?\n' +
    '2. Passenden Faktor wählen: Grad→Bogen mit $\\frac{\\pi}{180}$, Bogen→Grad mit $\\frac{180}{\\pi}$.\n' +
    '3. Einsetzen und den Bruch **kürzen**, solange es geht (oft kürzt sich mit $180$).\n' +
    '4. Ergebnis prüfen: Bogenmaß enthält meist ein $\\pi$; Grad ist eine Zahl mit $^\\circ$.\n' +
    '\n' +
    '**Wichtige Werte (auswendig)**\n' +
    'Diese Tabelle deckt fast alle Klausuraufgaben ab; alle anderen Werte ergeben sich durch Vielfache und die Formeln.\n' +
    '| Grad | Bogenmaß | Grad | Bogenmaß |\n' +
    '|---|---|---|---|\n' +
    '| $0^\\circ$ | $0$ | $180^\\circ$ | $\\pi$ |\n' +
    '| $30^\\circ$ | $\\frac{\\pi}{6}$ | $270^\\circ$ | $\\frac{3\\pi}{2}$ |\n' +
    '| $45^\\circ$ | $\\frac{\\pi}{4}$ | $360^\\circ$ | $2\\pi$ |\n' +
    '| $60^\\circ$ | $\\frac{\\pi}{3}$ | $90^\\circ$ | $\\frac{\\pi}{2}$ |\n' +
    '| $120^\\circ$ | $\\frac{2\\pi}{3}$ | $135^\\circ$ | $\\frac{3\\pi}{4}$ |\n' +
    '\n' +
    '**Warum rechnet man im Bogenmaß?**\n' +
    'Erstens die **Analysis**: Nur im Bogenmaß gilt der Grenzwert $\\lim_{x\\to 0}\\frac{\\sin x}{x} = 1$, und damit die einfachen Ableitungen $(\\sin x)^{\\prime} = \\cos x$ und $(\\cos x)^{\\prime} = -\\sin x$ sowie die Reihen $\\sin x = \\sum_{k=0}^{\\infty}\\frac{(-1)^k x^{2k+1}}{(2k+1)!}$. In Grad kämen überall lästige Faktoren $\\frac{\\pi}{180}$ hinzu. Zweitens die **Polardarstellung** komplexer Zahlen: $z = r(\\cos\\varphi + i\\sin\\varphi) = r\\,e^{i\\varphi}$ und die Eulerformel $e^{i\\pi} = -1$ funktionieren nur mit $\\varphi$ im Bogenmaß. Drittens die **Bogenlänge**: Auf einem Kreis mit Radius $r$ gehört zum Winkel $\\varphi$ (im Bogenmaß) die Bogenlänge $b = r\\varphi$ — im Gradmaß gäbe es diese schlichte Formel nicht.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Faktor verwechseln — Grad→Bogen braucht $\\frac{\\pi}{180}$, Bogen→Grad braucht $\\frac{180}{\\pi}$.\n' +
    '• Am Ende nicht kürzen (z. B. $\\frac{60\\pi}{180}$ stehen lassen statt $\\frac{\\pi}{3}$).\n' +
    '• Bogenmaß für Grad halten: $2$ (Bogenmaß) ist rund $114^\\circ$, nicht $2^\\circ$.\n' +
    '• Den Taschenrechner im falschen Modus (DEG statt RAD) rechnen lassen.\n' +
    '• Vielfache von $2\\pi$ nicht abziehen: $\\sin$ und $\\cos$ ändern sich bei $+2\\pi$ nicht.',
  beispiele: [
    {
      szenario: 'Grad → Bogenmaß',
      beispiele: [
        '**Aufgabe:** Rechne $60^\\circ$ ins Bogenmaß um.\n**Lösung:** Faktor $\\frac{\\pi}{180}$: $60^\\circ \\cdot \\frac{\\pi}{180} = \\frac{60\\pi}{180}$. Mit $60$ kürzen: $\\frac{60\\pi}{180} = \\frac{\\pi}{3}$.\n**Ergebnis:** $\\frac{\\pi}{3}$.',
        '**Aufgabe:** Rechne $36^\\circ$ ins Bogenmaß um.\n**Lösung:** $36^\\circ \\cdot \\frac{\\pi}{180} = \\frac{36\\pi}{180}$. Mit $36$ kürzen ($180 = 36 \\cdot 5$): $= \\frac{\\pi}{5}$.\n**Ergebnis:** $\\frac{\\pi}{5}$.',
        '**Aufgabe:** Rechne $29^\\circ$ ins Bogenmaß um.\n**Lösung:** $29^\\circ \\cdot \\frac{\\pi}{180} = \\frac{29\\pi}{180}$. $29$ ist prim und teilt $180$ nicht, also nicht kürzbar. (Gleichwertig: $\\frac{29}{360}\\cdot 2\\pi = \\frac{29}{180}\\pi$.)\n**Ergebnis:** $\\frac{29\\pi}{180}$.',
      ],
    },
    {
      szenario: 'Bogenmaß → Grad',
      beispiele: [
        '**Aufgabe:** Rechne $\\frac{2\\pi}{3}$ ins Gradmaß um.\n**Lösung:** Faktor $\\frac{180^\\circ}{\\pi}$: $\\frac{2\\pi}{3}\\cdot\\frac{180^\\circ}{\\pi} = \\frac{2\\cdot 180^\\circ}{3}$; das $\\pi$ kürzt sich. $= \\frac{360^\\circ}{3} = 120^\\circ$.\n**Ergebnis:** $120^\\circ$.',
        '**Aufgabe:** Rechne $5\\pi$ ins Gradmaß um.\n**Lösung:** $5\\pi\\cdot\\frac{180^\\circ}{\\pi} = 5\\cdot 180^\\circ$; das $\\pi$ kürzt sich. $= 900^\\circ$. (Ein Winkel über $360^\\circ$ ist erlaubt — er entspricht $900^\\circ - 2\\cdot 360^\\circ = 180^\\circ$.)\n**Ergebnis:** $900^\\circ$.',
        '**Aufgabe:** Rechne $\\frac{2\\pi}{17}$ ins Gradmaß um.\n**Lösung:** $\\frac{2\\pi}{17}\\cdot\\frac{180^\\circ}{\\pi} = \\frac{2\\cdot 180^\\circ}{17} = \\frac{360^\\circ}{17}$. Da $17$ die $360$ nicht teilt, bleibt der Bruch stehen.\n**Ergebnis:** $\\left(\\frac{360}{17}\\right)^\\circ \\approx 21{,}2^\\circ$.',
      ],
    },
    {
      szenario: 'Standardwinkel & Anwendung',
      beispiele: [
        '**Aufgabe:** Rechne $\\frac{\\pi}{18}$ ins Gradmaß um.\n**Lösung:** $\\frac{\\pi}{18}\\cdot\\frac{180^\\circ}{\\pi} = \\frac{180^\\circ}{18} = 10^\\circ$.\n**Ergebnis:** $10^\\circ$.',
        '**Aufgabe:** Bestimme $\\sin(90^\\circ)$, indem du zuerst ins Bogenmaß umrechnest.\n**Lösung:** $90^\\circ\\cdot\\frac{\\pi}{180} = \\frac{\\pi}{2}$. Aus den Standardwerten ist $\\sin\\frac{\\pi}{2} = 1$.\n**Ergebnis:** $\\sin(90^\\circ) = 1$.',
        '**Aufgabe:** Welche Bogenlänge $b$ überspannt ein Winkel von $30^\\circ$ auf einem Kreis mit Radius $r = 6$?\n**Lösung:** Erst ins Bogenmaß: $30^\\circ\\cdot\\frac{\\pi}{180} = \\frac{\\pi}{6}$. Dann $b = r\\varphi = 6\\cdot\\frac{\\pi}{6} = \\pi$.\n**Ergebnis:** $b = \\pi \\approx 3{,}14$.',
      ],
    },
  ],
}
