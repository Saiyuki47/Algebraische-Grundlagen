import type { Aufgabe } from '../../types'

export const b7: Aufgabe[] = [
  // ─── Aufgabe 1: LGS erkennen + erweiterte Koeffizientenmatrix (a–f) ───────
  {
    id: 'b7_a1a',
    titel: 'LGS erkennen (a): $(G_1)$',
    aufgabeText:
      'Betrachten Sie das folgende Gleichungssystem und geben Sie, falls es ein lineares Gleichungssystem ist, die erweiterte Koeffizientenmatrix an.\n\n' +
      '$(G_1):\\quad \\begin{aligned} 2x_1 + x_2 &= 1 \\\\ -4x_1 - 2x_2 &= -3 \\\\ 3x_1 + 4x_2 &= 0 \\\\ -4x_1 &= 7 \\end{aligned}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was ist ein lineares Gleichungssystem?',
        inhalt:
          'Ein lineares Gleichungssystem (LGS) besteht nur aus Gleichungen, in denen die Unbekannten $x_1, x_2, \\ldots$ ausschließlich mit konstanten Faktoren multipliziert und addiert werden.\n\n' +
          'NICHT erlaubt (macht es nicht-linear): Produkte von Unbekannten ($x_1 x_2$), Potenzen ($x_1^2$), Beträge ($|x_1|$), Wurzeln usw.',
      },
      {
        icon: '🔍',
        titel: 'Erweiterte Koeffizientenmatrix',
        inhalt:
          'Man schreibt nur die Zahlen (Koeffizienten) der Unbekannten in eine Tabelle und ergänzt rechts (hinter einem Strich) die rechte Seite der Gleichung.\n\n' +
          'Fehlt eine Unbekannte in einer Gleichung, schreibt man dort eine $0$. Beispiel: $-4x_1 = 7$ liefert die Zeile $(-4 \\;\\; 0 \\mid 7)$, weil $x_2$ nicht vorkommt.',
      },
      {
        icon: '📝',
        titel: 'Hier konkret',
        inhalt:
          'Alle vier Gleichungen sind linear. Zeile für Zeile die Koeffizienten von $x_1$ und $x_2$ und die rechte Seite ablesen:\n' +
          '  $2x_1 + x_2 = 1 \\to (2 \\;\\; 1 \\mid 1)$\n' +
          '  $-4x_1 - 2x_2 = -3 \\to (-4 \\;\\; -2 \\mid -3)$\n' +
          '  $3x_1 + 4x_2 = 0 \\to (3 \\;\\; 4 \\mid 0)$\n' +
          '  $-4x_1 = 7 \\to (-4 \\;\\; 0 \\mid 7)$',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Fehlende Unbekannte: bei $-4x_1 = 7$ nicht die $0$ für $x_2$ vergessen.',
      },
    ],
    loesung:
      '$(G_1)$ ist ein LGS. Erweiterte Koeffizientenmatrix:\n\n' +
      '$\\left(\\begin{array}{cc|c} 2 & 1 & 1 \\\\ -4 & -2 & -3 \\\\ 3 & 4 & 0 \\\\ -4 & 0 & 7 \\end{array}\\right)$',
    schwierigkeit: 'einfach',
    kategorie: 'Lineare Gleichungssysteme',
  },
  {
    id: 'b7_a1b',
    titel: 'LGS erkennen (b): $(G_2)$',
    aufgabeText:
      'Betrachten Sie das folgende Gleichungssystem und geben Sie, falls es ein lineares Gleichungssystem ist, die erweiterte Koeffizientenmatrix an.\n\n' +
      '$(G_2):\\quad \\begin{aligned} 3x_3 + 2x_1 + 1 &= -x_2 \\\\ 4x_1 + 3x_2 - 1 &= 0 \\end{aligned}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Erst sortieren',
        inhalt:
          'Bevor man die Matrix aufstellt, bringt man jede Gleichung in die Standardform: alle Unbekannten (nach $x_1, x_2, x_3$ geordnet) auf die linke Seite, die Konstante auf die rechte.',
      },
      {
        icon: '🔍',
        titel: 'Umstellen',
        inhalt:
          'Gleichung 1: $3x_3 + 2x_1 + 1 = -x_2$. Bringe $x_2$ nach links und $1$ nach rechts:\n' +
          '  $2x_1 + x_2 + 3x_3 = -1$\n\n' +
          'Gleichung 2: $4x_1 + 3x_2 - 1 = 0$ wird zu $4x_1 + 3x_2 + 0\\cdot x_3 = 1$.',
      },
      {
        icon: '📝',
        titel: 'Matrix ablesen',
        inhalt:
          'Spaltenreihenfolge $x_1, x_2, x_3$:\n' +
          '  Zeile 1: $(2 \\;\\; 1 \\;\\; 3 \\mid -1)$\n' +
          '  Zeile 2: $(4 \\;\\; 3 \\;\\; 0 \\mid 1)$',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Reihenfolge der Spalten beibehalten ($x_1$ vor $x_2$ vor $x_3$), auch wenn die Unbekannten in der Gleichung vermischt stehen.\n' +
          '• Vorzeichen beim Umstellen beachten.',
      },
    ],
    loesung:
      '$(G_2)$ ist ein LGS. Umgestellt: $2x_1 + x_2 + 3x_3 = -1$ und $4x_1 + 3x_2 = 1$.\n\n' +
      'Erweiterte Koeffizientenmatrix:\n' +
      '$\\left(\\begin{array}{ccc|c} 2 & 1 & 3 & -1 \\\\ 4 & 3 & 0 & 1 \\end{array}\\right)$',
    schwierigkeit: 'mittel',
    kategorie: 'Lineare Gleichungssysteme',
  },
  {
    id: 'b7_a1c',
    titel: 'LGS erkennen (c): $(G_3)$',
    aufgabeText:
      'Betrachten Sie das folgende Gleichungssystem und geben Sie, falls es ein lineares Gleichungssystem ist, die erweiterte Koeffizientenmatrix an.\n\n' +
      '$(G_3):\\quad \\begin{aligned} |x_1| + x_2 + x_3 + |x_4| &= 1 \\\\ x_1 + |x_2| + |x_3| + x_4 &= 0 \\end{aligned}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Beträge prüfen',
        inhalt:
          'Achte auf die Betragsstriche $|\\cdot|$. Der Betrag einer Unbekannten ($|x_1|$) ist KEIN linearer Term, denn $|x|$ verhält sich nicht linear (z.B. $|{-2}| = 2 \\neq -|2|$).',
      },
      {
        icon: '🔍',
        titel: 'Schlussfolgerung',
        inhalt:
          'Da hier Beträge von Unbekannten auftreten ($|x_1|, |x_4|, |x_2|, |x_3|$), ist das System nicht linear.',
      },
      {
        icon: '📝',
        titel: 'Konsequenz',
        inhalt:
          'Für ein nicht-lineares System stellt man KEINE erweiterte Koeffizientenmatrix auf – die Frage ist damit beantwortet.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Vergleiche mit Teil (d): Dort steht $|-1|$ (Betrag einer KONSTANTEN, das ist erlaubt) – nicht zu verwechseln mit dem Betrag einer Unbekannten.',
      },
    ],
    loesung:
      '$(G_3)$ ist KEIN lineares Gleichungssystem, da Beträge von Unbekannten ($|x_1|, |x_2|, |x_3|, |x_4|$) auftreten. Diese sind nicht linear.',
    schwierigkeit: 'einfach',
    kategorie: 'Lineare Gleichungssysteme',
  },
  {
    id: 'b7_a1d',
    titel: 'LGS erkennen (d): $(G_4)$',
    aufgabeText:
      'Betrachten Sie das folgende Gleichungssystem und geben Sie, falls es ein lineares Gleichungssystem ist, die erweiterte Koeffizientenmatrix an.\n\n' +
      '$(G_4):\\quad \\begin{aligned} |-1| + x_1 &= -2x_2 \\\\ 2x_1 &= -4x_2 + 2 \\end{aligned}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Betrag einer Konstanten ist erlaubt',
        inhalt:
          'Hier steht $|-1|$ – das ist der Betrag einer ZAHL, nämlich $|-1| = 1$. Eine Konstante ist völlig in Ordnung; das System bleibt linear.',
      },
      {
        icon: '🔍',
        titel: 'Umstellen',
        inhalt:
          'Gleichung 1: $|-1| + x_1 = -2x_2$ → $1 + x_1 = -2x_2$ → $x_1 + 2x_2 = -1$.\n\n' +
          'Gleichung 2: $2x_1 = -4x_2 + 2$ → $2x_1 + 4x_2 = 2$.',
      },
      {
        icon: '📝',
        titel: 'Matrix ablesen',
        inhalt:
          '  Zeile 1: $(1 \\;\\; 2 \\mid -1)$\n' +
          '  Zeile 2: $(2 \\;\\; 4 \\mid 2)$',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• $|-1|$ nicht mit $-1$ verwechseln: der Betrag ergibt $+1$, das wandert als $-1$ auf die rechte Seite.',
      },
    ],
    loesung:
      '$(G_4)$ ist ein LGS ($|-1| = 1$ ist nur eine Konstante). Umgestellt: $x_1 + 2x_2 = -1$ und $2x_1 + 4x_2 = 2$.\n\n' +
      'Erweiterte Koeffizientenmatrix:\n' +
      '$\\left(\\begin{array}{cc|c} 1 & 2 & -1 \\\\ 2 & 4 & 2 \\end{array}\\right)$',
    schwierigkeit: 'mittel',
    kategorie: 'Lineare Gleichungssysteme',
  },
  {
    id: 'b7_a1e',
    titel: 'LGS erkennen (e): $(G_5)$',
    aufgabeText:
      'Betrachten Sie das folgende Gleichungssystem und geben Sie, falls es ein lineares Gleichungssystem ist, die erweiterte Koeffizientenmatrix an.\n\n' +
      '$(G_5):\\quad \\begin{aligned} x_1 x_2 + x_2 x_3 &= 0 \\\\ x_1 - 2x_2 &= x_3 \\end{aligned}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Produkte von Unbekannten',
        inhalt:
          'In der ersten Gleichung stehen $x_1 x_2$ und $x_2 x_3$ – das sind PRODUKTE zweier Unbekannter. Solche Terme sind nicht linear.',
      },
      {
        icon: '🔍',
        titel: 'Schlussfolgerung',
        inhalt:
          'Schon ein einziger nicht-linearer Term (hier gleich zwei) macht das ganze System nicht-linear.',
      },
      {
        icon: '📝',
        titel: 'Konsequenz',
        inhalt:
          'Es ist kein LGS, also keine erweiterte Koeffizientenmatrix.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Die zweite Gleichung allein wäre linear, aber für ein LGS müssen ALLE Gleichungen linear sein.',
      },
    ],
    loesung:
      '$(G_5)$ ist KEIN lineares Gleichungssystem, da Produkte von Unbekannten ($x_1 x_2$ und $x_2 x_3$) auftreten.',
    schwierigkeit: 'einfach',
    kategorie: 'Lineare Gleichungssysteme',
  },
  {
    id: 'b7_a1f',
    titel: 'LGS erkennen (f): $(G_6)$',
    aufgabeText:
      'Betrachten Sie das folgende Gleichungssystem und geben Sie, falls es ein lineares Gleichungssystem ist, die erweiterte Koeffizientenmatrix an.\n\n' +
      '$(G_6):\\quad \\begin{aligned} 2x_1 + 4x_2 &= 2x_2 + x_3 \\\\ x_1 &= 2x_1 \\end{aligned}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Erst zusammenfassen',
        inhalt:
          'Auch wenn Unbekannte auf beiden Seiten stehen, bleibt es linear, solange keine Produkte/Potenzen/Beträge auftreten. Man bringt alles auf eine Seite.',
      },
      {
        icon: '🔍',
        titel: 'Umstellen',
        inhalt:
          'Gleichung 1: $2x_1 + 4x_2 = 2x_2 + x_3$. Alles nach links:\n' +
          '  $2x_1 + 4x_2 - 2x_2 - x_3 = 0 \\to 2x_1 + 2x_2 - x_3 = 0$\n\n' +
          'Gleichung 2: $x_1 = 2x_1 \\to x_1 - 2x_1 = 0 \\to -x_1 = 0$ (also $-x_1 + 0\\cdot x_2 + 0\\cdot x_3 = 0$).',
      },
      {
        icon: '📝',
        titel: 'Matrix ablesen',
        inhalt:
          'Spalten $x_1, x_2, x_3$:\n' +
          '  Zeile 1: $(2 \\;\\; 2 \\;\\; -1 \\mid 0)$\n' +
          '  Zeile 2: $(-1 \\;\\; 0 \\;\\; 0 \\mid 0)$',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Gleiche Terme auf beiden Seiten ($4x_2$ vs. $2x_2$) sauber zusammenfassen.\n' +
          '• Fehlende Unbekannte mit $0$ auffüllen.',
      },
    ],
    loesung:
      '$(G_6)$ ist ein LGS. Umgestellt: $2x_1 + 2x_2 - x_3 = 0$ und $-x_1 = 0$.\n\n' +
      'Erweiterte Koeffizientenmatrix:\n' +
      '$\\left(\\begin{array}{ccc|c} 2 & 2 & -1 & 0 \\\\ -1 & 0 & 0 & 0 \\end{array}\\right)$',
    schwierigkeit: 'mittel',
    kategorie: 'Lineare Gleichungssysteme',
  },

  // ─── Aufgabe 2: Zeilenstufenform erkennen ─────────────────────────────────
  {
    id: 'b7_a2',
    titel: 'Welche Matrizen sind in Zeilenstufenform?',
    aufgabeText:
      'Welche der nachfolgenden Matrizen sind in Zeilenstufenform?\n\n' +
      '$A = \\begin{pmatrix} 2 & 0 & 1 & 0 \\\\ 0 & 1 & 2 & 3 \\end{pmatrix}$\n\n' +
      '$B = \\begin{pmatrix} 0 & 1 & 0 & 2 & 0 \\\\ 0 & 0 & 1 & -1 & 0 \\\\ 0 & 0 & 0 & 0 & 1 \\\\ 0 & 0 & 0 & 0 & 0 \\end{pmatrix}$\n\n' +
      '$C = \\begin{pmatrix} 0 & 0 & 0 \\\\ 1 & 0 & 2 \\\\ 0 & 1 & -3 \\end{pmatrix}$\n\n' +
      '$D = \\begin{pmatrix} 2 & 3 & 4 \\\\ 0 & 1 & -5 \\\\ 0 & 2 & 3 \\end{pmatrix}$\n\n' +
      '$E = \\begin{pmatrix} 1 & 1 & 0 & -3 & 0 \\\\ 0 & 0 & 1 & 2 & 0 \\\\ 0 & 0 & 0 & 0 & -1 \\end{pmatrix}$\n\n' +
      '$F = \\begin{pmatrix} 0 & 0 & 1 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was ist Zeilenstufenform (ZSF)?',
        inhalt:
          'Eine Matrix ist in Zeilenstufenform, wenn sie eine „Treppe" bildet:\n' +
          '1. Das erste Element ungleich Null in jeder Zeile (das „Pivot" oder der Zeilenkopf) steht weiter rechts als das der darüberliegenden Zeile.\n' +
          '2. Reine Nullzeilen stehen ganz unten.',
      },
      {
        icon: '🔍',
        titel: 'Praktisches Prüfen',
        inhalt:
          'Wandere von oben nach unten und notiere die Spaltenposition des ersten Nicht-Null-Eintrags jeder Zeile. Diese Positionen müssen STRENG nach rechts wandern. Sobald eine Zeile nur Nullen hat, dürfen darunter nur noch Nullzeilen kommen.',
      },
      {
        icon: '📝',
        titel: 'Jede Matrix prüfen',
        inhalt:
          '$A$: Pivots in Spalte 1, dann Spalte 2 → Treppe ✓\n' +
          '$B$: Pivots in Spalte 2, 3, 5, dann Nullzeile unten → ✓\n' +
          '$C$: erste Zeile ist eine Nullzeile, steht aber OBEN (müsste unten sein) → ✗\n' +
          '$D$: Pivot Zeile 2 in Spalte 2, Pivot Zeile 3 auch in Spalte 2 (nicht weiter rechts!) → ✗\n' +
          '$E$: Pivots in Spalte 1, 3, 5 → ✓\n' +
          '$F$: Pivot in Spalte 3, darunter nur Nullzeilen → ✓',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Nullzeilen müssen UNTEN stehen (Grund, warum $C$ durchfällt).\n' +
          '• Bei $D$: zwei Zeilen mit Pivot in derselben Spalte sind keine Stufe.',
      },
    ],
    loesung:
      '$A$, $B$, $E$ und $F$ sind in Zeilenstufenform.\n\n' +
      '$C$ nicht (Nullzeile steht oben statt unten); $D$ nicht (Zeile 2 und Zeile 3 haben ihren ersten Nicht-Null-Eintrag in derselben Spalte – keine echte Stufe).',
    schwierigkeit: 'mittel',
    kategorie: 'Lineare Gleichungssysteme',
  },

  // ─── Aufgabe 3: Gauß-Verfahren, Lösungsmengen (a–d) ───────────────────────
  {
    id: 'b7_a3a',
    titel: 'Gauß-Verfahren (a): $(G_1)$ – eine freie Variable zu viel',
    aufgabeText:
      'Bestimmen Sie mit dem Gauß-Verfahren die Lösungsmenge. Vermerken Sie die Zeilenumformungen und kennzeichnen Sie freie und gebundene Variablen.\n\n' +
      '$(G_1):\\quad \\begin{aligned} 2x_1 + 4x_2 - 2x_3 &= 6 \\\\ x_1 + 2x_2 - x_3 &= 3 \\end{aligned}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Gauß-Verfahren in Kürze',
        inhalt:
          'Man schreibt die erweiterte Koeffizientenmatrix auf und formt sie mit elementaren Zeilenumformungen in Zeilenstufenform um. Erlaubte Umformungen:\n' +
          '  Zeile mit einer Zahl $\\neq 0$ multiplizieren\n' +
          '  Vielfaches einer Zeile zu einer anderen addieren\n' +
          '  zwei Zeilen vertauschen',
      },
      {
        icon: '🔍',
        titel: 'Hier umformen',
        inhalt:
          'Matrix: $\\left(\\begin{array}{ccc|c} 2 & 4 & -2 & 6 \\\\ 1 & 2 & -1 & 3 \\end{array}\\right)$\n\n' +
          'Multipliziere Zeile (i) mit $\\frac{1}{2}$ → $(1\\;2\\;-1\\mid 3)$. Beide Zeilen sind dann identisch. Ziehe (i) von (ii) ab → Zeile (ii) wird zur Nullzeile.',
      },
      {
        icon: '📝',
        titel: 'Freie und gebundene Variablen',
        inhalt:
          'Nach der Umformung bleibt nur eine echte Gleichung $x_1 + 2x_2 - x_3 = 3$. Der Zeilenkopf ist $x_1$ → gebundene Variable. Die übrigen ($x_2, x_3$) sind frei.\n\n' +
          'Benenne die freien Variablen um: $r = x_2$, $s = x_3$. Löse nach der gebundenen auf:\n' +
          '  $x_1 = 3 - 2r + s$',
      },
      {
        icon: '⚠️',
        titel: 'Lösungsmenge aufschreiben',
        inhalt:
          'Die Lösungsmenge ist die Menge aller Vektoren $(x_1, x_2, x_3)$ in Abhängigkeit der freien Parameter:\n' +
          '  $\\left\\{ \\begin{pmatrix} 3 - 2r + s \\\\ r \\\\ s \\end{pmatrix} : r, s \\in \\mathbb{R} \\right\\}$',
      },
    ],
    loesung:
      'Erweiterte Koeffizientenmatrix und Umformung:\n' +
      '$\\left(\\begin{array}{ccc|c} 2 & 4 & -2 & 6 \\\\ 1 & 2 & -1 & 3 \\end{array}\\right) \\xrightarrow{\\frac{1}{2}(\\mathrm{i})} \\left(\\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\\\ 1 & 2 & -1 & 3 \\end{array}\\right) \\xrightarrow{(\\mathrm{ii})-(\\mathrm{i})} \\left(\\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right)$\n\n' +
      'Gebundene Variable: $x_1$. Freie Variablen: $x_2, x_3$. Umbenennung $r = x_2$, $s = x_3$.\n\n' +
      'Aus $x_1 + 2r - s = 3$ folgt $x_1 = 3 - 2r + s$.\n\n' +
      'Lösungsmenge: $L(G_1) = \\left\\{ \\begin{pmatrix} 3 - 2r + s \\\\ r \\\\ s \\end{pmatrix} : r, s \\in \\mathbb{R} \\right\\}$',
    schwierigkeit: 'mittel',
    kategorie: 'Lineare Gleichungssysteme',
  },
  {
    id: 'b7_a3b',
    titel: 'Gauß-Verfahren (b): $(G_2)$ – unlösbar',
    aufgabeText:
      'Bestimmen Sie mit dem Gauß-Verfahren die Lösungsmenge. Vermerken Sie die Zeilenumformungen und kennzeichnen Sie freie und gebundene Variablen.\n\n' +
      '$(G_2):\\quad \\begin{aligned} x_1 + 2x_2 - x_3 + x_4 &= 1 \\\\ x_1 + 4x_2 - 3x_3 - x_4 &= 0 \\\\ 2x_1 + 6x_2 - 4x_3 &= 0 \\end{aligned}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Ziel: Zeilenstufenform',
        inhalt:
          'Mit der ersten Zeile als „Pivotzeile" erzeugt man unter dem ersten Pivot Nullen, indem man passende Vielfache abzieht.',
      },
      {
        icon: '🔍',
        titel: 'Erste Eliminationsschritte',
        inhalt:
          'Matrix: $\\left(\\begin{array}{cccc|c} 1 & 2 & -1 & 1 & 1 \\\\ 1 & 4 & -3 & -1 & 0 \\\\ 2 & 6 & -4 & 0 & 0 \\end{array}\\right)$\n\n' +
          'Rechne (ii)$-$(i) und (iii)$-2\\cdot$(i), um in Spalte 1 unten Nullen zu bekommen.',
      },
      {
        icon: '📝',
        titel: 'Auf eine widersprüchliche Zeile achten',
        inhalt:
          'Nach weiteren Schritten (iii)$-$(ii) entsteht eine Zeile der Form\n' +
          '  $(0 \\;\\; 0 \\;\\; 0 \\;\\; 0 \\mid -1)$\n' +
          'Das entspricht der Gleichung $0 = -1$ – das ist NIE erfüllbar.',
      },
      {
        icon: '⚠️',
        titel: 'Schlussfolgerung',
        inhalt:
          'Sobald eine Zeile $(0 \\ldots 0 \\mid c)$ mit $c \\neq 0$ auftaucht, hat das LGS KEINE Lösung. Die Lösungsmenge ist leer: $L = \\emptyset$.',
      },
    ],
    loesung:
      'Umformung der erweiterten Koeffizientenmatrix:\n' +
      '$\\left(\\begin{array}{cccc|c} 1 & 2 & -1 & 1 & 1 \\\\ 1 & 4 & -3 & -1 & 0 \\\\ 2 & 6 & -4 & 0 & 0 \\end{array}\\right) \\xrightarrow{(\\mathrm{ii})-(\\mathrm{i}),\\,(\\mathrm{iii})-2(\\mathrm{i})} \\left(\\begin{array}{cccc|c} 1 & 2 & -1 & 1 & 1 \\\\ 0 & 2 & -2 & -2 & -1 \\\\ 0 & 2 & -2 & -2 & -2 \\end{array}\\right) \\xrightarrow{(\\mathrm{iii})-(\\mathrm{ii})} \\left(\\begin{array}{cccc|c} 1 & 2 & -1 & 1 & 1 \\\\ 0 & 2 & -2 & -2 & -1 \\\\ 0 & 0 & 0 & 0 & -1 \\end{array}\\right)$\n\n' +
      'Die letzte Zeile bedeutet $0x_1 + 0x_2 + 0x_3 + 0x_4 = -1$ und ist nicht erfüllbar.\n\n' +
      'Daher: $L(G_2) = \\emptyset$ (keine Lösung).',
    schwierigkeit: 'mittel',
    kategorie: 'Lineare Gleichungssysteme',
  },
  {
    id: 'b7_a3c',
    titel: 'Gauß-Verfahren (c): $(G_3)$ – eine freie Variable',
    aufgabeText:
      'Bestimmen Sie mit dem Gauß-Verfahren die Lösungsmenge. Vermerken Sie die Zeilenumformungen und kennzeichnen Sie freie und gebundene Variablen.\n\n' +
      '$(G_3):\\quad \\begin{aligned} x_1 + 2x_2 &= 6 \\\\ x_1 + x_3 &= 4 \\\\ x_1 + 4x_2 - x_3 &= 8 \\end{aligned}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Aufstellen und eliminieren',
        inhalt:
          'Erweiterte Matrix: $\\left(\\begin{array}{ccc|c} 1 & 2 & 0 & 6 \\\\ 1 & 0 & 1 & 4 \\\\ 1 & 4 & -1 & 8 \\end{array}\\right)$\n\n' +
          'Mit (ii)$-$(i) und (iii)$-$(i) die erste Spalte unter dem Pivot zu Null machen.',
      },
      {
        icon: '🔍',
        titel: 'Weiter zur Stufenform',
        inhalt:
          'Nach dem ersten Schritt: $\\left(\\begin{array}{ccc|c} 1 & 2 & 0 & 6 \\\\ 0 & -2 & 1 & -2 \\\\ 0 & 2 & -1 & 2 \\end{array}\\right)$\n\n' +
          'Mit (iii)$+$(ii) wird die dritte Zeile zur Nullzeile.',
      },
      {
        icon: '📝',
        titel: 'Variablen und Rückeinsetzen',
        inhalt:
          'Rang = 2 → das System ist lösbar. Gebundene Variablen $x_1, x_2$ (an den Stufenköpfen), freie Variable $x_3$. Setze $r = x_3$.\n' +
          '  Aus $-2x_2 + r = -2$: $x_2 = 1 + \\frac{1}{2}r$.\n' +
          '  Aus $x_1 + 2x_2 = 6$: $x_1 = 6 - 2(1 + \\frac{1}{2}r) = 4 - r$.',
      },
      {
        icon: '⚠️',
        titel: 'Lösungsmenge',
        inhalt:
          '$L(G_3) = \\left\\{ \\begin{pmatrix} 4 - r \\\\ 1 + \\frac{1}{2}r \\\\ r \\end{pmatrix} : r \\in \\mathbb{R} \\right\\}$',
      },
    ],
    loesung:
      'Umformung:\n' +
      '$\\left(\\begin{array}{ccc|c} 1 & 2 & 0 & 6 \\\\ 1 & 0 & 1 & 4 \\\\ 1 & 4 & -1 & 8 \\end{array}\\right) \\xrightarrow{(\\mathrm{ii})-(\\mathrm{i}),\\,(\\mathrm{iii})-(\\mathrm{i})} \\left(\\begin{array}{ccc|c} 1 & 2 & 0 & 6 \\\\ 0 & -2 & 1 & -2 \\\\ 0 & 2 & -1 & 2 \\end{array}\\right) \\xrightarrow{(\\mathrm{iii})+(\\mathrm{ii})} \\left(\\begin{array}{ccc|c} 1 & 2 & 0 & 6 \\\\ 0 & -2 & 1 & -2 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right)$\n\n' +
      'Rang$(A_3)$ = Rang$(A_3|b_3)$ = 2, also lösbar. Gebundene Variablen: $x_1, x_2$. Freie Variable: $x_3$. Umbenennung $r = x_3$.\n\n' +
      'Aus $-2x_2 + r = -2$: $x_2 = 1 + \\frac{1}{2}r$. Aus $x_1 + 2x_2 = 6$: $x_1 = 4 - r$.\n\n' +
      'Lösungsmenge: $L(G_3) = \\left\\{ \\begin{pmatrix} 4 - r \\\\ 1 + \\frac{1}{2}r \\\\ r \\end{pmatrix} : r \\in \\mathbb{R} \\right\\}$',
    schwierigkeit: 'mittel',
    kategorie: 'Lineare Gleichungssysteme',
  },
  {
    id: 'b7_a3d',
    titel: 'Gauß-Verfahren (d): $(G_4)$ – eindeutige Lösung',
    aufgabeText:
      'Bestimmen Sie mit dem Gauß-Verfahren die Lösungsmenge. Vermerken Sie die Zeilenumformungen und kennzeichnen Sie freie und gebundene Variablen.\n\n' +
      '$(G_4):\\quad \\begin{aligned} 2x_1 + 4x_2 + 6x_3 &= 0 \\\\ 3x_1 + 9x_2 - 3x_3 &= 6 \\\\ 2x_2 - 16x_3 &= 8 \\\\ 2x_1 + 5x_2 + 4x_3 &= 1 \\end{aligned}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Mehr Gleichungen als Unbekannte',
        inhalt:
          'Vier Gleichungen, drei Unbekannte. Mit dem Gauß-Verfahren reduziert man auf Zeilenstufenform; eine Zeile wird dabei zur Nullzeile.\n\n' +
          'Tipp: Zuerst die erste Zeile durch 2 teilen, damit der Pivot $1$ wird – das vereinfacht das Rechnen.',
      },
      {
        icon: '🔍',
        titel: 'Schrittweise eliminieren',
        inhalt:
          'Nach $\\frac{1}{2}$(i), dann (ii)$-3$(i) und (iv)$-2$(i), dann $\\frac{1}{3}$(ii), dann (iii)$-2$(ii) und (iv)$-$(ii) entsteht eine Stufenform. Anschließend $-\\frac{1}{8}$(iii) und (iv)$-2$(iii).\n\n' +
          'Ergebnis: $\\left(\\begin{array}{ccc|c} 1 & 2 & 3 & 0 \\\\ 0 & 1 & -4 & 2 \\\\ 0 & 0 & 1 & -\\frac{1}{2} \\\\ 0 & 0 & 0 & 0 \\end{array}\\right)$',
      },
      {
        icon: '📝',
        titel: 'Rückeinsetzen (keine freien Variablen)',
        inhalt:
          'Rang = 3 = Anzahl der Unbekannten → keine freien Variablen, eindeutige Lösung. Von unten nach oben:\n' +
          '  $x_3 = -\\frac{1}{2}$\n' +
          '  $x_2 = 2 + 4x_3 = 2 + 4(-\\frac{1}{2}) = 0$\n' +
          '  $x_1 = -2x_2 - 3x_3 = 0 - 3(-\\frac{1}{2}) = \\frac{3}{2}$',
      },
      {
        icon: '⚠️',
        titel: 'Lösungsmenge',
        inhalt:
          'Genau eine Lösung:\n' +
          '  $L(G_4) = \\left\\{ \\begin{pmatrix} \\frac{3}{2} \\\\ 0 \\\\ -\\frac{1}{2} \\end{pmatrix} \\right\\}$',
      },
    ],
    loesung:
      'Umformung (zusammengefasst):\n' +
      '$\\left(\\begin{array}{ccc|c} 2 & 4 & 6 & 0 \\\\ 3 & 9 & -3 & 6 \\\\ 0 & 2 & -16 & 8 \\\\ 2 & 5 & 4 & 1 \\end{array}\\right) \\longrightarrow \\left(\\begin{array}{ccc|c} 1 & 2 & 3 & 0 \\\\ 0 & 1 & -4 & 2 \\\\ 0 & 0 & 1 & -\\frac{1}{2} \\\\ 0 & 0 & 0 & 0 \\end{array}\\right)$\n\n' +
      'Schritte: $\\frac{1}{2}$(i); (ii)$-3$(i), (iv)$-2$(i); $\\frac{1}{3}$(ii); (iii)$-2$(ii), (iv)$-$(ii); $-\\frac{1}{8}$(iii); (iv)$-2$(iii).\n\n' +
      'Rang$(A_4)$ = Rang$(A_4|b_4)$ = 3 = Anzahl der Unbekannten → keine freien Variablen, gebundene Variablen $x_1, x_2, x_3$.\n\n' +
      'Rückeinsetzen: $x_3 = -\\frac{1}{2}$, $x_2 = 2 + 4x_3 = 0$, $x_1 = -2x_2 - 3x_3 = \\frac{3}{2}$.\n\n' +
      'Lösungsmenge: $L(G_4) = \\left\\{ \\begin{pmatrix} \\frac{3}{2} \\\\ 0 \\\\ -\\frac{1}{2} \\end{pmatrix} \\right\\}$',
    schwierigkeit: 'schwer',
    kategorie: 'Lineare Gleichungssysteme',
  },

  // ─── Aufgabe 4: Lösbarkeit aus erweiterter Koeffizientenmatrix (a–d) ──────
  {
    id: 'b7_a4a',
    titel: 'Lösbarkeit (a): genau eine Lösung',
    aufgabeText:
      'Geben Sie an, ob das LGS keine, genau eine oder unendlich viele Lösungen besitzt. Geben Sie bei lösbaren Systemen die gebundenen und freien Variablen sowie (wenn Zeit ist) die Lösungsmenge an.\n\n' +
      '$\\left(\\begin{array}{ccc|c} 1 & 1 & 2 & 1 \\\\ 0 & 1 & 1 & 1 \\\\ 0 & 0 & -4 & 0 \\end{array}\\right)$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Anzahl der Lösungen erkennen',
        inhalt:
          'Aus der Zeilenstufenform liest man ab:\n' +
          '  Steht eine Zeile $(0\\ldots0 \\mid c)$ mit $c \\neq 0$ → keine Lösung.\n' +
          '  Sonst: gibt es freie Variablen → unendlich viele Lösungen; gibt es keine → genau eine Lösung.',
      },
      {
        icon: '🔍',
        titel: 'Diese Matrix prüfen',
        inhalt:
          'Die Matrix ist schon in Stufenform. Pivots in Spalten 1, 2, 3 → gebundene Variablen $x_1, x_2, x_3$. Es bleibt keine Variable übrig → keine freien Variablen.\n\n' +
          'Keine widersprüchliche Nullzeile. Also: genau eine Lösung.',
      },
      {
        icon: '📝',
        titel: 'Rückeinsetzen',
        inhalt:
          '  $-4x_3 = 0 \\Rightarrow x_3 = 0$\n' +
          '  $x_2 + x_3 = 1 \\Rightarrow x_2 = 1$\n' +
          '  $x_1 + x_2 + 2x_3 = 1 \\Rightarrow x_1 = 1 - 1 - 0 = 0$',
      },
      {
        icon: '⚠️',
        titel: 'Lösungsmenge',
        inhalt:
          '$\\left\\{ \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix} \\right\\}$',
      },
    ],
    loesung:
      'Gebundene Variablen: $x_1, x_2, x_3$. Freie Variable: keine. Also GENAU EINE Lösung (Rang der Koeffizientenmatrix = Rang der erweiterten Matrix = Anzahl der Unbekannten).\n\n' +
      'Rückeinsetzen: aus $-4x_3 = 0$ folgt $x_3 = 0$; aus $x_2 + x_3 = 1$ folgt $x_2 = 1$; aus $x_1 + x_2 + 2x_3 = 1$ folgt $x_1 = 0$.\n\n' +
      'Lösungsmenge: $\\left\\{ \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix} \\right\\}$',
    schwierigkeit: 'mittel',
    kategorie: 'Lineare Gleichungssysteme',
  },
  {
    id: 'b7_a4b',
    titel: 'Lösbarkeit (b): keine Lösung',
    aufgabeText:
      'Geben Sie an, ob das LGS keine, genau eine oder unendlich viele Lösungen besitzt. Geben Sie bei lösbaren Systemen die gebundenen und freien Variablen sowie (wenn Zeit ist) die Lösungsmenge an.\n\n' +
      '$\\left(\\begin{array}{ccc|c} 1 & 1 & 2 & 1 \\\\ 0 & 1 & 1 & 1 \\\\ 0 & 0 & 0 & -4 \\end{array}\\right)$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Letzte Zeile genau ansehen',
        inhalt:
          'Die unterste Zeile ist $(0 \\;\\; 0 \\;\\; 0 \\mid -4)$. Übersetzt heißt das $0x_1 + 0x_2 + 0x_3 = -4$, also $0 = -4$.',
      },
      {
        icon: '🔍',
        titel: 'Widerspruch erkennen',
        inhalt:
          'Die Aussage $0 = -4$ ist falsch – sie kann durch keine Wahl der Variablen erfüllt werden. Das LGS hat also keine Lösung.',
      },
      {
        icon: '📝',
        titel: 'Rang-Argument',
        inhalt:
          'Der Rang der Koeffizientenmatrix (links) ist $2$, der Rang der erweiterten Matrix ist $3$. Sind diese verschieden, gibt es keine Lösung.',
      },
      {
        icon: '⚠️',
        titel: 'Lösungsmenge',
        inhalt:
          'Die Lösungsmenge ist leer: $\\emptyset$.',
      },
    ],
    loesung:
      'KEINE Lösung, da die letzte Gleichung $0x_1 + 0x_2 + 0x_3 = -4$ nicht erfüllbar ist (der Rang der Koeffizientenmatrix ist kleiner als der Rang der erweiterten Koeffizientenmatrix).\n\n' +
      'Lösungsmenge: $\\emptyset$.',
    schwierigkeit: 'einfach',
    kategorie: 'Lineare Gleichungssysteme',
  },
  {
    id: 'b7_a4c',
    titel: 'Lösbarkeit (c): genau eine Lösung',
    aufgabeText:
      'Geben Sie an, ob das LGS keine, genau eine oder unendlich viele Lösungen besitzt. Geben Sie bei lösbaren Systemen die gebundenen und freien Variablen sowie (wenn Zeit ist) die Lösungsmenge an.\n\n' +
      '$\\left(\\begin{array}{cc|c} 1 & 1 & 2 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{array}\\right)$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Nullzeilen unten sind harmlos',
        inhalt:
          'Die beiden unteren Nullzeilen $(0\\;0\\mid 0)$ bedeuten $0 = 0$ – immer wahr, kein Widerspruch. Sie liefern keine Information und können ignoriert werden.',
      },
      {
        icon: '🔍',
        titel: 'Variablen zählen',
        inhalt:
          'Es gibt zwei Unbekannte $x_1, x_2$. Pivots in Spalten 1 und 2 → beide sind gebundene Variablen, keine freien.\n\n' +
          'Kein Widerspruch, keine freien Variablen → genau eine Lösung.',
      },
      {
        icon: '📝',
        titel: 'Rückeinsetzen',
        inhalt:
          '  $x_2 = 1$\n' +
          '  $x_1 + x_2 = 2 \\Rightarrow x_1 = 2 - 1 = 1$',
      },
      {
        icon: '⚠️',
        titel: 'Lösungsmenge',
        inhalt:
          '$\\left\\{ \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} \\right\\}$',
      },
    ],
    loesung:
      'Gebundene Variablen: $x_1, x_2$. Freie Variable: keine. Also GENAU EINE Lösung (die beiden Nullzeilen bedeuten nur $0 = 0$).\n\n' +
      'Rückeinsetzen: $x_2 = 1$; aus $x_1 + x_2 = 2$ folgt $x_1 = 1$.\n\n' +
      'Lösungsmenge: $\\left\\{ \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} \\right\\}$',
    schwierigkeit: 'mittel',
    kategorie: 'Lineare Gleichungssysteme',
  },
  {
    id: 'b7_a4d',
    titel: 'Lösbarkeit (d): unendlich viele Lösungen',
    aufgabeText:
      'Geben Sie an, ob das LGS keine, genau eine oder unendlich viele Lösungen besitzt. Geben Sie bei lösbaren Systemen die gebundenen und freien Variablen sowie (wenn Zeit ist) die Lösungsmenge an.\n\n' +
      '$\\left(\\begin{array}{cccc|c} 1 & 1 & 2 & 4 & 1 \\\\ 0 & 1 & 1 & -2 & -1 \\\\ 0 & 0 & 0 & 3 & 3 \\end{array}\\right)$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Pivots und freie Variablen finden',
        inhalt:
          'Vier Unbekannte $x_1, x_2, x_3, x_4$. Die Pivots (Zeilenköpfe) stehen in den Spalten 1, 2 und 4. Spalte 3 hat keinen Pivot → $x_3$ ist eine FREIE Variable.\n\n' +
          'Eine freie Variable bei lösbarem System bedeutet: unendlich viele Lösungen.',
      },
      {
        icon: '🔍',
        titel: 'Gebundene vs. freie Variablen',
        inhalt:
          '  Gebundene Variablen: $x_1, x_2, x_4$ (Spalten mit Pivot)\n' +
          '  Freie Variable: $x_3$\n\n' +
          'Setze $r = x_3$.',
      },
      {
        icon: '📝',
        titel: 'Rückeinsetzen mit Parameter',
        inhalt:
          '  $3x_4 = 3 \\Rightarrow x_4 = 1$\n' +
          '  $x_2 + x_3 - 2x_4 = -1 \\Rightarrow x_2 = -1 - r + 2 = 1 - r$\n' +
          '  $x_1 + x_2 + 2x_3 + 4x_4 = 1 \\Rightarrow x_1 = 1 - (1-r) - 2r - 4 = -4 - r$',
      },
      {
        icon: '⚠️',
        titel: 'Lösungsmenge',
        inhalt:
          '$\\left\\{ \\begin{pmatrix} -4 - r \\\\ 1 - r \\\\ r \\\\ 1 \\end{pmatrix} : r \\in \\mathbb{R} \\right\\}$',
      },
    ],
    loesung:
      'Gebundene Variablen: $x_1, x_2, x_4$. Freie Variable: $x_3$. Da eine freie Variable vorhanden ist, gibt es UNENDLICH VIELE Lösungen (Rang gleich, aber kleiner als Zahl der Unbekannten).\n\n' +
      'Umbenennung $r = x_3$. Rückeinsetzen:\n' +
      '  $3x_4 = 3 \\Rightarrow x_4 = 1$\n' +
      '  $x_2 + x_3 - 2x_4 = -1 \\Rightarrow x_2 = 1 - r$\n' +
      '  $x_1 + x_2 + 2x_3 + 4x_4 = 1 \\Rightarrow x_1 = -4 - r$\n\n' +
      'Lösungsmenge: $\\left\\{ \\begin{pmatrix} -4 - r \\\\ 1 - r \\\\ r \\\\ 1 \\end{pmatrix} : r \\in \\mathbb{R} \\right\\}$',
    schwierigkeit: 'schwer',
    kategorie: 'Lineare Gleichungssysteme',
  },

  // ─── Aufgabe 5: parameterabhängiges homogenes LGS ─────────────────────────
  {
    id: 'b7_a5',
    titel: 'Parameter $\\alpha$: Anzahl der Lösungen',
    aufgabeText:
      'Betrachten Sie das lineare Gleichungssystem\n' +
      '$(G_1):\\quad \\begin{aligned} \\alpha x_1 + \\alpha x_2 &= 0 \\\\ \\alpha x_1 + (\\alpha - 1)x_2 &= 0 \\end{aligned}$\n' +
      'mit dem Parameter $\\alpha \\in \\mathbb{R}$ und überlegen Sie, für welche $\\alpha \\in \\mathbb{R}$ das LGS (i) keine, (ii) genau eine, (iii) unendlich viele Lösungen besitzt.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Homogenes LGS',
        inhalt:
          'Die rechte Seite ist überall $0$ – ein solches System heißt homogen. Wichtige Tatsache: der Nullvektor $\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$ ist IMMER eine Lösung. Deshalb ist „keine Lösung" hier unmöglich.\n\n' +
          'Bei homogenen Systemen bleibt die rechte Seite bei Umformungen $0$ und wird nicht mitgeführt.',
      },
      {
        icon: '🔍',
        titel: 'Fall $\\alpha \\neq 0$',
        inhalt:
          'Koeffizientenmatrix $\\begin{pmatrix} \\alpha & \\alpha \\\\ \\alpha & \\alpha-1 \\end{pmatrix}$. Mit (ii)$-$(i):\n' +
          '  $\\begin{pmatrix} \\alpha & \\alpha \\\\ 0 & -1 \\end{pmatrix}$\n\n' +
          'Beide Zeilen haben einen Pivot (da $\\alpha \\neq 0$) → Rang 2 = Anzahl der Unbekannten → keine freien Variablen → genau eine Lösung (der Nullvektor).',
      },
      {
        icon: '📝',
        titel: 'Fall $\\alpha = 0$',
        inhalt:
          'Dann ist die Matrix $\\begin{pmatrix} 0 & 0 \\\\ 0 & -1 \\end{pmatrix}$. Nach Tauschen: $\\begin{pmatrix} 0 & -1 \\\\ 0 & 0 \\end{pmatrix}$. Rang $= 1$, aber zwei Unbekannte → eine freie Variable → unendlich viele Lösungen.',
      },
      {
        icon: '⚠️',
        titel: 'Fazit',
        inhalt:
          '(i) keine: tritt nie ein (Nullvektor ist immer Lösung).\n' +
          '(ii) genau eine: für alle $\\alpha \\neq 0$.\n' +
          '(iii) unendlich viele: für $\\alpha = 0$.',
      },
    ],
    loesung:
      'Es ist ein homogenes LGS (rechte Seite $\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$), daher ist der Nullvektor stets eine Lösung.\n\n' +
      'Fall $\\alpha \\neq 0$: $\\begin{pmatrix} \\alpha & \\alpha \\\\ \\alpha & \\alpha-1 \\end{pmatrix} \\xrightarrow{(\\mathrm{ii})-(\\mathrm{i})} \\begin{pmatrix} \\alpha & \\alpha \\\\ 0 & -1 \\end{pmatrix}$. Rang $= 2$ = Anzahl der Unbekannten → genau eine Lösung $\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$.\n\n' +
      'Fall $\\alpha = 0$: $\\begin{pmatrix} 0 & 0 \\\\ 0 & -1 \\end{pmatrix} \\xrightarrow{(\\mathrm{i})\\leftrightarrow(\\mathrm{ii})} \\begin{pmatrix} 0 & -1 \\\\ 0 & 0 \\end{pmatrix}$. Rang $= 1$, eine freie Variable → unendlich viele Lösungen.\n\n' +
      'Fazit: (i) keine — tritt nie ein; (ii) genau eine — für jedes $\\alpha \\in \\mathbb{R} \\setminus \\{0\\}$; (iii) unendlich viele — für $\\alpha = 0$.',
    schwierigkeit: 'schwer',
    kategorie: 'Lineare Gleichungssysteme',
  },

  // ─── Aufgabe 6: LGS zu vorgegebener Lösungsmenge (a–c) ────────────────────
  {
    id: 'b7_a6a',
    titel: 'LGS zu Lösungsmenge (a): ein Punkt',
    aufgabeText: 'Geben Sie ein lineares Gleichungssystem mit zwei Unbekannten an, dessen Lösungsmenge $\\left\\{ \\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix} \\right\\}$ ist.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Genau eine Lösung gesucht',
        inhalt:
          'Die Lösungsmenge enthält genau einen Punkt $(x_1, x_2) = (-1, 2)$. Ein LGS hat genau dann eine eindeutige Lösung, wenn es (mindestens) zwei „unabhängige" Gleichungen für die zwei Unbekannten gibt.',
      },
      {
        icon: '🔍',
        titel: 'Einfachster Ansatz',
        inhalt:
          'Man kann direkt die Werte vorschreiben:\n' +
          '  $x_1 = -1$\n' +
          '  $x_2 = 2$\n' +
          'Das ist bereits ein gültiges LGS mit genau dieser Lösung.',
      },
      {
        icon: '📝',
        titel: 'Andere Varianten',
        inhalt:
          'Man darf die Gleichungen auch „mischen", solange die Lösung gleich bleibt. Z.B. $2x_1 - x_2 = -4$ (denn $2(-1) - 2 = -4$) zusammen mit $x_2 = 2$.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Es gibt unendlich viele richtige LGS – wichtig ist nur, dass $(-1, 2)$ die einzige Lösung ist.',
      },
    ],
    loesung:
      'Zum Beispiel:\n' +
      '$\\begin{aligned} x_1 &= -1 \\\\ x_2 &= 2 \\end{aligned}$\n\n' +
      'oder $\\begin{aligned} 2x_1 - x_2 &= -4 \\\\ x_2 &= 2 \\end{aligned}$\n\n' +
      'oder $\\begin{aligned} 2x_1 - x_2 &= -4 \\\\ x_1 - x_2 &= -3 \\end{aligned}$',
    schwierigkeit: 'mittel',
    kategorie: 'Lineare Gleichungssysteme',
  },
  {
    id: 'b7_a6b',
    titel: 'LGS zu Lösungsmenge (b): eine Gerade durch 0',
    aufgabeText: 'Geben Sie ein lineares Gleichungssystem mit zwei Unbekannten an, dessen Lösungsmenge $\\left\\{ \\begin{pmatrix} r \\\\ 2r \\end{pmatrix} : r \\in \\mathbb{R} \\right\\}$ ist.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was beschreibt die Menge?',
        inhalt:
          'Jeder Lösungsvektor hat die Form $(r, 2r)$: die zweite Koordinate ist immer doppelt so groß wie die erste. Das ist eine Gerade durch den Ursprung mit $x_2 = 2x_1$.',
      },
      {
        icon: '🔍',
        titel: 'Bedingung in Gleichung übersetzen',
        inhalt:
          'Setze $x_1 = r$, $x_2 = 2r$. Die Beziehung $x_2 = 2x_1$ umgeformt:\n' +
          '  $2x_1 - x_2 = 0$',
      },
      {
        icon: '📝',
        titel: 'Eine Gleichung reicht',
        inhalt:
          'Da eine freie Variable ($r$) bleiben soll, darf es nur EINE (unabhängige) Gleichung geben. Die Gleichung $2x_1 - x_2 = 0$ erfüllt genau die gewünschte Lösungsmenge.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Eine zweite, unabhängige Gleichung würde die Gerade auf einen Punkt einschränken – das ist hier nicht gewünscht.',
      },
    ],
    loesung:
      'Zum Beispiel die einzelne Gleichung:\n' +
      '$2x_1 - x_2 = 0$\n\n' +
      '(Denn $x_2 = 2x_1$ ergibt genau die Vektoren $(r, 2r)$.)',
    schwierigkeit: 'mittel',
    kategorie: 'Lineare Gleichungssysteme',
  },
  {
    id: 'b7_a6c',
    titel: 'LGS zu Lösungsmenge (c): die ganze Ebene',
    aufgabeText: 'Geben Sie ein lineares Gleichungssystem mit zwei Unbekannten an, dessen Lösungsmenge $\\left\\{ \\begin{pmatrix} r \\\\ s \\end{pmatrix} : r, s \\in \\mathbb{R} \\right\\}$ ist.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Alle Vektoren sind Lösungen',
        inhalt:
          'Die Lösungsmenge ist die GESAMTE Ebene $\\mathbb{R}^2$ – jeder Punkt $(r, s)$ soll Lösung sein. Es darf also keine echte Einschränkung geben.',
      },
      {
        icon: '🔍',
        titel: 'Eine immer wahre Gleichung',
        inhalt:
          'Gesucht ist eine Gleichung, die für ALLE $x_1, x_2$ erfüllt ist. Das gelingt mit lauter Nullkoeffizienten:\n' +
          '  $0x_1 + 0x_2 = 0$',
      },
      {
        icon: '📝',
        titel: 'Warum das passt',
        inhalt:
          'Die Gleichung $0 = 0$ ist immer wahr, egal welche Werte $x_1, x_2$ haben. Damit ist jeder Vektor eine Lösung – beide Variablen sind frei.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Jede Gleichung mit einem Koeffizienten $\\neq 0$ würde die Lösungsmenge einschränken und wäre damit falsch.',
      },
    ],
    loesung:
      'Zum Beispiel:\n' +
      '$0x_1 + 0x_2 = 0$\n\n' +
      'Diese Gleichung ist für alle $x_1, x_2 \\in \\mathbb{R}$ erfüllt, also ist die Lösungsmenge die ganze Ebene.',
    schwierigkeit: 'mittel',
    kategorie: 'Lineare Gleichungssysteme',
  },
]
