import type { Aufgabe } from '../../types'

export const b6: Aufgabe[] = [
  {
    id: 'b6_a1',
    titel: 'Komplexe Einheitsgruppe',
    aufgabeText:
      'Prüfen Sie, ob $M = \\{1, -1, \\mathrm{i}, -\\mathrm{i}\\}$ mit komplexer Multiplikation eine Gruppe ist.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Eine Menge $G$ mit einer Verknüpfung $\\cdot$ ist eine **Gruppe**, wenn vier Axiome erfüllt sind:\n\n1. **Abgeschlossenheit**: Für alle $a, b \\in G$ gilt $a \\cdot b \\in G$.\n2. **Assoziativität**: Für alle $a, b, c \\in G$ gilt $(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$.\n3. **Neutrales Element**: Es gibt ein $e \\in G$ mit $e \\cdot a = a \\cdot e = a$ für alle $a \\in G$.\n4. **Inverse**: Zu jedem $a \\in G$ gibt es ein $a^{-1} \\in G$ mit $a \\cdot a^{-1} = e$.\n\nFür die Multiplikation komplexer Zahlen gilt: $|z_1 \\cdot z_2| = |z_1| \\cdot |z_2|$. Alle Elemente von $M$ haben Betrag 1, was die Abgeschlossenheit plausibel macht.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Prüfen Sie jeden Gruppenaxiom der Reihe nach:\n\n**Schritt 1 – Abgeschlossenheit**: Erstellen Sie die vollständige Multiplikationstabelle für alle 16 Kombinationen. Überprüfen Sie, ob jedes Ergebnis wieder in $M$ liegt.\n\n**Schritt 2 – Assoziativität**: Da die Multiplikation in $\\mathbb{C}$ generell assoziativ ist, gilt dies automatisch auch für $M$.\n\n**Schritt 3 – Neutrales Element**: Identifizieren Sie, welches Element $e \\in M$ die Gleichung $e \\cdot a = a$ für alle $a \\in M$ erfüllt.\n\n**Schritt 4 – Inverse**: Geben Sie zu jedem Element $a \\in M$ sein Inverses $a^{-1} \\in M$ an, sodass $a \\cdot a^{-1} = e$.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Erinnerung an die Multiplikation mit $\\mathrm{i}$: Es gilt $\\mathrm{i}^2 = -1$.\n\nBeispielrechnungen:\n$\\mathrm{i} \\cdot \\mathrm{i} = \\mathrm{i}^2 = -1 \\in M$ ✓\n$\\mathrm{i} \\cdot (-\\mathrm{i}) = -(\\mathrm{i}^2) = -(-1) = 1 \\in M$ ✓\n$(-1) \\cdot (-\\mathrm{i}) = \\mathrm{i} \\in M$ ✓\n\nInverse eines Elements $z$ mit $|z| = 1$: $z^{-1} = \\bar{z}$ (konjugiert).\nAlso: $\\mathrm{i}^{-1} = \\overline{\\mathrm{i}} = -\\mathrm{i}$, und $(-\\mathrm{i})^{-1} = -\\overline{(-\\mathrm{i})} = \\mathrm{i}$.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• **Unvollständige Tabelle**: Nicht alle 16 Produkte prüfen und einen übersehen.\n\n• **Assoziativität extra beweisen**: Da $M \\subset \\mathbb{C}$ und die komplexe Multiplikation assoziativ ist, genügt ein kurzer Verweis darauf.\n\n• **Inverses verwechseln**: Das Inverse von $\\mathrm{i}$ in $\\mathbb{C}$ ist $\\frac{1}{\\mathrm{i}} = -\\mathrm{i}$, nicht $\\frac{1}{\\mathrm{i}} = \\mathrm{i}$. Merken: $\\mathrm{i} \\cdot (-\\mathrm{i}) = 1$.\n\n• **Nur Betrag prüfen**: Betrag 1 allein garantiert noch keine Gruppe – die vier Axiome müssen explizit geprüft werden.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Welches Element ist das Inverse von $-1$ in $M$?\n\nHinweis: Berechnen Sie $(-1) \\cdot x = 1$ für $x \\in M$.\n\nWenn Sie $x = -1$ erhalten: Stimmt das auch geometrisch? (Drehung um 180° zweimal = Drehung um 360° = Identität ✓)',
      },
    ],
    loesung:
      'Ja. $1$ ist neutrales Element, die Menge ist unter Multiplikation abgeschlossen, und jedes Element hat ein Inverses in $M$: $1^{-1}=1$, $(-1)^{-1}=-1$, $\\mathrm{i}^{-1}=-\\mathrm{i}$, $(-\\mathrm{i})^{-1}=\\mathrm{i}$.',
    schwierigkeit: 'einfach',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b6_a2',
    titel: 'Ordnungen in Z12',
    aufgabeText:
      'Bestimmen Sie die Ordnung jedes Elements in $\\mathbb{Z}_{12}$ und geben Sie die Nebenklassen der Untergruppe $\\langle 4 \\rangle$ an.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Die **Ordnung eines Elements** $[k]$ in der Gruppe $(\\mathbb{Z}_n, +)$ ist die kleinste positive ganze Zahl $d$, sodass $d \\cdot [k] = [0]$ gilt. Es gilt die Formel:\n$$\\text{ord}([k]) = \\frac{n}{\\text{ggT}(k, n)}$$\n\nDie **von einem Element erzeugte Untergruppe** ist:\n$$\\langle [k] \\rangle = \\{0, k, 2k, 3k, \\ldots\\} \\pmod{n}$$\n\n**Nebenklassen**: Ist $H = \\langle [4] \\rangle$ eine Untergruppe von $\\mathbb{Z}_{12}$, dann sind die (Rechts-)Nebenklassen die Mengen $[j] + H$ für $j = 0, 1, 2, 3$. Jede Nebenklasse enthält genau $|H|$ Elemente, und alle Nebenklassen sind disjunkt.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '**Ordnungen berechnen** (für alle $k = 0, 1, \\ldots, 11$):\n\nWenden Sie die Formel $\\text{ord}([k]) = \\frac{12}{\\text{ggT}(k, 12)}$ an.\n\nBeispiel: $\\text{ord}([4]) = \\frac{12}{\\text{ggT}(4,12)} = \\frac{12}{4} = 3$.\n\n**Untergruppe $\\langle 4 \\rangle$ bestimmen**:\n\nBerechnen Sie $0 \\cdot 4$, $1 \\cdot 4$, $2 \\cdot 4$, $3 \\cdot 4$ modulo 12 usw., bis Sie wieder 0 erreichen.\n\n**Nebenklassen bilden**:\n\nWählen Sie Vertreter $j$, die noch nicht in einer bereits berechneten Nebenklasse liegen, und bilde jeweils $j + H = \\{j + h \\mid h \\in H\\}$.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'In $\\mathbb{Z}_6$ (kleineres Beispiel):\n$\\langle [2] \\rangle = \\{[0], [2], [4]\\}$, also $|\\langle 2 \\rangle| = 3$, und $\\text{ord}([2]) = 3$.\n\nNebenklassen von $\\langle [2] \\rangle$ in $\\mathbb{Z}_6$:\n$[0] + \\langle 2 \\rangle = \\{0, 2, 4\\}$\n$[1] + \\langle 2 \\rangle = \\{1, 3, 5\\}$\n\nDas übertragen Sie nun auf $\\mathbb{Z}_{12}$ mit $\\langle [4] \\rangle$:\nBerechnen Sie zuerst $\\langle 4 \\rangle = \\{4 \\cdot 0, 4 \\cdot 1, 4 \\cdot 2 \\pmod{12}\\} = \\{0, 4, 8\\}$.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• **ggT falsch berechnet**: Bei $k = 0$ gilt $\\text{ggT}(0, 12) = 12$, also $\\text{ord}([0]) = 1$ (das neutrale Element hat immer Ordnung 1).\n\n• **Nebenklassen nicht vollständig**: Prüfen Sie, ob alle 12 Elemente auf genau eine Nebenklasse verteilt sind (Satz von Lagrange: $|\\mathbb{Z}_{12}| / |H|$ viele Nebenklassen).\n\n• **Additive statt multiplikative Gruppe**: In $\\mathbb{Z}_{12}$ ist die Gruppenoperation die **Addition**, nicht die Multiplikation! Die Nebenklassen heißen $j + H$, nicht $j \\cdot H$.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Wie viele Nebenklassen hat $\\langle [4] \\rangle$ in $\\mathbb{Z}_{12}$, und wie viele Elemente enthält jede?\n\nHinweis: Nutzen Sie den Satz von Lagrange: $[\\mathbb{Z}_{12} : H] = \\frac{|\\mathbb{Z}_{12}|}{|H|}$.\n\nWenn Sie 4 Nebenklassen mit je 3 Elementen erhalten, ist Ihre Antwort korrekt (da $12 / 3 = 4$).',
      },
    ],
    loesung:
      'Die Ordnungen sind: $[0]$ hat Ordnung 1; $[1], [5], [7], [11]$ haben Ordnung 12; $[2], [10]$ haben Ordnung 6; $[3], [9]$ haben Ordnung 4; $[4], [8]$ haben Ordnung 3; $[6]$ hat Ordnung 2. Die Nebenklassen von $\\langle 4 \\rangle = \\{0,4,8\\}$ sind: $\\{0,4,8\\}$, $\\{1,5,9\\}$, $\\{2,6,10\\}$, $\\{3,7,11\\}$.',
    schwierigkeit: 'mittel',
    kategorie: 'Restklassen',
  },
  {
    id: 'b6_a3',
    titel: 'Invertierbare Matrizen',
    aufgabeText:
      'Prüfen Sie, ob die Menge aller invertierbaren $2 \\times 2$-Matrizen über $\\mathbb{R}$ unter Multiplikation eine Gruppe bildet.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Eine $2 \\times 2$-Matrix $A$ ist **invertierbar** (regulär) genau dann, wenn $\\det(A) \\neq 0$.\n\nDie Menge dieser Matrizen bezeichnet man als $\\mathrm{GL}_2(\\mathbb{R})$ (Allgemeine Lineare Gruppe). Um zu zeigen, dass sie eine Gruppe ist, müssen die vier Gruppenaxiome geprüft werden.\n\nNützliche Determinanten-Regeln:\n$$\\det(A \\cdot B) = \\det(A) \\cdot \\det(B)$$\n$$\\det(A^{-1}) = \\frac{1}{\\det(A)}$$\n$$\\det(E) = 1 \\quad (\\text{Einheitsmatrix})$$',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '**Schritt 1 – Abgeschlossenheit**: Seien $A, B \\in \\mathrm{GL}_2(\\mathbb{R})$, d.h. $\\det(A) \\neq 0$ und $\\det(B) \\neq 0$. Zeigen Sie: $\\det(A \\cdot B) = \\det(A) \\cdot \\det(B) \\neq 0$, also $A \\cdot B \\in \\mathrm{GL}_2(\\mathbb{R})$.\n\n**Schritt 2 – Assoziativität**: Matrizenmultiplikation ist generell assoziativ (bekannte Tatsache).\n\n**Schritt 3 – Neutrales Element**: Die Einheitsmatrix $E = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ hat $\\det(E) = 1 \\neq 0$ und ist damit in der Menge.\n\n**Schritt 4 – Inverse**: Für $A$ mit $\\det(A) \\neq 0$ existiert $A^{-1}$, und $\\det(A^{-1}) = \\frac{1}{\\det(A)} \\neq 0$, also $A^{-1} \\in \\mathrm{GL}_2(\\mathbb{R})$.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Beispiel: $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$, $B = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\end{pmatrix}$.\n\n$\\det(A) = 6 \\neq 0$, $\\det(B) = -1 \\neq 0$.\n\n$A \\cdot B = \\begin{pmatrix} 3 & 2 \\\\ 3 & 0 \\end{pmatrix}$, $\\det(A \\cdot B) = 0 - 6 = -6 = \\det(A) \\cdot \\det(B)$ ✓\n\nAllgemeine Inverse einer $2 \\times 2$-Matrix:\n$$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}^{-1} = \\frac{1}{ad-bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• **Alle Matrizen statt nur invertierbare**: Die Menge **aller** $2 \\times 2$-Matrizen bildet keine Gruppe (nicht invertierbare Matrizen haben kein Inverses).\n\n• **Kommutativität annehmen**: $\\mathrm{GL}_2(\\mathbb{R})$ ist keine abelsche Gruppe – Matrizenmultiplikation ist im Allgemeinen nicht kommutativ. Das ist aber kein Gruppenaxiom!\n\n• **Neutrales Element vergessen zu prüfen**: Zeigen Sie explizit, dass $E \\in \\mathrm{GL}_2(\\mathbb{R})$ (was trivial ist: $\\det(E) = 1 \\neq 0$).',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Warum bildet die Menge aller $2 \\times 2$-Matrizen (ohne die Einschränkung auf invertierbare) keine Gruppe?\n\nHinweis: Welches Gruppenaxiom ist verletzt? Welche Matrix hätte kein Inverses?\n\nAntwort: Die Nullmatrix $O = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$ ist nicht invertierbar – das Axiom der Inversen ist verletzt.',
      },
    ],
    loesung:
      'Ja. Das neutrale Element ist die Einheitsmatrix $E$, das Produkt invertierbarer Matrizen ist wieder invertierbar (da $\\det(AB) = \\det(A)\\det(B) \\neq 0$), und die Inverse jeder invertierbaren Matrix existiert und liegt wieder in der Menge.',
    schwierigkeit: 'mittel',
    kategorie: 'Matrizen',
  },
  {
    id: 'b6_a4',
    titel: 'Kubische Einheitswurzeln',
    aufgabeText:
      'Berechnen Sie die kubischen Einheitswurzeln in $\\mathbb{C}$ und zeigen Sie, dass diese unter Multiplikation eine Gruppe bilden.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Die **$n$-ten Einheitswurzeln** sind die Lösungen der Gleichung $z^n = 1$ in $\\mathbb{C}$. Für $n = 3$ suchen Sie alle $z \\in \\mathbb{C}$ mit $z^3 = 1$.\n\nMit der **Euler-Formel** $e^{\\mathrm{i}\\varphi} = \\cos\\varphi + \\mathrm{i}\\sin\\varphi$ und Polardarstellung $z = r \\cdot e^{\\mathrm{i}\\varphi}$ folgt:\n$$z^3 = r^3 \\cdot e^{\\mathrm{i} \\cdot 3\\varphi} = 1 = 1 \\cdot e^{\\mathrm{i} \\cdot 0}$$\n\nDaraus: $r = 1$ und $3\\varphi = 2\\pi k$ für $k = 0, 1, 2$, also $\\varphi_k = \\frac{2\\pi k}{3}$.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '**Schritt 1 – Wurzeln berechnen**:\nSetzen Sie $k = 0, 1, 2$ und berechnen Sie $\\omega_k = e^{2\\pi\\mathrm{i}k/3}$.\n\n**Schritt 2 – Gruppenaxiome prüfen**:\nDie Menge $W_3 = \\{\\omega_0, \\omega_1, \\omega_2\\}$:\n- **Abgeschlossenheit**: $\\omega_j \\cdot \\omega_k = e^{2\\pi\\mathrm{i}(j+k)/3}$. Da $j+k \\pmod{3} \\in \\{0,1,2\\}$, liegt das Ergebnis wieder in $W_3$.\n- **Neutrales Element**: $\\omega_0 = e^0 = 1$.\n- **Inverse**: $\\omega_k^{-1} = \\omega_{3-k} = \\overline{\\omega_k}$ (da $|\\omega_k| = 1$).\n- **Assoziativität**: Folgt aus der Assoziativität in $\\mathbb{C}$.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Die drei kubischen Einheitswurzeln explizit:\n\n$\\omega_0 = 1$\n\n$\\omega_1 = e^{2\\pi\\mathrm{i}/3} = \\cos\\frac{2\\pi}{3} + \\mathrm{i}\\sin\\frac{2\\pi}{3} = -\\frac{1}{2} + \\frac{\\sqrt{3}}{2}\\mathrm{i}$\n\n$\\omega_2 = e^{4\\pi\\mathrm{i}/3} = \\cos\\frac{4\\pi}{3} + \\mathrm{i}\\sin\\frac{4\\pi}{3} = -\\frac{1}{2} - \\frac{\\sqrt{3}}{2}\\mathrm{i}$\n\nProbe: $\\omega_1 \\cdot \\omega_2 = e^{2\\pi\\mathrm{i}/3} \\cdot e^{4\\pi\\mathrm{i}/3} = e^{6\\pi\\mathrm{i}/3} = e^{2\\pi\\mathrm{i}} = 1 = \\omega_0$ ✓',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• **Nur reelle Lösung**: $z^3 = 1$ hat in $\\mathbb{C}$ genau **3** Lösungen, nicht nur $z = 1$.\n\n• **Winkel falsch**: Die Winkel sind $0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}$ (gleichmäßig auf dem Einheitskreis verteilt), nicht $0, \\frac{\\pi}{3}, \\frac{2\\pi}{3}$.\n\n• **Konjugiertes Inverse falsch**: Für $|z| = 1$ gilt $z^{-1} = \\bar{z}$, also $\\omega_1^{-1} = \\bar{\\omega}_1 = \\omega_2$ (nicht $-\\omega_1$).\n\n• **Abgeschlossenheit nicht vollständig**: Alle 9 Produkte $\\omega_j \\cdot \\omega_k$ (oder zumindest alle nicht-trivialen) müssen geprüft werden.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Was ist $\\omega_1^3$? Und was ist $\\omega_1^2$?\n\nHinweis: Nutzen Sie $\\omega_1^3 = e^{2\\pi\\mathrm{i}} = 1$.\n\nWenn $\\omega_1^2 = \\omega_2$ und $\\omega_1^3 = 1 = \\omega_0$: Dann ist $W_3 = \\langle \\omega_1 \\rangle$ zyklisch und wird von $\\omega_1$ erzeugt. Erkennen Sie den Zusammenhang zu $\\mathbb{Z}_3$?',
      },
    ],
    loesung:
      'Die drei kubischen Einheitswurzeln sind $\\omega_0 = 1$, $\\omega_1 = e^{2\\pi\\mathrm{i}/3} = -\\frac{1}{2} + \\frac{\\sqrt{3}}{2}\\mathrm{i}$ und $\\omega_2 = e^{4\\pi\\mathrm{i}/3} = -\\frac{1}{2} - \\frac{\\sqrt{3}}{2}\\mathrm{i}$. Diese drei Zahlen sind unter Multiplikation abgeschlossen ($\\omega_j \\cdot \\omega_k = \\omega_{(j+k) \\bmod 3}$), $1$ ist das neutrale Element, und $\\omega_1^{-1} = \\omega_2$, $\\omega_2^{-1} = \\omega_1$.',
    schwierigkeit: 'mittel',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b6_a5',
    titel: 'Additive Gruppe Z7',
    aufgabeText:
      'Zeigen Sie, dass $\\mathbb{Z}_7$ mit Addition eine Gruppe ist, und bestimmen Sie die Inversen der Elemente.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Die **Restklassengruppe** $\\mathbb{Z}_n = \\{[0], [1], [2], \\ldots, [n-1]\\}$ mit der Addition $[a] + [b] = [a + b \\pmod{n}]$ ist eine abelsche Gruppe.\n\nDa $n = 7$ eine **Primzahl** ist, ist $\\mathbb{Z}_7$ sogar ein **Körper** – aber für diese Aufgabe reicht es, die additive Gruppenstruktur zu zeigen.\n\nDas **additive Inverse** von $[k]$ in $\\mathbb{Z}_n$ ist $[n - k]$, denn $[k] + [n - k] = [n] = [0]$.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          'Prüfen Sie die vier Gruppenaxiome für $(\\mathbb{Z}_7, +)$:\n\n**Schritt 1 – Abgeschlossenheit**: Das Ergebnis von $[a] + [b] = [(a+b) \\bmod 7]$ liegt stets in $\\{[0], \\ldots, [6]\\} = \\mathbb{Z}_7$.\n\n**Schritt 2 – Assoziativität**: Gilt wegen der Assoziativität der ganzzahligen Addition: $([a]+[b])+[c] = [(a+b+c) \\bmod 7] = [a]+([b]+[c])$.\n\n**Schritt 3 – Neutrales Element**: $[0]$ ist das neutrale Element: $[0] + [k] = [k]$ für alle $[k]$.\n\n**Schritt 4 – Inverse**: Geben Sie zu jedem $[k] \\in \\mathbb{Z}_7$ das Element $[7 - k]$ an und überprüfen Sie die Gleichung.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Inverse in $\\mathbb{Z}_7$:\n\n$[0]^{-1} = [0]$ (da $[0]+[0]=[0]$)\n$[1]^{-1} = [6]$ (da $[1]+[6]=[7]=[0]$)\n$[2]^{-1} = [5]$ (da $[2]+[5]=[7]=[0]$)\n$[3]^{-1} = [4]$ (da $[3]+[4]=[7]=[0]$)\n$[4]^{-1} = [3]$, $[5]^{-1} = [2]$, $[6]^{-1} = [1]$\n\nAllgemeine Formel: $[k]^{-1} = [7-k]$ (für $k \\neq 0$), $[0]^{-1} = [0]$.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• **Multiplikative Inverse verwechseln**: In dieser Aufgabe geht es um die **additive** Gruppe! Das Inverse von $[3]$ bezüglich Addition ist $[4]$, nicht $[3]^{-1} = [5]$ (was das multiplikative Inverse wäre).\n\n• **Abgeschlossenheit nicht begründen**: Es reicht nicht zu sagen "die Summe liegt in $\\mathbb{Z}_7$" – erklären Sie, warum der $\\bmod 7$-Operator das sicherstellt.\n\n• **$[0]$ vergessen**: $[0]$ hat als Inverses sich selbst, was manchmal übersehen wird.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Ist $(\\mathbb{Z}_7, +)$ eine abelsche (kommutative) Gruppe?\n\nHinweis: Gilt $[a] + [b] = [b] + [a]$ in $\\mathbb{Z}_7$?\n\nWenn ja: Begründen Sie es kurz. Beachten Sie außerdem, dass alle Elemente außer $[0]$ die Ordnung 7 haben (da 7 prim ist) – warum folgt daraus, dass $\\mathbb{Z}_7$ zyklisch ist?',
      },
    ],
    loesung:
      '$\\mathbb{Z}_7$ mit Addition ist eine abelsche Gruppe: abgeschlossen (Summe modulo 7 liegt in $\\mathbb{Z}_7$), assoziativ (folgt aus $\\mathbb{Z}$), neutrales Element $[0]$, Inverse: $[k]^{-1} = [7-k]$ für $k \\neq 0$, $[0]^{-1} = [0]$.',
    schwierigkeit: 'einfach',
    kategorie: 'Restklassen',
  },
  {
    id: 'b6_a6',
    titel: 'Verknüpfungstafel einer Gruppe der Ordnung 4',
    aufgabeText:
      'Ergänzen Sie die Verknüpfungstafel für eine Gruppe der Ordnung 4 mit den Elementen $\\{e, a, b, c\\}$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Konzept verstehen',
        inhalt:
          'Eine **Verknüpfungstafel** (Cayley-Tafel) einer Gruppe der Ordnung 4 ist eine $4 \\times 4$-Tabelle, die für alle Paare $(x, y)$ das Produkt $x \\cdot y$ angibt.\n\nZwei wesentliche Einschränkungen durch die Gruppenaxiome:\n1. **Lateinisches Quadrat**: In jeder Zeile und jeder Spalte kommt jedes Element **genau einmal** vor (folgt aus der Kürzungsregel).\n2. **Neutrales Element**: Die Zeile und Spalte von $e$ sind identisch mit der Kopfzeile/-spalte.\n\nEs gibt (bis auf Isomorphie) genau **zwei** Gruppen der Ordnung 4:\n- $\\mathbb{Z}_4$ (zyklisch, mit einem Element der Ordnung 4)\n- $V_4$ (Klein-Vier-Gruppe, jedes Element außer $e$ hat Ordnung 2)',
      },
      {
        icon: '🔍',
        titel: 'Vorgehensweise',
        inhalt:
          '**Schritt 1 – Neutrales Element eintragen**: Die Zeile für $e$ und die Spalte für $e$ sind trivial: $e \\cdot x = x \\cdot e = x$.\n\n**Schritt 2 – Lateinisches Quadrat nutzen**: In jeder Zeile/Spalte kommt jedes Element genau einmal vor. Fehlende Einträge können oft durch Ausschluss bestimmt werden.\n\n**Schritt 3 – Assoziativität prüfen**: Wenn Sie Freiheiten haben, wählen Sie Einträge so, dass das Assoziativgesetz gilt. Für $V_4$: Alle Nicht-$e$-Elemente sind selbstinvers ($a^2 = e$).\n\n**Schritt 4 – Variante wählen**: Entscheiden Sie, ob Sie $\\mathbb{Z}_4$ oder $V_4$ aufstellen möchten.',
      },
      {
        icon: '📝',
        titel: 'Syntax / Beispiel',
        inhalt:
          'Klein-Vier-Gruppe $V_4 = \\{e, a, b, c\\}$:\n\n| $\\cdot$ | $e$ | $a$ | $b$ | $c$ |\n|---------|-----|-----|-----|-----|\n| $e$     | $e$ | $a$ | $b$ | $c$ |\n| $a$     | $a$ | $e$ | $c$ | $b$ |\n| $b$     | $b$ | $c$ | $e$ | $a$ |\n| $c$     | $c$ | $b$ | $a$ | $e$ |\n\nEigenschaft: $a \\cdot a = e$, $b \\cdot b = e$, $c \\cdot c = e$ – jedes Element ist sein eigenes Inverses.\n\nAlternativ: $\\mathbb{Z}_4 = \\{e, a, a^2, a^3\\}$ mit $a^4 = e$.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• **Lateinisches Quadrat verletzt**: Ein Element kommt in einer Zeile zweimal vor – das ist kein gültiges Cayleytafel einer Gruppe.\n\n• **Assoziativität vergessen**: Nicht jedes lateinische Quadrat ergibt eine Gruppe – die Assoziativität muss auch gelten.\n\n• **Kommutativität angenommen**: Beide Gruppen der Ordnung 4 sind zwar abelsch, aber das muss man nicht voraussetzen – Symmetrie der Tafel an der Diagonale ist eine Konsequenz, keine Voraussetzung.\n\n• **$e \\cdot e = e$ vergessen**: Das neutrale Element muss selbstinvers sein: $e^2 = e$.',
      },
      {
        icon: '✅',
        titel: 'Kontrollfrage',
        inhalt:
          'Wie unterscheiden sich $\\mathbb{Z}_4$ und $V_4$ in ihrer Verknüpfungstafel?\n\nHinweis: Schauen Sie auf die Diagonale. In $V_4$ stehen dort lauter $e$\'s (jedes Element ist selbstinvers). In $\\mathbb{Z}_4 = \\{e, a, a^2, a^3\\}$ gilt $a^2 \\cdot a^2 = a^4 = e$, aber $a \\cdot a = a^2 \\neq e$.\n\nKann eine Gruppe der Ordnung 4 nicht-abelsch sein? (Antwort: Nein – alle Gruppen der Ordnung $\\leq 4$ sind abelsch.)',
      },
    ],
    loesung:
      'Eine mögliche Verknüpfungstafel ist die der Klein-Vier-Gruppe $V_4$: $a \\cdot a = e$, $b \\cdot b = e$, $c \\cdot c = e$, $a \\cdot b = c$, $a \\cdot c = b$, $b \\cdot c = a$. Dabei ist $e$ das neutrale Element.',
    schwierigkeit: 'schwer',
    kategorie: 'Gruppen',
  },
]
