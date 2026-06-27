import type { Aufgabe } from '../../types'

export const b6: Aufgabe[] = [
  // ─── Aufgabe 1: Einheitengruppen Z7* und Z8* ──────────────────────────────
  {
    id: 'b6_a1',
    titel: 'Einheitengruppen $\\mathbb{Z}_7^*$ und $\\mathbb{Z}_8^*$ und ihre Inversen',
    aufgabeText: 'Geben Sie zunächst alle Elemente von $\\mathbb{Z}_7^*$ und $\\mathbb{Z}_8^*$ an. Geben Sie anschließend jeweils die zugehörigen Inversen bezüglich der üblichen Multiplikation in $\\mathbb{Z}_7^*$ bzw. $\\mathbb{Z}_8^*$ an.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was ist $\\mathbb{Z}_n^*$?',
        inhalt:
          '$\\mathbb{Z}_n^*$ (die Einheitengruppe) ist die Menge aller Restklassen $[a]$ in $\\mathbb{Z}_n$, die bezüglich der Multiplikation ein Inverses besitzen.\n\n' +
          'Kriterium: $[a]$ ist genau dann invertierbar, wenn $\\mathrm{ggT}(a, n) = 1$ (also $a$ und $n$ teilerfremd sind).\n\n' +
          'Die $[0]$ ist nie dabei.',
      },
      {
        icon: '🔍',
        titel: 'Elemente bestimmen',
        inhalt:
          '$\\mathbb{Z}_7$: Da $7$ eine Primzahl ist, sind ALLE Zahlen $1$ bis $6$ teilerfremd zu $7$. Also $\\mathbb{Z}_7^* = \\{[1],[2],[3],[4],[5],[6]\\}$.\n\n' +
          '$\\mathbb{Z}_8$: teilerfremd zu $8 = 2^3$ sind nur die ungeraden Zahlen. Also $\\mathbb{Z}_8^* = \\{[1],[3],[5],[7]\\}$.',
      },
      {
        icon: '📝',
        titel: 'Inverse finden (Ausprobieren)',
        inhalt:
          'Das Inverse von $[a]$ ist die Restklasse $[b]$ mit $[a][b] = [1]$. Bei kleinen Mengen probiert man durch:\n\n' +
          'In $\\mathbb{Z}_7$: $[2][4] = [8] = [1]$, also $[2]^{-1} = [4]$.\n' +
          'In $\\mathbb{Z}_8$: $[3][3] = [9] = [1]$, also $[3]^{-1} = [3]$ (selbstinvers).',
      },
      {
        icon: '⚠️',
        titel: 'Auffälligkeit in $\\mathbb{Z}_8^*$',
        inhalt:
          '• In $\\mathbb{Z}_8^*$ ist JEDES Element zu sich selbst invers ($[a]^2 = [1]$). Das ist eine Besonderheit dieser Gruppe.',
      },
    ],
    loesung:
      'Elemente:\n' +
      '  $\\mathbb{Z}_7^* = \\{[1],[2],[3],[4],[5],[6]\\}$ (7 ist prim → alle außer [0])\n' +
      '  $\\mathbb{Z}_8^* = \\{[1],[3],[5],[7]\\}$ (nur ungerade, da teilerfremd zu 8)\n\n' +
      'Inverse in $\\mathbb{Z}_7^*$:\n' +
      '  $[1]^{-1} = [1]$ (denn $[1][1]=[1]$)\n' +
      '  $[2]^{-1} = [4]$ (denn $[2][4]=[8]=[1]$)\n' +
      '  $[3]^{-1} = [5]$ (denn $[3][5]=[15]=[1]$)\n' +
      '  $[4]^{-1} = [2]$ (denn $[4][2]=[8]=[1]$)\n' +
      '  $[5]^{-1} = [3]$ (denn $[5][3]=[15]=[1]$)\n' +
      '  $[6]^{-1} = [6]$ (denn $[6][6]=[36]=[1]$)\n\n' +
      'Inverse in $\\mathbb{Z}_8^*$ (jedes selbstinvers):\n' +
      '  $[1]^{-1} = [1]$ (denn $[1][1]=[1]$)\n' +
      '  $[3]^{-1} = [3]$ (denn $[3][3]=[9]=[1]$)\n' +
      '  $[5]^{-1} = [5]$ (denn $[5][5]=[25]=[1]$)\n' +
      '  $[7]^{-1} = [7]$ (denn $[7][7]=[49]=[1]$)',
    schwierigkeit: 'mittel',
    kategorie: 'Restklassen',
  },

  // ─── Aufgabe 2: Invertierbarkeit + euklidischer Algorithmus (a/b) ─────────
  {
    id: 'b6_a2a',
    titel: 'Invertierbarkeit: $[96]$ in $\\mathbb{Z}_{296}$',
    aufgabeText: 'Ist $[96]$ in $\\mathbb{Z}_{296}$ bezüglich „$\\cdot$" invertierbar? Falls ja, bestimmen Sie das Inverse und geben es in der Form $[k]$ mit $k \\in \\{0, \\ldots, 295\\}$ an.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Das Invertierbarkeits-Kriterium',
        inhalt:
          '$[a]$ ist in $\\mathbb{Z}_n$ genau dann invertierbar, wenn $\\mathrm{ggT}(a, n) = 1$ (teilerfremd). Prüfe also zuerst den größten gemeinsamen Teiler.',
      },
      {
        icon: '🔍',
        titel: 'Gemeinsamen Teiler suchen',
        inhalt:
          'Schau, ob $96$ und $296$ einen gemeinsamen Teiler $> 1$ haben.\n\n' +
          'Beide Zahlen sind gerade: $96 = 2 \\cdot 48$ und $296 = 2 \\cdot 148$. Also ist $2$ ein gemeinsamer Teiler.',
      },
      {
        icon: '📝',
        titel: 'Schlussfolgerung',
        inhalt:
          'Da $2$ beide Zahlen teilt, ist $\\mathrm{ggT}(96, 296) \\geq 2 \\neq 1$. Damit ist $[96]$ NICHT invertierbar.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Vor dem aufwändigen euklidischen Algorithmus lohnt ein schneller Blick: Sind beide Zahlen gerade, ist der ggT mindestens 2 und man ist sofort fertig.',
      },
    ],
    loesung:
      '$[96]$ ist NICHT invertierbar in $\\mathbb{Z}_{296}$.\n\n' +
      'Begründung: $2$ teilt sowohl $96$ als auch $296$, also $\\mathrm{ggT}(96, 296) \\geq 2 \\neq 1$. Nur teilerfremde Zahlen sind invertierbar.',
    schwierigkeit: 'einfach',
    kategorie: 'Restklassen',
  },
  {
    id: 'b6_a2b',
    titel: 'Invertierbarkeit: $[26]$ in $\\mathbb{Z}_{73}$ (euklidischer Algorithmus)',
    aufgabeText: 'Ist $[26]$ in $\\mathbb{Z}_{73}$ bezüglich „$\\cdot$" invertierbar? Falls ja, bestimmen Sie das Inverse und geben es in der Form $[k]$ mit $k \\in \\{0, \\ldots, 72\\}$ an.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Erst ggT, dann Inverses',
        inhalt:
          'Zwei Schritte:\n' +
          '1. Mit dem euklidischen Algorithmus den $\\mathrm{ggT}(26, 73)$ bestimmen. Ist er $1$, so ist $[26]$ invertierbar.\n' +
          '2. Mit dem erweiterten euklidischen Algorithmus (Rückwärtseinsetzen) das Inverse berechnen.\n\n' +
          'Abkürzung: $73$ ist eine Primzahl, daher sind alle Elemente außer $[0]$ invertierbar.',
      },
      {
        icon: '🔍',
        titel: 'Euklidischer Algorithmus',
        inhalt:
          'Man teilt immer die größere durch die kleinere Zahl mit Rest, bis der Rest $0$ ist:\n' +
          '  (1) $73 = 2 \\cdot 26 + 21$\n' +
          '  (2) $26 = 1 \\cdot 21 + 5$\n' +
          '  (3) $21 = 4 \\cdot 5 + 1$\n' +
          '  (4) $5 = 5 \\cdot 1 + 0$\n\n' +
          'Der letzte Rest $\\neq 0$ ist $1$, also $\\mathrm{ggT}(26, 73) = 1$ → invertierbar.',
      },
      {
        icon: '📝',
        titel: 'Rückwärts einsetzen',
        inhalt:
          'Ziel: $1$ als Kombination $\\ldots \\cdot 73 + \\ldots \\cdot 26$ schreiben. Beginne bei Zeile (3) und ersetze die Reste schrittweise:\n' +
          '  $1 = 21 - 4\\cdot 5$\n' +
          '  $= 21 - 4(26 - 21) = 5\\cdot 21 - 4\\cdot 26$\n' +
          '  $= 5(73 - 2\\cdot 26) - 4\\cdot 26 = 5\\cdot 73 - 14\\cdot 26$\n\n' +
          'Der Faktor vor $26$ ist $-14$ → das Inverse ist $[-14]$.',
      },
      {
        icon: '⚠️',
        titel: 'In den richtigen Bereich bringen',
        inhalt:
          '• $[-14]$ ist negativ. Addiere $73$: $[-14] = [-14 + 73] = [59]$.\n\n' +
          '• Probe: $[26][59] = [1534]$; $1534 = 21\\cdot 73 + 1$, also $[1]$ ✓',
      },
    ],
    loesung:
      'Euklidischer Algorithmus:\n' +
      '  (1) $73 = 2 \\cdot 26 + 21$\n' +
      '  (2) $26 = 1 \\cdot 21 + 5$\n' +
      '  (3) $21 = 4 \\cdot 5 + 1$\n' +
      '  (4) $5 = 5 \\cdot 1 + 0$\n' +
      'Es ist $\\mathrm{ggT}(26, 73) = 1$, also ist $[26]$ invertierbar (73 ist auch prim).\n\n' +
      'Rückwärtseinsetzen:\n' +
      '  $1 = 21 - 4\\cdot 5 = 21 - 4(26 - 1\\cdot 21) = 5\\cdot 21 - 4\\cdot 26 = 5(73 - 2\\cdot 26) - 4\\cdot 26 = 5\\cdot 73 - 14\\cdot 26$\n\n' +
      'Damit ist $[-14] = [-14 + 73] = [59]$ das Inverse zu $[26]$ in $\\mathbb{Z}_{73}$.',
    schwierigkeit: 'schwer',
    kategorie: 'Restklassen',
  },

  // ─── Aufgabe 3: ISBN-Prüfziffern (a/b) ────────────────────────────────────
  {
    id: 'b6_a3a',
    titel: 'ISBN-Prüfziffer bestimmen: 3-528-97217-y',
    aufgabeText:
      'Ergänzen Sie $y \\in \\{0,1,\\ldots,10\\}$ in 3-528-97217-$y$ so, dass eine gültige ISBN-Nummer herauskommt.\n\n' +
      'Erinnerung: $x_{10}$-$x_9 x_8 x_7$-$x_6 x_5 x_4 x_3 x_2$-$x_1$ ist eine gültige ISBN-Nummer, falls in $\\mathbb{Z}_{11}$ gilt $\\left[\\sum_{k=1}^{10} k \\cdot x_k\\right] = [0]$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Die ISBN-Prüfregel',
        inhalt:
          'Eine zehnstellige ISBN ist gültig, wenn die gewichtete Summe modulo $11$ Null ergibt. Dabei wird die LETZTE Ziffer mit $1$ gewichtet, die vorletzte mit $2$, usw. bis zur ERSTEN Ziffer mit $10$.\n\n' +
          'Wichtig: Die Ziffern werden von hinten gezählt – $x_1$ ist die letzte (die Prüfziffer), $x_{10}$ die erste.',
      },
      {
        icon: '🔍',
        titel: 'Ziffern zuordnen',
        inhalt:
          'Die Ziffern (ohne Bindestriche) sind 3 5 2 8 9 7 2 1 7 $y$. Von hinten:\n' +
          '  $x_1 = y$ (Gewicht 1), $x_2 = 7$ (Gewicht 2), $x_3 = 1$ (Gewicht 3), $x_4 = 2$ (Gewicht 4), $x_5 = 7$ (Gewicht 5), $x_6 = 9$ (Gewicht 6), $x_7 = 8$ (Gewicht 7), $x_8 = 2$ (Gewicht 8), $x_9 = 5$ (Gewicht 9), $x_{10} = 3$ (Gewicht 10).',
      },
      {
        icon: '📝',
        titel: 'Summe berechnen',
        inhalt:
          'Gewichtete Summe (ohne den $y$-Term):\n' +
          '  $10\\cdot 3 + 9\\cdot 5 + 8\\cdot 2 + 7\\cdot 8 + 6\\cdot 9 + 5\\cdot 7 + 4\\cdot 2 + 3\\cdot 1 + 2\\cdot 7 = 261$\n\n' +
          'Plus der Prüfterm $1\\cdot y$: Summe $= 261 + y$. Modulo 11: $261 = 23\\cdot 11 + 8$, also $[261] = [8]$.\n' +
          'Bedingung: $[8] + [y] = [0]$.',
      },
      {
        icon: '⚠️',
        titel: 'Nach $y$ auflösen',
        inhalt:
          '$[8] + [y] = [0] \\Leftrightarrow [y] = [-8] = [-8 + 11] = [3]$.\n\n' +
          'Also $y = 3$. (Bei ISBN-10 kann $y = 10$ als „X" auftreten, hier ist es aber $3$.)',
      },
    ],
    loesung:
      'Gewichtete Summe in $\\mathbb{Z}_{11}$:\n' +
      '  $\\left[\\sum_{k=1}^{10} k\\cdot x_k\\right] = [10\\cdot 3 + 9\\cdot 5 + 8\\cdot 2 + 7\\cdot 8 + 6\\cdot 9 + 5\\cdot 7 + 4\\cdot 2 + 3\\cdot 1 + 2\\cdot 7 + 1\\cdot y]$\n' +
      '  $= [261 + y] = [8] + [y]$\n\n' +
      'Gültig, wenn $[8] + [y] = [0]$, also $[y] = [-8] = [3]$.\n\n' +
      'Für $y = 3$ erhält man eine gültige ISBN-Nummer.',
    schwierigkeit: 'mittel',
    kategorie: 'Restklassen',
  },
  {
    id: 'b6_a3b',
    titel: 'ISBN-Prüfziffer bestimmen: 3-540-z7431-9',
    aufgabeText:
      'Ergänzen Sie $z \\in \\{0,1,\\ldots,9\\}$ in 3-540-$z$7431-9 so, dass eine gültige ISBN-Nummer herauskommt.\n\n' +
      'Erinnerung: $x_{10}$-$x_9 x_8 x_7$-$x_6 x_5 x_4 x_3 x_2$-$x_1$ ist gültig, falls in $\\mathbb{Z}_{11}$ gilt $\\left[\\sum_{k=1}^{10} k \\cdot x_k\\right] = [0]$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Hier steht $z$ in der Mitte',
        inhalt:
          'Anders als bei (a) ist hier eine mittlere Ziffer unbekannt. Wir müssen herausfinden, welches Gewicht $z$ bekommt und dann nach $z$ auflösen – das erfordert eine Division (= Multiplikation mit dem Inversen) in $\\mathbb{Z}_{11}$.',
      },
      {
        icon: '🔍',
        titel: 'Ziffern und Gewichte',
        inhalt:
          'Ziffern: 3 5 4 0 $z$ 7 4 3 1 9. Von hinten gezählt steht $z$ an Position $x_6$ (Gewicht 6).\n\n' +
          'Summe der bekannten Terme:\n' +
          '  $10\\cdot 3 + 9\\cdot 5 + 8\\cdot 4 + 7\\cdot 0 + 5\\cdot 7 + 4\\cdot 3 + 3\\cdot 3 + 2\\cdot 1 + 1\\cdot 9 = 178$\n' +
          'Plus $6z$: Summe $= 178 + 6z$. Modulo 11: $178 = 16\\cdot 11 + 2$, also $[178] = [2]$.',
      },
      {
        icon: '📝',
        titel: 'Gleichung in $\\mathbb{Z}_{11}$ lösen',
        inhalt:
          'Bedingung: $[2] + [6][z] = [0]$, also $[6][z] = [-2] = [9]$.\n\n' +
          'Um nach $z$ aufzulösen, brauchst du das Inverse von $[6]$ in $\\mathbb{Z}_{11}$. Mit dem euklidischen Algorithmus:\n' +
          '  $11 = 1\\cdot 6 + 5$, $6 = 1\\cdot 5 + 1$\n' +
          '  Rückwärts: $1 = 6 - 5 = 6 - (11 - 6) = 2\\cdot 6 - 11$\n' +
          '  → $[6]^{-1} = [2]$.',
      },
      {
        icon: '⚠️',
        titel: 'Nach $z$ auflösen',
        inhalt:
          '$[z] = [6]^{-1}[9] = [2][9] = [18] = [7]$ (denn $18 = 11 + 7$).\n\n' +
          'Also $z = 7$.',
      },
    ],
    loesung:
      'Gewichtete Summe in $\\mathbb{Z}_{11}$ ($z$ steht an Position $x_6$, Gewicht 6):\n' +
      '  $[10\\cdot 3 + 9\\cdot 5 + 8\\cdot 4 + 7\\cdot 0 + 6\\cdot z + 5\\cdot 7 + 4\\cdot 3 + 3\\cdot 3 + 2\\cdot 1 + 1\\cdot 9]$\n' +
      '  $= [178 + 6z] = [2] + [6][z]$\n\n' +
      'Gültig, wenn $[2] + [6][z] = [0]$, also $[6][z] = [-2] = [9]$, d.h. $[z] = [6]^{-1}[9]$.\n\n' +
      'Inverses von $[6]$ in $\\mathbb{Z}_{11}$ (euklidischer Algorithmus):\n' +
      '  $11 = 1\\cdot 6 + 5$, $6 = 1\\cdot 5 + 1$;  rückwärts: $1 = 6 - 5 = 6 - (11 - 6) = 2\\cdot 6 - 11$, also $[6]^{-1} = [2]$.\n\n' +
      'Damit $[z] = [2][9] = [18] = [7]$. Für $z = 7$ erhält man eine gültige ISBN-Nummer.',
    schwierigkeit: 'schwer',
    kategorie: 'Restklassen',
  },

  // ─── Aufgabe 4: Gruppenhomomorphismen (a/b/c) ─────────────────────────────
  {
    id: 'b6_a4a',
    titel: 'Homomorphismus? – $\\Phi: (\\mathbb{Z},+) \\to (\\mathbb{Z}_n,+)$',
    aufgabeText:
      'Eine Abbildung $\\Phi : (G, \\ast) \\to (H, \\times)$ ist ein Gruppenhomomorphismus, falls für alle $a, b \\in G$ gilt $\\Phi(a \\ast b) = \\Phi(a) \\times \\Phi(b)$. Ist $\\Phi$ zusätzlich bijektiv, so ist es ein Gruppenisomorphismus.\n\n' +
      'Ist $\\Phi : (\\mathbb{Z}, +) \\to (\\mathbb{Z}_n, +)$, $z \\mapsto [z]$ (mit $n \\in \\mathbb{N}$, $n \\geq 2$) ein Gruppenhomomorphismus bzw. -isomorphismus?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was ist zu zeigen?',
        inhalt:
          'Homomorphismus: $\\Phi(a + b) = \\Phi(a) + \\Phi(b)$ für alle $a, b$. Setze einfach die Definition $\\Phi(z) = [z]$ ein.\n\n' +
          'Isomorphismus: zusätzlich bijektiv (injektiv UND surjektiv).',
      },
      {
        icon: '🔍',
        titel: 'Homomorphie prüfen',
        inhalt:
          '$\\Phi(a + b) = [a + b]$. Nach der Rechenregel in $\\mathbb{Z}_n$ ist $[a+b] = [a] + [b] = \\Phi(a) + \\Phi(b)$. ✓\n\n' +
          'Also ist $\\Phi$ ein Gruppenhomomorphismus.',
      },
      {
        icon: '📝',
        titel: 'Injektivität prüfen',
        inhalt:
          'Injektiv hieße: verschiedene Zahlen werden auf Verschiedenes abgebildet. Aber:\n' +
          '  $\\Phi(0) = [0]$ und $\\Phi(n) = [n] = [0]$ (da $n$ in $\\mathbb{Z}_n$ Null ist).\n' +
          'Zwei verschiedene Zahlen ($0$ und $n$) landen auf demselben Wert → nicht injektiv.',
      },
      {
        icon: '⚠️',
        titel: 'Folgerung',
        inhalt:
          '• Da nicht injektiv, ist $\\Phi$ nicht bijektiv → kein Isomorphismus, aber ein Homomorphismus.',
      },
    ],
    loesung:
      '$\\Phi$ ist ein Gruppenhomomorphismus, aber KEIN Isomorphismus.\n\n' +
      'Homomorphie: $\\Phi(a + b) = [a + b] = [a] + [b] = \\Phi(a) + \\Phi(b)$. ✓\n\n' +
      'Nicht injektiv: $\\Phi(0) = [0] = [n] = \\Phi(n)$, obwohl $0 \\neq n$. Damit nicht bijektiv und kein Isomorphismus.',
    schwierigkeit: 'mittel',
    kategorie: 'Gruppen',
  },
  {
    id: 'b6_a4b',
    titel: 'Homomorphismus? – $\\Phi: (\\mathbb{R},+) \\to ((0,\\infty),\\cdot)$',
    aufgabeText: 'Ist $\\Phi : (\\mathbb{R}, +) \\to ((0, \\infty), \\cdot)$, $x \\mapsto e^x$ ein Gruppenhomomorphismus bzw. -isomorphismus?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Achtung: verschiedene Verknüpfungen',
        inhalt:
          'Links ist die Verknüpfung die Addition ($+$), rechts die Multiplikation ($\\cdot$). Die Homomorphie-Bedingung lautet hier also:\n' +
          '  $\\Phi(a + b) = \\Phi(a) \\cdot \\Phi(b)$\n' +
          '(Addition wird zu Multiplikation umgewandelt.)',
      },
      {
        icon: '🔍',
        titel: 'Homomorphie prüfen',
        inhalt:
          'Mit der Potenzregel $e^{a+b} = e^a \\cdot e^b$:\n' +
          '  $\\Phi(a + b) = e^{a+b} = e^a \\cdot e^b = \\Phi(a) \\cdot \\Phi(b)$. ✓\n\n' +
          'Also ist $\\Phi$ ein Gruppenhomomorphismus.',
      },
      {
        icon: '📝',
        titel: 'Bijektivität prüfen',
        inhalt:
          'Die Exponentialfunktion $\\exp : \\mathbb{R} \\to (0, \\infty)$ ist bijektiv: jeder positive Wert wird genau einmal getroffen (Umkehrfunktion ist der Logarithmus). ✓\n\n' +
          'Damit ist $\\Phi$ sogar ein Gruppenisomorphismus.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Dieser Isomorphismus erklärt, warum der Logarithmus „aus Multiplikation Addition macht" – beide Gruppen sind strukturgleich.',
      },
    ],
    loesung:
      '$\\Phi$ ist ein Gruppenhomomorphismus UND sogar ein Gruppenisomorphismus.\n\n' +
      'Homomorphie: $\\Phi(a + b) = e^{a+b} = e^a \\cdot e^b = \\Phi(a) \\cdot \\Phi(b)$. ✓\n\n' +
      'Bijektiv: $\\exp : \\mathbb{R} \\to (0, \\infty)$ ist bijektiv (Umkehrfunktion: Logarithmus). Damit Isomorphismus.',
    schwierigkeit: 'mittel',
    kategorie: 'Gruppen',
  },
  {
    id: 'b6_a4c',
    titel: 'Homomorphismus? – $\\Phi: (\\mathbb{R},+) \\to (T,\\cdot)$',
    aufgabeText: 'Ist $\\Phi : (\\mathbb{R}, +) \\to (T, \\cdot)$, $\\varphi \\mapsto e^{\\mathrm{i}\\varphi}$ (mit $T = \\{z \\in \\mathbb{C} : |z| = 1\\}$) ein Gruppenhomomorphismus bzw. -isomorphismus?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Abbildung auf den Einheitskreis',
        inhalt:
          '$\\Phi$ wickelt die reelle Achse auf den Einheitskreis $T$ auf: jedem Winkel $\\varphi$ wird der Punkt $e^{\\mathrm{i}\\varphi}$ zugeordnet. Verknüpfung links ist $+$, rechts $\\cdot$.',
      },
      {
        icon: '🔍',
        titel: 'Homomorphie prüfen',
        inhalt:
          'Mit der Potenzregel $e^{\\mathrm{i}(\\varphi + \\psi)} = e^{\\mathrm{i}\\varphi} \\cdot e^{\\mathrm{i}\\psi}$:\n' +
          '  $\\Phi(\\varphi + \\psi) = e^{\\mathrm{i}(\\varphi + \\psi)} = e^{\\mathrm{i}\\varphi} \\cdot e^{\\mathrm{i}\\psi} = \\Phi(\\varphi) \\cdot \\Phi(\\psi)$. ✓\n\n' +
          'Also ist $\\Phi$ ein Gruppenhomomorphismus.',
      },
      {
        icon: '📝',
        titel: 'Injektivität prüfen',
        inhalt:
          'Wegen der Periodizität von $e^{\\mathrm{i}\\varphi}$ (Periode $2\\pi$) gilt:\n' +
          '  $\\Phi(0) = e^{\\mathrm{i}\\cdot 0} = 1$ und $\\Phi(2\\pi) = e^{\\mathrm{i}\\cdot 2\\pi} = 1$.\n' +
          'Zwei verschiedene Winkel ($0$ und $2\\pi$) ergeben denselben Punkt → nicht injektiv.',
      },
      {
        icon: '⚠️',
        titel: 'Folgerung',
        inhalt:
          '• Da nicht injektiv, ist $\\Phi$ kein Isomorphismus (aber ein Homomorphismus). Anschaulich: die unendliche Gerade wird immer wieder über den Kreis gewickelt.',
      },
    ],
    loesung:
      '$\\Phi$ ist ein Gruppenhomomorphismus, aber KEIN Isomorphismus.\n\n' +
      'Homomorphie: $\\Phi(\\varphi + \\psi) = e^{\\mathrm{i}(\\varphi + \\psi)} = e^{\\mathrm{i}\\varphi} \\cdot e^{\\mathrm{i}\\psi} = \\Phi(\\varphi) \\cdot \\Phi(\\psi)$. ✓\n\n' +
      'Nicht injektiv: $\\Phi(0) = e^{\\mathrm{i}\\cdot 0} = 1 = e^{\\mathrm{i}\\cdot 2\\pi} = \\Phi(2\\pi)$ (Periodizität), obwohl $0 \\neq 2\\pi$. Damit kein Isomorphismus.',
    schwierigkeit: 'mittel',
    kategorie: 'Gruppen',
  },
]
