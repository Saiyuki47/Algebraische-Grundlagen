import type { Aufgabe } from '../../types'

// Übungsblatt 10 (Koordinaten, lineare Abbildungen).
// Aufgabentexte und Lösungen sind wörtlich aus den offiziellen PDFs übernommen
// (10_aufg_koordinaten-lin-abb.pdf / 10_lsg_koordinaten-lin-abb.pdf).
// Die Tipps sind ergänzt, nicht aus dem Blatt.

export const b10: Aufgabe[] = [
  // ─── Aufgabe 1: Basis des R³ und Koordinaten ──────────────────────────────
  {
    id: 'b10_a1',
    titel: 'Basis von $\\mathbb{R}^3$ und Koordinaten $K_{\\mathcal{B}}(y)$',
    aufgabeText:
      'Die Vektoren $b_1, b_2, b_3 \\in \\mathbb{R}^3$ seien gegeben durch\n\n' +
      '$b_1 := \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}, \\quad b_2 := \\begin{pmatrix} 1 \\\\ 2 \\\\ 1 \\end{pmatrix} \\quad b_3 := \\begin{pmatrix} -1 \\\\ 3 \\\\ 4 \\end{pmatrix}.$\n\n' +
      '(a) Zeigen Sie, dass $\\mathcal{B} := \\{b_1, b_2, b_3\\}$ eine Basis von $\\mathbb{R}^3$ ist.\n\n' +
      '(b) Geben Sie die Koordinaten des Vektors $y := \\begin{pmatrix} -2 \\\\ 9 \\\\ 13 \\end{pmatrix} \\in \\mathbb{R}^3$ bezüglich der Basis $\\mathcal{B}$ an, also $K_{\\mathcal{B}}(y)$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Eine Basis ist eine Menge von Vektoren, die (1) linear unabhängig ist und (2) den ganzen Raum erzeugt.\n\n' +
          'Abkürzung im $\\mathbb{R}^n$: Hat man genau $n$ Vektoren, so reicht es, die lineare Unabhängigkeit zu zeigen – dann sind sie automatisch auch erzeugend. Hier sind es 3 Vektoren im $\\mathbb{R}^3$, also genügt die lineare Unabhängigkeit.\n\n' +
          'Die Koordinaten $K_{\\mathcal{B}}(y)$ sind die Koeffizienten der (eindeutigen) Darstellung $y = \\lambda_1 b_1 + \\lambda_2 b_2 + \\lambda_3 b_3$ – also der Vektor $(\\lambda_1, \\lambda_2, \\lambda_3)^T$.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '(a) Lineare Unabhängigkeit: Ansatz $\\lambda_1 b_1 + \\lambda_2 b_2 + \\lambda_3 b_3 = 0$ aufschreiben. Das ergibt ein homogenes LGS. Kommt nur die triviale Lösung $\\lambda_1 = \\lambda_2 = \\lambda_3 = 0$ heraus, sind die Vektoren linear unabhängig.\n\n' +
          '(b) Genau derselbe Ansatz, nur mit $y$ statt $0$ auf der rechten Seite: $\\lambda_1 b_1 + \\lambda_2 b_2 + \\lambda_3 b_3 = y$. Die Lösung des LGS ist der gesuchte Koordinatenvektor.\n\n' +
          'Die Koeffizientenmatrix ist in beiden Teilen dieselbe – die Vektoren $b_1, b_2, b_3$ stehen als Spalten darin.',
      },
      {
        icon: '📝',
        titel: 'Praktischer Kniff',
        inhalt:
          'Weil (a) und (b) dieselbe Koeffizientenmatrix haben, kann man beide LGS in einem Durchgang lösen – mit zwei rechten Seiten in der erweiterten Matrix:\n\n' +
          '$\\left(\\begin{array}{ccc|c|c} 1 & 1 & -1 & 0 & -2 \\\\ 1 & 2 & 3 & 0 & 9 \\\\ 1 & 1 & 4 & 0 & 13 \\end{array}\\right)$\n\n' +
          'Probe für (b): $2 b_1 - 1 b_2 + 3 b_3 = \\begin{pmatrix} 2 \\\\ 2 \\\\ 2 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ 2 \\\\ 1 \\end{pmatrix} + \\begin{pmatrix} -3 \\\\ 9 \\\\ 12 \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ 9 \\\\ 13 \\end{pmatrix} = y$. ✓',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• $K_{\\mathcal{B}}(y)$ ist NICHT $y$ selbst, sondern der Vektor der Koeffizienten. Nur bezüglich der Standardbasis stimmen beide überein.\n\n' +
          '• Die Reihenfolge der Basisvektoren zählt: Vertauscht man $b_1$ und $b_2$, vertauschen sich auch die ersten beiden Koordinaten.\n\n' +
          '• Die Abkürzung „$n$ unabhängige Vektoren im $\\mathbb{R}^n$ = Basis" gilt nur, wenn die Anzahl genau mit der Dimension übereinstimmt. Bei 2 oder 4 Vektoren im $\\mathbb{R}^3$ funktioniert das Argument nicht.',
      },
    ],
    loesung:
      '(a) Die Vektoren $b_1$, $b_2$ und $b_3$ sind linear unabhängig, da das lineare Gleichungssystem\n\n' +
      '$\\begin{aligned} \\lambda_1 + \\lambda_2 - \\lambda_3 &= 0 \\\\ \\lambda_1 + 2\\lambda_2 + 3\\lambda_3 &= 0 \\\\ \\lambda_1 + \\lambda_2 + 4\\lambda_3 &= 0 \\end{aligned} \\qquad (G_1)$\n\n' +
      'nur die Lösung $\\lambda_1 = \\lambda_2 = \\lambda_3 = 0$ besitzt, also $L(G_1) = \\left\\{ \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix} \\right\\}$. Da $\\dim \\mathbb{R}^3 = 3$, bilden bereits 3 linear unabhängige Vektoren eine Basis des $\\mathbb{R}^3$.\n\n' +
      '(b) Gesucht sind $\\lambda_1$, $\\lambda_2$ und $\\lambda_3$ so, dass\n\n' +
      '$\\lambda_1 b_1 + \\lambda_2 b_2 + \\lambda_3 b_3 = y.$\n\n' +
      'Dies führt auf das lineare Gleichungssystem\n\n' +
      '$\\begin{aligned} \\lambda_1 + \\lambda_2 - \\lambda_3 &= -2 \\\\ \\lambda_1 + 2\\lambda_2 + 3\\lambda_3 &= 9 \\\\ \\lambda_1 + \\lambda_2 + 4\\lambda_3 &= 13 \\end{aligned} \\qquad (G_2)$\n\n' +
      'Es ist $L(G_2) = \\left\\{ \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix} \\right\\}$ und somit $K_{\\mathcal{B}}(y) = \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix}$.',
    schwierigkeit: 'mittel',
    kategorie: 'Vektorräume',
  },

  // ─── Aufgabe 2: Basis eines UVR des R⁴, Dimension, zweite Basis ────────────
  {
    id: 'b10_a2',
    titel: 'Basis und Dimension eines Untervektorraums des $\\mathbb{R}^4$',
    aufgabeText:
      'Bestimmen Sie eine Basis $\\mathcal{B}$ des Untervektorraums\n\n' +
      '$U = \\left\\{ \\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\\\ x_4 \\end{pmatrix} \\in \\mathbb{R}^4 : x_1 + 2x_2 + x_4 = 0 \\text{ und } x_3 - 2x_4 = 0 \\right\\}$\n\n' +
      'des $\\mathbb{R}^4$, und geben Sie die Dimension $\\dim U$ an. Ist auch\n\n' +
      '$\\mathcal{B}\' = \\left\\{ \\begin{pmatrix} -4 \\\\ 1 \\\\ 4 \\\\ 2 \\end{pmatrix}, \\begin{pmatrix} 1 \\\\ -1 \\\\ 2 \\\\ 1 \\end{pmatrix} \\right\\}$\n\n' +
      'eine Basis von $U$? Falls ja, dann geben Sie die Koordinaten von $v = \\begin{pmatrix} -7 \\\\ 4 \\\\ -2 \\\\ -1 \\end{pmatrix}$ bezüglich $\\mathcal{B}$ und $\\mathcal{B}\'$ an.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Die Lösungsmenge eines HOMOGENEN linearen Gleichungssystems ist immer ein Untervektorraum. Genau das ist $U$ hier – man muss die UVR-Eigenschaft also nicht mühsam nachrechnen, sondern kann sie mit diesem Satz begründen.\n\n' +
          'Die Dimension ist die Anzahl der freien Variablen: $\\dim U = (\\text{Anzahl Variablen}) - \\mathrm{Rang}$. Hier: $4 - 2 = 2$.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '1. LGS in Zeilenstufenform bringen (hier steht es schon so da) und gebundene von freien Variablen trennen.\n' +
          '2. Freie Variablen umbenennen ($r$, $s$) und die gebundenen durch sie ausdrücken.\n' +
          '3. Lösungsvektor nach $r$ und $s$ „sortieren": Der Faktor vor $r$ ist der erste Basisvektor, der vor $s$ der zweite.\n\n' +
          'Für die zweite Basis $\\mathcal{B}\'$ prüft man drei Dinge:\n' +
          '  (1) Liegen beide Vektoren überhaupt in $U$? (Einsetzen in die beiden Gleichungen.)\n' +
          '  (2) Sind sie linear unabhängig? (Rang der Matrix aus beiden Vektoren.)\n' +
          '  (3) Stimmt ihre Anzahl mit $\\dim U$ überein? Dann sind sie automatisch eine Basis.',
      },
      {
        icon: '📝',
        titel: 'Koordinaten bestimmen',
        inhalt:
          'Koordinaten heißt immer: Löse $\\lambda_1 \\cdot (\\text{1. Basisvektor}) + \\lambda_2 \\cdot (\\text{2. Basisvektor}) = v$.\n\n' +
          'Probe bezüglich $\\mathcal{B}$: $4 \\begin{pmatrix} -2 \\\\ 1 \\\\ 0 \\\\ 0 \\end{pmatrix} - 1 \\begin{pmatrix} -1 \\\\ 0 \\\\ 2 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} -7 \\\\ 4 \\\\ -2 \\\\ -1 \\end{pmatrix} = v$. ✓\n\n' +
          'Probe bezüglich $\\mathcal{B}\'$: $1 \\begin{pmatrix} -4 \\\\ 1 \\\\ 4 \\\\ 2 \\end{pmatrix} - 3 \\begin{pmatrix} 1 \\\\ -1 \\\\ 2 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} -7 \\\\ 4 \\\\ -2 \\\\ -1 \\end{pmatrix} = v$. ✓',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Derselbe Vektor $v$ hat bezüglich verschiedener Basen VERSCHIEDENE Koordinaten – hier $(4, -1)^T$ bzw. $(1, -3)^T$. Das ist kein Widerspruch, sondern der Kern des Koordinatenbegriffs.\n\n' +
          '• $\\dim U$ ist nicht „4 minus Anzahl der Gleichungen", sondern „4 minus Rang". Nur weil die beiden Gleichungen hier unabhängig sind, kommt dasselbe heraus.\n\n' +
          '• Bei $\\mathcal{B}\'$ reicht lineare Unabhängigkeit allein nicht – die Vektoren müssen auch wirklich IN $U$ liegen. Beides ist zu prüfen.',
      },
    ],
    loesung:
      'Die Lösungsmenge des homogenen LGS\n\n' +
      '$\\begin{aligned} x_1 + 2x_2 \\quad + x_4 &= 0 \\\\ x_3 - 2x_4 &= 0 \\end{aligned} \\qquad (G)$\n\n' +
      'stimmt mit $U$ überein. Daher ist $U$ ein Untervektorraum von $\\mathbb{R}^4$.\n\n' +
      'Wir lösen zunächst das LGS $(G)$ mit dem Gauß-Verfahren. Es befindet sich bereits in normierter Zeilenstufenform, so dass keine Umformungen mehr nötig sind. Wir erhalten als\n\n' +
      '• gebundene Variable: $x_1$, $x_3$,\n' +
      '• freie Variable: $x_2$, $x_4$.\n\n' +
      'Umbenennung der freien Variablen: $r = x_2$, $s = x_4$. Löse also\n\n' +
      '$\\begin{aligned} x_1 + 2r + s &= 0 \\qquad (1) \\\\ x_3 - 2s &= 0 \\qquad (2) \\end{aligned}$\n\n' +
      'Aus (2): $x_3 = 2s$.\n' +
      'Aus (1): $x_1 = -2r - s$.\n\n' +
      'Somit erhält man als Lösungsmenge\n\n' +
      '$U = L(G) = \\left\\{ \\begin{pmatrix} -2r-s \\\\ r \\\\ 2s \\\\ s \\end{pmatrix} : r, s \\in \\mathbb{R} \\right\\} = \\left\\{ r \\begin{pmatrix} -2 \\\\ 1 \\\\ 0 \\\\ 0 \\end{pmatrix} + s \\begin{pmatrix} -1 \\\\ 0 \\\\ 2 \\\\ 1 \\end{pmatrix} \\right\\} = \\mathrm{lin} \\left\\{ \\begin{pmatrix} -2 \\\\ 1 \\\\ 0 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} -1 \\\\ 0 \\\\ 2 \\\\ 1 \\end{pmatrix} \\right\\}.$\n\n' +
      'Die beiden Vektoren $\\begin{pmatrix} -2 \\\\ 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$ und $\\begin{pmatrix} -1 \\\\ 0 \\\\ 2 \\\\ 1 \\end{pmatrix}$ sind offensichtlich linear unabhängig, und ihre lineare Hülle stimmt mit $U$ überein. Damit ist\n\n' +
      '$\\mathcal{B} = \\left\\{ \\begin{pmatrix} -2 \\\\ 1 \\\\ 0 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} -1 \\\\ 0 \\\\ 2 \\\\ 1 \\end{pmatrix} \\right\\}$\n\n' +
      'eine Basis von $U$ und $\\dim U = 2$.\n\n' +
      'Überprüfung, ob $\\mathcal{B}\'$ eine Basis von $U$ ist:\n\n' +
      '• Wir prüfen direkt nach (durch Einsetzen in das LGS), dass $u := \\begin{pmatrix} -4 \\\\ 1 \\\\ 4 \\\\ 2 \\end{pmatrix}$ und $w := \\begin{pmatrix} 1 \\\\ -1 \\\\ 2 \\\\ 1 \\end{pmatrix} \\in U$ gilt, also $\\mathrm{lin}\\{u, w\\} \\subseteq U$.\n\n' +
      '• Lineare Unabhängigkeit:\n\n' +
      '$A := \\begin{pmatrix} -4 & 1 \\\\ 1 & -1 \\\\ 4 & 2 \\\\ 2 & 1 \\end{pmatrix} \\xrightarrow{-\\frac{1}{4}(\\mathrm{i})} \\begin{pmatrix} 1 & -\\frac{1}{4} \\\\ 1 & -1 \\\\ 4 & 2 \\\\ 2 & 1 \\end{pmatrix} \\xrightarrow{(\\mathrm{ii})-(\\mathrm{i}),\\,(\\mathrm{iii})-4(\\mathrm{i}),\\,(\\mathrm{iv})-2(\\mathrm{i})} \\begin{pmatrix} 1 & -\\frac{1}{4} \\\\ 0 & -\\frac{3}{4} \\\\ 0 & 3 \\\\ 0 & \\frac{3}{2} \\end{pmatrix}$\n\n' +
      '$\\xrightarrow{(\\mathrm{iii})+4(\\mathrm{ii}),\\,(\\mathrm{iv})+2(\\mathrm{ii})} \\begin{pmatrix} 1 & -\\frac{1}{4} \\\\ 0 & -\\frac{3}{4} \\\\ 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$\n\n' +
      'Da $\\mathrm{Rang}(A) = 2$, sind die beiden Vektoren linear unabhängig.\n\n' +
      'Da $\\dim U = 2$, bilden 2 linear unabhängige Vektoren aus $U$ bereits eine Basis von $U$. Wir haben also gezeigt, dass $\\mathcal{B}\'$ ebenfalls eine Basis von $U$ ist.\n\n' +
      'Koordinaten von $v$ bezüglich $\\mathcal{B}$:\n\n' +
      'Ansatz: Löse das LGS $\\lambda_1 \\begin{pmatrix} -2 \\\\ 1 \\\\ 0 \\\\ 0 \\end{pmatrix} + \\lambda_2 \\begin{pmatrix} -1 \\\\ 0 \\\\ 2 \\\\ 1 \\end{pmatrix} = v$ und erhalte\n\n' +
      '$K_{\\mathcal{B}}(v) = \\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}.$\n\n' +
      'Koordinaten von $v$ bezüglich $\\mathcal{B}\'$:\n\n' +
      'Ansatz: Löse das LGS $\\lambda_1 u + \\lambda_2 w = v$ und erhalte $K_{\\mathcal{B}\'}(v) = \\begin{pmatrix} 1 \\\\ -3 \\end{pmatrix}$',
    schwierigkeit: 'schwer',
    kategorie: 'Vektorräume',
  },

  // ─── Aufgabe 3: Welche Abbildungen sind linear? ────────────────────────────
  {
    id: 'b10_a3',
    titel: 'Welche Abbildungen sind linear?',
    aufgabeText:
      'Welche der nachfolgenden Abbildungen sind linear?\n\n' +
      '(i) $f_1 : \\mathbb{R}^5 \\to \\mathbb{R}, \\begin{pmatrix} x_1 \\\\ \\vdots \\\\ x_5 \\end{pmatrix} \\mapsto \\sum_{k=1}^{5} x_k$\n\n' +
      '(ii) $f_2 : \\mathbb{R}^3 \\to \\mathbb{R}^3, \\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{pmatrix} \\mapsto \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix} + \\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{pmatrix}$\n\n' +
      '(iii) $f_3 : \\mathbb{R}^2 \\to \\mathbb{R}, \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix} \\mapsto x_1 x_2$\n\n' +
      '(iv) $f_4 : \\mathbb{R}^2 \\to \\mathbb{R}^3, \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix} \\mapsto \\begin{pmatrix} 3\\pi x_1 \\\\ x_2 - x_1 \\\\ \\sqrt{|x_2|} \\end{pmatrix}$\n\n' +
      '(v) $f_5 : \\mathbb{R}^2 \\to \\mathbb{R}^2, \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix} \\mapsto \\begin{pmatrix} |x_1| \\\\ |x_2| \\end{pmatrix}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Eine Abbildung $f : V \\to W$ heißt linear, wenn für alle $x, y \\in V$ und alle $\\lambda \\in \\mathbb{R}$ gilt:\n' +
          '  1. $f(x + y) = f(x) + f(y)$ (Additivität)\n' +
          '  2. $f(\\lambda x) = \\lambda f(x)$ (Homogenität)\n\n' +
          'Aus 2. folgt mit $\\lambda = 0$ sofort $f(0) = 0$. Das ist die schnellste Prüfung überhaupt: Ist $f(0) \\neq 0$, kann $f$ nicht linear sein.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Erst der schnelle Test: $f(0)$ ausrechnen. Kommt nicht $0$ heraus → fertig, nicht linear.\n\n' +
          'Sonst ein konkretes Gegenbeispiel suchen. Bewährte Kandidaten:\n' +
          '  • $\\lambda = -1$ (entlarvt Beträge und Wurzeln)\n' +
          '  • $x = y = (1, 1)^T$ (entlarvt Produkte von Variablen)\n\n' +
          'Für „ist linear" reicht kein Beispiel – das muss allgemein gezeigt werden. Faustregel: Nur Summen von Vielfachen der $x_k$ (ohne Produkte, Wurzeln, Beträge, Konstanten) sind linear.',
      },
      {
        icon: '📝',
        titel: 'Warum die einzelnen Fälle scheitern',
        inhalt:
          '(ii) $f_2(0) = \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix} \\neq 0$ – der konstante Summand stört. (Solche Abbildungen heißen affin, nicht linear.)\n\n' +
          '(iii) $f_3(1,1) = 1$, aber $f_3(2 \\cdot (1,1)) = f_3(2,2) = 4 \\neq 2 \\cdot 1$. Ein Produkt zweier Variablen ist quadratisch.\n\n' +
          '(iv) Die dritte Komponente $\\sqrt{|x_2|}$ ist nicht homogen: $\\sqrt{|4 \\cdot 1|} = 2 \\neq 4 \\cdot \\sqrt{|1|}$. Die ersten beiden Komponenten wären für sich genommen in Ordnung – eine einzige „kaputte" Komponente genügt.\n\n' +
          '(v) $f_5(-1, 0) = (1, 0)^T$, aber $-1 \\cdot f_5(1,0) = (-1, 0)^T$. Der Betrag verschluckt das Vorzeichen.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• „Sieht einfach aus" heißt nicht linear: $|x|$ und $\\sqrt{x}$ sind einfache Funktionen, aber nicht linear.\n\n' +
          '• Eine Abbildung mit konstantem Summand ($f(x) = Ax + b$ mit $b \\neq 0$) ist NICHT linear, auch wenn sie „geradlinig" wirkt.\n\n' +
          '• Bei mehreren Komponenten genügt EINE nichtlineare Komponente, damit die ganze Abbildung nicht linear ist.',
      },
    ],
    loesung: '$f_1$ ist linear, $f_2, f_3, f_4, f_5$ sind nicht linear.',
    schwierigkeit: 'mittel',
    kategorie: 'Lineare Abbildungen',
  },

  // ─── Aufgabe 4: Darstellende Matrizen ─────────────────────────────────────
  {
    id: 'b10_a4',
    titel: 'Darstellende Matrix linearer Abbildungen',
    aufgabeText:
      'Geben Sie zu nachfolgenden linearen Abbildungen jeweils die darstellende Matrix an.\n\n' +
      '(a) $f_1 : \\mathbb{R}^2 \\to \\mathbb{R}^3, \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix} \\mapsto \\begin{pmatrix} 2x_2 \\\\ 3x_1 + x_2 \\\\ -2x_1 \\end{pmatrix}$\n\n' +
      '(b) $f_2 : \\mathbb{R}^5 \\to \\mathbb{R}, \\begin{pmatrix} x_1 \\\\ \\vdots \\\\ x_5 \\end{pmatrix} \\mapsto \\sum_{k=1}^{5} x_k$\n\n' +
      '(c) $f_3 : \\mathbb{R}^3 \\to \\mathbb{R}^2, \\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{pmatrix} \\mapsto \\begin{pmatrix} x_2 \\\\ x_3 \\end{pmatrix}$\n\n' +
      '(d) $f_4 : \\mathbb{R}^4 \\to \\mathbb{R}^2, \\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\\\ x_4 \\end{pmatrix} \\mapsto \\begin{pmatrix} x_1 + x_2 \\\\ x_2 - 2x_3 + 3x_4 \\end{pmatrix}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Die darstellende Matrix einer linearen Abbildung $f : \\mathbb{R}^n \\to \\mathbb{R}^m$ hat als Spalten die Bilder der Einheitsvektoren:\n\n' +
          '$A_f = \\big( f(e_1) \\;\\big|\\; f(e_2) \\;\\big|\\; \\dots \\;\\big|\\; f(e_n) \\big)$\n\n' +
          'Damit gilt dann $f(x) = A_f \\cdot x$ für alle $x$.\n\n' +
          'Das Format merkt man sich als „Ziel × Start": $f : \\mathbb{R}^n \\to \\mathbb{R}^m$ ergibt eine $m \\times n$-Matrix.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Variante 1 (immer sicher): Einheitsvektoren einsetzen und die Ergebnisse als Spalten nebeneinanderschreiben.\n\n' +
          'Variante 2 (schneller): Koeffizienten ablesen. Zeile $i$ der Matrix enthält die Vorfaktoren von $x_1, \\dots, x_n$ in der $i$-ten Komponente des Bildvektors. Kommt eine Variable dort nicht vor, steht dort eine $0$.',
      },
      {
        icon: '📝',
        titel: 'Beispiel (a) Schritt für Schritt',
        inhalt:
          '$f_1 : \\mathbb{R}^2 \\to \\mathbb{R}^3$, also wird die Matrix $3 \\times 2$.\n\n' +
          '$f_1\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 2 \\cdot 0 \\\\ 3 \\cdot 1 + 0 \\\\ -2 \\cdot 1 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 3 \\\\ -2 \\end{pmatrix}$ → erste Spalte\n\n' +
          '$f_1\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 2 \\cdot 1 \\\\ 0 + 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix}$ → zweite Spalte',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Zeilen und Spalten vertauschen. Die Bilder der Einheitsvektoren sind SPALTEN, nicht Zeilen.\n\n' +
          '• Das Format verwechseln: $f : \\mathbb{R}^2 \\to \\mathbb{R}^3$ ergibt eine $3 \\times 2$-Matrix, nicht $2 \\times 3$.\n\n' +
          '• Nullen vergessen: Kommt eine Variable in einer Komponente nicht vor, muss dort trotzdem eine $0$ stehen – wie bei (c) und (d).',
      },
    ],
    loesung:
      '(a) $A_{f_1} = \\begin{pmatrix} 0 & 2 \\\\ 3 & 1 \\\\ -2 & 0 \\end{pmatrix}$\n\n' +
      '(b) $A_{f_2} = \\begin{pmatrix} 1 & 1 & 1 & 1 & 1 \\end{pmatrix}$\n\n' +
      '(c) $A_{f_3} = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}$\n\n' +
      '(d) $A_{f_4} = \\begin{pmatrix} 1 & 1 & 0 & 0 \\\\ 0 & 1 & -2 & 3 \\end{pmatrix}$',
    schwierigkeit: 'mittel',
    kategorie: 'Lineare Abbildungen',
  },

  // ─── Aufgabe 5: Drehungen, Spiegelungen, Skalierung ───────────────────────
  {
    id: 'b10_a5',
    titel: 'Darstellende Matrizen: Skalierung, Drehung, Spiegelung',
    aufgabeText:
      '(Wenn noch Zeit ist ...)\n\n' +
      'Geben Sie die darstellenden Matrizen folgender linearer Abbildungen im $\\mathbb{R}^2$ an (Drehzentrum bei den Drehungen soll jeweils $\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$ sein):\n\n' +
      '(i) Skalieren eines Vektors mit dem Faktor 3.\n\n' +
      '(ii) Drehung eines Vektors gegen den Uhrzeigersinn um $180^\\circ$.\n\n' +
      '(iii) Drehung eines Vektors gegen den Uhrzeigersinn um $120^\\circ$.\n\n' +
      'Hinweis: $\\sin(120^\\circ) = \\frac{\\sqrt{3}}{2}$, $\\cos(120^\\circ) = -\\frac{1}{2}$, $\\sin(210^\\circ) = -\\frac{1}{2}$, $\\cos(210^\\circ) = -\\frac{\\sqrt{3}}{2}$\n\n' +
      '(iv) Spiegelung eines Vektors an der horizontalen Achse (also der $x$-Achse).\n\n' +
      '(v) Spiegelung eines Vektors an der vertikalen Achse (also der $y$-Achse).\n\n' +
      '(vi) Spiegelung eines Vektors an der ersten Winkelhalbierenden (also an der Ursprungsgeraden durch $\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$).',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Auch hier gilt: Die Spalten der Matrix sind die Bilder der Einheitsvektoren $e_1 = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$ und $e_2 = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$. Man muss sich also nur überlegen, wohin diese beiden Pfeile wandern.\n\n' +
          'Die allgemeine Drehmatrix (gegen den Uhrzeigersinn um den Winkel $\\varphi$) lautet\n\n' +
          '$D(\\varphi) = \\begin{pmatrix} \\cos\\varphi & -\\sin\\varphi \\\\ \\sin\\varphi & \\cos\\varphi \\end{pmatrix}$',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Skalierung mit Faktor $c$: jeder Vektor wird $c$-mal so lang → $c \\cdot E = \\begin{pmatrix} c & 0 \\\\ 0 & c \\end{pmatrix}$.\n\n' +
          'Drehungen: Winkel in die Formel $D(\\varphi)$ einsetzen.\n\n' +
          'Spiegelungen: Direkt überlegen, was mit $e_1$ und $e_2$ passiert:\n' +
          '  • an der $x$-Achse: $e_1 \\mapsto e_1$, $e_2 \\mapsto -e_2$\n' +
          '  • an der $y$-Achse: $e_1 \\mapsto -e_1$, $e_2 \\mapsto e_2$\n' +
          '  • an der ersten Winkelhalbierenden: $e_1 \\mapsto e_2$, $e_2 \\mapsto e_1$ (die Koordinaten werden getauscht)',
      },
      {
        icon: '📝',
        titel: 'Zu (ii) und (iii)',
        inhalt:
          '$180^\\circ$: $\\cos(180^\\circ) = -1$, $\\sin(180^\\circ) = 0$, also $D = \\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix} = -E$. Anschaulich: Jeder Vektor zeigt danach genau in die Gegenrichtung.\n\n' +
          '$120^\\circ$: Mit $\\cos(120^\\circ) = -\\frac{1}{2}$ und $\\sin(120^\\circ) = \\frac{\\sqrt{3}}{2}$ eingesetzt:\n\n' +
          '$D = \\begin{pmatrix} -\\frac{1}{2} & -\\frac{\\sqrt{3}}{2} \\\\ \\frac{\\sqrt{3}}{2} & -\\frac{1}{2} \\end{pmatrix}$\n\n' +
          'Die Werte für $210^\\circ$ aus dem Hinweis werden hier nicht gebraucht.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Das Minuszeichen in der Drehmatrix sitzt OBEN RECHTS (bei $-\\sin\\varphi$), nicht unten links. Vertauscht man das, dreht man im Uhrzeigersinn.\n\n' +
          '• Skalierung ist nicht dasselbe wie Drehung um $180^\\circ$: Faktor $3$ ergibt $3E$, die $180^\\circ$-Drehung ergibt $-E$.\n\n' +
          '• Bei der Spiegelung an der Winkelhalbierenden werden die Koordinaten getauscht – die Matrix hat Nullen auf der Diagonalen, nicht auf der Nebendiagonalen.',
      },
    ],
    loesung:
      '(i) Skalieren eines Vektors mit dem Faktor 3.\n\n' +
      'Darstellende Matrix: $\\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix}$\n\n' +
      '(ii) Drehung eines Vektors gegen den Uhrzeigersinn um $180^\\circ$.\n\n' +
      'Darstellende Matrix: $\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$\n\n' +
      '(iii) Drehung eines Vektors gegen den Uhrzeigersinn um $120^\\circ$.\n\n' +
      'Darstellende Matrix: $\\begin{pmatrix} -\\frac{1}{2} & -\\frac{\\sqrt{3}}{2} \\\\ \\frac{\\sqrt{3}}{2} & -\\frac{1}{2} \\end{pmatrix}$\n\n' +
      '(iv) Spiegelung eines Vektors an der horizontalen Achse (also der $x$-Achse).\n\n' +
      'Darstellende Matrix: $\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$\n\n' +
      '(v) Spiegelung eines Vektors an der vertikalen Achse (also der $y$-Achse).\n\n' +
      'Darstellende Matrix: $\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$\n\n' +
      '(vi) Spiegelung eines Vektors an der ersten Winkelhalbierenden (also an der Ursprungsgeraden durch $\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$).\n\n' +
      'Darstellende Matrix: $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$',
    schwierigkeit: 'mittel',
    kategorie: 'Lineare Abbildungen',
  },

  // ─── Aufgabe 6: Matrizenprodukte ──────────────────────────────────────────
  {
    id: 'b10_a6',
    titel: 'Matrizenprodukte – definiert oder nicht?',
    aufgabeText:
      '(Wenn noch Zeit ist ...)\n\n' +
      'Seien $A = \\begin{pmatrix} 1 & -2 & 3 \\\\ 2 & 1 & -3 \\end{pmatrix}$, $B = \\begin{pmatrix} 2 & -1 \\\\ 1 & 0 \\\\ -1 & 1 \\end{pmatrix}$, $x = \\begin{pmatrix} 1 \\\\ -1 \\\\ 2 \\end{pmatrix}$ und $x^T = \\begin{pmatrix} 1 & -1 & 2 \\end{pmatrix}$. Berechnen Sie folgende Ausdrücke, sofern sie definiert sind:\n\n' +
      '(i) $Ax$    (ii) $Bx$    (iii) $x^T A$    (iv) $x^T B$\n\n' +
      '(v) $AB$    (vi) $BA$    (vii) $x^T x$    (viii) $x x^T$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Ein Produkt $M \\cdot N$ ist genau dann definiert, wenn die Spaltenzahl von $M$ mit der Zeilenzahl von $N$ übereinstimmt:\n\n' +
          '$(m \\times n) \\cdot (n \\times p) = (m \\times p)$\n\n' +
          'Die beiden inneren Zahlen müssen gleich sein, die äußeren ergeben das Format des Ergebnisses.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Schreibe zuerst alle Formate auf, bevor du rechnest:\n' +
          '  $A$ ist $2 \\times 3$\n' +
          '  $B$ ist $3 \\times 2$\n' +
          '  $x$ ist $3 \\times 1$\n' +
          '  $x^T$ ist $1 \\times 3$\n\n' +
          'Dann jedes Produkt kurz prüfen, z. B. $Bx$: $(3 \\times 2) \\cdot (3 \\times 1)$ – innen steht $2$ und $3$, das passt nicht → nicht definiert. Diese Formatprüfung spart viel Rechenzeit.',
      },
      {
        icon: '📝',
        titel: 'Rechenbeispiel (i)',
        inhalt:
          '$Ax$: $(2 \\times 3) \\cdot (3 \\times 1) = (2 \\times 1)$, also definiert.\n\n' +
          'Erste Zeile: $1 \\cdot 1 + (-2) \\cdot (-1) + 3 \\cdot 2 = 1 + 2 + 6 = 9$\n' +
          'Zweite Zeile: $2 \\cdot 1 + 1 \\cdot (-1) + (-3) \\cdot 2 = 2 - 1 - 6 = -5$\n\n' +
          'Also $Ax = \\begin{pmatrix} 9 \\\\ -5 \\end{pmatrix}$.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Matrizenmultiplikation ist NICHT kommutativ: Hier ist $AB$ eine $2 \\times 2$-Matrix, $BA$ dagegen eine $3 \\times 3$-Matrix – schon die Formate unterscheiden sich.\n\n' +
          '• $x^T x$ und $x x^T$ verwechseln: $x^T x$ ist $(1 \\times 3) \\cdot (3 \\times 1) = (1 \\times 1)$, also eine Zahl. $x x^T$ ist $(3 \\times 1) \\cdot (1 \\times 3) = (3 \\times 3)$, also eine ganze Matrix.\n\n' +
          '• „Nicht definiert" ist eine vollwertige Antwort – nicht versuchen, es doch irgendwie passend zu rechnen.',
      },
    ],
    loesung:
      '(i) $Ax = \\begin{pmatrix} 9 \\\\ -5 \\end{pmatrix}$\n\n' +
      '(ii) $Bx$ ist nicht definiert.\n\n' +
      '(iii) $x^T A$ ist nicht definiert.\n\n' +
      '(iv) $x^T B = \\begin{pmatrix} -1 & 1 \\end{pmatrix}$\n\n' +
      '(v) $AB = \\begin{pmatrix} -3 & 2 \\\\ 8 & -5 \\end{pmatrix}$\n\n' +
      '(vi) $BA = \\begin{pmatrix} 0 & -5 & 9 \\\\ 1 & -2 & 3 \\\\ 1 & 3 & -6 \\end{pmatrix}$\n\n' +
      '(vii) $x^T x = \\begin{pmatrix} 6 \\end{pmatrix}$\n\n' +
      '(viii) $x x^T = \\begin{pmatrix} 1 & -1 & 2 \\\\ -1 & 1 & -2 \\\\ 2 & -2 & 4 \\end{pmatrix}$',
    schwierigkeit: 'mittel',
    kategorie: 'Lineare Abbildungen',
  },
]
