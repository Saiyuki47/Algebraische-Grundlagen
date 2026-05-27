# Algebraische Grundlagen — AI1010

Interaktive Lernseite für die Lehrveranstaltung **Algebraische Grundlagen (AI1010)** an der **Hochschule Fulda**, Sommersemester 2026.

## Inhalte

Abgedeckte Themen aus Übungsblatt 0:

| Thema | Beschreibung |
|-------|-------------|
| **Trigonometrie** | Einheitskreis, sin/cos/tan-Graphen, Winkelumrechnung (Grad ↔ Bogenmaß), Arkusfunktionen |
| **Periodizität** | Berechnung von sin/cos/tan-Werten für große Argumente, Standardwerte |
| **Urbilder** | Unterschied Urbild vs. Umkehrfunktion, unendliche Lösungsmengen periodischer Gleichungen |
| **ℝ×ℝ Teilmengen** | Skizzieren und Beschreiben von Mengen in der Ebene (Kreise, Geraden, Halbebenen) |
| **Algebraische Umformungen** | Nenner rational machen, 3. binomische Formel, konjugierter Ausdruck |

## App-Funktionen

| Tab | Beschreibung |
|-----|-------------|
| **Übungsblätter** | Aufgaben nach Blatt geordnet, mit ausführlichem Tipp und aufklappbarer Musterlösung |
| **Aufgaben** | Alle Aufgaben nach Schwierigkeit gefiltert, ebenfalls mit Tipp & Lösung |
| **Quiz** | Multiple-Choice-Quiz mit Fortschrittsbalken, Feedback und Ergebnisauswertung |
| **Referenz** | Formelsammlung als schnelle Nachschlagereferenz |
| **Themen** | Strukturierte Übersicht der Lernthemen mit Stichpunkten |

## Starten

```bash
npm install
npm run dev
```

Öffne anschließend `http://localhost:5173` im Browser.

## Projektstruktur

```
src/
├── components/       # UI-Komponenten (Tabs, Quiz, Aufgaben, MathText, Graphs, …)
├── data/             # Inhalte (Aufgaben, Quiz, Referenz, Themen)
├── types.ts          # TypeScript-Typdefinitionen
└── index.css         # Globales Styling (Dark Theme)
```

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) als Build-Tool
- [KaTeX](https://katex.org/) für LaTeX-Mathedarstellung
- SVG-Koordinatensysteme für Graphen und Skizzen
