import type { Aufgabe } from '../../types'

export const b5: Aufgabe[] = [
  {
    id: 'b5_a1',
    titel: 'Gruppen bei Teilmengen von $\\mathbb{Z}$',
    aufgabeText:
      'Prüfen Sie jeweils, ob $(G, +)$ eine Gruppe ist, wenn $G$ wie folgt definiert ist:\n' +
      '(a) $G = \\{3z : z \\in \\mathbb{Z}\\}$\n' +
      '(b) $G = \\{z \\in \\mathbb{Z} : z \\text{ ist durch } 2 \\text{ oder durch } 3 \\text{ teilbar}\\}$\n' +
      '(c) $G = \\{z \\in \\mathbb{Z} : z \\text{ ist durch } 2 \\text{ und durch } 3 \\text{ teilbar}\\}$\n' +
      '(d) $G = \\{1\\}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Eine Gruppe $(G, \\star)$ muss vier Axiome erfüllen:\n\n' +
          '1. Abgeschlossenheit: $\\forall a, b \\in G: a \\star b \\in G$ (das Ergebnis bleibt in $G$)\n' +
          '2. Assoziativität: $\\forall a,b,c \\in G: (a \\star b) \\star c = a \\star (b \\star c)$\n' +
          '3. Neutrales Element: $\\exists e \\in G: e \\star a = a \\star e = a$ für alle $a \\in G$\n' +
          '4. Inverses Element: $\\forall a \\in G: \\exists a^{-1} \\in G: a \\star a^{-1} = e$\n\n' +
          'Für Teilmengen von $(\\mathbb{Z}, +)$ gilt:\n' +
          '  Assoziativität ist automatisch erfüllt (geerbt von $\\mathbb{Z}$)\n' +
          '  Neutrales Element der Addition: $0$\n' +
          '  Inverses der Addition: $-a$\n' +
          '  → Nur Abgeschlossenheit, $0 \\in G$ und $-a \\in G$ muss geprüft werden!',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Prüfe für $(G, +)$:\n' +
          '1. Abgeschlossenheit: Liegt $a + b \\in G$ für alle $a, b \\in G$?\n' +
          '2. Neutrales Element: Ist $0 \\in G$?\n' +
          '3. Inverses: Ist $-a \\in G$ für alle $a \\in G$?\n\n' +
          '(a) $G = 3\\mathbb{Z}$: $3m + 3n = 3(m+n) \\in G$ ✓; $0 = 3 \\cdot 0 \\in G$ ✓; $-3m = 3(-m) \\in G$ ✓ → Gruppe\n\n' +
          '(b) Gegenbeispiel zur Abgeschlossenheit: $2 \\in G$ (durch 2 teilbar) und $3 \\in G$ (durch 3 teilbar), aber $2 + 3 = 5 \\notin G$ → keine Gruppe!\n\n' +
          '(c) Durch 2 UND 3 teilbar = durch 6 teilbar = $G = 6\\mathbb{Z}$\n\n' +
          '(d) $G = \\{1\\}$: Ist $1 + 1 = 2 \\in G$? Nein → keine additive Gruppe. Aber: Für Multiplikation: $1 \\cdot 1 = 1 \\in G$ ✓',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Allgemeines Prinzip: $n\\mathbb{Z} = \\{\\ldots,-2n,-n,0,n,2n,\\ldots\\}$ ist unter Addition immer eine Gruppe:\n' +
          '  Abgeschlossenheit: $na + nb = n(a+b) \\in n\\mathbb{Z}$ ✓\n' +
          '  Neutralelement: $0 = n \\cdot 0 \\in n\\mathbb{Z}$ ✓\n' +
          '  Inverses: $-(na) = n(-a) \\in n\\mathbb{Z}$ ✓\n\n' +
          'Gegenbeispiel für (b): Die Menge „durch 2 oder durch 3 teilbar" enthält $2$ und $3$, aber $2+3=5$ ist weder durch 2 noch durch 3 teilbar. Fertig – kein Überprüfen aller Axiome nötig!',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Assoziativität in $\\mathbb{Z}$ muss NICHT extra geprüft werden – sie gilt automatisch.\n\n' +
          '• (b) vs. (c): „oder" macht die Menge zu groß (nicht abgeschlossen); „und" macht die Menge kleiner (durch ggT teilbar) – das ist oft eine Untergruppe.\n\n' +
          '• (d): Für Addition ist $\\{1\\}$ keine Gruppe (fehlendes Neutralelement 0). Für Multiplikation wäre es eine Gruppe!',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Für jede Nicht-Gruppe: Was scheitert?\n' +
          '  (b): Abgeschlossenheit: $2 + 3 = 5 \\notin G$ ✗\n' +
          '  (d): Neutralelement oder Abgeschlossenheit: $0 \\notin \\{1\\}$ und $1+1=2 \\notin \\{1\\}$ ✗\n\n' +
          'Ein einziges Gegenbeispiel reicht aus, um zu zeigen, dass eine Menge keine Gruppe ist.',
      },
    ],
    loesung:
      '(a) Ja. $3\\mathbb{Z}$ ist unter Addition abgeschlossen, $0 \\in 3\\mathbb{Z}$, Inverses von $3z$ ist $-3z$.\n' +
      '(b) Nein. $2, 3 \\in G$, aber $2+3=5 \\notin G$.\n' +
      '(c) Ja. $G = 6\\mathbb{Z}$, unter Addition abgeschlossen, $0 \\in G$, additive Inverse in $G$.\n' +
      '(d) Nein für $+$ ($1+1=2 \\notin G$). Für Multiplikation ist $\\{1\\}$ eine Gruppe.',
    schwierigkeit: 'mittel',
    kategorie: 'Gruppen',
  },
  {
    id: 'b5_a2',
    titel: 'Gruppen auf positiven und komplexen Zahlen',
    aufgabeText:
      'Prüfen Sie jeweils, ob eine Gruppe vorliegt:\n' +
      '(a) $((0, \\infty), +)$\n' +
      '(b) $((0, \\infty), \\cdot)$\n' +
      '(c) $((-\\infty, 0), \\cdot)$\n' +
      '(d) $T = \\{z \\in \\mathbb{C} : |z| = 1\\}$ mit $\\cdot$\n' +
      '(e) $E = \\{z \\in \\mathbb{C} : z^4 = 1\\}$ mit $\\cdot$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Für Multiplikation gilt:\n' +
          '  Neutralelement: $1$ (nicht $0$!)\n' +
          '  Inverses von $x$: $\\frac{1}{x}$ (Kehrwert)\n' +
          '  Assoziativität: automatisch erfüllt\n\n' +
          'Die vier Gruppenaxiome:\n' +
          '  Abgeschlossenheit: Ist $a \\cdot b$ immer wieder in der Menge?\n' +
          '  Neutralelement: Liegt $1$ in der Menge?\n' +
          '  Inverses: Liegt $\\frac{1}{x}$ für alle $x$ in der Menge?\n\n' +
          'Nützliche Betragseigenschaft: $|z \\cdot w| = |z| \\cdot |w|$\n' +
          '  Für $T = \\{|z|=1\\}$: $|zw| = |z||w| = 1 \\cdot 1 = 1$ → Abgeschlossenheit!',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '(a) $(0,\\infty)$ unter Addition: Neutralelement $0 \\notin (0,\\infty)$ → keine Gruppe!\n\n' +
          '(b) $(0,\\infty)$ unter Multiplikation:\n' +
          '  Abgeschlossenheit: $x,y > 0 \\Rightarrow xy > 0$ ✓\n' +
          '  Neutralelement: $1 \\in (0,\\infty)$ ✓\n' +
          '  Inverses: $\\frac{1}{x} > 0$ für $x > 0$ ✓ → Gruppe!\n\n' +
          '(c) $(-\\infty,0)$ unter Multiplikation: $(-1)\\cdot(-1) = 1 \\notin (-\\infty,0)$ → nicht abgeschlossen!\n\n' +
          '(d) $T = \\{|z|=1\\}$: $|zw|=1$ ✓; $1 \\in T$ ✓; $\\frac{1}{z} = \\bar{z}$ und $|\\bar{z}|=|z|=1 \\in T$ ✓ → Gruppe!\n\n' +
          '(e) $E = \\{1, \\mathrm{i}, -1, -\\mathrm{i}\\}$ (4. Einheitswurzeln): Multiplikationstabelle aufstellen',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Für (e): $E = \\{1, \\mathrm{i}, -1, -\\mathrm{i}\\}$\n\n' +
          'Multiplikationstabelle (Ausschnitt):\n' +
          '  $\\mathrm{i} \\cdot \\mathrm{i} = -1 \\in E$ ✓\n' +
          '  $\\mathrm{i} \\cdot (-1) = -\\mathrm{i} \\in E$ ✓\n' +
          '  $(-\\mathrm{i}) \\cdot (-\\mathrm{i}) = \\mathrm{i}^2 = -1 \\in E$ ✓\n\n' +
          'Inverse in $E$:\n' +
          '  $1^{-1} = 1$,  $\\mathrm{i}^{-1} = -\\mathrm{i}$ (denn $\\mathrm{i}\\cdot(-\\mathrm{i}) = 1$)\n' +
          '  $(-1)^{-1} = -1$,  $(-\\mathrm{i})^{-1} = \\mathrm{i}$ ✓\n\n' +
          'Alle Inversen liegen in $E$: Gruppe!',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Neutralelement der Addition ist $0$, der Multiplikation ist $1$. Diese nie verwechseln!\n\n' +
          '• (a): $(0,\\infty)$ enthält die $0$ NICHT (offenes Intervall), daher fehlt das Neutralelement der Addition.\n\n' +
          '• (c): Zwei negative Zahlen multipliziert ergeben eine POSITIVE – also verlässt man die Menge.\n\n' +
          '• Für $T$: Das Inverse von $z = e^{\\mathrm{i}\\varphi}$ ist $e^{-\\mathrm{i}\\varphi} = \\bar{z}$, liegt immer auf $T$.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Für jede Nicht-Gruppe – welches Axiom scheitert?\n' +
          '  (a): Neutralelement ($0 \\notin (0,\\infty)$)\n' +
          '  (c): Abgeschlossenheit ($(-1)(-1) = 1 \\notin (-\\infty,0)$)\n\n' +
          'Für (d) und (e): Ist die Menge unter Multiplikation abgeschlossen?\n' +
          '  $z, w \\in T$: $|zw| = |z||w| = 1$ → $zw \\in T$ ✓',
      },
    ],
    loesung:
      '(a) Nein. Kein Neutralelement ($0 \\notin (0,\\infty)$).\n' +
      '(b) Ja. Abgeschlossen, Neutralelement $1$, Inverses $1/x$.\n' +
      '(c) Nein. Nicht abgeschlossen ($(-1)(-1)=1 \\notin (-\\infty,0)$).\n' +
      '(d) Ja. $|zw|=1$, $1 \\in T$, $z^{-1}=\\bar{z} \\in T$.\n' +
      '(e) Ja. $E=\\{1,\\mathrm{i},-1,-\\mathrm{i}\\}$ ist unter Multiplikation abgeschlossen, alle Inversen liegen in $E$.',
    schwierigkeit: 'mittel',
    kategorie: 'Gruppen',
  },
  {
    id: 'b5_a3',
    titel: 'Verknüpfung auf $\\mathbb{Q}$ ohne Null',
    aufgabeText:
      'Die Verknüpfung $\\odot$ auf $\\mathbb{Q} \\setminus \\{0\\}$ sei definiert durch $x \\odot y := \\frac{1}{4} \\cdot x \\cdot y$.\n' +
      'Bestimmen Sie das Neutralelement der Gruppe und das Inverse zu $x \\in \\mathbb{Q} \\setminus \\{0\\}$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Das Neutralelement $e$ einer Verknüpfung $\\odot$ ist das Element, das andere unverändert lässt:\n' +
          '  $e \\odot x = x$ für alle $x$ (linksneutral)\n' +
          '  $x \\odot e = x$ für alle $x$ (rechtsneutral)\n\n' +
          'Das Inverse $x^{-1}$ zu $x$ erfüllt:\n' +
          '  $x \\odot x^{-1} = e$ und $x^{-1} \\odot x = e$\n\n' +
          'Wichtig: Das Neutralelement hängt von der Verknüpfung ab, nicht von der Menge! Für die Verknüpfung $x \\odot y = \\frac{1}{4}xy$ ist $e \\neq 1$.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Neutralelement bestimmen:\n' +
          '  Setze $e \\odot x = x$ ein: $\\frac{1}{4} \\cdot e \\cdot x = x$\n' +
          '  Vereinfachen: $\\frac{e}{4} = 1 \\Rightarrow e = 4$\n' +
          '  Probe: $4 \\odot x = \\frac{1}{4} \\cdot 4 \\cdot x = x$ ✓\n\n' +
          'Inverses bestimmen:\n' +
          '  Setze $x \\odot y = e = 4$ ein: $\\frac{1}{4} \\cdot x \\cdot y = 4$\n' +
          '  Löse nach $y$: $x \\cdot y = 16 \\Rightarrow y = \\frac{16}{x}$\n' +
          '  Das Inverse von $x$ ist also $x^{-1} = \\frac{16}{x}$\n' +
          '  Probe: $x \\odot \\frac{16}{x} = \\frac{1}{4} \\cdot x \\cdot \\frac{16}{x} = \\frac{16}{4} = 4 = e$ ✓',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Allgemeine Methode für $x \\star y = c \\cdot x \\cdot y$ (mit Konstante $c \\neq 0$):\n\n' +
          'Neutralelement: $c \\cdot e \\cdot x = x \\Rightarrow e = \\frac{1}{c}$\n\n' +
          'Inverses: $c \\cdot x \\cdot x^{-1} = e = \\frac{1}{c}$\n' +
          '  $x \\cdot x^{-1} = \\frac{1}{c^2} \\Rightarrow x^{-1} = \\frac{1}{c^2 x}$\n\n' +
          'Für $c = \\frac{1}{4}$:\n' +
          '  $e = \\frac{1}{1/4} = 4$\n' +
          '  $x^{-1} = \\frac{1}{(1/4)^2 x} = \\frac{1}{\\frac{1}{16}x} = \\frac{16}{x}$ ✓',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Das Neutralelement ist NICHT $1$: Bei der normalen Multiplikation ist $e=1$, aber hier ändert die Konstante $\\frac{1}{4}$ das Neutralelement.\n\n' +
          '• Das Inverse ist NICHT $\\frac{1}{x}$: Das normale Multiplikationsinverse ist $\\frac{1}{x}$, aber die Verknüpfung $\\odot$ hat ein anderes Inverses.\n\n' +
          '• Neutralelement muss von BEIDEN Seiten prüfen: $e \\odot x = x$ und $x \\odot e = x$. (Hier ist $\\odot$ kommutativ, also reicht eine Seite.)',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Probe Neutralelement: $4 \\odot 7 = \\frac{1}{4} \\cdot 4 \\cdot 7 = 7$ ✓\n\n' +
          'Probe Inverses: $3 \\odot \\frac{16}{3} = \\frac{1}{4} \\cdot 3 \\cdot \\frac{16}{3} = \\frac{16}{4} = 4 = e$ ✓\n\n' +
          'Liegt das Inverse $\\frac{16}{x}$ immer in $\\mathbb{Q} \\setminus \\{0\\}$? Ja, denn $x \\neq 0$ und $\\frac{16}{x} \\neq 0$ ✓',
      },
    ],
    loesung:
      'Neutralelement: $e = 4$ (denn $\\frac{1}{4} \\cdot 4 \\cdot x = x$).\n\n' +
      'Inverses zu $x$: $x^{-1} = \\dfrac{16}{x}$ (denn $x \\odot \\frac{16}{x} = \\frac{1}{4} \\cdot 16 = 4 = e$).',
    schwierigkeit: 'schwer',
    kategorie: 'Gruppen',
  },
  {
    id: 'b5_a4',
    titel: 'Rechnen in $\\mathbb{Z}_9$ und $\\mathbb{Z}_{12345}$',
    aufgabeText:
      'Berechnen Sie:\n' +
      '(a) in $\\mathbb{Z}_9$: $[21] + [17]$,  $[-29] + [-4]$,  $[6] \\cdot [12]$\n' +
      '(b) in $\\mathbb{Z}_{12345}$: $[12346] \\cdot [6613]$\n' +
      '(c) Entscheiden Sie, ob man in $\\mathbb{Z}_6$ bei der Multiplikation kürzen darf.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          '$\\mathbb{Z}_n = \\{[0], [1], [2], \\ldots, [n-1]\\}$ ist die Menge der Restklassen modulo $n$.\n\n' +
          'Restklasse $[k]$ enthält alle ganzen Zahlen, die bei Division durch $n$ denselben Rest wie $k$ haben:\n' +
          '  $[k] = \\{\\ldots, k-2n, k-n, k, k+n, k+2n, \\ldots\\}$\n\n' +
          'Rechnen in $\\mathbb{Z}_n$: Erst reduzieren (Rest bestimmen), dann rechnen:\n' +
          '  $[a] + [b] = [a + b \\mod n]$\n' +
          '  $[a] \\cdot [b] = [a \\cdot b \\mod n]$\n\n' +
          'Kürzen in $\\mathbb{Z}_n$: Nur erlaubt wenn der Kürzer teilerfremd zu $n$ ist (d.h. $\\gcd(k, n) = 1$).',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '1. Reduktion: Finde den Rest bei Division durch $n$ (nutze den Divisionsalgorithmus).\n' +
          '   $21 \\div 9 = 2$ Rest $3$ → $[21] = [3]$ in $\\mathbb{Z}_9$\n' +
          '   $-29 \\div 9$: $-29 = -4 \\cdot 9 + 7$ → $[-29] = [7]$ (Rest immer $\\geq 0$)\n\n' +
          '2. Rechnen mit reduzierten Werten:\n' +
          '   $[3] + [8] = [11] = [2]$ in $\\mathbb{Z}_9$ (da $11 \\mod 9 = 2$)\n\n' +
          '(b) $12346 = 12345 + 1$, also $[12346] = [1]$ in $\\mathbb{Z}_{12345}$\n' +
          '   $[1] \\cdot [6613] = [6613]$\n\n' +
          '(c) Gegenbeispiel: $[2]\\cdot[4] = [8]$ und $[2]\\cdot[1] = [2]$ in $\\mathbb{Z}_6$.\n' +
          '   Vereinfache: $[8] = [2] = [2]$ → $[2]\\cdot[4] = [2]\\cdot[1]$, aber $[4] \\neq [1]$!',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Negative Zahlen reduzieren: $-29 \\mod 9$\n' +
          '  Finde das größte Vielfache von $9$, das $\\leq -29$ ist: $-4 \\cdot 9 = -36 \\leq -29$ ✓\n' +
          '  Rest: $-29 - (-36) = 7$ → $[-29] = [7]$ in $\\mathbb{Z}_9$\n\n' +
          'Allgemeine Formel: $a \\mod n = a - n \\cdot \\lfloor a/n \\rfloor$\n\n' +
          'Für (a):\n' +
          '  $[21]+[17] = [38] = [38-4\\cdot9] = [38-36] = [2]$\n' +
          '  $[-29]+[-4] = [7]+[5] = [12] = [3]$\n' +
          '  $[6]\\cdot[12] = [6]\\cdot[3] = [18] = [0]$',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Negative Reste: $-29 \\mod 9$ ist NICHT $-2$! Der Rest muss immer $\\geq 0$ sein. Addiere solange $n$, bis der Rest nicht-negativ ist.\n\n' +
          '• (b): $[12346] = [1]$ in $\\mathbb{Z}_{12345}$, denn $12346 - 12345 = 1$. Einfach!\n\n' +
          '• Kürzen: In $\\mathbb{Z}_6$ darf man $[2]$ NICHT wegkürzen, weil $\\gcd(2, 6) = 2 \\neq 1$. Man darf nur kürzen, wenn der Faktor teilerfremd zu $n$ ist.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Probe: Liegt das Ergebnis immer in $\\{[0],[1],\\ldots,[n-1]\\}$?\n\n' +
          'Für $[6]\\cdot[12]$ in $\\mathbb{Z}_9$: $6 \\cdot 12 = 72 = 8 \\cdot 9 + 0$ → $[0]$ ✓\n\n' +
          'Kürzen-Test in $\\mathbb{Z}_6$: $[3]\\cdot[2] = [6] = [0]$ und $[3]\\cdot[4] = [12] = [0]$\n' +
          '  → $[3]\\cdot[2] = [3]\\cdot[4]$, aber $[2] \\neq [4]$ → Kürzen nicht erlaubt! ✓',
      },
    ],
    loesung:
      '(a) $[21]+[17]=[2]$,  $[-29]+[-4]=[3]$,  $[6]\\cdot[12]=[0]$.\n' +
      '(b) $[12346]=[1]$, also $[12346]\\cdot[6613]=[6613]$.\n' +
      '(c) Nein. Gegenbeispiel: $[2]\\cdot[4]=[2]\\cdot[1]$ in $\\mathbb{Z}_6$, aber $[4]\\neq[1]$.',
    schwierigkeit: 'einfach',
    kategorie: 'Restklassen',
  },
  {
    id: 'b5_a5',
    titel: 'Symmetrische Gruppe $S_3$',
    aufgabeText:
      'Laut Vorlesung ist $S_3 = \\{f : \\{1,2,3\\} \\to \\{1,2,3\\} \\mid f \\text{ bijektiv}\\}$ mit der Hintereinanderführung $\\circ$ eine Gruppe.\n' +
      '(a) Listen Sie alle Abbildungen in der Darstellung mit drei Zeilen auf.\n' +
      '(b) Geben Sie das Neutralelement an.\n' +
      '(c) Geben Sie zu jedem $f \\in S_3$ das Inverse an.\n' +
      '(d) Zeigen Sie, dass $(S_3, \\circ)$ nicht kommutativ ist.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          '$S_3$ ist die Gruppe aller Permutationen (bijektiven Abbildungen) der Menge $\\{1,2,3\\}$.\n\n' +
          'Darstellung im Zweizeilenschema:\n' +
          '  $f = \\begin{pmatrix} 1 & 2 & 3 \\\\ f(1) & f(2) & f(3) \\end{pmatrix}$\n\n' +
          'Es gibt $3! = 6$ bijektive Abbildungen von $\\{1,2,3\\}$ nach $\\{1,2,3\\}$.\n\n' +
          'Komposition $f \\circ g$: Erst $g$ anwenden, dann $f$:\n' +
          '  $(f \\circ g)(x) = f(g(x))$\n\n' +
          'Inverses $f^{-1}$: Die Umkehrabbildung – „rückwärts lesen".\n' +
          '  Wenn $f(1)=2$, dann $f^{-1}(2)=1$.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '(a) Systematisch alle Permutationen auflisten:\n' +
          '  Bilde alle möglichen Zuordnungen $1\\to a$, $2\\to b$, $3\\to c$ mit $\\{a,b,c\\}=\\{1,2,3\\}$:\n' +
          '  $\\mathrm{id}$, $(12)$, $(13)$, $(23)$, $(123)$, $(132)$\n\n' +
          '(b) Neutralelement = Identität: $\\mathrm{id}(k) = k$ für alle $k$\n\n' +
          '(c) Inverses: Kehre die Pfeile um. Für Transpositionen $(12)$, $(13)$, $(23)$: Das Inverse ist die Transposition selbst. Für $3$-Zyklen: $(123)^{-1} = (132)$\n\n' +
          '(d) Nicht-Kommutativität: Finde $f, g$ mit $f \\circ g \\neq g \\circ f$. Probiere zwei verschiedene Transpositionen.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Die 6 Elemente von $S_3$:\n' +
          '  $\\mathrm{id} = \\begin{pmatrix}1&2&3\\\\1&2&3\\end{pmatrix}$\n' +
          '  $(12) = \\begin{pmatrix}1&2&3\\\\2&1&3\\end{pmatrix}$\n' +
          '  $(13) = \\begin{pmatrix}1&2&3\\\\3&2&1\\end{pmatrix}$\n' +
          '  $(23) = \\begin{pmatrix}1&2&3\\\\1&3&2\\end{pmatrix}$\n' +
          '  $(123) = \\begin{pmatrix}1&2&3\\\\2&3&1\\end{pmatrix}$\n' +
          '  $(132) = \\begin{pmatrix}1&2&3\\\\3&1&2\\end{pmatrix}$\n\n' +
          'Komposition $(12) \\circ (23)$: Erst $(23)$, dann $(12)$:\n' +
          '  $1 \\xrightarrow{(23)} 1 \\xrightarrow{(12)} 2$;  $2 \\xrightarrow{(23)} 3 \\xrightarrow{(12)} 3$;  $3 \\xrightarrow{(23)} 2 \\xrightarrow{(12)} 1$\n' +
          '  → $(12)\\circ(23) = (132)$\n\n' +
          'Umgekehrt $(23)\\circ(12)$:\n' +
          '  $1\\xrightarrow{(12)}2\\xrightarrow{(23)}3$; $2\\xrightarrow{(12)}1\\xrightarrow{(23)}1$; $3\\xrightarrow{(12)}3\\xrightarrow{(23)}2$\n' +
          '  → $(23)\\circ(12) = (123) \\neq (132)$',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Reihenfolge bei $f \\circ g$: Erst $g$, dann $f$ (von rechts nach links!). Viele verwechseln die Reihenfolge.\n\n' +
          '• Inverse von $3$-Zyklen: $(123)^{-1} = (132)$ (umgekehrter Richtungssinn), NICHT $(123)$ selbst.\n\n' +
          '• Nicht-Kommutativität: Ein einziges Gegenbeispiel reicht – es muss nicht alle Paare zeigen.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Sind genau 6 Elemente aufgelistet ($3! = 6$)?\n\n' +
          'Probe Inverses: $(12)\\circ(12)$:\n' +
          '  $1\\to2\\to1$, $2\\to1\\to2$, $3\\to3\\to3$ → $= \\mathrm{id}$ ✓\n\n' +
          'Nicht-Kommutativität: $(12)\\circ(23) = (132)$ und $(23)\\circ(12) = (123)$, da $(132)\\neq(123)$ ✓',
      },
    ],
    loesung:
      '(a) $S_3$ hat $6$ Elemente: $\\mathrm{id}$, $(12)$, $(13)$, $(23)$, $(123)$, $(132)$.\n' +
      '(b) Neutralelement: $\\mathrm{id}$.\n' +
      '(c) Inverse: $\\mathrm{id}^{-1}=\\mathrm{id}$; $(12)^{-1}=(12)$; $(13)^{-1}=(13)$; $(23)^{-1}=(23)$; $(123)^{-1}=(132)$; $(132)^{-1}=(123)$.\n' +
      '(d) Gegenbeispiel: $(12)\\circ(23) = (132) \\neq (123) = (23)\\circ(12)$.',
    schwierigkeit: 'schwer',
    kategorie: 'Symmetrische Gruppen',
  },
  {
    id: 'b5_a6',
    titel: 'Verknüpfungstafel einer Dreiergruppe',
    aufgabeText:
      'Ergänzen Sie die Verknüpfungstafel so, dass $(G, *)$ eine Gruppe wird, wobei $G = \\{a, b, c\\}$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Eine Verknüpfungstafel (Cayley-Tafel) für eine Gruppe $G$ mit $n$ Elementen ist eine $n \\times n$-Tabelle, die das Ergebnis $x * y$ für alle Paare $(x, y)$ angibt.\n\n' +
          'Grundeigenschaften einer Gruppenverknüpfungstafel:\n' +
          '  1. Latin-Square-Eigenschaft: In jeder Zeile und jeder Spalte erscheint jedes Element genau EINMAL.\n' +
          '     (Folgt aus Kürzbarkeit in Gruppen)\n\n' +
          '  2. Das Neutralelement $e$ lässt die anderen Elemente unverändert:\n' +
          '     In der Zeile von $e$ stehen die Elemente in derselben Reihenfolge wie der Tabellenkopf\n' +
          '     In der Spalte von $e$ stehen sie in derselben Reihenfolge wie der Tabellenrand\n\n' +
          '  3. Eine Gruppe mit 3 Elementen ist immer zyklisch (isomorph zu $\\mathbb{Z}_3$).',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '1. Finde das Neutralelement $e$:\n' +
          '   Schaue welches Element $e$ in jeder Zeile und Spalte die anderen unverändert lässt.\n' +
          '   Oder: Löse $x * e = x$ für alle $x$.\n\n' +
          '2. Fülle die Zeile und Spalte des Neutralelements aus:\n' +
          '   $e * x = x * e = x$\n\n' +
          '3. Verwende die Latin-Square-Eigenschaft für die restlichen Einträge:\n' +
          '   In jeder Zeile und Spalte darf jedes Element nur einmal vorkommen.\n\n' +
          '4. Überprüfe Assoziativität (für kleine Gruppen automatisch erfüllt, wenn Latin-Square stimmt).',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Gruppe $\\mathbb{Z}_3 = \\{[0],[1],[2]\\}$ mit Addition:\n\n' +
          '  + | [0] [1] [2]\n' +
          ' [0]| [0] [1] [2]\n' +
          ' [1]| [1] [2] [0]\n' +
          ' [2]| [2] [0] [1]\n\n' +
          'Entsprechend mit $\\{a,b,c\\}$ und $b$ = Neutralelement:\n\n' +
          '  * | a  b  c\n' +
          '  a | ?  a  ?\n' +
          '  b | a  b  c\n' +
          '  c | ?  c  ?\n\n' +
          'Latin-Square: In Zeile $a$: $a$ schon bei $a*b$, also $a*a \\in \\{b,c\\}$ und $a*c \\in \\{b,c\\}$ – sie dürfen nicht gleich sein.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Latin-Square reicht NICHT automatisch für eine Gruppe: Assoziativität muss erfüllt sein. Aber für Ordnung 3 gibt es nur eine Gruppenstruktur (die zyklische $\\mathbb{Z}_3$).\n\n' +
          '• Das Neutralelement muss in der Zeile/Spalte die Elemente in DERSELBEN Reihenfolge wiederholen wie der Header.\n\n' +
          '• $a * a \\neq a$ (außer wenn $a = e$): Ein nicht-neutrales Element ist i.A. nicht idempotent.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Erscheint jedes Element genau einmal in jeder Zeile und Spalte? ✓\n\n' +
          'Ist $b$ wirklich das Neutralelement: $b*a=a$, $b*b=b$, $b*c=c$? ✓\n\n' +
          'Probe Assoziativität: $(a*c)*a = a*(c*a)$? Beide Seiten berechnen und vergleichen.',
      },
    ],
    loesung:
      'Das Neutralelement ist $b$. Die Tafel entspricht der zyklischen Gruppe $\\mathbb{Z}_3$:\n\n' +
      '$a*a=c$,  $a*b=a$,  $a*c=b$\n' +
      '$b*x=x$ für alle $x$\n' +
      '$c*a=b$,  $c*b=c$,  $c*c=a$',
    schwierigkeit: 'schwer',
    kategorie: 'Gruppen',
  },
]
