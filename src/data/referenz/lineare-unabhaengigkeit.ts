import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'lineare-unabhaengigkeit',
  titel: 'Lineare (Un)abhängigkeit',
  inhalt:
    '**Worum geht es?**\n' +
    'Lineare Unabhängigkeit fragt: Trägt jeder Vektor einer Familie wirklich etwas Neues bei, oder lässt sich einer schon aus den anderen zusammenbauen? Das ist die zentrale Frage, wenn man wissen will, wie „groß" ein erzeugter Raum ist und wie viele Vektoren man für eine **Basis** wirklich braucht. Unabhängige Vektoren sind gerade die, die man nicht weglassen kann, ohne den aufgespannten Raum zu verkleinern.\n' +
    '\n' +
    '**Definition**\n' +
    'Die Vektoren $v_1,\\dots,v_k \\in \\mathbb{R}^n$ heißen **linear unabhängig**, wenn aus $\\lambda_1 v_1 + \\dots + \\lambda_k v_k = \\vec 0$ zwingend $\\lambda_1 = \\dots = \\lambda_k = 0$ folgt — die **triviale** Kombination ist also die einzige, die den Nullvektor ergibt. Andernfalls heißen sie **linear abhängig**: dann gibt es Koeffizienten $\\lambda_1,\\dots,\\lambda_k$, die **nicht alle 0** sind, mit $\\lambda_1 v_1 + \\dots + \\lambda_k v_k = \\vec 0$ (eine **nichttriviale** Kombination).\n' +
    '\n' +
    '**Was „abhängig" anschaulich bedeutet**\n' +
    'Linear abhängig heißt genau: **mindestens einer** der Vektoren ist eine **Linearkombination der übrigen** (man kann ihn durch die anderen ausdrücken). Ist z. B. $\\lambda_k \\neq 0$, so lässt sich $v_k = -\\frac{1}{\\lambda_k}(\\lambda_1 v_1 + \\dots + \\lambda_{k-1} v_{k-1})$ auflösen. Dieser Vektor ist dann „überflüssig": die lineare Hülle bleibt gleich, wenn man ihn streicht.\n' +
    '\n' +
    '**Wie prüft man das? (homogenes LGS)**\n' +
    'Man setzt $\\lambda_1 v_1 + \\dots + \\lambda_k v_k = \\vec 0$ an. Schreibt man die Vektoren als **Spalten** einer Matrix $A$, ist das ein **homogenes** LGS $A\\vec\\lambda = \\vec 0$. Vorgehen:\n' +
    '1. Matrix $A$ mit den Vektoren als Spalten aufstellen.\n' +
    '2. Mit dem Gauß-Verfahren auf Zeilenstufenform bringen und den **Rang** ablesen.\n' +
    '3. Ist $\\text{Rang}(A) = k$ (Rang = Anzahl der Vektoren), gibt es **nur** die triviale Lösung $\\vec\\lambda = \\vec 0$ $\\Rightarrow$ **unabhängig**.\n' +
    '4. Ist $\\text{Rang}(A) < k$, hat das LGS **freie Parameter** (unendlich viele Lösungen), also auch eine nichttriviale $\\Rightarrow$ **abhängig**.\n' +
    '\n' +
    '**Determinantenkriterium (Spezialfall $k = n$)**\n' +
    'Hat man **genau so viele Vektoren wie Dimensionen** — also $n$ Vektoren im $\\mathbb{R}^n$, sodass die Matrix $A$ quadratisch ist —, gilt bequemer:\n' +
    '$v_1,\\dots,v_n$ linear unabhängig $\\iff \\det(v_1,\\dots,v_n) \\neq 0$.\n' +
    'Für $n = 3$ berechnet man $\\det$ am schnellsten mit der **Regel von Sarrus**; für $n = 2$ ist $\\det\\!\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$. Elementare Zeilenumformungen ändern zwar den Wert der Determinante (Vorzeichen bzw. Faktor), aber **nicht**, ob sie $0$ ist — die (Un)abhängigkeit bleibt also erhalten.\n' +
    '\n' +
    '**Geometrische Deutung**\n' +
    'Zwei Vektoren sind genau dann abhängig, wenn sie **kollinear** sind (auf einer Ursprungsgeraden liegen, also Vielfache voneinander). Drei Vektoren im $\\mathbb{R}^3$ sind genau dann abhängig, wenn sie **koplanar** sind (in einer gemeinsamen Ursprungsebene liegen). Unabhängige Vektoren spannen dagegen einen „vollen" Raum der Dimension $k$ auf.\n' +
    '\n' +
    '**Sofort erkennbare Sonderfälle**\n' +
    '| Situation | Ergebnis |\n' +
    '|---|---|\n' +
    '| Der Nullvektor $\\vec 0$ ist dabei | immer **abhängig** ($1 \\cdot \\vec 0 = \\vec 0$) |\n' +
    '| Zwei Vektoren sind Vielfache | **abhängig** (kollinear) |\n' +
    '| Ein einzelner Vektor $v \\neq \\vec 0$ | **unabhängig** |\n' +
    '| Mehr als $n$ Vektoren im $\\mathbb{R}^n$ | immer **abhängig** |\n' +
    '\n' +
    '**Bezug zur Basis**\n' +
    'Eine **Basis** von $\\mathbb{R}^n$ ist eine Familie von Vektoren, die (1) **linear unabhängig** ist und (2) den ganzen Raum **erzeugt**. Im $\\mathbb{R}^n$ leistet das jede Menge aus **genau so vielen** linear unabhängigen Vektoren, wie der Raum Dimensionen hat (also $n$ Stück). Lineare Unabhängigkeit ist damit die halbe Miete für eine Basis: sie garantiert, dass keine Redundanz vorliegt.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Aus „$\\vec 0$ ist Linearkombination" auf Abhängigkeit schließen — das geht **immer** (triviale Kombination); es kommt darauf an, ob es auch eine **nichttriviale** gibt.\n' +
    '• Das Determinantenkriterium auf $k \\neq n$ anwenden (z. B. 2 Vektoren im $\\mathbb{R}^3$) — dort ist die Matrix **nicht quadratisch**, $\\det$ existiert nicht; nur das Rang-Verfahren hilft.\n' +
    '• Vektoren versehentlich als **Zeilen** statt als Spalten ins LGS schreiben (für den Rang egal, für die $\\lambda$-Deutung aber wichtig).\n' +
    '• Den **Nullvektor** übersehen: sobald er auftaucht, ist die Familie ohne Rechnung abhängig.',
  beispiele: [
    {
      szenario: 'Prüfen im R³ (Determinante / Sarrus)',
      beispiele: [
        '**Aufgabe:** Sind $v_1 = \\begin{pmatrix} 1 \\\\ -1 \\\\ 4 \\end{pmatrix}$, $v_2 = \\begin{pmatrix} -1 \\\\ 0 \\\\ -1 \\end{pmatrix}$, $v_3 = \\begin{pmatrix} -1 \\\\ -3 \\\\ 2 \\end{pmatrix}$ linear unabhängig?\n**Lösung:** Es sind $3$ Vektoren im $\\mathbb{R}^3$, also Determinantenkriterium. Mit Sarrus: $\\det = 1\\cdot 0\\cdot 2 + (-1)(-3)\\cdot 4 + (-1)(-1)(-1) - 4\\cdot 0\\cdot(-1) - (-1)(-3)\\cdot 1 - 2\\cdot(-1)(-1) = 0 + 12 - 1 - 0 - 3 - 2 = 6$. Wegen $\\det = 6 \\neq 0$ nur triviale Lösung.\n**Ergebnis:** Linear **unabhängig**.',
        '**Aufgabe:** Sind $v_1 = \\begin{pmatrix} 1 \\\\ 0 \\\\ -2 \\end{pmatrix}$, $v_2 = \\begin{pmatrix} 2 \\\\ 1 \\\\ -1 \\end{pmatrix}$, $v_3 = \\begin{pmatrix} -1 \\\\ 1 \\\\ 5 \\end{pmatrix}$ linear unabhängig?\n**Lösung:** Sarrus für die Spaltenmatrix: $\\det = 1\\cdot 1\\cdot 5 + 2\\cdot 1\\cdot(-2) + (-1)\\cdot 0\\cdot(-1) - (-2)\\cdot 1\\cdot(-1) - (-1)\\cdot 1\\cdot 1 - 5\\cdot 0\\cdot 2 = 5 - 4 + 0 - 2 + 1 - 0 = 0$. Determinante $= 0$, also existiert eine nichttriviale Lösung (Rang $2 < 3$).\n**Ergebnis:** Linear **abhängig**.',
        '**Aufgabe:** Für welche $t \\in \\mathbb{R}$ sind $v_1 = \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$, $v_2 = \\begin{pmatrix} t \\\\ 1 \\\\ 2 \\end{pmatrix}$, $v_3 = \\begin{pmatrix} 1 \\\\ t \\\\ 2 \\end{pmatrix}$ linear unabhängig?\n**Lösung:** Sarrus liefert $\\det(v_1,v_2,v_3) = 2 + t^2 + 2 - 1 - 2t - 2t = t^2 - 4t + 3$. Nullstellen (p-q-Formel): $t = 1$ oder $t = 3$. Unabhängig ist genau dann, wenn $\\det \\neq 0$.\n**Ergebnis:** Linear unabhängig für alle $t \\in \\mathbb{R} \\setminus \\{1, 3\\}$.',
      ],
    },
    {
      szenario: 'Prüfen per Gauß / Rang',
      beispiele: [
        '**Aufgabe:** Sind $v_1 = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\\\ 0 \\end{pmatrix}$, $v_2 = \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\\\ 0 \\end{pmatrix}$ (im $\\mathbb{R}^4$) linear unabhängig?\n**Lösung:** Nur $2$ Vektoren im $\\mathbb{R}^4$ $\\Rightarrow$ keine quadratische Matrix, also Rang bestimmen. Spalten in $A$, Zeilenumformungen: $\\begin{pmatrix} 1 & 2 \\\\ 2 & 3 \\\\ 3 & 1 \\\\ 0 & 0 \\end{pmatrix} \\to \\begin{pmatrix} 1 & 2 \\\\ 0 & -1 \\\\ 0 & -5 \\\\ 0 & 0 \\end{pmatrix} \\to \\begin{pmatrix} 1 & 2 \\\\ 0 & -1 \\\\ 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$. Rang $= 2 =$ Anzahl der Vektoren.\n**Ergebnis:** Linear **unabhängig**.',
        '**Aufgabe:** Sind die vier Vektoren $\\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\\\ 1 \\end{pmatrix}, \\begin{pmatrix} 1 \\\\ 2 \\\\ 2 \\\\ 1 \\end{pmatrix}$ im $\\mathbb{R}^4$ linear unabhängig?\n**Lösung:** $4$ Vektoren im $\\mathbb{R}^4$. Spaltenmatrix per Gauß umformen; es ergibt sich eine Nullzeile, also $\\text{Rang} = 3 < 4$. Damit hat das homogene LGS einen freien Parameter (nichttriviale Lösung). Konkret ist $v_4 = v_1 + v_2 + v_3$.\n**Ergebnis:** Linear **abhängig** (ein Vektor ist Summe der anderen).',
        '**Aufgabe:** Ist der einzelne Vektor $v = \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\\\ 4 \\end{pmatrix}$ linear unabhängig?\n**Lösung:** Zu prüfen: $\\lambda v = \\vec 0$. Da $v \\neq \\vec 0$ (z. B. erste Komponente $1 \\neq 0$), folgt $\\lambda = 0$ zwingend.\n**Ergebnis:** Linear **unabhängig** (ein einzelner Vektor $\\neq \\vec 0$ ist stets unabhängig).',
      ],
    },
    {
      szenario: 'Sonderfälle ohne Rechnung',
      beispiele: [
        '**Aufgabe:** Ist der Nullvektor $\\vec 0_{\\mathbb{R}^n}$ linear unabhängig?\n**Lösung:** Es gilt $1 \\cdot \\vec 0 = \\vec 0$ — eine Kombination mit Koeffizient $\\lambda_1 = 1 \\neq 0$, die $\\vec 0$ ergibt. Das ist eine nichttriviale Kombination.\n**Ergebnis:** **Abhängig**. Jede Familie, die $\\vec 0$ enthält, ist linear abhängig.',
        '**Aufgabe:** Sind $u = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$ und $w = \\begin{pmatrix} -1 \\\\ 0 \\\\ 0 \\end{pmatrix}$ linear unabhängig?\n**Lösung:** Es ist $w = -1 \\cdot u$, die beiden sind also **kollinear** (Vielfache voneinander). Nichttrivial: $1 \\cdot u + 1 \\cdot w = \\vec 0$.\n**Ergebnis:** Linear **abhängig**.',
        '**Aufgabe:** Können $5$ Vektoren im $\\mathbb{R}^3$ linear unabhängig sein?\n**Lösung:** Im $\\mathbb{R}^3$ hat die Spaltenmatrix nur $3$ Zeilen, daher $\\text{Rang} \\le 3 < 5$. Bei $5$ Unbekannten und Rang $\\le 3$ gibt es freie Parameter, also nichttriviale Lösungen.\n**Ergebnis:** **Nein** — mehr als $n$ Vektoren im $\\mathbb{R}^n$ sind immer abhängig.',
      ],
    },
  ],
}
