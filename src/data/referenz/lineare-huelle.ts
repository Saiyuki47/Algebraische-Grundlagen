import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'lineare-huelle',
  titel: 'Lineare Hülle & Erzeugendensysteme',
  inhalt:
    '**Worum geht es?**\n' +
    'Aus wenigen Vektoren lassen sich durch Strecken, Stauchen und Addieren unendlich viele weitere bauen. Die Frage „Welche Vektoren kann ich aus $v_1,\\dots,v_k$ erzeugen?" führt auf die **lineare Hülle** – die Menge aller dieser Kombinationen. Sie beschreibt genau, welchen Raum (Gerade, Ebene, ganz $\\mathbb{R}^n$) ein paar Vektoren „aufspannen". Damit klärt man, ob ein Vektor darstellbar ist, ob eine Vektormenge einen Raum vollständig erzeugt, und legt den Grundstein für **Basis** und **Dimension**.\n' +
    '\n' +
    '**Linearkombination**\n' +
    'Sind $v_1,\\dots,v_k \\in \\mathbb{R}^n$ Vektoren und $\\lambda_1,\\dots,\\lambda_k \\in \\mathbb{R}$ Skalare, so heißt der Vektor $\\lambda_1 v_1 + \\lambda_2 v_2 + \\dots + \\lambda_k v_k$ eine **Linearkombination** von $v_1,\\dots,v_k$. Die $\\lambda_i$ nennt man **Koeffizienten**; sie dürfen beliebige reelle Zahlen sein (auch $0$ oder negativ).\n' +
    '\n' +
    '**Lineare Hülle (Spann)**\n' +
    'Sei $k \\in \\mathbb{N}^*$ und $v_1,\\dots,v_k \\in \\mathbb{R}^n$. Die **lineare Hülle** ist die Menge **aller** Linearkombinationen:\n' +
    '$\\operatorname{lin}\\{v_1,\\dots,v_k\\} := \\{\\lambda_1 v_1 + \\dots + \\lambda_k v_k : \\lambda_1,\\dots,\\lambda_k \\in \\mathbb{R}\\}$.\n' +
    'Übliche Schreibweisen für dasselbe Objekt sind $\\operatorname{span}(v_1,\\dots,v_k)$ und $\\langle v_1,\\dots,v_k\\rangle$. Zwei wichtige Eigenschaften: Die lineare Hülle ist stets ein **Untervektorraum (UVR)** von $\\mathbb{R}^n$ – und zwar der **kleinste** UVR, der alle $v_i$ enthält. Für die leere Menge setzt man $\\operatorname{lin}\\emptyset := \\{0_{\\mathbb{R}^n}\\}$.\n' +
    '\n' +
    '**Erzeugendensystem**\n' +
    'Gilt $\\operatorname{lin}\\{v_1,\\dots,v_k\\} = V$, so sagt man: $v_1,\\dots,v_k$ **erzeugen** $V$ bzw. **spannen** $V$ auf; die Menge heißt ein **Erzeugendensystem** von $V$. Jeder Vektor aus $V$ ist dann als Linearkombination der $v_i$ schreibbar. Ein Erzeugendensystem darf „zu viele" (linear abhängige) Vektoren enthalten; sind die Erzeuger zusätzlich linear unabhängig, ist es eine **Basis** (siehe Karte „Basis & Dimension").\n' +
    '\n' +
    '**Liegt ein Vektor in der Hülle? (Schritt für Schritt)**\n' +
    'Frage: Ist $\\vec w \\in \\operatorname{lin}\\{v_1,\\dots,v_k\\}$? Das heißt: Gibt es $\\lambda_1,\\dots,\\lambda_k$ mit $\\lambda_1 v_1 + \\dots + \\lambda_k v_k = \\vec w$?\n' +
    '1. Ansatz $\\lambda_1 v_1 + \\dots + \\lambda_k v_k = \\vec w$ aufstellen.\n' +
    '2. Komponentenweise ausschreiben – das ergibt ein **LGS** mit Unbekannten $\\lambda_1,\\dots,\\lambda_k$ (Vektoren als Spalten, $\\vec w$ als rechte Seite).\n' +
    '3. LGS lösen (Gauß). **Lösbar** $\\Rightarrow \\vec w$ liegt in der Hülle (eine passende Kombination existiert). **Unlösbar** $\\Rightarrow \\vec w$ liegt nicht darin.\n' +
    '\n' +
    '**Erzeugen die Vektoren ganz $\\mathbb{R}^n$? (Rang)**\n' +
    'Schreibe $v_1,\\dots,v_k$ als **Spalten** einer Matrix $A$ und bestimme $\\operatorname{Rang}(A)$ (Anzahl der Nichtnull-Zeilen in Zeilenstufenform).\n' +
    'Es gilt $\\operatorname{lin}\\{v_1,\\dots,v_k\\} = \\mathbb{R}^n$ genau dann, wenn $\\operatorname{Rang}(A) = n$. Faustregeln: Mit **weniger** als $n$ Vektoren kann man $\\mathbb{R}^n$ **nie** erzeugen. Genau $n$ Vektoren erzeugen $\\mathbb{R}^n$ genau dann, wenn sie linear unabhängig sind (äquivalent $\\det A \\neq 0$) – dann bilden sie sogar eine Basis.\n' +
    '\n' +
    '**Überblick**\n' +
    '| Situation | Kriterium |\n' +
    '|---|---|\n' +
    '| $\\vec w \\in \\operatorname{lin}\\{v_i\\}$? | LGS $\\sum \\lambda_i v_i = \\vec w$ lösbar |\n' +
    '| $\\operatorname{lin}\\{v_i\\} = \\mathbb{R}^n$? | $\\operatorname{Rang}(A) = n$ (Spalten $= v_i$) |\n' +
    '| Dimension von $\\operatorname{lin}\\{v_i\\}$ | $= \\operatorname{Rang}(A)$ |\n' +
    '| $\\operatorname{lin}\\{v_i\\}$ ist immer | ein UVR (kleinster, der alle $v_i$ enthält) |\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Die Hülle als endliche Menge missverstehen: $\\operatorname{lin}\\{v\\}$ ist die **ganze Ursprungsgerade** durch $v$, nicht nur $v$ selbst.\n' +
    '• Beim Rang-Test die Vektoren als **Zeilen** statt Spalten schreiben – der Rang stimmt zwar überein, das LGS für „$\\vec w$ in Hülle" aber nur mit Spalten.\n' +
    '• Glauben, mehr Vektoren erzeugen automatisch mehr: Zusätzliche **abhängige** Vektoren vergrößern die Hülle nicht ($\\operatorname{lin}\\{v, 2v\\} = \\operatorname{lin}\\{v\\}$).\n' +
    '• $\\operatorname{lin}\\{0_{\\mathbb{R}^n}\\}$ ist der **Nullraum** $\\{0_{\\mathbb{R}^n}\\}$ (dim $0$), nicht ganz $\\mathbb{R}^n$.',
  beispiele: [
    {
      szenario: 'Liegt ein Vektor in der Hülle? (LGS-Ansatz)',
      beispiele: [
        '**Aufgabe:** Liegt $\\vec w = \\begin{pmatrix}4\\\\7\\end{pmatrix}$ in $\\operatorname{lin}\\left\\{\\begin{pmatrix}1\\\\1\\end{pmatrix}, \\begin{pmatrix}1\\\\-1\\end{pmatrix}\\right\\}$?\n**Lösung:** Ansatz $\\lambda_1\\begin{pmatrix}1\\\\1\\end{pmatrix} + \\lambda_2\\begin{pmatrix}1\\\\-1\\end{pmatrix} = \\begin{pmatrix}4\\\\7\\end{pmatrix}$ liefert das LGS $\\lambda_1 + \\lambda_2 = 4$ und $\\lambda_1 - \\lambda_2 = 7$. Addieren: $2\\lambda_1 = 11$, also $\\lambda_1 = \\frac{11}{2}$; einsetzen: $\\lambda_2 = -\\frac{3}{2}$. Das LGS ist lösbar.\n**Ergebnis:** Ja, $\\vec w = \\frac{11}{2}\\begin{pmatrix}1\\\\1\\end{pmatrix} - \\frac{3}{2}\\begin{pmatrix}1\\\\-1\\end{pmatrix}$.',
        '**Aufgabe:** Liegt $\\vec w = \\begin{pmatrix}2\\\\5\\\\3\\end{pmatrix}$ in $\\operatorname{lin}\\left\\{\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}, \\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}\\right\\}$?\n**Lösung:** Ansatz komponentenweise: $\\lambda_1 = 2$ (1. Zeile), $\\lambda_2 = 3$ (3. Zeile). Probe in der 2. Zeile: $\\lambda_1 + \\lambda_2 = 2 + 3 = 5$ – stimmt mit der $5$ überein.\n**Ergebnis:** Ja, $\\vec w = 2\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix} + 3\\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}$.',
        '**Aufgabe:** Liegt $\\vec w = \\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}$ in $\\operatorname{lin}\\left\\{\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}, \\begin{pmatrix}0\\\\1\\\\1\\end{pmatrix}\\right\\}$?\n**Lösung:** Aus der 1. Zeile $\\lambda_1 = 1$, aus der 3. Zeile $\\lambda_2 = 3$. Probe in der 2. Zeile: $\\lambda_1 + \\lambda_2 = 1 + 3 = 4 \\neq 2$. Widerspruch, das LGS ist unlösbar.\n**Ergebnis:** Nein, $\\vec w$ liegt nicht in der Hülle.',
      ],
    },
    {
      szenario: 'Hülle als Ebene / Lösungsmenge beschreiben',
      beispiele: [
        '**Aufgabe:** Schreibe $E = \\left\\{\\vec x \\in \\mathbb{R}^3 : 2x_1 + 3x_2 - x_3 = 0\\right\\}$ als lineare Hülle. (Blatt 9, Aufg. 2)\n**Lösung:** $E$ ist die Lösungsmenge des homogenen LGS $2x_1 + 3x_2 - x_3 = 0$. Wähle $x_2, x_3$ frei ($x_2 = r$, $x_3 = 2s$ passend gesetzt) und löse nach $x_1$ auf: $\\vec x = r\\begin{pmatrix}-\\tfrac{3}{2}\\\\1\\\\0\\end{pmatrix} + s\\begin{pmatrix}\\tfrac{1}{2}\\\\0\\\\1\\end{pmatrix}$ mit $r,s \\in \\mathbb{R}$.\n**Ergebnis:** $E = \\operatorname{lin}\\left\\{\\begin{pmatrix}-\\tfrac{3}{2}\\\\1\\\\0\\end{pmatrix}, \\begin{pmatrix}\\tfrac{1}{2}\\\\0\\\\1\\end{pmatrix}\\right\\}$; die zwei Erzeuger sind unabhängig, also ist $\\dim E = 2$ (eine Ebene durch $0$).',
        '**Aufgabe:** Welchen UVR beschreibt $\\operatorname{lin}\\left\\{\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}, \\begin{pmatrix}-1\\\\0\\\\0\\end{pmatrix}\\right\\}$? (Blatt 9, Aufg. 3c)\n**Lösung:** Jede Kombination ist $\\lambda_1\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix} + \\lambda_2\\begin{pmatrix}-1\\\\0\\\\0\\end{pmatrix} = \\begin{pmatrix}\\lambda_1 - \\lambda_2\\\\0\\\\0\\end{pmatrix}$. Da $\\lambda_1 - \\lambda_2$ jede reelle Zahl annehmen kann, entsteht die ganze $x_1$-Achse.\n**Ergebnis:** $= \\left\\{\\begin{pmatrix}x_1\\\\0\\\\0\\end{pmatrix} : x_1 \\in \\mathbb{R}\\right\\}$ (eindimensional). Der zweite Vektor ist überflüssig.',
        '**Aufgabe:** Bestimme $\\operatorname{lin}\\left\\{\\begin{pmatrix}0\\\\0\\\\0\\end{pmatrix}\\right\\}$. (Blatt 9, Aufg. 3b)\n**Lösung:** Jede Linearkombination des Nullvektors ist wieder der Nullvektor: $\\lambda \\cdot 0_{\\mathbb{R}^3} = 0_{\\mathbb{R}^3}$ für alle $\\lambda$.\n**Ergebnis:** $= \\left\\{\\begin{pmatrix}0\\\\0\\\\0\\end{pmatrix}\\right\\}$, der Nullraum (Dimension $0$).',
      ],
    },
    {
      szenario: 'Aussagen über lineare Hüllen prüfen',
      beispiele: [
        '**Aufgabe:** Gilt $\\operatorname{lin}\\left\\{\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}, \\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix}\\right\\} = \\operatorname{lin}\\left\\{\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}\\right\\}$? (Blatt 9, Aufg. 3a)\n**Lösung:** Links entsteht die ganze $x_1x_2$-Ebene (alle $\\begin{pmatrix}a\\\\b\\\\0\\end{pmatrix}$, Dimension $2$). Rechts nur die Gerade durch $\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}$ (Dimension $1$). Z. B. liegt $\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}$ links, aber nicht rechts.\n**Ergebnis:** Falsch – die Mengen sind verschieden.',
        '**Aufgabe:** Prüfe, ob $\\begin{pmatrix}3\\\\3\\\\0\\end{pmatrix} \\in \\operatorname{lin}\\left\\{\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix}\\right\\}$ liegt.\n**Lösung:** Gesucht $\\lambda$ mit $\\lambda\\begin{pmatrix}1\\\\1\\\\0\\end{pmatrix} = \\begin{pmatrix}3\\\\3\\\\0\\end{pmatrix}$. Aus jeder Zeile folgt $\\lambda = 3$, konsistent.\n**Ergebnis:** Ja, mit $\\lambda = 3$; der Vektor ist ein Vielfaches des Erzeugers.',
        '**Aufgabe:** Ist $\\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix} \\in \\operatorname{lin}\\left\\{\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}, \\begin{pmatrix}0\\\\0\\\\1\\end{pmatrix}\\right\\}$?\n**Lösung:** Ansatz $\\lambda_1\\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix} + \\lambda_2\\begin{pmatrix}0\\\\0\\\\1\\end{pmatrix} = \\begin{pmatrix}\\lambda_1\\\\0\\\\\\lambda_2\\end{pmatrix}$. Die 2. Komponente ist immer $0$, kann also nie $1$ ergeben.\n**Ergebnis:** Nein – die Hülle ist die $x_1x_3$-Ebene, $\\begin{pmatrix}0\\\\1\\\\0\\end{pmatrix}$ liegt nicht darin.',
      ],
    },
    {
      szenario: 'Erzeugendensystem von ℝⁿ? (Rang)',
      beispiele: [
        '**Aufgabe:** Erzeugen $\\begin{pmatrix}\\cos(3)\\\\0\\\\0\\end{pmatrix}, \\begin{pmatrix}0\\\\-4\\\\0\\end{pmatrix}, \\begin{pmatrix}0\\\\0\\\\\\sqrt{2}\\end{pmatrix}$ ganz $\\mathbb{R}^3$? (Blatt 9, Aufg. 3d)\n**Lösung:** Als Spalten ergibt sich eine Diagonalmatrix mit Einträgen $\\cos(3), -4, \\sqrt{2}$. Alle drei sind $\\neq 0$ ($\\cos(3) \\approx -0{,}99 \\neq 0$), also hat die Matrix Rang $3 = n$. (Jeder Vektor $\\begin{pmatrix}a\\\\b\\\\c\\end{pmatrix}$ ist mit $\\lambda_1 = \\tfrac{a}{\\cos 3}$ usw. darstellbar.)\n**Ergebnis:** Ja, sie erzeugen $\\mathbb{R}^3$ (sind sogar eine Basis).',
        '**Aufgabe:** Erzeugen $\\begin{pmatrix}1\\\\-1\\\\4\\end{pmatrix}, \\begin{pmatrix}-1\\\\0\\\\-1\\end{pmatrix}, \\begin{pmatrix}-1\\\\-3\\\\2\\end{pmatrix}$ ganz $\\mathbb{R}^3$?\n**Lösung:** Spalten in $A$ schreiben und Gauß rechnen (Blatt 9, Aufg. 4iv): $A \\to \\begin{pmatrix}1&-1&-1\\\\0&-1&-4\\\\0&0&-6\\end{pmatrix}$. Drei Nichtnull-Zeilen, also $\\operatorname{Rang}(A) = 3 = n$.\n**Ergebnis:** Ja, sie erzeugen $\\mathbb{R}^3$.',
        '**Aufgabe:** Erzeugen $\\begin{pmatrix}1\\\\0\\\\-2\\end{pmatrix}, \\begin{pmatrix}2\\\\1\\\\-1\\end{pmatrix}, \\begin{pmatrix}-1\\\\1\\\\5\\end{pmatrix}$ ganz $\\mathbb{R}^3$?\n**Lösung:** Gauß (Blatt 9, Aufg. 4v): $A \\to \\begin{pmatrix}1&2&-1\\\\0&1&1\\\\0&0&0\\end{pmatrix}$. Nur zwei Nichtnull-Zeilen, also $\\operatorname{Rang}(A) = 2 < 3$. Die Hülle ist nur eine Ebene.\n**Ergebnis:** Nein – sie erzeugen $\\mathbb{R}^3$ nicht (nur einen 2-dimensionalen UVR).',
      ],
    },
  ],
}
