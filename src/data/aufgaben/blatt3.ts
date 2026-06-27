import type { Aufgabe } from '../../types'

export const b3: Aufgabe[] = [
  // ─── Aufgabe 1: Multiplikation in Polarform (a/b/c je eigene Karte) ─────────
  {
    id: 'b3_a1a',
    titel: 'Multiplikation in Polarform (a)',
    aufgabeText: 'Führen Sie folgende Multiplikation komplexer Zahlen durch:\n$3e^{\\mathrm{i}\\frac{\\pi}{3}} \\cdot 2e^{\\mathrm{i}\\frac{5\\pi}{6}}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was ist die Polarform?',
        inhalt:
          'Eine komplexe Zahl kann man statt als $x + y\\mathrm{i}$ auch über ihre Länge und ihren Winkel beschreiben. Diese Schreibweise heißt Polarform:\n' +
          '  $z = r\\,e^{\\mathrm{i}\\varphi}$\n\n' +
          'Dabei ist:\n' +
          '  $r$ = der Betrag (die Länge des Pfeils vom Ursprung zur Zahl), immer $\\geq 0$\n' +
          '  $\\varphi$ = der Winkel (gemessen gegen den Uhrzeigersinn von der positiven reellen Achse aus)\n\n' +
          'In $3e^{\\mathrm{i}\\frac{\\pi}{3}}$ ist also $r = 3$ und $\\varphi = \\frac{\\pi}{3}$.',
      },
      {
        icon: '🔍',
        titel: 'Die Multiplikationsregel',
        inhalt:
          'In Polarform ist die Multiplikation besonders einfach:\n' +
          '  $r_1 e^{\\mathrm{i}\\varphi_1} \\cdot r_2 e^{\\mathrm{i}\\varphi_2} = (r_1 \\cdot r_2)\\, e^{\\mathrm{i}(\\varphi_1 + \\varphi_2)}$\n\n' +
          'In Worten:\n' +
          '  Die Beträge werden MULTIPLIZIERT (die Längen).\n' +
          '  Die Winkel werden ADDIERT.\n\n' +
          'Das folgt direkt aus der Potenzregel $e^a \\cdot e^b = e^{a+b}$.\n\n' +
          'Vorgehen hier:\n' +
          '1. Beträge multiplizieren: $3 \\cdot 2 = 6$\n' +
          '2. Winkel addieren: $\\frac{\\pi}{3} + \\frac{5\\pi}{6}$',
      },
      {
        icon: '📝',
        titel: 'Brüche addieren',
        inhalt:
          'Um $\\frac{\\pi}{3} + \\frac{5\\pi}{6}$ zu addieren, brauchst du einen gemeinsamen Nenner. Der kleinste gemeinsame Nenner von $3$ und $6$ ist $6$:\n' +
          '  $\\frac{\\pi}{3} = \\frac{2\\pi}{6}$   (Zähler und Nenner mit 2 erweitert)\n' +
          '  $\\frac{2\\pi}{6} + \\frac{5\\pi}{6} = \\frac{7\\pi}{6}$\n\n' +
          'Kontrolle: $\\frac{7\\pi}{6} < 2\\pi = \\frac{12\\pi}{6}$, der Winkel ist also schon im Bereich $[0, 2\\pi)$ und muss nicht reduziert werden.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Beträge ADDIEREN statt multiplizieren: Falsch! Nur die Winkel werden addiert, die Beträge werden multipliziert.\n\n' +
          '• Gemeinsamen Nenner vergessen: $\\frac{\\pi}{3} + \\frac{5\\pi}{6}$ ist nicht $\\frac{6\\pi}{9}$. Erst gleichnamig machen.',
      },
    ],
    loesung:
      'Beträge multiplizieren, Winkel addieren:\n' +
      '  $r = 3 \\cdot 2 = 6$\n' +
      '  $\\varphi = \\frac{\\pi}{3} + \\frac{5\\pi}{6} = \\frac{2\\pi}{6} + \\frac{5\\pi}{6} = \\frac{7\\pi}{6}$\n\n' +
      '$\\Rightarrow 3e^{\\mathrm{i}\\frac{\\pi}{3}} \\cdot 2e^{\\mathrm{i}\\frac{5\\pi}{6}} = 6e^{\\mathrm{i}\\frac{7\\pi}{6}}$',
    schwierigkeit: 'einfach',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b3_a1b',
    titel: 'Multiplikation in Polarform (b)',
    aufgabeText: 'Führen Sie folgende Multiplikation komplexer Zahlen durch:\n$e^{\\mathrm{i}\\pi} \\cdot e^{3\\pi\\mathrm{i}}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Beträge erkennen',
        inhalt:
          'Steht vor $e^{\\mathrm{i}\\varphi}$ keine Zahl, so ist der Betrag $r = 1$. Beide Faktoren haben hier also Betrag $1$.\n\n' +
          'Multiplikationsregel: Beträge multiplizieren ($1 \\cdot 1 = 1$), Winkel addieren.',
      },
      {
        icon: '🔍',
        titel: 'Winkel addieren und reduzieren',
        inhalt:
          'Winkel addieren: $\\pi + 3\\pi = 4\\pi$.\n\n' +
          'Wichtig: Der Winkel $\\varphi$ ist periodisch mit $2\\pi$ (eine volle Umdrehung). Das heißt, ein Winkel und derselbe Winkel plus $2\\pi$ zeigen auf denselben Punkt. Man darf also beliebig oft $2\\pi$ abziehen, ohne die Zahl zu ändern.\n\n' +
          '$4\\pi = 2 \\cdot 2\\pi$ sind genau zwei volle Umdrehungen. Man landet wieder bei Winkel $0$.',
      },
      {
        icon: '📝',
        titel: 'Sonderwert $e^{\\mathrm{i}\\cdot 0}$',
        inhalt:
          'Bei Winkel $0$ gilt $e^{\\mathrm{i}\\cdot 0} = \\cos(0) + \\mathrm{i}\\sin(0) = 1 + 0 = 1$.\n\n' +
          'Also: $e^{\\mathrm{i}\\cdot 4\\pi} = e^{\\mathrm{i}\\cdot 0} = 1$.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Das Ergebnis $e^{\\mathrm{i}\\cdot 4\\pi}$ stehen lassen: Man muss erkennen, dass das gleich $1$ ist (volle Umdrehungen zählen nicht).',
      },
    ],
    loesung:
      '$r = 1 \\cdot 1 = 1$, Winkel: $\\varphi = \\pi + 3\\pi = 4\\pi = 2 \\cdot 2\\pi$ (zwei volle Umdrehungen).\n\n' +
      '$e^{\\mathrm{i}\\pi} \\cdot e^{3\\pi\\mathrm{i}} = e^{\\mathrm{i}(\\pi + 3\\pi)} = e^{\\mathrm{i}\\cdot 4\\pi} = e^{\\mathrm{i}\\cdot 0} = 1$',
    schwierigkeit: 'einfach',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b3_a1c',
    titel: 'Multiplikation in Polarform (c)',
    aufgabeText: 'Führen Sie folgende Multiplikation komplexer Zahlen durch:\n$2e^{\\mathrm{i}\\frac{\\pi}{9}} \\cdot 4e^{-\\mathrm{i}\\frac{\\pi}{9}}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Negativer Winkel',
        inhalt:
          'Ein negativer Winkel $-\\frac{\\pi}{9}$ bedeutet: gemessen IM Uhrzeigersinn (also nach unten gedreht). Beim Addieren bleibt es aber eine ganz normale Addition mit Vorzeichen.',
      },
      {
        icon: '🔍',
        titel: 'Vorgehen',
        inhalt:
          '1. Beträge multiplizieren: $2 \\cdot 4 = 8$\n' +
          '2. Winkel addieren: $\\frac{\\pi}{9} + \\left(-\\frac{\\pi}{9}\\right) = 0$\n\n' +
          'Die beiden Winkel heben sich auf.',
      },
      {
        icon: '📝',
        titel: 'Ergebnis vereinfachen',
        inhalt:
          'Bei Winkel $0$ ist $e^{\\mathrm{i}\\cdot 0} = 1$. Also bleibt nur der Betrag übrig: $8 \\cdot 1 = 8$.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Die Winkel falsch verrechnen: $\\frac{\\pi}{9} + (-\\frac{\\pi}{9}) = 0$, NICHT $\\frac{2\\pi}{9}$. Auf das Minuszeichen achten.',
      },
    ],
    loesung:
      '$r = 2 \\cdot 4 = 8$, Winkel: $\\varphi = \\frac{\\pi}{9} + \\left(-\\frac{\\pi}{9}\\right) = 0$.\n\n' +
      '$2e^{\\mathrm{i}\\frac{\\pi}{9}} \\cdot 4e^{-\\mathrm{i}\\frac{\\pi}{9}} = 8e^{\\mathrm{i}\\left(\\frac{\\pi}{9} - \\frac{\\pi}{9}\\right)} = 8e^{\\mathrm{i}\\cdot 0} = 8$',
    schwierigkeit: 'einfach',
    kategorie: 'Komplexe Zahlen',
  },

  // ─── Aufgabe 2: n-te Wurzeln (a mit Skizze, b ohne) ────────────────────────
  {
    id: 'b3_a2a',
    titel: '$n$-te Wurzeln: $z^4 = 16$',
    aufgabeText: 'Geben Sie sämtliche komplexe Lösungen der Gleichung $z^4 = 16$ an und skizzieren Sie die Lösungen in der komplexen Zahlenebene.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Warum gibt es vier Lösungen?',
        inhalt:
          'Im Reellen hätte $z^4 = 16$ nur die Lösungen $z = 2$ und $z = -2$. Im Komplexen hat eine Gleichung $z^n = w$ aber immer GENAU $n$ verschiedene Lösungen.\n\n' +
          'Diese $n$ Lösungen heißen die $n$-ten Wurzeln von $w$. Sie liegen alle auf einem Kreis um den Ursprung und sind gleichmäßig verteilt (jeweils $\\frac{2\\pi}{n}$ Winkelabstand zueinander).',
      },
      {
        icon: '🔍',
        titel: 'Die Wurzelformel',
        inhalt:
          'Schreibe zuerst die rechte Seite in Polarform $w = r\\,e^{\\mathrm{i}\\varphi}$. Dann sind die $n$-ten Wurzeln:\n' +
          '  $z_k = r^{1/n}\\,e^{\\mathrm{i}\\frac{\\varphi + 2\\pi k}{n}}$  für  $k = 0, 1, \\ldots, n-1$\n\n' +
          'Schritt für Schritt:\n' +
          '1. Betrag der Wurzeln: die $n$-te Wurzel aus $r$, also $r^{1/n}$.\n' +
          '2. Grundwinkel: $\\frac{\\varphi}{n}$.\n' +
          '3. Jede weitere Lösung dreht um $\\frac{2\\pi}{n}$ weiter (das ist das $k$).',
      },
      {
        icon: '📝',
        titel: 'Auf diese Aufgabe angewandt',
        inhalt:
          'Schreibe $16$ in Polarform: $16$ liegt auf der positiven reellen Achse, also $16 = 16\\,e^{\\mathrm{i}\\cdot 0}$. Damit ist $r = 16$, $\\varphi = 0$, $n = 4$.\n\n' +
          'Betrag der Wurzeln: $16^{1/4} = \\sqrt[4]{16} = 2$ (denn $2^4 = 16$).\n\n' +
          'Winkelabstand: $\\frac{2\\pi}{4} = \\frac{\\pi}{2}$ (also je $90°$).\n\n' +
          'Setze $k = 0, 1, 2, 3$ ein:\n' +
          '  $z_k = 2\\,e^{\\mathrm{i}\\frac{0 + 2\\pi k}{4}} = 2\\,e^{\\mathrm{i}\\frac{\\pi k}{2}}$',
      },
      {
        icon: '⚠️',
        titel: 'Skizze und Fehler',
        inhalt:
          '• Es sind GENAU $4$ Lösungen, nicht 1 oder 2.\n\n' +
          '• $k$ läuft von $0$ bis $n-1$ (also $0,1,2,3$), nicht von $1$ bis $n$.\n\n' +
          '• Skizze: Die vier Punkte liegen auf einem Kreis mit Radius $2$, im Abstand von je $90°$ – das sind genau die Punkte $2$, $2\\mathrm{i}$, $-2$, $-2\\mathrm{i}$ auf den Achsen.',
      },
    ],
    loesung: '',
    loesungSections: [
      {
        text:
          'Polarform der rechten Seite: $16 = 16\\,e^{\\mathrm{i}\\cdot 0}$, also $r = 16$, $\\varphi = 0$, $n = 4$.\n\n' +
          'Einsetzen in die Wurzelformel $z_k = r^{1/n}\\,e^{\\mathrm{i}\\frac{\\varphi + 2\\pi k}{n}}$ mit $r^{1/4} = 16^{1/4} = 2$:\n' +
          '  $z_k = 2\\,e^{\\mathrm{i}\\frac{0 + 2\\pi k}{4}} = 2\\,e^{\\mathrm{i}\\frac{\\pi k}{2}}$  für  $k = 0,1,2,3$\n\n' +
          '  $z_0 = 2\\,e^{\\mathrm{i}\\cdot 0} = 2$\n' +
          '  $z_1 = 2\\,e^{\\mathrm{i}\\frac{2\\pi}{4}} = 2\\,e^{\\mathrm{i}\\frac{\\pi}{2}} = 2\\mathrm{i}$\n' +
          '  $z_2 = 2\\,e^{\\mathrm{i}\\pi} = -2$\n' +
          '  $z_3 = 2\\,e^{\\mathrm{i}\\frac{3\\pi}{2}} = -2\\mathrm{i}$\n\n' +
          'Die vier Lösungen liegen auf einem Kreis mit Radius $2$ um den Ursprung, gleichmäßig im Abstand von $90°$:',
        graphId: 'b3_a2a',
      },
    ],
    schwierigkeit: 'mittel',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b3_a2b',
    titel: '$n$-te Wurzeln: $z^3 = -\\mathrm{i}$',
    aufgabeText: 'Geben Sie sämtliche $z \\in \\mathbb{C}$ an, die die Gleichung $z^3 = -\\mathrm{i}$ erfüllen.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Gleiches Prinzip, drei Lösungen',
        inhalt:
          'Auch hier gilt: $z^3 = w$ hat genau $3$ Lösungen (die dritten Wurzeln von $w$). Sie liegen auf einem Kreis und sind je $\\frac{2\\pi}{3} = 120°$ voneinander entfernt.',
      },
      {
        icon: '🔍',
        titel: 'Polarform von $-\\mathrm{i}$ finden',
        inhalt:
          'Der schwierigste Schritt ist, $-\\mathrm{i}$ in Polarform zu schreiben.\n\n' +
          '$-\\mathrm{i}$ entspricht dem Punkt $(0, -1)$ in der Ebene: direkt auf der negativen imaginären Achse, mit Abstand $1$ vom Ursprung.\n' +
          '  Betrag: $r = |-\\mathrm{i}| = 1$\n' +
          '  Winkel: Die negative imaginäre Achse zeigt nach unten. Misst man gegen den Uhrzeigersinn, ist das $\\frac{3\\pi}{2}$ (entspricht $270°$).\n\n' +
          'Also $-\\mathrm{i} = e^{\\mathrm{i}\\frac{3\\pi}{2}}$.',
      },
      {
        icon: '📝',
        titel: 'Wurzelformel anwenden',
        inhalt:
          'Mit $r = 1$, $\\varphi = \\frac{3\\pi}{2}$, $n = 3$ und $r^{1/3} = 1^{1/3} = 1$:\n' +
          '  $z_k = e^{\\mathrm{i}\\frac{\\frac{3\\pi}{2} + 2\\pi k}{3}}$  für  $k = 0, 1, 2$\n\n' +
          'Für $k=0$: $\\frac{3\\pi/2}{3} = \\frac{3\\pi}{6} = \\frac{\\pi}{2}$.\n' +
          'Für die weiteren $k$ kommt jeweils $\\frac{2\\pi}{3}$ zum Winkel hinzu.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Winkel von $-\\mathrm{i}$ falsch: Man arbeitet im Bereich $[0, 2\\pi)$, also $\\frac{3\\pi}{2}$ (nicht $-\\frac{\\pi}{2}$).\n\n' +
          '• Beim Bruchrechnen: $\\frac{\\frac{3\\pi}{2} + 2\\pi}{3} = \\frac{3\\pi/2 + 4\\pi/2}{3} = \\frac{7\\pi/2}{3} = \\frac{7\\pi}{6}$.',
      },
    ],
    loesung:
      'Polarform: $-\\mathrm{i} = e^{\\mathrm{i}\\frac{3\\pi}{2}}$, also $r = 1$, $\\varphi = \\frac{3\\pi}{2}$, $n = 3$.\n\n' +
      'Einsetzen in $z_k = r^{1/n}\\,e^{\\mathrm{i}\\frac{\\varphi + 2\\pi k}{n}}$ mit $1^{1/3} = 1$:\n' +
      '  $z_k = e^{\\mathrm{i}\\frac{\\frac{3\\pi}{2} + 2\\pi k}{3}}$  für  $k = 0, 1, 2$:\n\n' +
      '  $z_0 = e^{\\mathrm{i}\\frac{3\\pi/2}{3}} = e^{\\mathrm{i}\\frac{\\pi}{2}}$\n' +
      '  $z_1 = e^{\\mathrm{i}\\left(\\frac{\\pi}{2} + \\frac{2\\pi}{3}\\right)} = e^{\\mathrm{i}\\frac{7\\pi}{6}}$\n' +
      '  $z_2 = e^{\\mathrm{i}\\left(\\frac{\\pi}{2} + \\frac{2\\cdot 2\\pi}{3}\\right)} = e^{\\mathrm{i}\\frac{11\\pi}{6}}$',
    schwierigkeit: 'mittel',
    kategorie: 'Komplexe Zahlen',
  },

  // ─── Aufgabe 3: Multiplikation als Drehung (a/b) ───────────────────────────
  {
    id: 'b3_a3a',
    titel: 'Multiplikation als Drehung – anschaulich',
    aufgabeText: 'Sei $\\varphi \\in [0, 2\\pi)$. Was passiert anschaulich bei der Multiplikation einer komplexen Zahl $z$ mit der komplexen Zahl $e^{\\mathrm{i}\\varphi}$ bzw. $e^{-\\mathrm{i}\\varphi}$, also wo liegen dann $e^{\\mathrm{i}\\varphi} z$ und $e^{-\\mathrm{i}\\varphi} z$ in der komplexen Zahlenebene verglichen mit $z$?',
    tippSections: [
      {
        icon: '💡',
        titel: 'In Polarform denken',
        inhalt:
          'Schreibe $z$ selbst in Polarform: $z = r\\,e^{\\mathrm{i}\\psi}$ (Länge $r$, Winkel $\\psi$).\n\n' +
          'Der Faktor $e^{\\mathrm{i}\\varphi}$ hat Betrag $1$ (denn vor dem $e$ steht keine Zahl).',
      },
      {
        icon: '🔍',
        titel: 'Was passiert beim Multiplizieren?',
        inhalt:
          'Nach der Multiplikationsregel (Beträge mal, Winkel plus):\n' +
          '  $e^{\\mathrm{i}\\varphi} \\cdot r\\,e^{\\mathrm{i}\\psi} = r\\,e^{\\mathrm{i}(\\psi + \\varphi)}$\n\n' +
          'Beobachtung:\n' +
          '  Der Betrag $r$ bleibt UNVERÄNDERT (Faktorbetrag war $1$) – die Zahl wird also nicht länger oder kürzer.\n' +
          '  Nur der Winkel ändert sich um $+\\varphi$.\n\n' +
          'Eine Änderung des Winkels bei gleichbleibender Länge ist genau eine DREHUNG um den Ursprung.',
      },
      {
        icon: '📝',
        titel: 'Drehrichtung',
        inhalt:
          'Positiver Winkelzuwachs $+\\varphi$ = Drehung GEGEN den Uhrzeigersinn (mathematisch positive Richtung).\n\n' +
          'Bei $e^{-\\mathrm{i}\\varphi}$ wird der Winkel um $-\\varphi$ geändert, also eine Drehung IM Uhrzeigersinn.',
      },
      {
        icon: '⚠️',
        titel: 'Merke',
        inhalt:
          '• Multiplikation mit $e^{\\mathrm{i}\\varphi}$ (Betrag 1) = reine Drehung, KEINE Streckung.\n\n' +
          '• Plus-Winkel = gegen den Uhrzeigersinn, Minus-Winkel = im Uhrzeigersinn.',
      },
    ],
    loesung:
      'Schreibe $z = r\\,e^{\\mathrm{i}\\psi}$ in Polarform. Dann gilt:\n' +
      '  $e^{\\mathrm{i}\\varphi} \\cdot z = e^{\\mathrm{i}\\varphi} \\cdot r\\,e^{\\mathrm{i}\\psi} = r\\,e^{\\mathrm{i}(\\psi + \\varphi)}$\n\n' +
      'Der Betrag $r$ bleibt gleich, nur der Winkel erhöht sich um $\\varphi$. Anschaulich wird $z$ also bei Multiplikation mit $e^{\\mathrm{i}\\varphi}$ um $0$ gegen den Uhrzeigersinn um den Winkel $\\varphi$ gedreht und bei Multiplikation mit $e^{-\\mathrm{i}\\varphi}$ im Uhrzeigersinn.',
    schwierigkeit: 'mittel',
    kategorie: 'Komplexe Zahlen',
  },
  {
    id: 'b3_a3b',
    titel: 'Drehung von $z = -1 + 2\\mathrm{i}$ um $\\frac{\\pi}{2}$',
    aufgabeText: 'Drehen Sie unter Verwendung Ihrer Überlegungen aus Teil (a) die komplexe Zahl $z = -1 + 2\\mathrm{i}$ um $\\tfrac{\\pi}{2}$ gegen den Uhrzeigersinn und im Uhrzeigersinn um $0$ in der komplexen Zahlenebene und schreiben Sie Ihr Ergebnis jeweils wieder in der Form $x + y\\mathrm{i}$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Drehen heißt Multiplizieren',
        inhalt:
          'Aus Teil (a) wissen wir: Drehen um den Winkel $\\frac{\\pi}{2}$ = Multiplizieren mit $e^{\\mathrm{i}\\frac{\\pi}{2}}$ (gegen den Uhrzeigersinn) bzw. mit $e^{-\\mathrm{i}\\frac{\\pi}{2}}$ (im Uhrzeigersinn).',
      },
      {
        icon: '🔍',
        titel: 'Die Drehfaktoren ausrechnen',
        inhalt:
          'Mit der Euler-Formel $e^{\\mathrm{i}\\alpha} = \\cos\\alpha + \\mathrm{i}\\sin\\alpha$:\n' +
          '  $e^{\\mathrm{i}\\frac{\\pi}{2}} = \\cos\\frac{\\pi}{2} + \\mathrm{i}\\sin\\frac{\\pi}{2} = 0 + \\mathrm{i}\\cdot 1 = \\mathrm{i}$\n' +
          '  $e^{-\\mathrm{i}\\frac{\\pi}{2}} = \\cos\\frac{\\pi}{2} - \\mathrm{i}\\sin\\frac{\\pi}{2} = 0 - \\mathrm{i}\\cdot 1 = -\\mathrm{i}$\n\n' +
          'Die Drehung um $90°$ ist also einfach die Multiplikation mit $\\mathrm{i}$ bzw. $-\\mathrm{i}$.',
      },
      {
        icon: '📝',
        titel: 'Ausmultiplizieren',
        inhalt:
          'Gegen den Uhrzeigersinn: $\\mathrm{i} \\cdot (-1 + 2\\mathrm{i})$\n' +
          '  $= -\\mathrm{i} + 2\\mathrm{i}^2$\n' +
          '  $= -\\mathrm{i} + 2\\cdot(-1)$   (da $\\mathrm{i}^2 = -1$)\n' +
          '  $= -2 - \\mathrm{i}$\n\n' +
          'Im Uhrzeigersinn: $(-\\mathrm{i}) \\cdot (-1 + 2\\mathrm{i})$ analog ausrechnen.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• $\\mathrm{i}^2 = -1$ vergessen: Aus $2\\mathrm{i}^2$ wird $-2$ (eine reelle Zahl).\n\n' +
          '• Ergebnis ordentlich in $x + y\\mathrm{i}$ schreiben, z.B. $-2 - \\mathrm{i}$ statt $-2 + (-1)\\mathrm{i}$.\n\n' +
          '• Probe über den Betrag: $|z|$ bleibt bei einer Drehung gleich. $|-1+2\\mathrm{i}| = \\sqrt{5}$ und $|-2-\\mathrm{i}| = \\sqrt{5}$ ✓',
      },
    ],
    loesung:
      'Eine Drehung um $\\frac{\\pi}{2}$ gegen den Uhrzeigersinn entspricht der Multiplikation mit $e^{\\mathrm{i}\\frac{\\pi}{2}} = \\mathrm{i}$:\n' +
      '  $e^{\\mathrm{i}\\frac{\\pi}{2}}\\, z = \\mathrm{i}\\cdot(-1 + 2\\mathrm{i}) = -\\mathrm{i} + 2\\mathrm{i}^2 = -2 - \\mathrm{i}$\n\n' +
      'Eine Drehung um $\\frac{\\pi}{2}$ im Uhrzeigersinn entspricht der Multiplikation mit $e^{-\\mathrm{i}\\frac{\\pi}{2}} = -\\mathrm{i}$:\n' +
      '  $e^{-\\mathrm{i}\\frac{\\pi}{2}}\\, z = -\\mathrm{i}\\cdot(-1 + 2\\mathrm{i}) = \\mathrm{i} - 2\\mathrm{i}^2 = 2 + \\mathrm{i}$',
    schwierigkeit: 'mittel',
    kategorie: 'Komplexe Zahlen',
  },

  // ─── Aufgabe 4: Eigenschaften von Relationen (a/b/c/d) ─────────────────────
  {
    id: 'b3_a4a',
    titel: 'Relationseigenschaften: gleicher Geburtstag ($R_1$)',
    aufgabeText: 'Überlegen Sie, welche der Eigenschaften Reflexivität, Irreflexivität, Symmetrie, Asymmetrie, Transitivität, Antisymmetrie erfüllt sind.\n\nSei $M$ die Menge aller Menschen. Die Relation $R_1$ auf $M$ sei definiert durch: $x\\,R_1\\,y$, falls $x$ und $y$ am selben Tag Geburtstag haben.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Die sechs Eigenschaften',
        inhalt:
          'Eine Relation $R$ ordnet Paaren von Elementen ein „steht in Relation" zu. Die wichtigsten Eigenschaften:\n\n' +
          '• Reflexiv: Jedes Element steht mit sich selbst in Relation: $x\\,R\\,x$ für alle $x$.\n' +
          '• Irreflexiv: Kein Element steht mit sich selbst in Relation.\n' +
          '• Symmetrisch: Wenn $x\\,R\\,y$, dann auch $y\\,R\\,x$ (Richtung egal).\n' +
          '• Asymmetrisch: Wenn $x\\,R\\,y$, dann NICHT $y\\,R\\,x$.\n' +
          '• Transitiv: Wenn $x\\,R\\,y$ und $y\\,R\\,z$, dann auch $x\\,R\\,z$.\n' +
          '• Antisymmetrisch: Wenn $x\\,R\\,y$ und $y\\,R\\,x$, dann muss $x = y$ sein.',
      },
      {
        icon: '🔍',
        titel: 'Prüfen am Geburtstag',
        inhalt:
          'Reflexiv? Hat jeder Mensch denselben Geburtstag wie er selbst? Ja, offensichtlich.\n\n' +
          'Symmetrisch? Wenn A und B denselben Geburtstag haben, haben dann auch B und A denselben? Ja.\n\n' +
          'Transitiv? Wenn A und B denselben Geburtstag haben und B und C denselben, dann haben A und C denselben? Ja (alle drei haben denselben Tag).',
      },
      {
        icon: '📝',
        titel: 'Klassifikation',
        inhalt:
          'Eine Relation, die reflexiv UND symmetrisch UND transitiv ist, heißt Äquivalenzrelation.\n\n' +
          '„Gleicher Geburtstag" teilt alle Menschen in Gruppen ein (alle mit Geburtstag am 1. Januar, alle am 2. Januar, …). Solche Einteilungen sind typisch für Äquivalenzrelationen.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Antisymmetrie und Symmetrie verwechseln: Diese Relation ist symmetrisch (nicht antisymmetrisch), denn zwei verschiedene Menschen können denselben Geburtstag haben.',
      },
    ],
    loesung:
      '$R_1$ ist reflexiv, transitiv und symmetrisch.\n\n' +
      'Begründung: Jeder hat denselben Geburtstag wie er selbst (reflexiv). „Selber Geburtstag" gilt in beide Richtungen (symmetrisch) und überträgt sich auf Ketten (transitiv).\n\n' +
      'Damit ist $R_1$ eine Äquivalenzrelation.',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },
  {
    id: 'b3_a4b',
    titel: 'Relationseigenschaften: Geburtstag oder Größe ($R_2$)',
    aufgabeText: 'Überlegen Sie, welche der Eigenschaften Reflexivität, Irreflexivität, Symmetrie, Asymmetrie, Transitivität, Antisymmetrie erfüllt sind.\n\nSei $M$ die Menge aller Menschen. Die Relation $R_2$ auf $M$ sei definiert durch: $x\\,R_2\\,y$, falls $x$ und $y$ am selben Tag Geburtstag haben oder gleich groß sind.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Zwei Bedingungen mit ODER',
        inhalt:
          'Jetzt reicht es, wenn EINE von zwei Bedingungen gilt: gleicher Geburtstag ODER gleiche Größe. Das „oder" macht die Sache komplizierter, vor allem bei der Transitivität.',
      },
      {
        icon: '🔍',
        titel: 'Reflexiv und symmetrisch',
        inhalt:
          'Reflexiv? Jeder hat denselben Geburtstag und dieselbe Größe wie er selbst – also auf jeden Fall $x\\,R_2\\,x$. Ja.\n\n' +
          'Symmetrisch? „Gleicher Geburtstag oder gleich groß" gilt offensichtlich in beide Richtungen. Ja.',
      },
      {
        icon: '📝',
        titel: 'Transitivität widerlegen',
        inhalt:
          'Für Transitivität reicht EIN Gegenbeispiel, um sie zu widerlegen:\n\n' +
          'Person A und B haben denselben Geburtstag → $A\\,R_2\\,B$.\n' +
          'Person B und C sind gleich groß (aber anderer Geburtstag) → $B\\,R_2\\,C$.\n' +
          'Gilt dann $A\\,R_2\\,C$? Nur wenn A und C denselben Geburtstag haben oder gleich groß sind. Das muss aber nicht der Fall sein!\n\n' +
          'Also ist $R_2$ NICHT transitiv.',
      },
      {
        icon: '⚠️',
        titel: 'Folgerung',
        inhalt:
          '• Da $R_2$ nicht transitiv ist, ist sie KEINE Äquivalenzrelation (und auch keine Ordnungsrelation).\n\n' +
          '• Achtung: reflexiv + symmetrisch allein reicht NICHT für eine Äquivalenzrelation – Transitivität muss auch gelten.',
      },
    ],
    loesung:
      '$R_2$ ist reflexiv und symmetrisch.\n\n' +
      'Sie ist aber NICHT transitiv (Gegenbeispiel: A und B gleicher Geburtstag, B und C gleich groß, aber A und C weder noch). Damit ist $R_2$ keine Äquivalenzrelation und keine Ordnungsrelation.',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },
  {
    id: 'b3_a4c',
    titel: 'Relationseigenschaften: Teilbarkeit ($R_3$)',
    aufgabeText: 'Überlegen Sie, welche der Eigenschaften Reflexivität, Irreflexivität, Symmetrie, Asymmetrie, Transitivität, Antisymmetrie erfüllt sind.\n\nDie Relation $R_3$ auf $\\mathbb{N}^*$ sei definiert durch $R_3 := \\{(m, n) : m \\text{ teilt } n \\text{ ohne Rest}\\}$.\n\nIst es eine Ordnungsrelation? Wenn ja: partiell oder total?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was bedeutet „$m$ teilt $n$"?',
        inhalt:
          '$m$ teilt $n$ (geschrieben $m \\mid n$) bedeutet: $n$ ist ein Vielfaches von $m$, d.h. $n = m \\cdot k$ für eine natürliche Zahl $k$. Beispiel: $3 \\mid 12$, denn $12 = 3 \\cdot 4$.\n\n' +
          '$\\mathbb{N}^*$ sind die natürlichen Zahlen ohne Null: $1, 2, 3, \\ldots$',
      },
      {
        icon: '🔍',
        titel: 'Eigenschaften prüfen',
        inhalt:
          'Reflexiv? Teilt jede Zahl sich selbst? $m \\mid m$, denn $m = m \\cdot 1$. Ja.\n\n' +
          'Antisymmetrisch? Wenn $m \\mid n$ UND $n \\mid m$, muss dann $m = n$ sein? Bei natürlichen Zahlen ja: zwei Zahlen, die sich gegenseitig teilen, sind gleich.\n\n' +
          'Transitiv? Wenn $m \\mid n$ und $n \\mid k$, dann $m \\mid k$? Ja, z.B. $2 \\mid 4$ und $4 \\mid 8$ ergibt $2 \\mid 8$.',
      },
      {
        icon: '📝',
        titel: 'Ordnungsrelation und partiell/total',
        inhalt:
          'Eine Relation, die reflexiv + antisymmetrisch + transitiv ist, heißt Ordnungsrelation.\n\n' +
          'Partiell oder total? Total wäre sie, wenn JE ZWEI Elemente vergleichbar sind. Hier sind aber z.B. $2$ und $3$ NICHT vergleichbar (weder teilt $2$ die $3$ noch umgekehrt). Also nur eine PARTIELLE Ordnung.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Nicht symmetrisch: $2 \\mid 4$, aber $4 \\nmid 2$. Bei Ordnungen ist Antisymmetrie typisch, nicht Symmetrie.\n\n' +
          '• „Partiell" heißt nicht „unvollständig", sondern nur: nicht alle Paare sind vergleichbar.',
      },
    ],
    loesung:
      '$R_3$ ist reflexiv, transitiv und antisymmetrisch.\n\n' +
      'Begründung: $m \\mid m$ (reflexiv); aus $m \\mid n$ und $n \\mid m$ folgt $m = n$ in $\\mathbb{N}^*$ (antisymmetrisch); aus $m \\mid n$ und $n \\mid k$ folgt $m \\mid k$ (transitiv).\n\n' +
      'Damit ist $R_3$ eine partielle Ordnungsrelation (nicht total, da z.B. $2$ und $3$ nicht vergleichbar sind).',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },
  {
    id: 'b3_a4d',
    titel: 'Relationseigenschaften: lexikographische Ordnung ($R_4$)',
    aufgabeText: 'Überlegen Sie, welche der Eigenschaften Reflexivität, Irreflexivität, Symmetrie, Asymmetrie, Transitivität, Antisymmetrie erfüllt sind.\n\nDie Relation $R_4$ auf $\\mathbb{R} \\times \\mathbb{R}$ sei definiert durch $(a,b)\\,R_4\\,(c,d)$, falls einer der folgenden Fälle eintritt:\n• Fall 1: $a < c$,\n• Fall 2: $a = c$ und $b \\leq d$.\n\nIst es eine Ordnungsrelation? Wenn ja: partiell oder total?',
    tippSections: [
      {
        icon: '💡',
        titel: 'Das Lexikon-Prinzip',
        inhalt:
          'Diese Ordnung funktioniert wie das Sortieren von Wörtern im Wörterbuch: Man vergleicht zuerst den ersten Buchstaben (hier die erste Komponente $a$ gegen $c$). Nur wenn diese gleich sind, entscheidet der zweite (hier $b$ gegen $d$). Deshalb heißt sie lexikographische Ordnung.',
      },
      {
        icon: '🔍',
        titel: 'Eigenschaften prüfen',
        inhalt:
          'Reflexiv? Gilt $(a,b)\\,R_4\\,(a,b)$? Hier ist $a = a$ und $b \\leq b$, also Fall 2 erfüllt. Ja.\n\n' +
          'Antisymmetrisch? Wenn $(a,b)\\,R_4\\,(c,d)$ und $(c,d)\\,R_4\\,(a,b)$, dann muss $a = c$ sein (sonst widersprechen sich $a<c$ und $c<a$), und dann $b \\leq d$ und $d \\leq b$, also $b = d$. Die Paare sind gleich. Ja.\n\n' +
          'Transitiv? Lässt sich durch Fallunterscheidung nachweisen – ja.',
      },
      {
        icon: '📝',
        titel: 'Partiell oder total?',
        inhalt:
          'Total bedeutet: JE ZWEI Paare sind vergleichbar. Nimm zwei beliebige Paare $(a,b)$ und $(c,d)$:\n' +
          '  Ist $a < c$? → erstes Paar kleiner.\n' +
          '  Ist $a > c$? → zweites Paar kleiner.\n' +
          '  Ist $a = c$? → dann entscheidet $b \\leq d$ oder $d \\leq b$, eines davon gilt immer.\n\n' +
          'In jedem Fall sind die Paare vergleichbar → TOTALE Ordnung.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Verwechslung mit der Teilbarkeit: Anders als $R_3$ ist diese Ordnung total, weil reelle Zahlen immer der Größe nach vergleichbar sind.',
      },
    ],
    loesung:
      '$R_4$ ist reflexiv, transitiv und antisymmetrisch.\n\n' +
      'Sie ist die lexikographische Ordnung: Es entscheidet zuerst die erste Komponente, bei Gleichheit die zweite. Da reelle Zahlen stets vergleichbar sind, sind auch je zwei Paare vergleichbar.\n\n' +
      'Damit ist $R_4$ eine totale Ordnungsrelation.\n\n' +
      'Gesamtüberblick (Aufgabe 4): $R_1$ ist eine Äquivalenzrelation; $R_3$ und $R_4$ sind Ordnungsrelationen ($R_3$ partiell, $R_4$ total).',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },

  // ─── Aufgabe 5: Relationen konstruieren (a/b/c/d) ──────────────────────────
  {
    id: 'b3_a5a',
    titel: 'Relation konstruieren: nur reflexiv',
    aufgabeText: 'Geben Sie eine Relation auf $\\mathbb{N}$ an, die reflexiv ist, aber weder symmetrisch noch transitiv.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Was muss die Relation leisten?',
        inhalt:
          'Eine Relation auf $\\mathbb{N}$ ist eine Menge von Paaren $(a,b)$. Gefordert:\n' +
          '  reflexiv: alle Paare $(n,n)$ müssen drin sein.\n' +
          '  NICHT symmetrisch: es soll ein Paar $(a,b)$ geben, dessen Umkehrung $(b,a)$ fehlt.\n' +
          '  NICHT transitiv: es soll eine Kette $(a,b),(b,c)$ geben, bei der $(a,c)$ fehlt.',
      },
      {
        icon: '🔍',
        titel: 'Baukasten-Idee',
        inhalt:
          'Starte mit der Identitätsrelation $\\{(n,n) : n \\in \\mathbb{N}\\}$ – die ist reflexiv.\n\n' +
          'Füge ein Paar $(1,2)$ hinzu, aber NICHT $(2,1)$ → das bricht die Symmetrie.\n\n' +
          'Füge ein Paar $(2,3)$ hinzu, aber NICHT $(1,3)$ → die Kette $1\\to 2\\to 3$ hat keinen direkten Sprung $1\\to 3$, das bricht die Transitivität.',
      },
      {
        icon: '📝',
        titel: 'Lösungsbeispiel',
        inhalt:
          '$R = \\{(n,n) : n \\in \\mathbb{N}\\} \\cup \\{(1,2),(2,3)\\}$\n\n' +
          'Prüfen:\n' +
          '  reflexiv: alle $(n,n)$ enthalten ✓\n' +
          '  nicht symmetrisch: $(1,2)\\in R$, aber $(2,1)\\notin R$ ✓\n' +
          '  nicht transitiv: $(1,2),(2,3)\\in R$, aber $(1,3)\\notin R$ ✓',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Die Identitätsrelation $(n,n)$ allein ist auch symmetrisch und transitiv – man muss die störenden Zusatzpaare ergänzen.',
      },
    ],
    loesung:
      'Zum Beispiel: $R = \\{(n,n) : n \\in \\mathbb{N}\\} \\cup \\{(1,2),(2,3)\\}$.\n\n' +
      'Reflexiv (alle $(n,n)$ enthalten), nicht symmetrisch (da $(2,1) \\notin R$), nicht transitiv (da $(1,3) \\notin R$).',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },
  {
    id: 'b3_a5b',
    titel: 'Relation konstruieren: nur symmetrisch',
    aufgabeText: 'Geben Sie eine Relation auf $\\mathbb{N}$ an, die symmetrisch ist, aber weder reflexiv noch transitiv.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Anforderungen',
        inhalt:
          '  symmetrisch: zu jedem Paar $(a,b)$ muss auch $(b,a)$ enthalten sein.\n' +
          '  NICHT reflexiv: mindestens ein $(n,n)$ darf fehlen.\n' +
          '  NICHT transitiv: eine Kette ohne direkten Sprung.',
      },
      {
        icon: '🔍',
        titel: 'Kleines Beispiel reicht',
        inhalt:
          'Man braucht keine unendliche Relation. Nimm nur zwei Paare, die zueinander symmetrisch sind: $(1,2)$ und $(2,1)$.',
      },
      {
        icon: '📝',
        titel: 'Lösungsbeispiel prüfen',
        inhalt:
          '$R = \\{(1,2),(2,1)\\}$\n\n' +
          '  symmetrisch: zu $(1,2)$ ist $(2,1)$ da und umgekehrt ✓\n' +
          '  nicht reflexiv: $(1,1) \\notin R$ ✓\n' +
          '  nicht transitiv: $(1,2)$ und $(2,1)$ sind drin, aber $(1,1)$ fehlt ✓',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Beachte: Aus $(1,2)$ und $(2,1)$ würde Transitivität $(1,1)$ verlangen – das fehlt absichtlich, sonst wäre die Relation transitiv.',
      },
    ],
    loesung:
      'Zum Beispiel: $R = \\{(1,2),(2,1)\\}$.\n\n' +
      'Symmetrisch (beide Richtungen vorhanden), nicht reflexiv (z.B. $(1,1) \\notin R$), nicht transitiv (aus $(1,2)$ und $(2,1)$ müsste $(1,1)$ folgen, fehlt aber).',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },
  {
    id: 'b3_a5c',
    titel: 'Relation konstruieren: nur transitiv',
    aufgabeText: 'Geben Sie eine Relation auf $\\mathbb{N}$ an, die transitiv ist, aber weder reflexiv noch symmetrisch.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Anforderungen',
        inhalt:
          '  transitiv: jede Kette $(a,b),(b,c)$ verlangt $(a,c)$.\n' +
          '  NICHT reflexiv: ein $(n,n)$ fehlt.\n' +
          '  NICHT symmetrisch: ein $(a,b)$ ohne $(b,a)$.',
      },
      {
        icon: '🔍',
        titel: 'Ein einziges Paar genügt',
        inhalt:
          'Nimm $R = \\{(1,2)\\}$. Dann gibt es gar keine Kette $(a,b),(b,c)$ (denn $(2,\\cdot)$ ist nicht enthalten), also ist die Transitivität trivialerweise erfüllt.',
      },
      {
        icon: '📝',
        titel: 'Lösungsbeispiel prüfen',
        inhalt:
          '$R = \\{(1,2)\\}$\n\n' +
          '  transitiv: keine Kette vorhanden → nichts zu erfüllen ✓ (leer erfüllt)\n' +
          '  nicht reflexiv: $(1,1) \\notin R$ ✓\n' +
          '  nicht symmetrisch: $(2,1) \\notin R$ ✓',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• „Leer erfüllt": Eine Eigenschaft, für die es gar keine relevanten Fälle gibt, gilt automatisch. Da keine zwei Paare verkettbar sind, ist Transitivität erfüllt.',
      },
    ],
    loesung:
      'Zum Beispiel: $R = \\{(1,2)\\}$.\n\n' +
      'Transitiv (es gibt keine Kette $(a,b),(b,c)$, daher trivial erfüllt), nicht reflexiv ($(1,1) \\notin R$), nicht symmetrisch ($(2,1) \\notin R$).',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },
  {
    id: 'b3_a5d',
    titel: 'Relation konstruieren: Äquivalenzrelation',
    aufgabeText: 'Geben Sie eine Relation auf $\\mathbb{N}$ an, die reflexiv, transitiv und symmetrisch ist.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Das ist eine Äquivalenzrelation',
        inhalt:
          'Reflexiv + symmetrisch + transitiv zusammen ist genau die Definition einer Äquivalenzrelation. Gesucht ist also irgendein einfaches Beispiel.',
      },
      {
        icon: '🔍',
        titel: 'Einfachste Wahl',
        inhalt:
          'Die einfachste Äquivalenzrelation ist „alles steht mit allem in Relation": $R = \\mathbb{N} \\times \\mathbb{N}$. Da ist jedes denkbare Paar enthalten, also sind alle drei Eigenschaften automatisch erfüllt.',
      },
      {
        icon: '📝',
        titel: 'Lösungsbeispiel prüfen',
        inhalt:
          '$R = \\mathbb{N} \\times \\mathbb{N}$\n\n' +
          '  reflexiv: jedes $(n,n)$ ist enthalten ✓\n' +
          '  symmetrisch: mit $(a,b)$ ist auch $(b,a)$ enthalten ✓\n' +
          '  transitiv: jeder geforderte Sprung $(a,c)$ ist enthalten ✓\n\n' +
          '(Alternative: die Identität $\\{(n,n) : n \\in \\mathbb{N}\\}$ ist ebenfalls eine Äquivalenzrelation.)',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Die leere Relation wäre hier NICHT erlaubt, da sie nicht reflexiv ist.',
      },
    ],
    loesung:
      'Zum Beispiel: $R = \\mathbb{N} \\times \\mathbb{N}$.\n\n' +
      'Reflexiv, symmetrisch und transitiv (alle Paare enthalten) → Äquivalenzrelation. (Auch die Identität $\\{(n,n) : n \\in \\mathbb{N}\\}$ wäre eine gültige Antwort.)',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },

  // ─── Aufgabe 6: Äquivalenzrelationen erkennen (a/b/c/d) ────────────────────
  {
    id: 'b3_a6a',
    titel: 'Äquivalenzrelation? – endliche Relation ($R_1$)',
    aufgabeText: 'Welche der folgenden Relationen sind Äquivalenzrelationen? Geben Sie bei Äquivalenzrelationen die Äquivalenzklassen an.\n\n$R_1 := \\{(1,1),(2,2),(2,4),(4,4)\\} \\subseteq \\{1,2,3,4\\} \\times \\{1,2,3,4\\}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Drei Bedingungen prüfen',
        inhalt:
          'Eine Äquivalenzrelation muss reflexiv, symmetrisch und transitiv sein. Sobald EINE der drei verletzt ist, ist es keine.\n\n' +
          'Grundmenge hier: $\\{1,2,3,4\\}$.',
      },
      {
        icon: '🔍',
        titel: 'Reflexivität prüfen',
        inhalt:
          'Reflexiv heißt: $(1,1),(2,2),(3,3),(4,4)$ müssen ALLE enthalten sein.\n\n' +
          'In $R_1$ steht aber kein Paar $(3,3)$! Das Element $3$ steht nicht mit sich selbst in Relation. → nicht reflexiv.',
      },
      {
        icon: '📝',
        titel: 'Symmetrie prüfen',
        inhalt:
          'Symmetrisch heißt: zu jedem $(a,b)$ ist auch $(b,a)$ da.\n\n' +
          'In $R_1$ steht $(2,4)$, aber NICHT $(4,2)$. → nicht symmetrisch.\n\n' +
          'Damit ist gleich zweifach gezeigt: $R_1$ ist keine Äquivalenzrelation.',
      },
      {
        icon: '⚠️',
        titel: 'Häufige Fehler',
        inhalt:
          '• Bei einer endlichen Relation muss man die geforderten Paare wirklich durchzählen. Das fehlende $(3,3)$ ist leicht zu übersehen.',
      },
    ],
    loesung:
      '$R_1$ ist KEINE Äquivalenzrelation.\n\n' +
      'Begründung: nicht reflexiv (es fehlt $(3,3)$) und nicht symmetrisch (es ist $(2,4) \\in R_1$, aber $(4,2) \\notin R_1$).',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },
  {
    id: 'b3_a6b',
    titel: 'Äquivalenzrelation? – durch Funktion definiert ($R_2$)',
    aufgabeText: 'Welche der folgenden Relationen sind Äquivalenzrelationen? Geben Sie bei Äquivalenzrelationen die Äquivalenzklassen an.\n\n$R_2 := \\{(x,y) : f(x) = f(y)\\} \\subseteq [0,1] \\times [0,1]$, wobei $f : [0,1] \\to \\mathbb{R}$, $x \\mapsto \\begin{cases} 1, & x \\in \\mathbb{Q} \\\\ 0, & x \\notin \\mathbb{Q} \\end{cases}$',
    tippSections: [
      {
        icon: '💡',
        titel: 'Relationen der Form $f(x) = f(y)$',
        inhalt:
          'Diese Relation sagt: zwei Zahlen stehen in Relation, wenn die Funktion $f$ ihnen denselben Wert zuweist.\n\n' +
          'Merksatz: JEDE Relation der Form „$f(x) = f(y)$" ist automatisch eine Äquivalenzrelation – egal wie $f$ aussieht.',
      },
      {
        icon: '🔍',
        titel: 'Warum automatisch Äquivalenz?',
        inhalt:
          'Reflexiv: $f(x) = f(x)$ ist immer wahr. ✓\n' +
          'Symmetrisch: aus $f(x) = f(y)$ folgt $f(y) = f(x)$. ✓\n' +
          'Transitiv: aus $f(x) = f(y)$ und $f(y) = f(z)$ folgt $f(x) = f(z)$. ✓\n\n' +
          'Das sind nur die üblichen Eigenschaften des Gleichheitszeichens.',
      },
      {
        icon: '📝',
        titel: 'Äquivalenzklassen = Urbilder',
        inhalt:
          'Die Funktion $f$ nimmt hier nur zwei Werte an: $1$ (für rationale Zahlen) und $0$ (für irrationale Zahlen). Die Äquivalenzklassen sind die Mengen aller $x$ mit gleichem Funktionswert:\n' +
          '  $f^{-1}(1) = [0,1] \\cap \\mathbb{Q}$ (alle rationalen Zahlen in $[0,1]$)\n' +
          '  $f^{-1}(0) = [0,1] \\cap (\\mathbb{R} \\setminus \\mathbb{Q})$ (alle irrationalen Zahlen in $[0,1]$)',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• $\\mathbb{Q}$ = rationale Zahlen (als Bruch darstellbar), $\\mathbb{R} \\setminus \\mathbb{Q}$ = irrationale Zahlen (z.B. $\\sqrt{2}$, $\\pi$).',
      },
    ],
    loesung:
      '$R_2$ ist eine Äquivalenzrelation.\n\n' +
      'Begründung: Eine Relation der Form $x\\,R\\,y \\Leftrightarrow f(x) = f(y)$ ist immer reflexiv, symmetrisch und transitiv (folgt aus den Eigenschaften der Gleichheit).\n\n' +
      'Äquivalenzklassen (Urbilder der Funktionswerte): $[0,1] \\cap \\mathbb{Q}$ und $[0,1] \\cap (\\mathbb{R} \\setminus \\mathbb{Q})$.',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },
  {
    id: 'b3_a6c',
    titel: 'Äquivalenzrelation? – Summe gerade ($R_3$)',
    aufgabeText: 'Welche der folgenden Relationen sind Äquivalenzrelationen? Geben Sie bei Äquivalenzrelationen die Äquivalenzklassen an.\n\nDie Relation $R_3$ auf $\\mathbb{Z}$ sei definiert durch $x\\,R_3\\,y$, falls $x + y$ eine gerade Zahl ist.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Wann ist eine Summe gerade?',
        inhalt:
          'Eine Summe $x + y$ ist genau dann gerade, wenn $x$ und $y$ DIESELBE Parität haben (beide gerade oder beide ungerade).\n\n' +
          'Denn: gerade+gerade = gerade, ungerade+ungerade = gerade, aber gerade+ungerade = ungerade.\n\n' +
          'Die Relation bedeutet also: „$x$ und $y$ sind beide gerade oder beide ungerade".',
      },
      {
        icon: '🔍',
        titel: 'Eigenschaften prüfen',
        inhalt:
          'Reflexiv? $x + x = 2x$ ist immer gerade. ✓\n\n' +
          'Symmetrisch? $x + y = y + x$, also egal in welcher Reihenfolge. ✓\n\n' +
          'Transitiv? Haben $x,y$ gleiche Parität und $y,z$ gleiche Parität, so haben auch $x,z$ gleiche Parität. ✓',
      },
      {
        icon: '📝',
        titel: 'Äquivalenzklassen',
        inhalt:
          'Es gibt genau zwei Klassen (gleiche Parität):\n' +
          '  die geraden Zahlen: $\\{2z : z \\in \\mathbb{Z}\\} = \\{\\ldots,-4,-2,0,2,4,\\ldots\\}$\n' +
          '  die ungeraden Zahlen: $\\{2z+1 : z \\in \\mathbb{Z}\\} = \\{\\ldots,-3,-1,1,3,\\ldots\\}$',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• $\\mathbb{Z}$ = ganze Zahlen (positiv, negativ und Null). Auch negative Zahlen werden in gerade/ungerade eingeteilt.',
      },
    ],
    loesung:
      '$R_3$ ist eine Äquivalenzrelation.\n\n' +
      'Begründung: $x + y$ gerade $\\Leftrightarrow$ $x$ und $y$ haben gleiche Parität. Reflexiv ($x+x = 2x$ gerade), symmetrisch ($x+y = y+x$), transitiv (gleiche Parität überträgt sich).\n\n' +
      'Äquivalenzklassen: $\\{2z : z \\in \\mathbb{Z}\\}$ (gerade ganze Zahlen) und $\\{2z+1 : z \\in \\mathbb{Z}\\}$ (ungerade ganze Zahlen).',
    schwierigkeit: 'mittel',
    kategorie: 'Relationen',
  },
  {
    id: 'b3_a6d',
    titel: 'Äquivalenzrelation? – $y = ax^b$ ($R_4$)',
    aufgabeText: 'Welche der folgenden Relationen sind Äquivalenzrelationen? Geben Sie bei Äquivalenzrelationen die Äquivalenzklassen an.\n\nDie Relation $R_4$ auf $\\mathbb{N}^*$ sei definiert durch $x\\,R_4\\,y$, falls $a, b \\in \\mathbb{N}^*$ existieren, so dass $y = a x^b$.',
    tippSections: [
      {
        icon: '💡',
        titel: 'Die Definition verstehen',
        inhalt:
          '$x\\,R_4\\,y$ heißt: $y$ lässt sich als $y = a \\cdot x^b$ schreiben, wobei $a$ und $b$ irgendwelche natürlichen Zahlen ($\\geq 1$) sind.\n\n' +
          '$\\mathbb{N}^* = \\{1, 2, 3, \\ldots\\}$ (ohne Null).',
      },
      {
        icon: '🔍',
        titel: 'Strategie: Symmetrie widerlegen',
        inhalt:
          'Um zu zeigen, dass etwas KEINE Äquivalenzrelation ist, genügt ein Gegenbeispiel für eine der drei Eigenschaften. Hier ist die Symmetrie am leichtesten zu kippen.\n\n' +
          'Symmetrisch wäre: aus $x\\,R_4\\,y$ folgt $y\\,R_4\\,x$. Wir suchen ein Paar, bei dem das fehlschlägt.',
      },
      {
        icon: '📝',
        titel: 'Konkretes Gegenbeispiel',
        inhalt:
          'Gilt $1\\,R_4\\,2$? Wir brauchen $a,b$ mit $2 = a \\cdot 1^b$. Mit $a = 2$, $b = 1$: $2 = 2 \\cdot 1^1 = 2$. ✓ Also $1\\,R_4\\,2$.\n\n' +
          'Gilt umgekehrt $2\\,R_4\\,1$? Wir bräuchten $a,b$ mit $1 = a \\cdot 2^b$. Dann müsste $a = \\frac{1}{2^b}$ sein – das ist aber für $b \\geq 1$ keine natürliche Zahl. Unmöglich. ✗\n\n' +
          'Also $1\\,R_4\\,2$, aber NICHT $2\\,R_4\\,1$ → nicht symmetrisch.',
      },
      {
        icon: '⚠️',
        titel: 'Hinweis',
        inhalt:
          '• Ein einziges Gegenbeispiel reicht aus, um Symmetrie (und damit die Äquivalenzeigenschaft) zu widerlegen.',
      },
    ],
    loesung:
      '$R_4$ ist KEINE Äquivalenzrelation.\n\n' +
      'Begründung: $R_4$ ist nicht symmetrisch. Gegenbeispiel: $1\\,R_4\\,2$ gilt (mit $a=2$, $b=1$: $2 = 2 \\cdot 1^1$), aber $2\\,R_4\\,1$ gilt nicht (es gibt kein $a,b \\in \\mathbb{N}^*$ mit $1 = a \\cdot 2^b$).',
    schwierigkeit: 'schwer',
    kategorie: 'Relationen',
  },
]
