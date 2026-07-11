import { lazy, Suspense } from 'react'
import { useHashSubTab } from 'lernseiten-ui'
import Cheatsheet from './Cheatsheet'

// Zweites Hash-Segment (#referenz/<sub>) steuert den Untertab. „themen" ist der
// Fallback – dadurch landen die bestehenden Referenz-Deep-Links (#referenz/<id>)
// und #referenz/begriffe weiterhin in der Cheatsheet und scrollen dort zur Karte.
// Wichtig: 'themen'/'fallen' sind keine Karten-Ids, sonst würden Deep-Links brechen.
const Klausurfallen = lazy(() => import('./Klausurfallen'))
const SUBS = ['themen', 'fallen'] as const

const TABS: { id: (typeof SUBS)[number]; label: string }[] = [
  { id: 'themen', label: '📚 Themen & Begriffe' },
  { id: 'fallen', label: '⚠️ Klausur-Fallen' },
]

export default function Referenz() {
  const [sub, setSub] = useHashSubTab(SUBS, 'themen')
  return (
    <div>
      <div className="hilf-fs-switch" role="tablist" aria-label="Referenz-Ansicht wählen">
        {TABS.map(t => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={sub === t.id}
            className={`hilf-fs-tab${sub === t.id ? ' active' : ''}`}
            onClick={() => setSub(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {sub === 'themen' ? (
        <Cheatsheet />
      ) : (
        <Suspense fallback={<div className="card"><p className="quiz-hint">Lädt …</p></div>}>
          <Klausurfallen />
        </Suspense>
      )}
    </div>
  )
}
