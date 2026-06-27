import type { Aufgabe } from '../../types'

export const b9: Aufgabe[] = [
  // ─── Aufgabe 1: Untervektorräume des R² (a/b/c/d, mit Skizze) ─────────────
  {
    id: 'b9_a1a',
    titel: 'Untervektorraum? – $U_1$ (erster Quadrant)',
    aufgabeText: 'Skizzieren Sie die Teilmenge des $\\mathbb{R}^2$ und entscheiden Sie, ob sie ein Untervektorraum von $\\mathbb{R}^2$ ist.\n\n$U_1 := \\left\\{ \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix} \\in \\mathbb{R}^2 : x_1 \\geq 0,\\, x_2 \\geq 0 \\right\\}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was ist ein Untervektorraum (UVR)?',
        inhalt:
          'Eine Teilmenge $U \\subseteq \\mathbb{R}^2$ ist ein Untervektorraum, wenn drei Dinge gelten:\n' +
          '1. Der Nullvektor liegt in $U$.\n' +
          '2. $U$ ist abgeschlossen unter Addition: $u, v \\in U \\Rightarrow u + v \\in U$.\n' +
          '3. $U$ ist abgeschlossen unter Skalarmultiplikation: $u \\in U$, $\\lambda \\in \\mathbb{R} \\Rightarrow \\lambda u \\in U$.\n\n' +
          'Verletzt EINE Bedingung, ist es kein UVR.',
      },
      {
        icon: '🔍',
        titel: 'Die Menge verstehen',
        inhalt:
          '$U_1$ besteht aus allen Punkten mit beiden Koordinaten $\\geq 0$ – das ist der erste Quadrant (rechte obere Ecke der Ebene), inklusive der Achsen.',
      },
      {
        icon: '📝',
        titel: 'Skalarmultiplikation testen',
        inhalt:
          'Am leichtesten widerlegt man die Skalarmultiplikation mit einem negativen Faktor:\n' +
          '  $\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} \\in U_1$, aber $-1 \\cdot \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ -1 \\end{pmatrix}$ hat negative Koordinaten, liegt also NICHT in $U_1$.',
      },
      {
        icon: '⚠️',
        titel: 'Folgerung',
        inhalt:
          '• $U_1$ ist kein UVR. Anschauliche Regel: Ein UVR im $\\mathbb{R}^2$ ist immer entweder nur der Nullpunkt, eine Gerade durch 0 oder ganz $\\mathbb{R}^2$ – ein Quadrant gehört nicht dazu.',
      },
    ],
    loesung: '',
    loesungSections: [
      {
        text:
          '$U_1$ ist KEIN Untervektorraum.\n\n' +
          'Gegenbeispiel (Skalarmultiplikation): $\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} \\in U_1$, aber $-1 \\cdot \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ -1 \\end{pmatrix} \\notin U_1$.\n\n' +
          'Skizze (erster Quadrant):',
        graphId: 'b9_a1a',
      },
    ],
    schwierigkeit: 'mittel',
    kategorie: 'Vektorräume',
  },
  {
    id: 'b9_a1b',
    titel: 'Untervektorraum? – $U_2$ (Gerade durch 0)',
    aufgabeText: 'Skizzieren Sie die Teilmenge des $\\mathbb{R}^2$ und entscheiden Sie, ob sie ein Untervektorraum von $\\mathbb{R}^2$ ist.\n\n$U_2 := \\left\\{ \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix} \\in \\mathbb{R}^2 : 3x_1 = 2x_2 \\right\\}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Die Menge verstehen',
        inhalt:
          '$3x_1 = 2x_2$ ist eine lineare Gleichung. Umgestellt: $x_2 = \\frac{3}{2}x_1$ – eine Gerade durch den Ursprung mit Steigung $\\frac{3}{2}$.',
      },
      {
        icon: '🔍',
        titel: 'Warum ist eine Gerade durch 0 ein UVR?',
        inhalt:
          '$U_2$ ist die Lösungsmenge des homogenen LGS $3x_1 - 2x_2 = 0$. Lösungsmengen homogener LGS sind immer Untervektorräume.\n\n' +
          'Man kann es auch direkt prüfen:\n' +
          '  Nullvektor: $3\\cdot 0 = 2\\cdot 0$ ✓\n' +
          '  Addition und Skalarmultiplikation: bleiben auf der Geraden.',
      },
      {
        icon: '📝',
        titel: 'Kurzprüfung',
        inhalt:
          'Sind $u, v$ auf der Geraden ($3u_1 = 2u_2$ und $3v_1 = 2v_2$), so gilt für $u+v$: $3(u_1+v_1) = 2(u_2+v_2)$ ✓. Analog für $\\lambda u$.',
      },
      {
        icon: '⚠️',
        titel: 'Folgerung',
        inhalt:
          '• $U_2$ ist ein UVR. Jede GERADE DURCH DEN URSPRUNG ist ein Untervektorraum des $\\mathbb{R}^2$.',
      },
    ],
    loesung: '',
    loesungSections: [
      {
        text:
          '$U_2$ IST ein Untervektorraum.\n\n' +
          'Begründung: $U_2$ ist die Lösungsmenge des homogenen LGS $3x_1 - 2x_2 = 0$ und damit ein Untervektorraum. (Geometrisch: eine Gerade durch den Ursprung.)\n\n' +
          'Skizze (Gerade $x_2 = \\frac{3}{2}x_1$):',
        graphId: 'b9_a1b',
      },
    ],
    schwierigkeit: 'mittel',
    kategorie: 'Vektorräume',
  },
  {
    id: 'b9_a1c',
    titel: 'Untervektorraum? – $U_3$ (Achsenkreuz)',
    aufgabeText: 'Skizzieren Sie die Teilmenge des $\\mathbb{R}^2$ und entscheiden Sie, ob sie ein Untervektorraum von $\\mathbb{R}^2$ ist.\n\n$U_3 := \\left\\{ \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix} \\in \\mathbb{R}^2 : x_1 x_2 = 0 \\right\\}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Die Menge verstehen',
        inhalt:
          'Ein Produkt $x_1 x_2$ ist genau dann $0$, wenn $x_1 = 0$ ODER $x_2 = 0$. Das sind genau die beiden Koordinatenachsen (das „Achsenkreuz").',
      },
      {
        icon: '🔍',
        titel: 'Abgeschlossenheit unter Addition testen',
        inhalt:
          'Nimm einen Punkt von jeder Achse:\n' +
          '  $\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} \\in U_3$ (auf der $x_1$-Achse) und $\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} \\in U_3$ (auf der $x_2$-Achse).',
      },
      {
        icon: '📝',
        titel: 'Gegenbeispiel',
        inhalt:
          'Summe: $\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} + \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$.\n\n' +
          'Für diesen Punkt ist $x_1 x_2 = 1 \\cdot 1 = 1 \\neq 0$, also liegt er NICHT in $U_3$. Die Addition führt aus der Menge heraus.',
      },
      {
        icon: '⚠️',
        titel: 'Folgerung',
        inhalt:
          '• $U_3$ ist kein UVR. Zwei Geraden (das ganze Achsenkreuz) sind zusammen kein Untervektorraum – nur eine einzelne Gerade durch 0 wäre einer.',
      },
    ],
    loesung: '',
    loesungSections: [
      {
        text:
          '$U_3$ ist KEIN Untervektorraum.\n\n' +
          'Gegenbeispiel (Addition): $\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} \\in U_3$, aber $\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} + \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} \\notin U_3$.\n\n' +
          'Skizze (beide Achsen):',
        graphId: 'b9_a1c',
      },
    ],
    schwierigkeit: 'mittel',
    kategorie: 'Vektorräume',
  },
  {
    id: 'b9_a1d',
    titel: 'Untervektorraum? – $U_4$ ($|x_1| \\leq |x_2|$)',
    aufgabeText: 'Skizzieren Sie die Teilmenge des $\\mathbb{R}^2$ und entscheiden Sie, ob sie ein Untervektorraum von $\\mathbb{R}^2$ ist.\n\n$U_4 := \\left\\{ \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix} \\in \\mathbb{R}^2 : |x_1| \\leq |x_2| \\right\\}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Die Menge verstehen',
        inhalt:
          '$|x_1| \\leq |x_2|$ heißt: der waagerechte Abstand zur $x_2$-Achse ist höchstens so groß wie der senkrechte. Das ergibt die beiden „Keile" ober- und unterhalb des Ursprungs (zwischen den Winkelhalbierenden $x_2 = x_1$ und $x_2 = -x_1$).',
      },
      {
        icon: '🔍',
        titel: 'Abgeschlossenheit unter Addition testen',
        inhalt:
          'Suche zwei Punkte in $U_4$, deren Summe herausfällt:\n' +
          '  $\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} \\in U_4$ (denn $|1| \\leq |1|$) und $\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} \\in U_4$ (denn $|1| \\leq |-1|$).',
      },
      {
        icon: '📝',
        titel: 'Gegenbeispiel',
        inhalt:
          'Summe: $\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} + \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}$.\n\n' +
          'Prüfe: $|2| \\leq |0|$? Nein, $2 > 0$. Also liegt $\\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix}$ nicht in $U_4$.',
      },
      {
        icon: '⚠️',
        titel: 'Folgerung',
        inhalt:
          '• $U_4$ ist kein UVR. Obwohl der Nullvektor enthalten ist und Skalarmultiplikation funktioniert, scheitert die Addition.',
      },
    ],
    loesung: '',
    loesungSections: [
      {
        text:
          '$U_4$ ist KEIN Untervektorraum.\n\n' +
          'Gegenbeispiel (Addition): $\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}, \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} \\in U_4$, aber $\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} + \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 0 \\end{pmatrix} \\notin U_4$.\n\n' +
          'Skizze (Doppelkeil zwischen den Winkelhalbierenden):',
        graphId: 'b9_a1d',
      },
    ],
    schwierigkeit: 'mittel',
    kategorie: 'Vektorräume',
  },

  // ─── Aufgabe 2: Ebene E als UVR, lineare Hülle, Basis, Dimension ──────────
  {
    id: 'b9_a2',
    titel: 'Ebene $E$: Untervektorraum, lineare Hülle, Basis, Dimension',
    aufgabeText:
      'Überlegen Sie, dass $E := \\left\\{ \\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{pmatrix} \\in \\mathbb{R}^3 : 2x_1 + 3x_2 - x_3 = 0 \\right\\}$ ein Untervektorraum von $\\mathbb{R}^3$ ist. Geben Sie zwei Vektoren $u, v \\in \\mathbb{R}^3$ an, sodass $E = \\mathrm{lin}\\{u, v\\}$ gilt. Geben Sie außerdem eine Basis von $E$ an. Was ist die Dimension von $E$?\n\n' +
      'Hinweis: $E$ ist die Lösungsmenge des homogenen LGS $2x_1 + 3x_2 - x_3 = 0$. Bestimmen Sie zuerst die Lösungsmenge und überlegen, wie Sie sie mit den Regeln der Vektorrechnung schreiben können.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Warum ist $E$ ein UVR?',
        inhalt:
          '$E$ ist die Lösungsmenge eines homogenen LGS (rechte Seite $= 0$). Solche Lösungsmengen sind immer Untervektorräume. Man kann die drei Bedingungen auch direkt prüfen:\n' +
          '  Nullvektor: $2\\cdot 0 + 3\\cdot 0 - 0 = 0$ ✓\n' +
          '  Addition und Skalarmultiplikation: die Gleichung $2x_1 + 3x_2 - x_3 = 0$ bleibt erfüllt (sie ist linear).',
      },
      {
        icon: '🔍',
        titel: 'Lösungsmenge mit Parametern',
        inhalt:
          'Die Gleichung $2x_1 + 3x_2 - x_3 = 0$ hat zwei freie Variablen. Setze $r = x_1$ und $s = x_3$ (oder andere Wahl). Aus der Gleichung:\n' +
          '  $x_2 = \\frac{1}{3}(x_3 - 2x_1)$\n\n' +
          'Hier wählt die Musterlösung $x_2 = r$ und $x_3 = s$ als freie Variablen und löst nach $x_1$ auf: $x_1 = \\frac{1}{2}(x_3 - 3x_2) = -\\frac{3}{2}r + \\frac{1}{2}s$.',
      },
      {
        icon: '📝',
        titel: 'Als lineare Hülle schreiben',
        inhalt:
          'Schreibe den allgemeinen Lösungsvektor als Summe der Parameter-Anteile:\n' +
          '  $\\begin{pmatrix} -\\frac{3}{2}r + \\frac{1}{2}s \\\\ r \\\\ s \\end{pmatrix} = r\\begin{pmatrix} -\\frac{3}{2} \\\\ 1 \\\\ 0 \\end{pmatrix} + s\\begin{pmatrix} \\frac{1}{2} \\\\ 0 \\\\ 1 \\end{pmatrix}$\n\n' +
          'Die beiden Vektoren davor sind $u$ und $v$. Damit ist $E = \\mathrm{lin}\\{u, v\\}$.',
      },
      {
        icon: '⚠️',
        titel: 'Basis und Dimension',
        inhalt:
          'Die zwei erzeugenden Vektoren $u, v$ sind linear unabhängig (keiner ist Vielfaches des anderen) und erzeugen $E$ → sie bilden eine Basis.\n\n' +
          '• Die Dimension ist die Anzahl der Basisvektoren, hier $\\dim E = 2$ (eine Ebene durch den Ursprung).',
      },
    ],
    loesung:
      '$E$ ist ein Untervektorraum von $\\mathbb{R}^3$: Es ist die Lösungsmenge des homogenen LGS $2x_1 + 3x_2 - x_3 = 0$. Man prüft die drei Bedingungen:\n' +
      '  (i) $\\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix} \\in E$ (denn $0 = 0$).\n' +
      '  (ii) Für $x, y \\in E$ ist $2(x_1+y_1) + 3(x_2+y_2) - (x_3+y_3) = 0 + 0 = 0$, also $x + y \\in E$.\n' +
      '  (iii) Für $\\lambda \\in \\mathbb{R}$, $x \\in E$ ist $2\\lambda x_1 + 3\\lambda x_2 - \\lambda x_3 = \\lambda(2x_1+3x_2-x_3) = 0$, also $\\lambda x \\in E$.\n\n' +
      'Lösungsmenge mit freien Variablen $r = x_2$, $s = x_3$:\n' +
      '  $E = \\left\\{ r\\begin{pmatrix} -\\frac{3}{2} \\\\ 1 \\\\ 0 \\end{pmatrix} + s\\begin{pmatrix} \\frac{1}{2} \\\\ 0 \\\\ 1 \\end{pmatrix} : r, s \\in \\mathbb{R} \\right\\} = \\mathrm{lin}\\left\\{ \\begin{pmatrix} -\\frac{3}{2} \\\\ 1 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} \\frac{1}{2} \\\\ 0 \\\\ 1 \\end{pmatrix} \\right\\}$\n\n' +
      'Mit $u = \\begin{pmatrix} -\\frac{3}{2} \\\\ 1 \\\\ 0 \\end{pmatrix}$ und $v = \\begin{pmatrix} \\frac{1}{2} \\\\ 0 \\\\ 1 \\end{pmatrix}$ gilt $E = \\mathrm{lin}\\{u, v\\}$. Da $u, v$ linear unabhängig sind, bilden sie eine Basis von $E$. Die Dimension von $E$ ist also $2$.',
    schwierigkeit: 'schwer',
    kategorie: 'Vektorräume',
  },

  // ─── Aufgabe 3: lineare Hüllen (a/b/c/d) ──────────────────────────────────
  {
    id: 'b9_a3a',
    titel: 'Lineare Hülle (a): richtig oder falsch?',
    aufgabeText: 'Ist die folgende Aussage richtig?\n\n$\\mathrm{lin}\\left\\{ \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} 0 \\\\ 1 \\\\ 0 \\end{pmatrix} \\right\\} = \\mathrm{lin}\\left\\{ \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix} \\right\\}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was ist die lineare Hülle?',
        inhalt:
          'Die lineare Hülle $\\mathrm{lin}\\{v_1, \\ldots, v_k\\}$ ist die Menge ALLER Linearkombinationen $\\lambda_1 v_1 + \\ldots + \\lambda_k v_k$. Anschaulich: der kleinste Untervektorraum, der die gegebenen Vektoren enthält.',
      },
      {
        icon: '🔍',
        titel: 'Dimensionen vergleichen',
        inhalt:
          'Links: zwei linear unabhängige Vektoren → die Hülle ist eine EBENE (Dimension 2), nämlich die $x_1$-$x_2$-Ebene.\n\n' +
          'Rechts: ein einzelner Vektor → die Hülle ist eine GERADE (Dimension 1) durch den Ursprung.',
      },
      {
        icon: '📝',
        titel: 'Schlussfolgerung',
        inhalt:
          'Eine Ebene (Dim 2) kann nicht gleich einer Geraden (Dim 1) sein. Die Aussage ist also FALSCH.\n\n' +
          'Konkret: $\\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$ liegt links in der Hülle, rechts aber nicht (kein Vielfaches von $\\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}$).',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Tipp: Unterschiedliche Dimensionen der Hüllen sind ein schnelles Argument für „ungleich".',
      },
    ],
    loesung:
      'FALSCH.\n\n' +
      'Links spannen zwei unabhängige Vektoren eine Ebene auf (Dimension 2, die $x_1$-$x_2$-Ebene), rechts spannt ein Vektor nur eine Gerade auf (Dimension 1). Eine Ebene ist nicht gleich einer Geraden. (Z.B. liegt $\\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$ links in der Hülle, rechts aber nicht.)',
    schwierigkeit: 'mittel',
    kategorie: 'Vektorräume',
  },
  {
    id: 'b9_a3b',
    titel: 'Lineare Hülle (b): richtig oder falsch?',
    aufgabeText: 'Ist die folgende Aussage richtig?\n\n$\\mathrm{lin}\\left\\{ \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix} \\right\\} = \\left\\{ \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix} \\right\\}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Hülle des Nullvektors',
        inhalt:
          'Die lineare Hülle besteht aus allen Vielfachen $\\lambda \\cdot \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix}$.',
      },
      {
        icon: '🔍',
        titel: 'Was ergibt $\\lambda \\cdot 0$?',
        inhalt:
          'Egal welches $\\lambda$ man wählt: $\\lambda \\cdot \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix}$. Es entsteht immer nur der Nullvektor.',
      },
      {
        icon: '📝',
        titel: 'Schlussfolgerung',
        inhalt:
          'Die Hülle enthält also genau ein Element, den Nullvektor. Das ist genau die Menge auf der rechten Seite. Die Aussage ist RICHTIG.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• $\\{0\\}$ ist der kleinstmögliche Untervektorraum (Dimension 0).',
      },
    ],
    loesung:
      'RICHTIG.\n\n' +
      'Jedes Vielfache des Nullvektors ist wieder der Nullvektor: $\\lambda \\cdot \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\end{pmatrix}$. Die Hülle besteht also nur aus dem Nullvektor – das ist genau die rechte Menge.',
    schwierigkeit: 'einfach',
    kategorie: 'Vektorräume',
  },
  {
    id: 'b9_a3c',
    titel: 'Lineare Hülle (c): richtig oder falsch?',
    aufgabeText: 'Ist die folgende Aussage richtig?\n\n$\\mathrm{lin}\\left\\{ \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} -1 \\\\ 0 \\\\ 0 \\end{pmatrix} \\right\\} = \\left\\{ \\begin{pmatrix} x_1 \\\\ 0 \\\\ 0 \\end{pmatrix} : x_1 \\in \\mathbb{R} \\right\\}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Sind die Vektoren unabhängig?',
        inhalt:
          'Beachte: $\\begin{pmatrix} -1 \\\\ 0 \\\\ 0 \\end{pmatrix} = -1 \\cdot \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$. Der zweite Vektor ist ein Vielfaches des ersten – sie sind linear abhängig.',
      },
      {
        icon: '🔍',
        titel: 'Die Hülle bestimmen',
        inhalt:
          'Da der zweite Vektor nichts Neues hinzufügt, ist die Hülle dieselbe wie die des ersten Vektors allein:\n' +
          '  $\\mathrm{lin}\\left\\{ \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix} \\right\\} = \\left\\{ \\lambda \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix} : \\lambda \\in \\mathbb{R} \\right\\}$',
      },
      {
        icon: '📝',
        titel: 'Vergleichen',
        inhalt:
          'Das sind genau alle Vektoren der Form $\\begin{pmatrix} x_1 \\\\ 0 \\\\ 0 \\end{pmatrix}$ – die $x_1$-Achse. Das stimmt mit der rechten Seite überein. RICHTIG.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Ein zusätzlicher Vektor, der ein Vielfaches eines vorhandenen ist, vergrößert die Hülle nicht.',
      },
    ],
    loesung:
      'RICHTIG.\n\n' +
      'Es ist $\\begin{pmatrix} -1 \\\\ 0 \\\\ 0 \\end{pmatrix} = -\\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}$, also ein Vielfaches des ersten Vektors. Die Hülle ist daher die der $x_1$-Achse: alle Vektoren $\\begin{pmatrix} x_1 \\\\ 0 \\\\ 0 \\end{pmatrix}$ mit $x_1 \\in \\mathbb{R}$ – genau die rechte Menge.',
    schwierigkeit: 'mittel',
    kategorie: 'Vektorräume',
  },
  {
    id: 'b9_a3d',
    titel: 'Lineare Hülle (d): richtig oder falsch?',
    aufgabeText: 'Ist die folgende Aussage richtig?\n\n$\\mathrm{lin}\\left\\{ \\begin{pmatrix} \\cos(3) \\\\ 0 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} 0 \\\\ -4 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} 0 \\\\ 0 \\\\ \\sqrt{2} \\end{pmatrix} \\right\\} = \\mathbb{R}^3$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Drei Achsenvektoren',
        inhalt:
          'Die drei Vektoren zeigen jeweils in eine Koordinatenrichtung ($x_1$, $x_2$, $x_3$), nur mit anderen Längen. Wichtig ist nur: sind die Vorfaktoren ungleich Null?',
      },
      {
        icon: '🔍',
        titel: 'Vorfaktoren prüfen',
        inhalt:
          '  $\\cos(3) \\approx -0{,}99 \\neq 0$\n' +
          '  $-4 \\neq 0$\n' +
          '  $\\sqrt{2} \\approx 1{,}41 \\neq 0$\n\n' +
          'Alle drei sind ungleich Null. (Wichtig: $\\cos(3)$ meint das Bogenmaß, nicht $3°$; es ist sicher nicht Null.)',
      },
      {
        icon: '📝',
        titel: 'Schlussfolgerung',
        inhalt:
          'Drei Vektoren, die jeweils in eine eigene Achsenrichtung zeigen (mit Faktor $\\neq 0$), sind linear unabhängig und spannen den ganzen $\\mathbb{R}^3$ auf. Die Aussage ist RICHTIG.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Drei linear unabhängige Vektoren im $\\mathbb{R}^3$ bilden immer eine Basis und erzeugen ganz $\\mathbb{R}^3$.',
      },
    ],
    loesung:
      'RICHTIG.\n\n' +
      'Die drei Vektoren zeigen in die drei Achsenrichtungen mit Faktoren $\\cos(3) \\neq 0$, $-4 \\neq 0$ und $\\sqrt{2} \\neq 0$. Sie sind daher linear unabhängig und spannen ganz $\\mathbb{R}^3$ auf.',
    schwierigkeit: 'mittel',
    kategorie: 'Vektorräume',
  },

  // ─── Aufgabe 4: lineare Unabhängigkeit (i–vi) ─────────────────────────────
  {
    id: 'b9_a4i',
    titel: 'Lineare Unabhängigkeit (i): vier Vektoren im $\\mathbb{R}^4$',
    aufgabeText: 'Prüfen Sie auf lineare Unabhängigkeit:\n$\\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\\\ 1 \\end{pmatrix}, \\begin{pmatrix} 1 \\\\ 2 \\\\ 2 \\\\ 1 \\end{pmatrix}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was heißt linear unabhängig?',
        inhalt:
          'Vektoren sind linear unabhängig, wenn die einzige Linearkombination, die den Nullvektor ergibt, die triviale ist ($\\lambda_1 = \\ldots = \\lambda_k = 0$).\n\n' +
          'Praktisch: schreibe die Vektoren als Spalten in eine Matrix und bringe sie auf Zeilenstufenform. Stimmt der Rang mit der Anzahl der Vektoren überein → unabhängig; sonst abhängig.',
      },
      {
        icon: '🔍',
        titel: 'Matrix aufstellen',
        inhalt:
          'Die vier Vektoren als Spalten:\n' +
          '  $\\begin{pmatrix} 1 & 0 & 0 & 1 \\\\ 1 & 1 & 0 & 2 \\\\ 0 & 1 & 1 & 2 \\\\ 0 & 0 & 1 & 1 \\end{pmatrix}$\n\n' +
          'Mit (ii)$-$(i), dann (iii)$-$(ii), dann (iv)$-$(iii) eliminieren.',
      },
      {
        icon: '📝',
        titel: 'Rang ablesen',
        inhalt:
          'Nach den Umformungen entsteht eine Nullzeile:\n' +
          '  $\\begin{pmatrix} 1 & 0 & 0 & 1 \\\\ 0 & 1 & 0 & 1 \\\\ 0 & 0 & 1 & 1 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$\n\n' +
          'Rang $= 3$, aber es gibt $4$ Vektoren. Rang $< $ Anzahl → linear ABHÄNGIG.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Tatsächlich gilt hier $v_4 = v_1 + v_2 + v_3$ – der vierte Vektor ist überflüssig.',
      },
    ],
    loesung:
      'Prüfe, ob $\\lambda_1 v_1 + \\lambda_2 v_2 + \\lambda_3 v_3 + \\lambda_4 v_4 = 0$ nur trivial lösbar ist. Vektoren als Spalten, Umformung (ii)$-$(i), (iii)$-$(ii), (iv)$-$(iii):\n' +
      '$\\begin{pmatrix} 1 & 0 & 0 & 1 \\\\ 1 & 1 & 0 & 2 \\\\ 0 & 1 & 1 & 2 \\\\ 0 & 0 & 1 & 1 \\end{pmatrix} \\longrightarrow \\begin{pmatrix} 1 & 0 & 0 & 1 \\\\ 0 & 1 & 0 & 1 \\\\ 0 & 0 & 1 & 1 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$\n\n' +
      'Rang $= 3 < 4 = $ Anzahl der Vektoren → das homogene LGS ist nicht eindeutig lösbar. Die Vektoren sind LINEAR ABHÄNGIG.',
    schwierigkeit: 'schwer',
    kategorie: 'Vektorräume',
  },
  {
    id: 'b9_a4ii',
    titel: 'Lineare Unabhängigkeit (ii): zwei Vektoren',
    aufgabeText: 'Prüfen Sie auf lineare Unabhängigkeit:\n$\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} 2 \\\\ 3 \\\\ 1 \\\\ 0 \\end{pmatrix}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Zwei Vektoren: schneller Test',
        inhalt:
          'Zwei Vektoren sind genau dann linear abhängig, wenn einer ein Vielfaches des anderen ist. Sonst sind sie unabhängig.',
      },
      {
        icon: '🔍',
        titel: 'Vielfaches prüfen',
        inhalt:
          'Wäre $v_2 = \\lambda v_1$, müsste aus der ersten Komponente $2 = \\lambda \\cdot 1$, also $\\lambda = 2$ folgen. Dann müsste aber auch $3 = 2 \\cdot 2 = 4$ gelten – falsch. Also kein Vielfaches.',
      },
      {
        icon: '📝',
        titel: 'Oder über den Rang',
        inhalt:
          'Als Spalten und mit (ii)$-2$(i), (iii)$-3$(i):\n' +
          '  $\\begin{pmatrix} 1 & 2 \\\\ 2 & 3 \\\\ 3 & 1 \\\\ 0 & 0 \\end{pmatrix} \\to \\begin{pmatrix} 1 & 2 \\\\ 0 & -1 \\\\ 0 & -5 \\\\ 0 & 0 \\end{pmatrix} \\xrightarrow{(\\mathrm{iii})-5(\\mathrm{ii})} \\begin{pmatrix} 1 & 2 \\\\ 0 & -1 \\\\ 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$\n\n' +
          'Rang $= 2 = $ Anzahl der Vektoren.',
      },
      {
        icon: '⚠️',
        titel: 'Folgerung',
        inhalt:
          '• Rang gleich Anzahl → linear UNABHÄNGIG.',
      },
    ],
    loesung:
      'Vektoren als Spalten, Umformung (ii)$-2$(i), (iii)$-3$(i), dann (iii)$-5$(ii):\n' +
      '$\\begin{pmatrix} 1 & 2 \\\\ 2 & 3 \\\\ 3 & 1 \\\\ 0 & 0 \\end{pmatrix} \\longrightarrow \\begin{pmatrix} 1 & 2 \\\\ 0 & -1 \\\\ 0 & -5 \\\\ 0 & 0 \\end{pmatrix} \\longrightarrow \\begin{pmatrix} 1 & 2 \\\\ 0 & -1 \\\\ 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$\n\n' +
      'Rang $= 2 = $ Anzahl der Vektoren → nur die triviale Lösung $\\lambda_1 = \\lambda_2 = 0$. Die Vektoren sind LINEAR UNABHÄNGIG.',
    schwierigkeit: 'mittel',
    kategorie: 'Vektorräume',
  },
  {
    id: 'b9_a4iii',
    titel: 'Lineare Unabhängigkeit (iii): ein Vektor',
    aufgabeText: 'Prüfen Sie auf lineare Unabhängigkeit:\n$\\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\\\ 4 \\end{pmatrix}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Ein einzelner Vektor',
        inhalt:
          'Ein einzelner Vektor ist genau dann linear unabhängig, wenn er NICHT der Nullvektor ist.',
      },
      {
        icon: '🔍',
        titel: 'Bedingung prüfen',
        inhalt:
          'Es gilt $\\lambda \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\\\ 4 \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\\\ 0 \\\\ 0 \\end{pmatrix}$ nur für $\\lambda = 0$, weil der Vektor Einträge ungleich Null hat (z.B. die $1$).',
      },
      {
        icon: '📝',
        titel: 'Schlussfolgerung',
        inhalt:
          'Da nur $\\lambda = 0$ den Nullvektor liefert, ist der Vektor linear unabhängig.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Nur der Nullvektor allein wäre linear abhängig (siehe Teil (vi)).',
      },
    ],
    loesung:
      'Es gilt $\\lambda \\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\\\ 4 \\end{pmatrix} = 0$ genau dann, wenn $\\lambda = 0$ (der Vektor ist nicht der Nullvektor). Somit ist der Vektor LINEAR UNABHÄNGIG.',
    schwierigkeit: 'einfach',
    kategorie: 'Vektorräume',
  },
  {
    id: 'b9_a4iv',
    titel: 'Lineare Unabhängigkeit (iv): drei Vektoren im $\\mathbb{R}^3$',
    aufgabeText: 'Prüfen Sie auf lineare Unabhängigkeit:\n$\\begin{pmatrix} 1 \\\\ -1 \\\\ 4 \\end{pmatrix}, \\begin{pmatrix} -1 \\\\ 0 \\\\ -1 \\end{pmatrix}, \\begin{pmatrix} -1 \\\\ -3 \\\\ 2 \\end{pmatrix}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Drei Vektoren im $\\mathbb{R}^3$',
        inhalt:
          'Bei genau $n$ Vektoren im $\\mathbb{R}^n$ kann man auch die Determinante nutzen: $\\det \\neq 0$ → unabhängig. Hier zeigen wir es über die Zeilenstufenform (Rang).',
      },
      {
        icon: '🔍',
        titel: 'Eliminieren',
        inhalt:
          'Vektoren als Spalten:\n' +
          '  $\\begin{pmatrix} 1 & -1 & -1 \\\\ -1 & 0 & -3 \\\\ 4 & -1 & 2 \\end{pmatrix}$\n\n' +
          'Mit (ii)$+$(i) und (iii)$-4$(i), dann (iii)$+3$(ii).',
      },
      {
        icon: '📝',
        titel: 'Rang ablesen',
        inhalt:
          'Ergebnis:\n' +
          '  $\\begin{pmatrix} 1 & -1 & -1 \\\\ 0 & -1 & -4 \\\\ 0 & 0 & -6 \\end{pmatrix}$\n\n' +
          'Drei Pivots → Rang $= 3 = $ Anzahl der Vektoren.',
      },
      {
        icon: '⚠️',
        titel: 'Folgerung',
        inhalt:
          '• Rang gleich Anzahl → linear UNABHÄNGIG.',
      },
    ],
    loesung:
      'Vektoren als Spalten, Umformung (ii)$+$(i), (iii)$-4$(i), dann (iii)$+3$(ii):\n' +
      '$\\begin{pmatrix} 1 & -1 & -1 \\\\ -1 & 0 & -3 \\\\ 4 & -1 & 2 \\end{pmatrix} \\longrightarrow \\begin{pmatrix} 1 & -1 & -1 \\\\ 0 & -1 & -4 \\\\ 0 & 3 & 6 \\end{pmatrix} \\longrightarrow \\begin{pmatrix} 1 & -1 & -1 \\\\ 0 & -1 & -4 \\\\ 0 & 0 & -6 \\end{pmatrix}$\n\n' +
      'Rang $= 3 = $ Anzahl der Vektoren → nur die triviale Lösung. Die Vektoren sind LINEAR UNABHÄNGIG.',
    schwierigkeit: 'schwer',
    kategorie: 'Vektorräume',
  },
  {
    id: 'b9_a4v',
    titel: 'Lineare Unabhängigkeit (v): drei Vektoren im $\\mathbb{R}^3$',
    aufgabeText: 'Prüfen Sie auf lineare Unabhängigkeit:\n$\\begin{pmatrix} 1 \\\\ 0 \\\\ -2 \\end{pmatrix}, \\begin{pmatrix} 2 \\\\ 1 \\\\ -1 \\end{pmatrix}, \\begin{pmatrix} -1 \\\\ 1 \\\\ 5 \\end{pmatrix}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Vorgehen',
        inhalt:
          'Wieder die Vektoren als Spalten in eine Matrix und auf Zeilenstufenform bringen. Rang mit Anzahl der Vektoren (3) vergleichen.',
      },
      {
        icon: '🔍',
        titel: 'Eliminieren',
        inhalt:
          '  $\\begin{pmatrix} 1 & 2 & -1 \\\\ 0 & 1 & 1 \\\\ -2 & -1 & 5 \\end{pmatrix}$\n\n' +
          'Mit (iii)$+2$(i), dann (iii)$-3$(ii).',
      },
      {
        icon: '📝',
        titel: 'Rang ablesen',
        inhalt:
          'Ergebnis:\n' +
          '  $\\begin{pmatrix} 1 & 2 & -1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}$\n\n' +
          'Eine Nullzeile → Rang $= 2 < 3$.',
      },
      {
        icon: '⚠️',
        titel: 'Folgerung',
        inhalt:
          '• Rang kleiner als Anzahl → linear ABHÄNGIG.',
      },
    ],
    loesung:
      'Vektoren als Spalten, Umformung (iii)$+2$(i), dann (iii)$-3$(ii):\n' +
      '$\\begin{pmatrix} 1 & 2 & -1 \\\\ 0 & 1 & 1 \\\\ -2 & -1 & 5 \\end{pmatrix} \\longrightarrow \\begin{pmatrix} 1 & 2 & -1 \\\\ 0 & 1 & 1 \\\\ 0 & 3 & 3 \\end{pmatrix} \\longrightarrow \\begin{pmatrix} 1 & 2 & -1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}$\n\n' +
      'Rang $= 2 < 3 = $ Anzahl der Vektoren → das homogene LGS ist nicht eindeutig lösbar. Die Vektoren sind LINEAR ABHÄNGIG.',
    schwierigkeit: 'schwer',
    kategorie: 'Vektorräume',
  },
  {
    id: 'b9_a4vi',
    titel: 'Lineare Unabhängigkeit (vi): der Nullvektor',
    aufgabeText: 'Prüfen Sie auf lineare Unabhängigkeit:\n$0_{\\mathbb{R}^n}$ (der Nullvektor).',
    tippSections: [
      {
        icon: '💡',
        titel: 'Sonderfall Nullvektor',
        inhalt:
          'Der Nullvektor allein ist immer linear ABHÄNGIG. Das ist eine wichtige Ausnahme.',
      },
      {
        icon: '🔍',
        titel: 'Begründung',
        inhalt:
          'Für lineare Unabhängigkeit müsste $\\lambda \\cdot 0 = 0$ NUR für $\\lambda = 0$ gelten. Aber $\\lambda \\cdot 0 = 0$ gilt für JEDES $\\lambda$, z.B. auch $1 \\cdot 0 = 0$.',
      },
      {
        icon: '📝',
        titel: 'Schlussfolgerung',
        inhalt:
          'Es gibt also eine nicht-triviale Linearkombination ($\\lambda = 1 \\neq 0$), die den Nullvektor ergibt. Damit ist der Nullvektor linear abhängig.',
      },
      {
        icon: '⚠️',
        titel: 'Merksatz',
        inhalt:
          '• Jede Menge von Vektoren, die den Nullvektor enthält, ist automatisch linear abhängig.',
      },
    ],
    loesung:
      'Der Nullvektor $0_{\\mathbb{R}^n}$ ist LINEAR ABHÄNGIG.\n\n' +
      'Begründung: Es gilt z.B. $1 \\cdot 0_{\\mathbb{R}^n} = 0_{\\mathbb{R}^n}$ mit dem Faktor $\\lambda = 1 \\neq 0$. Es gibt also eine nicht-triviale Linearkombination, die den Nullvektor ergibt.',
    schwierigkeit: 'einfach',
    kategorie: 'Vektorräume',
  },

  // ─── Aufgabe 5: lineare Unabhängigkeit mit Parameter t ────────────────────
  {
    id: 'b9_a5',
    titel: 'Lineare Unabhängigkeit mit Parameter $t$',
    aufgabeText: 'Für welche $t \\in \\mathbb{R}$ sind die Vektoren $v_1 = \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}$, $v_2 = \\begin{pmatrix} t \\\\ 1 \\\\ 2 \\end{pmatrix}$, $v_3 = \\begin{pmatrix} 1 \\\\ t \\\\ 2 \\end{pmatrix}$ linear unabhängig?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Determinante als Werkzeug',
        inhalt:
          'Bei genau $n$ Vektoren im $\\mathbb{R}^n$ gilt: Sie sind linear unabhängig $\\Leftrightarrow$ die Determinante der aus ihnen gebildeten Matrix ist $\\neq 0$.\n\n' +
          'Also: Determinante in Abhängigkeit von $t$ berechnen und schauen, wann sie Null wird.',
      },
      {
        icon: '🔍',
        titel: 'Determinante mit Sarrus',
        inhalt:
          'Vektoren als Spalten: $\\det \\begin{pmatrix} 1 & t & 1 \\\\ 1 & 1 & t \\\\ 1 & 2 & 2 \\end{pmatrix}$.\n\n' +
          'Mit der Regel von Sarrus (Diagonalen nach rechts minus nach links):\n' +
          '  $= 2 + t^2 + 2 - 1 - 2t - 2t = t^2 - 4t + 3$',
      },
      {
        icon: '📝',
        titel: 'Nullstellen finden',
        inhalt:
          'Setze die Determinante Null: $t^2 - 4t + 3 = 0$. Mit der p-q-Formel (oder Faktorisieren $(t-1)(t-3)$):\n' +
          '  $t = 1$ oder $t = 3$.\n\n' +
          'Bei diesen Werten ist die Determinante Null → linear abhängig.',
      },
      {
        icon: '⚠️',
        titel: 'Antwort',
        inhalt:
          '• Linear unabhängig sind die Vektoren genau dann, wenn die Determinante $\\neq 0$ ist, also für alle $t \\in \\mathbb{R} \\setminus \\{1, 3\\}$.',
      },
    ],
    loesung:
      'Die Vektoren sind genau dann linear unabhängig, wenn $\\det(v_1, v_2, v_3) \\neq 0$. Mit der Regel von Sarrus:\n' +
      '  $\\det \\begin{pmatrix} 1 & t & 1 \\\\ 1 & 1 & t \\\\ 1 & 2 & 2 \\end{pmatrix} = 2 + t^2 + 2 - 1 - 2t - 2t = t^2 - 4t + 3$\n\n' +
      'Die Determinante ist Null für $t^2 - 4t + 3 = 0 \\Leftrightarrow t = 1$ oder $t = 3$.\n\n' +
      'Die Vektoren sind also für jedes $t \\in \\mathbb{R} \\setminus \\{1, 3\\}$ linear unabhängig.',
    schwierigkeit: 'schwer',
    kategorie: 'Vektorräume',
  },

  // ─── Aufgabe 6: Basis? (a/b) ──────────────────────────────────────────────
  {
    id: 'b9_a6a',
    titel: 'Basis? (a): drei Vektoren im $\\mathbb{R}^4$',
    aufgabeText: 'Ist $\\left\\{ \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} 0 \\\\ 1 \\\\ 1 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\\\ 1 \\end{pmatrix} \\right\\}$ eine Basis von $\\mathbb{R}^4$?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was ist eine Basis?',
        inhalt:
          'Eine Basis eines Vektorraums ist eine Menge von Vektoren, die (1) linear unabhängig sind und (2) den ganzen Raum erzeugen.\n\n' +
          'Wichtige Regel: Eine Basis von $\\mathbb{R}^n$ hat IMMER genau $n$ Vektoren.',
      },
      {
        icon: '🔍',
        titel: 'Anzahl vergleichen',
        inhalt:
          'Hier ist der Raum $\\mathbb{R}^4$, also $\\dim \\mathbb{R}^4 = 4$. Eine Basis bräuchte genau $4$ Vektoren.\n\n' +
          'Gegeben sind aber nur $3$ Vektoren.',
      },
      {
        icon: '📝',
        titel: 'Schlussfolgerung',
        inhalt:
          'Mit nur $3$ Vektoren kann man den $4$-dimensionalen Raum nicht aufspannen. Also ist es KEINE Basis.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Zu wenige Vektoren → keine Basis (man muss gar nicht auf Unabhängigkeit prüfen).',
      },
    ],
    loesung:
      'Keine Basis.\n\n' +
      'Es ist $\\dim \\mathbb{R}^4 = 4$, also benötigt eine Basis genau $4$ Vektoren. Hier sind nur $3$ Vektoren gegeben – sie können $\\mathbb{R}^4$ nicht aufspannen.',
    schwierigkeit: 'mittel',
    kategorie: 'Vektorräume',
  },
  {
    id: 'b9_a6b',
    titel: 'Basis? (b): vier Vektoren im $\\mathbb{R}^3$',
    aufgabeText: 'Ist $\\left\\{ \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} 1 \\\\ 0 \\\\ 0 \\end{pmatrix}, \\begin{pmatrix} 0 \\\\ 0 \\\\ 1 \\end{pmatrix}, \\begin{pmatrix} 1 \\\\ 2 \\\\ 1 \\end{pmatrix} \\right\\}$ eine Basis von $\\mathbb{R}^3$?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Anzahl prüfen',
        inhalt:
          'Eine Basis von $\\mathbb{R}^3$ hat genau $\\dim \\mathbb{R}^3 = 3$ Vektoren. Hier sind aber $4$ Vektoren gegeben.',
      },
      {
        icon: '🔍',
        titel: 'Zu viele Vektoren',
        inhalt:
          'Mehr als $3$ Vektoren im $\\mathbb{R}^3$ sind IMMER linear abhängig. Eine Basis muss aber linear unabhängig sein.',
      },
      {
        icon: '📝',
        titel: 'Schlussfolgerung',
        inhalt:
          'Da $4 \\neq 3$, ist diese Menge KEINE Basis von $\\mathbb{R}^3$.',
      },
      {
        icon: '⚠️',
        titel: 'Merke',
        inhalt:
          '• Zu wenige Vektoren erzeugen den Raum nicht; zu viele sind linear abhängig. Nur GENAU $n$ Vektoren können eine Basis von $\\mathbb{R}^n$ sein (und auch nur, wenn sie unabhängig sind).',
      },
    ],
    loesung:
      'Keine Basis.\n\n' +
      'Es ist $\\dim \\mathbb{R}^3 = 3$, also benötigt eine Basis genau $3$ Vektoren. Hier sind $4$ Vektoren gegeben – sie sind im $\\mathbb{R}^3$ zwangsläufig linear abhängig und bilden daher keine Basis.',
    schwierigkeit: 'mittel',
    kategorie: 'Vektorräume',
  },
]
