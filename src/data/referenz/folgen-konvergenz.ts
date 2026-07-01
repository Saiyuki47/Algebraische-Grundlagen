import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'folgen-konvergenz',
  titel: 'Konvergenz & Divergenz von Folgen',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine **Folge** ordnet jeder natürlichen Zahl $n$ eine Zahl $z_n$ zu — man schreibt die Folge als $(z_n)_{n\\in\\mathbb{N}}$ oder kurz $(z_n)$. Formal ist eine komplexe Zahlenfolge eine **Abbildung von ℕ nach ℂ**. Die zentrale Frage: nähern sich die Glieder $z_1, z_2, z_3, \\dots$ auf Dauer einer festen Zahl an? Wenn ja, heißt die Folge **konvergent** und diese Zahl ist ihr **Grenzwert**. Konvergenz ist die Grundlage von Grenzwerten, Reihen und Stetigkeit; komplex läuft alles völlig analog zum reellen Fall, nur dass „Abstand" jetzt der Betrag $\\lvert z_n - z\\rvert$ in der Gaußschen Zahlenebene ist.\n' +
    '\n' +
    '**Definition: Konvergenz (Epsilon-N)**\n' +
    'Eine Folge $(z_n)$ **konvergiert** gegen einen Grenzwert $z \\in \\mathbb{C}$, wenn es zu **jedem** $\\varepsilon > 0$ ein $N \\in \\mathbb{N}$ gibt, sodass für **alle** $n \\ge N$ gilt $\\lvert z_n - z\\rvert < \\varepsilon$. In Quantoren:\n' +
    '$\\forall\\,\\varepsilon > 0\\ \\exists\\,N \\in \\mathbb{N}\\ \\forall\\,n \\ge N:\\ \\lvert z_n - z\\rvert < \\varepsilon$.\n' +
    'Anschaulich: egal wie klein man die Toleranz $\\varepsilon$ wählt, ab einem Index $N$ liegen **alle** weiteren Glieder in der $\\varepsilon$-Kreisscheibe $\\{w \\in \\mathbb{C} : \\lvert w - z\\rvert < \\varepsilon\\}$ um $z$ (im Reellen ist das das offene Intervall $(z-\\varepsilon,\\ z+\\varepsilon)$). Man nennt $z$ dann den **Grenzwert** und schreibt $\\lim_{n\\to\\infty} z_n = z$ oder $z_n \\to z$. Der Grenzwert ist **eindeutig**: eine Folge kann höchstens einen Grenzwert haben.\n' +
    '\n' +
    '**Divergenz und Nullfolge**\n' +
    'Eine Folge heißt **divergent**, wenn sie **nicht** konvergiert — es gibt also keine Zahl $z$, gegen die sie im obigen Sinn strebt (z. B. weil die Glieder springen oder unbeschränkt wachsen). Eine konvergente Folge mit Grenzwert $0$ heißt **Nullfolge**: $z_n \\to 0$, d. h. $\\lvert z_n\\rvert \\to 0$. Nullfolgen sind der wichtigste Spezialfall, denn $z_n \\to z$ gilt **genau dann**, wenn $(z_n - z)$ eine Nullfolge ist.\n' +
    '\n' +
    '**Real- und Imaginärteil einzeln (das Hauptwerkzeug)**\n' +
    'Schreibe $z_n = x_n + \\mathrm{i}\\,y_n$ und $z = x + \\mathrm{i}\\,y$ mit reellen $x_n, y_n, x, y$. Dann gilt:\n' +
    '$z_n \\to z$ **genau dann, wenn** $x_n \\to x$ **und** $y_n \\to y$.\n' +
    'Eine komplexe Folge konvergiert also **genau dann**, wenn Real- **und** Imaginärteil (als reelle Folgen) konvergieren; der Grenzwert setzt sich komponentenweise zusammen. Damit führt man jede komplexe Konvergenzfrage auf zwei vertraute reelle zurück. Grund: $\\lvert x_n - x\\rvert \\le \\lvert z_n - z\\rvert$ und $\\lvert y_n - y\\rvert \\le \\lvert z_n - z\\rvert$ sowie $\\lvert z_n - z\\rvert \\le \\lvert x_n - x\\rvert + \\lvert y_n - y\\rvert$.\n' +
    '\n' +
    '**Wichtiger Baustein: die geometrische Folge $z^n$**\n' +
    'Für festes $z \\in \\mathbb{C}$ betrachte $(z^n) = z, z^2, z^3, \\dots$. Wegen $\\lvert z^n\\rvert = \\lvert z\\rvert^n$ entscheidet allein der **Betrag**:\n' +
    '| Fall | Verhalten von $(z^n)$ |\n' +
    '|---|---|\n' +
    '| $\\lvert z\\rvert < 1$ | konvergiert gegen $0$ (**Nullfolge**), da $\\lvert z\\rvert^n \\to 0$ |\n' +
    '| $z = 1$ | konstant $1$, konvergiert gegen $1$ |\n' +
    '| $\\lvert z\\rvert = 1,\\ z \\neq 1$ | **divergent** (läuft auf dem Einheitskreis, springt) |\n' +
    '| $\\lvert z\\rvert > 1$ | **divergent** (unbeschränkt, $\\lvert z\\rvert^n \\to \\infty$) |\n' +
    'Merke also: $z^n \\to 0$ für $\\lvert z\\rvert < 1$ und $(z^n)$ divergiert für $\\lvert z\\rvert > 1$.\n' +
    '\n' +
    '**Wie prüft man Konvergenz? (Schritt für Schritt)**\n' +
    '1. **Vermutung** aufstellen: wohin läuft $(z_n)$? Erste Glieder $z_1, z_2, z_3, \\dots$ ausrechnen bzw. skizzieren.\n' +
    '2. **Betrag prüfen:** ist $(z_n)$ von der Form $z^n$ oder ähnlich, entscheidet $\\lvert z\\rvert$ (Tabelle oben). $\\lvert z_n\\rvert \\to 0$ heißt $z_n \\to 0$.\n' +
    '3. **Komponenten trennen:** sonst $z_n = x_n + \\mathrm{i}\\,y_n$ zerlegen und Real- und Imaginärteil getrennt als reelle Folgen untersuchen.\n' +
    '4. **Grenzwert bestätigen:** $z = x + \\mathrm{i}\\,y$ bilden; formal $\\lvert z_n - z\\rvert \\to 0$ zeigen (bzw. via Epsilon-N).\n' +
    '5. **Divergenz nachweisen:** zwei Teilfolgen mit verschiedenen Häufungswerten finden — dann kann es keinen eindeutigen Grenzwert geben.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• $\\varepsilon$ und $N$ vertauschen: $N$ darf (und muss meist) von $\\varepsilon$ abhängen — zu kleinerem $\\varepsilon$ gehört i. d. R. ein größeres $N$.\n' +
    '• „Ab einem $N$ für **alle** $n \\ge N$": es genügt **nicht**, dass unendlich viele Glieder nahe bei $z$ liegen (z. B. $i^n$ trifft $1$ unendlich oft, konvergiert aber nicht).\n' +
    '• Aus „$\\lvert z_n\\rvert$ konvergiert" auf „$z_n$ konvergiert" schließen — falsch: für $z_n = \\mathrm{i}^n$ ist $\\lvert z_n\\rvert = 1$ konvergent, $(z_n)$ selbst aber divergent.\n' +
    '• Bei $\\lvert z\\rvert = 1$ (Betrag $1$, aber $z \\neq 1$) fälschlich Konvergenz annehmen.\n' +
    '• Real-/Imaginärteil-Kriterium nur „halb" anwenden: **beide** Teilfolgen müssen konvergieren.',
  beispiele: [
    {
      szenario: 'Definition & Real-/Imaginärteil-Kriterium',
      beispiele: [
        '**Aufgabe:** Untersuche $z_n = \\dfrac{1}{n} + \\Big(1 - \\dfrac{1}{n}\\Big)\\mathrm{i}$ auf Konvergenz und gib ggf. den Grenzwert an.\n**Lösung:** Real- und Imaginärteil einzeln: $x_n = \\frac{1}{n} \\to 0$ und $y_n = 1 - \\frac{1}{n} \\to 1$. Beide reellen Folgen konvergieren, also konvergiert $(z_n)$ mit $z = 0 + 1\\cdot\\mathrm{i}$.\n**Ergebnis:** $z_n \\to \\mathrm{i}$.',
        '**Aufgabe:** Konvergiert $z_n = \\dfrac{n}{n+1} - \\dfrac{2}{n}\\,\\mathrm{i}$?\n**Lösung:** $x_n = \\frac{n}{n+1} = 1 - \\frac{1}{n+1} \\to 1$ und $y_n = -\\frac{2}{n} \\to 0$. Beide Teilfolgen konvergieren, Grenzwert komponentenweise $z = 1 + 0\\cdot\\mathrm{i}$.\n**Ergebnis:** $z_n \\to 1$.',
        '**Aufgabe:** Zeige mit der Definition, dass $z_n = \\dfrac{\\mathrm{i}}{n}$ eine Nullfolge ist.\n**Lösung:** Abstand zum vermuteten Grenzwert $0$: $\\lvert z_n - 0\\rvert = \\big\\lvert \\frac{\\mathrm{i}}{n}\\big\\rvert = \\frac{1}{n}$. Sei $\\varepsilon > 0$; wähle $N$ mit $\\frac{1}{N} < \\varepsilon$ (also $N > \\frac{1}{\\varepsilon}$). Für alle $n \\ge N$ gilt $\\lvert z_n\\rvert = \\frac{1}{n} \\le \\frac{1}{N} < \\varepsilon$.\n**Ergebnis:** $z_n \\to 0$, also Nullfolge.',
      ],
    },
    {
      szenario: 'Geometrische Folge zⁿ (Betrag entscheidet)',
      beispiele: [
        '**Aufgabe:** Konvergiert $w_n = \\Big(\\dfrac{1}{2} + \\dfrac{1}{2}\\,\\mathrm{i}\\Big)^n$? (Übungsblatt 2)\n**Lösung:** Das ist $z^n$ mit $z = \\frac{1}{2} + \\frac{1}{2}\\mathrm{i}$. Betrag: $\\lvert z\\rvert = \\sqrt{(\\tfrac12)^2 + (\\tfrac12)^2} = \\sqrt{\\tfrac12} = \\frac{1}{\\sqrt{2}} < 1$. Wegen $\\lvert w_n\\rvert = \\lvert z\\rvert^n = \\big(\\frac{1}{\\sqrt2}\\big)^n \\to 0$ ist $(w_n)$ eine Nullfolge.\n**Ergebnis:** $w_n \\to 0$ (konvergent).',
        '**Aufgabe:** Konvergiert $z_n = \\big(\\sqrt{3}\\,\\mathrm{i}\\big)^n$?\n**Lösung:** $z = \\sqrt{3}\\,\\mathrm{i}$ hat Betrag $\\lvert z\\rvert = \\sqrt{3} > 1$. Damit $\\lvert z_n\\rvert = (\\sqrt{3})^n \\to \\infty$, die Glieder wachsen unbeschränkt.\n**Ergebnis:** $(z_n)$ divergiert.',
        '**Aufgabe:** Untersuche $z_n = \\big(\\tfrac{2}{3}\\,\\mathrm{e}^{\\mathrm{i}\\pi/5}\\big)^n$.\n**Lösung:** In Polarform ist der Betrag der Basis $\\lvert \\tfrac{2}{3}\\,\\mathrm{e}^{\\mathrm{i}\\pi/5}\\rvert = \\frac{2}{3}$ (der Faktor $\\mathrm{e}^{\\mathrm{i}\\pi/5}$ hat Betrag $1$). Da $\\frac{2}{3} < 1$, folgt $\\lvert z_n\\rvert = (\\tfrac23)^n \\to 0$.\n**Ergebnis:** $z_n \\to 0$ (Nullfolge).',
      ],
    },
    {
      szenario: 'Divergenz erkennen (|z| = 1, Betrag-Trick)',
      beispiele: [
        '**Aufgabe:** Konvergieren $z_n = \\mathrm{i}^n$ und die Betragsfolge $(\\lvert z_n\\rvert)$? (Übungsblatt 2)\n**Lösung:** Die Glieder durchlaufen periodisch $\\mathrm{i}^1=\\mathrm{i},\\ \\mathrm{i}^2=-1,\\ \\mathrm{i}^3=-\\mathrm{i},\\ \\mathrm{i}^4=1,\\ \\mathrm{i}^5=\\mathrm{i},\\dots$ — sie springen zwischen vier Werten und nähern sich keiner festen Zahl (Teilfolgen $\\to 1$ und $\\to -1$ zugleich unmöglich für einen Grenzwert). Der Betrag ist dagegen konstant $\\lvert \\mathrm{i}^n\\rvert = 1$.\n**Ergebnis:** $(z_n)$ **divergiert**, aber $\\lvert z_n\\rvert \\to 1$ (konvergent).',
        '**Aufgabe:** Konvergiert $z_n = (-1)^n$ als komplexe Folge?\n**Lösung:** $\\lvert -1\\rvert = 1$, aber $z \\neq 1$. Die Folge springt $-1, 1, -1, 1, \\dots$: die geraden Indizes liefern $1$, die ungeraden $-1$ — zwei Teilfolgen mit verschiedenen Werten, also kein eindeutiger Grenzwert.\n**Ergebnis:** divergent (obwohl $\\lvert z_n\\rvert = 1$ konvergiert).',
        '**Aufgabe:** Konvergiert $z_n = (1 + \\mathrm{i})^n$?\n**Lösung:** Betrag der Basis $\\lvert 1 + \\mathrm{i}\\rvert = \\sqrt{1^2 + 1^2} = \\sqrt{2} > 1$, also $\\lvert z_n\\rvert = (\\sqrt2)^n \\to \\infty$. Unbeschränkte Folge kann nicht konvergieren.\n**Ergebnis:** $(z_n)$ divergiert.',
      ],
    },
  ],
}
