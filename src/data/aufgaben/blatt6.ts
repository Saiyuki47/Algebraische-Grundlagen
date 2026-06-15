import type { Aufgabe } from '../../types'

export const b6: Aufgabe[] = [
  {
    id: 'b6_a1',
    titel: 'Einheitengruppen $\\mathbb{Z}_7^*$ und $\\mathbb{Z}_8^*$ – Inverse',
    aufgabeText:
      'Geben Sie zunächst alle Elemente von $\\mathbb{Z}_7^*$ und $\\mathbb{Z}_8^*$ an. Geben Sie anschließend jeweils die zugehörigen Inversen bezüglich der üblichen Multiplikation in $\\mathbb{Z}_7^*$ bzw. $\\mathbb{Z}_8^*$ an.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Die **Einheitengruppe** $\\mathbb{Z}_n^*$ besteht aus allen Restklassen $[a] \\in \\mathbb{Z}_n$, die bezüglich der Multiplikation ein Inverses besitzen.\n\nEs gilt: $[a] \\in \\mathbb{Z}_n^*$ genau dann, wenn $\\text{ggT}(a, n) = 1$ (also $a$ und $n$ teilerfremd sind).\n\nIst $n = p$ eine **Primzahl**, so sind alle Restklassen außer $[0]$ teilerfremd zu $p$, also $\\mathbb{Z}_p^* = \\{[1], [2], \\ldots, [p-1]\\}$.\n\nDas **multiplikative Inverse** $[a]^{-1}$ ist die Restklasse $[b]$ mit $[a] \\cdot [b] = [1]$.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '**Schritt 1 – Elemente bestimmen**: Prüfen Sie für jedes $a \\in \\{1, \\ldots, n-1\\}$, ob $\\text{ggT}(a, n) = 1$. Nur diese Restklassen gehören zu $\\mathbb{Z}_n^*$.\n\n**Schritt 2 – Inverse finden**: Suchen Sie zu jedem $[a]$ ein $[b]$ mit $[a][b] = [1]$. Bei kleinem $n$ können Sie einfach alle Produkte durchprobieren.\n\n**Schritt 3 – Probe**: Rechnen Sie $[a][b]$ aus und reduzieren Sie modulo $n$ – das Ergebnis muss $[1]$ sein.\n\nTipp: Inverse treten paarweise auf ($[a]^{-1} = [b] \\Leftrightarrow [b]^{-1} = [a]$); selbstinverse Elemente erfüllen $[a]^2 = [1]$.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Beispiel $\\mathbb{Z}_5^*$ ($5$ ist prim): $\\mathbb{Z}_5^* = \\{[1], [2], [3], [4]\\}$.\n\n$[2]^{-1} = [3]$, denn $[2][3] = [6] = [1]$\n$[4]^{-1} = [4]$, denn $[4][4] = [16] = [1]$\n\nBeispiel $\\mathbb{Z}_6^*$ ($6$ nicht prim): teilerfremd zu $6$ sind nur $a \\in \\{1, 5\\}$, also $\\mathbb{Z}_6^* = \\{[1], [5]\\}$.\n\n$[5]^{-1} = [5]$, denn $[5][5] = [25] = [1]$',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• **$[0]$ aufnehmen**: $[0]$ ist nie invertierbar und gehört nie zu $\\mathbb{Z}_n^*$.\n\n• **Nicht-teilerfremde Klassen aufnehmen**: In $\\mathbb{Z}_8^*$ fehlen $[2], [4], [6]$, da $\\text{ggT}(2,8) = 2 \\neq 1$ usw. Also $\\mathbb{Z}_8^* = \\{[1], [3], [5], [7]\\}$.\n\n• **Reduktion vergessen**: $[3][5] = [15]$ muss noch zu $[15 \\bmod 7] = [1]$ reduziert werden.\n\n• **Additives statt multiplikatives Inverses**: Gesucht ist $[a][b] = [1]$, nicht $[a] + [b] = [0]$.',
      },
    ],
    loesung:
      'Es ist $\\mathbb{Z}_7^* = \\{[1], [2], [3], [4], [5], [6]\\}$ und $\\mathbb{Z}_8^* = \\{[1], [3], [5], [7]\\}$.\n\n' +
      'In $\\mathbb{Z}_7^*$ ist\n' +
      '$[1]^{-1} = [1]$, denn $[1][1] = [1]$\n' +
      '$[2]^{-1} = [4]$, denn $[2][4] = [8] = [1]$\n' +
      '$[3]^{-1} = [5]$, denn $[3][5] = [15] = [1]$\n' +
      '$[4]^{-1} = [2]$, denn $[4][2] = [8] = [1]$\n' +
      '$[5]^{-1} = [3]$, denn $[5][3] = [15] = [1]$\n' +
      '$[6]^{-1} = [6]$, denn $[6][6] = [36] = [1]$\n\n' +
      'und in $\\mathbb{Z}_8^*$ ist\n' +
      '$[1]^{-1} = [1]$, denn $[1][1] = [1]$\n' +
      '$[3]^{-1} = [3]$, denn $[3][3] = [9] = [1]$\n' +
      '$[5]^{-1} = [5]$, denn $[5][5] = [25] = [1]$\n' +
      '$[7]^{-1} = [7]$, denn $[7][7] = [49] = [1]$.',
    schwierigkeit: 'einfach',
    kategorie: 'Restklassen',
  },
  {
    id: 'b6_a2',
    titel: 'Invertierbarkeit in $\\mathbb{Z}_n$ – euklidischer Algorithmus',
    aufgabeText:
      '(a) Ist $[96]$ in $\\mathbb{Z}_{296}$ bezüglich „$\\cdot$" invertierbar? Falls ja, bestimmen Sie das Inverse und geben es in der Form $[k]$ mit $k \\in \\{0, \\ldots, 295\\}$ an.\n' +
      '(b) Ist $[26]$ in $\\mathbb{Z}_{73}$ bezüglich „$\\cdot$" invertierbar? Falls ja, bestimmen Sie das Inverse und geben es in der Form $[k]$ mit $k \\in \\{0, \\ldots, 72\\}$ an.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Eine Restklasse $[a]$ ist in $\\mathbb{Z}_n$ bezüglich der Multiplikation **genau dann invertierbar**, wenn $\\text{ggT}(a, n) = 1$.\n\nDer **erweiterte euklidische Algorithmus** liefert dann ganze Zahlen $s, t$ mit\n$s \\cdot a + t \\cdot n = \\text{ggT}(a, n) = 1$.\n\nModulo $n$ folgt $[s] \\cdot [a] = [1]$, also ist $[a]^{-1} = [s]$.\n\nIst dagegen $\\text{ggT}(a, n) > 1$, so ist $[a]$ **nicht** invertierbar.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '**Schritt 1 – ggT berechnen**: Führen Sie den euklidischen Algorithmus durch (fortlaufende Division mit Rest), bis der Rest $0$ ist. Der letzte Rest $\\neq 0$ ist der ggT.\n\n**Schritt 2 – Invertierbarkeit entscheiden**: Ist der ggT $> 1$, ist $[a]$ nicht invertierbar – fertig. Ist er $1$, geht es weiter.\n\n**Schritt 3 – Rückwärts einsetzen**: Lösen Sie die Gleichungen von unten nach oben nach den Resten auf, bis Sie $1 = s \\cdot a + t \\cdot n$ erhalten.\n\n**Schritt 4 – Inverses ablesen**: $[a]^{-1} = [s]$. Bringen Sie $s$ ggf. durch Addition von $n$ in den Bereich $\\{0, \\ldots, n-1\\}$.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Inverses von $[3]$ in $\\mathbb{Z}_7$:\n\nEuklid: $7 = 2 \\cdot 3 + 1$ und $3 = 3 \\cdot 1 + 0$, also $\\text{ggT}(3, 7) = 1$.\n\nRückwärts: $1 = 7 - 2 \\cdot 3$, also $-2 \\cdot 3 = 1 - 7$.\n\nDamit ist $[3]^{-1} = [-2] = [-2 + 7] = [5]$.\n\nProbe: $[3][5] = [15] = [1]$ ✓',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• **Gemeinsamen Teiler übersehen**: Ein gemeinsamer Teiler $> 1$ (z.B. beide Zahlen gerade) genügt bereits als Begründung für Nicht-Invertierbarkeit – der volle Algorithmus ist dann nicht nötig.\n\n• **Negatives Inverses stehen lassen**: $[-14]$ muss zu $[-14 + 73] = [59]$ in den Bereich $\\{0, \\ldots, n-1\\}$ gebracht werden.\n\n• **Rechenfehler beim Rückwärtseinsetzen**: Setzen Sie immer den Rest aus der vorigen Zeile ein und fassen Sie sorgfältig zusammen.\n\n• **Primzahl-Abkürzung übersehen**: Ist $n$ prim und $0 < a < n$, ist $[a]$ automatisch invertierbar.',
      },
    ],
    loesung:
      '**(a)** Da $2$ ein Teiler von $96$ und $296$ ist, ist $\\text{ggT}(96, 296) \\geq 2$, also $\\text{ggT}(96, 296) \\neq 1$. Damit ist $[96]$ nicht invertierbar in $\\mathbb{Z}_{296}$ bezüglich „$\\cdot$".\n\n' +
      '**(b)** Wir bestimmen zunächst mit dem euklidischen Algorithmus den größten gemeinsamen Teiler von $26$ und $73$:\n' +
      '(1)  $73 = 2 \\cdot 26 + 21$\n' +
      '(2)  $26 = 1 \\cdot 21 + 5$\n' +
      '(3)  $21 = 4 \\cdot 5 + 1$\n' +
      '(4)  $5 = 5 \\cdot 1 + 0$\n\n' +
      'und erhalten $\\text{ggT}(26, 73) = 1$. Damit ist $[26]$ in $\\mathbb{Z}_{73}$ invertierbar bezüglich „$\\cdot$". (Man hätte auch überlegen können, dass $73$ eine Primzahl ist und deswegen alle Elemente außer $[0]$ in $\\mathbb{Z}_{73}$ invertierbar sind.)\n\n' +
      'Nun gehen wir die Rechenschritte in umgekehrter Reihenfolge durch und erhalten\n' +
      '$1 \\overset{(3)}{=} 21 - 4 \\cdot 5$\n' +
      '$\\overset{(2)}{=} 21 - 4 \\cdot (26 - 1 \\cdot 21) = 5 \\cdot 21 - 4 \\cdot 26$\n' +
      '$\\overset{(1)}{=} 5 \\cdot (73 - 2 \\cdot 26) - 4 \\cdot 26 = 5 \\cdot 73 - 14 \\cdot 26$.\n\n' +
      'Damit ist $[-14] = [-14 + 73] = [59]$ das Inverse zu $[26]$ in $\\mathbb{Z}_{73}$.',
    schwierigkeit: 'mittel',
    kategorie: 'Restklassen',
  },
  {
    id: 'b6_a3',
    titel: 'ISBN-Prüfziffern in $\\mathbb{Z}_{11}$',
    aufgabeText:
      'Ergänzen Sie $y \\in \\{0, 1, \\ldots, 10\\}$ und $z \\in \\{0, 1, \\ldots, 9\\}$ in nachfolgenden Nummern jeweils so, dass eine gültige ISBN-Nummer herauskommt.\n' +
      '(a) 3-528-97217-$y$\n' +
      '(b) 3-540-$z$7431-9\n\n' +
      'Erinnerung: $x_{10}x_9x_8x_7\\,x_6x_5x_4x_3x_2\\,x_1$ ist eine gültige ISBN-Nummer, falls in $\\mathbb{Z}_{11}$ gilt $\\left[\\sum_{k=1}^{10} k \\cdot x_k\\right] = [0]$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Eine **ISBN-10-Nummer** besteht aus den Ziffern $x_{10}, x_9, \\ldots, x_1$ (von links nach rechts gelesen). Sie ist **gültig**, falls in $\\mathbb{Z}_{11}$ gilt:\n$\\left[\\sum_{k=1}^{10} k \\cdot x_k\\right] = [0]$.\n\nDabei wird die Ziffer mit Index $k$ – von **rechts** gezählt, $x_1$ ganz rechts – mit dem Gewicht $k$ multipliziert.\n\nGesucht ist jeweils die fehlende Ziffer, sodass die gewichtete Summe modulo $11$ den Wert $0$ ergibt.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '**Schritt 1 – Ziffern zuordnen**: Nummerieren Sie die Ziffern von rechts: $x_1$ (Gewicht $1$) bis $x_{10}$ (Gewicht $10$).\n\n**Schritt 2 – Summe bilden**: Berechnen Sie $\\sum_{k=1}^{10} k \\cdot x_k$ und reduzieren Sie modulo $11$.\n\n**Schritt 3 – Gleichung lösen**: Setzen Sie die Summe gleich $[0]$. Steht die Unbekannte mit Gewicht $1$ da, lesen Sie sie direkt ab.\n\n**Schritt 4 – Koeffizient invertieren**: Hat die Unbekannte ein Gewicht $\\neq 1$ (z.B. $[6][z]$), multiplizieren Sie mit dem Inversen dieses Koeffizienten in $\\mathbb{Z}_{11}$.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Steht die Unbekannte an Position $x_1$ (Gewicht $1$):\n$[S] + [1 \\cdot y] = [0] \\Leftrightarrow [y] = [-S]$.\n\nSteht sie an einer anderen Position, z.B. mit Gewicht $6$:\n$[S] + [6][z] = [0] \\Leftrightarrow [6][z] = [-S] \\Leftrightarrow [z] = [6]^{-1}[-S]$.\n\nDas Inverse $[6]^{-1}$ in $\\mathbb{Z}_{11}$ bestimmt man mit dem euklidischen Algorithmus: $[6]^{-1} = [2]$, denn $[6][2] = [12] = [1]$.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• **Zählrichtung verwechseln**: $x_1$ ist die **rechte** Ziffer (Gewicht $1$), $x_{10}$ die **linke** (Gewicht $10$).\n\n• **Koeffizient nicht invertieren**: Bei $[6][z] = [9]$ ist $[z] \\neq [9]$ – man muss mit $[6]^{-1} = [2]$ multiplizieren.\n\n• **Falsches Modul**: Gerechnet wird in $\\mathbb{Z}_{11}$, nicht modulo $10$.\n\n• **Negatives Ergebnis**: $[-8]$ muss zu $[-8 + 11] = [3]$ in $\\{0, \\ldots, 10\\}$ gebracht werden.',
      },
    ],
    loesung:
      '**(a)** Für diese ISBN-Nummer erhalten wir in $\\mathbb{Z}_{11}$\n' +
      '$\\left[\\sum_{k=1}^{10} k \\cdot x_k\\right] = [10 \\cdot 3 + 9 \\cdot 5 + 8 \\cdot 2 + 7 \\cdot 8 + 6 \\cdot 9 + 5 \\cdot 7 + 4 \\cdot 2 + 3 \\cdot 1 + 2 \\cdot 7 + 1 \\cdot y]$\n' +
      '$= [261 + y] = [8] + [y]$.\n\n' +
      'Nun gilt $[8] + [y] = [0] \\Leftrightarrow [y] = [-8] \\Leftrightarrow [y] = [3]$.\n\n' +
      'Für $y = 3$ erhält man also eine gültige ISBN-Nummer.\n\n' +
      '**(b)** Für diese ISBN-Nummer erhalten wir in $\\mathbb{Z}_{11}$\n' +
      '$\\left[\\sum_{k=1}^{10} k \\cdot x_k\\right] = [10 \\cdot 3 + 9 \\cdot 5 + 8 \\cdot 4 + 7 \\cdot 0 + 6 \\cdot z + 5 \\cdot 7 + 4 \\cdot 4 + 3 \\cdot 3 + 2 \\cdot 1 + 1 \\cdot 9]$\n' +
      '$= [178 + 6z] = [2] + [6][z]$.\n\n' +
      'Nun gilt $[2] + [6][z] = [0] \\Leftrightarrow [6][z] = [-2] \\Leftrightarrow [6][z] = [9] \\Leftrightarrow [z] = [6]^{-1}[9]$.\n\n' +
      'Berechnung von $[6]^{-1}$ in $\\mathbb{Z}_{11}$: Mit dem euklidischen Algorithmus erhalten wir\n' +
      '(1)  $11 = 1 \\cdot 6 + 5$\n' +
      '(2)  $6 = 1 \\cdot 5 + 1$\n' +
      '(3)  $5 = 5 \\cdot 1 + 0$\n\n' +
      'Wir gehen nun die Rechenschritte in umgekehrter Reihenfolge durch und erhalten\n' +
      '$1 \\overset{(2)}{=} 6 - 1 \\cdot 5 \\overset{(1)}{=} 6 - 1 \\cdot (11 - 1 \\cdot 6) = 2 \\cdot 6 - 1 \\cdot 11$.\n\n' +
      'Damit ist $[2]$ das Inverse zu $[6]$ in $\\mathbb{Z}_{11}$. Damit ergibt sich $[z] = [6]^{-1}[9] = [2][9] = [18] = [7]$.\n\n' +
      'Für $z = 7$ erhält man also eine gültige ISBN-Nummer.',
    schwierigkeit: 'mittel',
    kategorie: 'Restklassen',
  },
  {
    id: 'b6_a4',
    titel: 'Gruppenhomomorphismen und -isomorphismen',
    aufgabeText:
      '*(Wenn noch Zeit ist …)*\n\n' +
      'Seien $(G, *)$ und $(H, \\times)$ Gruppen. Eine Abbildung $\\Phi: (G, *) \\to (H, \\times)$ ist ein Gruppenhomomorphismus, falls für alle $a, b \\in G$ gilt\n' +
      '$\\Phi(a * b) = \\Phi(a) \\times \\Phi(b)$.\n' +
      'Ist $\\Phi$ zusätzlich bijektiv, so ist $\\Phi$ ein Gruppenisomorphismus. Welche der folgenden Abbildungen sind Gruppenhomomorphismen bzw. Gruppenisomorphismen?\n' +
      '(a) $\\Phi: (\\mathbb{Z}, +) \\to (\\mathbb{Z}_n, +)$, $z \\mapsto [z]$, wobei $n \\in \\mathbb{N}, n \\geq 2$\n' +
      '(b) $\\Phi: (\\mathbb{R}, +) \\to ((0, \\infty), \\cdot)$, $x \\mapsto e^x$\n' +
      '(c) $\\Phi: (\\mathbb{R}, +) \\to (T, \\cdot)$, $\\varphi \\mapsto e^{\\mathrm{i}\\varphi}$, wobei $T = \\{z \\in \\mathbb{C} : |z| = 1\\}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Ein **Gruppenhomomorphismus** $\\Phi: (G, *) \\to (H, \\times)$ ist eine Abbildung, die die Verknüpfung respektiert:\n$\\Phi(a * b) = \\Phi(a) \\times \\Phi(b)$ für alle $a, b \\in G$.\n\nAchten Sie darauf: Links steht die Verknüpfung $*$ von $G$, rechts die Verknüpfung $\\times$ von $H$ – diese können verschieden sein (z.B. $+$ und $\\cdot$).\n\nEin **Gruppenisomorphismus** ist ein bijektiver Gruppenhomomorphismus.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '**Schritt 1 – Homomorphie prüfen**: Rechnen Sie $\\Phi(a * b)$ aus und vergleichen Sie mit $\\Phi(a) \\times \\Phi(b)$. Stimmen beide für alle $a, b$ überein, ist $\\Phi$ ein Homomorphismus.\n\n**Schritt 2 – Bijektivität prüfen**: Für einen Isomorphismus muss $\\Phi$ zusätzlich injektiv **und** surjektiv sein.\n\n**Schritt 3 – Injektivität widerlegen**: Um zu zeigen, dass kein Isomorphismus vorliegt, genügt **ein** Gegenbeispiel: zwei verschiedene $a \\neq b$ mit $\\Phi(a) = \\Phi(b)$.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Nützliche Rechenregeln:\n$e^{a+b} = e^a \\cdot e^b$ (Exponentialgesetz)\n$e^{\\mathrm{i}(\\varphi + \\psi)} = e^{\\mathrm{i}\\varphi} \\cdot e^{\\mathrm{i}\\psi}$\n$[a + b] = [a] + [b]$ (Addition von Restklassen)\n\nNicht-Injektivität durch Periodizität: $e^{\\mathrm{i} \\cdot 0} = 1 = e^{\\mathrm{i} \\cdot 2\\pi}$, obwohl $0 \\neq 2\\pi$.\nNicht-Injektivität der Restklassenabbildung: $[0] = [n]$, obwohl $0 \\neq n$ in $\\mathbb{Z}$.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• **Verknüpfungen verwechseln**: In (b) wird $+$ auf $\\cdot$ abgebildet – die Gleichung lautet $\\Phi(a + b) = \\Phi(a) \\cdot \\Phi(b)$, nicht $\\Phi(a) + \\Phi(b)$.\n\n• **Isomorphismus mit Homomorphismus verwechseln**: Jeder Isomorphismus ist ein Homomorphismus, aber nicht umgekehrt – die Bijektivität ist eine zusätzliche Bedingung.\n\n• **Injektivität falsch widerlegt**: Ein einziges Paar $a \\neq b$ mit gleichem Bild genügt – man muss nicht „alle" Paare prüfen.\n\n• **Surjektivität übersehen**: $\\exp: \\mathbb{R} \\to (0, \\infty)$ ist bijektiv; als Abbildung nach ganz $\\mathbb{R}$ wäre sie nicht surjektiv.',
      },
    ],
    loesung:
      '**(a)** Sind $a, b \\in \\mathbb{Z}$, so ist $\\Phi(a + b) = [a + b] = [a] + [b] = \\Phi(a) + \\Phi(b)$. Damit ist $\\Phi$ ein Gruppenhomomorphismus. Da $\\Phi(0) = [0] = [n] = \\Phi(n)$, ist $\\Phi$ nicht injektiv und damit kein Gruppenisomorphismus.\n\n' +
      '**(b)** Sind $a, b \\in \\mathbb{R}$, so ist $\\Phi(a + b) = e^{a+b} = e^a \\cdot e^b = \\Phi(a) \\cdot \\Phi(b)$. Damit ist $\\Phi$ ein Gruppenhomomorphismus. Da die Exponentialfunktion $\\exp: \\mathbb{R} \\to (0, \\infty)$ bijektiv ist (nach letztem Semester), ist $\\Phi$ sogar ein Gruppenisomorphismus.\n\n' +
      '**(c)** Sind $\\varphi, \\psi \\in \\mathbb{R}$, so ist $\\Phi(\\varphi + \\psi) = e^{\\mathrm{i}(\\varphi + \\psi)} = e^{\\mathrm{i}\\varphi + \\mathrm{i}\\psi} = e^{\\mathrm{i}\\varphi} \\cdot e^{\\mathrm{i}\\psi} = \\Phi(\\varphi) \\cdot \\Phi(\\psi)$. Damit ist $\\Phi$ ein Gruppenhomomorphismus. Da $\\Phi(0) = e^{\\mathrm{i} \\cdot 0} = 1 = e^{\\mathrm{i} \\cdot 2\\pi} = \\Phi(2\\pi)$, ist $\\Phi$ nicht injektiv und damit kein Gruppenisomorphismus.',
    schwierigkeit: 'schwer',
    kategorie: 'Gruppen',
  },
]
