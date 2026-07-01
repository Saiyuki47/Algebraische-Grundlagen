import type { ReferenzKarte } from '../../types'

export const karte: ReferenzKarte = {
  id: 'vektorraeume-basen',
  titel: 'Vektorräume & Untervektorräume',
  inhalt:
    '**Worum geht es?**\n' +
    'Ein **Vektorraum** sammelt in wenigen Axiomen genau die Rechenregeln, die Vektoren gemeinsam haben: man darf sie **addieren** und mit **Skalaren** (Zahlen) **strecken/stauchen**, und beides verträgt sich mit dem Rechnen im Körper. Statt jede konkrete Menge — den $\\mathbb{R}^n$, Funktionen, Polynome, Lösungsmengen homogener LGS — einzeln zu untersuchen, beweist man alles **einmal** für „Vektorräume" und wendet es überall an. **Untervektorräume** sind die Teilmengen, in denen man dabei „nicht herausfällt" — sie sind die geometrisch interessanten Objekte (Geraden und Ebenen durch den Ursprung).\n' +
    '\n' +
    '**Definition: Vektorraum über einem Körper**\n' +
    'Sei $K$ ein **Körper** (meist $K = \\mathbb{R}$, auch $K = \\mathbb{C}$). Eine Menge $V$ mit einer **Addition** $+: V \\times V \\to V$ und einer **Skalarmultiplikation** $\\cdot: K \\times V \\to V$ heißt $K$-**Vektorraum** (VR über $K$), falls:\n' +
    '**(V1)** $(V,+)$ ist eine **kommutative (abelsche) Gruppe.** Das heißt: $+$ ist assoziativ und kommutativ, es gibt einen **Nullvektor** $\\vec0$ mit $\\vec v + \\vec0 = \\vec v$, und jedes $\\vec v$ hat ein Negatives $-\\vec v$ mit $\\vec v + (-\\vec v) = \\vec0$.\n' +
    '**(V2)** Für alle $\\lambda, \\mu \\in K$ und $\\vec v, \\vec w \\in V$ gelten die vier Verträglichkeits-/Distributiv-Axiome:\n' +
    '$(\\lambda + \\mu)\\,\\vec v = \\lambda\\,\\vec v + \\mu\\,\\vec v$ , $\\lambda\\,(\\vec v + \\vec w) = \\lambda\\,\\vec v + \\lambda\\,\\vec w$ , $\\lambda\\,(\\mu\\,\\vec v) = (\\lambda\\,\\mu)\\,\\vec v$ , $1\\cdot \\vec v = \\vec v$.\n' +
    'Die Elemente von $V$ heißen **Vektoren**. (Ersetzt man $\\mathbb{R}$ durch $\\mathbb{C}$, erhält man einen $\\mathbb{C}$-Vektorraum.)\n' +
    '\n' +
    '**Das Standardbeispiel: der $\\mathbb{R}^n$**\n' +
    'Der $\\mathbb{R}^n$ (allgemein $K^n$) ist die Menge aller Spalten $\\vec x = (x_1, \\dots, x_n)^{\\mathsf T}$ mit **komponentenweiser** Addition und Skalarmultiplikation:\n' +
    '$\\vec x + \\vec y = (x_1 + y_1, \\dots, x_n + y_n)^{\\mathsf T}$ und $\\lambda\\,\\vec x = (\\lambda x_1, \\dots, \\lambda x_n)^{\\mathsf T}$.\n' +
    'Der **Nullvektor** ist $0_{\\mathbb{R}^n} = (0, \\dots, 0)^{\\mathsf T}$ (oft nur $\\vec0$). Es gelten die Rechenregeln $0\\cdot \\vec x = \\vec0$, $\\lambda\\cdot \\vec0 = \\vec0$, $(-1)\\,\\vec x = -\\vec x$ und $\\lambda\\,\\vec x = \\vec0 \\Rightarrow \\lambda = 0$ oder $\\vec x = \\vec0$. Weitere Vektorräume: **Funktionenräume** (Abbildungen $\\mathbb{R}\\to\\mathbb{R}$ mit punktweiser Addition), **Polynomräume** und die **Lösungsmenge jedes homogenen LGS** in $n$ Unbekannten.\n' +
    '\n' +
    '**Definition: Untervektorraum (UVR)**\n' +
    'Eine Teilmenge $U \\subseteq V$ heißt **Untervektorraum** von $V$, wenn $U$ mit der von $V$ geerbten Addition und Skalarmultiplikation **selbst** ein Vektorraum ist. Man muss dafür nicht alle Axiome neu prüfen — es genügt das **UVR-Kriterium**:\n' +
    '**(U1)** $U \\neq \\emptyset$, genauer $\\vec0 \\in U$ (der Nullvektor liegt in $U$).\n' +
    '**(U2)** $U$ ist **abgeschlossen unter Addition**: für alle $\\vec u, \\vec v \\in U$ ist auch $\\vec u + \\vec v \\in U$.\n' +
    '**(U3)** $U$ ist **abgeschlossen unter Skalarmultiplikation**: für alle $\\lambda \\in K$ und $\\vec u \\in U$ ist auch $\\lambda\\,\\vec u \\in U$.\n' +
    'Sind (U1)–(U3) erfüllt, ist $U$ ein UVR (und damit ein Vektorraum). Der **kleinste** UVR ist $\\{\\vec0\\}$, der **größte** ist $V$ selbst.\n' +
    '\n' +
    '**Prüfschema „Ist $U$ ein UVR?"**\n' +
    '1. **Nullvektor:** Liegt $\\vec0$ in $U$? Wenn **nein**, ist $U$ sofort **kein** UVR (schnellster Test, oft ausschlaggebend).\n' +
    '2. **Addition:** Nimm zwei beliebige $\\vec u, \\vec v \\in U$ und rechne nach, dass $\\vec u + \\vec v$ die definierende Bedingung von $U$ wieder erfüllt.\n' +
    '3. **Skalarmultiplikation:** Nimm $\\lambda \\in K$ und $\\vec u \\in U$ und zeige, dass $\\lambda\\,\\vec u$ die Bedingung wieder erfüllt.\n' +
    'Für **„ist ein UVR"** müssen **alle** drei Punkte allgemein bewiesen werden. Für **„ist kein UVR"** genügt **ein** konkretes **Gegenbeispiel**, das (U1), (U2) **oder** (U3) verletzt.\n' +
    '\n' +
    '**Merkregel & wichtiger Spezialfall**\n' +
    'Anschaulich im $\\mathbb{R}^2$/$\\mathbb{R}^3$: UVRs sind **genau** $\\{\\vec0\\}$, **Geraden durch den Ursprung**, **Ebenen durch den Ursprung** und der ganze Raum. Alles, was **nicht durch den Ursprung** geht (z. B. eine verschobene Gerade) oder „geknickt/berandet" ist, ist **kein** UVR. Besonders nützlich: Die **Lösungsmenge eines homogenen LGS** mit $n$ Unbekannten ist **immer** ein UVR von $\\mathbb{R}^n$ — das erspart oft die Einzelprüfung.\n' +
    '\n' +
    '**Beispiele & Gegenbeispiele im $\\mathbb{R}^2$**\n' +
    '| Menge | UVR? | Grund |\n' +
    '|---|---|---|\n' +
    '| $\\{\\vec x : x_1 \\ge 0,\\ x_2 \\ge 0\\}$ (Quadrant) | nein | nicht abgeschlossen unter $\\cdot$: $-1\\cdot(1,1)^{\\mathsf T} = (-1,-1)^{\\mathsf T}$ fällt heraus |\n' +
    '| $\\{\\vec x : 3x_1 = 2x_2\\}$ (Ursprungsgerade) | ja | Lösungsmenge des homogenen LGS $3x_1 - 2x_2 = 0$ |\n' +
    '| $\\{\\vec x : x_1 x_2 = 0\\}$ (Achsenkreuz) | nein | nicht abgeschlossen unter $+$: $(1,0)^{\\mathsf T} + (0,1)^{\\mathsf T} = (1,1)^{\\mathsf T}$ fällt heraus |\n' +
    '| $\\{\\vec x : \\lvert x_1\\rvert \\le \\lvert x_2\\rvert\\}$ (Doppelkegel) | nein | nicht abgeschlossen unter $+$: $(1,1)^{\\mathsf T} + (1,-1)^{\\mathsf T} = (2,0)^{\\mathsf T}$ fällt heraus |\n' +
    '\n' +
    '**Wie geht es weiter?**\n' +
    'Um einen UVR (oder ganz $V$) kompakt zu **beschreiben**, schreibt man ihn als **lineare Hülle** $\\operatorname{lin}\\{\\vec u, \\vec v, \\dots\\}$ endlich vieler Vektoren (siehe Karte **„Lineare Hülle & Erzeugendensysteme"**). Wählt man dabei möglichst wenige, **linear unabhängige** Vektoren, erhält man eine **Basis**; ihre Anzahl ist die **Dimension** (siehe Karte **„Basis & Dimension"**). Beispiel: $\\{\\vec x \\in \\mathbb{R}^3 : 2x_1 + 3x_2 - x_3 = 0\\}$ ist ein UVR, gleich $\\operatorname{lin}\\{(-\\tfrac32,1,0)^{\\mathsf T}, (\\tfrac12,0,1)^{\\mathsf T}\\}$, mit Dimension $2$ (eine Ebene durch den Ursprung).\n' +
    '\n' +
    '**Häufige Fehler**\n' +
    '• **Nullvektor-Test vergessen:** Enthält $U$ nicht $\\vec0$ (z. B. eine verschobene Gerade), ist $U$ nie ein UVR — ganz ohne weitere Rechnung.\n' +
    '• Für **„kein UVR"** wird ein allgemeiner Beweis geführt, obwohl **ein** Gegenbeispiel reicht; umgekehrt für **„ist UVR"** nur ein Beispiel geprüft statt allgemein.\n' +
    '• Nur **eine** der beiden Abgeschlossenheiten prüfen — man braucht **Addition und** Skalarmultiplikation.\n' +
    '• Ränder/Ungleichungen ($\\ge$, $\\le$, Beträge) übersehen: solche Mengen sind fast nie abgeschlossen unter Skalarmultiplikation mit negativen Zahlen.',
  beispiele: [
    {
      szenario: 'UVR-Kriterium im ℝ² (Übungsblatt 9, Aufg. 1)',
      beispiele: [
        '**Aufgabe:** Ist $U_2 := \\{\\vec x \\in \\mathbb{R}^2 : 3x_1 = 2x_2\\}$ ein Untervektorraum von $\\mathbb{R}^2$?\n**Lösung:** $U_2$ ist die Lösungsmenge des homogenen LGS $3x_1 - 2x_2 = 0$. (U1) $\\vec0$: $3\\cdot0 = 2\\cdot0$, also $\\vec0 \\in U_2$. (U2) Für $\\vec u, \\vec v \\in U_2$ gilt $3u_1 = 2u_2$ und $3v_1 = 2v_2$, addiert $3(u_1+v_1) = 2(u_2+v_2)$, also $\\vec u + \\vec v \\in U_2$. (U3) Für $\\lambda$: $3(\\lambda u_1) = \\lambda(3u_1) = \\lambda(2u_2) = 2(\\lambda u_2)$, also $\\lambda\\vec u \\in U_2$.\n**Ergebnis:** Ja — $U_2$ ist ein UVR (eine Gerade durch den Ursprung).',
        '**Aufgabe:** Ist $U_1 := \\{\\vec x \\in \\mathbb{R}^2 : x_1 \\ge 0,\\ x_2 \\ge 0\\}$ ein Untervektorraum?\n**Lösung:** Der Nullvektor liegt zwar in $U_1$, aber die Skalarmultiplikation scheitert: Es ist $(1,1)^{\\mathsf T} \\in U_1$, jedoch $-1\\cdot(1,1)^{\\mathsf T} = (-1,-1)^{\\mathsf T} \\notin U_1$, da $-1 < 0$. (U3) ist verletzt.\n**Ergebnis:** Nein — $U_1$ ist kein UVR.',
        '**Aufgabe:** Ist $U_3 := \\{\\vec x \\in \\mathbb{R}^2 : x_1 x_2 = 0\\}$ (das Achsenkreuz) ein Untervektorraum?\n**Lösung:** $\\vec0 \\in U_3$ ist erfüllt, aber die Addition scheitert: $(1,0)^{\\mathsf T} \\in U_3$ und $(0,1)^{\\mathsf T} \\in U_3$, jedoch $(1,0)^{\\mathsf T} + (0,1)^{\\mathsf T} = (1,1)^{\\mathsf T}$ mit $1\\cdot1 = 1 \\neq 0$, also $\\notin U_3$. (U2) ist verletzt.\n**Ergebnis:** Nein — $U_3$ ist kein UVR.',
      ],
    },
    {
      szenario: 'Betrags-Bedingung als Gegenbeispiel (Übungsblatt 9, Aufg. 1d)',
      beispiele: [
        '**Aufgabe:** Ist $U_4 := \\{\\vec x \\in \\mathbb{R}^2 : \\lvert x_1\\rvert \\le \\lvert x_2\\rvert\\}$ ein Untervektorraum?\n**Lösung:** Prüfe die Addition an einem Gegenbeispiel: $(1,1)^{\\mathsf T} \\in U_4$ (denn $1 \\le 1$) und $(1,-1)^{\\mathsf T} \\in U_4$ (denn $1 \\le 1$). Ihre Summe ist $(2,0)^{\\mathsf T}$, aber $\\lvert 2\\rvert \\le \\lvert 0\\rvert$ ist falsch, also $(2,0)^{\\mathsf T} \\notin U_4$.\n**Ergebnis:** Nein — $U_4$ ist nicht abgeschlossen unter $+$, also kein UVR.',
        '**Aufgabe:** Warum genügt hier ein einziges Gegenbeispiel?\n**Lösung:** „Ist ein UVR" ist eine **Allaussage** über alle $\\vec u, \\vec v, \\lambda$ — sie zu widerlegen erfordert nur **ein** Paar, das die Abgeschlossenheit bricht. Das obige Paar $(1,1)^{\\mathsf T}, (1,-1)^{\\mathsf T}$ zeigt (U2) verletzt; ein allgemeiner Beweis ist zur Widerlegung überflüssig.\n**Ergebnis:** Ein konkretes Gegenbeispiel reicht, um „kein UVR" zu zeigen.',
        '**Aufgabe:** Liegt der Nullvektor in $U_4$, und reicht das für einen UVR?\n**Lösung:** $\\vec0 = (0,0)^{\\mathsf T}$ erfüllt $\\lvert 0\\rvert \\le \\lvert 0\\rvert$, also $\\vec0 \\in U_4$ — Bedingung (U1) ist erfüllt. Das allein genügt aber **nicht**: (U2) und (U3) müssen zusätzlich gelten, und (U2) scheitert (siehe oben).\n**Ergebnis:** $\\vec0 \\in U_4$, aber $U_4$ ist trotzdem kein UVR.',
      ],
    },
    {
      szenario: 'Ebene als UVR des ℝ³ (Übungsblatt 9, Aufg. 2)',
      beispiele: [
        '**Aufgabe:** Zeige, dass $E := \\{\\vec x \\in \\mathbb{R}^3 : 2x_1 + 3x_2 - x_3 = 0\\}$ ein Untervektorraum von $\\mathbb{R}^3$ ist.\n**Lösung:** (U1) $2\\cdot0 + 3\\cdot0 - 0 = 0$, also $\\vec0 \\in E$. (U2) Für $\\vec x, \\vec y \\in E$ gilt $2(x_1+y_1)+3(x_2+y_2)-(x_3+y_3) = (2x_1+3x_2-x_3)+(2y_1+3y_2-y_3) = 0+0 = 0$, also $\\vec x+\\vec y \\in E$. (U3) Für $\\lambda$: $2\\lambda x_1+3\\lambda x_2-\\lambda x_3 = \\lambda(2x_1+3x_2-x_3) = \\lambda\\cdot0 = 0$, also $\\lambda\\vec x \\in E$.\n**Ergebnis:** $E$ ist ein UVR von $\\mathbb{R}^3$ (Lösungsmenge eines homogenen LGS).',
        '**Aufgabe:** Schreibe $E$ als lineare Hülle $\\operatorname{lin}\\{\\vec u,\\vec v\\}$ und gib eine Basis samt Dimension an.\n**Lösung:** Aus $2x_1+3x_2-x_3 = 0$ folgt $x_3 = 2x_1+3x_2$; mit freien Parametern $x_1 = r,\\ x_2 = s$ ist $\\vec x = r(1,0,2)^{\\mathsf T} + s(0,1,3)^{\\mathsf T}$. (Auflösen nach $x_1$ liefert die zu den Lösungshinweisen äquivalente Darstellung $\\operatorname{lin}\\{(-\\tfrac32,1,0)^{\\mathsf T}, (\\tfrac12,0,1)^{\\mathsf T}\\}$.) Die beiden Erzeuger sind linear unabhängig.\n**Ergebnis:** $E = \\operatorname{lin}\\{(1,0,2)^{\\mathsf T},\\,(0,1,3)^{\\mathsf T}\\}$; diese zwei Vektoren bilden eine Basis, also $\\dim E = 2$ (eine Ebene durch den Ursprung).',
        '**Aufgabe:** Ist die verschobene Menge $E_1 := \\{\\vec x \\in \\mathbb{R}^3 : 2x_1 + 3x_2 - x_3 = 1\\}$ ein Untervektorraum?\n**Lösung:** Prüfe den Nullvektor: $2\\cdot0+3\\cdot0-0 = 0 \\neq 1$, also $\\vec0 \\notin E_1$. Das LGS ist **inhomogen** — seine Lösungsmenge ist eine **verschobene** (affine) Ebene, die nicht durch den Ursprung geht.\n**Ergebnis:** Nein — $E_1$ enthält $\\vec0$ nicht und ist daher kein UVR.',
      ],
    },
  ],
}
