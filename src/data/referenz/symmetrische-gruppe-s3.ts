import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'symmetrische-gruppe-s3',
  titel: 'Symmetrische Gruppe S₃',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine **Permutation** ist ein Umsortieren einer endlichen Menge — z. B. drei Plätze $1,2,3$ neu belegen. Sammelt man **alle** solchen Umsortierungen und verknüpft sie durch **Hintereinanderausführung**, entsteht eine Gruppe: die **symmetrische Gruppe** $S_n$. Sie ist das Standardbeispiel für eine Gruppe, die **nicht** kommutativ ist, und zeigt, dass bei Verknüpfungen die **Reihenfolge** eine Rolle spielt. $S_3$ ist der kleinste solche Fall und lässt sich vollständig als Tafel hinschreiben.\n' +
    '\n' +
    '**Definition (Permutation, $S_n$)**\n' +
    'Sei $X = \\{1,\\dots,n\\}$. Eine **Permutation** von $X$ ist eine **bijektive** Abbildung $f: X \\to X$ (jedes Element wird auf genau ein Element abgebildet, jedes wird genau einmal getroffen). Die Menge $S_n := \\{f: X \\to X \\mid f \\text{ bijektiv}\\}$ mit der **Hintereinanderausführung** $\\circ$ als Verknüpfung heißt **symmetrische Gruppe**; ihre Elemente sind die Permutationen. Es gilt $\\lvert S_n\\rvert = n! = 1\\cdot 2\\cdots n$. Also $\\lvert S_1\\rvert=1$, $\\lvert S_2\\rvert=2$, $\\lvert S_3\\rvert=6$, $\\lvert S_4\\rvert=24$.\n' +
    '\n' +
    '**Zwei-Zeilen-Schreibweise**\n' +
    'Man notiert $f$, indem man unter jedes Element sein Bild schreibt:\n' +
    '$f = \\begin{pmatrix} 1 & 2 & 3 \\\\ f(1) & f(2) & f(3) \\end{pmatrix}$.\n' +
    'Beispiel: $\\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 1 \\end{pmatrix}$ bedeutet $1 \\mapsto 2$, $2 \\mapsto 3$, $3 \\mapsto 1$. Die obere Zeile ist immer $1,2,3$; in der unteren Zeile steht jede Zahl **genau einmal** (das ist gerade die Bijektivität).\n' +
    '\n' +
    '**Zykelschreibweise**\n' +
    'Kürzer schreibt man, welche Elemente **im Kreis** aufeinander abgebildet werden: $(a\\ b\\ c)$ heißt $a \\mapsto b \\mapsto c \\mapsto a$. Ein **Zweierzykel** $(a\\ b)$ (nur $a$ und $b$ werden vertauscht) heißt **Transposition**; Fixpunkte lässt man weg. So ist $\\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 1 \\end{pmatrix} = (1\\ 2\\ 3)$ und $\\begin{pmatrix} 1 & 2 & 3 \\\\ 1 & 3 & 2 \\end{pmatrix} = (2\\ 3)$. Die identische Abbildung ist $e = \\begin{pmatrix} 1 & 2 & 3 \\\\ 1 & 2 & 3 \\end{pmatrix}$.\n' +
    '\n' +
    '**Verknüpfung = Hintereinanderausführung (Reihenfolge!)**\n' +
    'Für $f,g \\in S_n$ ist $f \\circ g$ die Permutation mit $(f \\circ g)(x) = f(g(x))$ — man wendet also **zuerst g**, dann $f$ an (wie bei Abbildungen üblich von rechts nach links gelesen). Weil $S_n$ eine Gruppe ist, gelten alle Gruppenaxiome: $\\circ$ ist **assoziativ**, Neutralelement ist die Identität $e$, und jedes $f$ hat ein Inverses $f^{-1}$. Aber $\\circ$ ist im Allgemeinen **nicht kommutativ**: meist ist $f \\circ g \\neq g \\circ f$.\n' +
    '\n' +
    '**So verkettet man (Zwei-Zeilen)**\n' +
    '1. Lies $f \\circ g$ von **rechts nach links**: erst $g$, dann $f$.\n' +
    '2. Gehe jedes $x = 1,2,3$ durch: bestimme $g(x)$, setze das Ergebnis in $f$ ein.\n' +
    '3. Schreibe $f(g(x))$ in die untere Zeile unter $x$.\n' +
    'Beispiel $(2\\ 3) \\circ (1\\ 2)$: $1 \\xrightarrow{(1\\,2)} 2 \\xrightarrow{(2\\,3)} 3$, $2 \\to 1 \\to 1$, $3 \\to 3 \\to 2$, also $\\begin{pmatrix} 1 & 2 & 3 \\\\ 3 & 1 & 2 \\end{pmatrix} = (1\\ 3\\ 2)$.\n' +
    '\n' +
    '**Inverse einer Permutation**\n' +
    'Das Inverse $f^{-1}$ macht $f$ rückgängig: $f^{-1} \\circ f = f \\circ f^{-1} = e$. In der Zwei-Zeilen-Schreibweise erhält man $f^{-1}$, indem man die **beiden Zeilen vertauscht** und dann nach der oberen Zeile $1,2,3$ sortiert. In Zykelschreibweise **kehrt man die Reihenfolge um**: $(a\\ b\\ c)^{-1} = (c\\ b\\ a) = (a\\ c\\ b)$. Jede Transposition ist ihr eigenes Inverses: $(a\\ b)^{-1} = (a\\ b)$.\n' +
    '\n' +
    '**Ordnung eines Elements**\n' +
    'Die **Ordnung** von $f$ ist die kleinste Zahl $k \\ge 1$ mit $f^k = f \\circ \\cdots \\circ f = e$ ($k$-mal). In $S_3$: die Identität hat Ordnung $1$, jede **Transposition** hat Ordnung $2$ (zweimal vertauschen ergibt wieder die Identität), jeder **Dreierzykel** hat Ordnung $3$.\n' +
    '\n' +
    '**$S_3$ konkret — die 6 Elemente**\n' +
    'Mit der Nummerierung der Vorlesung ($\\pi_1,\\dots,\\pi_6$):\n' +
    '| Name | Zwei-Zeilen | Zykel | Ordnung | Inverses |\n' +
    '|---|---|---|---|---|\n' +
    '| $\\pi_1$ | $\\begin{pmatrix}1&2&3\\\\1&2&3\\end{pmatrix}$ | $e$ | $1$ | $\\pi_1$ |\n' +
    '| $\\pi_2$ | $\\begin{pmatrix}1&2&3\\\\1&3&2\\end{pmatrix}$ | $(2\\ 3)$ | $2$ | $\\pi_2$ |\n' +
    '| $\\pi_3$ | $\\begin{pmatrix}1&2&3\\\\2&1&3\\end{pmatrix}$ | $(1\\ 2)$ | $2$ | $\\pi_3$ |\n' +
    '| $\\pi_4$ | $\\begin{pmatrix}1&2&3\\\\2&3&1\\end{pmatrix}$ | $(1\\ 2\\ 3)$ | $3$ | $\\pi_5$ |\n' +
    '| $\\pi_5$ | $\\begin{pmatrix}1&2&3\\\\3&1&2\\end{pmatrix}$ | $(1\\ 3\\ 2)$ | $3$ | $\\pi_4$ |\n' +
    '| $\\pi_6$ | $\\begin{pmatrix}1&2&3\\\\3&2&1\\end{pmatrix}$ | $(1\\ 3)$ | $2$ | $\\pi_6$ |\n' +
    '\n' +
    '**Verknüpfungstafel von $S_3$**\n' +
    'Eintrag in Zeile $\\pi_i$, Spalte $\\pi_j$ ist $\\pi_i \\circ \\pi_j$ (erst $\\pi_j$, dann $\\pi_i$):\n' +
    '| $\\circ$ | $\\pi_1$ | $\\pi_2$ | $\\pi_3$ | $\\pi_4$ | $\\pi_5$ | $\\pi_6$ |\n' +
    '|---|---|---|---|---|---|---|\n' +
    '| $\\pi_1$ | $\\pi_1$ | $\\pi_2$ | $\\pi_3$ | $\\pi_4$ | $\\pi_5$ | $\\pi_6$ |\n' +
    '| $\\pi_2$ | $\\pi_2$ | $\\pi_1$ | $\\pi_5$ | $\\pi_6$ | $\\pi_3$ | $\\pi_4$ |\n' +
    '| $\\pi_3$ | $\\pi_3$ | $\\pi_4$ | $\\pi_1$ | $\\pi_2$ | $\\pi_6$ | $\\pi_5$ |\n' +
    '| $\\pi_4$ | $\\pi_4$ | $\\pi_3$ | $\\pi_6$ | $\\pi_5$ | $\\pi_1$ | $\\pi_2$ |\n' +
    '| $\\pi_5$ | $\\pi_5$ | $\\pi_6$ | $\\pi_2$ | $\\pi_1$ | $\\pi_4$ | $\\pi_3$ |\n' +
    '| $\\pi_6$ | $\\pi_6$ | $\\pi_5$ | $\\pi_4$ | $\\pi_3$ | $\\pi_2$ | $\\pi_1$ |\n' +
    'In jeder Zeile und Spalte kommt jedes Element **genau einmal** vor — das gilt in jeder Gruppentafel (Kürzungsregel). Dass die Tafel **nicht symmetrisch** zur Diagonalen ist, zeigt: $S_3$ ist nicht abelsch.\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Verkettung in der **falschen Reihenfolge** lesen: bei $f \\circ g$ wird **zuerst g** angewandt (rechts).\n' +
    '• $S_3$ für abelsch halten: $\\pi_2 \\circ \\pi_3 = \\pi_5$, aber $\\pi_3 \\circ \\pi_2 = \\pi_4$ — verschieden!\n' +
    '• Beim Dreierzykel-Inversen nur die äußeren Zahlen tauschen: richtig ist die **ganze** Reihenfolge umkehren, $(1\\ 2\\ 3)^{-1} = (1\\ 3\\ 2)$.\n' +
    '• Fixpunkte in der Zykelschreibweise vergessen und dadurch die Abbildung falsch rekonstruieren.',
  beispiele: [
    {
      szenario: 'S₃ auflisten & Grundfragen (Übungsblatt 5, Aufg. 5a/b)',
      beispiele: [
        '**Aufgabe:** Wie viele Elemente hat $S_3$, und wie lauten alle Permutationen in Zwei-Zeilen-Form?\n**Lösung:** $\\lvert S_3\\rvert = 3! = 6$. Für die untere Zeile gibt es $3$ Möglichkeiten für $f(1)$, dann $2$ für $f(2)$, dann $1$ für $f(3)$. Alle sechs: $\\begin{pmatrix}1&2&3\\\\1&2&3\\end{pmatrix}, \\begin{pmatrix}1&2&3\\\\1&3&2\\end{pmatrix}, \\begin{pmatrix}1&2&3\\\\2&1&3\\end{pmatrix}, \\begin{pmatrix}1&2&3\\\\2&3&1\\end{pmatrix}, \\begin{pmatrix}1&2&3\\\\3&1&2\\end{pmatrix}, \\begin{pmatrix}1&2&3\\\\3&2&1\\end{pmatrix}$.\n**Ergebnis:** $S_3$ hat $6$ Elemente (siehe Tabelle $\\pi_1,\\dots,\\pi_6$).',
        '**Aufgabe:** Was ist das Neutralelement von $(S_3,\\circ)$?\n**Lösung:** Gesucht ist $e$ mit $f \\circ e = e \\circ f = f$ für alle $f$. Das leistet die **identische Abbildung** $x \\mapsto x$, denn $f(e(x)) = f(x)$ und $e(f(x)) = f(x)$.\n**Ergebnis:** $e = \\pi_1 = \\begin{pmatrix}1&2&3\\\\1&2&3\\end{pmatrix}$.',
        '**Aufgabe:** Ist $\\begin{pmatrix}1&2&3\\\\3&3&1\\end{pmatrix}$ eine Permutation von $\\{1,2,3\\}$?\n**Lösung:** In der unteren Zeile muss jede Zahl aus $\\{1,2,3\\}$ genau einmal stehen (Bijektivität). Hier kommt $3$ zweimal vor und $2$ gar nicht — die Abbildung ist nicht injektiv/surjektiv.\n**Ergebnis:** Nein, das ist keine Permutation (kein Element von $S_3$).',
      ],
    },
    {
      szenario: 'Permutationen verketten',
      beispiele: [
        '**Aufgabe:** Berechne $\\pi_2 \\circ \\pi_3$ mit $\\pi_2 = (2\\ 3)$ und $\\pi_3 = (1\\ 2)$.\n**Lösung:** Erst $\\pi_3$, dann $\\pi_2$ (rechts zuerst). $1 \\xrightarrow{\\pi_3} 2 \\xrightarrow{\\pi_2} 3$; $2 \\xrightarrow{\\pi_3} 1 \\xrightarrow{\\pi_2} 1$; $3 \\xrightarrow{\\pi_3} 3 \\xrightarrow{\\pi_2} 2$. Untere Zeile also $3,1,2$: $\\begin{pmatrix}1&2&3\\\\3&1&2\\end{pmatrix} = (1\\ 3\\ 2)$.\n**Ergebnis:** $\\pi_2 \\circ \\pi_3 = \\pi_5 = (1\\ 3\\ 2)$.',
        '**Aufgabe:** Berechne $\\pi_3 \\circ \\pi_2$ (gleiche $\\pi_2,\\pi_3$) und vergleiche mit $\\pi_2 \\circ \\pi_3$.\n**Lösung:** Jetzt erst $\\pi_2 = (2\\ 3)$, dann $\\pi_3 = (1\\ 2)$. $1 \\xrightarrow{\\pi_2} 1 \\xrightarrow{\\pi_3} 2$; $2 \\xrightarrow{\\pi_2} 3 \\xrightarrow{\\pi_3} 3$; $3 \\xrightarrow{\\pi_2} 2 \\xrightarrow{\\pi_3} 1$. Untere Zeile $2,3,1$: $\\begin{pmatrix}1&2&3\\\\2&3&1\\end{pmatrix} = (1\\ 2\\ 3)$.\n**Ergebnis:** $\\pi_3 \\circ \\pi_2 = \\pi_4 \\neq \\pi_5 = \\pi_2 \\circ \\pi_3$ — Reihenfolge zählt.',
        '**Aufgabe:** Berechne $\\pi_4 \\circ \\pi_4$ mit $\\pi_4 = (1\\ 2\\ 3)$.\n**Lösung:** Zweimal $1 \\mapsto 2 \\mapsto 3 \\mapsto 1$ hintereinander. $1 \\to 2 \\to 3$; $2 \\to 3 \\to 1$; $3 \\to 1 \\to 2$. Untere Zeile $3,1,2$: $(1\\ 3\\ 2)$.\n**Ergebnis:** $\\pi_4 \\circ \\pi_4 = \\pi_5 = (1\\ 3\\ 2)$ (das Quadrat eines Dreierzykels ist der umgekehrte Dreierzykel).',
      ],
    },
    {
      szenario: 'Inverse & Ordnung (Übungsblatt 5, Aufg. 5c/d)',
      beispiele: [
        '**Aufgabe:** Bestimme das Inverse von $\\pi_4 = \\begin{pmatrix}1&2&3\\\\2&3&1\\end{pmatrix}$.\n**Lösung:** Zeilen vertauschen: $2\\mapsto 1$, $3\\mapsto 2$, $1\\mapsto 3$. Nach oberer Zeile $1,2,3$ sortiert: $1\\mapsto 3$, $2\\mapsto 1$, $3\\mapsto 2$, also $\\begin{pmatrix}1&2&3\\\\3&1&2\\end{pmatrix}$. In Zykeln: $(1\\ 2\\ 3)^{-1} = (1\\ 3\\ 2)$. Probe $\\pi_4 \\circ \\pi_5 = \\pi_1$ (siehe Tafel).\n**Ergebnis:** $\\pi_4^{-1} = \\pi_5 = (1\\ 3\\ 2)$.',
        '**Aufgabe:** Bestimme die Ordnung von $\\pi_6 = (1\\ 3)$ und von $\\pi_5 = (1\\ 3\\ 2)$.\n**Lösung:** $\\pi_6$ ist eine Transposition: $\\pi_6 \\circ \\pi_6$ vertauscht $1,3$ zweimal, ergibt $e$, also Ordnung $2$. $\\pi_5$ ist ein Dreierzykel: $\\pi_5^2 = (1\\ 2\\ 3) \\neq e$, aber $\\pi_5^3 = e$, also Ordnung $3$.\n**Ergebnis:** $\\operatorname{ord}(\\pi_6) = 2$, $\\operatorname{ord}(\\pi_5) = 3$.',
        '**Aufgabe:** Zeige, dass $(S_3,\\circ)$ nicht kommutativ ist.\n**Lösung:** Es genügt **ein** Gegenbeispiel. Mit $\\pi_2 = (2\\ 3)$ und $\\pi_3 = (1\\ 2)$ gilt $\\pi_2 \\circ \\pi_3 = \\pi_5$, aber $\\pi_3 \\circ \\pi_2 = \\pi_4$ (oben nachgerechnet). Da $\\pi_4 \\neq \\pi_5$, ist $\\pi_2 \\circ \\pi_3 \\neq \\pi_3 \\circ \\pi_2$.\n**Ergebnis:** $S_3$ ist eine Gruppe, aber **nicht** abelsch.',
      ],
    },
  ],
}
