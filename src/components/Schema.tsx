import { useState } from 'react'
import { themen } from '../data/themen'
import { MathText } from 'lernseiten-ui'

export default function Schema() {
  const [openIds, setOpenIds] = useState<Set<number>>(new Set())

  const toggle = (idx: number) => {
    setOpenIds(prev => {
      const next = new Set(prev)
      next.has(idx) ? next.delete(idx) : next.add(idx)
      return next
    })
  }

  return (
    <div>
      <div className="section-header">
        <h2>Themen</h2>
        <p>Übersicht aller behandelten Themen und Inhalte.</p>
      </div>

      {themen.map((thema, idx) => {
        const isOpen = openIds.has(idx)
        return (
          <div key={thema.titel} className="card">
            <button type="button" className="schema-data-toggle" onClick={() => toggle(idx)}>
              <span className="schema-data-arrow">{isOpen ? '▼' : '▶'}</span>
              <span className="schema-data-name"><MathText>{thema.titel}</MathText></span>
            </button>
            {isOpen && (
              <div className="thema-detail">
                {thema.beschreibung && (
                  <p className="q-text"><MathText>{thema.beschreibung}</MathText></p>
                )}
                {thema.punkte && thema.punkte.length > 0 && (
                  <ul className="thema-punkte">
                    {thema.punkte.map((p) => (
                      <li key={p}><MathText>{p}</MathText></li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
