import { useState, type CSSProperties } from 'react'
import { useDoneTracker, useTaskDeepLink, getHashDetail, MathText } from 'lernseiten-ui'
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
  const [openIds, setOpenIds] = useState<Set<string>>(new Set())
  const [openTipps, setOpenTipps] = useState<Set<string>>(new Set())
  const [openTeilTipps, setOpenTeilTipps] = useState<Set<string>>(new Set())
  const { done, toggle: toggleDone, ratio } = useDoneTracker()
  const listRef = useTaskDeepLink<HTMLDivElement>(selectedId)

  const blatt = uebungsblaetter.find(b => b.id === selectedId)

  const toggleTipp = (key: string) => {
    setOpenTipps(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const toggleTeilTipp = (key: string) => {
    setOpenTeilTipps(prev => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const toggleSolution = (key: string) => {
    setOpenIds(prev => {
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
            const isOpen = openIds.has(key)
            const isTippOpen = openTipps.has(key)
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
                          const ttKey = `${key}-${tt.label}`
                          const isTtOpen = openTeilTipps.has(ttKey)
                          return (
                            <div key={tt.label} className="teilaufgabe-tipp-item">
                              <button type="button" className="toggle-btn toggle-btn-teil" onClick={() => toggleTeilTipp(ttKey)}>
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
                      <>
                        <button type="button" className="toggle-btn toggle-btn--tips" onClick={() => toggleTipp(key)}>
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
                      </>
                    )}
                    <button type="button" className="toggle-btn" onClick={() => toggleSolution(key)}>
                      {isOpen ? '▼ Lösung verbergen' : '▶ Lösung anzeigen'}
                    </button>
                    {isOpen && (
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
                            <MathText block>{aufgabe.loesung}</MathText>
                            <GraphDisplay aufgabeId={aufgabe.id} />
                          </>
                        )}
                      </div>
                    )}
                  </>
                )}
                <button
                  type="button"
                  className="toggle-btn"
                  onClick={() => toggleDone(key)}
                  style={isDone ? { color: 'var(--green, #2ea043)', borderColor: 'var(--green, #2ea043)' } : undefined}
                >
                  {isDone ? '✓ Verstanden' : '○ Als verstanden markieren'}
                </button>
              </div>
            )
          })}
          </div>
        </>
      )}
    </div>
  )
}

