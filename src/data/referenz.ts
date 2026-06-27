import type { ReferenzKarte } from '../types'

// Jede Karte erklärt ihr Thema komplett von vorne – ohne Vorwissen.
// Grundbegriffe (Einheitskreis, Bogenmaß, imaginäre Einheit, Relation, Gruppe …)
// werden bewusst in jeder Karte erneut erklärt, in der sie gebraucht werden.
export const referenzKarten: ReferenzKarte[] = [
  // ===== Trigonometrie =====
  {
    id: 'sin-cos',
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
      '**Vorzeichen in den vier Quadranten**\n' +
      'Über $\\frac{\\pi}{2}$ hinaus ändern sich die Vorzeichen. Im 1. Quadranten ($0$ bis $\\frac{\\pi}{2}$) sind beide positiv; im 2. ($\\frac{\\pi}{2}$ bis $\\pi$) ist nur $\\sin$ positiv; im 3. ($\\pi$ bis $\\frac{3\\pi}{2}$) sind beide negativ; im 4. ($\\frac{3\\pi}{2}$ bis $2\\pi$) ist nur $\\cos$ positiv. Den Betrag liest man am zugehörigen spitzen Winkel ab (z. B. $\\cos\\frac{2\\pi}{3} = -\\cos\\frac{\\pi}{3} = -\\frac{1}{2}$).\n' +
      '\n' +
      '**Was ist der Tangens?**\n' +
      'Der Tangens ist das Verhältnis $\\tan\\varphi = \\frac{\\sin\\varphi}{\\cos\\varphi}$. Bei $\\varphi = \\frac{\\pi}{2}$ ist $\\cos\\varphi = 0$, und durch $0$ darf man nicht teilen. Deshalb ist $\\tan\\!\\left(\\frac{\\pi}{2}\\right)$ nicht definiert.\n' +
      '\n' +
      '**Eselsbrücke zum Merken**\n' +
      'Schreibe die Sinuswerte als $\\frac{\\sqrt{0}}{2}, \\frac{\\sqrt{1}}{2}, \\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{3}}{2}, \\frac{\\sqrt{4}}{2}$ für die Winkel $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$. Der Kosinus durchläuft genau dieselbe Reihe rückwärts.',
    beispiele: [
      {
        szenario: 'Standardwert direkt ablesen',
        beispiele: [
          '**Aufgabe:** Bestimme $\\sin\\frac{\\pi}{6}$ und $\\cos\\frac{\\pi}{6}$.\n**Lösung:** $\\frac{\\pi}{6}$ entspricht $30°$. Aus der Tabelle: der Sinus (Höhe) ist klein, der Kosinus (Breite) groß.\n**Ergebnis:** $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$ und $\\cos\\frac{\\pi}{6} = \\frac{\\sqrt{3}}{2}$.',
          '**Aufgabe:** Bestimme $\\sin\\frac{\\pi}{4}$ und $\\cos\\frac{\\pi}{4}$.\n**Lösung:** $\\frac{\\pi}{4}$ entspricht $45°$. Auf der Winkelhalbierenden sind Höhe und Breite gleich groß.\n**Ergebnis:** $\\sin\\frac{\\pi}{4} = \\cos\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$.',
          '**Aufgabe:** Bestimme $\\sin\\frac{\\pi}{2}$ und $\\cos\\frac{\\pi}{2}$.\n**Lösung:** $\\frac{\\pi}{2}$ entspricht $90°$, der Punkt liegt ganz oben auf dem Einheitskreis bei $(0,1)$.\n**Ergebnis:** $\\sin\\frac{\\pi}{2} = 1$ (volle Höhe), $\\cos\\frac{\\pi}{2} = 0$ (keine Breite).',
        ],
      },
      {
        szenario: 'Werte in anderen Quadranten',
        beispiele: [
          '**Aufgabe:** Bestimme $\\cos\\frac{2\\pi}{3}$.\n**Lösung:** $\\frac{2\\pi}{3} = 120°$ liegt im 2. Quadranten, dort ist $\\cos$ negativ. Der zugehörige spitze Winkel ist $\\pi - \\frac{2\\pi}{3} = \\frac{\\pi}{3}$, also $\\cos\\frac{2\\pi}{3} = -\\cos\\frac{\\pi}{3}$.\n**Ergebnis:** $\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$.',
          '**Aufgabe:** Bestimme $\\sin\\frac{7\\pi}{6}$.\n**Lösung:** $\\frac{7\\pi}{6} = 210°$ liegt im 3. Quadranten, dort ist $\\sin$ negativ. Spitzer Winkel: $\\frac{7\\pi}{6} - \\pi = \\frac{\\pi}{6}$, also $\\sin\\frac{7\\pi}{6} = -\\sin\\frac{\\pi}{6}$.\n**Ergebnis:** $\\sin\\frac{7\\pi}{6} = -\\frac{1}{2}$.',
          '**Aufgabe:** Bestimme $\\cos\\frac{7\\pi}{4}$.\n**Lösung:** $\\frac{7\\pi}{4} = 315°$ liegt im 4. Quadranten, dort ist $\\cos$ positiv. Spitzer Winkel: $2\\pi - \\frac{7\\pi}{4} = \\frac{\\pi}{4}$, also $\\cos\\frac{7\\pi}{4} = +\\cos\\frac{\\pi}{4}$.\n**Ergebnis:** $\\cos\\frac{7\\pi}{4} = \\frac{\\sqrt{2}}{2}$.',
        ],
      },
      {
        szenario: 'Tangens berechnen',
        beispiele: [
          '**Aufgabe:** Bestimme $\\tan\\frac{\\pi}{4}$.\n**Lösung:** $\\tan\\varphi = \\frac{\\sin\\varphi}{\\cos\\varphi}$. Hier $\\tan\\frac{\\pi}{4} = \\frac{\\sin(\\pi/4)}{\\cos(\\pi/4)} = \\frac{\\sqrt{2}/2}{\\sqrt{2}/2}$.\n**Ergebnis:** $\\tan\\frac{\\pi}{4} = 1$.',
          '**Aufgabe:** Bestimme $\\tan\\frac{\\pi}{3}$.\n**Lösung:** $\\tan\\frac{\\pi}{3} = \\frac{\\sin(\\pi/3)}{\\cos(\\pi/3)} = \\frac{\\sqrt{3}/2}{1/2} = \\frac{\\sqrt{3}}{2}\\cdot\\frac{2}{1}$.\n**Ergebnis:** $\\tan\\frac{\\pi}{3} = \\sqrt{3} \\approx 1{,}732$.',
          '**Aufgabe:** Warum ist $\\tan\\frac{\\pi}{2}$ nicht definiert?\n**Lösung:** $\\tan\\frac{\\pi}{2} = \\frac{\\sin(\\pi/2)}{\\cos(\\pi/2)} = \\frac{1}{0}$. Eine Division durch $0$ ist nicht erlaubt.\n**Ergebnis:** $\\tan\\frac{\\pi}{2}$ ist undefiniert (der Graph hat dort eine Polstelle).',
        ],
      },
    ],
  },
  {
    id: 'arkusfunktionen',
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
    beispiele: [
      {
        szenario: 'arcsin auswerten (Antwort in $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$)',
        beispiele: [
          '**Aufgabe:** Berechne $\\arcsin\\!\\left(\\frac{1}{2}\\right)$.\n**Lösung:** Gesucht ist der Winkel $\\varphi$ im Bereich $[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$ mit $\\sin\\varphi = \\frac{1}{2}$. Aus der Standardtabelle: $\\sin\\frac{\\pi}{6} = \\frac{1}{2}$.\n**Ergebnis:** $\\arcsin\\!\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{6}$.',
          '**Aufgabe:** Berechne $\\arcsin\\!\\left(-\\frac{\\sqrt{2}}{2}\\right)$.\n**Lösung:** Gesucht: $\\sin\\varphi = -\\frac{\\sqrt{2}}{2}$ mit $\\varphi \\in [-\\frac{\\pi}{2},\\frac{\\pi}{2}]$. Da $\\sin\\frac{\\pi}{4} = \\frac{\\sqrt{2}}{2}$ und der Sinus ungerade ist, ist der negative Wert bei $-\\frac{\\pi}{4}$.\n**Ergebnis:** $\\arcsin\\!\\left(-\\frac{\\sqrt{2}}{2}\\right) = -\\frac{\\pi}{4}$.',
          '**Aufgabe:** Berechne $\\arcsin(1)$.\n**Lösung:** Gesucht: $\\sin\\varphi = 1$ im Bereich $[-\\frac{\\pi}{2},\\frac{\\pi}{2}]$. Der Sinus erreicht $1$ am oberen Rand bei $\\varphi = \\frac{\\pi}{2}$.\n**Ergebnis:** $\\arcsin(1) = \\frac{\\pi}{2}$.',
        ],
      },
      {
        szenario: 'arccos auswerten (Antwort in $[0, \\pi]$)',
        beispiele: [
          '**Aufgabe:** Berechne $\\arccos(0)$.\n**Lösung:** Gesucht: $\\cos\\varphi = 0$ mit $\\varphi \\in [0,\\pi]$. Der Kosinus ist $0$ bei $\\frac{\\pi}{2}$.\n**Ergebnis:** $\\arccos(0) = \\frac{\\pi}{2}$.',
          '**Aufgabe:** Berechne $\\arccos\\!\\left(-\\frac{1}{2}\\right)$.\n**Lösung:** Gesucht: $\\cos\\varphi = -\\frac{1}{2}$ mit $\\varphi \\in [0,\\pi]$. Da $\\cos\\frac{\\pi}{3} = \\frac{1}{2}$, liegt der negative Wert im 2. Quadranten bei $\\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$.\n**Ergebnis:** $\\arccos\\!\\left(-\\frac{1}{2}\\right) = \\frac{2\\pi}{3}$.',
          '**Aufgabe:** Berechne $\\arccos(-1)$.\n**Lösung:** Gesucht: $\\cos\\varphi = -1$ mit $\\varphi \\in [0,\\pi]$. Der Kosinus erreicht $-1$ am Rand bei $\\varphi = \\pi$.\n**Ergebnis:** $\\arccos(-1) = \\pi$.',
        ],
      },
      {
        szenario: 'arctan auswerten (jede reelle Zahl erlaubt)',
        beispiele: [
          '**Aufgabe:** Berechne $\\arctan(1)$.\n**Lösung:** Gesucht: $\\tan\\varphi = 1$ mit $\\varphi \\in (-\\frac{\\pi}{2},\\frac{\\pi}{2})$. Da $\\tan\\frac{\\pi}{4} = 1$.\n**Ergebnis:** $\\arctan(1) = \\frac{\\pi}{4}$.',
          '**Aufgabe:** Berechne $\\arctan(\\sqrt{3})$.\n**Lösung:** Gesucht: $\\tan\\varphi = \\sqrt{3}$. Aus der Tabelle: $\\tan\\frac{\\pi}{3} = \\sqrt{3}$.\n**Ergebnis:** $\\arctan(\\sqrt{3}) = \\frac{\\pi}{3}$.',
          '**Aufgabe:** Berechne $\\arctan(0)$.\n**Lösung:** Gesucht: $\\tan\\varphi = 0$. Der Tangens ist $0$, wenn der Sinus $0$ ist – im erlaubten Bereich genau bei $\\varphi = 0$.\n**Ergebnis:** $\\arctan(0) = 0$.',
        ],
      },
    ],
  },
  {
    id: 'winkelumrechnung',
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
    beispiele: [
      {
        szenario: 'Grad → Bogenmaß',
        beispiele: [
          '**Aufgabe:** Wandle $45°$ ins Bogenmaß um.\n**Lösung:** $45 \\cdot \\frac{\\pi}{180} = \\frac{45\\pi}{180}$. Kürze mit $45$: $\\frac{45}{180} = \\frac{1}{4}$.\n**Ergebnis:** $45° = \\frac{\\pi}{4}$.',
          '**Aufgabe:** Wandle $120°$ ins Bogenmaß um.\n**Lösung:** $120 \\cdot \\frac{\\pi}{180} = \\frac{120\\pi}{180}$. Kürze mit $60$: $\\frac{120}{180} = \\frac{2}{3}$.\n**Ergebnis:** $120° = \\frac{2\\pi}{3}$.',
          '**Aufgabe:** Wandle $270°$ ins Bogenmaß um.\n**Lösung:** $270 \\cdot \\frac{\\pi}{180} = \\frac{270\\pi}{180}$. Kürze mit $90$: $\\frac{270}{180} = \\frac{3}{2}$.\n**Ergebnis:** $270° = \\frac{3\\pi}{2}$.',
        ],
      },
      {
        szenario: 'Bogenmaß → Grad',
        beispiele: [
          '**Aufgabe:** Wandle $\\frac{\\pi}{6}$ in Grad um.\n**Lösung:** $\\frac{\\pi}{6} \\cdot \\frac{180}{\\pi} = \\frac{180}{6}$, das $\\pi$ kürzt sich weg.\n**Ergebnis:** $\\frac{\\pi}{6} = 30°$.',
          '**Aufgabe:** Wandle $\\frac{3\\pi}{4}$ in Grad um.\n**Lösung:** $\\frac{3\\pi}{4} \\cdot \\frac{180}{\\pi} = \\frac{3 \\cdot 180}{4} = \\frac{540}{4}$.\n**Ergebnis:** $\\frac{3\\pi}{4} = 135°$.',
          '**Aufgabe:** Wandle $\\frac{5\\pi}{3}$ in Grad um.\n**Lösung:** $\\frac{5\\pi}{3} \\cdot \\frac{180}{\\pi} = \\frac{5 \\cdot 180}{3} = \\frac{900}{3}$.\n**Ergebnis:** $\\frac{5\\pi}{3} = 300°$.',
        ],
      },
      {
        szenario: 'Krumme Gradzahlen (Dezimalwert)',
        beispiele: [
          '**Aufgabe:** Wandle $90°$ ins Bogenmaß und gib auch den Dezimalwert an.\n**Lösung:** $90 \\cdot \\frac{\\pi}{180} = \\frac{\\pi}{2} \\approx \\frac{3{,}14159}{2}$.\n**Ergebnis:** $90° = \\frac{\\pi}{2} \\approx 1{,}5708$.',
          '**Aufgabe:** Wandle $1$ (Bogenmaß) in Grad um.\n**Lösung:** $1 \\cdot \\frac{180}{\\pi} = \\frac{180}{3{,}14159}$.\n**Ergebnis:** $1\\,\\text{rad} \\approx 57{,}30°$.',
          '**Aufgabe:** Wandle $100°$ ins Bogenmaß um.\n**Lösung:** $100 \\cdot \\frac{\\pi}{180} = \\frac{100\\pi}{180} = \\frac{5\\pi}{9} \\approx \\frac{5 \\cdot 3{,}14159}{9}$.\n**Ergebnis:** $100° = \\frac{5\\pi}{9} \\approx 1{,}745$.',
        ],
      },
    ],
  },
  {
    id: 'urbilder',
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
      '**Allgemeines Rezept (ein Wert $\\to$ alle Winkel)**\n' +
      'Suchst du alle $\\varphi$ mit $\\sin\\varphi = s$, dann ist eine Lösung $\\alpha = \\arcsin(s)$, und die volle Lösungsmenge ist $\\{\\alpha + 2k\\pi\\} \\cup \\{\\pi - \\alpha + 2k\\pi\\}$ (zwei Stellen pro Umlauf). Für $\\cos\\varphi = c$ mit $\\alpha = \\arccos(c)$ ist es $\\{\\alpha + 2k\\pi\\} \\cup \\{-\\alpha + 2k\\pi\\}$. Beim Tangens genügt $\\{\\arctan(t) + k\\pi\\}$.\n' +
      '\n' +
      '**Merke**\n' +
      'Bei $\\sin$ und $\\cos$ wird in der Regel $2k\\pi$ addiert (Periode $2\\pi$), bei $\\tan$ nur $k\\pi$ (Periode $\\pi$). Der Wert $0$ ist ein Sonderfall: Hier reicht beim Sinus $k\\pi$, weil der Sinus seinen Nulldurchgang doppelt so oft hat.',
    beispiele: [
      {
        szenario: 'Urbild des Sinus',
        beispiele: [
          '**Aufgabe:** Bestimme alle $\\varphi$ mit $\\sin\\varphi = 0$, also $\\sin^{-1}(\\{0\\})$.\n**Lösung:** Der Sinus (Höhe auf dem Einheitskreis) ist $0$ bei $0$ und bei $\\pi$, danach wiederholt es sich. Beide liegen genau $\\pi$ auseinander.\n**Ergebnis:** $\\sin^{-1}(\\{0\\}) = \\{k\\pi : k \\in \\mathbb{Z}\\}$.',
          '**Aufgabe:** Bestimme $\\sin^{-1}(\\{1\\})$.\n**Lösung:** Der Sinus erreicht den Höchstwert $1$ nur am obersten Punkt bei $\\frac{\\pi}{2}$. Pro voller Umdrehung $2\\pi$ passiert das genau einmal.\n**Ergebnis:** $\\sin^{-1}(\\{1\\}) = \\left\\{\\frac{\\pi}{2} + 2k\\pi : k \\in \\mathbb{Z}\\right\\}$.',
          '**Aufgabe:** Bestimme alle $\\varphi$ mit $\\sin\\varphi = \\frac{1}{2}$.\n**Lösung:** Eine Lösung ist $\\arcsin\\frac{1}{2} = \\frac{\\pi}{6}$. Die zweite Stelle pro Umlauf ist $\\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$.\n**Ergebnis:** $\\left\\{\\frac{\\pi}{6} + 2k\\pi\\right\\} \\cup \\left\\{\\frac{5\\pi}{6} + 2k\\pi\\right\\}$.',
        ],
      },
      {
        szenario: 'Urbild des Kosinus',
        beispiele: [
          '**Aufgabe:** Bestimme $\\cos^{-1}(\\{1\\})$.\n**Lösung:** Der Kosinus (Breite) erreicht $1$ nur ganz rechts bei $0$, danach erst wieder nach einer vollen Umdrehung.\n**Ergebnis:** $\\cos^{-1}(\\{1\\}) = \\{2k\\pi : k \\in \\mathbb{Z}\\}$.',
          '**Aufgabe:** Bestimme $\\cos^{-1}(\\{0\\})$.\n**Lösung:** Der Kosinus ist $0$ bei $\\frac{\\pi}{2}$ (oben) und bei $\\frac{3\\pi}{2}$ (unten). Diese beiden liegen $\\pi$ auseinander, daher reicht $\\frac{\\pi}{2} + k\\pi$.\n**Ergebnis:** $\\cos^{-1}(\\{0\\}) = \\left\\{\\frac{\\pi}{2} + k\\pi : k \\in \\mathbb{Z}\\right\\}$.',
          '**Aufgabe:** Bestimme alle $\\varphi$ mit $\\cos\\varphi = \\frac{1}{2}$.\n**Lösung:** Eine Lösung ist $\\arccos\\frac{1}{2} = \\frac{\\pi}{3}$. Wegen $\\cos(-\\varphi) = \\cos\\varphi$ ist die zweite Stelle $-\\frac{\\pi}{3}$.\n**Ergebnis:** $\\left\\{\\frac{\\pi}{3} + 2k\\pi\\right\\} \\cup \\left\\{-\\frac{\\pi}{3} + 2k\\pi\\right\\}$.',
        ],
      },
      {
        szenario: 'Urbild des Tangens',
        beispiele: [
          '**Aufgabe:** Bestimme $\\tan^{-1}(\\{0\\})$.\n**Lösung:** $\\tan\\varphi = 0$ genau dann, wenn $\\sin\\varphi = 0$, also bei $0, \\pi, 2\\pi, \\ldots$ Der Tangens hat Periode $\\pi$.\n**Ergebnis:** $\\tan^{-1}(\\{0\\}) = \\{k\\pi : k \\in \\mathbb{Z}\\}$.',
          '**Aufgabe:** Bestimme $\\tan^{-1}(\\{1\\})$.\n**Lösung:** Eine Lösung ist $\\arctan(1) = \\frac{\\pi}{4}$. Wegen der Periode $\\pi$ kommt jeweils $k\\pi$ hinzu.\n**Ergebnis:** $\\tan^{-1}(\\{1\\}) = \\left\\{\\frac{\\pi}{4} + k\\pi : k \\in \\mathbb{Z}\\right\\}$.',
          '**Aufgabe:** Bestimme alle $\\varphi$ mit $\\tan\\varphi = -1$.\n**Lösung:** $\\arctan(-1) = -\\frac{\\pi}{4}$. Mit Periode $\\pi$ erhält man alle Lösungen.\n**Ergebnis:** $\\left\\{-\\frac{\\pi}{4} + k\\pi : k \\in \\mathbb{Z}\\right\\}$ (gleichwertig $\\left\\{\\frac{3\\pi}{4} + k\\pi\\right\\}$).',
        ],
      },
    ],
  },
  {
    id: 'kreise-mengen',
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
      '**Kreise mit verschobenem Mittelpunkt**\n' +
      'Ein Kreis um den Punkt $(a, b)$ mit Radius $r$ hat die Gleichung $(x-a)^2 + (y-b)^2 = r^2$. Steht in der Gleichung ein Plus, z. B. $(x+3)^2$, gehört dazu $a = -3$. Den Mittelpunkt liest man also mit umgedrehtem Vorzeichen ab.\n' +
      '\n' +
      '**Geraden durch den Nullpunkt**\n' +
      '$x = y$  →  Winkelhalbierende durch den 1. und 3. Quadranten (Punkte mit gleichen Koordinaten)\n' +
      '$x = -y$  →  Winkelhalbierende durch den 2. und 4. Quadranten (Koordinaten entgegengesetzt)\n' +
      '\n' +
      '**Merke**\n' +
      'Ein Gleichheitszeichen liefert eine Linie (den Rand), ein Ungleichheitszeichen eine Fläche. „$<$" bzw. „$>$" schließt den Rand aus, „$\\leq$" bzw. „$\\geq$" schließt ihn ein.',
    beispiele: [
      {
        szenario: 'Gleichung erkennen (Kreislinie)',
        beispiele: [
          '**Aufgabe:** Welche Figur beschreibt $x^2 + y^2 = 25$?\n**Lösung:** Form $x^2+y^2 = r^2$ mit $r^2 = 25$, also $r = 5$. Gleichheitszeichen → Rand.\n**Ergebnis:** Kreislinie um den Nullpunkt mit Radius $5$.',
          '**Aufgabe:** Welche Figur beschreibt $(x-2)^2 + (y+1)^2 = 9$?\n**Lösung:** Verschobener Kreis: $a = 2$, $b = -1$ (Vorzeichen umdrehen), $r^2 = 9 \\Rightarrow r = 3$.\n**Ergebnis:** Kreislinie um $(2, -1)$ mit Radius $3$.',
          '**Aufgabe:** Beschreibe $x^2 + y^2 = 2$ als Punktmenge.\n**Lösung:** $r = \\sqrt{2}$. Punkte mit Abstand genau $\\sqrt{2}$ vom Nullpunkt, z. B. $(1,1)$ wegen $1^2+1^2 = 2$.\n**Ergebnis:** Kreislinie um $0$ mit Radius $\\sqrt{2}$.',
        ],
      },
      {
        szenario: 'Ungleichung erkennen (Fläche)',
        beispiele: [
          '**Aufgabe:** Welche Menge ist $x^2 + y^2 < 4$?\n**Lösung:** $r^2 = 4 \\Rightarrow r = 2$. „$<$" → Inneres ohne Rand.\n**Ergebnis:** Offene Kreisscheibe um $0$, Radius $2$ (der Randkreis gehört nicht dazu).',
          '**Aufgabe:** Welche Menge ist $x^2 + y^2 \\geq 1$?\n**Lösung:** $r = 1$. „$\\geq$" → alles außerhalb, der Rand gehört dazu.\n**Ergebnis:** Äußeres des Einheitskreises samt Randkreis.',
          '**Aufgabe:** Welche Menge ist $1 \\leq x^2 + y^2 \\leq 9$?\n**Lösung:** Zwischen $r_1 = 1$ und $r_2 = 3$. Beide Ränder eingeschlossen.\n**Ergebnis:** Abgeschlossener Kreisring zwischen den Radien $1$ und $3$.',
        ],
      },
      {
        szenario: 'Punkt-Test (liegt der Punkt drin?)',
        beispiele: [
          '**Aufgabe:** Liegt $(3, 4)$ auf dem Kreis $x^2 + y^2 = 25$?\n**Lösung:** Einsetzen: $3^2 + 4^2 = 9 + 16 = 25$. Stimmt mit $25$ überein.\n**Ergebnis:** Ja, $(3,4)$ liegt genau auf der Kreislinie.',
          '**Aufgabe:** Liegt $(1, 1)$ in der offenen Scheibe $x^2 + y^2 < 4$?\n**Lösung:** $1^2 + 1^2 = 2$. Da $2 < 4$, ist die Bedingung erfüllt.\n**Ergebnis:** Ja, $(1,1)$ liegt im Inneren.',
          '**Aufgabe:** Liegt $(2, 2)$ im Bereich $x^2 + y^2 \\leq 4$?\n**Lösung:** $2^2 + 2^2 = 8$. Da $8 > 4$, ist die Bedingung verletzt.\n**Ergebnis:** Nein, $(2,2)$ liegt außerhalb.',
        ],
      },
    ],
  },
  {
    id: 'binomische-formeln',
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
    beispiele: [
      {
        szenario: 'Ausmultiplizieren mit $(a+b)^2$ und $(a-b)^2$',
        beispiele: [
          '**Aufgabe:** Multipliziere $(x+3)^2$ aus.\n**Lösung:** Erste Formel mit $a = x$, $b = 3$: $a^2 + 2ab + b^2 = x^2 + 2\\cdot x \\cdot 3 + 3^2$.\n**Ergebnis:** $x^2 + 6x + 9$.',
          '**Aufgabe:** Multipliziere $(2x-5)^2$ aus.\n**Lösung:** Zweite Formel mit $a = 2x$, $b = 5$: $(2x)^2 - 2\\cdot 2x \\cdot 5 + 5^2 = 4x^2 - 20x + 25$.\n**Ergebnis:** $4x^2 - 20x + 25$.',
          '**Aufgabe:** Berechne $(a+b)^2$ für $a = 7$, $b = 0{,}5$ ohne langes Rechnen.\n**Lösung:** $7^2 + 2\\cdot 7 \\cdot 0{,}5 + 0{,}5^2 = 49 + 7 + 0{,}25$.\n**Ergebnis:** $56{,}25$ (das ist $7{,}5^2$).',
        ],
      },
      {
        szenario: 'Dritte Formel $(a+b)(a-b) = a^2-b^2$',
        beispiele: [
          '**Aufgabe:** Multipliziere $(x+4)(x-4)$ aus.\n**Lösung:** Dritte Formel mit $a = x$, $b = 4$: $a^2 - b^2 = x^2 - 16$.\n**Ergebnis:** $x^2 - 16$.',
          '**Aufgabe:** Berechne $103 \\cdot 97$ mit der dritten Formel.\n**Lösung:** $103 = 100+3$, $97 = 100-3$, also $(100+3)(100-3) = 100^2 - 3^2 = 10000 - 9$.\n**Ergebnis:** $9991$.',
          '**Aufgabe:** Faktorisiere $9x^2 - 25$.\n**Lösung:** $9x^2 = (3x)^2$ und $25 = 5^2$, also $a = 3x$, $b = 5$: $a^2 - b^2 = (a+b)(a-b)$.\n**Ergebnis:** $(3x+5)(3x-5)$.',
        ],
      },
      {
        szenario: 'Nenner rational machen',
        beispiele: [
          '**Aufgabe:** Mache $\\dfrac{1}{\\sqrt{2}}$ rational.\n**Lösung:** Mit $\\sqrt{2}$ erweitern: $\\frac{1}{\\sqrt{2}} \\cdot \\frac{\\sqrt{2}}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$.\n**Ergebnis:** $\\dfrac{\\sqrt{2}}{2}$.',
          '**Aufgabe:** Mache $\\dfrac{1}{\\sqrt{3}+1}$ rational.\n**Lösung:** Mit dem Konjugierten $\\sqrt{3}-1$ erweitern. Nenner: $(\\sqrt{3}+1)(\\sqrt{3}-1) = 3 - 1 = 2$.\n**Ergebnis:** $\\dfrac{\\sqrt{3}-1}{2}$.',
          '**Aufgabe:** Mache $\\dfrac{2}{\\sqrt{5}-\\sqrt{3}}$ rational.\n**Lösung:** Mit $\\sqrt{5}+\\sqrt{3}$ erweitern. Nenner: $(\\sqrt{5})^2 - (\\sqrt{3})^2 = 5 - 3 = 2$. Zähler: $2(\\sqrt{5}+\\sqrt{3})$.\n**Ergebnis:** $\\dfrac{2(\\sqrt{5}+\\sqrt{3})}{2} = \\sqrt{5}+\\sqrt{3}$.',
        ],
      },
    ],
  },

  // ===== Komplexe Zahlen =====
  {
    id: 'komplexe-grundoperationen',
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
    beispiele: [
      {
        szenario: 'Addition & Subtraktion',
        beispiele: [
          '**Aufgabe:** Berechne $(3+2\\mathrm{i}) + (1+4\\mathrm{i})$.\n**Lösung:** Realteile $3+1 = 4$, Imaginärteile $2+4 = 6$.\n**Ergebnis:** $4 + 6\\mathrm{i}$.',
          '**Aufgabe:** Berechne $(5-\\mathrm{i}) + (-2+3\\mathrm{i})$.\n**Lösung:** Realteile $5 + (-2) = 3$, Imaginärteile $-1 + 3 = 2$.\n**Ergebnis:** $3 + 2\\mathrm{i}$.',
          '**Aufgabe:** Berechne $(5-\\mathrm{i}) - (-2+3\\mathrm{i})$.\n**Lösung:** Realteile $5 - (-2) = 7$, Imaginärteile $-1 - 3 = -4$.\n**Ergebnis:** $7 - 4\\mathrm{i}$.',
        ],
      },
      {
        szenario: 'Multiplikation (mit $\\mathrm{i}^2 = -1$)',
        beispiele: [
          '**Aufgabe:** Berechne $(2+3\\mathrm{i})(1+4\\mathrm{i})$.\n**Lösung:** Ausmultiplizieren: $2\\cdot 1 + 2\\cdot 4\\mathrm{i} + 3\\mathrm{i}\\cdot 1 + 3\\mathrm{i}\\cdot 4\\mathrm{i} = 2 + 8\\mathrm{i} + 3\\mathrm{i} + 12\\mathrm{i}^2$. Mit $\\mathrm{i}^2 = -1$: $2 - 12 + 11\\mathrm{i}$.\n**Ergebnis:** $-10 + 11\\mathrm{i}$.',
          '**Aufgabe:** Berechne $(1-2\\mathrm{i})(3+\\mathrm{i})$.\n**Lösung:** $1\\cdot 3 + 1\\cdot\\mathrm{i} - 2\\mathrm{i}\\cdot 3 - 2\\mathrm{i}\\cdot\\mathrm{i} = 3 + \\mathrm{i} - 6\\mathrm{i} - 2\\mathrm{i}^2 = 3 + 2 + (1-6)\\mathrm{i}$.\n**Ergebnis:** $5 - 5\\mathrm{i}$.',
          '**Aufgabe:** Berechne $(2+\\mathrm{i})^2$.\n**Lösung:** Binomisch: $2^2 + 2\\cdot 2 \\cdot \\mathrm{i} + \\mathrm{i}^2 = 4 + 4\\mathrm{i} - 1$.\n**Ergebnis:** $3 + 4\\mathrm{i}$.',
        ],
      },
      {
        szenario: 'Konjugieren, Betrag & Division',
        beispiele: [
          '**Aufgabe:** Bestimme $\\overline{z}$ und $|z|$ für $z = 3 - 4\\mathrm{i}$.\n**Lösung:** Konjugiert: Vorzeichen des Imaginärteils drehen, $\\overline{z} = 3 + 4\\mathrm{i}$. Betrag: $|z| = \\sqrt{3^2 + (-4)^2} = \\sqrt{9+16} = \\sqrt{25}$.\n**Ergebnis:** $\\overline{z} = 3+4\\mathrm{i}$, $|z| = 5$.',
          '**Aufgabe:** Berechne $\\dfrac{3+\\mathrm{i}}{1+\\mathrm{i}}$.\n**Lösung:** Mit $\\overline{1+\\mathrm{i}} = 1-\\mathrm{i}$ erweitern. Zähler: $(3+\\mathrm{i})(1-\\mathrm{i}) = 3 - 3\\mathrm{i} + \\mathrm{i} - \\mathrm{i}^2 = 4 - 2\\mathrm{i}$. Nenner: $|1+\\mathrm{i}|^2 = 1^2+1^2 = 2$.\n**Ergebnis:** $\\frac{4-2\\mathrm{i}}{2} = 2 - \\mathrm{i}$.',
          '**Aufgabe:** Berechne $\\dfrac{2+3\\mathrm{i}}{1-2\\mathrm{i}}$.\n**Lösung:** Mit $\\overline{1-2\\mathrm{i}} = 1+2\\mathrm{i}$ erweitern. Zähler: $(2+3\\mathrm{i})(1+2\\mathrm{i}) = 2 + 4\\mathrm{i} + 3\\mathrm{i} + 6\\mathrm{i}^2 = -4 + 7\\mathrm{i}$. Nenner: $|1-2\\mathrm{i}|^2 = 1^2 + 2^2 = 5$.\n**Ergebnis:** $\\frac{-4+7\\mathrm{i}}{5} = -\\frac{4}{5} + \\frac{7}{5}\\mathrm{i}$.',
        ],
      },
    ],
  },
  {
    id: 'gauss-mengen',
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
    beispiele: [
      {
        szenario: 'Kreis / Kreisscheibe erkennen',
        beispiele: [
          '**Aufgabe:** Welche Figur ist $|z| = 3$?\n**Lösung:** $|z - 0| = 3$, also Mittelpunkt $z_0 = 0$, Radius $r = 3$. Gleichheit → Rand.\n**Ergebnis:** Kreislinie um den Nullpunkt mit Radius $3$.',
          '**Aufgabe:** Welche Figur ist $|z - (1+2\\mathrm{i})| \\leq 2$?\n**Lösung:** Mittelpunkt $z_0 = 1 + 2\\mathrm{i}$ (Punkt $(1,2)$), Radius $2$. „$\\leq$" → Scheibe mit Rand.\n**Ergebnis:** Abgeschlossene Kreisscheibe um $(1,2)$ mit Radius $2$.',
          '**Aufgabe:** Welche Figur ist $1 < |z| < 2$?\n**Lösung:** Abstand vom Nullpunkt zwischen $1$ und $2$, beide Ränder ausgeschlossen.\n**Ergebnis:** Offener Kreisring um $0$ zwischen den Radien $1$ und $2$.',
        ],
      },
      {
        szenario: 'Mittelpunkt aus $|z + \\ldots|$ ablesen',
        beispiele: [
          '**Aufgabe:** Bestimme Mittelpunkt und Radius von $|z + 3| = 4$.\n**Lösung:** Umschreiben $|z - (-3)| = 4$. Mittelpunkt $z_0 = -3$ (Punkt $(-3,0)$), Radius $4$.\n**Ergebnis:** Kreis um $(-3, 0)$ mit Radius $4$.',
          '**Aufgabe:** Bestimme Mittelpunkt und Radius von $|z + 1 - 2\\mathrm{i}| = 5$.\n**Lösung:** $|z - (-1 + 2\\mathrm{i})| = 5$. Mittelpunkt $z_0 = -1 + 2\\mathrm{i}$ (Punkt $(-1, 2)$), Radius $5$.\n**Ergebnis:** Kreis um $(-1, 2)$ mit Radius $5$.',
          '**Aufgabe:** Bestimme Mittelpunkt und Radius von $|z - 2 + \\mathrm{i}| < 1$.\n**Lösung:** $|z - (2 - \\mathrm{i})| < 1$. Mittelpunkt $z_0 = 2 - \\mathrm{i}$ (Punkt $(2,-1)$), Radius $1$, „$<$" → offen.\n**Ergebnis:** Offene Kreisscheibe um $(2, -1)$ mit Radius $1$.',
        ],
      },
      {
        szenario: 'Geraden (Mittelsenkrechte & Achsen)',
        beispiele: [
          '**Aufgabe:** Welche Figur ist $|z| = |z - 2|$?\n**Lösung:** Punkte gleich weit von $0$ und $2$ (auf der reellen Achse). Die Mitte liegt bei $\\mathrm{Re}(z) = 1$.\n**Ergebnis:** Senkrechte Gerade $\\mathrm{Re}(z) = 1$ (Mittelsenkrechte der Strecke $0$–$2$).',
          '**Aufgabe:** Welche Figur ist $\\mathrm{Im}(z) = 0$?\n**Lösung:** Der Imaginärteil $y$ ist null, der Realteil beliebig.\n**Ergebnis:** Die reelle Achse (waagerechte Achse).',
          '**Aufgabe:** Welche Figur ist $|z - \\mathrm{i}| = |z + \\mathrm{i}|$?\n**Lösung:** Gleich weit von $\\mathrm{i}$ (Punkt $(0,1)$) und $-\\mathrm{i}$ (Punkt $(0,-1)$). Die Mitte liegt bei $\\mathrm{Im}(z) = 0$.\n**Ergebnis:** Die reelle Achse $\\mathrm{Im}(z) = 0$.',
        ],
      },
    ],
  },
  {
    id: 'polardarstellung',
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
      '**Zurück in die kartesische Form**\n' +
      'Hat man $r$ und $\\varphi$, rechnet man mit $x = r\\cos\\varphi$ und $y = r\\sin\\varphi$ zurück zu $z = x + y\\mathrm{i}$.\n' +
      '\n' +
      '**Warum das praktisch ist: Multiplizieren**\n' +
      'In Polarform wird Multiplikation kinderleicht: $r_1 e^{\\mathrm{i}\\varphi_1} \\cdot r_2 e^{\\mathrm{i}\\varphi_2} = (r_1 r_2)\\,e^{\\mathrm{i}(\\varphi_1+\\varphi_2)}$. In Worten: Längen multiplizieren, Winkel addieren. Geometrisch ist Multiplizieren also Strecken plus Drehen.',
    beispiele: [
      {
        szenario: 'Kartesisch → Polar',
        beispiele: [
          '**Aufgabe:** Schreibe $z = 1 + \\mathrm{i}$ in Polarform.\n**Lösung:** $r = \\sqrt{1^2+1^2} = \\sqrt{2}$. Da $\\mathrm{Im}(z) > 0$: $\\varphi = \\arccos\\frac{1}{\\sqrt{2}} = \\frac{\\pi}{4}$.\n**Ergebnis:** $z = \\sqrt{2}\\,e^{\\mathrm{i}\\pi/4}$.',
          '**Aufgabe:** Schreibe $z = -1 + \\sqrt{3}\\,\\mathrm{i}$ in Polarform.\n**Lösung:** $r = \\sqrt{(-1)^2 + (\\sqrt{3})^2} = \\sqrt{1+3} = 2$. Da $\\mathrm{Im}(z) > 0$: $\\varphi = \\arccos\\frac{-1}{2} = \\frac{2\\pi}{3}$.\n**Ergebnis:** $z = 2\\,e^{\\mathrm{i}\\,2\\pi/3}$.',
          '**Aufgabe:** Schreibe $z = -2 - 2\\mathrm{i}$ in Polarform.\n**Lösung:** $r = \\sqrt{(-2)^2+(-2)^2} = \\sqrt{8} = 2\\sqrt{2}$. Da $\\mathrm{Im}(z) < 0$: $\\varphi = 2\\pi - \\arccos\\frac{-2}{2\\sqrt{2}} = 2\\pi - \\frac{3\\pi}{4} = \\frac{5\\pi}{4}$.\n**Ergebnis:** $z = 2\\sqrt{2}\\,e^{\\mathrm{i}\\,5\\pi/4}$.',
        ],
      },
      {
        szenario: 'Polar → Kartesisch',
        beispiele: [
          '**Aufgabe:** Schreibe $z = 2\\,e^{\\mathrm{i}\\pi/3}$ in der Form $x + y\\mathrm{i}$.\n**Lösung:** $x = 2\\cos\\frac{\\pi}{3} = 2\\cdot\\frac{1}{2} = 1$, $y = 2\\sin\\frac{\\pi}{3} = 2\\cdot\\frac{\\sqrt{3}}{2} = \\sqrt{3}$.\n**Ergebnis:** $z = 1 + \\sqrt{3}\\,\\mathrm{i}$.',
          '**Aufgabe:** Schreibe $z = 3\\,e^{\\mathrm{i}\\pi}$ in der Form $x + y\\mathrm{i}$.\n**Lösung:** $x = 3\\cos\\pi = 3\\cdot(-1) = -3$, $y = 3\\sin\\pi = 3\\cdot 0 = 0$.\n**Ergebnis:** $z = -3$.',
          '**Aufgabe:** Schreibe $z = \\sqrt{2}\\,e^{\\mathrm{i}\\,3\\pi/4}$ in der Form $x + y\\mathrm{i}$.\n**Lösung:** $x = \\sqrt{2}\\cos\\frac{3\\pi}{4} = \\sqrt{2}\\cdot(-\\frac{\\sqrt{2}}{2}) = -1$, $y = \\sqrt{2}\\sin\\frac{3\\pi}{4} = \\sqrt{2}\\cdot\\frac{\\sqrt{2}}{2} = 1$.\n**Ergebnis:** $z = -1 + \\mathrm{i}$.',
        ],
      },
      {
        szenario: 'Multiplizieren in Polarform',
        beispiele: [
          '**Aufgabe:** Berechne $\\left(2\\,e^{\\mathrm{i}\\pi/6}\\right)\\cdot\\left(3\\,e^{\\mathrm{i}\\pi/3}\\right)$.\n**Lösung:** Längen multiplizieren $2\\cdot 3 = 6$, Winkel addieren $\\frac{\\pi}{6}+\\frac{\\pi}{3} = \\frac{\\pi}{2}$.\n**Ergebnis:** $6\\,e^{\\mathrm{i}\\pi/2} = 6\\mathrm{i}$.',
          '**Aufgabe:** Berechne $\\left(\\sqrt{2}\\,e^{\\mathrm{i}\\pi/4}\\right)^2$ über die Polarform.\n**Lösung:** Quadrieren = Länge quadrieren, Winkel verdoppeln: $r = (\\sqrt{2})^2 = 2$, $\\varphi = 2\\cdot\\frac{\\pi}{4} = \\frac{\\pi}{2}$.\n**Ergebnis:** $2\\,e^{\\mathrm{i}\\pi/2} = 2\\mathrm{i}$ (Probe: $(1+\\mathrm{i})^2 = 2\\mathrm{i}$).',
          '**Aufgabe:** Berechne $\\left(4\\,e^{\\mathrm{i}\\,3\\pi/4}\\right)\\cdot\\left(\\tfrac{1}{2}\\,e^{\\mathrm{i}\\pi/4}\\right)$.\n**Lösung:** Längen $4\\cdot\\frac{1}{2} = 2$, Winkel $\\frac{3\\pi}{4}+\\frac{\\pi}{4} = \\pi$.\n**Ergebnis:** $2\\,e^{\\mathrm{i}\\pi} = -2$.',
        ],
      },
    ],
  },
  {
    id: 'euler-formel',
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
    beispiele: [
      {
        szenario: 'Eulersche Formel auswerten',
        beispiele: [
          '**Aufgabe:** Berechne $e^{\\mathrm{i}\\pi}$.\n**Lösung:** $e^{\\mathrm{i}\\pi} = \\cos\\pi + \\mathrm{i}\\sin\\pi = -1 + \\mathrm{i}\\cdot 0$.\n**Ergebnis:** $e^{\\mathrm{i}\\pi} = -1$ (Eulersche Identität $e^{\\mathrm{i}\\pi}+1 = 0$).',
          '**Aufgabe:** Berechne $e^{\\mathrm{i}\\pi/2}$.\n**Lösung:** $\\cos\\frac{\\pi}{2} + \\mathrm{i}\\sin\\frac{\\pi}{2} = 0 + \\mathrm{i}\\cdot 1$.\n**Ergebnis:** $e^{\\mathrm{i}\\pi/2} = \\mathrm{i}$.',
          '**Aufgabe:** Schreibe $e^{\\mathrm{i}\\pi/3}$ in der Form $x + y\\mathrm{i}$.\n**Lösung:** $\\cos\\frac{\\pi}{3} + \\mathrm{i}\\sin\\frac{\\pi}{3} = \\frac{1}{2} + \\mathrm{i}\\cdot\\frac{\\sqrt{3}}{2}$.\n**Ergebnis:** $e^{\\mathrm{i}\\pi/3} = \\frac{1}{2} + \\frac{\\sqrt{3}}{2}\\mathrm{i}$.',
        ],
      },
      {
        szenario: 'Potenzen von $\\mathrm{i}$ berechnen',
        beispiele: [
          '**Aufgabe:** Berechne $\\mathrm{i}^{10}$.\n**Lösung:** $10 = 2\\cdot 4 + 2$, Rest $2$. Rest $2 \\to -1$.\n**Ergebnis:** $\\mathrm{i}^{10} = -1$.',
          '**Aufgabe:** Berechne $\\mathrm{i}^{23}$.\n**Lösung:** $23 = 5\\cdot 4 + 3$, Rest $3$. Rest $3 \\to -\\mathrm{i}$.\n**Ergebnis:** $\\mathrm{i}^{23} = -\\mathrm{i}$.',
          '**Aufgabe:** Berechne $\\mathrm{i}^{100}$.\n**Lösung:** $100 = 25\\cdot 4 + 0$, Rest $0$. Rest $0 \\to 1$.\n**Ergebnis:** $\\mathrm{i}^{100} = 1$.',
        ],
      },
      {
        szenario: 'Mit Potenzen von $\\mathrm{i}$ rechnen',
        beispiele: [
          '**Aufgabe:** Vereinfache $\\mathrm{i}^5 + \\mathrm{i}^7$.\n**Lösung:** $\\mathrm{i}^5$: Rest $1 \\to \\mathrm{i}$. $\\mathrm{i}^7$: Rest $3 \\to -\\mathrm{i}$. Summe $\\mathrm{i} + (-\\mathrm{i})$.\n**Ergebnis:** $\\mathrm{i}^5 + \\mathrm{i}^7 = 0$.',
          '**Aufgabe:** Vereinfache $\\mathrm{i}^{2} \\cdot \\mathrm{i}^{3}$.\n**Lösung:** Exponenten addieren: $\\mathrm{i}^{2+3} = \\mathrm{i}^5$, Rest $1 \\to \\mathrm{i}$. (Probe: $(-1)\\cdot(-\\mathrm{i}) = \\mathrm{i}$.)\n**Ergebnis:** $\\mathrm{i}$.',
          '**Aufgabe:** Berechne $\\dfrac{1}{\\mathrm{i}}$.\n**Lösung:** Mit $\\mathrm{i}$ erweitern: $\\frac{1}{\\mathrm{i}}\\cdot\\frac{\\mathrm{i}}{\\mathrm{i}} = \\frac{\\mathrm{i}}{\\mathrm{i}^2} = \\frac{\\mathrm{i}}{-1}$.\n**Ergebnis:** $\\frac{1}{\\mathrm{i}} = -\\mathrm{i}$.',
        ],
      },
    ],
  },
  {
    id: 'nte-wurzeln',
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
    beispiele: [
      {
        szenario: '$n$-te Einheitswurzeln ($z^n = 1$)',
        beispiele: [
          '**Aufgabe:** Löse $z^4 = 1$.\n**Lösung:** $1 = 1\\cdot e^{\\mathrm{i}\\cdot 0}$, also $r = 1$, $\\varphi = 0$. Lösungen $z_k = e^{\\mathrm{i}\\,2\\pi k/4}$ für $k=0,1,2,3$: Winkel $0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}$.\n**Ergebnis:** $z = 1,\\ \\mathrm{i},\\ -1,\\ -\\mathrm{i}$.',
          '**Aufgabe:** Löse $z^3 = 1$.\n**Lösung:** $r = 1$, $\\varphi = 0$. $z_k = e^{\\mathrm{i}\\,2\\pi k/3}$, $k=0,1,2$: Winkel $0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$.\n**Ergebnis:** $z = 1,\\ -\\frac{1}{2}+\\frac{\\sqrt{3}}{2}\\mathrm{i},\\ -\\frac{1}{2}-\\frac{\\sqrt{3}}{2}\\mathrm{i}$.',
          '**Aufgabe:** Löse $z^2 = 1$.\n**Lösung:** $r = 1$, $\\varphi = 0$. $z_k = e^{\\mathrm{i}\\,2\\pi k/2}$, $k=0,1$: Winkel $0$ und $\\pi$.\n**Ergebnis:** $z = 1$ und $z = -1$.',
        ],
      },
      {
        szenario: 'Wurzeln aus einer beliebigen Zahl ($z^n = w$)',
        beispiele: [
          '**Aufgabe:** Löse $z^3 = 8$.\n**Lösung:** $8 = 8\\,e^{\\mathrm{i}\\cdot 0}$, also $r = 8$, $\\varphi = 0$. Länge $8^{1/3} = 2$, Winkel $\\frac{2\\pi k}{3}$, $k=0,1,2$.\n**Ergebnis:** $z = 2,\\ -1+\\sqrt{3}\\,\\mathrm{i},\\ -1-\\sqrt{3}\\,\\mathrm{i}$.',
          '**Aufgabe:** Löse $z^2 = \\mathrm{i}$.\n**Lösung:** $\\mathrm{i} = 1\\cdot e^{\\mathrm{i}\\pi/2}$, $r = 1$, $\\varphi = \\frac{\\pi}{2}$. Länge $1$, Winkel $\\frac{\\pi/2 + 2\\pi k}{2}$: $\\frac{\\pi}{4}$ und $\\frac{5\\pi}{4}$.\n**Ergebnis:** $z = \\frac{\\sqrt{2}}{2}+\\frac{\\sqrt{2}}{2}\\mathrm{i}$ und $z = -\\frac{\\sqrt{2}}{2}-\\frac{\\sqrt{2}}{2}\\mathrm{i}$.',
          '**Aufgabe:** Löse $z^2 = -9$.\n**Lösung:** $-9 = 9\\,e^{\\mathrm{i}\\pi}$, $r = 9$, $\\varphi = \\pi$. Länge $\\sqrt{9} = 3$, Winkel $\\frac{\\pi + 2\\pi k}{2}$: $\\frac{\\pi}{2}$ und $\\frac{3\\pi}{2}$.\n**Ergebnis:** $z = 3\\mathrm{i}$ und $z = -3\\mathrm{i}$.',
        ],
      },
      {
        szenario: 'Drehen durch Multiplikation',
        beispiele: [
          '**Aufgabe:** Drehe $z = 2$ um $90°$ gegen den Uhrzeigersinn.\n**Lösung:** $90°$ gegen den Uhrzeigersinn = mal $\\mathrm{i}$: $2 \\cdot \\mathrm{i}$.\n**Ergebnis:** $2\\mathrm{i}$ (der Punkt $(2,0)$ wandert nach $(0,2)$).',
          '**Aufgabe:** Drehe $z = 1 + \\mathrm{i}$ um $90°$ gegen den Uhrzeigersinn.\n**Lösung:** Mal $\\mathrm{i}$: $(1+\\mathrm{i})\\cdot\\mathrm{i} = \\mathrm{i} + \\mathrm{i}^2 = \\mathrm{i} - 1$.\n**Ergebnis:** $-1 + \\mathrm{i}$.',
          '**Aufgabe:** Drehe $z = 3\\mathrm{i}$ um $90°$ im Uhrzeigersinn.\n**Lösung:** $90°$ im Uhrzeigersinn = mal $-\\mathrm{i}$: $3\\mathrm{i}\\cdot(-\\mathrm{i}) = -3\\mathrm{i}^2 = 3$.\n**Ergebnis:** $3$ (der Punkt $(0,3)$ wandert nach $(3,0)$).',
        ],
      },
    ],
  },
  {
    id: 'folgen-konvergenz',
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
    beispiele: [
      {
        szenario: 'Grenzwert eines Bruchterms bestimmen',
        beispiele: [
          '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty} \\frac{1}{n}$.\n**Lösung:** Mit wachsendem $n$ wird $\\frac{1}{n}$ immer kleiner ($1, 0{,}5, 0{,}33, \\ldots$) und kommt der $0$ beliebig nahe.\n**Ergebnis:** Grenzwert $0$, die Folge ist konvergent.',
          '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty} \\frac{2n+1}{n}$.\n**Lösung:** Umformen: $\\frac{2n+1}{n} = 2 + \\frac{1}{n}$. Der Anteil $\\frac{1}{n} \\to 0$.\n**Ergebnis:** Grenzwert $2$, konvergent.',
          '**Aufgabe:** Bestimme $\\lim_{n\\to\\infty} \\frac{3n^2}{n^2+1}$.\n**Lösung:** Zähler und Nenner durch $n^2$ teilen: $\\frac{3}{1 + 1/n^2}$. Der Term $\\frac{1}{n^2} \\to 0$, also $\\frac{3}{1+0}$.\n**Ergebnis:** Grenzwert $3$, konvergent.',
        ],
      },
      {
        szenario: 'Konvergenz oder Divergenz entscheiden',
        beispiele: [
          '**Aufgabe:** Konvergiert $a_n = (-1)^n$?\n**Lösung:** Die Glieder sind $-1, 1, -1, 1, \\ldots$ Sie pendeln und nähern sich keinem festen Wert.\n**Ergebnis:** Divergent (kein Grenzwert).',
          '**Aufgabe:** Konvergiert $a_n = \\frac{(-1)^n}{n}$?\n**Lösung:** Die Glieder sind $-1, \\frac{1}{2}, -\\frac{1}{3}, \\ldots$ Der Abstand zur $0$ ist $\\frac{1}{n} \\to 0$, das Vorzeichen ändert daran nichts.\n**Ergebnis:** Konvergent mit Grenzwert $0$.',
          '**Aufgabe:** Konvergiert $a_n = n^2$?\n**Lösung:** Die Glieder $1, 4, 9, 16, \\ldots$ wachsen über alle Grenzen.\n**Ergebnis:** Divergent (bestimmt divergent gegen $+\\infty$).',
        ],
      },
      {
        szenario: 'Potenzfolgen $r^n$ über den Betrag',
        beispiele: [
          '**Aufgabe:** Konvergiert $a_n = \\left(\\frac{1}{2}\\right)^n$?\n**Lösung:** Betrag $|r| = \\frac{1}{2} < 1$, daher $r^n \\to 0$. Glieder $\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, \\ldots$\n**Ergebnis:** Konvergent mit Grenzwert $0$.',
          '**Aufgabe:** Konvergiert $a_n = 2^n$?\n**Lösung:** Betrag $|r| = 2 > 1$, daher wächst $r^n$ über alle Grenzen ($2, 4, 8, \\ldots$).\n**Ergebnis:** Divergent.',
          '**Aufgabe:** Konvergiert $z_n = \\left(\\frac{1}{2}+\\frac{1}{2}\\mathrm{i}\\right)^n$?\n**Lösung:** Betrag $\\left|\\frac{1}{2}+\\frac{1}{2}\\mathrm{i}\\right| = \\sqrt{\\frac{1}{4}+\\frac{1}{4}} = \\frac{1}{\\sqrt{2}} < 1$, also geht der Betrag gegen $0$.\n**Ergebnis:** Konvergent mit Grenzwert $0$.',
        ],
      },
    ],
  },

  // ===== Relationen =====
  {
    id: 'relationen-eigenschaften',
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
    beispiele: [
      {
        szenario: 'Reflexiv / irreflexiv prüfen',
        beispiele: [
          '**Aufgabe:** Ist „$\\leq$" auf $\\{1,2,3\\}$ reflexiv?\n**Lösung:** Reflexiv heißt $xRx$ für alle $x$. Hier $1\\leq 1$, $2\\leq 2$, $3\\leq 3$ – alle wahr.\n**Ergebnis:** Ja, reflexiv.',
          '**Aufgabe:** Ist „$<$" auf $\\{1,2,3\\}$ reflexiv?\n**Lösung:** Es müsste $1<1$ gelten, das ist falsch. Sogar kein einziges $x$ steht zu sich selbst in Beziehung.\n**Ergebnis:** Nicht reflexiv; sie ist sogar irreflexiv.',
          '**Aufgabe:** Ist $R = \\{(1,1),(2,2)\\}$ auf $M = \\{1,2,3\\}$ reflexiv?\n**Lösung:** Es fehlt das Paar $(3,3)$, also steht $3$ nicht zu sich selbst in Beziehung.\n**Ergebnis:** Nicht reflexiv (und auch nicht irreflexiv, da $(1,1)$ enthalten ist).',
        ],
      },
      {
        szenario: 'Symmetrie / Antisymmetrie prüfen',
        beispiele: [
          '**Aufgabe:** Ist $R = \\{(1,2),(2,1),(3,3)\\}$ symmetrisch?\n**Lösung:** Zu $(1,2)$ ist $(2,1)$ da, zu $(3,3)$ ist es selbst da. Jedes Paar hat sein Gegenstück.\n**Ergebnis:** Ja, symmetrisch.',
          '**Aufgabe:** Ist „$\\leq$" auf $\\mathbb{Z}$ antisymmetrisch?\n**Lösung:** Gilt $x \\leq y$ und $y \\leq x$, so muss $x = y$ sein. Genau das ist Antisymmetrie.\n**Ergebnis:** Ja, antisymmetrisch.',
          '**Aufgabe:** Ist $R = \\{(1,2),(2,1)\\}$ auf $\\{1,2\\}$ antisymmetrisch?\n**Lösung:** Es gilt $1R2$ und $2R1$, aber $1 \\neq 2$. Die Bedingung wird verletzt.\n**Ergebnis:** Nicht antisymmetrisch (aber symmetrisch).',
        ],
      },
      {
        szenario: 'Transitivität prüfen',
        beispiele: [
          '**Aufgabe:** Ist „$<$" auf $\\mathbb{Z}$ transitiv?\n**Lösung:** Aus $x < y$ und $y < z$ folgt $x < z$. Beispiel: $1 < 2$ und $2 < 5$ ergibt $1 < 5$.\n**Ergebnis:** Ja, transitiv.',
          '**Aufgabe:** Ist $R = \\{(1,2),(2,3)\\}$ auf $\\{1,2,3\\}$ transitiv?\n**Lösung:** Es gilt $1R2$ und $2R3$, also müsste $1R3$ enthalten sein – ist es aber nicht.\n**Ergebnis:** Nicht transitiv (es fehlt $(1,3)$).',
          '**Aufgabe:** Ist $R = \\{(1,2),(2,3),(1,3)\\}$ auf $\\{1,2,3\\}$ transitiv?\n**Lösung:** Die einzige Kette ist $1R2$ und $2R3$; die nötige Abkürzung $(1,3)$ ist vorhanden.\n**Ergebnis:** Ja, transitiv.',
        ],
      },
    ],
  },
  {
    id: 'aequivalenz-ordnung',
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
    beispiele: [
      {
        szenario: 'Äquivalenzrelation prüfen',
        beispiele: [
          '**Aufgabe:** Ist „$=$" auf $\\mathbb{Z}$ eine Äquivalenzrelation?\n**Lösung:** Reflexiv ($x=x$), symmetrisch ($x=y \\Rightarrow y=x$), transitiv ($x=y, y=z \\Rightarrow x=z$). Alle drei erfüllt.\n**Ergebnis:** Ja, Gleichheit ist die einfachste Äquivalenzrelation.',
          '**Aufgabe:** Ist „kongruent modulo $3$" auf $\\mathbb{Z}$ eine Äquivalenzrelation?\n**Lösung:** $x \\equiv x$ (Rest gleich), Symmetrie und Transitivität der Restgleichheit gelten. Alle drei Eigenschaften erfüllt.\n**Ergebnis:** Ja; sie zerlegt $\\mathbb{Z}$ in die drei Klassen der Reste $0, 1, 2$.',
          '**Aufgabe:** Ist „$\\leq$" auf $\\mathbb{Z}$ eine Äquivalenzrelation?\n**Lösung:** Reflexiv und transitiv ja, aber symmetrisch nein: $1 \\leq 2$, aber nicht $2 \\leq 1$.\n**Ergebnis:** Nein (Symmetrie fehlt).',
        ],
      },
      {
        szenario: 'Äquivalenzklassen bestimmen',
        beispiele: [
          '**Aufgabe:** Bestimme die Klassen von „kongruent modulo $2$" auf $\\mathbb{Z}$.\n**Lösung:** Zwei Zahlen sind äquivalent, wenn sie denselben Rest bei Teilung durch $2$ haben (gerade oder ungerade).\n**Ergebnis:** Zwei Klassen: $[0] = $ gerade Zahlen, $[1] = $ ungerade Zahlen.',
          '**Aufgabe:** Bestimme $[2]$ für „kongruent modulo $3$" auf $\\mathbb{Z}$.\n**Lösung:** Alle Zahlen mit Rest $2$ bei Teilung durch $3$: $\\ldots, -1, 2, 5, 8, \\ldots$\n**Ergebnis:** $[2] = \\{3k + 2 : k \\in \\mathbb{Z}\\}$.',
          '**Aufgabe:** Wie viele Klassen hat „kongruent modulo $5$" auf $\\mathbb{Z}$?\n**Lösung:** Jeder Rest $0,1,2,3,4$ bildet eine eigene Klasse; alle Klassen zusammen ergeben eine Partition von $\\mathbb{Z}$.\n**Ergebnis:** Genau $5$ Klassen.',
        ],
      },
      {
        szenario: 'Ordnung prüfen (partiell / total)',
        beispiele: [
          '**Aufgabe:** Ist „$\\leq$" auf $\\mathbb{R}$ eine totale Ordnung?\n**Lösung:** Reflexiv, antisymmetrisch, transitiv – also partielle Ordnung. Zusätzlich sind je zwei Zahlen vergleichbar ($x \\leq y$ oder $y \\leq x$).\n**Ergebnis:** Ja, totale Ordnung.',
          '**Aufgabe:** Ist die Teilbarkeit „$a \\mid b$" auf $\\mathbb{N}^*$ eine totale Ordnung?\n**Lösung:** Sie ist reflexiv, antisymmetrisch und transitiv (partielle Ordnung). Aber $2$ und $3$ sind unvergleichbar: weder $2 \\mid 3$ noch $3 \\mid 2$.\n**Ergebnis:** Nur partielle Ordnung, nicht total.',
          '**Aufgabe:** Ist „$<$" auf $\\mathbb{R}$ eine partielle Ordnung?\n**Lösung:** Eine partielle Ordnung muss reflexiv sein, aber $x < x$ ist nie wahr.\n**Ergebnis:** Nein (Reflexivität fehlt); „$<$" ist eine strikte Ordnung.',
        ],
      },
    ],
  },
  {
    id: 'relationen-verkettung',
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
    beispiele: [
      {
        szenario: 'Umkehrrelation bilden',
        beispiele: [
          '**Aufgabe:** Bestimme $R^{-1}$ für $R = \\{(1,2),(2,3)\\}$.\n**Lösung:** Jedes Paar umdrehen: $(1,2) \\to (2,1)$, $(2,3) \\to (3,2)$.\n**Ergebnis:** $R^{-1} = \\{(2,1),(3,2)\\}$.',
          '**Aufgabe:** Bestimme $R^{-1}$ für die Relation „$<$" auf $\\{1,2,3\\}$.\n**Lösung:** „$<$" enthält $(1,2),(1,3),(2,3)$. Umdrehen liefert die Relation „$>$".\n**Ergebnis:** $R^{-1} = \\{(2,1),(3,1),(3,2)\\}$, also „$>$".',
          '**Aufgabe:** Was ist $R^{-1}$, wenn $R$ symmetrisch ist (z. B. $R = \\{(1,2),(2,1)\\}$)?\n**Lösung:** Bei symmetrischen Relationen ist zu jedem Paar das umgekehrte schon da, also $R^{-1} = R$.\n**Ergebnis:** $R^{-1} = \\{(1,2),(2,1)\\} = R$.',
        ],
      },
      {
        szenario: 'Verkettung $S \\circ R$ berechnen',
        beispiele: [
          '**Aufgabe:** Bestimme $S \\circ R$ für $R = \\{(1,2)\\}$, $S = \\{(2,3)\\}$.\n**Lösung:** Von rechts nach links: $1 \\xrightarrow{R} 2 \\xrightarrow{S} 3$. Zwischenelement $b = 2$ verbindet.\n**Ergebnis:** $S \\circ R = \\{(1,3)\\}$.',
          '**Aufgabe:** Bestimme $S \\circ R$ für $R = \\{(1,2),(1,3)\\}$, $S = \\{(2,4),(3,5)\\}$.\n**Lösung:** $1 \\to 2 \\to 4$ ergibt $(1,4)$; $1 \\to 3 \\to 5$ ergibt $(1,5)$.\n**Ergebnis:** $S \\circ R = \\{(1,4),(1,5)\\}$.',
          '**Aufgabe:** Bestimme $R \\circ R$ (also $R^2$) für $R = \\{(1,2),(2,3)\\}$.\n**Lösung:** Wege der Länge $2$: $1 \\to 2 \\to 3$ ergibt $(1,3)$. Andere Verkettungen gibt es nicht.\n**Ergebnis:** $R^2 = \\{(1,3)\\}$.',
        ],
      },
      {
        szenario: 'Hüllen bilden',
        beispiele: [
          '**Aufgabe:** Reflexive Hülle von $R = \\{(1,2)\\}$ auf $M = \\{1,2\\}$.\n**Lösung:** $R \\cup I_M$ mit $I_M = \\{(1,1),(2,2)\\}$. Die fehlenden Selbstpaare ergänzen.\n**Ergebnis:** $\\{(1,2),(1,1),(2,2)\\}$.',
          '**Aufgabe:** Symmetrische Hülle von $R = \\{(1,2),(2,3)\\}$.\n**Lösung:** $R \\cup R^{-1}$ mit $R^{-1} = \\{(2,1),(3,2)\\}$. Zu jedem Paar das umgekehrte hinzufügen.\n**Ergebnis:** $\\{(1,2),(2,3),(2,1),(3,2)\\}$.',
          '**Aufgabe:** Transitive Hülle von $R = \\{(1,2),(2,3)\\}$.\n**Lösung:** Aus $1\\to 2 \\to 3$ ergänzen wir $(1,3)$. Danach entstehen keine neuen Abkürzungen mehr.\n**Ergebnis:** $\\{(1,2),(2,3),(1,3)\\}$.',
        ],
      },
    ],
  },

  // ===== Gruppen =====
  {
    id: 'gruppenaxiome',
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
    beispiele: [
      {
        szenario: 'Ist es eine Gruppe? (Axiome durchgehen)',
        beispiele: [
          '**Aufgabe:** Ist $(\\mathbb{Z}, +)$ eine Gruppe?\n**Lösung:** Abgeschlossen (Summe ganzer Zahlen ist ganz), assoziativ, Neutralelement $0$, Inverses zu $a$ ist $-a$.\n**Ergebnis:** Ja, $(\\mathbb{Z}, +)$ ist sogar eine abelsche Gruppe.',
          '**Aufgabe:** Ist $(\\mathbb{N}, +)$ eine Gruppe?\n**Lösung:** Abgeschlossen und assoziativ, Neutralelement $0$. Aber zu $a = 3$ fehlt das Inverse $-3$, denn $-3 \\notin \\mathbb{N}$.\n**Ergebnis:** Nein (keine Inversen).',
          '**Aufgabe:** Ist $(\\mathbb{Q}\\setminus\\{0\\}, \\cdot)$ eine Gruppe?\n**Lösung:** Produkt zweier von $0$ verschiedener Brüche ist wieder so einer (abgeschlossen), assoziativ, Neutralelement $1$, Inverses zu $a$ ist $\\frac{1}{a}$.\n**Ergebnis:** Ja, abelsche Gruppe.',
        ],
      },
      {
        szenario: 'Neutralelement & Inverses bestimmen',
        beispiele: [
          '**Aufgabe:** Neutralelement und Inverses von $5$ in $(\\mathbb{Z}, +)$?\n**Lösung:** Bei der Addition ist das Neutralelement $0$ (ändert nichts), das Inverse macht die Summe $0$: $5 + (-5) = 0$.\n**Ergebnis:** Neutralelement $0$, Inverses $-5$.',
          '**Aufgabe:** Neutralelement und Inverses von $4$ in $((0,\\infty), \\cdot)$?\n**Lösung:** Bei der Multiplikation ist das Neutralelement $1$, das Inverse erfüllt $4 \\cdot x = 1$, also $x = \\frac{1}{4}$.\n**Ergebnis:** Neutralelement $1$, Inverses $\\frac{1}{4}$.',
          '**Aufgabe:** Inverses von $[2]$ in $(\\mathbb{Z}_5, +)$?\n**Lösung:** Gesucht $[2] + [x] = [0]$, also $x = 5 - 2 = 3$. Probe: $2 + 3 = 5 \\equiv 0$.\n**Ergebnis:** Inverses ist $[3]$.',
        ],
      },
      {
        szenario: 'Abelsch oder nicht?',
        beispiele: [
          '**Aufgabe:** Ist $(\\mathbb{Z}, +)$ abelsch?\n**Lösung:** $a + b = b + a$ gilt für alle ganzen Zahlen, z. B. $3 + 5 = 5 + 3 = 8$.\n**Ergebnis:** Ja, abelsch.',
          '**Aufgabe:** Ist die Gruppe der invertierbaren $2{\\times}2$-Matrizen $\\mathrm{GL}_2(\\mathbb{R})$ abelsch?\n**Lösung:** Matrizenmultiplikation ist im Allgemeinen nicht kommutativ; man findet leicht $A, B$ mit $AB \\neq BA$.\n**Ergebnis:** Nein, nicht abelsch.',
          '**Aufgabe:** Ist $((0,\\infty), \\cdot)$ abelsch?\n**Lösung:** $a \\cdot b = b \\cdot a$ gilt für alle positiven reellen Zahlen, z. B. $2 \\cdot 3 = 3 \\cdot 2$.\n**Ergebnis:** Ja, abelsch.',
        ],
      },
    ],
  },
  {
    id: 'wichtige-gruppen',
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
    beispiele: [
      {
        szenario: 'Standardgruppe nachweisen',
        beispiele: [
          '**Aufgabe:** Zeige, dass $(2\\mathbb{Z}, +)$ eine Gruppe ist.\n**Lösung:** $2\\mathbb{Z} = \\{\\ldots,-4,-2,0,2,4,\\ldots\\}$. Summe zweier gerader Zahlen ist gerade (abgeschlossen), $0$ ist gerade (Neutralelement), zu $2k$ ist $-2k$ gerade (Inverses), Assoziativität erbt man von $\\mathbb{Z}$.\n**Ergebnis:** Ja, $(2\\mathbb{Z}, +)$ ist eine (abelsche) Gruppe.',
          '**Aufgabe:** Ist $E = \\{1, \\mathrm{i}, -1, -\\mathrm{i}\\}$ mit $\\cdot$ eine Gruppe?\n**Lösung:** Produkte bleiben in $E$ (z. B. $\\mathrm{i}\\cdot\\mathrm{i} = -1$), Neutralelement $1$, Inverse: $\\mathrm{i}^{-1} = -\\mathrm{i}$, $(-1)^{-1} = -1$. Assoziativität erbt man von $\\mathbb{C}$.\n**Ergebnis:** Ja, die vierten Einheitswurzeln bilden eine Gruppe.',
          '**Aufgabe:** Ist der Einheitskreis $T = \\{z : |z| = 1\\}$ mit $\\cdot$ eine Gruppe?\n**Lösung:** $|zw| = |z||w| = 1$ (abgeschlossen), $1 \\in T$ (Neutralelement), $z^{-1} = \\overline{z}$ hat ebenfalls Betrag $1$ (Inverses).\n**Ergebnis:** Ja, $T$ ist eine Gruppe.',
        ],
      },
      {
        szenario: 'Gegenbeispiel begründen',
        beispiele: [
          '**Aufgabe:** Ist $(\\mathbb{N}, +)$ eine Gruppe?\n**Lösung:** Suche das verletzte Axiom: zu $a = 1$ fehlt das Inverse $-1 \\notin \\mathbb{N}$.\n**Ergebnis:** Nein – keine Inversen.',
          '**Aufgabe:** Ist $((0,\\infty), +)$ eine Gruppe?\n**Lösung:** Das Neutralelement der Addition wäre $0$, aber $0 \\notin (0,\\infty)$.\n**Ergebnis:** Nein – Neutralelement fehlt.',
          '**Aufgabe:** Ist $((-\\infty, 0), \\cdot)$ eine Gruppe?\n**Lösung:** Abgeschlossenheit prüfen: $(-1)\\cdot(-2) = 2 \\notin (-\\infty, 0)$. Das Produkt verlässt die Menge.\n**Ergebnis:** Nein – nicht abgeschlossen.',
        ],
      },
      {
        szenario: 'Cayley-Tafel-Test',
        beispiele: [
          '**Aufgabe:** Prüfe an der Tafel von $(\\mathbb{Z}_3, +)$, ob es eine Gruppe ist.\n**Lösung:** Zeile $[1]$: $[1]+[0]=[1]$, $[1]+[1]=[2]$, $[1]+[2]=[0]$ – jedes Element kommt genau einmal vor. Gleiches in allen Zeilen/Spalten.\n**Ergebnis:** Lateinisches Quadrat → konsistent mit einer Gruppe.',
          '**Aufgabe:** Warum verrät eine doppelte Eintragung in einer Zeile, dass keine Gruppe vorliegt?\n**Lösung:** Käme ein Element in der Zeile von $a$ zweimal vor, gäbe es $b \\neq c$ mit $a \\star b = a \\star c$; durch Linksmultiplikation mit $a^{-1}$ folgte $b = c$ – Widerspruch.\n**Ergebnis:** In jeder Gruppenzeile steht jedes Element genau einmal.',
          '**Aufgabe:** Ist eine Tafel mit der Zeile $a: a, a, b$ Teil einer Gruppe?\n**Lösung:** Das Element $a$ taucht in der Zeile doppelt auf, $b$ fehlt – kein lateinisches Quadrat.\n**Ergebnis:** Nein, das kann keine Gruppentafel sein.',
        ],
      },
    ],
  },
  {
    id: 'symmetrische-gruppe-s3',
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
      'Bei $f \\circ g$ wird zuerst $g$ angewandt, dann $f$ (von rechts nach links lesen). Beispiel $(12)\\circ(23)$ – also erst $(23)$, dann $(12)$:\n' +
      '$1 \\xrightarrow{(23)} 1 \\xrightarrow{(12)} 2$,  $2 \\xrightarrow{(23)} 3 \\xrightarrow{(12)} 3$,  $3 \\xrightarrow{(23)} 2 \\xrightarrow{(12)} 1$. Ergebnis: $1\\to 2, 2\\to 3, 3\\to 1$, also $(123)$.\n' +
      '\n' +
      '**Inverse Elemente**\n' +
      'Jede Vertauschung zweier Elemente (eine Transposition) ist zu sich selbst invers: zweimal vertauscht ergibt den Ausgangszustand. Bei Dreierzyklen gilt $(123)^{-1} = (132)$ (Pfeile umdrehen).\n' +
      '\n' +
      '**$S_3$ ist nicht kommutativ**\n' +
      'Die Reihenfolge ändert das Ergebnis: $(12)\\circ(23) = (123)$, aber $(23)\\circ(12) = (132)$. Wegen $(123) \\neq (132)$ ist $S_3$ nicht kommutativ – ein zentrales Merkmal dieser Gruppe.',
    beispiele: [
      {
        szenario: 'Permutation auf Elemente anwenden',
        beispiele: [
          '**Aufgabe:** Wende $(123)$ auf jedes Element von $\\{1,2,3\\}$ an.\n**Lösung:** Der Zyklus $(123)$ schiebt im Kreis: $1\\to 2$, $2\\to 3$, $3\\to 1$.\n**Ergebnis:** $1\\mapsto 2,\\ 2\\mapsto 3,\\ 3\\mapsto 1$.',
          '**Aufgabe:** Wende $(13)$ auf $\\{1,2,3\\}$ an.\n**Lösung:** Transposition $(13)$ vertauscht $1$ und $3$, lässt $2$ fest.\n**Ergebnis:** $1\\mapsto 3,\\ 2\\mapsto 2,\\ 3\\mapsto 1$.',
          '**Aufgabe:** Was macht $\\mathrm{id}$ mit den Elementen?\n**Lösung:** Die Identität lässt alles unverändert.\n**Ergebnis:** $1\\mapsto 1,\\ 2\\mapsto 2,\\ 3\\mapsto 3$.',
        ],
      },
      {
        szenario: 'Zwei Permutationen verknüpfen (erst rechts, dann links)',
        beispiele: [
          '**Aufgabe:** Berechne $(12)\\circ(23)$ (erst $(23)$, dann $(12)$).\n**Lösung:** $1\\xrightarrow{(23)}1\\xrightarrow{(12)}2$; $2\\xrightarrow{(23)}3\\xrightarrow{(12)}3$; $3\\xrightarrow{(23)}2\\xrightarrow{(12)}1$. Also $1\\to 2, 2\\to 3, 3\\to 1$.\n**Ergebnis:** $(12)\\circ(23) = (123)$.',
          '**Aufgabe:** Berechne $(23)\\circ(12)$ (erst $(12)$, dann $(23)$).\n**Lösung:** $1\\xrightarrow{(12)}2\\xrightarrow{(23)}3$; $2\\xrightarrow{(12)}1\\xrightarrow{(23)}1$; $3\\xrightarrow{(12)}3\\xrightarrow{(23)}2$. Also $1\\to 3, 2\\to 1, 3\\to 2$.\n**Ergebnis:** $(23)\\circ(12) = (132)$ – anders als oben, $S_3$ ist nicht kommutativ.',
          '**Aufgabe:** Berechne $(123)\\circ(123)$.\n**Lösung:** Zweimal im Kreis schieben: $1\\to 2\\to 3$; $2\\to 3\\to 1$; $3\\to 1\\to 2$. Also $1\\to 3, 2\\to 1, 3\\to 2$.\n**Ergebnis:** $(123)^2 = (132)$.',
        ],
      },
      {
        szenario: 'Inverses bestimmen',
        beispiele: [
          '**Aufgabe:** Bestimme das Inverse von $(12)$.\n**Lösung:** Eine Transposition rückgängig machen heißt nochmal vertauschen: $(12)\\circ(12) = \\mathrm{id}$.\n**Ergebnis:** $(12)^{-1} = (12)$ (selbstinvers).',
          '**Aufgabe:** Bestimme das Inverse von $(123)$.\n**Lösung:** Pfeile umdrehen: aus $1\\to 2\\to 3\\to 1$ wird $1\\to 3, 3\\to 2, 2\\to 1$, also $(132)$. Probe: $(123)\\circ(132) = \\mathrm{id}$.\n**Ergebnis:** $(123)^{-1} = (132)$.',
          '**Aufgabe:** Bestimme das Inverse von $(132)$.\n**Lösung:** Umkehrung des vorigen Falls: $(132)^{-1} = (123)$.\n**Ergebnis:** $(132)^{-1} = (123)$.',
        ],
      },
    ],
  },

  // ===== Restklassen =====
  {
    id: 'restklassen-zn',
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
    beispiele: [
      {
        szenario: 'Addieren & Multiplizieren modulo $n$',
        beispiele: [
          '**Aufgabe:** Berechne $[4] + [5]$ in $\\mathbb{Z}_6$.\n**Lösung:** $4 + 5 = 9$, Rest beim Teilen durch $6$: $9 = 1\\cdot 6 + 3$.\n**Ergebnis:** $[4] + [5] = [3]$.',
          '**Aufgabe:** Berechne $[3] \\cdot [5]$ in $\\mathbb{Z}_7$.\n**Lösung:** $3 \\cdot 5 = 15$, Rest beim Teilen durch $7$: $15 = 2\\cdot 7 + 1$.\n**Ergebnis:** $[3] \\cdot [5] = [1]$.',
          '**Aufgabe:** Berechne $[7] + [8]$ in $\\mathbb{Z}_{10}$.\n**Lösung:** $7 + 8 = 15$, Rest beim Teilen durch $10$: $15 = 1\\cdot 10 + 5$.\n**Ergebnis:** $[7] + [8] = [5]$.',
        ],
      },
      {
        szenario: 'Negative Reste & additives Inverses',
        beispiele: [
          '**Aufgabe:** Schreibe $[-3]$ in $\\mathbb{Z}_7$ mit Vertreter in $\\{0,\\ldots,6\\}$.\n**Lösung:** $-3 + 7 = 4$.\n**Ergebnis:** $[-3] = [4]$.',
          '**Aufgabe:** Bestimme das additive Inverse von $[3]$ in $\\mathbb{Z}_8$.\n**Lösung:** Gesucht $[3] + [x] = [0]$, also $x = 8 - 3 = 5$. Probe: $3 + 5 = 8 \\equiv 0$.\n**Ergebnis:** $-[3] = [5]$.',
          '**Aufgabe:** Bestimme das additive Inverse von $[5]$ in $\\mathbb{Z}_{12}$.\n**Lösung:** $x = 12 - 5 = 7$. Probe: $5 + 7 = 12 \\equiv 0$.\n**Ergebnis:** $-[5] = [7]$.',
        ],
      },
      {
        szenario: 'Ordnung eines Elements bestimmen',
        beispiele: [
          '**Aufgabe:** Bestimme $\\mathrm{ord}([4])$ in $(\\mathbb{Z}_6, +)$.\n**Lösung:** $\\mathrm{ord}([k]) = \\frac{n}{\\mathrm{ggT}(k,n)} = \\frac{6}{\\mathrm{ggT}(4,6)} = \\frac{6}{2}$. Probe: $4, 8\\equiv 2, 12\\equiv 0$ – drei Schritte.\n**Ergebnis:** $\\mathrm{ord}([4]) = 3$.',
          '**Aufgabe:** Bestimme $\\mathrm{ord}([3])$ in $(\\mathbb{Z}_{12}, +)$.\n**Lösung:** $\\frac{12}{\\mathrm{ggT}(3,12)} = \\frac{12}{3} = 4$. Probe: $3, 6, 9, 12\\equiv 0$.\n**Ergebnis:** $\\mathrm{ord}([3]) = 4$.',
          '**Aufgabe:** Bestimme $\\mathrm{ord}([2])$ in $(\\mathbb{Z}_{10}, +)$.\n**Lösung:** $\\frac{10}{\\mathrm{ggT}(2,10)} = \\frac{10}{2} = 5$. Probe: $2,4,6,8,10\\equiv 0$.\n**Ergebnis:** $\\mathrm{ord}([2]) = 5$.',
        ],
      },
    ],
  },
]
