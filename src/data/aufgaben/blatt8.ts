import type { Aufgabe } from '../../types'

export const b8: Aufgabe[] = [
  // ─── Aufgabe 1: parameterabhängige LGS (a/b) ──────────────────────────────
  {
    id: 'b8_a1a',
    titel: 'Parameter $\\alpha$ (a): $(G_1)$',
    aufgabeText:
      'Überlegen Sie, für welche $\\alpha \\in \\mathbb{R}$ das lineare Gleichungssystem (i) keine, (ii) genau eine, (iii) unendlich viele Lösungen besitzt.\n\n' +
      '$(G_1):\\quad \\begin{aligned} 2x_1 + \\alpha x_2 + \\alpha x_3 &= 5 \\\\ -x_2 + 3\\alpha x_3 &= -6 \\\\ (5 - \\alpha)x_3 &= \\alpha - 1 \\end{aligned}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Lösbarkeit über den Rang',
        inhalt:
          'Die Anzahl der Lösungen hängt vom Rang ab. Der Rang ist die Anzahl der Nicht-Null-Zeilen in der Zeilenstufenform.\n\n' +
          '  Rang$(A)$ = Rang$(A|b)$ = Anzahl Unbekannte $n$ → genau eine Lösung\n' +
          '  Rang$(A)$ = Rang$(A|b)$ < $n$ → unendlich viele Lösungen\n' +
          '  Rang$(A)$ < Rang$(A|b)$ → keine Lösung\n\n' +
          'Hier ist $n = 3$ Unbekannte.',
      },
      {
        icon: '🔍',
        titel: 'Matrix ist schon fast Stufenform',
        inhalt:
          'Die erweiterte Koeffizientenmatrix ist bereits dreieckig:\n' +
          '  $\\left(\\begin{array}{ccc|c} 2 & \\alpha & \\alpha & 5 \\\\ 0 & -1 & 3\\alpha & -6 \\\\ 0 & 0 & 5-\\alpha & \\alpha-1 \\end{array}\\right)$\n\n' +
          'Die kritische Stelle ist die letzte Zeile: $(5-\\alpha)x_3 = \\alpha - 1$.',
      },
      {
        icon: '📝',
        titel: 'Fallunterscheidung bei der letzten Zeile',
        inhalt:
          'Fall $\\alpha \\neq 5$: $5 - \\alpha \\neq 0$, also hat Zeile 3 ein Pivot. Rang$(A) = 3 = n$ → genau eine Lösung.\n\n' +
          'Fall $\\alpha = 5$: Die letzte Zeile wird $0 \\cdot x_3 = 5 - 1 = 4$, also $0 = 4$ – ein Widerspruch. Rang$(A) = 2 < 3 = $ Rang$(A|b)$ → keine Lösung.',
      },
      {
        icon: '⚠️',
        titel: 'Fazit zusammenstellen',
        inhalt:
          'Da bei $\\alpha = 5$ ein echter Widerspruch entsteht (rechte Seite $\\neq 0$), gibt es keinen Fall mit unendlich vielen Lösungen.',
      },
    ],
    loesung:
      'Anzahl Unbekannte $n = 3$. Erweiterte Koeffizientenmatrix:\n' +
      '$\\left(\\begin{array}{ccc|c} 2 & \\alpha & \\alpha & 5 \\\\ 0 & -1 & 3\\alpha & -6 \\\\ 0 & 0 & 5-\\alpha & \\alpha-1 \\end{array}\\right)$\n\n' +
      'Rang$(A_\\alpha) = \\begin{cases} 2, & \\alpha = 5 \\\\ 3, & \\alpha \\neq 5 \\end{cases}$  und  Rang$(A_\\alpha|b_\\alpha) = 3$.\n\n' +
      'Für $\\alpha \\neq 5$ ist Rang$(A_\\alpha) = $ Rang$(A_\\alpha|b_\\alpha) = 3 = n$ → eindeutig lösbar. Für $\\alpha = 5$ ist Rang$(A_\\alpha) = 2 < 3 = $ Rang$(A_\\alpha|b_\\alpha)$ → keine Lösung.\n\n' +
      'Fazit:\n' +
      '(i) Für $\\alpha = 5$ gibt es keine Lösung.\n' +
      '(ii) Für $\\alpha \\in \\mathbb{R} \\setminus \\{5\\}$ gibt es genau eine Lösung.\n' +
      '(iii) Tritt nicht ein.',
    schwierigkeit: 'schwer',
    kategorie: 'Lineare Gleichungssysteme',
  },
  {
    id: 'b8_a1b',
    titel: 'Parameter $\\alpha$ (b): $(G_2)$',
    aufgabeText:
      'Überlegen Sie, für welche $\\alpha \\in \\mathbb{R}$ das lineare Gleichungssystem (i) keine, (ii) genau eine, (iii) unendlich viele Lösungen besitzt.\n\n' +
      '$(G_2):\\quad \\begin{aligned} x_1 + x_2 + \\alpha x_3 &= -1 \\\\ 2x_1 + 3x_2 + 3\\alpha x_3 &= -1 \\\\ x_2 + (\\alpha^2 - 2)x_3 &= \\alpha - 1 \\end{aligned}$\n\n' +
      'Hinweis: Die Lösungen von $\\alpha^2 - \\alpha - 2 = 0$ sind $\\alpha_1 = -1$ und $\\alpha_2 = 2$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Erst auf Stufenform bringen',
        inhalt:
          'Stelle die erweiterte Koeffizientenmatrix auf und eliminiere wie üblich. Mit (ii)$-2$(i) und danach (iii)$-$(ii) (der neuen Zeile ii) entsteht eine Dreiecksform, in der der Parameter $\\alpha$ in der letzten Zeile steht.',
      },
      {
        icon: '🔍',
        titel: 'Die entscheidende letzte Zeile',
        inhalt:
          'Nach dem Umformen erhält man:\n' +
          '  $\\left(\\begin{array}{ccc|c} 1 & 1 & \\alpha & -1 \\\\ 0 & 1 & \\alpha & 1 \\\\ 0 & 0 & \\alpha^2-\\alpha-2 & \\alpha-2 \\end{array}\\right)$\n\n' +
          'Der Term $\\alpha^2 - \\alpha - 2$ wird nach dem Hinweis Null bei $\\alpha = -1$ und $\\alpha = 2$.',
      },
      {
        icon: '📝',
        titel: 'Drei Fälle prüfen',
        inhalt:
          'Fall $\\alpha \\notin \\{-1, 2\\}$: $\\alpha^2-\\alpha-2 \\neq 0$ → Pivot in Zeile 3 → Rang 3 = $n$ → genau eine Lösung.\n\n' +
          'Fall $\\alpha = 2$: letzte Zeile wird $0 = 2 - 2 = 0$ (wahr) → Rang$(A)$ = Rang$(A|b)$ = 2 < 3 → unendlich viele Lösungen.\n\n' +
          'Fall $\\alpha = -1$: letzte Zeile wird $0 = -1 - 2 = -3$ (Widerspruch) → Rang$(A) = 2 < 3 = $ Rang$(A|b)$ → keine Lösung.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Die beiden Nullstellen sorgfältig unterscheiden: bei $\\alpha = 2$ wird auch die rechte Seite Null (lösbar), bei $\\alpha = -1$ nicht (unlösbar).',
      },
    ],
    loesung:
      'Erweiterte Koeffizientenmatrix und Umformung (ii)$-2$(i), dann (iii)$-$(ii):\n' +
      '$\\left(\\begin{array}{ccc|c} 1 & 1 & \\alpha & -1 \\\\ 2 & 3 & 3\\alpha & -1 \\\\ 0 & 1 & \\alpha^2-2 & \\alpha-1 \\end{array}\\right) \\longrightarrow \\left(\\begin{array}{ccc|c} 1 & 1 & \\alpha & -1 \\\\ 0 & 1 & \\alpha & 1 \\\\ 0 & 0 & \\alpha^2-\\alpha-2 & \\alpha-2 \\end{array}\\right)$\n\n' +
      'Rang$(A_\\alpha) = \\begin{cases} 2, & \\alpha = 2 \\text{ oder } \\alpha = -1 \\\\ 3, & \\alpha \\in \\mathbb{R} \\setminus \\{-1, 2\\} \\end{cases}$ und Rang$(A_\\alpha|b_\\alpha) = \\begin{cases} 2, & \\alpha = 2 \\\\ 3, & \\alpha \\in \\mathbb{R} \\setminus \\{2\\} \\end{cases}$\n\n' +
      'Lösbar ($\\Leftrightarrow$ gleiche Ränge) für $\\alpha \\in \\mathbb{R} \\setminus \\{-1\\}$; eindeutig lösbar ($\\Leftrightarrow$ Rang 3) für $\\alpha \\in \\mathbb{R} \\setminus \\{-1, 2\\}$.\n\n' +
      'Fazit:\n' +
      '(i) Für $\\alpha = -1$ gibt es keine Lösung (letzte Zeile $0 = -3$).\n' +
      '(ii) Für $\\alpha \\in \\mathbb{R} \\setminus \\{-1, 2\\}$ gibt es genau eine Lösung.\n' +
      '(iii) Für $\\alpha = 2$ gibt es unendlich viele Lösungen (letzte Zeile $0 = 0$).',
    schwierigkeit: 'schwer',
    kategorie: 'Lineare Gleichungssysteme',
  },

  // ─── Aufgabe 2: Determinante 2x2 → eindeutige Lösung? (a/b/c) ──────────────
  {
    id: 'b8_a2a',
    titel: 'Determinante entscheidet (a)',
    aufgabeText:
      'Geben Sie die erweiterte Koeffizientenmatrix an. Prüfen Sie über die Determinante der Koeffizientenmatrix, ob das LGS eine eindeutige Lösung besitzt. Wenn Zeit ist: Lösungsmenge mit dem Gauß-Verfahren.\n\n' +
      '$\\begin{aligned} 2x_1 + x_2 &= 1 \\\\ -4x_1 - 2x_2 &= -3 \\end{aligned}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Determinante einer 2×2-Matrix',
        inhalt:
          'Für $A = \\begin{pmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{pmatrix}$ ist die Determinante\n' +
          '  $\\det A = a_{11}a_{22} - a_{21}a_{12}$\n' +
          '(Hauptdiagonale mal, minus Nebendiagonale mal).',
      },
      {
        icon: '🔍',
        titel: 'Eindeutigkeits-Kriterium',
        inhalt:
          'Ein LGS mit 2 Gleichungen und 2 Unbekannten hat genau dann eine eindeutige Lösung, wenn $\\det A \\neq 0$.\n\n' +
          'Ist $\\det A = 0$, gibt es entweder keine oder unendlich viele Lösungen (das Gauß-Verfahren klärt, welcher Fall).',
      },
      {
        icon: '📝',
        titel: 'Hier berechnen',
        inhalt:
          'Koeffizientenmatrix $\\begin{pmatrix} 2 & 1 \\\\ -4 & -2 \\end{pmatrix}$:\n' +
          '  $\\det = 2 \\cdot (-2) - (-4) \\cdot 1 = -4 + 4 = 0$\n\n' +
          'Also keine eindeutige Lösung. Das Gauß-Verfahren zeigt: Zeile 2 ist $-2 \\cdot$ Zeile 1 in den Koeffizienten, aber die rechte Seite passt nicht ($-2\\cdot 1 = -2 \\neq -3$) → Widerspruch.',
      },
      {
        icon: '⚠️',
        titel: 'Lösungsmenge',
        inhalt:
          'Der Widerspruch bedeutet: keine Lösung, $L = \\emptyset$.',
      },
    ],
    loesung:
      'Erweiterte Koeffizientenmatrix: $\\left(\\begin{array}{cc|c} 2 & 1 & 1 \\\\ -4 & -2 & -3 \\end{array}\\right)$\n\n' +
      '$\\det \\begin{pmatrix} 2 & 1 \\\\ -4 & -2 \\end{pmatrix} = 2\\cdot(-2) - (-4)\\cdot 1 = 0$.\n\n' +
      'Da die Determinante $0$ ist, besitzt das LGS KEINE eindeutige Lösung.\n\n' +
      'Gauß-Verfahren: Lösungsmenge $= \\emptyset$ (die zweite Gleichung widerspricht dem Doppelten der ersten).',
    schwierigkeit: 'mittel',
    kategorie: 'Determinanten',
  },
  {
    id: 'b8_a2b',
    titel: 'Determinante entscheidet (b)',
    aufgabeText:
      'Geben Sie die erweiterte Koeffizientenmatrix an. Prüfen Sie über die Determinante, ob das LGS eine eindeutige Lösung besitzt. Wenn Zeit ist: Lösungsmenge mit dem Gauß-Verfahren.\n\n' +
      '$\\begin{aligned} 2x_1 - 2 &= -2x_2 \\\\ 4x_1 + 3x_2 - 1 &= 0 \\end{aligned}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Erst umstellen',
        inhalt:
          'Bringe beide Gleichungen in Standardform (Unbekannte links, Konstante rechts):\n' +
          '  $2x_1 - 2 = -2x_2 \\Rightarrow 2x_1 + 2x_2 = 2$\n' +
          '  $4x_1 + 3x_2 - 1 = 0 \\Rightarrow 4x_1 + 3x_2 = 1$',
      },
      {
        icon: '🔍',
        titel: 'Determinante prüfen',
        inhalt:
          'Koeffizientenmatrix $\\begin{pmatrix} 2 & 2 \\\\ 4 & 3 \\end{pmatrix}$:\n' +
          '  $\\det = 2\\cdot 3 - 4\\cdot 2 = 6 - 8 = -2 \\neq 0$\n\n' +
          'Da $\\det \\neq 0$, gibt es GENAU EINE Lösung.',
      },
      {
        icon: '📝',
        titel: 'Lösung berechnen',
        inhalt:
          'Mit dem Gauß-Verfahren (oder Einsetzen): Aus $2x_1 + 2x_2 = 2$ folgt $x_1 + x_2 = 1$. Einsetzen in $4x_1 + 3x_2 = 1$ liefert $x_1 = -2$, $x_2 = 3$.',
      },
      {
        icon: '⚠️',
        titel: 'Lösungsmenge',
        inhalt:
          '$\\left\\{ \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix} \\right\\}$',
      },
    ],
    loesung:
      'Umgestellt: $2x_1 + 2x_2 = 2$ und $4x_1 + 3x_2 = 1$.\n\n' +
      'Erweiterte Koeffizientenmatrix: $\\left(\\begin{array}{cc|c} 2 & 2 & 2 \\\\ 4 & 3 & 1 \\end{array}\\right)$\n\n' +
      '$\\det \\begin{pmatrix} 2 & 2 \\\\ 4 & 3 \\end{pmatrix} = 2\\cdot 3 - 4\\cdot 2 = -2 \\neq 0$.\n\n' +
      'Da die Determinante $\\neq 0$ ist, besitzt das LGS GENAU EINE Lösung.\n\n' +
      'Gauß-Verfahren: Lösungsmenge $= \\left\\{ \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix} \\right\\}$.',
    schwierigkeit: 'mittel',
    kategorie: 'Determinanten',
  },
  {
    id: 'b8_a2c',
    titel: 'Determinante entscheidet (c)',
    aufgabeText:
      'Geben Sie die erweiterte Koeffizientenmatrix an. Prüfen Sie über die Determinante, ob das LGS eine eindeutige Lösung besitzt. Wenn Zeit ist: Lösungsmenge mit dem Gauß-Verfahren.\n\n' +
      '$\\begin{aligned} -1 + x_1 &= -2x_2 \\\\ 2x_1 &= -4x_2 + 2 \\end{aligned}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Umstellen',
        inhalt:
          '  $-1 + x_1 = -2x_2 \\Rightarrow x_1 + 2x_2 = 1$\n' +
          '  $2x_1 = -4x_2 + 2 \\Rightarrow 2x_1 + 4x_2 = 2$',
      },
      {
        icon: '🔍',
        titel: 'Determinante prüfen',
        inhalt:
          'Koeffizientenmatrix $\\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix}$:\n' +
          '  $\\det = 1\\cdot 4 - 2\\cdot 2 = 4 - 4 = 0$\n\n' +
          'Da $\\det = 0$, KEINE eindeutige Lösung. Das Gauß-Verfahren klärt: keine oder unendlich viele?',
      },
      {
        icon: '📝',
        titel: 'Gauß-Verfahren',
        inhalt:
          'Die zweite Gleichung ist genau das Doppelte der ersten ($2\\cdot(x_1+2x_2)=2$). Sie liefert keine neue Information → eine freie Variable.\n\n' +
          'Setze $r = x_2$. Aus $x_1 + 2x_2 = 1$: $x_1 = 1 - 2r$. → unendlich viele Lösungen.',
      },
      {
        icon: '⚠️',
        titel: 'Lösungsmenge',
        inhalt:
          '$\\left\\{ \\begin{pmatrix} 1 - 2r \\\\ r \\end{pmatrix} : r \\in \\mathbb{R} \\right\\}$',
      },
    ],
    loesung:
      'Umgestellt: $x_1 + 2x_2 = 1$ und $2x_1 + 4x_2 = 2$.\n\n' +
      'Erweiterte Koeffizientenmatrix: $\\left(\\begin{array}{cc|c} 1 & 2 & 1 \\\\ 2 & 4 & 2 \\end{array}\\right)$\n\n' +
      '$\\det \\begin{pmatrix} 1 & 2 \\\\ 2 & 4 \\end{pmatrix} = 1\\cdot 4 - 2\\cdot 2 = 0$.\n\n' +
      'Da die Determinante $0$ ist, besitzt das LGS KEINE eindeutige Lösung.\n\n' +
      'Gauß-Verfahren (zweite Gleichung = Doppeltes der ersten): Lösungsmenge $= \\left\\{ \\begin{pmatrix} 1 - 2r \\\\ r \\end{pmatrix} : r \\in \\mathbb{R} \\right\\}$ (unendlich viele Lösungen).',
    schwierigkeit: 'mittel',
    kategorie: 'Determinanten',
  },

  // ─── Aufgabe 3: Determinanten berechnen (a/b/c) ───────────────────────────
  {
    id: 'b8_a3a',
    titel: 'Determinante einer 2×2-Matrix $A$',
    aufgabeText: 'Bestimmen Sie die Determinante der Matrix $A = \\begin{pmatrix} 3 & 5 \\\\ 9 & -3 \\end{pmatrix}$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Die 2×2-Formel',
        inhalt:
          '$\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc$\n\n' +
          'Also: Produkt der Hauptdiagonale ($a \\cdot d$) minus Produkt der Nebendiagonale ($b \\cdot c$).',
      },
      {
        icon: '🔍',
        titel: 'Einsetzen',
        inhalt:
          'Hier $a = 3$, $b = 5$, $c = 9$, $d = -3$:\n' +
          '  $\\det A = 3 \\cdot (-3) - 5 \\cdot 9$',
      },
      {
        icon: '📝',
        titel: 'Ausrechnen',
        inhalt:
          '  $= -9 - 45 = -54$',
      },
      {
        icon: '⚠️',
        titel: 'Vorzeichen',
        inhalt:
          '• Auf die Minuszeichen achten: $3\\cdot(-3)$ ist negativ, und davon wird noch $5\\cdot 9$ abgezogen.',
      },
    ],
    loesung: '$\\det(A) = 3 \\cdot (-3) - 9 \\cdot 5 = -9 - 45 = -54$',
    schwierigkeit: 'einfach',
    kategorie: 'Determinanten',
  },
  {
    id: 'b8_a3b',
    titel: 'Determinante einer 3×3-Matrix $B$ (Entwicklung)',
    aufgabeText: 'Bestimmen Sie die Determinante der Matrix $B = \\begin{pmatrix} 1 & 2 & 4 \\\\ -2 & 7 & 2 \\\\ 0 & -1 & 0 \\end{pmatrix}$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Laplace-Entwicklung',
        inhalt:
          'Eine 3×3-Determinante kann man nach einer Zeile oder Spalte „entwickeln". Geschickt ist eine Zeile/Spalte mit vielen Nullen, weil dann weniger zu rechnen ist.\n\n' +
          'Hier hat Zeile 3 zwei Nullen ($0, -1, 0$) – ideal.',
      },
      {
        icon: '🔍',
        titel: 'Vorzeichenschema',
        inhalt:
          'Beim Entwickeln gehört zu jedem Element ein Vorzeichen nach dem Schachbrettmuster:\n' +
          '  $\\begin{pmatrix} + & - & + \\\\ - & + & - \\\\ + & - & + \\end{pmatrix}$\n\n' +
          'Das einzige Nicht-Null-Element in Zeile 3 ist $-1$ an Position (3,2). Dort steht ein Minus im Schema.',
      },
      {
        icon: '📝',
        titel: 'Streichen und 2×2 berechnen',
        inhalt:
          'Für das Element an (3,2) streicht man Zeile 3 und Spalte 2. Übrig bleibt $\\begin{pmatrix} 1 & 4 \\\\ -2 & 2 \\end{pmatrix}$.\n\n' +
          '  $\\det B = -(-1) \\cdot \\det \\begin{pmatrix} 1 & 4 \\\\ -2 & 2 \\end{pmatrix} = 1 \\cdot (1\\cdot 2 - 4\\cdot(-2))$',
      },
      {
        icon: '⚠️',
        titel: 'Ausrechnen',
        inhalt:
          '  $= 1 \\cdot (2 + 8) = 10$\n\n' +
          '• Doppeltes Minus beachten: das Schema-Minus mal das Element $-1$ ergibt $+1$.',
      },
    ],
    loesung:
      'Entwicklung nach Zeile 3 (zwei Nullen). Das einzige Nicht-Null-Element ist $-1$ an Position (3,2), Schema-Vorzeichen Minus:\n' +
      '  $\\det(B) = -(-1) \\cdot \\det \\begin{pmatrix} 1 & 4 \\\\ -2 & 2 \\end{pmatrix} = 1 \\cdot (1\\cdot 2 - 4\\cdot(-2)) = 2 + 8 = 10$',
    schwierigkeit: 'mittel',
    kategorie: 'Determinanten',
  },
  {
    id: 'b8_a3c',
    titel: 'Determinante einer 4×4-Matrix $C$',
    aufgabeText: 'Bestimmen Sie die Determinante der Matrix $C = \\begin{pmatrix} 2 & 1 & 0 & 3 \\\\ 0 & 1 & -4 & 2 \\\\ 1 & 4 & 0 & 7 \\\\ -1 & 0 & 0 & 5 \\end{pmatrix}$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Spalte mit vielen Nullen wählen',
        inhalt:
          'Bei 4×4 entwickelt man wieder nach einer Zeile/Spalte mit vielen Nullen. Spalte 3 enthält $0, -4, 0, 0$ – nur ein Nicht-Null-Eintrag. Sehr günstig.',
      },
      {
        icon: '🔍',
        titel: 'Nach Spalte 3 entwickeln',
        inhalt:
          'Das einzige Nicht-Null-Element in Spalte 3 ist $-4$ an Position (2,3). Schema-Vorzeichen an (2,3) ist Minus.\n\n' +
          'Streiche Zeile 2 und Spalte 3, es bleibt die 3×3-Matrix $\\begin{pmatrix} 2 & 1 & 3 \\\\ 1 & 4 & 7 \\\\ -1 & 0 & 5 \\end{pmatrix}$.\n\n' +
          '  $\\det C = -(-4) \\cdot \\det \\begin{pmatrix} 2 & 1 & 3 \\\\ 1 & 4 & 7 \\\\ -1 & 0 & 5 \\end{pmatrix}$',
      },
      {
        icon: '📝',
        titel: '3×3 mit Sarrus',
        inhalt:
          'Die Regel von Sarrus für 3×3 (Diagonalen nach rechts minus Diagonalen nach links):\n' +
          '  $2\\cdot4\\cdot5 + 1\\cdot7\\cdot(-1) + 3\\cdot1\\cdot0 - (-1)\\cdot4\\cdot3 - 0\\cdot7\\cdot2 - 5\\cdot1\\cdot1$\n' +
          '  $= 40 - 7 + 0 + 12 - 0 - 5 = 40$',
      },
      {
        icon: '⚠️',
        titel: 'Zusammensetzen',
        inhalt:
          '  $\\det C = -(-4) \\cdot 40 = 4 \\cdot 40 = 160$\n\n' +
          '• Das Vorzeichen sorgfältig führen: Schema-Minus mal $-4$ ergibt $+4$.',
      },
    ],
    loesung:
      'Entwicklung nach Spalte 3 (nur ein Nicht-Null-Eintrag $-4$ an (2,3), Schema-Minus):\n' +
      '  $\\det(C) = -(-4) \\cdot \\det \\begin{pmatrix} 2 & 1 & 3 \\\\ 1 & 4 & 7 \\\\ -1 & 0 & 5 \\end{pmatrix}$\n\n' +
      'Die 3×3-Determinante mit der Regel von Sarrus:\n' +
      '  $= 2\\cdot4\\cdot5 + 1\\cdot7\\cdot(-1) + 0 - (-1)\\cdot4\\cdot3 - 0 - 5\\cdot1\\cdot1 = 40 - 7 + 12 - 5 = 40$\n\n' +
      'Also $\\det(C) = 4 \\cdot 40 = 160$.',
    schwierigkeit: 'schwer',
    kategorie: 'Determinanten',
  },

  // ─── Aufgabe 4: Determinanten über Rechenregeln (a/b/c) ───────────────────
  {
    id: 'b8_a4a',
    titel: 'Determinante über Spaltentausch ($\\tilde{A}$)',
    aufgabeText: 'Bestimmen Sie die Determinante von $\\tilde{A} = \\begin{pmatrix} 5 & 3 \\\\ -3 & 9 \\end{pmatrix}$ unter Verwendung Ihrer Ergebnisse aus Aufgabe 3 (dort war $A = \\begin{pmatrix} 3 & 5 \\\\ 9 & -3 \\end{pmatrix}$, $\\det A = -54$). Verwenden Sie nicht den Laplaceschen Entwicklungssatz!',
    tippSections: [
      {
        icon: '💡',
        titel: 'Rechenregeln statt Neuberechnung',
        inhalt:
          'Statt die Determinante neu auszurechnen, vergleicht man $\\tilde{A}$ mit der bekannten Matrix $A$ und nutzt die Rechenregeln für Determinanten.',
      },
      {
        icon: '🔍',
        titel: 'Wie entsteht $\\tilde{A}$ aus $A$?',
        inhalt:
          '$A = \\begin{pmatrix} 3 & 5 \\\\ 9 & -3 \\end{pmatrix}$, $\\tilde{A} = \\begin{pmatrix} 5 & 3 \\\\ -3 & 9 \\end{pmatrix}$.\n\n' +
          'Vergleiche die Spalten: $\\tilde{A}$ hat die beiden Spalten von $A$ VERTAUSCHT (erste und zweite Spalte getauscht).',
      },
      {
        icon: '📝',
        titel: 'Regel: Spalten-/Zeilentausch',
        inhalt:
          'Beim Vertauschen zweier Spalten (oder Zeilen) ändert die Determinante ihr VORZEICHEN:\n' +
          '  $\\det \\tilde{A} = -\\det A = -(-54) = 54$',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Ein einzelner Tausch dreht das Vorzeichen einmal um. Zwei Tausche würden es wieder herstellen.',
      },
    ],
    loesung:
      '$\\tilde{A}$ entsteht aus $A$ durch Vertauschen der beiden Spalten. Ein Spaltentausch ändert das Vorzeichen der Determinante:\n' +
      '  $\\det(\\tilde{A}) = -\\det(A) = -(-54) = 54$',
    schwierigkeit: 'mittel',
    kategorie: 'Determinanten',
  },
  {
    id: 'b8_a4b',
    titel: 'Determinante über Zeilenskalierung ($\\tilde{B}$)',
    aufgabeText: 'Bestimmen Sie die Determinante von $\\tilde{B} = \\begin{pmatrix} 2 & 4 & 8 \\\\ -2 & 7 & 2 \\\\ 0 & -1 & 0 \\end{pmatrix}$ unter Verwendung Ihrer Ergebnisse aus Aufgabe 3 (dort war $B = \\begin{pmatrix} 1 & 2 & 4 \\\\ -2 & 7 & 2 \\\\ 0 & -1 & 0 \\end{pmatrix}$, $\\det B = 10$). Verwenden Sie nicht den Laplaceschen Entwicklungssatz!',
    tippSections: [
      {
        icon: '💡',
        titel: 'Erste Zeile vergleichen',
        inhalt:
          'Die zweite und dritte Zeile von $\\tilde{B}$ stimmen mit $B$ überein. Nur die erste Zeile ist anders.',
      },
      {
        icon: '🔍',
        titel: 'Wie entsteht $\\tilde{B}$?',
        inhalt:
          'Erste Zeile von $B$ ist $(1\\;2\\;4)$, von $\\tilde{B}$ ist $(2\\;4\\;8)$. Das ist genau das DOPPELTE: $\\tilde{B}$ entsteht durch Multiplikation der ersten Zeile von $B$ mit $2$.',
      },
      {
        icon: '📝',
        titel: 'Regel: Zeile skalieren',
        inhalt:
          'Multipliziert man eine Zeile (oder Spalte) mit einem Faktor $\\lambda$, so multipliziert sich die Determinante mit demselben $\\lambda$:\n' +
          '  $\\det \\tilde{B} = 2 \\cdot \\det B = 2 \\cdot 10 = 20$',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Achtung: Multipliziert man die GANZE Matrix (alle Zeilen) mit $2$, so wäre der Faktor $2^n$. Hier ist nur EINE Zeile betroffen, also nur ein Faktor $2$.',
      },
    ],
    loesung:
      '$\\tilde{B}$ entsteht aus $B$ durch Multiplikation der ersten Zeile mit $2$. Das multipliziert die Determinante mit $2$:\n' +
      '  $\\det(\\tilde{B}) = 2 \\cdot \\det(B) = 2 \\cdot 10 = 20$',
    schwierigkeit: 'mittel',
    kategorie: 'Determinanten',
  },
  {
    id: 'b8_a4c',
    titel: 'Determinante über Zeilenaddition ($\\tilde{C}$)',
    aufgabeText: 'Bestimmen Sie die Determinante von $\\tilde{C} = \\begin{pmatrix} 2 & 1 & 0 & 3 \\\\ 0 & 1 & -4 & 2 \\\\ 1 & 4 & 0 & 7 \\\\ 0 & 4 & 0 & 12 \\end{pmatrix}$ unter Verwendung Ihrer Ergebnisse aus Aufgabe 3 (dort war $\\det C = 160$, mit der vierten Zeile $(-1\\;0\\;0\\;5)$). Verwenden Sie nicht den Laplaceschen Entwicklungssatz!',
    tippSections: [
      {
        icon: '💡',
        titel: 'Nur die vierte Zeile ist anders',
        inhalt:
          'Die ersten drei Zeilen von $\\tilde{C}$ stimmen mit $C$ überein. Die vierte Zeile von $C$ war $(-1\\;0\\;0\\;5)$, die von $\\tilde{C}$ ist $(0\\;4\\;0\\;12)$.',
      },
      {
        icon: '🔍',
        titel: 'Wie entsteht die neue Zeile 4?',
        inhalt:
          'Addiere die dritte Zeile $(1\\;4\\;0\\;7)$ zur vierten Zeile $(-1\\;0\\;0\\;5)$:\n' +
          '  $(-1+1\\;\\;0+4\\;\\;0+0\\;\\;5+7) = (0\\;4\\;0\\;12)$\n\n' +
          'Das ist genau die vierte Zeile von $\\tilde{C}$. Also entsteht $\\tilde{C}$ durch „Zeile 3 zur Zeile 4 addieren".',
      },
      {
        icon: '📝',
        titel: 'Regel: Vielfaches einer Zeile addieren',
        inhalt:
          'Addiert man ein Vielfaches einer Zeile zu einer anderen Zeile, so ÄNDERT SICH die Determinante NICHT:\n' +
          '  $\\det \\tilde{C} = \\det C = 160$',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Diese Regel ist der Grund, warum man beim Gauß-Verfahren Zeilen addieren darf, ohne die Determinante zu verändern.',
      },
    ],
    loesung:
      '$\\tilde{C}$ entsteht aus $C$ durch Addition der dritten Zeile zur vierten Zeile ($(-1\\;0\\;0\\;5) + (1\\;4\\;0\\;7) = (0\\;4\\;0\\;12)$). Das Addieren eines Vielfachen einer Zeile zu einer anderen ändert die Determinante nicht:\n' +
      '  $\\det(\\tilde{C}) = \\det(C) = 160$',
    schwierigkeit: 'mittel',
    kategorie: 'Determinanten',
  },

  // ─── Aufgabe 5: Determinante über Zeilenstufenform (A/B/C) ────────────────
  {
    id: 'b8_a5a',
    titel: 'Determinante über ZSF: Matrix $A$ (gleiche Zeilen)',
    aufgabeText: 'Bestimmen Sie die Determinante, indem Sie die Matrix in Zeilenstufenform überführen:\n\n$A = \\begin{pmatrix} -1 & -1 & -1 & -1 & -1 \\\\ -1 & -1 & -1 & -1 & -1 \\\\ -1 & -1 & -1 & -1 & -1 \\\\ -1 & -1 & -1 & -1 & -1 \\\\ -1 & -1 & -1 & -1 & -1 \\end{pmatrix}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Determinante aus der Stufenform',
        inhalt:
          'In Zeilenstufenform ist die Determinante einfach das Produkt der Diagonalelemente. Insbesondere: Hat die Stufenform eine NULLZEILE, ist die Determinante $0$.',
      },
      {
        icon: '🔍',
        titel: 'Alle Zeilen sind gleich',
        inhalt:
          'Alle fünf Zeilen von $A$ sind identisch $(-1\\;-1\\;-1\\;-1\\;-1)$. Zieht man die erste Zeile von jeder anderen ab, werden vier Zeilen zu Nullzeilen.',
      },
      {
        icon: '📝',
        titel: 'Stufenform',
        inhalt:
          'Es bleibt nur eine Nicht-Null-Zeile übrig, der Rest ist null:\n' +
          '  $\\begin{pmatrix} -1 & -1 & -1 & -1 & -1 \\\\ 0 & 0 & 0 & 0 & 0 \\\\ \\vdots & & & & \\vdots \\\\ 0 & 0 & 0 & 0 & 0 \\end{pmatrix}$',
      },
      {
        icon: '⚠️',
        titel: 'Schlussfolgerung',
        inhalt:
          'Wegen der Nullzeilen ist $\\det A = 0$.\n\n' +
          '• Merksatz: Hat eine Matrix zwei gleiche Zeilen, ist ihre Determinante immer $0$.',
      },
    ],
    loesung:
      'Da alle Zeilen gleich sind, liefert das Abziehen der ersten Zeile von allen anderen die Matrix\n' +
      '  $\\begin{pmatrix} -1 & -1 & -1 & -1 & -1 \\\\ 0 & 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0 & 0 \\end{pmatrix}$\n\n' +
      'Wegen der Nullzeilen ist $\\det A = 0$.',
    schwierigkeit: 'mittel',
    kategorie: 'Determinanten',
  },
  {
    id: 'b8_a5b',
    titel: 'Determinante über ZSF: Matrix $B$ (Nullzeile)',
    aufgabeText: 'Bestimmen Sie die Determinante, indem Sie die Matrix in Zeilenstufenform überführen:\n\n$B = \\begin{pmatrix} 1 & 2 & 3 & 4 \\\\ 1 & -1 & 4 & 7 \\\\ 1 & 2 & 3 & 4 \\\\ 10 & 3 & -2 & -4 \\end{pmatrix}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Auf gleiche Zeilen achten',
        inhalt:
          'Bevor man losrechnet, lohnt ein Blick: Gibt es zwei identische Zeilen? Zeile 1 und Zeile 3 sind beide $(1\\;2\\;3\\;4)$.',
      },
      {
        icon: '🔍',
        titel: 'Zeile 1 von Zeile 3 abziehen',
        inhalt:
          'Subtrahiert man Zeile 1 von Zeile 3, wird Zeile 3 zur Nullzeile $(0\\;0\\;0\\;0)$.',
      },
      {
        icon: '📝',
        titel: 'Ergebnis',
        inhalt:
          'Sobald eine Nullzeile auftaucht, ist die Determinante $0$ – egal wie die übrigen Zeilen aussehen.',
      },
      {
        icon: '⚠️',
        titel: 'Merksatz',
        inhalt:
          '• Zwei gleiche Zeilen → Determinante $0$. Man muss gar nicht vollständig auf Stufenform bringen.',
      },
    ],
    loesung:
      'Zeile 1 und Zeile 3 sind identisch. Subtrahiert man die erste von der dritten, entsteht eine Nullzeile:\n' +
      '  $\\begin{pmatrix} 1 & 2 & 3 & 4 \\\\ 1 & -1 & 4 & 7 \\\\ 0 & 0 & 0 & 0 \\\\ 10 & 3 & -2 & -4 \\end{pmatrix}$\n\n' +
      'Wegen der Nullzeile ist $\\det B = 0$.',
    schwierigkeit: 'mittel',
    kategorie: 'Determinanten',
  },
  {
    id: 'b8_a5c',
    titel: 'Determinante über ZSF: Matrix $C$',
    aufgabeText: 'Bestimmen Sie die Determinante, indem Sie die Matrix in Zeilenstufenform überführen:\n\n$C = \\begin{pmatrix} 6 & 6 & 6 \\\\ 2 & 0 & 1 \\\\ 3 & 3 & 2 \\end{pmatrix}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Rechenregeln beim Umformen merken',
        inhalt:
          'Beim Überführen in Stufenform verändern manche Schritte die Determinante:\n' +
          '  Zeile mit $\\lambda$ multiplizieren → Determinante mal $\\lambda$ (muss man ausgleichen!)\n' +
          '  Vielfaches einer Zeile zu anderer addieren → Determinante unverändert\n' +
          '  Zeilentausch → Vorzeichen wechselt',
      },
      {
        icon: '🔍',
        titel: 'Erste Zeile vereinfachen',
        inhalt:
          'Klammere aus der ersten Zeile $(6\\;6\\;6)$ den Faktor $6$ aus. Dann steht vor der Determinante ein Faktor $6$:\n' +
          '  $\\det C = 6 \\cdot \\det \\begin{pmatrix} 1 & 1 & 1 \\\\ 2 & 0 & 1 \\\\ 3 & 3 & 2 \\end{pmatrix}$',
      },
      {
        icon: '📝',
        titel: 'Eliminieren (ändert Determinante nicht)',
        inhalt:
          'Mit (ii)$-2$(i) und (iii)$-3$(i):\n' +
          '  $\\begin{pmatrix} 1 & 1 & 1 \\\\ 0 & -2 & -1 \\\\ 0 & 0 & -1 \\end{pmatrix}$\n\n' +
          'Diese Schritte ändern die Determinante nicht. Jetzt ist die Matrix in Dreiecksform.',
      },
      {
        icon: '⚠️',
        titel: 'Diagonalprodukt',
        inhalt:
          'Bei Dreiecksform ist die Determinante das Produkt der Diagonale:\n' +
          '  $\\det C = 6 \\cdot (1 \\cdot (-2) \\cdot (-1)) = 6 \\cdot 2 = 12$',
      },
    ],
    loesung:
      'Erste Zeile durch Ausklammern von $6$ vereinfachen (Faktor $6$ vor die Determinante ziehen):\n' +
      '  $\\det C = 6 \\cdot \\det \\begin{pmatrix} 1 & 1 & 1 \\\\ 2 & 0 & 1 \\\\ 3 & 3 & 2 \\end{pmatrix}$\n\n' +
      'Mit (ii)$-2$(i) und (iii)$-3$(i) (ändert die Determinante nicht):\n' +
      '  $= 6 \\cdot \\det \\begin{pmatrix} 1 & 1 & 1 \\\\ 0 & -2 & -1 \\\\ 0 & 0 & -1 \\end{pmatrix} = 6 \\cdot (1 \\cdot (-2) \\cdot (-1)) = 6 \\cdot 2 = 12$',
    schwierigkeit: 'schwer',
    kategorie: 'Determinanten',
  },

  // ─── Aufgabe 6: homogenes LGS über Determinante (a/b/c) ───────────────────
  {
    id: 'b8_a6a',
    titel: 'Homogenes LGS über Determinante (a): keine Lösung?',
    aufgabeText:
      'Sei $\\alpha \\in \\mathbb{R}$. Betrachten Sie das LGS $\\begin{aligned} \\alpha x_1 + \\alpha x_2 &= 0 \\\\ \\alpha x_1 + (\\alpha - 1)x_2 &= 0 \\end{aligned}$.\n\n' +
      'Für welche $\\alpha \\in \\mathbb{R}$ besitzt es KEINE Lösung? Argumentieren Sie mit der Determinante.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Homogenes LGS',
        inhalt:
          'Die rechte Seite ist $\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$ – das LGS ist homogen. Solche Systeme haben IMMER mindestens eine Lösung, nämlich den Nullvektor $\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$.',
      },
      {
        icon: '🔍',
        titel: 'Determinante aufstellen',
        inhalt:
          'Koeffizientenmatrix $A_\\alpha = \\begin{pmatrix} \\alpha & \\alpha \\\\ \\alpha & \\alpha-1 \\end{pmatrix}$:\n' +
          '  $\\det A_\\alpha = \\alpha(\\alpha-1) - \\alpha \\cdot \\alpha = \\alpha^2 - \\alpha - \\alpha^2 = -\\alpha$',
      },
      {
        icon: '📝',
        titel: 'Folgerung',
        inhalt:
          'Da der Nullvektor immer eine Lösung ist, kann der Fall „keine Lösung" niemals eintreten – unabhängig von $\\alpha$.',
      },
      {
        icon: '⚠️',
        titel: 'Merke',
        inhalt:
          '• Homogene LGS sind nie unlösbar. Es geht nur um die Frage: genau eine oder unendlich viele Lösungen.',
      },
    ],
    loesung:
      'Die Koeffizientenmatrix ist $A_\\alpha = \\begin{pmatrix} \\alpha & \\alpha \\\\ \\alpha & \\alpha-1 \\end{pmatrix}$ mit $\\det A_\\alpha = \\alpha(\\alpha-1) - \\alpha^2 = -\\alpha$.\n\n' +
      'Es handelt sich um ein homogenes LGS (rechte Seite $\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$). Daher ist der Nullvektor $\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$ stets eine Lösung.\n\n' +
      'Der Fall „keine Lösung" tritt also für KEIN $\\alpha \\in \\mathbb{R}$ ein.',
    schwierigkeit: 'mittel',
    kategorie: 'Determinanten',
  },
  {
    id: 'b8_a6b',
    titel: 'Homogenes LGS über Determinante (b): genau eine Lösung?',
    aufgabeText:
      'Sei $\\alpha \\in \\mathbb{R}$. Betrachten Sie das LGS $\\begin{aligned} \\alpha x_1 + \\alpha x_2 &= 0 \\\\ \\alpha x_1 + (\\alpha - 1)x_2 &= 0 \\end{aligned}$.\n\n' +
      'Für welche $\\alpha \\in \\mathbb{R}$ besitzt es GENAU EINE Lösung? Argumentieren Sie mit der Determinante.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Determinanten-Kriterium',
        inhalt:
          'Ein quadratisches LGS hat genau dann eine eindeutige Lösung, wenn $\\det A \\neq 0$. Beim homogenen System ist diese eindeutige Lösung dann der Nullvektor.',
      },
      {
        icon: '🔍',
        titel: 'Determinante nutzen',
        inhalt:
          'Aus Teil (a): $\\det A_\\alpha = -\\alpha$.\n\n' +
          '  $\\det A_\\alpha \\neq 0 \\Leftrightarrow -\\alpha \\neq 0 \\Leftrightarrow \\alpha \\neq 0$',
      },
      {
        icon: '📝',
        titel: 'Folgerung',
        inhalt:
          'Für alle $\\alpha \\neq 0$ ist die Determinante ungleich Null → genau eine Lösung (der Nullvektor).',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Bei homogenen Systemen heißt „genau eine Lösung" immer: nur der triviale Nullvektor.',
      },
    ],
    loesung:
      'Mit $\\det A_\\alpha = -\\alpha$ (aus Teil a) gilt: das LGS ist genau dann eindeutig lösbar, wenn $\\det A_\\alpha \\neq 0$, also $-\\alpha \\neq 0$, d.h. $\\alpha \\neq 0$.\n\n' +
      'Für jedes $\\alpha \\in \\mathbb{R} \\setminus \\{0\\}$ gibt es genau eine Lösung, nämlich $\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$.',
    schwierigkeit: 'mittel',
    kategorie: 'Determinanten',
  },
  {
    id: 'b8_a6c',
    titel: 'Homogenes LGS über Determinante (c): unendlich viele Lösungen?',
    aufgabeText:
      'Sei $\\alpha \\in \\mathbb{R}$. Betrachten Sie das LGS $\\begin{aligned} \\alpha x_1 + \\alpha x_2 &= 0 \\\\ \\alpha x_1 + (\\alpha - 1)x_2 &= 0 \\end{aligned}$.\n\n' +
      'Für welche $\\alpha \\in \\mathbb{R}$ besitzt es UNENDLICH VIELE Lösungen? Argumentieren Sie mit der Determinante.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Wann ist $\\det A = 0$?',
        inhalt:
          'Aus Teil (a): $\\det A_\\alpha = -\\alpha$. Also ist $\\det A_\\alpha = 0$ genau dann, wenn $\\alpha = 0$.\n\n' +
          'Bei $\\det A = 0$ ist das System nicht eindeutig lösbar – es hat dann entweder keine oder unendlich viele Lösungen.',
      },
      {
        icon: '🔍',
        titel: 'Welcher der beiden Fälle?',
        inhalt:
          'Da das LGS homogen ist, kann „keine Lösung" nicht eintreten (Teil a). Bei $\\det A = 0$ bleibt also nur: unendlich viele Lösungen.',
      },
      {
        icon: '📝',
        titel: 'Folgerung',
        inhalt:
          'Unendlich viele Lösungen gibt es genau dann, wenn $\\alpha = 0$.\n\n' +
          'Kontrolle für $\\alpha = 0$: Das System wird $0 = 0$ und $-x_2 = 0$, also $x_2 = 0$ und $x_1$ frei → tatsächlich unendlich viele Lösungen.',
      },
      {
        icon: '⚠️',
        titel: 'Zusammenfassung',
        inhalt:
          '• (a) keine: nie. (b) genau eine: für $\\alpha \\neq 0$. (c) unendlich viele: für $\\alpha = 0$.',
      },
    ],
    loesung:
      'Es ist $\\det A_\\alpha = -\\alpha = 0$ genau dann, wenn $\\alpha = 0$. In diesem Fall ist das LGS nicht eindeutig lösbar (keine oder unendlich viele Lösungen).\n\n' +
      'Da der homogene Fall „keine Lösung" ausschließt (Teil a), gibt es bei $\\alpha = 0$ unendlich viele Lösungen.\n\n' +
      'Fazit: unendlich viele Lösungen genau dann, wenn $\\alpha = 0$.',
    schwierigkeit: 'mittel',
    kategorie: 'Determinanten',
  },
]
