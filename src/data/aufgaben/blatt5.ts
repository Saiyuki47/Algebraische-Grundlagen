import type { Aufgabe } from '../../types'

export const b5: Aufgabe[] = [
  // ─── Aufgabe 1: (G, +) Gruppe? (a/b/c/d) ──────────────────────────────────
  {
    id: 'b5_a1a',
    titel: 'Gruppe? – Vielfache von 3 unter Addition',
    aufgabeText: 'Es bezeichne „$+$" die übliche Addition ganzer Zahlen. Prüfen Sie, ob $(G, +)$ eine Gruppe ist, wenn $G := \\{3z : z \\in \\mathbb{Z}\\}$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was ist eine Gruppe?',
        inhalt:
          'Eine Menge $G$ mit einer Verknüpfung $*$ heißt Gruppe, wenn vier Eigenschaften gelten:\n' +
          '1. Abgeschlossenheit: $a * b$ liegt wieder in $G$ (man verlässt die Menge nicht).\n' +
          '2. Assoziativität: $(a*b)*c = a*(b*c)$.\n' +
          '3. Neutralelement $e$: es gibt ein $e$ mit $a*e = e*a = a$ (bei Addition: $e = 0$).\n' +
          '4. Inverse: zu jedem $a$ gibt es ein $a^{-1}$ mit $a*a^{-1} = e$ (bei Addition: $-a$).',
      },
      {
        icon: '🔍',
        titel: 'Was ist $G$ hier?',
        inhalt:
          '$G = \\{3z : z \\in \\mathbb{Z}\\}$ ist die Menge aller Vielfachen von 3:\n' +
          '  $\\{\\ldots, -6, -3, 0, 3, 6, 9, \\ldots\\}$',
      },
      {
        icon: '📝',
        titel: 'Eigenschaften prüfen',
        inhalt:
          'Abgeschlossen? Summe zweier Vielfacher von 3 ist wieder ein Vielfaches: $3a + 3b = 3(a+b)$. ✓\n\n' +
          'Assoziativ? Erbt sich von der gewöhnlichen Addition in $\\mathbb{Z}$. ✓\n\n' +
          'Neutralelement? $0 = 3 \\cdot 0$ liegt in $G$. ✓\n\n' +
          'Inverse? Zu $3z$ ist $-3z = 3(-z)$ in $G$. ✓',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Wichtigster Test ist meist die Abgeschlossenheit – sie ist am leichtesten zu verletzen. Hier ist alles erfüllt, also liegt eine Gruppe vor.',
      },
    ],
    loesung:
      '$(G, +)$ IST eine Gruppe.\n\n' +
      '$G = \\{3z : z \\in \\mathbb{Z}\\}$ enthält alle Vielfachen von 3. Abgeschlossen ($3a+3b=3(a+b)$), assoziativ (von $\\mathbb{Z}$ geerbt), Neutralelement $0 = 3\\cdot 0 \\in G$, Inverses zu $3z$ ist $-3z = 3(-z) \\in G$. Alle Gruppeneigenschaften sind erfüllt.',
    schwierigkeit: 'einfach',
    kategorie: 'Gruppen',
  },
  {
    id: 'b5_a1b',
    titel: 'Gruppe? – durch 2 oder 3 teilbar',
    aufgabeText: 'Es bezeichne „$+$" die übliche Addition ganzer Zahlen. Prüfen Sie, ob $(G, +)$ eine Gruppe ist, wenn $G := \\{z \\in \\mathbb{Z} : z \\text{ ist durch 2 oder durch 3 teilbar}\\}$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Welche Zahlen sind in $G$?',
        inhalt:
          'Alle Zahlen, die durch 2 ODER durch 3 (oder beides) teilbar sind: $\\{\\ldots, 2, 3, 4, 6, 8, 9, \\ldots\\}$. Nicht enthalten sind z.B. $1, 5, 7, 11$ (weder durch 2 noch durch 3 teilbar).',
      },
      {
        icon: '🔍',
        titel: 'Auf Abgeschlossenheit prüfen',
        inhalt:
          'Bei einem „oder" lohnt es, die Abgeschlossenheit zu testen: Bleibt die Summe zweier Elemente immer in $G$?\n\n' +
          'Suche zwei Elemente, deren Summe herausfällt.',
      },
      {
        icon: '📝',
        titel: 'Gegenbeispiel',
        inhalt:
          'Nimm $2 \\in G$ (durch 2 teilbar) und $3 \\in G$ (durch 3 teilbar).\n' +
          '  $2 + 3 = 5$\n' +
          '  $5$ ist weder durch 2 noch durch 3 teilbar → $5 \\notin G$.\n\n' +
          'Also ist $G$ nicht abgeschlossen unter $+$.',
      },
      {
        icon: '⚠️',
        titel: 'Folgerung',
        inhalt:
          '• Schon ein einziges Gegenbeispiel zur Abgeschlossenheit genügt: $(G, +)$ ist keine Gruppe.',
      },
    ],
    loesung:
      '$(G, +)$ ist KEINE Gruppe, da $G$ nicht abgeschlossen bezüglich $+$ ist.\n\n' +
      'Gegenbeispiel: $2 \\in G$ und $3 \\in G$, aber $2 + 3 = 5 \\notin G$ (5 ist weder durch 2 noch durch 3 teilbar).',
    schwierigkeit: 'einfach',
    kategorie: 'Gruppen',
  },
  {
    id: 'b5_a1c',
    titel: 'Gruppe? – durch 2 und durch 3 teilbar',
    aufgabeText: 'Es bezeichne „$+$" die übliche Addition ganzer Zahlen. Prüfen Sie, ob $(G, +)$ eine Gruppe ist, wenn $G := \\{z \\in \\mathbb{Z} : z \\text{ ist durch 2 und durch 3 teilbar}\\}$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Durch 2 UND 3 teilbar',
        inhalt:
          'Eine Zahl ist genau dann durch 2 und durch 3 teilbar, wenn sie durch 6 teilbar ist (denn $\\mathrm{kgV}(2,3) = 6$).\n\n' +
          'Also ist $G = \\{6z : z \\in \\mathbb{Z}\\} = \\{\\ldots, -12, -6, 0, 6, 12, \\ldots\\}$, die Vielfachen von 6.',
      },
      {
        icon: '🔍',
        titel: 'Eigenschaften prüfen',
        inhalt:
          'Abgeschlossen? $6a + 6b = 6(a+b)$ ist wieder durch 6 teilbar. ✓\n\n' +
          'Assoziativ? Von $\\mathbb{Z}$ geerbt. ✓\n\n' +
          'Neutralelement? $0 = 6 \\cdot 0 \\in G$. ✓\n\n' +
          'Inverse? Zu $6z$ ist $-6z \\in G$. ✓',
      },
      {
        icon: '📝',
        titel: 'Anders als bei (b)',
        inhalt:
          'Beim „und" funktioniert es, weil die gemeinsame Teilbarkeit (durch 6) bei der Addition erhalten bleibt – anders als beim „oder" in Teil (b).',
      },
      {
        icon: '⚠️',
        titel: 'Folgerung',
        inhalt:
          '• Alle vier Gruppeneigenschaften sind erfüllt → $(G, +)$ ist eine Gruppe.',
      },
    ],
    loesung:
      '$(G, +)$ IST eine Gruppe.\n\n' +
      'Durch 2 und 3 teilbar bedeutet durch 6 teilbar, also $G = \\{6z : z \\in \\mathbb{Z}\\}$. Abgeschlossen ($6a+6b = 6(a+b)$), assoziativ, Neutralelement $0 \\in G$, Inverses zu $6z$ ist $-6z \\in G$. Alle Eigenschaften lassen sich leicht nachprüfen.',
    schwierigkeit: 'einfach',
    kategorie: 'Gruppen',
  },
  {
    id: 'b5_a1d',
    titel: 'Gruppe? – $G = \\{1\\}$ unter Addition',
    aufgabeText: 'Es bezeichne „$+$" die übliche Addition ganzer Zahlen. Prüfen Sie, ob $(G, +)$ eine Gruppe ist, wenn $G := \\{1\\}$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Einelementige Menge',
        inhalt:
          '$G$ enthält nur die Zahl $1$. Damit $(G, +)$ eine Gruppe ist, müsste $1 + 1$ wieder in $G$ liegen.',
      },
      {
        icon: '🔍',
        titel: 'Abgeschlossenheit prüfen',
        inhalt:
          '$1 + 1 = 2$. Aber $2 \\notin G$ (in $G$ ist nur die $1$). Also ist $G$ nicht abgeschlossen unter $+$.',
      },
      {
        icon: '📝',
        titel: 'Zusatzbeobachtung',
        inhalt:
          'Mit der Multiplikation sähe es anders aus: $(G, \\cdot) = (\\{1\\}, \\cdot)$ ist eine (triviale) Gruppe, denn $1 \\cdot 1 = 1$ und $1$ ist sein eigenes Neutralelement und Inverses.',
      },
      {
        icon: '⚠️',
        titel: 'Folgerung',
        inhalt:
          '• Unter der Addition ist $(\\{1\\}, +)$ keine Gruppe (nicht abgeschlossen).',
      },
    ],
    loesung:
      '$(G, +)$ ist KEINE Gruppe, da $G$ nicht abgeschlossen bezüglich $+$ ist.\n\n' +
      'Gegenbeispiel: $1 \\in G$, aber $1 + 1 = 2 \\notin G$.\n\n' +
      'Hinweis: $(G, \\cdot)$ wäre hingegen eine Gruppe ($1 \\cdot 1 = 1$).',
    schwierigkeit: 'einfach',
    kategorie: 'Gruppen',
  },

  // ─── Aufgabe 2: Gruppe bei Multiplikation/Addition? (a/b/c/d/e) ────────────
  {
    id: 'b5_a2a',
    titel: 'Gruppe? – $((0,\\infty), +)$',
    aufgabeText: 'Es bezeichne „$+$" die übliche Addition. Ist $((0, \\infty), +)$ eine Gruppe?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was ist $(0, \\infty)$?',
        inhalt:
          '$(0, \\infty)$ ist das offene Intervall aller positiven reellen Zahlen (ohne die Null). Verknüpfung ist die normale Addition.',
      },
      {
        icon: '🔍',
        titel: 'Neutralelement suchen',
        inhalt:
          'Bei der Addition ist das Neutralelement die $0$ (denn $a + 0 = a$). Aber $0$ liegt NICHT in $(0, \\infty)$ – die Null ist ausgeschlossen.\n\n' +
          'Ohne Neutralelement kann es keine Gruppe sein.',
      },
      {
        icon: '📝',
        titel: 'Auch die Inversen fehlen',
        inhalt:
          'Das additive Inverse von $a > 0$ wäre $-a < 0$ – aber negative Zahlen liegen auch nicht in $(0,\\infty)$. Es scheitert also gleich an zwei Stellen.',
      },
      {
        icon: '⚠️',
        titel: 'Folgerung',
        inhalt:
          '• Schon das fehlende Neutralelement genügt: $((0,\\infty), +)$ ist keine Gruppe.',
      },
    ],
    loesung:
      'Nein, $((0, \\infty), +)$ ist KEINE Gruppe. Es gibt zum Beispiel kein Neutralelement: das additive Neutralelement wäre $0$, aber $0 \\notin (0,\\infty)$.',
    schwierigkeit: 'einfach',
    kategorie: 'Gruppen',
  },
  {
    id: 'b5_a2b',
    titel: 'Gruppe? – $((0,\\infty), \\cdot)$',
    aufgabeText: 'Es bezeichne „$\\cdot$" die übliche Multiplikation. Ist $((0, \\infty), \\cdot)$ eine Gruppe?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Jetzt Multiplikation',
        inhalt:
          'Verknüpfung ist die Multiplikation positiver reeller Zahlen. Neutralelement der Multiplikation ist die $1$.',
      },
      {
        icon: '🔍',
        titel: 'Eigenschaften prüfen',
        inhalt:
          'Abgeschlossen? Produkt zweier positiver Zahlen ist wieder positiv → bleibt in $(0,\\infty)$. ✓\n\n' +
          'Assoziativ? Von $\\mathbb{R}$ geerbt. ✓\n\n' +
          'Neutralelement? $1 \\in (0,\\infty)$. ✓',
      },
      {
        icon: '📝',
        titel: 'Inverse',
        inhalt:
          'Das multiplikative Inverse von $x > 0$ ist $\\frac{1}{x}$. Für $x > 0$ ist auch $\\frac{1}{x} > 0$, liegt also in $(0,\\infty)$. ✓\n\n' +
          'Alle vier Eigenschaften sind erfüllt.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Wichtig ist, dass die Null ausgeschlossen ist – sonst hätte $0$ kein Inverses ($\\frac{1}{0}$ ist nicht definiert).',
      },
    ],
    loesung:
      'Ja, $((0, \\infty), \\cdot)$ IST eine Gruppe.\n\n' +
      'Produkt zweier positiver Zahlen ist wieder positiv (abgeschlossen), die Assoziativität überträgt sich von $\\mathbb{R}$, Neutralelement ist $1$, und das Inverse zu $x \\in (0,\\infty)$ ist $\\frac{1}{x} \\in (0,\\infty)$.',
    schwierigkeit: 'mittel',
    kategorie: 'Gruppen',
  },
  {
    id: 'b5_a2c',
    titel: 'Gruppe? – $((-\\infty, 0), \\cdot)$',
    aufgabeText: 'Es bezeichne „$\\cdot$" die übliche Multiplikation. Ist $((-\\infty, 0), \\cdot)$ eine Gruppe?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Negative Zahlen unter Multiplikation',
        inhalt:
          '$(-\\infty, 0)$ sind alle negativen reellen Zahlen. Multipliziert man zwei davon, achte auf das Vorzeichen.',
      },
      {
        icon: '🔍',
        titel: 'Abgeschlossenheit prüfen',
        inhalt:
          'Minus mal Minus ergibt Plus. Das Produkt zweier negativer Zahlen ist also positiv – und liegt damit NICHT mehr in $(-\\infty, 0)$.',
      },
      {
        icon: '📝',
        titel: 'Gegenbeispiel',
        inhalt:
          '$(-1) \\cdot (-2) = 2$, und $2 \\notin (-\\infty, 0)$. Die Menge ist nicht abgeschlossen.',
      },
      {
        icon: '⚠️',
        titel: 'Folgerung',
        inhalt:
          '• Da die Abgeschlossenheit fehlt, ist $((-\\infty,0), \\cdot)$ keine Gruppe.',
      },
    ],
    loesung:
      'Nein, $((-\\infty, 0), \\cdot)$ ist KEINE Gruppe, da die Menge nicht abgeschlossen bezüglich der Multiplikation ist.\n\n' +
      'Gegenbeispiel: $(-1) \\cdot (-2) = 2 \\notin (-\\infty, 0)$ (Minus mal Minus ergibt Plus).',
    schwierigkeit: 'einfach',
    kategorie: 'Gruppen',
  },
  {
    id: 'b5_a2d',
    titel: 'Gruppe? – Einheitskreis $T = \\{|z|=1\\}$',
    aufgabeText: 'Es bezeichne „$\\cdot$" die übliche Multiplikation komplexer Zahlen. Sei $T = \\{z \\in \\mathbb{C} : |z| = 1\\}$. Ist $(T, \\cdot)$ eine Gruppe?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was ist $T$?',
        inhalt:
          '$T$ ist der Einheitskreis: alle komplexen Zahlen mit Betrag (Länge) genau $1$. Zentrale Rechenregel: $|z \\cdot w| = |z| \\cdot |w|$ (der Betrag eines Produkts ist das Produkt der Beträge).',
      },
      {
        icon: '🔍',
        titel: 'Abgeschlossenheit und Neutralelement',
        inhalt:
          'Abgeschlossen? Für $z, w \\in T$ ist $|zw| = |z||w| = 1 \\cdot 1 = 1$, also $zw \\in T$. ✓\n\n' +
          'Assoziativ? Von $\\mathbb{C}$ geerbt. ✓\n\n' +
          'Neutralelement? $|1| = 1$, also $1 \\in T$. ✓',
      },
      {
        icon: '📝',
        titel: 'Inverse',
        inhalt:
          'Das Inverse von $z$ ist $\\frac{1}{z}$. Für $z \\in T$ ist $\\left|\\frac{1}{z}\\right| = \\frac{1}{|z|} = \\frac{1}{1} = 1$, also liegt $\\frac{1}{z}$ wieder in $T$. ✓\n\n' +
          'Alle Eigenschaften erfüllt.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Der Trick ist die Betragsregel $|zw| = |z||w|$ – damit bleibt man auf dem Einheitskreis.',
      },
    ],
    loesung:
      'Ja, $(T, \\cdot)$ IST eine Gruppe.\n\n' +
      'Für $z, w \\in T$ gilt $|zw| = |z||w| = 1$, also $zw \\in T$ (abgeschlossen). Die Assoziativität überträgt sich von $\\mathbb{C}$. Neutralelement ist $1 \\in T$. Für $z \\in T$ ist $\\left|\\frac{1}{z}\\right| = \\frac{1}{|z|} = 1$, also $\\frac{1}{z} \\in T$ (Inverses). Jedes Element hat ein Inverses in $T$.',
    schwierigkeit: 'mittel',
    kategorie: 'Gruppen',
  },
  {
    id: 'b5_a2e',
    titel: 'Gruppe? – vierte Einheitswurzeln $E = \\{z^4=1\\}$',
    aufgabeText: 'Es bezeichne „$\\cdot$" die übliche Multiplikation komplexer Zahlen. Sei $E = \\{z \\in \\mathbb{C} : z^4 = 1\\}$. Ist $(E, \\cdot)$ eine Gruppe?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was ist $E$?',
        inhalt:
          '$E$ sind die Lösungen von $z^4 = 1$, also die vierten Einheitswurzeln. Wie auf Blatt 3 berechnet: $E = \\{1, \\mathrm{i}, -1, -\\mathrm{i}\\}$ (vier Zahlen).',
      },
      {
        icon: '🔍',
        titel: 'Abgeschlossenheit',
        inhalt:
          'Für $z, w \\in E$ gilt $z^4 = w^4 = 1$. Dann ist $(zw)^4 = z^4 w^4 = 1 \\cdot 1 = 1$, also $zw \\in E$. ✓\n\n' +
          'Assoziativ? Von $\\mathbb{C}$ geerbt. ✓\n\n' +
          'Neutralelement? $1^4 = 1$, also $1 \\in E$. ✓',
      },
      {
        icon: '📝',
        titel: 'Inverse einzeln angeben',
        inhalt:
          'Man kann die Inversen direkt ablesen:\n' +
          '  $1^{-1} = 1$\n' +
          '  $\\mathrm{i}^{-1} = -\\mathrm{i}$ (denn $\\mathrm{i} \\cdot (-\\mathrm{i}) = -\\mathrm{i}^2 = 1$)\n' +
          '  $(-1)^{-1} = -1$\n' +
          '  $(-\\mathrm{i})^{-1} = \\mathrm{i}$\n\n' +
          'Alle Inversen liegen wieder in $E$. ✓',
      },
      {
        icon: '⚠️',
        titel: 'Folgerung',
        inhalt:
          '• Alle Eigenschaften erfüllt → $(E, \\cdot)$ ist eine Gruppe (mit 4 Elementen).',
      },
    ],
    loesung:
      'Ja, $(E, \\cdot)$ IST eine Gruppe. Es ist $E = \\{1, \\mathrm{i}, -1, -\\mathrm{i}\\}$.\n\n' +
      'Für $z, w \\in E$ ist $(zw)^4 = z^4 w^4 = 1$, also $zw \\in E$ (abgeschlossen). Assoziativität von $\\mathbb{C}$ geerbt. Neutralelement $1 \\in E$ (da $1^4 = 1$). Inverse: zu $1$ ist $1$, zu $\\mathrm{i}$ ist $-\\mathrm{i}$, zu $-1$ ist $-1$, zu $-\\mathrm{i}$ ist $\\mathrm{i}$ – alle in $E$.',
    schwierigkeit: 'mittel',
    kategorie: 'Gruppen',
  },

  // ─── Aufgabe 3: Neutralelement und Inverses zu ⊙ ──────────────────────────
  {
    id: 'b5_a3',
    titel: 'Neutralelement und Inverses einer eigenen Verknüpfung',
    aufgabeText: 'Die Verknüpfung $\\odot$ auf $\\mathbb{Q} \\setminus \\{0\\}$ sei definiert durch $x \\odot y := \\frac{1}{4} \\cdot x \\cdot y$, wobei „$\\cdot$" die übliche Multiplikation auf $\\mathbb{Q}$ ist. Man kann zeigen, dass $(\\mathbb{Q} \\setminus \\{0\\}, \\odot)$ eine kommutative Gruppe ist. Was ist das Neutralelement der Gruppe und was ist das Inverse zu $x \\in \\mathbb{Q} \\setminus \\{0\\}$?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Neutralelement – Definition nutzen',
        inhalt:
          'Das Neutralelement $e$ erfüllt $x \\odot e = x$ für alle $x$. Setze die Definition ein und löse nach $e$ auf:\n' +
          '  $x \\odot e = \\frac{1}{4} \\cdot x \\cdot e = x$\n' +
          'Teile beide Seiten durch $x$ (erlaubt, da $x \\neq 0$): $\\frac{1}{4} e = 1$, also $e = 4$.',
      },
      {
        icon: '🔍',
        titel: 'Probe für das Neutralelement',
        inhalt:
          'Mit $e = 4$:\n' +
          '  $4 \\odot x = \\frac{1}{4} \\cdot 4 \\cdot x = x$ ✓\n' +
          '  $x \\odot 4 = \\frac{1}{4} \\cdot x \\cdot 4 = x$ ✓\n\n' +
          'Also ist $4$ das Neutralelement (nicht $1$, weil die Verknüpfung den Faktor $\\frac{1}{4}$ enthält!).',
      },
      {
        icon: '📝',
        titel: 'Inverses – Definition nutzen',
        inhalt:
          'Das Inverse $x^{-1}$ erfüllt $x \\odot x^{-1} = e = 4$. Setze ein:\n' +
          '  $\\frac{1}{4} \\cdot x \\cdot x^{-1} = 4$\n' +
          '  $x \\cdot x^{-1} = 16$\n' +
          '  $x^{-1} = \\frac{16}{x}$',
      },
      {
        icon: '⚠️',
        titel: 'Probe und Hinweis',
        inhalt:
          'Probe: $x \\odot \\frac{16}{x} = \\frac{1}{4} \\cdot x \\cdot \\frac{16}{x} = \\frac{16}{4} = 4 = e$ ✓\n\n' +
          '• Häufiger Fehler: blind $e = 1$ und $x^{-1} = \\frac{1}{x}$ annehmen. Der Faktor $\\frac{1}{4}$ verschiebt beides.',
      },
    ],
    loesung:
      'Neutralelement: $e = 4$.\n' +
      'Denn $4 \\odot x = \\frac{1}{4} \\cdot 4 \\cdot x = x$ und ebenso $x \\odot 4 = x$.\n\n' +
      'Inverses zu $x \\in \\mathbb{Q} \\setminus \\{0\\}$: $x^{-1} = \\frac{16}{x}$.\n' +
      'Denn $x \\odot \\frac{16}{x} = \\frac{1}{4} \\cdot x \\cdot \\frac{16}{x} = 4 = e$ und ebenso $\\frac{16}{x} \\odot x = 4$.',
    schwierigkeit: 'mittel',
    kategorie: 'Gruppen',
  },

  // ─── Aufgabe 4: Rechnen in Restklassen (a/b/c) ────────────────────────────
  {
    id: 'b5_a4a',
    titel: 'Rechnen in $\\mathbb{Z}_9$',
    aufgabeText:
      'Berechnen Sie in $\\mathbb{Z}_9$:\n' +
      '(i) $[21] + [17]$\n' +
      '(ii) $[-29] + [-4]$\n' +
      '(iii) $[6] \\cdot [12]$\n' +
      'Geben Sie Ihr Ergebnis jeweils in der Form $[k]$ mit $k \\in \\{0, \\ldots, 8\\}$ an.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was bedeutet $\\mathbb{Z}_9$?',
        inhalt:
          '$\\mathbb{Z}_9$ ist das Rechnen „modulo 9": man rechnet ganz normal und nimmt am Ende den Rest bei Division durch 9. Die eckige Klammer $[k]$ bezeichnet die Restklasse von $k$.\n\n' +
          'Beispiel: $[12] = [3]$, denn $12 = 9 + 3$ hat Rest $3$.',
      },
      {
        icon: '🔍',
        titel: 'Rechenregel',
        inhalt:
          'Man darf erst addieren/multiplizieren und dann den Rest bilden (oder umgekehrt):\n' +
          '  $[a] + [b] = [a+b]$\n' +
          '  $[a] \\cdot [b] = [a \\cdot b]$\n\n' +
          'Der Endwert muss zwischen $0$ und $8$ liegen.',
      },
      {
        icon: '📝',
        titel: 'Schritt für Schritt',
        inhalt:
          '(i) $[21] + [17] = [38]$. Rest von $38$ bei $9$: $38 = 4\\cdot 9 + 2$, also $[2]$.\n\n' +
          '(ii) $[-29] + [-4] = [-33]$. Bei negativen Zahlen so oft $9$ addieren, bis der Rest in $\\{0,\\ldots,8\\}$ liegt: $-33 + 4\\cdot 9 = -33 + 36 = 3$, also $[3]$.\n\n' +
          '(iii) $[6] \\cdot [12] = [72]$. Rest von $72$ bei $9$: $72 = 8 \\cdot 9 = 72$, Rest $0$, also $[0]$.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Negative Reste: $[-33]$ ist NICHT $[-6]$ als Endergebnis. Man muss bis in den Bereich $\\{0,\\ldots,8\\}$ hochaddieren → $[3]$.\n\n' +
          '• Ergebnis immer als $[k]$ mit $0 \\leq k \\leq 8$ angeben.',
      },
    ],
    loesung:
      '(i) $[21] + [17] = [38] = [2]$  (denn $38 = 4\\cdot 9 + 2$)\n\n' +
      '(ii) $[-29] + [-4] = [-33] = [3]$  (denn $-33 + 36 = 3$)\n\n' +
      '(iii) $[6] \\cdot [12] = [72] = [0]$  (denn $72 = 8 \\cdot 9$)',
    schwierigkeit: 'einfach',
    kategorie: 'Restklassen',
  },
  {
    id: 'b5_a4b',
    titel: 'Rechnen in $\\mathbb{Z}_{12345}$',
    aufgabeText: 'Berechnen Sie in $\\mathbb{Z}_{12345}$: $[12346] \\cdot [6613]$. Geben Sie Ihr Ergebnis in der Form $[k]$ mit $k \\in \\{0, \\ldots, 12344\\}$ an. (Hinweis: Sie benötigen hier keinen Taschenrechner.)',
    tippSections: [
      {
        icon: '💡',
        titel: 'Trick: erst vereinfachen',
        inhalt:
          'Bei großen Zahlen lohnt es, ZUERST die Restklassen zu vereinfachen, bevor man multipliziert. Schau dir $[12346]$ genauer an.',
      },
      {
        icon: '🔍',
        titel: '$[12346]$ vereinfachen',
        inhalt:
          'Es ist $12346 = 12345 + 1$. Da wir modulo $12345$ rechnen, ist $[12345] = [0]$, also:\n' +
          '  $[12346] = [12345 + 1] = [1]$.',
      },
      {
        icon: '📝',
        titel: 'Multiplizieren',
        inhalt:
          'Jetzt ist die Rechnung leicht:\n' +
          '  $[12346] \\cdot [6613] = [1] \\cdot [6613] = [6613]$\n\n' +
          'Und $6613$ liegt schon im Bereich $\\{0, \\ldots, 12344\\}$.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• $[1]$ ist das neutrale Element der Multiplikation – Multiplikation damit ändert nichts. Deshalb braucht man keinen Taschenrechner.',
      },
    ],
    loesung:
      '$[12346] = [12345 + 1] = [1]$ (denn $[12345] = [0]$ in $\\mathbb{Z}_{12345}$).\n\n' +
      'Daher: $[12346] \\cdot [6613] = [1] \\cdot [6613] = [6613]$.',
    schwierigkeit: 'mittel',
    kategorie: 'Restklassen',
  },
  {
    id: 'b5_a4c',
    titel: 'Darf man in $\\mathbb{Z}_6$ kürzen?',
    aufgabeText: 'Darf man bei der Multiplikation in $\\mathbb{Z}_6$ „kürzen", das heißt: wenn $[a], [x], [y] \\in \\mathbb{Z}_6$, $[a] \\neq [0]$ und $[a][x] = [a][y]$, folgt dann stets $[x] = [y]$?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was heißt „kürzen"?',
        inhalt:
          'In den gewohnten Zahlen darf man aus $a \\cdot x = a \\cdot y$ (mit $a \\neq 0$) auf $x = y$ schließen. Die Frage ist, ob das in $\\mathbb{Z}_6$ auch immer geht.',
      },
      {
        icon: '🔍',
        titel: 'Mit Gegenbeispiel testen',
        inhalt:
          'Suche $[a] \\neq [0]$ und $[x] \\neq [y]$, bei denen trotzdem $[a][x] = [a][y]$ gilt. Probiere $a = 2$:\n' +
          '  $[2] \\cdot [4] = [8] = [2]$  (denn $8 = 6 + 2$)\n' +
          '  $[2] \\cdot [1] = [2]$',
      },
      {
        icon: '📝',
        titel: 'Das Gegenbeispiel',
        inhalt:
          'Mit $a = 2$, $x = 4$, $y = 1$:\n' +
          '  $[2][4] = [2]$ und $[2][1] = [2]$, also $[2][4] = [2][1]$.\n' +
          '  Aber $[4] \\neq [1]$.\n\n' +
          'Man darf also NICHT kürzen.',
      },
      {
        icon: '⚠️',
        titel: 'Warum geht das schief?',
        inhalt:
          '• In $\\mathbb{Z}_6$ ist $[2]$ ein Nullteiler ($[2]\\cdot[3] = [0]$). Kürzen klappt nur, wenn $[a]$ invertierbar ist – das ist nicht für jedes $[a] \\neq [0]$ der Fall, weil $6$ keine Primzahl ist.',
      },
    ],
    loesung:
      'Nein, das ist im Allgemeinen NICHT möglich.\n\n' +
      'Gegenbeispiel: $a = 2$, $x = 4$, $y = 1$. Dann gilt $[2][4] = [8] = [2]$ und $[2][1] = [2]$, also $[a][x] = [a][y]$, aber $[x] = [4] \\neq [1] = [y]$.',
    schwierigkeit: 'mittel',
    kategorie: 'Restklassen',
  },

  // ─── Aufgabe 5: symmetrische Gruppe S3 (a/b/c/d) ──────────────────────────
  {
    id: 'b5_a5a',
    titel: 'Symmetrische Gruppe $S_3$ – alle Elemente',
    aufgabeText: 'Laut Vorlesung ist $S_3 = \\{f : \\{1,2,3\\} \\to \\{1,2,3\\} \\mid f \\text{ bijektiv}\\}$ mit der Hintereinanderausführung $\\circ$ eine Gruppe. Listen Sie alle Abbildungen $f \\in S_3$ in der Form $\\begin{pmatrix} 1 & 2 & 3 \\\\ f(1) & f(2) & f(3) \\end{pmatrix}$ auf. Wie viele Elemente besitzt $S_3$?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was ist $S_3$?',
        inhalt:
          '$S_3$ ist die Menge aller bijektiven Abbildungen (Permutationen) der Menge $\\{1,2,3\\}$ auf sich selbst. „Bijektiv" heißt: jede Zahl wird auf genau eine andere abgebildet, ohne Wiederholung.\n\n' +
          'Schreibweise: in der oberen Zeile steht die Eingabe $1,2,3$, darunter, wohin sie abgebildet wird.',
      },
      {
        icon: '🔍',
        titel: 'Wie viele gibt es?',
        inhalt:
          'Eine Permutation von 3 Elementen: für $f(1)$ hat man 3 Möglichkeiten, für $f(2)$ noch 2, für $f(3)$ noch 1. Das sind $3! = 3 \\cdot 2 \\cdot 1 = 6$ Permutationen.',
      },
      {
        icon: '📝',
        titel: 'Systematisch auflisten',
        inhalt:
          'Alle 6 Anordnungen der unteren Zeile:\n' +
          '  $123, 132, 213, 231, 312, 321$\n\n' +
          'Jede davon ergibt eine Permutation $\\pi_1$ bis $\\pi_6$.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Keine Zahl darf in der unteren Zeile doppelt vorkommen (sonst wäre $f$ nicht bijektiv).',
      },
    ],
    loesung:
      'Es gibt $3! = 6$ Permutationen:\n' +
      '$\\pi_1 = \\begin{pmatrix} 1&2&3 \\\\ 1&2&3 \\end{pmatrix}$, ' +
      '$\\pi_2 = \\begin{pmatrix} 1&2&3 \\\\ 1&3&2 \\end{pmatrix}$, ' +
      '$\\pi_3 = \\begin{pmatrix} 1&2&3 \\\\ 2&1&3 \\end{pmatrix}$,\n' +
      '$\\pi_4 = \\begin{pmatrix} 1&2&3 \\\\ 2&3&1 \\end{pmatrix}$, ' +
      '$\\pi_5 = \\begin{pmatrix} 1&2&3 \\\\ 3&1&2 \\end{pmatrix}$, ' +
      '$\\pi_6 = \\begin{pmatrix} 1&2&3 \\\\ 3&2&1 \\end{pmatrix}$.\n\n' +
      '$S_3$ besitzt also 6 Elemente.',
    schwierigkeit: 'mittel',
    kategorie: 'Gruppen',
  },
  {
    id: 'b5_a5b',
    titel: 'Symmetrische Gruppe $S_3$ – Neutralelement',
    aufgabeText: 'Geben Sie das Neutralelement der Gruppe $(S_3, \\circ)$ an.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was tut das Neutralelement?',
        inhalt:
          'Das Neutralelement $e$ erfüllt $f \\circ e = e \\circ f = f$ für jede Permutation $f$. Bei Abbildungen ist das die identische Abbildung, die jede Zahl auf sich selbst abbildet.',
      },
      {
        icon: '🔍',
        titel: 'Identität finden',
        inhalt:
          'Die Identität bildet $1 \\to 1$, $2 \\to 2$, $3 \\to 3$ ab. In der Auflistung aus Teil (a) ist das $\\pi_1$.',
      },
      {
        icon: '📝',
        titel: 'Probe',
        inhalt:
          'Verkettet man $\\pi_1$ mit irgendeiner Permutation $f$, ändert sich nichts: $f \\circ \\pi_1 = f$, denn $\\pi_1$ lässt alles unverändert.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Das Neutralelement bei Verkettung von Abbildungen ist immer die Identität.',
      },
    ],
    loesung:
      'Das Neutralelement ist die identische Abbildung $\\pi_1 = \\begin{pmatrix} 1&2&3 \\\\ 1&2&3 \\end{pmatrix}$ (sie bildet jede Zahl auf sich selbst ab).',
    schwierigkeit: 'einfach',
    kategorie: 'Gruppen',
  },
  {
    id: 'b5_a5c',
    titel: 'Symmetrische Gruppe $S_3$ – Inverse',
    aufgabeText: 'Geben Sie zu jedem $f \\in S_3$ das Inverse bezüglich „$\\circ$" an.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was ist das Inverse einer Permutation?',
        inhalt:
          'Das Inverse $f^{-1}$ macht die Abbildung rückgängig: $f \\circ f^{-1} = \\pi_1$ (Identität). Praktisch: man dreht die Zuordnung um.',
      },
      {
        icon: '🔍',
        titel: 'Inverses ablesen',
        inhalt:
          'Bildet $f$ die $1$ auf $2$ ab, so bildet $f^{-1}$ die $2$ auf $1$ ab. Man vertauscht obere und untere Zeile und sortiert dann nach der oberen.\n\n' +
          'Permutationen, die nur zwei Elemente vertauschen (Transpositionen), sind ihr eigenes Inverses.',
      },
      {
        icon: '📝',
        titel: 'Konkret',
        inhalt:
          '$\\pi_1, \\pi_2, \\pi_3, \\pi_6$ vertauschen jeweils höchstens zwei Elemente → sie sind selbstinvers.\n\n' +
          '$\\pi_4$ ($1\\to2\\to3\\to1$) und $\\pi_5$ ($1\\to3\\to2\\to1$) sind die beiden „Dreierzyklen" und gegenseitig invers.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Die Identität und alle Transpositionen sind selbstinvers; die beiden 3-Zyklen sind zueinander invers.',
      },
    ],
    loesung:
      '$\\pi_1^{-1} = \\pi_1$, $\\pi_2^{-1} = \\pi_2$, $\\pi_3^{-1} = \\pi_3$, $\\pi_4^{-1} = \\pi_5$, $\\pi_5^{-1} = \\pi_4$, $\\pi_6^{-1} = \\pi_6$.\n\n' +
      '($\\pi_1$ und die Transpositionen $\\pi_2, \\pi_3, \\pi_6$ sind selbstinvers; die beiden 3-Zyklen $\\pi_4$ und $\\pi_5$ sind zueinander invers.)',
    schwierigkeit: 'mittel',
    kategorie: 'Gruppen',
  },
  {
    id: 'b5_a5d',
    titel: 'Symmetrische Gruppe $S_3$ – nicht kommutativ',
    aufgabeText: 'Zeigen Sie, dass $(S_3, \\circ)$ keine kommutative Gruppe ist.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was heißt kommutativ?',
        inhalt:
          'Kommutativ bedeutet: $a \\circ b = b \\circ a$ für ALLE Elemente. Um zu zeigen, dass es NICHT kommutativ ist, genügt EIN Gegenbeispiel mit $a \\circ b \\neq b \\circ a$.',
      },
      {
        icon: '🔍',
        titel: 'Verkettung berechnen',
        inhalt:
          '$\\pi_2 \\circ \\pi_3$ bedeutet: erst $\\pi_3$ anwenden, dann $\\pi_2$ (von rechts nach links!).\n\n' +
          'Verkette die beiden Permutationen Element für Element und vergleiche das Ergebnis mit der umgekehrten Reihenfolge $\\pi_3 \\circ \\pi_2$.',
      },
      {
        icon: '📝',
        titel: 'Gegenbeispiel',
        inhalt:
          'Man rechnet nach:\n' +
          '  $\\pi_2 \\circ \\pi_3 = \\pi_5$\n' +
          '  $\\pi_3 \\circ \\pi_2 = \\pi_4$\n\n' +
          'Da $\\pi_5 \\neq \\pi_4$, gilt $\\pi_2 \\circ \\pi_3 \\neq \\pi_3 \\circ \\pi_2$.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Reihenfolge bei $\\circ$ beachten: zuerst die rechte Abbildung anwenden. Das ist der häufigste Fehler.',
      },
    ],
    loesung:
      '$(S_3, \\circ)$ ist NICHT kommutativ.\n\n' +
      'Gegenbeispiel: $\\pi_2 \\circ \\pi_3 = \\pi_5$, aber $\\pi_3 \\circ \\pi_2 = \\pi_4 \\neq \\pi_5$. Da es Elemente gibt, deren Verkettung von der Reihenfolge abhängt, ist die Gruppe nicht kommutativ.',
    schwierigkeit: 'mittel',
    kategorie: 'Gruppen',
  },

  // ─── Aufgabe 6: Verknüpfungstafel ergänzen ────────────────────────────────
  {
    id: 'b5_a6',
    titel: 'Verknüpfungstafel einer Dreiergruppe ergänzen',
    aufgabeText:
      'Sei $G = \\{a, b, c\\}$ eine dreielementige Menge und $\\ast$ eine Verknüpfung auf $G$. Ergänzen Sie folgende Verknüpfungstafel, so dass $(G, \\ast)$ eine Gruppe ist.\n\n' +
      '| $\\ast$ | $a$ | $b$ | $c$ |\n' +
      '| $a$ |  |  |  |\n' +
      '| $b$ |  | $b$ |  |\n' +
      '| $c$ |  |  |  |',
    tippSections: [
      {
        icon: '💡',
        titel: 'Neutralelement finden',
        inhalt:
          'Vorgegeben ist $b \\ast b = b$. Ein Element $e$ mit $e \\ast e = e$ in einer Gruppe muss das Neutralelement sein.\n\n' +
          'Begründung: Aus $b \\ast b = b = b \\ast e$ folgt durch Kürzen (in Gruppen erlaubt) $b = e$. Also ist $b$ das Neutralelement.',
      },
      {
        icon: '🔍',
        titel: 'Zeile/Spalte des Neutralelements',
        inhalt:
          'Das Neutralelement ändert nichts: $b \\ast x = x$ und $x \\ast b = x$. Damit kannst du die ganze $b$-Zeile und $b$-Spalte ausfüllen:\n' +
          '  $b \\ast a = a$, $b \\ast b = b$, $b \\ast c = c$\n' +
          '  $a \\ast b = a$, $c \\ast b = c$',
      },
      {
        icon: '📝',
        titel: 'Die wichtigste Regel: jedes Element einmal pro Zeile/Spalte',
        inhalt:
          'In jeder Gruppen-Verknüpfungstafel kommt in JEDER Zeile und JEDER Spalte jedes Element genau einmal vor (ein „lateinisches Quadrat"). Grund: Käme ein Element zweimal in einer Zeile vor, würde die Kürzungsregel verletzt.\n\n' +
          'Damit lassen sich die restlichen Felder eindeutig ergänzen.',
      },
      {
        icon: '⚠️',
        titel: 'Probe / Assoziativität',
        inhalt:
          'Die fertige Tafel stimmt mit $(\\mathbb{Z}_3, +)$ überein (setze $a = [1]$, $b = [0]$, $c = [2]$). Da $+$ auf $\\mathbb{Z}_3$ assoziativ ist, ist auch $\\ast$ assoziativ – es liegt wirklich eine Gruppe vor.',
      },
    ],
    loesung: '',
    loesungSections: [
      {
        text:
          'Da $b \\ast b = b$ gegeben ist und in einer Gruppe aus $b \\ast b = b \\ast e$ durch Kürzen $b = e$ folgt, ist $b$ das Neutralelement. Damit ergeben sich $b$-Zeile und $b$-Spalte. Mit der Regel „jedes Element kommt in jeder Zeile und Spalte genau einmal vor" werden die übrigen Felder eindeutig ergänzt:',
      },
      {
        text:
          '| $\\ast$ | $a$ | $b$ | $c$ |\n' +
          '| $a$ | $c$ | $a$ | $b$ |\n' +
          '| $b$ | $a$ | $b$ | $c$ |\n' +
          '| $c$ | $b$ | $c$ | $a$ |',
      },
      {
        text:
          'Diese Tafel ist dieselbe wie die von $(\\mathbb{Z}_3, +)$ mit $a = [1]$, $b = [0]$, $c = [2]$. Da die Addition auf $\\mathbb{Z}_3$ assoziativ ist, ist $(G, \\ast)$ eine Gruppe.',
      },
    ],
    schwierigkeit: 'schwer',
    kategorie: 'Gruppen',
  },
]
