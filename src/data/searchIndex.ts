import type { SearchItem } from 'lernseiten-ui'
import { uebungsblaetter } from './uebungsblaetter'
import { quizFragen } from './quiz'
import { referenzKarten } from './referenz'
import { themen } from './themen'
import { pdfGruppen } from './folien'
import { formelsammlungSeite1, formelsammlungSeite2 } from './formelsammlung'

// Such-Index aus den Inhalten der Seite. Jeder Treffer kennt seinen Ziel-Tab
// (gültige TabId), damit die globale Suche direkt dorthin springen kann.
export const searchIndex: SearchItem[] = [
  // Übungsblätter → Tab "uebung"
  ...uebungsblaetter.flatMap(b =>
    b.aufgaben.map(t => ({
      label: `Aufgabe ${t.nr}: ${t.text}`,
      snippet: `Übungsblatt ${b.nr}`,
      tab: 'uebung',
      keywords: b.typ,
    })),
  ),
  // Quizfragen → Tab "quiz"
  ...quizFragen.map(q => ({
    label: q.frage,
    snippet: 'Quizfrage',
    tab: 'quiz',
    keywords: q.quelle ?? '',
  })),
  // Formelsammlung / Hilfsmittel → Tab "formelsammlung"
  ...[...formelsammlungSeite1, ...formelsammlungSeite2].map(s => ({
    label: s.titel,
    snippet: 'Formelsammlung',
    tab: 'formelsammlung',
  })),
  // Folien & PDFs → Tab "folien"
  ...pdfGruppen.flatMap(g =>
    g.dokumente.map(d => ({
      label: d.titel,
      snippet: g.titel,
      tab: 'folien',
    })),
  ),
  // Referenz / Cheatsheet → Tab "referenz"
  ...referenzKarten.map(k => ({
    label: k.titel,
    snippet: 'Referenz',
    tab: 'referenz',
  })),
  // Schema / Themen → Tab "themen"
  ...themen.map(t => ({
    label: t.titel,
    snippet: t.beschreibung ?? 'Thema',
    tab: 'themen',
  })),
]
