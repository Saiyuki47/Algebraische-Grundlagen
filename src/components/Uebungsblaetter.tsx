import { useState, useMemo, type CSSProperties } from 'react'
// eslint-disable-next-line react-doctor/no-flush-sync -- offizielles React-Muster: flushSync + scrollIntoView, um nach dem Ansichtswechsel sofort zur Ziel-Aufgabe zu scrollen
import { flushSync } from 'react-dom'
import { useDoneTracker, useTaskDeepLink, getHashDetail, setHashDetail, MathText, OffeneAufgaben, type OffenItem } from 'lernseiten-ui'
import { uebungsblaetter } from '../data/uebungsblaetter'
import { aufgaben } from '../data/aufgaben'
import { referenzTitelById } from '../data/referenz'
import GraphDisplay from './Graphs'

const refLinksRow: CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: '0.4rem', margin: '0.6rem 0 0' }
const refLinkStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.3rem',
  fontSize: '0.8rem',
  padding: '0.2rem 0.6rem',
  border: '1px solid var(--blue, #2563eb)',
  borderRadius: '999px',
  color: 'var(--blue, #2563eb)',
  textDecoration: 'none',
  lineHeight: 1.3,
}

export default function Uebungsblaetter() {
  const [selectedId, setSelectedId] = useState(() => {
    const b = getHashDetail().blatt
    return b && uebungsblaetter.some(x => x.id === b) ? b : (uebungsblaetter[0]?.id ?? '')
  })
  const [open, setOpen] = useState<Set<string>>(new Set())
  const [view, setView] = useState<'blatt' | 'offen'>('blatt')
  const { done, toggle: toggleDone, ratio } = useDoneTracker()
  const listRef = useTaskDeepLink<HTMLDivElement>(selectedId)

  const blatt = uebungsblaetter.find(b => b.id === selectedId)

  // Alle noch nicht als „verstanden" markierten Aufgaben (über alle Blätter).
  const offen = useMemo<OffenItem[]>(() => {
    const out: OffenItem[] = []
    for (const b of uebungsblaetter)
      for (const t of b.aufgaben) {
        const key = `${b.id}-${t.nr}`
        if (!done.has(key)) {
          out.push({ key, blattId: b.id, blattLabel: `Blatt ${b.nr}`, aufgabeNr: String(t.nr), label: `Aufgabe ${t.nr}` })
        }
      }
    return out
  }, [done])

  // Aus der „Noch offen"-Liste zur Aufgabe zurückspringen: Blatt wählen + Ansicht
  // synchron umschalten (flushSync), dann steht die Karte im DOM → direkt scrollen.
  const goToTask = (blattId: string, aufgabeNr: string) => {
    flushSync(() => {
      setSelectedId(blattId)
      setView('blatt')
    })
    setHashDetail(blattId, aufgabeNr, 'uebung')
    listRef.current?.querySelector(`[data-aufgabe="${aufgabeNr}"]`)?.scrollIntoView({ block: 'start' })
  }

  const toggle = (key: string) => {
    setOpen(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const taskKeys = blatt ? blatt.aufgaben.map(t => `${blatt.id}-${t.nr}`) : []
  const verstanden = taskKeys.filter(k => done.has(k)).length
  const pct = Math.round(ratio(taskKeys) * 100)

  return (
    <div>
      <div className="section-header">
        <h2>Übungsblätter</h2>
        <p>Aufgaben und Musterlösungen nach Übungsblatt geordnet.</p>
      </div>

      <div className="filter-row" style={{ marginBottom: '0.6rem' }}>
        <button
          type="button"
          className={`filter-btn${view === 'blatt' ? ' on' : ''}`}
          onClick={() => setView('blatt')}
        >
          📚 Nach Blatt
        </button>
        <button
          type="button"
          className={`filter-btn${view === 'offen' ? ' on' : ''}`}
          onClick={() => setView('offen')}
        >
          📌 Noch offen{offen.length ? ` (${offen.length})` : ''}
        </button>
      </div>

      {view === 'offen' ? (
        <OffeneAufgaben items={offen} onGo={goToTask} />
      ) : (
        <>
      {uebungsblaetter.length > 1 && (
        <div className="filter-row">
          {uebungsblaetter.map(b => (
            <button
              type="button"
              key={b.id}
              className={`filter-btn${selectedId === b.id ? ' on' : ''}`}
              onClick={() => setSelectedId(b.id)}
            >
              Blatt {b.nr}
            </button>
          ))}
        </div>
      )}

      {blatt && (
        <>
          <div className="ub-header card">
            <div className="ub-meta-row">
              <span className="ub-badge">{blatt.typ}</span>
            </div>
            <h3 className="ub-title">Übungsblatt {blatt.nr}</h3>
            {blatt.beschreibung && (
              <p className="ub-desc"><MathText>{blatt.beschreibung}</MathText></p>
            )}
            {taskKeys.length > 0 && (
              <>
                <div className="progress-wrap" style={{ marginTop: '0.75rem' }}>
                  <div className="progress-bar" style={{ '--bar-w': `${pct}%` } as CSSProperties} />
                </div>
                <p className="ub-desc" style={{ marginTop: '0.4rem' }}>
                  {verstanden} / {taskKeys.length} Aufgaben verstanden ({pct}%)
                </p>
              </>
            )}
          </div>

          {blatt.hinweis && (
            <div className="ub-hinweis card">
              <p className="ub-hinweis-label">Hinweis</p>
              <div className="ub-hinweis-body">
                <MathText block>{blatt.hinweis}</MathText>
              </div>
            </div>
          )}

          <div ref={listRef}>
          {blatt.aufgaben.map(task => {
            const aufgabe = aufgaben.find(a => a.id === task.aufgabeId)
            const key = `${blatt.id}-${task.nr}`
            const isOpen = open.has(`${key}-sol`)
            const isTippOpen = open.has(`${key}-tipp`)
            const isDone = done.has(key)

            return (
              <div key={key} className="card" data-aufgabe={String(task.nr)}>
                <p className="ub-task-nr">Aufgabe {task.nr}</p>
                {aufgabe ? (
                  <div className="ub-aufgabe-body">
                    {aufgabe.aufgabeSections ? (
                      aufgabe.aufgabeSections.map((sec) => (
                        <div key={sec.graphId ?? sec.text?.slice(0, 60)}>
                          {sec.text && <MathText block>{sec.text}</MathText>}
                          {sec.graphId && <GraphDisplay aufgabeId={sec.graphId} />}
                        </div>
                      ))
                    ) : (
                      <MathText block>{aufgabe.aufgabeText}</MathText>
                    )}
                  </div>
                ) : (
                  <p className="q-title"><MathText>{task.text}</MathText></p>
                )}
                {task.referenz && task.referenz.length > 0 && (
                  <div style={refLinksRow}>
                    {task.referenz.map(rid => (
                      <a key={rid} href={`#referenz/${rid}`} style={refLinkStyle}>
                        📘 <MathText>{referenzTitelById[rid] ?? rid}</MathText>
                      </a>
                    ))}
                  </div>
                )}
                {aufgabe && (
                  <>
                    {aufgabe.teilaufgabeTipps && aufgabe.teilaufgabeTipps.length > 0 && (
                      <div className="teilaufgabe-tipps">
                        {aufgabe.teilaufgabeTipps.map((tt) => {
                          const ttKey = `${key}-teil-${tt.label}`
                          const isTtOpen = open.has(ttKey)
                          return (
                            <div key={tt.label} className="teilaufgabe-tipp-item">
                              <button type="button" className="toggle-btn toggle-btn-teil" onClick={() => toggle(ttKey)}>
                                {isTtOpen ? `▼ Hilfe (${tt.label}) verbergen` : `▶ Hilfe (${tt.label})`}
                              </button>
                              {isTtOpen && (
                                <div className="tipp-accordion">
                                  {tt.tippSections.map((sec) => (
                                    <details key={sec.titel} className="tipp-section">
                                      <summary className="tipp-section-summary">
                                        <span className="tipp-section-icon">{sec.icon}</span>
                                        <span>{sec.titel}</span>
                                      </summary>
                                      <div className="tipp-section-body">
                                        <MathText block>{sec.inhalt}</MathText>
                                      </div>
                                    </details>
                                  ))}
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    )}
                    {(aufgabe.tippSections ?? aufgabe.tipp) && (
                      <div className="ub-hints-section">
                        <button type="button" className="toggle-btn toggle-btn--hint" onClick={() => toggle(`${key}-tipp`)}>
                          {isTippOpen ? '▼ Tipp verbergen' : '▶ Tipp anzeigen'}
                        </button>
                        {isTippOpen && (aufgabe.tippSections ? (
                          <div className="tipp-accordion">
                            {aufgabe.tippSections.map((sec) => (
                              <details key={sec.titel} className="tipp-section">
                                <summary className="tipp-section-summary">
                                  <span className="tipp-section-icon">{sec.icon}</span>
                                  <span>{sec.titel}</span>
                                </summary>
                                <div className="tipp-section-body">
                                  <MathText block>{sec.inhalt}</MathText>
                                </div>
                              </details>
                            ))}
                          </div>
                        ) : (
                          <p className="tipp-block"><MathText>{aufgabe.tipp!}</MathText></p>
                        ))}
                      </div>
                    )}
                    {(aufgabe.loesungSections ?? aufgabe.loesung) && (
                      <button type="button" className="toggle-btn" onClick={() => toggle(`${key}-sol`)}>
                        {isOpen ? '▼ Lösung verbergen' : '▶ Lösung anzeigen'}
                      </button>
                    )}
                    {isOpen && (aufgabe.loesungSections ?? aufgabe.loesung) && (
                      <div className="sql-block visible">
                        {aufgabe.loesungSections ? (
                          aufgabe.loesungSections.map((sec) => (
                            <div key={sec.graphId ?? sec.text?.slice(0, 60)}>
                              {sec.text && <MathText block>{sec.text}</MathText>}
                              {sec.graphId && <GraphDisplay aufgabeId={sec.graphId} />}
                            </div>
                          ))
                        ) : (
                          <>
                            {aufgabe.loesung && <MathText block>{aufgabe.loesung}</MathText>}
                            <GraphDisplay aufgabeId={aufgabe.id} />
                          </>
                        )}
                      </div>
                    )}
                  </>
                )}
                <button
                  type="button"
                  className={`toggle-btn${isDone ? ' done' : ''}`}
                  onClick={() => toggleDone(key)}
                >
                  {isDone ? '✓ Verstanden' : '○ Als verstanden markieren'}
                </button>
              </div>
            )
          })}
          </div>
        </>
      )}
        </>
      )}
    </div>
  )
}

