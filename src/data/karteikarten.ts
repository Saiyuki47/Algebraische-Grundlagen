import type { FlashCard } from 'lernseiten-ui'
import { referenzKarten } from './referenz'
import { formelsammlungSeite1, formelsammlungSeite2 } from './formelsammlung'
import { quizFragen } from './quiz'

// Karteikarten werden aus vorhandenen Inhalten abgeleitet, damit nur eine Quelle
// gepflegt werden muss:
//  • bevorzugt aus der Formelsammlung/Referenz (Begriff/Thema → Erklärung)
//  • ergänzt aus den Quizfragen (Frage → Erklärung)
// Bei Bedarf hier eigene Karten ergänzen.
export const karteikarten: FlashCard[] = [
  ...[...formelsammlungSeite1, ...formelsammlungSeite2].map((s, i) => ({
    id: `fs-${i}`,
    front: s.titel,
    back: s.inhalt,
    tag: 'Formelsammlung',
  })),
  ...referenzKarten.map((k, i) => ({
    id: `ref-${i}`,
    front: k.titel,
    back: k.inhalt,
    tag: 'Referenz',
  })),
  ...quizFragen.map((q, i) => ({
    id: `q-${i}`,
    front: q.frage,
    back: q.erklaerung,
    tag: q.quelle,
  })),
]
