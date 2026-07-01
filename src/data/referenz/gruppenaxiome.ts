import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'gruppenaxiome',
  titel: 'Gruppenaxiome',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine **Gruppe** ist die grundlegendste algebraische Struktur: eine Menge zusammen mit **einer** Rechenoperation, die sich „gutartig" verhält. Statt jede Zahlenmenge einzeln zu untersuchen, sammelt man in den drei **Gruppenaxiomen** genau die Eigenschaften, die man zum Rechnen und Gleichungenlösen ($a \\ast x = b$) wirklich braucht. Alles, was diese Axiome erfüllt — ganze Zahlen mit $+$, Permutationen, Restklassen, Symmetrien —, gehorcht denselben Regeln.\n' +
    '\n' +
    '**Verknüpfung**\n' +
    'Eine **Verknüpfung** auf einer Menge $M$ ist eine Abbildung $\\ast: M \\times M \\to M$. Man schreibt $x \\ast y$ statt $\\ast((x,y))$ (z. B. $3+7$ statt $+((3,7))$). Wichtig ist, dass das Ergebnis $x \\ast y$ **wieder in M liegt** — das nennt man **Abgeschlossenheit**. Beispiel: $+$ und $\\cdot$ sind Verknüpfungen auf $\\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}, \\mathbb{R}, \\mathbb{C}$; $-$ ist eine Verknüpfung auf $\\mathbb{Z}, \\mathbb{Q}, \\mathbb{R}, \\mathbb{C}$, aber **nicht** auf $\\mathbb{N}$ (z. B. $3-5 = -2 \\notin \\mathbb{N}$).\n' +
    '\n' +
    '**Definition: Gruppe**\n' +
    'Sei $G \\neq \\emptyset$ und $\\ast: G \\times G \\to G$ eine Verknüpfung auf $G$. Dann heißt $(G,\\ast)$ (kurz $G$) eine **Gruppe**, falls die drei folgenden Axiome gelten:\n' +
    '**(G1) Assoziativität:** Für alle $a,b,c \\in G$ gilt $a \\ast (b \\ast c) = (a \\ast b) \\ast c$. (Klammern dürfen weggelassen werden.)\n' +
    '**(G2) Neutralelement:** Es existiert ein $e \\in G$, so dass für alle $a \\in G$ gilt $a \\ast e = e \\ast a = a$.\n' +
    '**(G3) Inverses:** Zu jedem $a \\in G$ existiert ein $b \\in G$ mit $a \\ast b = b \\ast a = e$. Notation für das Inverse: $a^{-1}$ (bei $+$ schreibt man $-a$).\n' +
    'Weil $\\ast$ eine Verknüpfung **auf** $G$ ist, steckt die **Abgeschlossenheit** ($a \\ast b \\in G$) bereits in der Voraussetzung — beim Nachprüfen muss man sie aber ausdrücklich zeigen.\n' +
    '\n' +
    '**Abelsch (kommutativ)**\n' +
    'Die Gruppe $(G,\\ast)$ heißt **kommutativ** oder **abelsch**, falls zusätzlich für alle $a,b \\in G$ gilt $a \\ast b = b \\ast a$. Kommutativität ist **kein** Gruppenaxiom: $(\\mathbb{Z},+)$ ist abelsch, die symmetrische Gruppe $(S_3,\\circ)$ dagegen ist eine Gruppe, aber **nicht** abelsch.\n' +
    '\n' +
    '**Eindeutigkeit (Satz)**\n' +
    'In jeder Gruppe $(G,\\ast)$ gilt:\n' +
    '(a) Das **Neutralelement** $e$ ist eindeutig.\n' +
    '(b) Zu jedem $a \\in G$ gibt es **genau ein** inverses Element $a^{-1}$.\n' +
    '(c) Es gelten die **Kürzungsregeln**: aus $a \\ast x = a \\ast y$ folgt $x = y$, und aus $x \\ast a = y \\ast a$ folgt $x = y$.\n' +
    'Deshalb darf man in einer Gruppe „kürzen" — daraus folgt u. a., dass in einer **Verknüpfungstafel** in jeder Zeile und jeder Spalte jedes Element genau einmal vorkommt.\n' +
    '\n' +
    '**Warum gerade diese Axiome?**\n' +
    'Die drei Axiome sind genau das, was man braucht, um Gleichungen der Form $a \\ast x = b$ **eindeutig** zu lösen: $e$ (G2) liefert einen Startpunkt, das Inverse (G3) erlaubt „Wegrechnen" von $a$, und die Assoziativität (G1) sorgt dafür, dass die Reihenfolge der Klammern egal ist. Zusammen ergibt sich die eindeutige Lösung $x = a^{-1} \\ast b$.\n' +
    '\n' +
    '**Wie prüft man, ob $(G,\\ast)$ eine Gruppe ist?**\n' +
    '1. **Abgeschlossenheit:** Liegt $a \\ast b$ für alle $a,b \\in G$ wieder in $G$? (Ein Gegenbeispiel genügt, um „keine Gruppe" zu zeigen.)\n' +
    '2. **(G1) Assoziativität:** meist „erbt" man sie von einer Obermenge (z. B. überträgt sich die Assoziativität von $+$ auf $\\mathbb{R}$ auf jede Teilmenge).\n' +
    '3. **(G2) Neutralelement:** Gibt es ein $e \\in G$ mit $a \\ast e = e \\ast a = a$? Bei $+$ ist das $0$, bei $\\cdot$ ist das $1$.\n' +
    '4. **(G3) Inverse:** Hat **jedes** $a \\in G$ ein Inverses, das selbst wieder in $G$ liegt?\n' +
    'Nur wenn **alle** Punkte erfüllt sind, ist $(G,\\ast)$ eine Gruppe. Optional: für „abelsch" noch $a \\ast b = b \\ast a$ prüfen.\n' +
    '\n' +
    '**Beispiele und Gegenbeispiele**\n' +
    '| $(G,\\ast)$ | Gruppe? | Grund |\n' +
    '|---|---|---|\n' +
    '| $(\\mathbb{Z},+)$ | ja | $e=0$, Inverses zu $a$ ist $-a$ |\n' +
    '| $(\\mathbb{Q},+),\\ (\\mathbb{R},+),\\ (\\mathbb{C},+)$ | ja | wie $\\mathbb{Z}$, abelsch |\n' +
    '| $(\\mathbb{N},+)$ | nein | kein Inverses (z. B. zu $3$ fehlt $-3 \\notin \\mathbb{N}$) |\n' +
    '| $(\\mathbb{Z},\\cdot)$ | nein | nur $\\pm 1$ haben ein Inverses in $\\mathbb{Z}$ |\n' +
    '| $(\\mathbb{Q}\\setminus\\{0\\},\\cdot)$ | ja | $e=1$, Inverses $\\tfrac{1}{a}$ |\n' +
    '| $(S_n,\\circ)$ | ja | Permutationen; für $n\\ge 3$ nicht abelsch |\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• **Abgeschlossenheit vergessen:** Eine Teilmenge kann alle anderen Punkte erfüllen und trotzdem keine Gruppe sein, weil $a \\ast b$ herausfällt.\n' +
    '• Das Inverse **außerhalb** von $G$ suchen: $\\tfrac{1}{a}$ hilft nur, wenn es **selbst** in $G$ liegt.\n' +
    '• Das **falsche** Neutralelement annehmen: das $e$ hängt von der Verknüpfung ab und ist nicht immer $0$ oder $1$ (siehe Beispiel mit $x \\ast y = \\tfrac14 xy$, dort ist $e=4$).\n' +
    '• Kommutativität mit „Gruppe" verwechseln: eine Gruppe muss **nicht** abelsch sein.',
  beispiele: [
    {
      szenario: 'Teilmengen von ℤ mit + (Übungsblatt 5, Aufg. 1)',
      beispiele: [
        '**Aufgabe:** Ist $(G,+)$ mit $G := \\{3z : z \\in \\mathbb{Z}\\}$ (alle Vielfachen von $3$) eine Gruppe?\n**Lösung:** Abgeschlossen: $3z_1 + 3z_2 = 3(z_1+z_2) \\in G$. Assoziativität erbt sich von $\\mathbb{Z}$. Neutralelement $0 = 3\\cdot 0 \\in G$. Inverses zu $3z$ ist $-3z = 3(-z) \\in G$. Alle Axiome erfüllt.\n**Ergebnis:** Ja, $(G,+)$ ist eine (abelsche) Gruppe.',
        '**Aufgabe:** Ist $(G,+)$ mit $G := \\{z \\in \\mathbb{Z} : z \\text{ durch } 2 \\text{ oder } 3 \\text{ teilbar}\\}$ eine Gruppe?\n**Lösung:** Prüfe zuerst die Abgeschlossenheit. Es sind $2 \\in G$ (durch $2$ teilbar) und $3 \\in G$ (durch $3$ teilbar), aber $2 + 3 = 5$ ist weder durch $2$ noch durch $3$ teilbar, also $5 \\notin G$.\n**Ergebnis:** Nein — $G$ ist nicht abgeschlossen bezüglich $+$.',
        '**Aufgabe:** Ist $(G,+)$ mit $G := \\{1\\}$ eine Gruppe?\n**Lösung:** $G$ enthält nur die $1$. Abgeschlossenheit verletzt: $1 \\in G$, aber $1 + 1 = 2 \\notin G$. (Zum Vergleich: $(\\{1\\},\\cdot)$ **wäre** eine Gruppe, da $1\\cdot 1 = 1$.)\n**Ergebnis:** Nein, $(G,+)$ ist keine Gruppe.',
      ],
    },
    {
      szenario: 'Intervalle und komplexe Zahlen (Übungsblatt 5, Aufg. 2)',
      beispiele: [
        '**Aufgabe:** Ist $((0,\\infty),\\cdot)$ eine Gruppe?\n**Lösung:** Produkt zweier positiver Zahlen ist positiv, also abgeschlossen. Assoziativität erbt sich von $\\mathbb{R}$. Neutralelement $1 \\in (0,\\infty)$. Inverses zu $x>0$ ist $\\tfrac{1}{x} \\in (0,\\infty)$. Alle Axiome erfüllt.\n**Ergebnis:** Ja, eine Gruppe. (Dagegen ist $((0,\\infty),+)$ **keine** Gruppe — es fehlt das Neutralelement $0$.)',
        '**Aufgabe:** Ist $((-\\infty,0),\\cdot)$ eine Gruppe?\n**Lösung:** Prüfe Abgeschlossenheit: $(-1)\\cdot(-2) = 2$, aber $2 \\notin (-\\infty,0)$. Das Produkt zweier negativer Zahlen ist positiv und fällt aus der Menge heraus.\n**Ergebnis:** Nein — nicht abgeschlossen bezüglich $\\cdot$.',
        '**Aufgabe:** Ist $(T,\\cdot)$ mit $T = \\{z \\in \\mathbb{C} : \\lvert z\\rvert = 1\\}$ (Einheitskreis) eine Gruppe?\n**Lösung:** Für $z,w \\in T$ ist $\\lvert zw\\rvert = \\lvert z\\rvert\\,\\lvert w\\rvert = 1$, also $zw \\in T$ (abgeschlossen). Assoziativität von $\\mathbb{C}$. Neutralelement $1 \\in T$. Für $z \\in T$ ist $\\lvert \\tfrac1z\\rvert = \\tfrac{1}{\\lvert z\\rvert} = 1$, also $\\tfrac1z \\in T$ das Inverse.\n**Ergebnis:** Ja, $(T,\\cdot)$ ist eine Gruppe.',
      ],
    },
    {
      szenario: 'Neutral- und Inverses bestimmen (Übungsblatt 5, Aufg. 3)',
      beispiele: [
        '**Aufgabe:** Auf $\\mathbb{Q}\\setminus\\{0\\}$ sei $x \\ast y := \\tfrac14 \\cdot x \\cdot y$. Bestimme das Neutralelement $e$.\n**Lösung:** Gesucht $e$ mit $e \\ast x = x$ für alle $x$, also $\\tfrac14 \\cdot e \\cdot x = x$. Kürzen von $x \\neq 0$ liefert $\\tfrac14 e = 1$, somit $e = 4$. Probe: $4 \\ast x = \\tfrac14\\cdot 4\\cdot x = x$.\n**Ergebnis:** $e = 4$.',
        '**Aufgabe:** Bestimme für dieselbe Verknüpfung $x \\ast y = \\tfrac14 xy$ das Inverse zu $x \\in \\mathbb{Q}\\setminus\\{0\\}$.\n**Lösung:** Gesucht $b$ mit $x \\ast b = e = 4$, also $\\tfrac14 \\cdot x \\cdot b = 4 \\Rightarrow x \\cdot b = 16 \\Rightarrow b = \\tfrac{16}{x}$. Probe: $x \\ast \\tfrac{16}{x} = \\tfrac14\\cdot x \\cdot \\tfrac{16}{x} = 4 = e$.\n**Ergebnis:** $x^{-1} = \\tfrac{16}{x}$.',
        '**Aufgabe:** Zeige, dass die Kürzungsregel „$a \\ast x = a \\ast y \\Rightarrow x = y$" in jeder Gruppe gilt.\n**Lösung:** Multipliziere $a \\ast x = a \\ast y$ von links mit $a^{-1}$: $a^{-1} \\ast (a \\ast x) = a^{-1} \\ast (a \\ast y)$. Mit (G1) wird daraus $(a^{-1} \\ast a) \\ast x = (a^{-1} \\ast a) \\ast y$, also $e \\ast x = e \\ast y$ und mit (G2) schließlich $x = y$.\n**Ergebnis:** Die Kürzungsregel folgt direkt aus den drei Axiomen.',
      ],
    },
  ],
}
