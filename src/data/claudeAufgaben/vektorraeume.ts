import type { ClaudeAufgabe } from './_types'

// ─────────────────────────────────────────────────────────────────────────────
// Blatt 9 – Vektorräume: Untervektorräume, lineare Hülle, lineare (Un)abhängigkeit,
// Basis & Dimension. Je eine eigens erdachte Beispielaufgabe pro Aufgabenart.
// ─────────────────────────────────────────────────────────────────────────────

export const vektorraeume: ClaudeAufgabe[] = [
  {
    id: 'c_v_untervektorraum',
    art: 'Untervektorraum prüfen',
    titel: 'Untervektorraum? Parabel und Ursprungsgerade',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 9, Aufgabe 1',
    aufgabeText:
      'Entscheiden Sie jeweils, ob die Teilmenge des $\\mathbb{R}^2$ ein Untervektorraum von $\\mathbb{R}^2$ ist. Begründen Sie Ihre Antwort (bei „nein" mit einem konkreten Gegenbeispiel).\n\n' +
      'a) $U_1 := \\left\\{ \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix} \\in \\mathbb{R}^2 : x_2 = x_1^2 \\right\\}$\n\n' +
      'b) $U_2 := \\left\\{ \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix} \\in \\mathbb{R}^2 : 3x_1 + x_2 = 0 \\right\\}$',
    referenz: ['vektorraeume-basen'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Eine Teilmenge $U \\subseteq \\mathbb{R}^2$ ist genau dann ein **Untervektorraum** (UVR), wenn drei Dinge gelten:\n' +
        '• Der Nullvektor liegt in $U$ (insbesondere ist $U$ nicht leer).\n' +
        '• $U$ ist abgeschlossen unter Addition: $u, v \\in U \\Rightarrow u + v \\in U$.\n' +
        '• $U$ ist abgeschlossen unter Skalarmultiplikation: $u \\in U,\\ \\lambda \\in \\mathbb{R} \\Rightarrow \\lambda u \\in U$.\n\n' +
        'Wird auch nur **eine** Bedingung verletzt, ist $U$ kein Untervektorraum.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Prüfe zuerst schnell, ob der Nullvektor in $U$ liegt – fehlt er, bist du sofort fertig. Danach testest du Addition und Skalarmultiplikation: entweder allgemein (für beliebige $u, v$) oder du suchst ein konkretes Gegenbeispiel, das die Menge verlässt. Bei einer linearen Bedingung wie in b) gelingt der allgemeine Nachweis; bei einer krummen (nichtlinearen) Bedingung wie in a) findet man meist leicht ein Gegenbeispiel.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Ein Gegenbeispiel sieht so aus: zwei Vektoren aus $U$ nehmen, addieren (oder mit einem Skalar multiplizieren) und zeigen, dass das Ergebnis die definierende Bedingung **nicht** erfüllt. Für die Bedingung $x_2 = x_1^2$ etwa: der Punkt $\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$ liegt drin (denn $1 = 1^2$), sein Doppeltes $\\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}$ aber nicht, denn $2 \\neq 2^2 = 4$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Nur weil der Nullvektor enthalten ist, ist $U$ noch **kein** UVR – Addition und Skalarmultiplikation müssen zusätzlich passen. Umgekehrt: Eine Ursprungsgerade $\\{x : a x_1 + b x_2 = 0\\}$ ist stets ein UVR, eine verschobene Gerade (rechte Seite $\\neq 0$) dagegen nie, weil dort schon der Nullvektor fehlt.' },
    ],
    loesung:
      '**a) $U_1$: $x_2 = x_1^2$ (Normalparabel)**\n' +
      'Der Nullvektor liegt in $U_1$ (denn $0 = 0^2$), doch das allein reicht nicht.\n\n' +
      '*Gegenbeispiel (Skalarmultiplikation).* Der Punkt $\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$ liegt in $U_1$, denn $1 = 1^2$. Multipliziere mit $\\lambda = 2$:\n' +
      '$2 \\cdot \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix}$.\n' +
      'Für diesen Punkt müsste $x_2 = x_1^2$ gelten, also $2 = 2^2 = 4$ – falsch. Somit $\\begin{pmatrix} 2 \\\\ 2 \\end{pmatrix} \\notin U_1$.\n\n' +
      '$U_1$ ist also **kein** Untervektorraum. (Auch die Addition scheitert: $\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}, \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix} \\in U_1$, aber ihre Summe $\\begin{pmatrix} 3 \\\\ 5 \\end{pmatrix}$ erfüllt $5 \\neq 3^2 = 9$.)\n\n' +
      '**b) $U_2$: $3x_1 + x_2 = 0$ (Ursprungsgerade)**\n' +
      '$U_2$ ist die Lösungsmenge des homogenen LGS $3x_1 + x_2 = 0$; solche Mengen sind stets Untervektorräume. Zur Sicherheit die drei Bedingungen direkt:\n' +
      '• *Nullvektor:* $3\\cdot 0 + 0 = 0$ ✓, also $\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix} \\in U_2$.\n' +
      '• *Addition:* Sind $u, v \\in U_2$, also $3u_1 + u_2 = 0$ und $3v_1 + v_2 = 0$, dann gilt $3(u_1+v_1) + (u_2+v_2) = (3u_1+u_2) + (3v_1+v_2) = 0 + 0 = 0$, also $u + v \\in U_2$.\n' +
      '• *Skalarmultiplikation:* Für $\\lambda \\in \\mathbb{R}$ und $u \\in U_2$ ist $3(\\lambda u_1) + \\lambda u_2 = \\lambda(3u_1 + u_2) = \\lambda \\cdot 0 = 0$, also $\\lambda u \\in U_2$.\n\n' +
      'Alle drei Bedingungen gelten, also ist $U_2$ **ein** Untervektorraum – geometrisch die Ursprungsgerade $x_2 = -3x_1$.',
  },
  {
    id: 'c_v_lineare_huelle',
    art: 'Lineare Hülle / Spann-Aussagen',
    titel: 'Gleiche lineare Hülle, Basis und Dimension',
    schwierigkeit: 'schwer',
    quelle: 'Blatt 9, Aufgaben 2/3',
    aufgabeText:
      'Gegeben sind die Vektoren\n' +
      '$a_1 = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix},\\quad a_2 = \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix}\\qquad\\text{sowie}\\qquad b_1 = \\begin{pmatrix} 1 \\\\ 1 \\\\ 2 \\end{pmatrix},\\quad b_2 = \\begin{pmatrix} 1 \\\\ -1 \\\\ 0 \\end{pmatrix}.$\n\n' +
      'a) Zeigen Sie, dass beide Erzeugendensysteme denselben Unterraum aufspannen, also $\\mathrm{lin}\\{a_1, a_2\\} = \\mathrm{lin}\\{b_1, b_2\\}$.\n\n' +
      'b) Sei $E := \\mathrm{lin}\\{a_1, a_2\\}$. Geben Sie eine Basis und die Dimension von $E$ an und prüfen Sie, ob die Vektoren $w_1 = \\begin{pmatrix} 2 \\\\ 3 \\\\ 5 \\end{pmatrix}$ und $w_2 = \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$ in $E$ liegen.',
    referenz: ['lineare-huelle'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Die **lineare Hülle** $\\mathrm{lin}\\{v_1, \\dots, v_k\\}$ ist die Menge aller Linearkombinationen $\\lambda_1 v_1 + \\dots + \\lambda_k v_k$ – der kleinste Untervektorraum, der die $v_i$ enthält. Zwei Erzeugendensysteme spannen genau dann denselben Unterraum auf, wenn **jeder** Vektor des einen Systems eine Linearkombination der Vektoren des anderen ist (und umgekehrt).' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Für a) drückst du zuerst $b_1, b_2$ durch $a_1, a_2$ aus (dann $\\mathrm{lin}\\{b_1, b_2\\} \\subseteq \\mathrm{lin}\\{a_1, a_2\\}$) und danach $a_1, a_2$ durch $b_1, b_2$ (dann die andere Inklusion). Beide Inklusionen zusammen ergeben Gleichheit. Für b) prüfst du $w \\in E$ durch Lösen von $\\lambda a_1 + \\mu a_2 = w$: ist das LGS lösbar, liegt $w$ in $E$, sonst nicht.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Ein Vektor $w$ liegt in $\\mathrm{lin}\\{a_1, a_2\\}$, wenn es $\\lambda, \\mu \\in \\mathbb{R}$ gibt mit $w = \\lambda a_1 + \\mu a_2$. Man schreibt die drei Komponentengleichungen hin und löst; ein Widerspruch (etwa $0 = 1$) bedeutet $w \\notin E$. Alternativ hilft die Ebenengleichung: liegen $a_1, a_2$ in der Ebene $x_1 + x_2 - x_3 = 0$, so ist genau das die Bedingung für $w \\in E$.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Für die Gleichheit zweier Hüllen reicht es **nicht**, nur eine Richtung zu zeigen (etwa $b_i \\in \\mathrm{lin}\\{a_1, a_2\\}$). Man braucht **beide** Inklusionen. Und: Zwei erzeugende Vektoren bilden nur dann eine Basis, wenn sie linear unabhängig sind – prüfe also, dass keiner ein Vielfaches des anderen ist.' },
    ],
    loesung:
      '**a) Gleiche lineare Hülle**\n' +
      '*Schritt 1: $b_1, b_2 \\in \\mathrm{lin}\\{a_1, a_2\\}$.* Man rechnet nach:\n' +
      '$a_1 + a_2 = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix} + \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 2 \\end{pmatrix} = b_1,$\n' +
      '$a_1 - a_2 = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix} - \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ -1 \\\\ 0 \\end{pmatrix} = b_2.$\n' +
      'Also sind $b_1, b_2$ Linearkombinationen von $a_1, a_2$, somit $\\mathrm{lin}\\{b_1, b_2\\} \\subseteq \\mathrm{lin}\\{a_1, a_2\\}$.\n\n' +
      '*Schritt 2: $a_1, a_2 \\in \\mathrm{lin}\\{b_1, b_2\\}$.* Aus den beiden Gleichungen oben folgt durch Addition bzw. Subtraktion:\n' +
      '$a_1 = \\tfrac{1}{2}(b_1 + b_2)$ und $a_2 = \\tfrac{1}{2}(b_1 - b_2)$.\n' +
      '(Probe: $\\tfrac{1}{2}(b_1 + b_2) = \\tfrac{1}{2}\\begin{pmatrix} 2 \\\\ 0 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix} = a_1$ ✓.)\n' +
      'Also $\\mathrm{lin}\\{a_1, a_2\\} \\subseteq \\mathrm{lin}\\{b_1, b_2\\}$.\n\n' +
      'Beide Inklusionen zusammen ergeben $\\mathrm{lin}\\{a_1, a_2\\} = \\mathrm{lin}\\{b_1, b_2\\}$. ✓\n\n' +
      '**b) Basis, Dimension und Punktprobe**\n' +
      '$a_1$ und $a_2$ sind linear unabhängig: Aus $a_2 = \\lambda a_1$ würde in der ersten Komponente $0 = \\lambda \\cdot 1$, also $\\lambda = 0$ folgen, was $a_2 = 0$ widerspräche. Da $a_1, a_2$ zudem $E$ erzeugen, ist $\\{a_1, a_2\\}$ eine **Basis** von $E$ und $\\dim E = 2$ (eine Ebene durch den Ursprung).\n\n' +
      'Beide Erzeuger erfüllen $x_1 + x_2 - x_3 = 0$ ($a_1$: $1 + 0 - 1 = 0$; $a_2$: $0 + 1 - 1 = 0$), also ist $E = \\left\\{ x \\in \\mathbb{R}^3 : x_1 + x_2 - x_3 = 0 \\right\\}$. Das liefert eine schnelle Punktprobe:\n' +
      '• $w_1 = \\begin{pmatrix} 2 \\\\ 3 \\\\ 5 \\end{pmatrix}$: $2 + 3 - 5 = 0$ ✓, also $w_1 \\in E$ (konkret $w_1 = 2a_1 + 3a_2$).\n' +
      '• $w_2 = \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$: $1 + 1 - 1 = 1 \\neq 0$, also $w_2 \\notin E$.',
  },
  {
    id: 'c_v_lin_unabhaengigkeit',
    art: 'Lineare (Un)abhängigkeit prüfen',
    titel: 'Drei Vektoren im Raum auf Unabhängigkeit prüfen',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 9, Aufgaben 4/5',
    aufgabeText:
      'Prüfen Sie, ob die Vektoren\n' +
      '$v_1 = \\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix},\\quad v_2 = \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix},\\quad v_3 = \\begin{pmatrix} 4 \\\\ 5 \\\\ 6 \\end{pmatrix}$\n' +
      'linear unabhängig sind. Erklären Sie, was Ihr Ergebnis für den von $v_1, v_2, v_3$ aufgespannten Unterraum bedeutet.',
    referenz: ['lineare-unabhaengigkeit'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Vektoren $v_1, \\dots, v_k$ heißen **linear unabhängig**, wenn sich der Nullvektor nur trivial kombinieren lässt: Aus $\\lambda_1 v_1 + \\dots + \\lambda_k v_k = 0$ folgt zwingend $\\lambda_1 = \\dots = \\lambda_k = 0$. Gibt es dagegen eine nichttriviale Kombination, die $0$ ergibt, sind sie **linear abhängig** – dann lässt sich mindestens einer der Vektoren durch die anderen ausdrücken.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Schreibe die Vektoren als **Spalten** einer Matrix und bringe sie mit dem Gauß-Verfahren auf Zeilenstufenform. Stimmt der Rang mit der Anzahl der Vektoren überein, sind sie unabhängig; bleibt eine Nullzeile (Rang $<$ Anzahl), sind sie abhängig. Bei genau $3$ Vektoren im $\\mathbb{R}^3$ geht es auch über die Determinante: $\\det \\neq 0 \\Leftrightarrow$ unabhängig.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Determinante mit der Regel von Sarrus: $\\det\\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix} = aei + bfg + cdh - ceg - afh - bdi$. Ergibt sich $0$, sind die Spalten linear abhängig.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Linear abhängig heißt nicht, dass **alle** Vektoren Vielfache voneinander sind – es genügt, dass **einer** eine Kombination der übrigen ist. Und: Der Rang zählt die Stufen (Pivots) der Zeilenstufenform, nicht die von Null verschiedenen Einträge. Bei der Sarrus-Regel dürfen die drei Minus-Diagonalen nicht vergessen werden.' },
    ],
    loesung:
      '**Ansatz.** Gesucht sind $\\lambda_1, \\lambda_2, \\lambda_3$ mit $\\lambda_1 v_1 + \\lambda_2 v_2 + \\lambda_3 v_3 = 0$. Vektoren als Spalten, Umformung $(II) - 2(I)$, $(III) - 3(I)$, danach $(III) - 2(II)$:\n' +
      '$\\begin{pmatrix} 1 & 2 & 4 \\\\ 2 & 1 & 5 \\\\ 3 & 0 & 6 \\end{pmatrix} \\longrightarrow \\begin{pmatrix} 1 & 2 & 4 \\\\ 0 & -3 & -3 \\\\ 0 & -6 & -6 \\end{pmatrix} \\longrightarrow \\begin{pmatrix} 1 & 2 & 4 \\\\ 0 & -3 & -3 \\\\ 0 & 0 & 0 \\end{pmatrix}$\n\n' +
      'Es entsteht eine Nullzeile, also $\\mathrm{Rang} = 2 < 3 = $ Anzahl der Vektoren. Die Vektoren sind daher **linear abhängig**.\n\n' +
      '**Kontrolle mit der Determinante.** Mit der Regel von Sarrus:\n' +
      '$\\det\\begin{pmatrix} 1 & 2 & 4 \\\\ 2 & 1 & 5 \\\\ 3 & 0 & 6 \\end{pmatrix} = 1\\cdot 1\\cdot 6 + 2\\cdot 5\\cdot 3 + 4\\cdot 2\\cdot 0 - 4\\cdot 1\\cdot 3 - 1\\cdot 5\\cdot 0 - 2\\cdot 2\\cdot 6 = 6 + 30 + 0 - 12 - 0 - 24 = 0.$\n' +
      '$\\det = 0$ bestätigt die lineare Abhängigkeit.\n\n' +
      '**Konkrete Abhängigkeit.** Tatsächlich gilt $v_3 = 2v_1 + v_2$, denn $2\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix} + \\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 5 \\\\ 6 \\end{pmatrix} = v_3$.\n\n' +
      '**Bedeutung.** $v_3$ bringt nichts Neues hinzu. Da $v_1, v_2$ untereinander unabhängig sind (keiner ein Vielfaches des anderen), spannen die drei Vektoren nur eine **Ebene** durch den Ursprung auf: $\\mathrm{lin}\\{v_1, v_2, v_3\\} = \\mathrm{lin}\\{v_1, v_2\\}$ mit Dimension $2$. Insbesondere bilden sie **keine** Basis des $\\mathbb{R}^3$.',
  },
  {
    id: 'c_v_basis_dimension',
    art: 'Basis & Dimension bestimmen/prüfen',
    titel: 'Ist die Vektormenge eine Basis des Raumes?',
    schwierigkeit: 'mittel',
    quelle: 'Blatt 9, Aufgabe 6',
    aufgabeText:
      'Prüfen Sie, ob\n' +
      '$B := \\left\\{ \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix},\\ \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\end{pmatrix},\\ \\begin{pmatrix} 1 \\\\ 0 \\\\ 1 \\end{pmatrix} \\right\\}$\n' +
      'eine Basis des $\\mathbb{R}^3$ ist. Gehen Sie die Kriterien der Reihe nach durch (Anzahl, lineare Unabhängigkeit, Erzeugendensystem) und geben Sie die Dimension an.',
    referenz: ['basis-dimension'],
    tippSections: [
      { icon: '💡', titel: 'Konzept verstehen', inhalt:
        'Eine **Basis** eines Vektorraums ist eine Menge von Vektoren, die (1) linear unabhängig sind **und** (2) den ganzen Raum erzeugen. Ihre Anzahl ist die **Dimension** des Raumes. Für $\\mathbb{R}^n$ gilt $\\dim \\mathbb{R}^n = n$; eine Basis von $\\mathbb{R}^n$ besteht also immer aus genau $n$ Vektoren.' },
      { icon: '🔍', titel: 'Vorgehensweise', inhalt:
        'Drei Schritte: (1) **Anzahl** – stimmt sie mit $\\dim \\mathbb{R}^3 = 3$ überein? (2) **Unabhängigkeit** – Vektoren als Spalten, Rang bzw. Determinante bestimmen. (3) **Erzeugendensystem** – hier gibt es eine Abkürzung: Hat man genau $n$ linear unabhängige Vektoren im $\\mathbb{R}^n$, so erzeugen sie automatisch den ganzen Raum, und Schritt (3) ist ohne weitere Rechnung erfüllt.' },
      { icon: '📝', titel: 'Syntax / Beispiel', inhalt:
        'Kurzregel: Bei **genau $n$** Vektoren im $\\mathbb{R}^n$ gilt „linear unabhängig $\\Leftrightarrow$ Basis $\\Leftrightarrow$ Erzeugendensystem $\\Leftrightarrow \\det \\neq 0$". Es genügt also, eine dieser Eigenschaften zu prüfen – am schnellsten die Determinante der Spaltenmatrix.' },
      { icon: '⚠️', titel: 'Häufige Fehler', inhalt:
        'Zu **wenige** Vektoren ($< n$) können $\\mathbb{R}^n$ nie erzeugen; zu **viele** ($> n$) sind zwangsläufig linear abhängig. In beiden Fällen liegt keine Basis vor, ohne dass man überhaupt rechnen muss. Nur bei genau $n$ Vektoren lohnt der Unabhängigkeitstest.' },
    ],
    loesung:
      '**Schritt 1: Anzahl.** $B$ enthält $3$ Vektoren und $\\dim \\mathbb{R}^3 = 3$. Die Anzahl passt – eine Basis ist grundsätzlich möglich.\n\n' +
      '**Schritt 2: Lineare Unabhängigkeit.** Vektoren als Spalten, Umformung $(II) - (I)$, danach $(III) - (II)$:\n' +
      '$\\begin{pmatrix} 1 & 0 & 1 \\\\ 1 & 1 & 0 \\\\ 0 & 1 & 1 \\end{pmatrix} \\longrightarrow \\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & -1 \\\\ 0 & 1 & 1 \\end{pmatrix} \\longrightarrow \\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & -1 \\\\ 0 & 0 & 2 \\end{pmatrix}$\n\n' +
      'Drei Pivots (Stufen) $\\Rightarrow \\mathrm{Rang} = 3 = $ Anzahl der Vektoren, also sind sie **linear unabhängig**.\n\n' +
      '*Kontrolle mit der Determinante* (Sarrus):\n' +
      '$\\det\\begin{pmatrix} 1 & 0 & 1 \\\\ 1 & 1 & 0 \\\\ 0 & 1 & 1 \\end{pmatrix} = 1\\cdot 1\\cdot 1 + 0\\cdot 0\\cdot 0 + 1\\cdot 1\\cdot 1 - 1\\cdot 1\\cdot 0 - 1\\cdot 0\\cdot 1 - 0\\cdot 1\\cdot 1 = 1 + 0 + 1 - 0 - 0 - 0 = 2 \\neq 0.$\n\n' +
      '**Schritt 3: Erzeugendensystem.** Drei linear unabhängige Vektoren im $\\mathbb{R}^3$ erzeugen automatisch ganz $\\mathbb{R}^3$ (Rang $3$ = Dimension des Raumes). Der Nachweis ist damit ohne weitere Rechnung erbracht.\n\n' +
      '**Ergebnis.** $B$ erfüllt alle drei Kriterien und ist somit eine **Basis** des $\\mathbb{R}^3$. Die Dimension ist $\\dim \\mathbb{R}^3 = 3$ – passend zur Anzahl der Basisvektoren.',
  },
]
