import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'basis-dimension',
  titel: 'Basis & Dimension',
  inhalt:
    '**Worum geht es?**\n' +
    'Eine **Basis** ist ein möglichst sparsames „Koordinatensystem" für einen Vektorraum: gerade so viele Vektoren, dass man damit jeden Punkt des Raums erreicht (Erzeugendensystem), aber keiner zu viel (linear unabhängig). Dadurch lässt sich jeder Vektor **eindeutig** aus den Basisvektoren zusammensetzen — seine **Koordinaten**. Die **Dimension** zählt, wie viele Basisvektoren nötig sind, und ist damit ein Maß für die „Größe" des Raums. Beides baut direkt auf $\\text{lin}\\{\\dots\\}$ (lineare Hülle) und der linearen Unabhängigkeit auf.\n' +
    '\n' +
    '**Definition (Basis & Dimension)**\n' +
    'Sei $U$ ein Untervektorraum des $\\mathbb{R}^n$ mit $U\\neq\\{0\\}$ und $b_1,\\dots,b_k\\in U$. Dann ist $\\{b_1,\\dots,b_k\\}$ eine **Basis** von $U$, falls\n' +
    '1. $b_1,\\dots,b_k$ **linear unabhängig** sind, und\n' +
    '2. $\\text{lin}\\{b_1,\\dots,b_k\\}=U$ gilt (die Basis **erzeugt** $U$).\n' +
    'Die Anzahl $k$ heißt **Dimension** von $U$, Schreibweise $\\dim U=k$. Für $U=\\{0\\}$ setzt man die leere Menge als Basis und $\\dim U=0$.\n' +
    'Kurz: **Basis = linear unabhängiges Erzeugendensystem**.\n' +
    '\n' +
    '**Warum eindeutige Koordinaten?**\n' +
    'Ist $B=\\{b_1,\\dots,b_k\\}$ eine Basis von $U$, so gibt es zu jedem $v\\in U$ **eindeutig** bestimmte Zahlen $\\lambda_1,\\dots,\\lambda_k\\in\\mathbb{R}$ mit $v=\\lambda_1 b_1+\\dots+\\lambda_k b_k$. Diese $\\lambda_i$ sind die **Koordinaten** von $v$ bezüglich $B$. „Erzeugendensystem" sichert, dass die Darstellung überhaupt existiert; „linear unabhängig" sichert, dass sie eindeutig ist. Verschiedene Basen liefern für denselben Vektor verschiedene Koordinaten.\n' +
    '\n' +
    '**Kanonische Basis (Standardbasis) des $\\mathbb{R}^n$**\n' +
    'Der wichtigste Fall: $\\vec e_k$ hat an Position $k$ eine $1$ und sonst nur $0$. Dann ist $\\{\\vec e_1,\\dots,\\vec e_n\\}$ die **kanonische Basis** (Standardbasis) des $\\mathbb{R}^n$, und es gilt $\\dim\\mathbb{R}^n=n$. Beispiel im $\\mathbb{R}^3$: $\\vec e_1=(1,0,0)^{\\top}$, $\\vec e_2=(0,1,0)^{\\top}$, $\\vec e_3=(0,0,1)^{\\top}$. Die Koordinaten bezüglich der Standardbasis sind gerade die Einträge des Vektors selbst.\n' +
    '\n' +
    '**Wie prüft man, ob Vektoren eine Basis bilden?**\n' +
    'Für $k$ Vektoren $b_1,\\dots,b_k\\in\\mathbb{R}^n$:\n' +
    '1. **Anzahl abgleichen:** Eine Basis des $\\mathbb{R}^n$ braucht **genau** $n$ Vektoren. Bei $k\\neq n$ ist es **keine** Basis von $\\mathbb{R}^n$ — sofort fertig (zu wenige erzeugen nicht, zu viele sind abhängig).\n' +
    '2. **Auf lineare Unabhängigkeit testen:** Vektoren als **Spalten** in eine Matrix $A$ schreiben und $\\text{Rang}(A)$ bestimmen. Ist $\\text{Rang}(A)=$ Anzahl der Spalten, sind sie unabhängig.\n' +
    '3. **Determinante** (nur bei $k=n$): Bei genau $n$ Vektoren im $\\mathbb{R}^n$ ist $A$ quadratisch. Dann gilt: unabhängig $\\iff\\det A\\neq 0$.\n' +
    'Kürzel-Satz: Sind $n$ Vektoren im $\\mathbb{R}^n$ linear unabhängig, so bilden sie **automatisch** eine Basis — man muss das Erzeugen nicht mehr extra zeigen.\n' +
    '\n' +
    '**Basis eines Untervektorraums (Spann $\\to$ Rang)**\n' +
    'Ist $U=\\text{lin}\\{v_1,\\dots,v_m\\}$ als Erzeugendensystem gegeben, dünnt man zu einer Basis aus: die $v_i$ als Spalten in $A$ schreiben, $\\text{Rang}(A)$ bestimmen. Dann ist $\\dim U=\\text{Rang}(A)$, und eine Basis erhält man, indem man so viele der $v_i$ behält, dass sie linear unabhängig bleiben (die „überzähligen", abhängigen Vektoren streichen — **Ausdünnen**). Umgekehrt lässt sich ein linear unabhängiges System zu einer Basis **ergänzen** (Basisergänzungssatz), bis es den gewünschten Raum erzeugt.\n' +
    '\n' +
    '**Nützliche Sätze (ohne Beweis)**\n' +
    'Sei $U$ ein UVR des $\\mathbb{R}^n$ mit $\\dim U=n$.\n' +
    '| Situation | Folgerung |\n' +
    '|---|---|\n' +
    '| $n+1$ Vektoren in $U$ | stets linear **abhängig** |\n' +
    '| $n$ linear unabhängige Vektoren in $U$ | bilden **bereits** eine Basis |\n' +
    '| beliebiger UVR $U$ | besitzt (mindestens) eine Basis |\n' +
    '| $U\\neq\\{0\\}$ | besitzt unendlich viele Basen, alle **gleich groß** |\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Die richtige **Anzahl** mit „ist Basis" verwechseln: $n$ Vektoren im $\\mathbb{R}^n$ sind nur dann Basis, wenn sie zusätzlich unabhängig sind.\n' +
    '• Vektoren als **Zeilen** statt Spalten in die Matrix schreiben (für Rang egal, aber unsauber und fehleranfällig bei $\\det$).\n' +
    '• Den Nullvektor in eine Basis aufnehmen — jedes System mit $0$ ist linear abhängig, kann also keine Basis sein.\n' +
    '• $\\dim$ eines Spanns direkt an der Anzahl der Erzeuger ablesen: erst **ausdünnen** ($\\dim=\\text{Rang}$), doppelte/abhängige zählen nicht.',
  beispiele: [
    {
      szenario: 'Prüfen, ob Vektoren eine Basis bilden',
      beispiele: [
        '**Aufgabe:** Ist $\\left\\{(1,1,0,0)^{\\top},(0,1,1,0)^{\\top},(0,0,1,1)^{\\top}\\right\\}$ eine Basis von $\\mathbb{R}^4$?\n**Lösung:** Es ist $\\dim\\mathbb{R}^4=4$, für eine Basis braucht man also **genau 4** Vektoren. Hier sind es nur 3 — sie können $\\mathbb{R}^4$ nicht erzeugen.\n**Ergebnis:** Keine Basis (zu wenige Vektoren).',
        '**Aufgabe:** Ist $\\left\\{(1,1,0)^{\\top},(1,0,0)^{\\top},(0,0,1)^{\\top},(1,2,1)^{\\top}\\right\\}$ eine Basis von $\\mathbb{R}^3$?\n**Lösung:** $\\dim\\mathbb{R}^3=3$, es sind aber 4 Vektoren. Vier Vektoren im $\\mathbb{R}^3$ sind stets linear abhängig.\n**Ergebnis:** Keine Basis (zu viele Vektoren).',
        '**Aufgabe:** Bilden $(1,0,-2)^{\\top},(2,1,-1)^{\\top},(-1,1,5)^{\\top}$ eine Basis von $\\mathbb{R}^3$?\n**Lösung:** Anzahl passt ($3=\\dim\\mathbb{R}^3$), also nur noch Unabhängigkeit testen. Spaltenmatrix $A=\\begin{pmatrix}1&2&-1\\\\0&1&1\\\\-2&-1&5\\end{pmatrix}$; Zeilenumformungen $(iii)+2\\,(i)$, dann $(iii)-3\\,(ii)$ liefern eine Nullzeile, also $\\text{Rang}(A)=2<3$. Die Vektoren sind linear abhängig.\n**Ergebnis:** Keine Basis (linear abhängig).',
      ],
    },
    {
      szenario: 'Basis & Dimension eines Untervektorraums',
      beispiele: [
        '**Aufgabe:** Bestimme eine Basis und $\\dim E$ für $E=\\left\\{(x_1,x_2,x_3)^{\\top}\\in\\mathbb{R}^3:2x_1+3x_2-x_3=0\\right\\}$.\n**Lösung:** $E$ ist die Lösungsmenge eines homogenen LGS, also ein UVR. Auflösen nach $x_3=2x_1+3x_2$ mit freien $x_1=r,\\ x_2=s$: $(x_1,x_2,x_3)^{\\top}=r\\,(1,0,2)^{\\top}+s\\,(0,1,3)^{\\top}$. Also $E=\\text{lin}\\{(1,0,2)^{\\top},(0,1,3)^{\\top}\\}$; diese beiden Vektoren sind linear unabhängig (kein Vielfaches voneinander).\n**Ergebnis:** Basis $\\{(1,0,2)^{\\top},(0,1,3)^{\\top}\\}$, $\\dim E=2$.',
        '**Aufgabe:** Bestimme $\\dim U$ und eine Basis für $U=\\text{lin}\\{(1,0,0)^{\\top},(-1,0,0)^{\\top}\\}\\subseteq\\mathbb{R}^3$.\n**Lösung:** Der zweite Vektor ist $-1$ mal dem ersten, also linear abhängig — **ausdünnen**. Es bleibt $\\{(1,0,0)^{\\top}\\}$, das $U$ bereits erzeugt: $U=\\{(x_1,0,0)^{\\top}:x_1\\in\\mathbb{R}\\}$.\n**Ergebnis:** Basis $\\{(1,0,0)^{\\top}\\}$, $\\dim U=1$ (Ursprungsgerade).',
        '**Aufgabe:** Welche Dimension hat $U=\\text{lin}\\{(1,2,3)^{\\top},(2,3,1)^{\\top}\\}\\subseteq\\mathbb{R}^3$?\n**Lösung:** Spaltenmatrix $A=\\begin{pmatrix}1&2\\\\2&3\\\\3&1\\end{pmatrix}$; $(ii)-2\\,(i),\\ (iii)-3\\,(i)$ ergeben $\\begin{pmatrix}1&2\\\\0&-1\\\\0&-5\\end{pmatrix}$, dann $(iii)-5\\,(ii)$ eine Nullzeile: $\\text{Rang}(A)=2$. Beide Erzeuger sind unabhängig, keiner fällt weg.\n**Ergebnis:** $\\dim U=2$, Basis $\\{(1,2,3)^{\\top},(2,3,1)^{\\top}\\}$ (eine Ebene durch $0$).',
      ],
    },
    {
      szenario: 'Basis-Test mit Determinante (k = n)',
      beispiele: [
        '**Aufgabe:** Für welche $t\\in\\mathbb{R}$ bilden $(1,1,1)^{\\top},(t,1,2)^{\\top},(1,t,2)^{\\top}$ eine Basis von $\\mathbb{R}^3$?\n**Lösung:** Anzahl $3=\\dim\\mathbb{R}^3$, also Basis $\\iff$ unabhängig $\\iff\\det\\neq 0$. Mit Sarrus: $\\det\\begin{pmatrix}1&t&1\\\\1&1&t\\\\1&2&2\\end{pmatrix}=2+t^2+2-1-2t-2t=t^2-4t+3$. Nullstellen $t^2-4t+3=0\\Rightarrow t=1$ oder $t=3$.\n**Ergebnis:** Basis für alle $t\\in\\mathbb{R}\\setminus\\{1,3\\}$.',
        '**Aufgabe:** Bilden $(1,-1,4)^{\\top},(-1,0,-1)^{\\top},(-1,-3,2)^{\\top}$ eine Basis von $\\mathbb{R}^3$?\n**Lösung:** Anzahl passt; Determinante der Spaltenmatrix per Zeilenstufenform $\\begin{pmatrix}1&-1&-1\\\\0&-1&-4\\\\0&0&-6\\end{pmatrix}$ (obere Dreiecksmatrix): $\\det=1\\cdot(-1)\\cdot(-6)=6\\neq 0$. Also unabhängig, und $3$ unabhängige Vektoren im $\\mathbb{R}^3$ sind bereits eine Basis.\n**Ergebnis:** Ja, eine Basis von $\\mathbb{R}^3$.',
        '**Aufgabe:** Ist $\\{\\vec e_1,\\vec e_2,\\vec e_3\\}$ mit $\\vec e_1=(1,0,0)^{\\top}$ usw. eine Basis von $\\mathbb{R}^3$, und was sind die Koordinaten von $v=(5,-2,7)^{\\top}$?\n**Lösung:** Die Spaltenmatrix ist die Einheitsmatrix, $\\det=1\\neq 0$: kanonische Basis. Koordinaten bzgl. $\\{\\vec e_1,\\vec e_2,\\vec e_3\\}$ liest man direkt ab, denn $v=5\\vec e_1-2\\vec e_2+7\\vec e_3$.\n**Ergebnis:** Basis; Koordinaten $(5,-2,7)$ — gleich den Einträgen von $v$.',
      ],
    },
  ],
}
