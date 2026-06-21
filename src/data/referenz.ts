import type { ReferenzKarte } from '../types'

// Jede Karte erklärt ihr Thema komplett von vorne – ohne Vorwissen.
// Grundbegriffe (Einheitskreis, Bogenmaß, imaginäre Einheit, Relation, Gruppe …)
// werden bewusst in jeder Karte erneut erklärt, in der sie gebraucht werden.
export const referenzKarten: ReferenzKarte[] = [
  // ===== Trigonometrie =====
  {
    titel: 'Sinus & Cosinus – Werte',
    inhalt:
      '**Worum geht es?**\n' +
      'Sinus und Kosinus sind zwei Mess-Werkzeuge für Winkel: Du steckst einen Winkel hinein und bekommst eine Zahl zwischen $-1$ und $1$ heraus. Man braucht sie überall dort, wo sich etwas dreht oder schwingt.\n' +
      '\n' +
      '**Der Einheitskreis – die Grundidee**\n' +
      'Stell dir einen Kreis mit Radius $1$ vor, dessen Mittelpunkt im Nullpunkt liegt (den Einheitskreis). Einen Winkel $\\varphi$ trägt man von der positiven $x$-Achse aus gegen den Uhrzeigersinn ab. Dort, wo der Winkelstrahl den Kreis trifft, liegt ein Punkt mit den Koordinaten $(\\cos\\varphi,\\ \\sin\\varphi)$.\n' +
      '• Der Kosinus $\\cos\\varphi$ ist die $x$-Koordinate dieses Punktes (Rechts-Links-Lage).\n' +
      '• Der Sinus $\\sin\\varphi$ ist die $y$-Koordinate dieses Punktes (Hoch-Runter-Lage).\n' +
      'Weil der Radius $1$ ist, liegen beide Werte immer zwischen $-1$ und $1$.\n' +
      '\n' +
      '**Was bedeutet das Bogenmaß?**\n' +
      'Winkel kann man in Grad (von $0°$ bis $360°$) oder im Bogenmaß angeben. Im Bogenmaß misst man den Winkel als Länge des Kreisbogens auf dem Einheitskreis. Ein voller Umlauf entspricht dem Umfang $2\\pi$. Deshalb ist $360° = 2\\pi$, $180° = \\pi$, $90° = \\frac{\\pi}{2}$, $60° = \\frac{\\pi}{3}$, $45° = \\frac{\\pi}{4}$ und $30° = \\frac{\\pi}{6}$. Die Kreiszahl ist $\\pi \\approx 3{,}14159$.\n' +
      '\n' +
      '**Die wichtigsten Standardwerte**\n' +
      '| $\\varphi$ | $\\sin\\varphi$ | $\\cos\\varphi$ | $\\tan\\varphi$ |\n' +
      '|---|---|---|---|\n' +
      '| $0$ | $0$ | $1$ | $0$ |\n' +
      '| $\\frac{\\pi}{6}$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{\\sqrt{3}}$ |\n' +
      '| $\\frac{\\pi}{4}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $1$ |\n' +
      '| $\\frac{\\pi}{3}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ | $\\sqrt{3}$ |\n' +
      '| $\\frac{\\pi}{2}$ | $1$ | $0$ | – |\n' +
      '\n' +
      '**Was ist der Tangens?**\n' +
      'Der Tangens ist das Verhältnis $\\tan\\varphi = \\frac{\\sin\\varphi}{\\cos\\varphi}$. Bei $\\varphi = \\frac{\\pi}{2}$ ist $\\cos\\varphi = 0$, und durch $0$ darf man nicht teilen. Deshalb ist $\\tan\\!\\left(\\frac{\\pi}{2}\\right)$ nicht definiert.\n' +
      '\n' +
      '**Eselsbrücke zum Merken**\n' +
      'Schreibe die Sinuswerte als $\\frac{\\sqrt{0}}{2}, \\frac{\\sqrt{1}}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}, \\frac{\\sqrt{4}}{2}$ für die Winkel $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$. Der Kosinus durchläuft genau dieselbe Reihe rückwärts.',
  },
  {
    titel: 'Arkusfunktionen',
    inhalt:
      '**Worum geht es?**\n' +
      'Die Arkusfunktionen $\\arcsin$, $\\arccos$ und $\\arctan$ machen Sinus, Kosinus und Tangens wieder rückgängig. Du gibst einen Wert vor und bekommst den Winkel zurück, der diesen Wert erzeugt.\n' +
      '\n' +
      '**Kurze Erinnerung: was sin und cos tun**\n' +
      'Auf dem Einheitskreis (Kreis mit Radius $1$ um den Nullpunkt) liefert ein Winkel $\\varphi$ den Punkt $(\\cos\\varphi,\\ \\sin\\varphi)$. Der Sinus ist also die Höhe ($y$-Koordinate), der Kosinus die Rechts-Links-Lage ($x$-Koordinate). Beide liegen zwischen $-1$ und $1$.\n' +
      '\n' +
      '**Was ist eine Umkehrfunktion?**\n' +
      'Eine Umkehrfunktion dreht die Zuordnung um: Wenn $\\sin\\varphi = s$ ist, dann gibt $\\arcsin(s)$ den Winkel $\\varphi$ zurück. Das funktioniert aber nur, wenn jeder Wert von genau einem Winkel kommt. Da $\\sin$ und $\\cos$ sich ständig wiederholen, schränkt man den erlaubten Winkelbereich ein – sonst gäbe es viele mögliche Antworten.\n' +
      '\n' +
      '**Die eingeschränkten Bereiche (Bildmenge)**\n' +
      '$\\arcsin : [-1,\\,1] \\to \\left[-\\tfrac{\\pi}{2},\\, \\tfrac{\\pi}{2}\\right]$ — Eingabe zwischen $-1$ und $1$, Antwort zwischen $-90°$ und $90°$.\n' +
      '$\\arccos : [-1,\\,1] \\to [0,\\, \\pi]$ — Eingabe zwischen $-1$ und $1$, Antwort zwischen $0°$ und $180°$.\n' +
      '$\\arctan : \\mathbb{R} \\to \\left(-\\tfrac{\\pi}{2},\\, \\tfrac{\\pi}{2}\\right)$ — jede reelle Zahl ist erlaubt, Antwort echt zwischen $-90°$ und $90°$.\n' +
      '\n' +
      '**Die wichtigsten Werte**\n' +
      '$\\arcsin(0) = 0$,  $\\arcsin(1) = \\frac{\\pi}{2}$,  $\\arcsin(-1) = -\\frac{\\pi}{2}$\n' +
      '$\\arccos(1) = 0$,  $\\arccos(0) = \\frac{\\pi}{2}$,  $\\arccos(-1) = \\pi$\n' +
      '$\\arctan(0) = 0$,  $\\arctan(1) = \\frac{\\pi}{4}$,  $\\arctan(-1) = -\\frac{\\pi}{4}$\n' +
      '\n' +
      '**Wichtig zu verstehen**\n' +
      'Die Arkusfunktion gibt immer nur einen einzigen Winkel aus dem eingeschränkten Bereich zurück. Suchst du dagegen alle Winkel mit z. B. $\\sin\\varphi = 1$, brauchst du das Urbild (siehe Karte „Urbilder") – dort gibt es unendlich viele Lösungen.',
  },
  {
    titel: 'Winkelumrechnung',
    inhalt:
      '**Worum geht es?**\n' +
      'Winkel kann man auf zwei Arten messen: in Grad oder im Bogenmaß. In dieser Karte rechnest du von der einen Einheit in die andere um.\n' +
      '\n' +
      '**Was ist Grad?**\n' +
      'Im Gradmaß teilt man einen vollen Kreis in $360$ gleiche Teile. Ein voller Umlauf ist also $360°$, ein rechter Winkel $90°$, eine halbe Drehung $180°$.\n' +
      '\n' +
      '**Was ist Bogenmaß?**\n' +
      'Im Bogenmaß misst man den Winkel über die Länge des Kreisbogens auf dem Einheitskreis (Kreis mit Radius $1$). Ein voller Umlauf hat die Bogenlänge $2\\pi$ (das ist der Umfang). Deshalb entspricht ein voller Kreis $2\\pi$ statt $360°$. Das Bogenmaß ist eine reine Zahl ohne Einheit; $\\pi \\approx 3{,}14159$.\n' +
      '\n' +
      '**Die zwei Umrechnungsformeln**\n' +
      'Von Grad ins Bogenmaß:  $\\varphi_{\\text{rad}} = \\varphi_{\\text{grad}} \\cdot \\dfrac{\\pi}{180}$\n' +
      'Von Bogenmaß in Grad:  $\\varphi_{\\text{grad}} = \\varphi_{\\text{rad}} \\cdot \\dfrac{180}{\\pi}$\n' +
      'Eselsbrücke: $180°$ und $\\pi$ sind dasselbe; mit diesem Verhältnis multiplizierst du immer.\n' +
      '\n' +
      '**Beispiel Schritt für Schritt**\n' +
      'Wandle $60°$ ins Bogenmaß: $60 \\cdot \\frac{\\pi}{180} = \\frac{60\\pi}{180} = \\frac{\\pi}{3}$. Umgekehrt: $\\frac{\\pi}{3} \\cdot \\frac{180}{\\pi} = \\frac{180}{3} = 60°$.\n' +
      '\n' +
      '**Die häufigsten Werte zum Nachschlagen**\n' +
      '$0° = 0$,  $30° = \\frac{\\pi}{6}$,  $45° = \\frac{\\pi}{4}$,  $60° = \\frac{\\pi}{3}$\n' +
      '$90° = \\frac{\\pi}{2}$,  $180° = \\pi$,  $270° = \\frac{3\\pi}{2}$,  $360° = 2\\pi$',
  },
  {
    titel: 'Urbilder',
    inhalt:
      '**Worum geht es?**\n' +
      'Das Urbild beantwortet die Frage: „Welche Eingaben liefern einen bestimmten Wert?" Bei den trigonometrischen Funktionen gibt es darauf meist unendlich viele Antworten.\n' +
      '\n' +
      '**Was ist ein Urbild?**\n' +
      'Das Urbild einer Menge $A$ unter einer Funktion $f$ ist die Sammlung aller $x$, für die $f(x)$ in $A$ landet. Schreibweise $f^{-1}(A)$. Achtung: Das ist nicht die Umkehrfunktion! Eine Umkehrfunktion gibt einen einzigen Wert zurück, das Urbild dagegen die ganze Menge aller passenden $x$.\n' +
      '\n' +
      '**Warum unendlich viele Lösungen?**\n' +
      'Sinus, Kosinus und Tangens sind periodisch: Sie wiederholen ihre Werte regelmäßig. $\\sin$ und $\\cos$ wiederholen sich nach $2\\pi$ (ein voller Umlauf auf dem Einheitskreis), $\\tan$ wiederholt sich schon nach $\\pi$. Findest du also eine Lösung, bekommst du durch Hinzuaddieren ganzer Umläufe sofort unendlich viele weitere. Die Zahl $k$ steht dabei für eine beliebige ganze Zahl, $k \\in \\mathbb{Z}$ (also $\\ldots, -2, -1, 0, 1, 2, \\ldots$).\n' +
      '\n' +
      '**Urbilder des Sinus**\n' +
      '$\\sin^{-1}(\\{1\\}) = \\left\\{\\tfrac{\\pi}{2} + 2k\\pi\\right\\}$,  $\\sin^{-1}(\\{0\\}) = \\{k\\pi\\}$,  $\\sin^{-1}(\\{-1\\}) = \\left\\{\\tfrac{3\\pi}{2} + 2k\\pi\\right\\}$\n' +
      '\n' +
      '**Urbilder des Kosinus**\n' +
      '$\\cos^{-1}(\\{1\\}) = \\{2k\\pi\\}$,  $\\cos^{-1}(\\{0\\}) = \\left\\{\\tfrac{\\pi}{2} + k\\pi\\right\\}$,  $\\cos^{-1}(\\{-1\\}) = \\{(2k{+}1)\\pi\\}$\n' +
      '\n' +
      '**Urbilder des Tangens**\n' +
      '$\\tan^{-1}(\\{1\\}) = \\left\\{\\tfrac{\\pi}{4} + k\\pi\\right\\}$,  $\\tan^{-1}(\\{0\\}) = \\{k\\pi\\}$,  $\\tan^{-1}(\\{-1\\}) = \\left\\{-\\tfrac{\\pi}{4} + k\\pi\\right\\}$\n' +
      'In allen Formeln ist $k \\in \\mathbb{Z}$ eine beliebige ganze Zahl.\n' +
      '\n' +
      '**Merke**\n' +
      'Bei $\\sin$ und $\\cos$ wird in der Regel $2k\\pi$ addiert (Periode $2\\pi$), bei $\\tan$ nur $k\\pi$ (Periode $\\pi$). Der Wert $0$ ist ein Sonderfall: Hier reicht beim Sinus $k\\pi$, weil der Sinus seinen Nulldurchgang doppelt so oft hat.',
  },
  {
    titel: 'Kreise & Mengen in $\\mathbb{R} \\times \\mathbb{R}$',
    inhalt:
      '**Worum geht es?**\n' +
      'Eine Gleichung oder Ungleichung mit $x$ und $y$ beschreibt eine Menge von Punkten in der Ebene. Hier lernst du, welche Figur hinter den typischen Ausdrücken steckt.\n' +
      '\n' +
      '**Was ist $\\mathbb{R} \\times \\mathbb{R}$?**\n' +
      '$\\mathbb{R}$ ist die Menge aller reellen Zahlen (die ganze Zahlengerade). $\\mathbb{R} \\times \\mathbb{R} = \\mathbb{R}^2$ ist die Menge aller Paare $(x, y)$, also die gewohnte Zeichenebene: $x$ nach rechts, $y$ nach oben. Jeder Punkt hat eine waagerechte Koordinate $x$ und eine senkrechte Koordinate $y$.\n' +
      '\n' +
      '**Der Abstand vom Nullpunkt**\n' +
      'Der Ausdruck $x^2 + y^2$ ist das Quadrat des Abstands eines Punktes $(x,y)$ vom Nullpunkt (Satz des Pythagoras). $\\sqrt{x^2+y^2}$ ist also der Abstand selbst. Deshalb beschreiben alle folgenden Bedingungen Figuren rund um den Nullpunkt.\n' +
      '\n' +
      '**Kreise und Kreisscheiben (Radius $r$)**\n' +
      '$x^2+y^2 = r^2$  →  Kreislinie (Rand), alle Punkte mit Abstand genau $r$\n' +
      '$x^2+y^2 < r^2$  →  offene Kreisscheibe (Inneres, Rand gehört nicht dazu)\n' +
      '$x^2+y^2 \\leq r^2$  →  abgeschlossene Kreisscheibe (Inneres samt Rand)\n' +
      '$x^2+y^2 > r^2$  →  Äußeres des Kreises (alles weiter weg als $r$)\n' +
      '\n' +
      '**Geraden durch den Nullpunkt**\n' +
      '$x = y$  →  Winkelhalbierende durch den 1. und 3. Quadranten (Punkte mit gleichen Koordinaten)\n' +
      '$x = -y$  →  Winkelhalbierende durch den 2. und 4. Quadranten (Koordinaten entgegengesetzt)\n' +
      '\n' +
      '**Merke**\n' +
      'Ein Gleichheitszeichen liefert eine Linie (den Rand), ein Ungleichheitszeichen eine Fläche. „$<$“ bzw. „$>$“ schließt den Rand aus, „$\\leq$“ bzw. „$\\geq$“ schließt ihn ein.',
  },
  {
    titel: 'Binomische Formeln',
    inhalt:
      '**Worum geht es?**\n' +
      'Die binomischen Formeln sind drei feste Muster, mit denen man Klammern mit zwei Summanden blitzschnell ausmultipliziert – ohne jedes Mal alles einzeln auszurechnen.\n' +
      '\n' +
      '**Die drei Formeln**\n' +
      '$(a+b)^2 = a^2 + 2ab + b^2$\n' +
      '$(a-b)^2 = a^2 - 2ab + b^2$\n' +
      '$(a+b)(a-b) = a^2 - b^2$\n' +
      'Dabei stehen $a$ und $b$ für beliebige Zahlen oder Terme.\n' +
      '\n' +
      '**Warum stimmt das?**\n' +
      'Multipliziert man $(a+b)^2 = (a+b)(a+b)$ Glied für Glied aus, erhält man $a\\cdot a + a\\cdot b + b\\cdot a + b\\cdot b = a^2 + 2ab + b^2$. Die zwei gemischten Glieder $ab$ ergeben zusammen $2ab$. Genauso entstehen die anderen beiden Formeln; bei der dritten heben sich die gemischten Glieder $+ab$ und $-ab$ weg.\n' +
      '\n' +
      '**Anwendung: Nenner rational machen**\n' +
      'Steht eine Wurzel im Nenner, stört das oft. Mit der dritten Formel wird man sie los, indem man mit dem konjugierten Ausdruck erweitert (gleiche Terme, umgedrehtes Vorzeichen):\n' +
      '$\\dfrac{1}{\\sqrt{a}+\\sqrt{b}} = \\dfrac{\\sqrt{a}-\\sqrt{b}}{a-b}$\n' +
      '$\\dfrac{1}{\\sqrt{a}-\\sqrt{b}} = \\dfrac{\\sqrt{a}+\\sqrt{b}}{a-b}$\n' +
      '\n' +
      '**Warum funktioniert der Trick?**\n' +
      'Multipliziert man $(\\sqrt{a}+\\sqrt{b})(\\sqrt{a}-\\sqrt{b})$, so ist das nach der dritten Formel $(\\sqrt{a})^2 - (\\sqrt{b})^2 = a - b$ – die Wurzeln verschwinden, weil Quadrat und Wurzel sich aufheben. Genau diesen Faktor schreibt man in Zähler und Nenner, der Bruchwert ändert sich dadurch nicht.',
  },

  // ===== Komplexe Zahlen =====
  {
    titel: 'Komplexe Zahlen – Grundoperationen',
    inhalt:
      '**Worum geht es?**\n' +
      'Manche Gleichungen wie $x^2 = -1$ haben unter den reellen Zahlen keine Lösung, weil kein reelles Quadrat negativ wird. Deshalb führt man eine neue Zahl $\\mathrm{i}$ ein, die imaginäre Einheit, mit der Eigenschaft $\\mathrm{i}^2 = -1$.\n' +
      '\n' +
      '**Wie sieht eine komplexe Zahl aus?**\n' +
      'Jede komplexe Zahl hat die Form $z = x + y\\mathrm{i}$ mit reellen Zahlen $x$ und $y$.\n' +
      '• $x = \\mathrm{Re}(z)$ heißt Realteil (der gewöhnliche Anteil).\n' +
      '• $y = \\mathrm{Im}(z)$ heißt Imaginärteil (der Faktor vor $\\mathrm{i}$).\n' +
      'Man darf sich $z$ als Punkt $(x, y)$ in einer Ebene vorstellen: nach rechts der Realteil, nach oben der Imaginärteil.\n' +
      '\n' +
      '**Addieren**\n' +
      'Real- und Imaginärteile getrennt zusammenzählen. Für $z = x + y\\mathrm{i}$ und $w = u + v\\mathrm{i}$ gilt $z + w = (x+u) + (y+v)\\mathrm{i}$.\n' +
      '\n' +
      '**Multiplizieren**\n' +
      'Klammern ganz normal ausmultiplizieren und überall $\\mathrm{i}^2 = -1$ einsetzen. Das ergibt $z \\cdot w = (xu - yv) + (xv + yu)\\mathrm{i}$.\n' +
      '\n' +
      '**Das Konjugierte**\n' +
      'Das Konjugierte $\\overline{z} = x - y\\mathrm{i}$ entsteht, indem man das Vorzeichen des Imaginärteils umdreht (Spiegelung an der waagerechten Achse). Praktisch ist es, weil $z \\cdot \\overline{z} = x^2 + y^2$ immer eine reelle Zahl ist.\n' +
      '\n' +
      '**Der Betrag**\n' +
      'Der Betrag $|z| = \\sqrt{x^2+y^2}$ ist der Abstand des Punktes $z$ vom Nullpunkt. Es gilt $|z|^2 = z \\cdot \\overline{z}$.\n' +
      '\n' +
      '**Dividieren**\n' +
      'Trick: Den Bruch mit dem Konjugierten des Nenners erweitern, damit der Nenner reell wird:  $\\dfrac{z}{w} = \\dfrac{z \\cdot \\overline{w}}{|w|^2}$.\n' +
      '\n' +
      '**Nützliche Rechenregeln**\n' +
      '$|zw| = |z|\\cdot|w|$,  $|z^n| = |z|^n$,  $\\overline{zw} = \\overline{z}\\cdot\\overline{w}$.',
  },
  {
    titel: 'Mengen in der Gaußschen Zahlenebene',
    inhalt:
      '**Worum geht es?**\n' +
      'Komplexe Zahlen kann man als Punkte einer Ebene zeichnen. Bedingungen an eine komplexe Zahl $z$ beschreiben dann Figuren wie Kreise oder Geraden. Diese Karte zeigt, welche Figur hinter welcher Bedingung steckt.\n' +
      '\n' +
      '**Die Gaußsche Zahlenebene**\n' +
      'Eine komplexe Zahl $z = x + y\\mathrm{i}$ (mit der imaginären Einheit $\\mathrm{i}$, $\\mathrm{i}^2 = -1$) wird als Punkt $(x, y)$ gezeichnet: der Realteil $x$ nach rechts, der Imaginärteil $y$ nach oben. Diese Bildebene heißt Gaußsche Zahlenebene.\n' +
      '\n' +
      '**Betrag = Abstand**\n' +
      'Der Betrag $|z| = \\sqrt{x^2+y^2}$ ist der Abstand von $z$ zum Nullpunkt. Allgemeiner ist $|z - z_0|$ der Abstand zwischen den Punkten $z$ und $z_0$. Genau das macht die folgenden Formeln so anschaulich.\n' +
      '\n' +
      '**Kreise und Kreisscheiben (Mittelpunkt $z_0$, Radius $r > 0$)**\n' +
      '$|z - z_0| = r$  →  Kreislinie um $z_0$ mit Radius $r$\n' +
      '$|z - z_0| < r$  →  offene Kreisscheibe (Rand gehört nicht dazu)\n' +
      '$|z - z_0| \\leq r$  →  abgeschlossene Kreisscheibe (Rand gehört dazu)\n' +
      '$|z - z_0| > r$  →  Äußeres des Kreises\n' +
      '$r_1 < |z-z_0| < r_2$  →  offener Kreisring zwischen zwei Radien\n' +
      '\n' +
      '**Mittelpunkt richtig ablesen**\n' +
      'Wichtig ist die Form $|z - z_0|$ mit einem Minus. Steht ein Plus da, formt man um: $|z + a - b\\mathrm{i}| = |z - (-a + b\\mathrm{i})|$, der Mittelpunkt ist also $(-a,\\ b)$.\n' +
      '\n' +
      '**Geraden als Mittelsenkrechte**\n' +
      'Die Bedingung „gleich weit von zwei Punkten entfernt" ergibt eine Gerade. Zum Beispiel ist $|z| = |z - a|$ die Mittelsenkrechte der Strecke von $0$ und $a$ – also die senkrechte Gerade genau in der Mitte zwischen beiden Punkten.',
  },
  {
    titel: 'Polardarstellung',
    inhalt:
      '**Worum geht es?**\n' +
      'Statt eine komplexe Zahl über Realteil und Imaginärteil zu beschreiben, kann man sie über Länge und Richtung angeben. Das ist die Polardarstellung – ideal zum Multiplizieren, Potenzieren und Wurzelziehen.\n' +
      '\n' +
      '**Kurze Erinnerung**\n' +
      'Eine komplexe Zahl $z = x + y\\mathrm{i}$ (mit $\\mathrm{i}^2 = -1$) ist ein Punkt $(x, y)$ in der Ebene. Statt der Koordinaten beschreibt man den Punkt jetzt durch seinen Abstand zum Nullpunkt und seinen Winkel zur positiven $x$-Achse.\n' +
      '\n' +
      '**Die Polarform**\n' +
      '$z = r\\,e^{\\mathrm{i}\\varphi} = r(\\cos\\varphi + \\mathrm{i}\\sin\\varphi)$\n' +
      '• $r = |z| = \\sqrt{x^2+y^2} \\geq 0$ ist die Länge (der Betrag, also der Abstand vom Nullpunkt).\n' +
      '• $\\varphi = \\arg(z) \\in [0, 2\\pi)$ ist der Winkel (das Argument), gemessen gegen den Uhrzeigersinn ab der positiven $x$-Achse.\n' +
      '\n' +
      '**Den Winkel bestimmen**\n' +
      'Zuerst $r$ ausrechnen, dann den Winkel über den Kosinus suchen: $\\cos\\varphi = \\dfrac{\\mathrm{Re}(z)}{r}$.\n' +
      'Weil der Kosinus allein oben und unten nicht unterscheidet, schaut man auf den Imaginärteil:\n' +
      '• Ist $\\mathrm{Im}(z) \\geq 0$ (obere Hälfte):  $\\varphi = \\arccos\\!\\left(\\dfrac{\\mathrm{Re}(z)}{r}\\right)$\n' +
      '• Ist $\\mathrm{Im}(z) < 0$ (untere Hälfte):  $\\varphi = 2\\pi - \\arccos\\!\\left(\\dfrac{\\mathrm{Re}(z)}{r}\\right)$\n' +
      '\n' +
      '**Warum das praktisch ist: Multiplizieren**\n' +
      'In Polarform wird Multiplikation kinderleicht: $r_1 e^{\\mathrm{i}\\varphi_1} \\cdot r_2 e^{\\mathrm{i}\\varphi_2} = (r_1 r_2)\\,e^{\\mathrm{i}(\\varphi_1+\\varphi_2)}$. In Worten: Längen multiplizieren, Winkel addieren. Geometrisch ist Multiplizieren also Strecken plus Drehen.',
  },
  {
    titel: 'Eulersche Formel & Potenzen von $\\mathrm{i}$',
    inhalt:
      '**Worum geht es?**\n' +
      'Die Eulersche Formel verbindet die Exponentialfunktion mit Sinus und Kosinus. Sie ist der Schlüssel zur kurzen Schreibweise $e^{\\mathrm{i}\\varphi}$ für Punkte auf dem Einheitskreis.\n' +
      '\n' +
      '**Die Eulersche Formel**\n' +
      '$e^{\\mathrm{i}\\varphi} = \\cos\\varphi + \\mathrm{i}\\sin\\varphi$\n' +
      'Dabei ist $\\mathrm{i}$ die imaginäre Einheit mit $\\mathrm{i}^2 = -1$ und $\\varphi$ ein Winkel im Bogenmaß. Anschaulich ist $e^{\\mathrm{i}\\varphi}$ genau der Punkt auf dem Einheitskreis (Kreis mit Radius $1$), den man nach Drehung um den Winkel $\\varphi$ erreicht. Sein Realteil ist $\\cos\\varphi$, sein Imaginärteil $\\sin\\varphi$.\n' +
      '\n' +
      '**Die wichtigsten Standardwerte**\n' +
      '$e^{\\mathrm{i}\\cdot 0} = 1$,  $e^{\\mathrm{i}\\frac{\\pi}{2}} = \\mathrm{i}$,  $e^{\\mathrm{i}\\pi} = -1$,  $e^{\\mathrm{i}\\frac{3\\pi}{2}} = -\\mathrm{i}$\n' +
      '$e^{\\mathrm{i}\\frac{\\pi}{4}} = \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2}\\mathrm{i}$,  $e^{\\mathrm{i}\\frac{7\\pi}{4}} = \\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2}\\mathrm{i}$\n' +
      'Diese folgen direkt aus der Formel, wenn man die bekannten $\\sin$- und $\\cos$-Werte einsetzt.\n' +
      '\n' +
      '**Potenzen von $\\mathrm{i}$ – ein Vierer-Zyklus**\n' +
      'Weil $\\mathrm{i}^2 = -1$ ist, wiederholen sich die Potenzen von $\\mathrm{i}$ alle vier Schritte:\n' +
      '$\\mathrm{i}^0=1$,  $\\mathrm{i}^1=\\mathrm{i}$,  $\\mathrm{i}^2=-1$,  $\\mathrm{i}^3=-\\mathrm{i}$,  $\\mathrm{i}^4=1$, und dann von vorne.\n' +
      '\n' +
      '**So rechnest du $\\mathrm{i}^n$ schnell aus**\n' +
      'Teile den Exponenten $n$ mit Rest durch $4$. Nur der Rest $n \\bmod 4$ zählt: Rest $0 \\to 1$, Rest $1 \\to \\mathrm{i}$, Rest $2 \\to -1$, Rest $3 \\to -\\mathrm{i}$. Beispiel: $\\mathrm{i}^{15}$ hat wegen $15 = 3\\cdot 4 + 3$ den Rest $3$, also $\\mathrm{i}^{15} = -\\mathrm{i}$.',
  },
  {
    titel: '$n$-te Wurzeln & Drehung',
    inhalt:
      '**Worum geht es?**\n' +
      'Eine Gleichung wie $z^n = w$ fragt: Welche komplexe Zahl ergibt, $n$-mal mit sich selbst multipliziert, das Ziel $w$? Es gibt immer genau $n$ Lösungen, und sie ordnen sich schön gleichmäßig auf einem Kreis an.\n' +
      '\n' +
      '**Voraussetzung: Polarform**\n' +
      'Schreibe $w$ in Polarform $w = r\\,e^{\\mathrm{i}\\varphi}$. Dabei ist $r = |w|$ die Länge (Abstand vom Nullpunkt) und $\\varphi$ der Winkel ab der positiven $x$-Achse. Die imaginäre Einheit erfüllt $\\mathrm{i}^2 = -1$, und $e^{\\mathrm{i}\\varphi}$ ist der Punkt auf dem Einheitskreis zum Winkel $\\varphi$.\n' +
      '\n' +
      '**Die Lösungsformel**\n' +
      '$z^n = w = r\\,e^{\\mathrm{i}\\varphi}$ hat genau $n$ Lösungen:\n' +
      '$z_k = r^{1/n}\\,e^{\\mathrm{i}\\frac{\\varphi + 2\\pi k}{n}}$  für  $k = 0, 1, \\ldots, n-1$.\n' +
      '• Alle Lösungen haben dieselbe Länge $r^{1/n}$ (die reelle $n$-te Wurzel des Betrags).\n' +
      '• Die Winkel starten bei $\\frac{\\varphi}{n}$ und springen jeweils um $\\frac{2\\pi}{n}$ weiter. Die $n$ Lösungen bilden also ein regelmäßiges $n$-Eck auf einem Kreis um den Nullpunkt.\n' +
      '\n' +
      '**Multiplizieren heißt drehen**\n' +
      'Multipliziert man eine komplexe Zahl mit $e^{\\mathrm{i}\\varphi}$, dreht man sie um den Winkel $\\varphi$ (die Länge bleibt gleich, weil $|e^{\\mathrm{i}\\varphi}| = 1$):\n' +
      '• mal $e^{\\mathrm{i}\\varphi}$:  Drehung um $\\varphi$ gegen den Uhrzeigersinn\n' +
      '• mal $e^{-\\mathrm{i}\\varphi}$:  Drehung um $\\varphi$ im Uhrzeigersinn\n' +
      '• mal $\\mathrm{i}$:  Drehung um $\\frac{\\pi}{2}$ ($90°$) gegen den Uhrzeigersinn\n' +
      '• mal $-\\mathrm{i}$:  Drehung um $\\frac{\\pi}{2}$ ($90°$) im Uhrzeigersinn',
  },
  {
    titel: 'Konvergenz & Divergenz von Folgen',
    inhalt:
      '**Worum geht es?**\n' +
      'Bei einer Folge fragt man: Steuern die Zahlen mit wachsendem Index auf einen festen Wert zu oder nicht? Tun sie das, heißt die Folge konvergent; tun sie es nicht, heißt sie divergent.\n' +
      '\n' +
      '**Was ist eine Folge?**\n' +
      'Eine Folge ist eine unendliche, durchnummerierte Liste von Zahlen $a_1, a_2, a_3, \\ldots$ – zu jedem Index $n \\in \\mathbb{N}$ gehört ein Wert $a_n$. Die Werte können reell oder komplex sein; die ganze Folge schreibt man $(a_n)$.\n' +
      '\n' +
      '**Was bedeutet Konvergenz?**\n' +
      'Die Folge $(a_n)$ konvergiert gegen eine feste Zahl $a$ (den Grenzwert), wenn die Glieder $a_n$ dem Wert $a$ für wachsendes $n$ beliebig nahe kommen und auch nahe bleiben. Schreibweise: $a_n \\to a$ oder $\\lim_{n\\to\\infty} a_n = a$. Bild dazu: Zeichne einen noch so kleinen Kreis (bzw. ein Intervall) um $a$ – ab einem Index liegen ALLE weiteren Glieder darin.\n' +
      '\n' +
      '**Die Definition Wort für Wort**\n' +
      '„Zu jedem $\\varepsilon > 0$ gibt es ein $N$, sodass für alle $n \\geq N$ gilt $|a_n - a| < \\varepsilon$."\n' +
      '• $\\varepsilon$ = erlaubte Toleranz (Radius um $a$), beliebig klein.\n' +
      '• $N$ = ab welchem Index es klappen muss (darf von $\\varepsilon$ abhängen).\n' +
      '• $|a_n - a| < \\varepsilon$ = der Abstand von $a_n$ zum Grenzwert ist kleiner als $\\varepsilon$.\n' +
      'Kurz: $(a_n)$ konvergiert gegen $a$ genau dann, wenn der Abstand $|a_n - a| \\to 0$ geht.\n' +
      '\n' +
      '**Darf die Folge den Grenzwert erreichen?**\n' +
      'Ja! Konvergenz verlangt nur, dass die Glieder dem Grenzwert beliebig nahe kommen – sie verbietet aber nicht, dass sie ihn auch treffen. Alle drei Fälle sind erlaubt:\n' +
      '• $a_n = \\frac{1}{n}$, also $1, \\frac{1}{2}, \\frac{1}{3}, \\ldots \\to 0$: kommt der $0$ beliebig nahe, erreicht sie aber nie.\n' +
      '• $a_n = 5$ (konstante Folge) $\\to 5$: jedes Glied IST bereits der Grenzwert.\n' +
      '• $a_n = 0, 1, 0, \\frac{1}{2}, 0, \\frac{1}{3}, \\ldots \\to 0$: trifft den Grenzwert $0$ sogar unendlich oft und konvergiert trotzdem.\n' +
      'Entscheidend ist allein, dass der Abstand $|a_n - a|$ am Ende beliebig klein wird.\n' +
      '\n' +
      '**Was bedeutet Divergenz?**\n' +
      'Divergent heißt schlicht: nicht konvergent – es gibt keinen Grenzwert. Typische Muster:\n' +
      '• Springen: $a_n = (-1)^n$, also $1, -1, 1, -1, \\ldots$ – pendelt zwischen zwei Werten und beruhigt sich nie.\n' +
      '• Wachsen über alle Grenzen: $a_n = n$, also $1, 2, 3, \\ldots$ (oder $a_n = 2^n$) – wird unendlich groß.\n' +
      '\n' +
      '**Beispiele mit komplexen Folgen**\n' +
      '• $z_n = \\mathrm{i}^n$, also $1, \\mathrm{i}, -1, -\\mathrm{i}, 1, \\ldots$: springt im Kreis → divergent.\n' +
      '• $\\left(\\frac{1}{2}+\\frac{1}{2}\\mathrm{i}\\right)^n$: der Betrag ist $\\frac{1}{\\sqrt{2}} < 1$, daher gehen die Glieder gegen $0$ → konvergent mit Grenzwert $0$.\n' +
      '\n' +
      '**Nützliches Werkzeug**\n' +
      'Für Potenzfolgen $r^n$ (reell oder komplex) entscheidet der Betrag $|r|$: bei $|r| < 1$ gilt $r^n \\to 0$; bei $|r| > 1$ divergiert die Folge; bei $|r| = 1$ bleibt der Betrag $1$, aber die Folge kann sich weiterdrehen und divergieren.',
  },

  // ===== Relationen =====
  {
    titel: 'Relationen – Eigenschaften',
    inhalt:
      '**Worum geht es?**\n' +
      'Eine Relation beschreibt, welche Elemente einer Menge in einer bestimmten Beziehung zueinander stehen – etwa „ist kleiner als" oder „ist gleich". Hier lernst du die Eigenschaften, mit denen man Relationen einordnet.\n' +
      '\n' +
      '**Was ist eine Relation?**\n' +
      'Eine Relation $R$ auf einer Menge $M$ ist eine Sammlung von Paaren $(x, y)$ aus $M$. Schreibt man $xRy$, heißt das: „$x$ steht in Beziehung zu $y$", also $(x,y) \\in R$. Beispiel: Auf den Zahlen ist „$\\leq$" die Relation aller Paare $(x,y)$ mit $x \\leq y$.\n' +
      '\n' +
      '**Die Identitätsrelation**\n' +
      'Eine Hilfsmenge taucht oft auf: $I_M = \\{(x,x) : x \\in M\\}$ – sie enthält genau die Paare, bei denen ein Element mit sich selbst in Beziehung steht.\n' +
      '\n' +
      '**Die Eigenschaften (jeweils in Worten)**\n' +
      '• Reflexiv: jedes Element steht zu sich selbst in Beziehung. $\\forall x: xRx$  ↔  $I_M \\subseteq R$\n' +
      '• Irreflexiv: kein Element steht zu sich selbst in Beziehung. $\\forall x: \\neg(xRx)$  ↔  $I_M \\cap R = \\emptyset$\n' +
      '• Symmetrisch: gilt eine Beziehung, gilt sie auch rückwärts. $xRy \\Rightarrow yRx$  ↔  $R^{-1} = R$\n' +
      '• Antisymmetrisch: gilt sie in beide Richtungen, müssen die Elemente gleich sein. $xRy \\wedge yRx \\Rightarrow x = y$\n' +
      '• Asymmetrisch: gilt sie vorwärts, dann nie rückwärts. $xRy \\Rightarrow \\neg(yRx)$\n' +
      '• Transitiv: führt eine Kette zweier Beziehungen weiter, gilt auch die Abkürzung. $xRy \\wedge yRz \\Rightarrow xRz$\n' +
      '\n' +
      '**Was die Symbole bedeuten**\n' +
      '$\\forall$ heißt „für alle", $\\exists$ „es gibt", $\\Rightarrow$ „daraus folgt", $\\wedge$ „und", $\\neg$ „nicht". $R^{-1}$ ist die Relation mit vertauschten Paaren, $\\emptyset$ die leere Menge.',
  },
  {
    titel: 'Äquivalenzrelationen & Ordnungsrelationen',
    inhalt:
      '**Worum geht es?**\n' +
      'Zwei besonders wichtige Sorten von Relationen: Äquivalenzrelationen teilen eine Menge in Gruppen „gleichwertiger" Elemente ein, Ordnungsrelationen bringen Elemente in eine Reihenfolge.\n' +
      '\n' +
      '**Kurze Erinnerung**\n' +
      'Eine Relation $R$ auf einer Menge $M$ sammelt Paare $(x,y)$; $xRy$ bedeutet „$x$ steht in Beziehung zu $y$". Drei Grundeigenschaften: reflexiv (jedes Element zu sich selbst), symmetrisch (gilt rückwärts genauso), transitiv (Beziehungsketten lassen sich abkürzen).\n' +
      '\n' +
      '**Äquivalenzrelation**\n' +
      'Das ist eine Relation, die reflexiv, symmetrisch und transitiv zugleich ist. Sie verallgemeinert das Gleichheitszeichen: Elemente, die in Beziehung stehen, gelten als gleichwertig.\n' +
      '• Äquivalenzklasse: $[x] = \\{y \\in M : xRy\\}$ – alle Elemente, die zu $x$ gleichwertig sind.\n' +
      '• Die Klassen bilden eine Partition: Sie überlappen sich nicht (paarweise disjunkt) und füllen zusammen ganz $M$.\n' +
      '• Umgekehrt baut man aus vorgegebenen Klassen die Relation $R = \\bigcup_K K \\times K$ (innerhalb jeder Klasse steht alles mit allem in Beziehung).\n' +
      '\n' +
      '**Ordnungsrelationen**\n' +
      'Eine partielle Ordnung ist reflexiv, antisymmetrisch und transitiv (antisymmetrisch heißt: gilt die Beziehung in beide Richtungen, sind die Elemente gleich). Sie ordnet Elemente, ohne dass je zwei vergleichbar sein müssen.\n' +
      'Eine totale Ordnung ist eine partielle Ordnung, bei der zusätzlich je zwei Elemente vergleichbar sind.\n' +
      '\n' +
      '**Klassische Beispiele**\n' +
      '• Teilbarkeit auf $\\mathbb{N}^*$: partielle Ordnung (nicht jede zwei Zahlen teilen einander).\n' +
      '• Lexikographische Ordnung auf $\\mathbb{R}^2$ (wie im Wörterbuch, erst die erste Koordinate): totale Ordnung.',
  },
  {
    titel: 'Relationen – Verkettung & Hüllen',
    inhalt:
      '**Worum geht es?**\n' +
      'Relationen lassen sich umkehren und hintereinanderschalten. Und wenn einer Relation eine gewünschte Eigenschaft fehlt, kann man sie mit möglichst wenigen zusätzlichen Paaren ergänzen – das nennt man Hülle.\n' +
      '\n' +
      '**Kurze Erinnerung**\n' +
      'Eine Relation $R$ auf einer Menge $M$ ist eine Sammlung von Paaren $(a,b)$. $I_M = \\{(x,x) : x \\in M\\}$ ist die Identitätsrelation (jedes Element mit sich selbst).\n' +
      '\n' +
      '**Umkehrrelation**\n' +
      'Dreht alle Paare um: $R^{-1} = \\{(b,a) : (a,b) \\in R\\}$. Aus „$a$ steht zu $b$" wird „$b$ steht zu $a$".\n' +
      '\n' +
      '**Verkettung**\n' +
      '$S \\circ R = \\{(a,c) : \\exists b,\\ (a,b) \\in R \\wedge (b,c) \\in S\\}$. Man kommt von $a$ nach $c$, wenn es ein Zwischenelement $b$ gibt, das beide Schritte verbindet. Lies von rechts nach links: erst $R$ anwenden, dann $S$. ($\\exists$ heißt „es gibt", $\\wedge$ heißt „und".)\n' +
      '\n' +
      '**Hüllen**\n' +
      'Eine Hülle ist die kleinste Relation, die $R$ enthält und zusätzlich eine bestimmte Eigenschaft besitzt – man fügt nur die unbedingt nötigen Paare hinzu.\n' +
      '• Reflexive Hülle:  $R \\cup I_M$ (fehlende Paare $(x,x)$ ergänzen).\n' +
      '• Symmetrische Hülle:  $R \\cup R^{-1}$ (zu jedem Paar das umgekehrte ergänzen).\n' +
      '• Transitive Hülle:  $R \\cup R^2 \\cup R^3 \\cup \\ldots$ (so lange Abkürzungen ergänzen, bis keine neuen Paare mehr entstehen).\n' +
      '\n' +
      '**Kleinste Äquivalenzrelation, die $S$ enthält**\n' +
      'Nacheinander die reflexive, dann die symmetrische, dann die transitive Hülle bilden. Das Ergebnis ist reflexiv, symmetrisch und transitiv – also eine Äquivalenzrelation – und so klein wie möglich.',
  },

  // ===== Gruppen =====
  {
    titel: 'Gruppenaxiome',
    inhalt:
      '**Worum geht es?**\n' +
      'Eine Gruppe ist eine Menge zusammen mit einer Rechenvorschrift, die sich besonders „brav" verhält. Der Gruppenbegriff fasst Rechnen mit Zahlen, Drehungen, Symmetrien u. v. m. unter einem Dach zusammen.\n' +
      '\n' +
      '**Die Bausteine**\n' +
      'Man hat eine Menge $G$ und eine Verknüpfung $\\star$, die je zwei Elementen $a, b$ ein neues Element $a \\star b$ zuordnet (z. B. $+$ oder $\\cdot$). Das Paar $(G, \\star)$ heißt Gruppe, wenn vier Regeln (Axiome) gelten.\n' +
      '\n' +
      '**Die vier Axiome**\n' +
      '1. Abgeschlossenheit: $a \\star b$ liegt wieder in $G$, für alle $a, b \\in G$. Man verlässt die Menge nie.\n' +
      '2. Assoziativität: $(a \\star b) \\star c = a \\star (b \\star c)$. Die Klammern dürfen beliebig gesetzt werden.\n' +
      '3. Neutralelement: Es gibt ein $e \\in G$ mit $e \\star a = a \\star e = a$ für alle $a$. Es verändert nichts (bei $+$ ist das die $0$, bei $\\cdot$ die $1$).\n' +
      '4. Inverses: Zu jedem $a$ gibt es ein $a^{-1} \\in G$ mit $a \\star a^{-1} = e$. Jeder Schritt lässt sich rückgängig machen.\n' +
      '\n' +
      '**Abelsch (kommutativ)**\n' +
      'Gilt zusätzlich $a \\star b = b \\star a$ für alle $a, b$ (die Reihenfolge ist egal), nennt man die Gruppe abelsch oder kommutativ.\n' +
      '\n' +
      '**Praxis-Tipp für Teilmengen von $(\\mathbb{Z}, +)$**\n' +
      'Liegt $G$ innerhalb der ganzen Zahlen mit der Addition, ist die Assoziativität automatisch erfüllt. Dann musst du nur prüfen: Enthält $G$ die $0$? Liegt mit $a, b$ auch $a+b$ in $G$? Liegt mit $a$ auch $-a$ in $G$?',
  },
  {
    titel: 'Wichtige Gruppen',
    inhalt:
      '**Worum geht es?**\n' +
      'Diese Karte sammelt Standardbeispiele, an denen man immer wieder prüft, ob etwas eine Gruppe ist. Zur Erinnerung: Eine Gruppe $(G, \\star)$ ist abgeschlossen, assoziativ, hat ein Neutralelement und zu jedem Element ein Inverses.\n' +
      '\n' +
      '**Beispiele, die eine Gruppe sind**\n' +
      '• $(n\\mathbb{Z}, +)$ für jedes $n \\in \\mathbb{Z}$: alle Vielfachen von $n$ mit Addition. Summe zweier Vielfacher ist wieder ein Vielfaches, $0$ ist dabei, Inverses ist die negative Zahl.\n' +
      '• $((0,\\infty), \\cdot)$: die positiven reellen Zahlen mit Multiplikation. Neutralelement $1$, Inverses $\\frac{1}{a}$.\n' +
      '• $T = \\{z \\in \\mathbb{C} : |z| = 1\\}$ mit $\\cdot$: alle komplexen Zahlen vom Betrag $1$ (der Einheitskreis). Produkt zweier solcher Zahlen hat wieder Betrag $1$.\n' +
      '• $E = \\{z \\in \\mathbb{C} : z^4 = 1\\} = \\{1, \\mathrm{i}, -1, -\\mathrm{i}\\}$: die vierten Einheitswurzeln.\n' +
      '• $W_3 = \\{1,\\, e^{2\\pi\\mathrm{i}/3},\\, e^{4\\pi\\mathrm{i}/3}\\}$: die dritten Einheitswurzeln.\n' +
      '• $\\mathrm{GL}_2(\\mathbb{R})$: alle invertierbaren $2{\\times}2$-Matrizen mit Matrizenmultiplikation.\n' +
      '\n' +
      '**Gegenbeispiele (keine Gruppe) und warum**\n' +
      '• $((0,\\infty), +)$: keine Gruppe, denn das Neutralelement der Addition wäre $0$, und $0$ fehlt in $(0,\\infty)$.\n' +
      '• $((-\\infty, 0), \\cdot)$: keine Gruppe, denn $(-1)\\cdot(-1) = 1 \\notin (-\\infty, 0)$ – nicht abgeschlossen.\n' +
      '\n' +
      '**Nützlicher Test: die Cayley-Tafel**\n' +
      'Schreibt man alle Verknüpfungen in eine Tabelle (Cayley-Tafel), muss bei einer Gruppe in jeder Zeile und jeder Spalte jedes Element genau einmal vorkommen (ein „lateinisches Quadrat"). Fehlt oder doppelt sich etwas, ist es keine Gruppe.',
  },
  {
    titel: 'Symmetrische Gruppe $S_3$',
    inhalt:
      '**Worum geht es?**\n' +
      'Die symmetrische Gruppe $S_3$ besteht aus allen Möglichkeiten, drei Dinge umzuordnen. Sie ist das kleinste Standardbeispiel einer Gruppe, in der die Reihenfolge der Verknüpfung wichtig ist.\n' +
      '\n' +
      '**Was ist eine Permutation?**\n' +
      'Eine Permutation ist eine umkehrbare (bijektive) Abbildung einer Menge auf sich selbst – sie ordnet die Elemente nur um, ohne welche zu verlieren oder doppelt zu belegen. $S_3$ enthält alle Permutationen von $\\{1,2,3\\}$, das sind genau $3! = 6$ Stück.\n' +
      '\n' +
      '**Die Zyklenschreibweise**\n' +
      'Die Elemente sind $\\mathrm{id}$, $(12)$, $(13)$, $(23)$, $(123)$, $(132)$. $(12)$ bedeutet: vertausche $1$ und $2$, lasse $3$ fest. $(123)$ bedeutet: $1 \\to 2$, $2 \\to 3$, $3 \\to 1$ (im Kreis). $\\mathrm{id}$ lässt alles, wie es ist.\n' +
      '\n' +
      '**Verknüpfen (Komposition)**\n' +
      'Bei $f \\circ g$ wird zuerst $g$ angewandt, dann $f$ (von rechts nach links lesen). Beispiel $(12)\\circ(23)$:\n' +
      '$1 \\to 1 \\to 2$,  $2 \\to 3 \\to 3$,  $3 \\to 2 \\to 1$. Ergebnis: $(132)$.\n' +
      '\n' +
      '**Inverse Elemente**\n' +
      'Jede Vertauschung zweier Elemente (eine Transposition) ist zu sich selbst invers: zweimal vertauscht ergibt den Ausgangszustand. Bei Dreierzyklen gilt $(123)^{-1} = (132)$ (Pfeile umdrehen).\n' +
      '\n' +
      '**$S_3$ ist nicht kommutativ**\n' +
      'Die Reihenfolge ändert das Ergebnis: $(12)\\circ(23) = (132)$, aber $(23)\\circ(12) = (123)$. Wegen $(132) \\neq (123)$ ist $S_3$ nicht kommutativ – ein zentrales Merkmal dieser Gruppe.',
  },

  // ===== Restklassen =====
  {
    titel: 'Restklassen $\\mathbb{Z}_n$',
    inhalt:
      '**Worum geht es?**\n' +
      'In $\\mathbb{Z}_n$ rechnet man wie auf einer Uhr: Nach $n$ Schritten ist man wieder am Anfang. Nur die Reste beim Teilen durch $n$ zählen. Das nennt man Rechnen modulo $n$.\n' +
      '\n' +
      '**Was ist eine Restklasse?**\n' +
      'Teilt man eine ganze Zahl durch $n$, bleibt ein Rest zwischen $0$ und $n-1$. Alle Zahlen mit demselben Rest fasst man zu einer Restklasse $[a]$ zusammen. So gibt es genau $n$ Klassen: $\\mathbb{Z}_n = \\{[0],[1],\\ldots,[n-1]\\}$. Beispiel modulo $12$ (Uhr): $[13] = [1]$, weil $13$ und $1$ denselben Rest haben.\n' +
      '\n' +
      '**Rechnen mit Restklassen**\n' +
      'Man rechnet mit Vertretern und reduziert am Ende auf den Rest:\n' +
      '$[a] + [b] = [(a+b) \\bmod n]$\n' +
      '$[a] \\cdot [b] = [(a \\cdot b) \\bmod n]$\n' +
      'Dabei meint $x \\bmod n$ den Rest von $x$ beim Teilen durch $n$.\n' +
      '\n' +
      '**Negative Reste**\n' +
      'Ist ein Rest negativ, addierst du so oft $n$, bis er im Bereich $0$ bis $n-1$ liegt. Beispiel modulo $7$: $-3$ wird zu $-3 + 7 = 4$, also $[-3] = [4]$.\n' +
      '\n' +
      '**Additives Inverses**\n' +
      'Das additive Inverse zu $[k]$ ist $[n-k]$ (für $k \\neq 0$), denn $[k] + [n-k] = [n] = [0]$.\n' +
      '\n' +
      '**Ordnung eines Elements**\n' +
      'Die Ordnung von $[k]$ in $(\\mathbb{Z}_n, +)$ ist $\\mathrm{ord}([k]) = \\dfrac{n}{\\mathrm{ggT}(k,\\, n)}$ – die Anzahl der Schritte, bis man durch fortlaufendes Addieren von $[k]$ wieder bei $[0]$ landet. ($\\mathrm{ggT}$ ist der größte gemeinsame Teiler.)\n' +
      '\n' +
      '**Kürzen und Untergruppen**\n' +
      'Kürzen ist nur erlaubt, wenn der Kürzungsfaktor teilerfremd zu $n$ ist, also $\\mathrm{ggT}(\\text{Faktor}, n) = 1$. Die von $[k]$ erzeugte Untergruppe ist $\\langle[k]\\rangle = \\{[0],[k],[2k],\\ldots\\}$. Nach dem Satz von Lagrange gibt es $|G|/|H|$ viele Nebenklassen $[j] + H$.',
  },
]
