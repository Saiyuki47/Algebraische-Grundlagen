import type { Aufgabe } from '../../types'

export const b7: Aufgabe[] = [
  {
    id: 'b7_a1',
    titel: 'Lineare Gleichungssysteme erkennen – erweiterte Koeffizientenmatrix',
    aufgabeText:
      'Betrachten Sie folgende Gleichungssysteme und geben Sie bei den linearen Gleichungssystemen jeweils die erweiterte Koeffizientenmatrix an.\n' +
      '(a) $\\left.\\begin{aligned} 2x_1 + x_2 &= 1 \\\\ -4x_1 - 2x_2 &= -3 \\\\ 3x_1 + 4x_2 &= 0 \\\\ -4x_1 &= 7 \\end{aligned}\\right\\} (G_1)$\n' +
      '(b) $\\left.\\begin{aligned} 3x_3 + 2x_1 + 1 &= -x_2 \\\\ 4x_1 + 3x_2 - 1 &= 0 \\end{aligned}\\right\\} (G_2)$\n' +
      '(c) $\\left.\\begin{aligned} |x_1| + x_2 + x_3 + |x_4| &= 1 \\\\ x_1 + |x_2| + |x_3| + x_4 &= 0 \\end{aligned}\\right\\} (G_3)$\n' +
      '(d) $\\left.\\begin{aligned} |-1| + x_1 &= -2x_2 \\\\ 2x_1 &= -4x_2 + 2 \\end{aligned}\\right\\} (G_4)$\n' +
      '(e) $\\left.\\begin{aligned} x_1 x_2 + x_2 x_3 &= 0 \\\\ x_1 - 2x_2 &= x_3 \\end{aligned}\\right\\} (G_5)$\n' +
      '(f) $\\left.\\begin{aligned} 2x_1 + 4x_2 &= 2x_2 + x_3 \\\\ x_1 &= 2x_1 \\end{aligned}\\right\\} (G_6)$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Ein lineares Gleichungssystem (LGS) ist ein System von Gleichungen, in denen die Unbekannten $x_1, \\dots, x_n$ nur linear vorkommen: jeder Term ist eine Konstante mal eine Unbekannte (oder eine reine Konstante).\n\n' +
          'Nicht erlaubt sind u. a.:\n' +
          '  Produkte von Unbekannten: $x_1 x_2$, $x_2 x_3$, $x_i^2$\n' +
          '  Beträge von Unbekannten: $|x_1|$\n' +
          '  Wurzeln, Brüche mit Unbekannten im Nenner, $\\sin(x_i)$ usw.\n\n' +
          'Konstanten wie $|-1| = 1$ sind dagegen unproblematisch, weil sie keine Unbekannte enthalten.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '1. Alle Terme mit Unbekannten auf die linke Seite, Konstanten nach rechts bringen.\n' +
          '2. Prüfen, ob jede Gleichung linear ist (keine Produkte/Beträge/… von Unbekannten).\n' +
          '3. Den Spalten die Unbekannten $x_1, x_2, \\dots$ zuordnen; fehlt eine Unbekannte, steht dort eine $0$.\n' +
          '4. Koeffizienten in die Matrix $A$ schreiben, die rechten Seiten als Spalte $b$ rechts vom Strich: $(A\\,|\\,b)$.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Eine fehlende Unbekannte vergessen (z. B. $4x_1 + 3x_2 = 1$ hat eine $0$ in der $x_3$-Spalte).\n\n' +
          '• $|-1|$ für nichtlinear halten – es ist die Konstante $1$.\n\n' +
          '• Vor dem Ablesen nicht sortieren: Terme wie $-x_2$ oder $2x_2 + x_3$ müssen erst auf die richtige Seite gebracht werden.',
      },
    ],
    loesung:
      '**Erinnerung:** Ein LGS enthält die Unbekannten nur in erster Potenz – ohne Produkte $x_i x_j$, ohne Beträge $|x_i|$ und ohne andere nichtlineare Terme. Konstante Terme wie $|-1| = 1$ sind erlaubt, da sie keine Unbekannte enthalten.\n\n' +
      '**(a)** LGS. Bereits in Standardform; Koeffizienten ablesen:\n' +
      '$\\left(\\begin{array}{cc|c} 2 & 1 & 1 \\\\ -4 & -2 & -3 \\\\ 3 & 4 & 0 \\\\ -4 & 0 & 7 \\end{array}\\right)$\n\n' +
      '**(b)** LGS. Erst nach $x_1, x_2, x_3$ sortieren:\n' +
      '$3x_3 + 2x_1 + 1 = -x_2 \\;\\Leftrightarrow\\; 2x_1 + x_2 + 3x_3 = -1$\n' +
      '$4x_1 + 3x_2 - 1 = 0 \\;\\Leftrightarrow\\; 4x_1 + 3x_2 + 0\\cdot x_3 = 1$\n' +
      '$\\left(\\begin{array}{ccc|c} 2 & 1 & 3 & -1 \\\\ 4 & 3 & 0 & 1 \\end{array}\\right)$\n\n' +
      '**(c)** Kein LGS: Die Beträge $|x_1|, |x_2|, |x_3|, |x_4|$ sind nicht linear in den Unbekannten.\n\n' +
      '**(d)** LGS. Beachte: $|-1| = 1$ ist eine Konstante. Sortieren:\n' +
      '$1 + x_1 = -2x_2 \\;\\Leftrightarrow\\; x_1 + 2x_2 = -1$\n' +
      '$2x_1 = -4x_2 + 2 \\;\\Leftrightarrow\\; 2x_1 + 4x_2 = 2$\n' +
      '$\\left(\\begin{array}{cc|c} 1 & 2 & -1 \\\\ 2 & 4 & 2 \\end{array}\\right)$\n\n' +
      '**(e)** Kein LGS: In $x_1 x_2 + x_2 x_3$ treten Produkte zweier Unbekannter auf (nichtlineare Terme).\n\n' +
      '**(f)** LGS. Sortieren:\n' +
      '$2x_1 + 4x_2 = 2x_2 + x_3 \\;\\Leftrightarrow\\; 2x_1 + 2x_2 - x_3 = 0$\n' +
      '$x_1 = 2x_1 \\;\\Leftrightarrow\\; -x_1 = 0$\n' +
      '$\\left(\\begin{array}{ccc|c} 2 & 2 & -1 & 0 \\\\ -1 & 0 & 0 & 0 \\end{array}\\right)$',
    schwierigkeit: 'einfach',
    kategorie: 'Lineare Gleichungssysteme',
  },
  {
    id: 'b7_a2',
    titel: 'Zeilenstufenform erkennen',
    aufgabeText:
      'Welche der nachfolgenden Matrizen sind in Zeilenstufenform?\n' +
      '(a) $A := \\begin{pmatrix} 2 & 0 & 1 & 0 \\\\ 0 & 1 & 2 & 3 \\end{pmatrix}$\n' +
      '(b) $B := \\begin{pmatrix} 0 & 1 & 0 & 2 & 0 \\\\ 0 & 0 & 1 & -1 & 0 \\\\ 0 & 0 & 0 & 0 & 1 \\\\ 0 & 0 & 0 & 0 & 0 \\end{pmatrix}$\n' +
      '(c) $C := \\begin{pmatrix} 0 & 0 & 0 \\\\ 1 & 0 & 2 \\\\ 0 & 1 & -3 \\end{pmatrix}$\n' +
      '(d) $D := \\begin{pmatrix} 2 & 3 & 4 \\\\ 0 & 1 & -5 \\\\ 0 & 2 & 3 \\end{pmatrix}$\n' +
      '(e) $E := \\begin{pmatrix} 1 & 1 & 0 & -3 & 0 \\\\ 0 & 0 & 1 & 2 & 0 \\\\ 0 & 0 & 0 & 0 & -1 \\end{pmatrix}$\n' +
      '(f) $F := \\begin{pmatrix} 0 & 0 & 1 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Eine Matrix ist in Zeilenstufenform (ZSF), wenn:\n' +
          '  (1) alle Nullzeilen ganz unten stehen,\n' +
          '  (2) das erste von Null verschiedene Element (der Stufenkopf bzw. Pivot) jeder Nicht-Null-Zeile echt weiter rechts steht als der Pivot der Zeile darüber.\n\n' +
          'Unterhalb eines Pivots stehen dann automatisch nur Nullen.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Gehe die Zeilen von oben nach unten durch und notiere die Spalte des jeweils ersten Nicht-Null-Eintrags. Diese Spaltennummern müssen streng wachsen. Sobald eine Nullzeile auftaucht, dürfen darunter nur noch Nullzeilen folgen.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• ZSF mit reduzierter ZSF verwechseln: Für die ZSF müssen Pivots NICHT $1$ sein, und über den Pivots dürfen beliebige Zahlen stehen.\n\n' +
          '• Eine Nullzeile in der Mitte oder oben übersehen (das verletzt die Form).\n\n' +
          '• Zwei Stufenköpfe in derselben Spalte übersehen (siehe Matrix $D$).',
      },
    ],
    loesung:
      '**Ergebnis:** $A$, $B$, $E$, $F$ sind in Zeilenstufenform.\n\n' +
      '**Kriterium:** Nullzeilen ganz unten; der Stufenkopf jeder Nicht-Null-Zeile steht echt weiter rechts als der der Zeile darüber.\n\n' +
      '**(a)** $A$: ✓ Stufenköpfe in Spalte 1 (Zeile 1) und Spalte 2 (Zeile 2) – streng nach rechts versetzt. Zeilenstufenform.\n\n' +
      '**(b)** $B$: ✓ Stufenköpfe in den Spalten 2, 3, 5; die Nullzeile steht unten. Zeilenstufenform.\n\n' +
      '**(c)** $C$: ✗ Die Nullzeile $(0\\;0\\;0)$ steht ganz oben statt unten. Keine Zeilenstufenform.\n\n' +
      '**(d)** $D$: ✗ In Zeile 2 und Zeile 3 steht der Stufenkopf jeweils in Spalte 2 (Einträge $1$ bzw. $2$) – nicht echt nach rechts versetzt. Keine Zeilenstufenform.\n\n' +
      '**(e)** $E$: ✓ Stufenköpfe in den Spalten 1, 3, 5 – streng nach rechts versetzt. Zeilenstufenform.\n\n' +
      '**(f)** $F$: ✓ Stufenkopf in Spalte 3 (Zeile 1), darunter nur Nullzeilen. Zeilenstufenform.',
    schwierigkeit: 'einfach',
    kategorie: 'Lineare Gleichungssysteme',
  },
  {
    id: 'b7_a3',
    titel: 'Gauß-Verfahren – Lösungsmengen, freie und gebundene Variablen',
    aufgabeText:
      'Bestimmen Sie jeweils mit Hilfe des Gauß-Verfahrens die Lösungsmengen der folgenden linearen Gleichungssysteme. Vermerken Sie dabei in jedem Schritt die elementaren Zeilenumformungen und machen Sie kenntlich, welche Ihre freien und welche Ihre gebundenen Variablen sind.\n' +
      '(a) $\\left.\\begin{aligned} 2x_1 + 4x_2 - 2x_3 &= 6 \\\\ x_1 + 2x_2 - x_3 &= 3 \\end{aligned}\\right\\} (G_1)$\n' +
      '(b) $\\left.\\begin{aligned} x_1 + 2x_2 - x_3 + x_4 &= 1 \\\\ x_1 + 4x_2 - 3x_3 - x_4 &= 0 \\\\ 2x_1 + 6x_2 - 4x_3 &= 0 \\end{aligned}\\right\\} (G_2)$\n' +
      '(c) $\\left.\\begin{aligned} x_1 + 2x_2 &= 6 \\\\ x_1 + x_3 &= 4 \\\\ x_1 + 4x_2 - x_3 &= 8 \\end{aligned}\\right\\} (G_3)$\n' +
      '(d) $\\left.\\begin{aligned} 2x_1 + 4x_2 + 6x_3 &= 0 \\\\ 3x_1 + 9x_2 - 3x_3 &= 6 \\\\ 2x_2 - 16x_3 &= 8 \\\\ 2x_1 + 5x_2 + 4x_3 &= 1 \\end{aligned}\\right\\} (G_4)$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Das Gauß-Verfahren bringt $(A\\,|\\,b)$ durch elementare Zeilenumformungen auf Zeilenstufenform. Erlaubt sind: Zeilen vertauschen, eine Zeile mit $c \\neq 0$ multiplizieren, ein Vielfaches einer Zeile zu einer anderen addieren.\n\n' +
          'Die Spalten mit Stufenköpfen gehören zu den gebundenen Variablen, alle übrigen Spalten zu den freien Variablen. Freie Variablen werden durch Parameter ($r, s, \\dots$) ersetzt.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '1. $(A\\,|\\,b)$ aufstellen und per Gauß auf Zeilenstufenform bringen; jeden Schritt notieren.\n' +
          '2. Lösbarkeit prüfen: $\\operatorname{Rang}(A) = \\operatorname{Rang}(A\\,|\\,b)$? Eine Zeile $0 = c$ mit $c \\neq 0$ bedeutet $L = \\emptyset$.\n' +
          '3. Freie Variablen mit Parametern benennen.\n' +
          '4. Von unten nach oben einsetzen und die Lösungsmenge als (ggf. parametrisierte) Spaltenvektoren angeben.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Vorzeichenfehler beim Addieren von Zeilenvielfachen.\n\n' +
          '• Zeile $0 = 0$ (immer erfüllt, liefert eine freie Variable) mit $0 = c \\neq 0$ (Widerspruch) verwechseln.\n\n' +
          '• Anzahl der Lösungen falsch einschätzen: keine freie Variable und lösbar ⇒ genau eine Lösung; mindestens eine freie Variable ⇒ unendlich viele Lösungen.',
      },
    ],
    loesung:
      '**(a)** Erweiterte Koeffizientenmatrix und Umformungen:\n' +
      '$(A_1|b_1) = \\left(\\begin{array}{ccc|c} 2 & 4 & -2 & 6 \\\\ 1 & 2 & -1 & 3 \\end{array}\\right)$\n' +
      '$\\xrightarrow{\\frac{1}{2}(\\mathrm{i})} \\left(\\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\\\ 1 & 2 & -1 & 3 \\end{array}\\right)$\n' +
      '$\\xrightarrow{(\\mathrm{ii})-(\\mathrm{i})} \\left(\\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right)$\n\n' +
      'Gebundene Variable an den Zeilenköpfen, der Rest ist frei:\n' +
      '  gebundene Variable: $x_1$,\n' +
      '  freie Variablen: $x_2, x_3$.\n' +
      'Umbenennung der freien Variablen: $r = x_2,\\; s = x_3$.\n' +
      'Aus Zeile 1: $x_1 + 2r - s = 3 \\;\\Rightarrow\\; x_1 = 3 - 2r + s$.\n' +
      '$L(G_1) = \\left\\{ \\begin{pmatrix} 3 - 2r + s \\\\ r \\\\ s \\end{pmatrix} : r, s \\in \\mathbb{R} \\right\\}$\n\n' +
      '**(b)** Erweiterte Koeffizientenmatrix und Umformungen:\n' +
      '$(A_2|b_2) = \\left(\\begin{array}{cccc|c} 1 & 2 & -1 & 1 & 1 \\\\ 1 & 4 & -3 & -1 & 0 \\\\ 2 & 6 & -4 & 0 & 0 \\end{array}\\right)$\n' +
      '$\\xrightarrow{(\\mathrm{ii})-(\\mathrm{i}),\\;(\\mathrm{iii})-2(\\mathrm{i})} \\left(\\begin{array}{cccc|c} 1 & 2 & -1 & 1 & 1 \\\\ 0 & 2 & -2 & -2 & -1 \\\\ 0 & 2 & -2 & -2 & -2 \\end{array}\\right)$\n' +
      '$\\xrightarrow{(\\mathrm{iii})-(\\mathrm{ii})} \\left(\\begin{array}{cccc|c} 1 & 2 & -1 & 1 & 1 \\\\ 0 & 2 & -2 & -2 & -1 \\\\ 0 & 0 & 0 & 0 & -1 \\end{array}\\right)$\n\n' +
      'Die letzte Gleichung lautet $0\\,x_1 + 0\\,x_2 + 0\\,x_3 + 0\\,x_4 = -1$ und ist nicht erfüllbar (Widerspruch $0 = -1$). Also\n' +
      '$L(G_2) = \\emptyset$.\n\n' +
      '**(c)** Erweiterte Koeffizientenmatrix und Umformungen:\n' +
      '$(A_3|b_3) = \\left(\\begin{array}{ccc|c} 1 & 2 & 0 & 6 \\\\ 1 & 0 & 1 & 4 \\\\ 1 & 4 & -1 & 8 \\end{array}\\right)$\n' +
      '$\\xrightarrow{(\\mathrm{ii})-(\\mathrm{i}),\\;(\\mathrm{iii})-(\\mathrm{i})} \\left(\\begin{array}{ccc|c} 1 & 2 & 0 & 6 \\\\ 0 & -2 & 1 & -2 \\\\ 0 & 2 & -1 & 2 \\end{array}\\right)$\n' +
      '$\\xrightarrow{(\\mathrm{iii})+(\\mathrm{ii})} \\left(\\begin{array}{ccc|c} 1 & 2 & 0 & 6 \\\\ 0 & -2 & 1 & -2 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right)$\n\n' +
      'Es ist $\\operatorname{Rang}(A_3) = \\operatorname{Rang}(A_3|b_3) = 2$, das LGS ist also lösbar. Die Stufenköpfe liegen in den Spalten von $x_1$ und $x_2$:\n' +
      '  gebundene Variablen: $x_1, x_2$,\n' +
      '  freie Variable: $x_3$.\n' +
      'Umbenennung der freien Variablen: $r = x_3$.\n' +
      'Aus Zeile 2: $-2x_2 + r = -2 \\;\\Rightarrow\\; x_2 = 1 + \\tfrac{1}{2} r$.\n' +
      'Aus Zeile 1: $x_1 = 6 - 2x_2 = 6 - 2\\left(1 + \\tfrac{1}{2} r\\right) = 4 - r$.\n' +
      '$L(G_3) = \\left\\{ \\begin{pmatrix} 4 - r \\\\ 1 + \\tfrac{1}{2} r \\\\ r \\end{pmatrix} : r \\in \\mathbb{R} \\right\\}$\n\n' +
      '**(d)** Erweiterte Koeffizientenmatrix und Umformungen:\n' +
      '$(A_4|b_4) = \\left(\\begin{array}{ccc|c} 2 & 4 & 6 & 0 \\\\ 3 & 9 & -3 & 6 \\\\ 0 & 2 & -16 & 8 \\\\ 2 & 5 & 4 & 1 \\end{array}\\right)$\n' +
      '$\\xrightarrow{\\frac{1}{2}(\\mathrm{i})} \\left(\\begin{array}{ccc|c} 1 & 2 & 3 & 0 \\\\ 3 & 9 & -3 & 6 \\\\ 0 & 2 & -16 & 8 \\\\ 2 & 5 & 4 & 1 \\end{array}\\right)$\n' +
      '$\\xrightarrow{(\\mathrm{ii})-3(\\mathrm{i}),\\;(\\mathrm{iv})-2(\\mathrm{i})} \\left(\\begin{array}{ccc|c} 1 & 2 & 3 & 0 \\\\ 0 & 3 & -12 & 6 \\\\ 0 & 2 & -16 & 8 \\\\ 0 & 1 & -2 & 1 \\end{array}\\right)$\n' +
      '$\\xrightarrow{\\frac{1}{3}(\\mathrm{ii})} \\left(\\begin{array}{ccc|c} 1 & 2 & 3 & 0 \\\\ 0 & 1 & -4 & 2 \\\\ 0 & 2 & -16 & 8 \\\\ 0 & 1 & -2 & 1 \\end{array}\\right)$\n' +
      '$\\xrightarrow{(\\mathrm{iii})-2(\\mathrm{ii}),\\;(\\mathrm{iv})-(\\mathrm{ii})} \\left(\\begin{array}{ccc|c} 1 & 2 & 3 & 0 \\\\ 0 & 1 & -4 & 2 \\\\ 0 & 0 & -8 & 4 \\\\ 0 & 0 & 2 & -1 \\end{array}\\right)$\n' +
      '$\\xrightarrow{-\\frac{1}{8}(\\mathrm{iii})} \\left(\\begin{array}{ccc|c} 1 & 2 & 3 & 0 \\\\ 0 & 1 & -4 & 2 \\\\ 0 & 0 & 1 & -\\tfrac{1}{2} \\\\ 0 & 0 & 2 & -1 \\end{array}\\right)$\n' +
      '$\\xrightarrow{(\\mathrm{iv})-2(\\mathrm{iii})} \\left(\\begin{array}{ccc|c} 1 & 2 & 3 & 0 \\\\ 0 & 1 & -4 & 2 \\\\ 0 & 0 & 1 & -\\tfrac{1}{2} \\\\ 0 & 0 & 0 & 0 \\end{array}\\right)$\n\n' +
      'Es ist $\\operatorname{Rang}(A_4) = \\operatorname{Rang}(A_4|b_4) = 3$. Da es insgesamt nur 3 Variablen gibt, sind alle gebunden:\n' +
      '  gebundene Variablen: $x_1, x_2, x_3$,\n' +
      '  freie Variablen: nicht vorhanden.\n' +
      'Rückwärtseinsetzen:\n' +
      'Zeile 3: $x_3 = -\\tfrac{1}{2}$.\n' +
      'Zeile 2: $x_2 - 4x_3 = 2 \\;\\Rightarrow\\; x_2 = 2 + 4\\left(-\\tfrac{1}{2}\\right) = 0$.\n' +
      'Zeile 1: $x_1 + 2x_2 + 3x_3 = 0 \\;\\Rightarrow\\; x_1 = -2\\cdot 0 - 3\\left(-\\tfrac{1}{2}\\right) = \\tfrac{3}{2}$.\n' +
      '$L(G_4) = \\left\\{ \\begin{pmatrix} \\tfrac{3}{2} \\\\ 0 \\\\ -\\tfrac{1}{2} \\end{pmatrix} \\right\\}$',
    schwierigkeit: 'mittel',
    kategorie: 'Lineare Gleichungssysteme',
  },
  {
    id: 'b7_a4',
    titel: 'Lösbarkeit und Anzahl der Lösungen aus der Zeilenstufenform ablesen',
    aufgabeText:
      'Geben Sie bei folgenden erweiterten Koeffizientenmatrizen jeweils an, ob das zugehörige lineare Gleichungssystem keine, genau eine oder unendlich viele Lösungen besitzt. Geben Sie außerdem bei den lösbaren Gleichungssystemen die gebundenen und freien Variablen an. Bestimmen Sie – wenn noch Zeit ist – jeweils die Lösungsmenge.\n' +
      '(a) $\\left(\\begin{array}{ccc|c} 1 & 1 & 2 & 1 \\\\ 0 & 1 & 1 & 1 \\\\ 0 & 0 & -4 & 0 \\end{array}\\right)$\n' +
      '(b) $\\left(\\begin{array}{ccc|c} 1 & 1 & 2 & 1 \\\\ 0 & 1 & 1 & 1 \\\\ 0 & 0 & 0 & -4 \\end{array}\\right)$\n' +
      '(c) $\\left(\\begin{array}{cc|c} 1 & 1 & 2 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{array}\\right)$\n' +
      '(d) $\\left(\\begin{array}{cccc|c} 1 & 1 & 2 & 4 & 1 \\\\ 0 & 1 & 1 & -2 & -1 \\\\ 0 & 0 & 0 & 3 & 3 \\end{array}\\right)$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'An einer Matrix in Zeilenstufenform liest man die Lösbarkeit direkt ab:\n\n' +
          '• Keine Lösung: Es gibt eine Zeile $(0\\;\\dots\\;0\\,|\\,c)$ mit $c \\neq 0$, d. h. $\\operatorname{Rang}(A) < \\operatorname{Rang}(A\\,|\\,b)$.\n\n' +
          '• Genau eine Lösung: $\\operatorname{Rang}(A) = \\operatorname{Rang}(A\\,|\\,b) = $ Anzahl der Unbekannten (keine freie Variable).\n\n' +
          '• Unendlich viele Lösungen: $\\operatorname{Rang}(A) = \\operatorname{Rang}(A\\,|\\,b) < $ Anzahl der Unbekannten (mindestens eine freie Variable).',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '1. Stufenköpfe bestimmen → die zugehörigen Spalten gehören zu den gebundenen Variablen.\n' +
          '2. Spalten ohne Stufenkopf → freie Variablen (mit Parametern benennen).\n' +
          '3. Auf eine Widerspruchszeile $0 = c \\neq 0$ prüfen.\n' +
          '4. Falls lösbar: von unten nach oben einsetzen und die Lösungsmenge angeben.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Die Spalte rechts vom Strich (die rechte Seite $b$) als Variablenspalte mitzählen.\n\n' +
          '• Eine Nullzeile $0 = 0$ (harmlos, erzeugt eine freie Variable) mit $0 = c \\neq 0$ (Widerspruch) verwechseln.',
      },
    ],
    loesung:
      '**(a)** Gebundene Variablen: $x_1, x_2, x_3$; freie Variable: nicht vorhanden.\n' +
      'Also genau eine Lösung (der Rang der Koeffizientenmatrix stimmt mit dem Rang der erweiterten Koeffizientenmatrix und mit der Anzahl der Unbekannten überein: $3 = 3 = 3$).\n' +
      'Löse also\n' +
      '$\\begin{aligned} x_1 + x_2 + 2x_3 &= 1 \\quad (1) \\\\ x_2 + x_3 &= 1 \\quad (2) \\\\ -4x_3 &= 0 \\quad (3) \\end{aligned}$\n' +
      'Aus (3): $x_3 = 0$.\n' +
      'In (2): $x_2 = 1 - x_3 = 1 - 0 = 1$.\n' +
      'In (1): $x_1 = 1 - x_2 - 2x_3 = 1 - 1 - 2\\cdot 0 = 0$.\n' +
      'Lösungsmenge: $\\left\\{ \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix} \\right\\}$.\n\n' +
      '**(b)** Keine Lösung, da die letzte Gleichung $0x_1 + 0x_2 + 0x_3 = -4$ nicht erfüllbar ist (der Rang der Koeffizientenmatrix $= 2$ ist kleiner als der Rang der erweiterten Koeffizientenmatrix $= 3$).\n' +
      'Lösungsmenge: $\\emptyset$.\n\n' +
      '**(c)** Gebundene Variablen: $x_1, x_2$; freie Variable: nicht vorhanden.\n' +
      'Also genau eine Lösung (der Rang der Koeffizientenmatrix stimmt mit dem Rang der erweiterten Koeffizientenmatrix und mit der Anzahl der Unbekannten überein: $2 = 2 = 2$).\n' +
      'Löse also\n' +
      '$\\begin{aligned} x_1 + x_2 &= 2 \\quad (1) \\\\ x_2 &= 1 \\quad (2) \\end{aligned}$\n' +
      'Aus (2): $x_2 = 1$.\n' +
      'In (1): $x_1 = 2 - x_2 = 2 - 1 = 1$.\n' +
      'Lösungsmenge: $\\left\\{ \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} \\right\\}$.\n\n' +
      '**(d)** Gebundene Variablen: $x_1, x_2, x_4$; freie Variable: $x_3$.\n' +
      'Da eine freie Variable vorhanden ist, gibt es unendlich viele Lösungen (der Rang der Koeffizientenmatrix stimmt mit dem Rang der erweiterten Koeffizientenmatrix überein, $= 3$, ist aber kleiner als die Anzahl der Unbekannten $= 4$).\n' +
      'Umbenennung der freien Variablen: $r = x_3$. Löse also\n' +
      '$\\begin{aligned} x_1 + x_2 + 2r + 4x_4 &= 1 \\quad (1) \\\\ x_2 + r - 2x_4 &= -1 \\quad (2) \\\\ 3x_4 &= 3 \\quad (3) \\end{aligned}$\n' +
      'Aus (3): $x_4 = 1$.\n' +
      'In (2): $x_2 = -1 - r + 2x_4 = -1 - r + 2\\cdot 1 = 1 - r$.\n' +
      'In (1): $x_1 = 1 - x_2 - 2r - 4x_4 = 1 - (1 - r) - 2r - 4\\cdot 1 = -4 - r$.\n' +
      'Lösungsmenge: $\\left\\{ \\begin{pmatrix} -4 - r \\\\ 1 - r \\\\ r \\\\ 1 \\end{pmatrix} : r \\in \\mathbb{R} \\right\\}$.',
    schwierigkeit: 'mittel',
    kategorie: 'Lineare Gleichungssysteme',
  },
  {
    id: 'b7_a5',
    titel: 'Parameterabhängiges homogenes LGS – Anzahl der Lösungen',
    aufgabeText:
      'Betrachten Sie das lineare Gleichungssystem\n' +
      '$\\left.\\begin{aligned} \\alpha x_1 + \\alpha x_2 &= 0 \\\\ \\alpha x_1 + (\\alpha - 1)x_2 &= 0 \\end{aligned}\\right\\} (G_1)$\n' +
      'mit dem Parameter $\\alpha \\in \\mathbb{R}$ und überlegen Sie, für welche $\\alpha \\in \\mathbb{R}$ das lineare Gleichungssystem\n' +
      '(i) keine,\n' +
      '(ii) genau eine,\n' +
      '(iii) unendlich viele\n' +
      'Lösungen besitzt.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Ein homogenes LGS ($b = 0$) ist immer lösbar, denn der Nullvektor ist stets eine Lösung. Der Fall „keine Lösung“ kann also nie eintreten.\n\n' +
          'Ob es genau eine oder unendlich viele Lösungen gibt, hängt nur vom Rang der Koeffizientenmatrix ab – hier in Abhängigkeit vom Parameter $\\alpha$.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '1. Da $b = 0$ bei Zeilenumformungen $0$ bleibt, genügt es, die Koeffizientenmatrix $A$ zu betrachten.\n' +
          '2. $A$ in Zeilenstufenform bringen – dabei den Parameter $\\alpha$ im Blick behalten.\n' +
          '3. Fallunterscheidung nach $\\alpha$ (hier $\\alpha \\neq 0$ und $\\alpha = 0$) und jeweils den Rang bestimmen.\n' +
          '4. Voller Rang (= Anzahl der Unbekannten) ⇒ nur die Nulllösung; kleinerer Rang ⇒ unendlich viele Lösungen.',
      },
    ],
    loesung:
      'Es handelt sich um ein homogenes LGS, da die rechte Seite $b = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$ ist. Bei den Umformungen im Gauß-Verfahren bleibt die rechte Seite unverändert und wird deshalb nicht mitgeführt.\n\n' +
      '**Fall 1** ($\\alpha \\neq 0$) – Koeffizientenmatrix und Umformung zur Rangbestimmung:\n' +
      '$A_\\alpha := \\begin{pmatrix} \\alpha & \\alpha \\\\ \\alpha & \\alpha - 1 \\end{pmatrix} \\xrightarrow{(\\mathrm{ii})-(\\mathrm{i})} \\begin{pmatrix} \\alpha & \\alpha \\\\ 0 & -1 \\end{pmatrix}$\n' +
      'Da $\\operatorname{Rang}(A_\\alpha) = \\operatorname{Rang}(A_\\alpha|b)$, ist das LGS lösbar. Es gibt $\\operatorname{Rang}(A_\\alpha) = 2$ gebundene Variablen und keine freien Variablen. Damit gibt es genau eine Lösung.\n\n' +
      '**Fall 2** ($\\alpha = 0$) – Koeffizientenmatrix und Umformung zur Rangbestimmung:\n' +
      '$A_0 := \\begin{pmatrix} 0 & 0 \\\\ 0 & -1 \\end{pmatrix} \\xrightarrow{(\\mathrm{i}) \\leftrightarrow (\\mathrm{ii})} \\begin{pmatrix} 0 & -1 \\\\ 0 & 0 \\end{pmatrix}$\n' +
      'Da $\\operatorname{Rang}(A_0) = \\operatorname{Rang}(A_0|b)$, ist das LGS lösbar. Es gibt $\\operatorname{Rang}(A_0|b) = 1$ gebundene Variable und eine freie Variable. Somit besitzt das LGS unendlich viele Lösungen.\n\n' +
      '**Fazit:**\n' +
      '(i) Der Fall tritt nicht ein, denn $\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$ ist immer eine Lösung dieses linearen Gleichungssystems.\n' +
      '(ii) Für jedes $\\alpha \\in \\mathbb{R} \\setminus \\{0\\}$ besitzt dieses lineare Gleichungssystem genau eine Lösung, nämlich $\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$.\n' +
      '(iii) Für $\\alpha = 0$ besitzt das lineare Gleichungssystem unendlich viele Lösungen.',
    schwierigkeit: 'mittel',
    kategorie: 'Lineare Gleichungssysteme',
  },
  {
    id: 'b7_a6',
    titel: 'LGS zu vorgegebener Lösungsmenge konstruieren',
    aufgabeText:
      'Geben Sie jeweils ein lineares Gleichungssystem mit zwei Unbekannten an, so dass die Lösungsmenge jeweils mit den nachfolgenden Mengen übereinstimmt.\n' +
      '(a) $\\left\\{ \\begin{pmatrix} -1 \\\\ 2 \\end{pmatrix} \\right\\}$\n' +
      '(b) $\\left\\{ \\begin{pmatrix} r \\\\ 2r \\end{pmatrix} : r \\in \\mathbb{R} \\right\\}$\n' +
      '(c) $\\left\\{ \\begin{pmatrix} r \\\\ s \\end{pmatrix} : r, s \\in \\mathbb{R} \\right\\}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Die Aufgabe ist „umgekehrt“: Aus einer vorgegebenen Lösungsmenge soll ein passendes LGS konstruiert werden.\n\n' +
          '• Ein einzelner Punkt ⇒ genau eine Lösung ⇒ zwei unabhängige Gleichungen (voller Rang $2$).\n\n' +
          '• Eine Gerade durch den Ursprung ⇒ eine freie Variable ⇒ eine Gleichung (Rang $1$).\n\n' +
          '• Die gesamte Ebene $\\mathbb{R}^2$ ⇒ keine Einschränkung ⇒ die Nullgleichung $0 = 0$ (Rang $0$).',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Mache jeweils die Probe durch Einsetzen: Erfüllt der bzw. jeder angegebene Vektor das selbst gewählte LGS, und hat das LGS genau die geforderte Anzahl an Freiheitsgraden? Es gibt jeweils viele richtige Lösungen.',
      },
    ],
    loesung:
      '**(a)** Zum Beispiel (jede Variante hat genau die Lösung $(-1, 2)$):\n' +
      '$\\begin{aligned} x_1 &= -1 \\\\ x_2 &= 2 \\end{aligned}$\n' +
      'oder\n' +
      '$\\begin{aligned} 2x_1 - x_2 &= -4 \\\\ x_2 &= 2 \\end{aligned}$\n' +
      'oder\n' +
      '$\\begin{aligned} 2x_1 - x_2 &= -4 \\\\ x_1 - x_2 &= -3 \\end{aligned}$\n\n' +
      '**(b)** Zum Beispiel (die Gerade $x_2 = 2x_1$ durch den Ursprung):\n' +
      '$2x_1 - x_2 = 0$\n\n' +
      '**(c)** Die gesamte Ebene $\\mathbb{R}^2$ als Lösungsmenge – die stets erfüllte Nullgleichung:\n' +
      '$0x_1 + 0x_2 = 0$',
    schwierigkeit: 'mittel',
    kategorie: 'Lineare Gleichungssysteme',
  },
]
