import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'pruefziffern',
  titel: 'Prüfziffern',
  inhalt:
    '**Worum geht es?**\n' +
    'Bei Nummern wie ISBN, Barcode (EAN) oder IBAN passieren beim Abtippen leicht Fehler. Eine **Prüfziffer** ist eine Extra-Ziffer, die aus den übrigen Ziffern so berechnet wird, dass die ganze Nummer eine feste Rechenprobe erfüllt. Tippt man sich bei einer Ziffer, ist die Probe verletzt und der Fehler fällt sofort auf. Das ist eine direkte Anwendung von Restklassen und Rechnen $\\bmod m$: Man wählt die Prüfziffer so, dass eine **gewichtete Quersumme** $\\equiv 0 \\pmod m$ ist.\n' +
    '\n' +
    '**Grundidee: gewichtete Quersumme $\\equiv 0$**\n' +
    'Man nummeriere die Ziffern einer Nummer von rechts: $x_1$ ist die rechte Ziffer (die Prüfziffer), $x_2, x_3, \\dots$ folgen nach links. Jede Ziffer $x_k$ bekommt ein festes **Gewicht** $g_k$. Die Prüfziffer $x_1$ wird so gewählt, dass\n' +
    '$\\sum_k g_k\\, x_k \\equiv 0 \\pmod m$,\n' +
    'also in $\\mathbb{Z}_m$ gilt $\\left[\\sum_k g_k x_k\\right] = [0]$. Nach der Prüfziffer aufgelöst: $[x_1] = -\\left[\\sum_{k\\ge 2} g_k x_k\\right]$ (falls $g_1 = 1$). Der Modul $m$ und die Gewichte $g_k$ legen das jeweilige Verfahren fest.\n' +
    '\n' +
    '**ISBN-10 (Modul $11$, Gewichte $10,9,\\dots,1$)**\n' +
    'Eine ISBN-10 hat die Form $x_{10}\\text{-}x_9 x_8 x_7\\text{-}x_6 x_5 x_4 x_3 x_2\\text{-}x_1$ mit $x_{10},\\dots,x_2 \\in \\{0,\\dots,9\\}$ und Prüfziffer $x_1 \\in \\{0,\\dots,9,10\\}$. Sie ist **gültig**, falls in $\\mathbb{Z}_{11}$\n' +
    '$\\left[\\sum_{k=1}^{10} k\\cdot x_k\\right] = [0]$,\n' +
    'd. h. Ziffer $x_k$ wird mit ihrer Positionsnummer $k$ gewichtet. Von links gelesen sind die Gewichte also $10,9,8,\\dots,2,1$. Da $x_1 = 10$ vorkommen kann, aber nur eine Ziffer geschrieben wird, notiert man den Wert $10$ als **X**. Der Modul $11$ ist eine **Primzahl** — deshalb ist $\\mathbb{Z}_{11}$ ein Körper und **jedes** Element $\\neq [0]$ invertierbar.\n' +
    '\n' +
    '**ISBN-13 / EAN-13 (Modul $10$, Gewichte $1,3,1,3,\\dots$)**\n' +
    'Der 13-stellige Barcode (EAN-13, zugleich ISBN-13) benutzt $m = 10$. Von **links** gezählt haben die Stellen abwechselnd die Gewichte $1,3,1,3,\\dots$; die Prüfziffer ist die 13. Stelle mit Gewicht $1$. Gültig heißt: $\\sum_{k} g_k x_k \\equiv 0 \\pmod{10}$. Zum **Berechnen** der Prüfziffer $p$ nimmt man die gewichtete Summe $s$ der ersten $12$ Stellen und setzt $p = (10 - (s \\bmod 10)) \\bmod 10$.\n' +
    '\n' +
    '**Verifizieren vs. Prüfziffer berechnen**\n' +
    'Zwei verwandte Aufgaben, gleiches Schema:\n' +
    '• **Verifizieren:** Alle Ziffern (inkl. Prüfziffer) sind gegeben. Rechne $\\left[\\sum_k g_k x_k\\right]$ in $\\mathbb{Z}_m$. Ergebnis $[0]$ → Nummer gültig, sonst fehlerhaft.\n' +
    '• **Berechnen/Ergänzen:** Eine Ziffer (meist die Prüfziffer) fehlt. Setze die Unbekannte als Variable an, bilde die gewichtete Summe, und löse die Kongruenz $\\equiv [0] \\pmod m$ nach der Unbekannten auf.\n' +
    '\n' +
    '**Schritt für Schritt (Prüfziffer / fehlende Ziffer bestimmen)**\n' +
    '1. Ziffern von rechts durchnummerieren ($x_1$ = rechte/Prüfziffer) und die richtigen Gewichte $g_k$ zuordnen.\n' +
    '2. Alle **bekannten** Produkte $g_k x_k$ bilden und aufsummieren; das gibt eine Basiszahl $s$.\n' +
    '3. In $\\mathbb{Z}_m$ reduzieren: $[s] = [s \\bmod m]$.\n' +
    '4. Kongruenz $[s] + [g_j][x_j] = [0]$ nach der Unbekannten $x_j$ auflösen: $[x_j] = [g_j]^{-1}\\bigl(-[s]\\bigr)$. Ist $g_j = 1$, einfach $[x_j] = [-s]$.\n' +
    '5. Repräsentanten in $\\{0,\\dots,m-1\\}$ wählen (bei ISBN-10 ist $x_1 = 10$ als X erlaubt).\n' +
    '\n' +
    '**Welche Fehler werden erkannt?**\n' +
    'Bei ISBN-10 (Modul $11$) werden **immer** erkannt:\n' +
    '• **Einzelfehler** (genau eine falsche Ziffer an Position $l$),\n' +
    '• **Zahlendreher** (Vertauschung genau zweier Ziffern an Positionen $l, m$).\n' +
    'Der Grund steckt in der Differenz zweier Nummern: Ein Einzelfehler ändert die Summe um $[g_l](y_l - x_l)$, ein Zahlendreher um $[g_l - g_m](x_m - x_l)$. Ist der jeweilige Faktor ($[g_l]$ bzw. $[g_l - g_m]$) **invertierbar**, so ist die Änderung $\\neq [0]$, und der Fehler bricht die Probe.\n' +
    '\n' +
    '**Warum Primzahl-Modul $11$ mehr erkennt als $10$**\n' +
    'In $\\mathbb{Z}_{11}$ (Körper) ist jedes $[g_l]\\neq[0]$ und jedes $[g_l-g_m]\\neq[0]$ invertierbar → **alle** Einzelfehler und **alle** Zahlendreher werden erkannt. In $\\mathbb{Z}_{10}$ ist $10 = 2\\cdot 5$ **keine** Primzahl; $[2]$ und $[5]$ sind **Nullteiler** und nicht invertierbar. Bei EAN-13 ist $g_l - g_m = \\pm 2$; wegen $[2]\\cdot[5]=[0]$ bleibt ein Zahlendreher **unerkannt**, sobald die beiden getauschten Ziffern sich um $5$ unterscheiden (z. B. $2 \\leftrightarrow 7$). Allgemein: Für ein Verfahren $\\bmod n$ wähle die Gewichte so, dass $[g_l]$ (Einzelfehler) bzw. $[g_l - g_m]$ (Zahlendreher) in $\\mathbb{Z}_n$ invertierbar sind — bei einem Primzahl-Modul ist das automatisch für alle Positionen erfüllt.\n' +
    '\n' +
    '**Überblick der Verfahren**\n' +
    '| Verfahren | Länge | Modul $m$ | Gewichte $g_k$ | Prüfziffer | erkennt alle Zahlendreher? |\n' +
    '|---|---|---|---|---|---|\n' +
    '| ISBN-10 | 10 | 11 (prim) | $10,9,\\dots,1$ | $0\\text{–}9$ oder X | ja |\n' +
    '| ISBN-13 / EAN-13 | 13 | 10 | $1,3,1,3,\\dots$ | $0\\text{–}9$ | nein |\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• Gewichte falsch herum zuordnen — bei ISBN-10 hat die **linke** Ziffer Gewicht $10$, die **rechte** (Prüfziffer) Gewicht $1$.\n' +
    '• $\\bmod 11$ und $\\bmod 10$ verwechseln (ISBN-10 vs. EAN-13).\n' +
    '• Prüfziffer $10$ bei ISBN-10 als „$10$" hinschreiben statt als **X**.\n' +
    '• Beim Auflösen $[x_1] = [-s]$ das Vorzeichen vergessen; $[-s]$ noch in $\\{0,\\dots,m-1\\}$ bringen (z. B. $[-8] = [3]$ in $\\mathbb{Z}_{11}$).\n' +
    '• Bei einem Gewicht $g_j \\neq 1$ das **Inverse** $[g_j]^{-1}$ vergessen (nur bei $g_j = 1$ darf man direkt $[x_j] = [-s]$ setzen).',
  beispiele: [
    {
      szenario: 'ISBN-10: Prüfziffer berechnen',
      beispiele: [
        '**Aufgabe:** Bestimme die Prüfziffer $x_1$ zu $3\\text{-}519\\text{-}32079\\text{-}?$ (ISBN-10).\n**Lösung:** Von links Gewichte $10,9,\\dots,2$ auf $3,5,1,9,3,2,0,7,9$: $10\\cdot3+9\\cdot5+8\\cdot1+7\\cdot9+6\\cdot3+5\\cdot2+4\\cdot0+3\\cdot7+2\\cdot9 = 213$. Also $\\sum k x_k = 213 + 1\\cdot x_1$. Bedingung $[213 + x_1] = [0]$ in $\\mathbb{Z}_{11}$; wegen $213 = 19\\cdot 11 + 4$ ist $[213] = [4]$, also $[x_1] = [-4] = [7]$.\n**Ergebnis:** Prüfziffer $x_1 = 7$, gültige ISBN $3\\text{-}519\\text{-}32079\\text{-}7$ (Kontrolle: Gesamtsumme $220 = 20\\cdot 11$).',
        '**Aufgabe:** Ergänze $y \\in \\{0,\\dots,10\\}$ so, dass $3\\text{-}528\\text{-}97217\\text{-}y$ eine gültige ISBN-10 wird.\n**Lösung:** In $\\mathbb{Z}_{11}$: $\\sum_{k=1}^{10} k x_k = 10\\cdot3+9\\cdot5+8\\cdot2+7\\cdot8+6\\cdot9+5\\cdot7+4\\cdot2+3\\cdot1+2\\cdot7 + 1\\cdot y = 261 + y$. Es ist $261 = 23\\cdot 11 + 8$, also $[261 + y] = [8] + [y]$. Bedingung $[8]+[y]=[0] \\Leftrightarrow [y] = [-8] = [3]$.\n**Ergebnis:** $y = 3$.',
        '**Aufgabe:** Ergänze $z \\in \\{0,\\dots,9\\}$ in $3\\text{-}540\\text{-}z7431\\text{-}9$ (ISBN-10).\n**Lösung:** Hier steht die Unbekannte an der Stelle $x_6$ (Gewicht $6$). $\\sum k x_k = 10\\cdot3+9\\cdot5+8\\cdot4+7\\cdot0+6\\cdot z+5\\cdot7+4\\cdot3+3\\cdot3+2\\cdot1+1\\cdot9 = 178 + 6z$. Wegen $178 = 16\\cdot 11 + 2$ folgt $[2] + [6][z] = [0] \\Leftrightarrow [6][z] = [-2] = [9]$. Inverses: $[6]^{-1} = [2]$ in $\\mathbb{Z}_{11}$ (denn $6\\cdot 2 = 12 \\equiv 1$), also $[z] = [2][9] = [18] = [7]$.\n**Ergebnis:** $z = 7$.',
      ],
    },
    {
      szenario: 'ISBN-13 / EAN-13 (Modul 10)',
      beispiele: [
        '**Aufgabe:** Bestimme die Prüfziffer von $978\\text{-}3\\text{-}16\\text{-}148410\\text{-}?$ (ISBN-13).\n**Lösung:** Erste 12 Ziffern $9,7,8,3,1,6,1,4,8,4,1,0$ mit Gewichten $1,3,1,3,\\dots$ von links: $1\\cdot9+3\\cdot7+1\\cdot8+3\\cdot3+1\\cdot1+3\\cdot6+1\\cdot1+3\\cdot4+1\\cdot8+3\\cdot4+1\\cdot1+3\\cdot0 = 100$. Prüfziffer $p = (10 - (100 \\bmod 10)) \\bmod 10 = (10 - 0)\\bmod 10 = 0$.\n**Ergebnis:** $p = 0$, gültige ISBN-13 $978\\text{-}3\\text{-}16\\text{-}148410\\text{-}0$.',
        '**Aufgabe:** Ist der EAN-13-Code $4\\,006381\\,333930$ gültig?\n**Lösung:** Alle 13 Ziffern mit Gewichten $1,3,1,3,\\dots$: gewichtete Summe der ersten 12 Ziffern $4,0,0,6,3,8,1,3,3,3,9,3$ ist $1\\cdot4+3\\cdot0+1\\cdot0+3\\cdot6+1\\cdot3+3\\cdot8+1\\cdot1+3\\cdot3+1\\cdot3+3\\cdot3+1\\cdot9+3\\cdot3 = 89$. Nötige Prüfziffer $p = (10 - (89\\bmod 10))\\bmod 10 = (10 - 9) = 1$. Angegeben ist aber $0$.\n**Ergebnis:** ungültig — die Prüfziffer müsste $1$ sein, korrekt wäre $4\\,006381\\,333931$.',
        '**Aufgabe:** Warum bleibt der Zahlendreher $2 \\leftrightarrow 7$ bei EAN-13 unerkannt?\n**Lösung:** Werden zwei benachbarte Stellen mit Gewichten $g_l = 1$, $g_m = 3$ vertauscht, ändert sich die Summe um $[g_l - g_m](x_m - x_l) = [-2](x_m - x_l)$ in $\\mathbb{Z}_{10}$. Für $\\{x_l,x_m\\}=\\{2,7\\}$ ist $x_m - x_l = \\pm 5$, also $[-2]\\cdot[\\pm 5] = [\\mp 10] = [0]$ — die Probe bleibt erfüllt.\n**Ergebnis:** Der Dreher wird nicht erkannt, weil $[2]$ in $\\mathbb{Z}_{10}$ ein Nullteiler ist; mit Primzahl-Modul $11$ (ISBN-10) könnte das nicht passieren.',
      ],
    },
    {
      szenario: 'Fehlererkennung begründen',
      beispiele: [
        '**Aufgabe:** Zeige allgemein, dass ISBN-10 jeden Einzelfehler erkennt.\n**Lösung:** Sei $y_l = x_l + d$ mit $d \\neq 0$ die einzige falsche Ziffer (Position $l$, Gewicht $g_l = l$). Die Prüfsumme ändert sich um $[g_l](y_l - x_l) = [l]\\,[d]$. In $\\mathbb{Z}_{11}$ (Körper, $11$ prim) sind $[l] \\neq [0]$ (für $1 \\le l \\le 10$) und $[d]\\neq[0]$ beide invertierbar, also $[l][d] \\neq [0]$.\n**Ergebnis:** Die Summe ist nicht mehr $[0]$ — der Einzelfehler wird immer erkannt.',
        '**Aufgabe:** Wähle die Gewichte für ein Verfahren $\\bmod 10$, das jeden Einzelfehler erkennt.\n**Lösung:** Ein Einzelfehler an Position $l$ wird erkannt, wenn $[g_l]$ in $\\mathbb{Z}_{10}$ invertierbar ist, d. h. $\\gcd(g_l, 10) = 1$. Zulässige Gewichte sind daher $[1],[3],[7],[9]$ (nicht $[2],[4],[5],[6],[8]$, denn diese teilen $10$ bzw. sind Nullteiler). EAN-13 nutzt genau $g \\in \\{1,3\\}$.\n**Ergebnis:** Gewichte aus $\\{1,3,7,9\\}$ nehmen; mit $\\{1,3\\}$ werden alle Einzelfehler, aber nicht alle Zahlendreher erkannt.',
        '**Aufgabe:** Prüfe, ob $3\\text{-}519\\text{-}32709\\text{-}7$ (Zahlendreher gegenüber der gültigen ISBN) von der ISBN-10-Probe erkannt wird.\n**Lösung:** In der gültigen $3\\text{-}519\\text{-}32079\\text{-}7$ ist $x_4 = 0$, $x_3 = 7$ (Position von rechts, Gewichte $g_4 = 4$, $g_3 = 3$). In der fehlerhaften Nummer sind sie vertauscht. Die Summe ändert sich um $[g_3 - g_4](x_4 - x_3) = [3-4]\\,[0-7] = [-1]\\,[-7] = [7] \\neq [0]$ in $\\mathbb{Z}_{11}$. Neue Summe $[220] + [7] = [7]$.\n**Ergebnis:** $\\neq [0]$ — der Zahlendreher wird erkannt.',
      ],
    },
  ],
}
