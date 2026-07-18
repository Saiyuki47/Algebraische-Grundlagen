import type { ClaudeAufgabe } from './_types'

// ─────────────────────────────────────────────────────────────────────────────
// Blatt 7 & 8 – Lineare Gleichungssysteme und Determinanten.
// Je eine eigens erdachte Beispielaufgabe pro Aufgabenart (neue Zahlen, gleicher
// Aufbau wie die Originalblätter). Alle Rechnungen sind durchgerechnet und per
// Einsetzen bzw. Gegenprobe kontrolliert.
// ─────────────────────────────────────────────────────────────────────────────

export const lgsDeterminanten: ClaudeAufgabe[] = [
  {
    id: 'c_l_lgs_erkennen',
    art: 'Ist es ein lineares Gleichungssystem?',
    titel: 'Lineare Gleichungssysteme erkennen',
    schwierigkeit: 'einfach',
    quelle: 'Blatt 7, Aufgabe 1',
    aufgabeText:
      'Entscheiden Sie bei jedem der folgenden Gleichungssysteme, ob es sich um ein lineares Gleichungssystem (LGS) handelt. Begründen Sie und geben Sie bei den linearen Systemen die erweiterte Koeffizientenmatrix an.\n\n' +
      '$(G_1):\\quad \\begin{aligned} 2x_1 - 3x_2 + x_3 &= 5 \\\\ x_1 + x_3 &= -2 \\\\ 4x_2 - x_3 &= 0 \\end{aligned}$\n\n' +
      '$(G_2):\\quad \\begin{aligned} x_1^2 + x_2 &= 4 \\\\ 2x_1 - x_2 &= 1 \\end{aligned}$\n\n' +
      '$(G_3):\\quad \\begin{aligned} \\sqrt{5}\\,x_1 + x_2 &= |-3| \\\\ x_1 - 2x_2 &= 7 \\end{aligned}$\n\n' +
      '$(G_4):\\quad \\begin{aligned} x_1 x_2 + x_3 &= 2 \\\\ x_1 - x_3 &= 0 \\end{aligned}$',
    referenz: ['lgs-gauss'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'In einem linearen Gleichungssystem dürfen die Unbekannten $x_1, x_2, \\ldots$ nur mit konstanten Zahlen multipliziert und aufsummiert werden. Verboten (macht nicht-linear) sind Potenzen wie $x_1^2$, Produkte von Unbekannten wie $x_1 x_2$, Beträge $|x_1|$ oder Funktionen wie $\\sin(x_1)$.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Prüfe jede Gleichung einzeln. Achtung: Konstanten dürfen alles sein — auch $\\sqrt{5}$ als Koeffizient oder $|-3| = 3$ als rechte Seite. Erst wenn eine Unbekannte selbst potenziert, mit einer Unbekannten multipliziert oder in eine Funktion gesteckt wird, ist das System nicht-linear.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Für ein LGS liest man die erweiterte Koeffizientenmatrix zeilenweise ab: die Koeffizienten von $x_1, x_2, x_3$ links, die rechte Seite hinter dem Strich. Fehlt eine Unbekannte in einer Gleichung, schreibt man dort eine $0$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Ein einziger nicht-linearer Term genügt, damit das GANZE System nicht-linear ist — auch wenn die übrigen Gleichungen völlig linear aussehen (siehe $(G_2)$ und $(G_4)$).' },
    ],
    loesung:
      '**$(G_1)$ — linear**\n' +
      'Alle Terme sind konstante Vielfache der Unbekannten. Mit den Spalten $x_1, x_2, x_3$ (fehlende Unbekannte als $0$):\n' +
      '$\\left(\\begin{array}{ccc|c} 2 & -3 & 1 & 5 \\\\ 1 & 0 & 1 & -2 \\\\ 0 & 4 & -1 & 0 \\end{array}\\right)$\n\n' +
      '**$(G_2)$ — nicht linear**\n' +
      'In der ersten Gleichung steht $x_1^2$, also eine Potenz einer Unbekannten. Damit ist $(G_2)$ kein LGS und es gibt keine Koeffizientenmatrix.\n\n' +
      '**$(G_3)$ — linear**\n' +
      '$\\sqrt{5}$ ist nur ein konstanter Koeffizient und $|-3| = 3$ eine Konstante. Beide Gleichungen sind linear:\n' +
      '$\\left(\\begin{array}{cc|c} \\sqrt{5} & 1 & 3 \\\\ 1 & -2 & 7 \\end{array}\\right)$\n\n' +
      '**$(G_4)$ — nicht linear**\n' +
      'Der Term $x_1 x_2$ ist ein Produkt zweier Unbekannter. Damit ist $(G_4)$ kein LGS.\n\n' +
      '**Ergebnis**\n' +
      'Linear sind $(G_1)$ und $(G_3)$; nicht-linear sind $(G_2)$ (Potenz $x_1^2$) und $(G_4)$ (Produkt $x_1 x_2$).',
  },
  {
    id: 'c_l_zsf_erkennen',
    art: 'Zeilenstufenform erkennen',
    titel: 'Welche Matrizen sind in Zeilenstufenform?',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 7, Aufgabe 2',
    aufgabeText:
      'Welche der folgenden Matrizen sind in Zeilenstufenform (ZSF)? Begründen Sie jeweils.\n\n' +
      '$A = \\begin{pmatrix} 1 & 3 & 0 & 2 \\\\ 0 & 0 & 2 & 1 \\\\ 0 & 0 & 0 & 5 \\end{pmatrix}$\n\n' +
      '$B = \\begin{pmatrix} 2 & 1 & 4 \\\\ 0 & 3 & 1 \\\\ 0 & 1 & 0 \\end{pmatrix}$\n\n' +
      '$C = \\begin{pmatrix} 0 & 1 & 2 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}$\n\n' +
      '$D = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}$\n\n' +
      '$E = \\begin{pmatrix} 1 & 2 & 3 \\\\ 1 & 0 & 1 \\\\ 0 & 0 & 2 \\end{pmatrix}$',
    referenz: ['lgs-gauss'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Eine Matrix ist in Zeilenstufenform, wenn der erste Eintrag ungleich Null jeder Zeile (das Pivot) echt weiter rechts steht als das Pivot der Zeile darüber und reine Nullzeilen ganz unten stehen. Es entsteht eine Treppe, die nach rechts unten läuft.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Notiere für jede Zeile die Spalte ihres ersten Nicht-Null-Eintrags. Diese Spaltennummern müssen von oben nach unten STRENG wachsen. Sobald eine Nullzeile auftritt, dürfen darunter nur noch Nullzeilen folgen.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Die Pivots müssen NICHT den Wert $1$ haben — entscheidend ist allein ihre Position. Eine $2$ oder $5$ als führender Eintrag ist völlig in Ordnung, solange die Treppe stimmt.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Zwei Zeilen mit erstem Nicht-Null-Eintrag in derselben Spalte bilden KEINE Stufe. Und eine Nullzeile in der Mitte (statt unten) zerstört die Zeilenstufenform.' },
    ],
    loesung:
      '**$A$ — ja**\n' +
      'Pivots in Spalte 1, 3, 4 — streng nach rechts. ZSF ✓\n\n' +
      '**$B$ — nein**\n' +
      'Zeile 2 hat ihr Pivot in Spalte 2, Zeile 3 ebenfalls in Spalte 2 (die $1$). Zwei Pivots in derselben Spalte sind keine Stufe. ✗\n\n' +
      '**$C$ — nein**\n' +
      'Zeile 2 ist eine Nullzeile, darunter folgt aber noch die Nicht-Null-Zeile $(0\\ \\ 0\\ \\ 3)$. Nullzeilen müssen ganz unten stehen. ✗\n\n' +
      '**$D$ — ja**\n' +
      'Pivots in Spalte 1 und 3, die Nullzeile steht unten. ZSF ✓\n\n' +
      '**$E$ — nein**\n' +
      'Zeile 1 und Zeile 2 haben beide ihr Pivot in Spalte 1. Keine Stufe. ✗\n\n' +
      '**Ergebnis**\n' +
      'In Zeilenstufenform sind nur $A$ und $D$.',
  },
  {
    id: 'c_l_gauss_loesen',
    art: 'LGS mit dem Gauß-Verfahren lösen',
    titel: 'Ein 3×3-LGS mit eindeutiger Lösung',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 7, Aufgabe 3',
    aufgabeText:
      'Bestimmen Sie mit dem Gauß-Verfahren die Lösungsmenge des LGS. Notieren Sie die Zeilenumformungen.\n\n' +
      '$\\begin{aligned} x_1 + x_2 + x_3 &= 4 \\\\ 2x_1 - x_2 + x_3 &= 8 \\\\ x_1 + 3x_2 - x_3 &= -4 \\end{aligned}$',
    referenz: ['lgs-gauss'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Man schreibt die erweiterte Koeffizientenmatrix auf und bringt sie mit elementaren Zeilenumformungen (Zeile mit Zahl $\\neq 0$ multiplizieren, Vielfaches einer Zeile addieren, Zeilen tauschen) auf Zeilenstufenform. Danach löst man von unten nach oben auf.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Erzeuge zuerst mit der ersten Zeile Nullen in Spalte 1 unterhalb des Pivots, dann mit der zweiten Zeile eine Null in Spalte 2. Am Ende steht eine Dreiecksform, aus der man rückwärts einsetzt.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Um Brüche zu vermeiden, darf man eine Zeile vor dem Addieren mit einer ganzen Zahl multiplizieren. Etwa $3\\cdot(\\mathrm{iii}) + 2\\cdot(\\mathrm{ii})$: erst Zeile (iii) verdreifachen, dann das Doppelte von (ii) addieren.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Beim Rückeinsetzen die Vorzeichen sauber führen. Zur Sicherheit die gefundene Lösung am Ende in ALLE Ausgangsgleichungen einsetzen.' },
    ],
    loesung:
      '**Schritt 1 — Erweiterte Koeffizientenmatrix**\n' +
      '$\\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 4 \\\\ 2 & -1 & 1 & 8 \\\\ 1 & 3 & -1 & -4 \\end{array}\\right)$\n\n' +
      '**Schritt 2 — Spalte 1 ausräumen**\n' +
      '$\\xrightarrow{(\\mathrm{ii})-2(\\mathrm{i}),\\,(\\mathrm{iii})-(\\mathrm{i})} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 4 \\\\ 0 & -3 & -1 & 0 \\\\ 0 & 2 & -2 & -8 \\end{array}\\right)$\n\n' +
      '**Schritt 3 — Spalte 2 ausräumen**\n' +
      'Um Brüche zu vermeiden: $3\\cdot(\\mathrm{iii}) + 2\\cdot(\\mathrm{ii})$.\n' +
      '$\\xrightarrow{3(\\mathrm{iii})+2(\\mathrm{ii})} \\left(\\begin{array}{ccc|c} 1 & 1 & 1 & 4 \\\\ 0 & -3 & -1 & 0 \\\\ 0 & 0 & -8 & -24 \\end{array}\\right)$\n\n' +
      '**Schritt 4 — Rückeinsetzen**\n' +
      '$-8x_3 = -24 \\Rightarrow x_3 = 3$.\n' +
      '$-3x_2 - x_3 = 0 \\Rightarrow -3x_2 = 3 \\Rightarrow x_2 = -1$.\n' +
      '$x_1 + x_2 + x_3 = 4 \\Rightarrow x_1 = 4 - (-1) - 3 = 2$.\n\n' +
      '**Ergebnis**\n' +
      'Der Rang der Koeffizientenmatrix ist $3 =$ Anzahl der Unbekannten, also gibt es genau eine Lösung:\n' +
      '$L = \\left\\{ \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix} \\right\\}$\n\n' +
      '**Probe** (Einsetzen in alle drei Gleichungen)\n' +
      '$2 + (-1) + 3 = 4$ ✓, $\\ 2\\cdot 2 - (-1) + 3 = 8$ ✓, $\\ 2 + 3\\cdot(-1) - 3 = -4$ ✓.',
  },
  {
    id: 'c_l_loesbarkeit',
    art: 'Lösbarkeit über den Rang',
    titel: 'Keine, genau eine oder unendlich viele Lösungen?',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 7, Aufgabe 4',
    aufgabeText:
      'Untersuchen Sie das folgende LGS über den Rang der Koeffizienten- und der erweiterten Koeffizientenmatrix. Geben Sie an, ob es keine, genau eine oder unendlich viele Lösungen besitzt, und bestimmen Sie gegebenenfalls die Lösungsmenge.\n\n' +
      '$\\begin{aligned} x_1 + 2x_2 + x_3 &= 3 \\\\ x_1 + 3x_2 &= 4 \\\\ 2x_1 + 5x_2 + x_3 &= 7 \\end{aligned}$',
    referenz: ['lgs-loesbarkeit'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Die Anzahl der Lösungen entscheidet der Rang. Ist $\\operatorname{Rang}(A) < \\operatorname{Rang}(A\\,|\\,b)$, gibt es keine Lösung. Sind beide Ränge gleich, hängt alles von der Zahl $n$ der Unbekannten ab: gleich $n$ bedeutet genau eine, kleiner als $n$ bedeutet unendlich viele Lösungen.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Bringe die erweiterte Koeffizientenmatrix auf Zeilenstufenform und zähle die Nicht-Null-Zeilen links (Rang von $A$) und insgesamt (Rang von $A\\,|\\,b$). Prüfe zusätzlich, ob eine Zeile $(0\\ \\ldots\\ 0 \\mid c)$ mit $c \\neq 0$ entsteht.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Bei unendlich vielen Lösungen: die Spalten OHNE Pivot gehören zu freien Variablen. Setze für jede freie Variable einen Parameter ($r, s, \\ldots$) und drücke die gebundenen Variablen durch Rückeinsetzen aus.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Nullzeilen $(0\\ \\ldots\\ 0 \\mid 0)$ bedeuten nur $0 = 0$ und sind harmlos. Erst eine Zeile mit $c \\neq 0$ rechts macht das System unlösbar.' },
    ],
    loesung:
      '**Schritt 1 — Auf Zeilenstufenform bringen**\n' +
      '$\\left(\\begin{array}{ccc|c} 1 & 2 & 1 & 3 \\\\ 1 & 3 & 0 & 4 \\\\ 2 & 5 & 1 & 7 \\end{array}\\right) \\xrightarrow{(\\mathrm{ii})-(\\mathrm{i}),\\,(\\mathrm{iii})-2(\\mathrm{i})} \\left(\\begin{array}{ccc|c} 1 & 2 & 1 & 3 \\\\ 0 & 1 & -1 & 1 \\\\ 0 & 1 & -1 & 1 \\end{array}\\right) \\xrightarrow{(\\mathrm{iii})-(\\mathrm{ii})} \\left(\\begin{array}{ccc|c} 1 & 2 & 1 & 3 \\\\ 0 & 1 & -1 & 1 \\\\ 0 & 0 & 0 & 0 \\end{array}\\right)$\n\n' +
      '**Schritt 2 — Ränge vergleichen**\n' +
      '$\\operatorname{Rang}(A) = 2$ und $\\operatorname{Rang}(A\\,|\\,b) = 2$. Beide Ränge sind gleich, also ist das LGS lösbar. Da $2 < 3 = n$ (Anzahl der Unbekannten), gibt es **unendlich viele** Lösungen.\n\n' +
      '**Schritt 3 — Lösungsmenge parametrisieren**\n' +
      'Pivots stehen in Spalte 1 und 2, also sind $x_1, x_2$ gebunden und $x_3$ frei. Setze $r = x_3$.\n' +
      'Aus Zeile 2: $x_2 - x_3 = 1 \\Rightarrow x_2 = 1 + r$.\n' +
      'Aus Zeile 1: $x_1 + 2x_2 + x_3 = 3 \\Rightarrow x_1 = 3 - 2(1+r) - r = 1 - 3r$.\n\n' +
      '**Ergebnis**\n' +
      '$L = \\left\\{ \\begin{pmatrix} 1 - 3r \\\\ 1 + r \\\\ r \\end{pmatrix} : r \\in \\mathbb{R} \\right\\}$\n\n' +
      '**Probe** (für beliebiges $r$): Gleichung 1 liefert $(1-3r) + 2(1+r) + r = 3$, Gleichung 2 liefert $(1-3r) + 3(1+r) = 4$, Gleichung 3 liefert $2(1-3r) + 5(1+r) + r = 7$ — die Parameter heben sich jeweils weg. ✓',
  },
  {
    id: 'c_l_parameter',
    art: 'Parameter-LGS mit Fallunterscheidung',
    titel: 'Lösbarkeit in Abhängigkeit von $\\alpha$',
    schwierigkeit: 'schwer',
    quelle: 'Blatt 7, Aufgabe 5 / Blatt 8, Aufgabe 1',
    aufgabeText:
      'Betrachten Sie das LGS mit Parameter $\\alpha \\in \\mathbb{R}$:\n\n' +
      '$(G_\\alpha):\\quad \\begin{aligned} x_1 + x_2 + x_3 &= 1 \\\\ x_2 + 2x_3 &= 1 \\\\ (\\alpha^2 - 4)\\,x_3 &= \\alpha - 2 \\end{aligned}$\n\n' +
      'Bestimmen Sie, für welche $\\alpha$ das System (i) keine, (ii) genau eine, (iii) unendlich viele Lösungen besitzt.',
    referenz: ['lgs-loesbarkeit'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Das System ist bereits in Dreiecksform. Alles entscheidet sich an der letzten Zeile $(\\alpha^2 - 4)x_3 = \\alpha - 2$: Ist der Vorfaktor von $x_3$ ungleich Null, liefert sie ein Pivot; wird er Null, kommt es auf die rechte Seite an.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Bestimme die kritischen Werte über $\\alpha^2 - 4 = 0$, also $\\alpha = 2$ und $\\alpha = -2$. Untersuche diese beiden Werte einzeln und alle übrigen ($\\alpha \\neq \\pm 2$) gemeinsam.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Bei $\\alpha^2 - 4 = 0$ wird die letzte Zeile $0 \\cdot x_3 = \\alpha - 2$. Das ist entweder $0 = 0$ (wahr, unendlich viele Lösungen) oder $0 = c$ mit $c \\neq 0$ (Widerspruch, keine Lösung).' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Die beiden Nullstellen $\\alpha = 2$ und $\\alpha = -2$ sorgfältig unterscheiden: bei $\\alpha = 2$ wird auch die rechte Seite Null (lösbar), bei $\\alpha = -2$ nicht (unlösbar).' },
    ],
    loesung:
      '**Fall 1: $\\alpha \\neq 2$ und $\\alpha \\neq -2$**\n' +
      'Dann ist $\\alpha^2 - 4 \\neq 0$, die dritte Zeile hat ein Pivot. $\\operatorname{Rang}(A) = 3 = \\operatorname{Rang}(A\\,|\\,b) = n$ → **genau eine Lösung**.\n' +
      'Wegen $\\alpha^2 - 4 = (\\alpha-2)(\\alpha+2)$ ist $x_3 = \\dfrac{\\alpha - 2}{(\\alpha-2)(\\alpha+2)} = \\dfrac{1}{\\alpha + 2}$, daraus $x_2 = 1 - 2x_3 = \\dfrac{\\alpha}{\\alpha+2}$ und $x_1 = 1 - x_2 - x_3 = \\dfrac{1}{\\alpha+2}$.\n\n' +
      '**Fall 2: $\\alpha = 2$**\n' +
      'Die dritte Zeile wird $0 \\cdot x_3 = 2 - 2 = 0$, also $0 = 0$ (immer wahr). $\\operatorname{Rang}(A) = 2 = \\operatorname{Rang}(A\\,|\\,b) < 3$ → **unendlich viele Lösungen**.\n' +
      'Mit $r = x_3$: $x_2 = 1 - 2r$, $x_1 = 1 - x_2 - x_3 = r$, also $L = \\left\\{ \\begin{pmatrix} r \\\\ 1 - 2r \\\\ r \\end{pmatrix} : r \\in \\mathbb{R} \\right\\}$.\n\n' +
      '**Fall 3: $\\alpha = -2$**\n' +
      'Die dritte Zeile wird $0 \\cdot x_3 = -2 - 2 = -4$, also $0 = -4$ (Widerspruch). $\\operatorname{Rang}(A) = 2 < 3 = \\operatorname{Rang}(A\\,|\\,b)$ → **keine Lösung**.\n\n' +
      '**Ergebnis**\n' +
      '(i) keine Lösung für $\\alpha = -2$; (ii) genau eine Lösung für $\\alpha \\in \\mathbb{R} \\setminus \\{-2,\\ 2\\}$; (iii) unendlich viele Lösungen für $\\alpha = 2$.',
  },
  {
    id: 'c_l_lgs_zu_loesungsmenge',
    art: 'LGS zu vorgegebener Lösungsmenge',
    titel: 'Ein LGS für eine Gerade durch den Ursprung',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 7, Aufgabe 6',
    aufgabeText:
      'Geben Sie ein lineares Gleichungssystem mit drei Unbekannten an, dessen Lösungsmenge die Gerade\n' +
      '$G = \\left\\{ \\begin{pmatrix} t \\\\ 2t \\\\ -t \\end{pmatrix} : t \\in \\mathbb{R} \\right\\}$\n' +
      'durch den Ursprung im $\\mathbb{R}^3$ ist. Machen Sie die Probe.',
    referenz: ['lgs-loesbarkeit'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Eine Gerade durch den Ursprung im $\\mathbb{R}^3$ ist eindimensional. Ein LGS mit drei Unbekannten hat genau dann eine eindimensionale Lösungsmenge (eine freie Variable), wenn der Rang der Koeffizientenmatrix $3 - 1 = 2$ ist. Man braucht also ZWEI unabhängige Gleichungen.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Schreibe die Koordinaten des allgemeinen Punktes als $x_1 = t$, $x_2 = 2t$, $x_3 = -t$ und eliminiere den Parameter $t$: jede Beziehung zwischen den Koordinaten liefert eine Gleichung.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Aus $x_2 = 2t = 2x_1$ folgt $2x_1 - x_2 = 0$; aus $x_3 = -t = -x_1$ folgt $x_1 + x_3 = 0$. Da die Gerade durch den Ursprung geht, sind die rechten Seiten $0$ (homogenes LGS).' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Nicht zu viele Gleichungen! Eine dritte, von den beiden anderen unabhängige Gleichung würde die Gerade auf den einzelnen Punkt $\\vec{0}$ einschränken.' },
    ],
    loesung:
      '**Schritt 1 — Parameter eliminieren**\n' +
      'Der allgemeine Punkt ist $x_1 = t,\\ x_2 = 2t,\\ x_3 = -t$. Zwischen den Koordinaten gelten:\n' +
      '• $x_2 = 2x_1 \\Rightarrow 2x_1 - x_2 = 0$\n' +
      '• $x_3 = -x_1 \\Rightarrow x_1 + x_3 = 0$\n\n' +
      '**Schritt 2 — LGS angeben**\n' +
      '$\\begin{aligned} 2x_1 - x_2 &= 0 \\\\ x_1 + x_3 &= 0 \\end{aligned}$\n' +
      'Die beiden Gleichungen sind unabhängig (die Koeffizientenzeilen $(2,-1,0)$ und $(1,0,1)$ sind keine Vielfachen voneinander), also ist der Rang $2$.\n\n' +
      '**Schritt 3 — Kontrolle durch Auflösen**\n' +
      'Mit $x_3 = s$ frei: aus $x_1 + x_3 = 0$ folgt $x_1 = -s$, aus $2x_1 - x_2 = 0$ folgt $x_2 = 2x_1 = -2s$. Das ergibt $\\begin{pmatrix} -s \\\\ -2s \\\\ s \\end{pmatrix}$; mit $t = -s$ ist das genau $\\begin{pmatrix} t \\\\ 2t \\\\ -t \\end{pmatrix}$ — die Lösungsmenge ist wirklich $G$.\n\n' +
      '**Probe** (Punkt der Geraden einsetzen)\n' +
      '$2t - 2t = 0$ ✓ und $t + (-t) = 0$ ✓ — jeder Punkt von $G$ erfüllt beide Gleichungen.\n\n' +
      '**Hinweis:** Es gibt viele richtige Lösungen; wichtig ist nur, dass die Lösungsmenge genau $G$ ergibt.',
  },
  {
    id: 'c_l_det_berechnen',
    art: 'Determinante berechnen',
    titel: 'Eine Determinante auf zwei Wegen',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 8, Aufgaben 3/5',
    aufgabeText:
      'Berechnen Sie die Determinante von\n' +
      '$M = \\begin{pmatrix} 2 & 1 & 3 \\\\ 1 & 0 & 2 \\\\ 4 & 1 & 8 \\end{pmatrix}$\n' +
      'auf zwei Wegen: (a) mit der Regel von Sarrus und (b) durch Umformung auf Dreiecksform. Vergleichen Sie die Ergebnisse.',
    referenz: ['determinanten'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Die Determinante ist eine Zahl, die man über verschiedene Verfahren berechnen kann — das Ergebnis muss immer dasselbe sein. Sarrus ist ein festes Rechenschema für $3\\times 3$; die Umformung auf Dreiecksform nutzt, dass die Determinante einer Dreiecksmatrix das Produkt der Diagonale ist.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Bei Sarrus die drei Diagonalen nach rechts unten addieren und die drei nach links unten abziehen. Bei der Umformung die Zeilenoperationen sorgfältig verbuchen: Addieren eines Vielfachen ändert nichts, ein Zeilentausch dreht das Vorzeichen.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Regel von Sarrus für $\\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix}$: $\\det = aei + bfg + cdh - ceg - afh - bdi$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Ein Zeilentausch bei der Dreiecksform-Methode MUSS mit einem Faktor $-1$ ausgeglichen werden, sonst stimmt das Vorzeichen am Ende nicht.' },
    ],
    loesung:
      '**Weg (a) — Regel von Sarrus**\n' +
      '$\\det(M) = 2\\cdot 0\\cdot 8 + 1\\cdot 2\\cdot 4 + 3\\cdot 1\\cdot 1 - 3\\cdot 0\\cdot 4 - 2\\cdot 2\\cdot 1 - 1\\cdot 1\\cdot 8$\n' +
      '$= 0 + 8 + 3 - 0 - 4 - 8 = -1$.\n\n' +
      '**Weg (b) — Umformung auf Dreiecksform**\n' +
      'Zeilentausch $(\\mathrm{i}) \\leftrightarrow (\\mathrm{ii})$ (Faktor $-1$):\n' +
      '$\\det(M) = -\\det\\begin{pmatrix} 1 & 0 & 2 \\\\ 2 & 1 & 3 \\\\ 4 & 1 & 8 \\end{pmatrix}$\n' +
      'Nun $(\\mathrm{ii}) - 2(\\mathrm{i})$ und $(\\mathrm{iii}) - 4(\\mathrm{i})$ (ändert die Determinante nicht):\n' +
      '$= -\\det\\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 1 & -1 \\\\ 0 & 1 & 0 \\end{pmatrix}$\n' +
      'Dann $(\\mathrm{iii}) - (\\mathrm{ii})$:\n' +
      '$= -\\det\\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 1 & -1 \\\\ 0 & 0 & 1 \\end{pmatrix} = -(1\\cdot 1\\cdot 1) = -1$.\n\n' +
      '**Ergebnis**\n' +
      'Beide Wege liefern $\\det(M) = -1$. Die Ergebnisse stimmen überein. ✓',
  },
  {
    id: 'c_l_det_regeln',
    art: 'Determinanten-Rechenregeln',
    titel: 'Wie sich die Determinante bei Zeilenoperationen ändert',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 8, Aufgabe 4',
    aufgabeText:
      'Gegeben ist $A = \\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 3 & 1 \\\\ 2 & 0 & 1 \\end{pmatrix}$ mit $\\det(A) = 7$.\n\n' +
      'Bestimmen Sie mit Hilfe der Rechenregeln (ohne Neuberechnung) die Determinante von\n' +
      'a) $A_1$ (aus $A$ durch Vertauschen von Zeile 1 und Zeile 3),\n' +
      'b) $A_2$ (aus $A$, indem Zeile 2 mit $4$ multipliziert wird),\n' +
      'c) $A_3$ (aus $A$, indem das $2$-fache von Zeile 1 zu Zeile 3 addiert wird).\n' +
      'Bestätigen Sie jedes Ergebnis durch direkte Rechnung.',
    referenz: ['determinanten'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Drei elementare Zeilenoperationen wirken unterschiedlich auf die Determinante: Zeilentausch dreht das Vorzeichen ($\\det \\to -\\det$), Multiplikation einer Zeile mit $\\lambda$ multipliziert die Determinante mit $\\lambda$, und das Addieren eines Vielfachen einer Zeile zu einer anderen lässt die Determinante unverändert.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Erkenne bei jeder abgewandelten Matrix, welche EINE Operation sie aus $A$ erzeugt, und wende die zugehörige Regel auf $\\det(A) = 7$ an.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Zur Kontrolle die Regel von Sarrus: $\\det \\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix} = aei + bfg + cdh - ceg - afh - bdi$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Nur die tatsächlich veränderte Zeile zählt. Multipliziert man EINE Zeile mit $4$, ist der Faktor $4$ — nicht $4^3$ (das wäre nur so, wenn man die ganze Matrix mit $4$ multipliziert).' },
    ],
    loesung:
      '**Kontrolle des Startwerts**\n' +
      '$\\det(A) = 1\\cdot 3\\cdot 1 + 2\\cdot 1\\cdot 2 + 0\\cdot 0\\cdot 0 - 0\\cdot 3\\cdot 2 - 1\\cdot 1\\cdot 0 - 2\\cdot 0\\cdot 1 = 3 + 4 = 7$. ✓\n\n' +
      '**a) Zeilentausch**\n' +
      '$A_1 = \\begin{pmatrix} 2 & 0 & 1 \\\\ 0 & 3 & 1 \\\\ 1 & 2 & 0 \\end{pmatrix}$ entsteht durch Tausch von Zeile 1 und 3. Regel: $\\det(A_1) = -\\det(A) = -7$.\n' +
      'Kontrolle (Sarrus): $2\\cdot 3\\cdot 0 + 0\\cdot 1\\cdot 1 + 1\\cdot 0\\cdot 2 - 1\\cdot 3\\cdot 1 - 2\\cdot 1\\cdot 2 - 0\\cdot 0\\cdot 0 = 0 - 3 - 4 = -7$. ✓\n\n' +
      '**b) Zeile skalieren**\n' +
      '$A_2 = \\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 12 & 4 \\\\ 2 & 0 & 1 \\end{pmatrix}$ entsteht, indem Zeile 2 mit $4$ multipliziert wird. Regel: $\\det(A_2) = 4\\cdot\\det(A) = 28$.\n' +
      'Kontrolle (Sarrus): $1\\cdot 12\\cdot 1 + 2\\cdot 4\\cdot 2 + 0\\cdot 0\\cdot 0 - 0\\cdot 12\\cdot 2 - 1\\cdot 4\\cdot 0 - 2\\cdot 0\\cdot 1 = 12 + 16 = 28$. ✓\n\n' +
      '**c) Vielfaches addieren**\n' +
      '$A_3 = \\begin{pmatrix} 1 & 2 & 0 \\\\ 0 & 3 & 1 \\\\ 4 & 4 & 1 \\end{pmatrix}$ entsteht, indem das $2$-fache von Zeile 1 zu Zeile 3 addiert wird ($(2,0,1) + 2\\cdot(1,2,0) = (4,4,1)$). Regel: $\\det(A_3) = \\det(A) = 7$ (unverändert).\n' +
      'Kontrolle (Sarrus): $1\\cdot 3\\cdot 1 + 2\\cdot 1\\cdot 4 + 0\\cdot 0\\cdot 4 - 0\\cdot 3\\cdot 4 - 1\\cdot 1\\cdot 4 - 2\\cdot 0\\cdot 1 = 3 + 8 - 4 = 7$. ✓\n\n' +
      '**Ergebnis**\n' +
      '$\\det(A_1) = -7$, $\\ \\det(A_2) = 28$, $\\ \\det(A_3) = 7$ — Rechenregeln und direkte Rechnung stimmen jeweils überein.',
  },
  {
    id: 'c_l_det_entscheidet',
    art: 'Determinante entscheidet über Lösbarkeit',
    titel: 'Invertierbarkeit und triviale Lösung über die Determinante',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 8, Aufgaben 2/6',
    aufgabeText:
      'a) Untersuchen Sie mit der Determinante, ob $A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 0 & 1 & 3 \\\\ 2 & 0 & 1 \\end{pmatrix}$ invertierbar ist und ob das homogene LGS $A\\vec{x} = \\vec{0}$ nur die triviale Lösung besitzt.\n\n' +
      'b) Beantworten Sie dieselben Fragen für $B = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 0 & 5 \\end{pmatrix}$.',
    referenz: ['determinanten'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Für eine quadratische Matrix $A$ sind gleichwertig: $\\det(A) \\neq 0$, $A$ ist invertierbar, und das homogene LGS $A\\vec{x} = \\vec{0}$ hat nur die triviale Lösung $\\vec{x} = \\vec{0}$. Ist dagegen $\\det(A) = 0$, so ist $A$ nicht invertierbar und $A\\vec{x} = \\vec{0}$ hat unendlich viele (nichttriviale) Lösungen.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Berechne die Determinante (etwa mit Sarrus). Nur ihr Verschwinden oder Nicht-Verschwinden zählt für die Entscheidung — der genaue Wert ist nebensächlich.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Ein schneller Blick lohnt sich: Sind zwei Zeilen einer Matrix Vielfache voneinander, ist die Determinante $0$ (siehe Matrix $B$, wo Zeile 2 das Doppelte von Zeile 1 ist).' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Ein homogenes LGS ist NIE unlösbar (der Nullvektor passt immer). Die Determinante entscheidet daher nicht über keine/eine Lösung, sondern über genau eine (triviale) gegenüber unendlich vielen Lösungen.' },
    ],
    loesung:
      '**a) Matrix $A$**\n' +
      'Sarrus: $\\det(A) = 1\\cdot 1\\cdot 1 + 2\\cdot 3\\cdot 2 + 1\\cdot 0\\cdot 0 - 1\\cdot 1\\cdot 2 - 1\\cdot 3\\cdot 0 - 2\\cdot 0\\cdot 1 = 1 + 12 - 2 = 11$.\n' +
      'Da $\\det(A) = 11 \\neq 0$, ist $A$ **invertierbar**, und $A\\vec{x} = \\vec{0}$ hat **nur die triviale Lösung** $\\vec{x} = \\vec{0}$.\n\n' +
      '**b) Matrix $B$**\n' +
      'Zeile 2 ist das Doppelte von Zeile 1, daher $\\det(B) = 0$ (Kontrolle mit Sarrus: $1\\cdot 4\\cdot 5 + 2\\cdot 6\\cdot 1 + 3\\cdot 2\\cdot 0 - 3\\cdot 4\\cdot 1 - 1\\cdot 6\\cdot 0 - 2\\cdot 2\\cdot 5 = 20 + 12 - 12 - 20 = 0$).\n' +
      'Da $\\det(B) = 0$, ist $B$ **nicht invertierbar**, und $B\\vec{x} = \\vec{0}$ hat **nichttriviale Lösungen**.\n' +
      'Konkret: aus $x_1 + 5x_3 = 0$ (Zeile 3) folgt $x_1 = -5x_3$, aus $x_1 + 2x_2 + 3x_3 = 0$ (Zeile 1) folgt $x_2 = x_3$. Mit $x_3 = t$ ergibt sich $\\begin{pmatrix} -5t \\\\ t \\\\ t \\end{pmatrix}$; etwa $\\begin{pmatrix} -5 \\\\ 1 \\\\ 1 \\end{pmatrix}$ ist eine nichttriviale Lösung.\n\n' +
      '**Probe** für $\\begin{pmatrix} -5 \\\\ 1 \\\\ 1 \\end{pmatrix}$: $-5 + 2 + 3 = 0$ ✓, $-10 + 4 + 6 = 0$ ✓, $-5 + 0 + 5 = 0$ ✓.\n\n' +
      '**Ergebnis**\n' +
      '$A$ ist invertierbar ($\\det = 11$), das zugehörige homogene LGS hat nur $\\vec{x} = \\vec{0}$. $B$ ist nicht invertierbar ($\\det = 0$), das zugehörige homogene LGS hat unendlich viele Lösungen.',
  },
]
