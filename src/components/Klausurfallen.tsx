import type { CSSProperties } from 'react'
import { MathText } from 'lernseiten-ui'
import { klausurFallen, type Falle } from '../data/klausurfallen'

// Formeln werden über MathText/KaTeX gesetzt (einfaches `$…$`, Backslashes
// im Datenmodell verdoppelt). Die titel-Strings sind reiner Unicode-Text.

const grpId = (id: string) => `fallen-grp-${id}`

const card: CSSProperties = {
  border: '1px solid var(--border)',
  borderLeft: '3px solid var(--red, #dc2626)',
  borderRadius: '8px',
  background: 'var(--bg2)',
  padding: '0.6rem 0.85rem',
  margin: '0.7rem 0',
}
const titelStyle: CSSProperties = { fontWeight: 700, color: 'var(--text)', margin: '0 0 0.4rem' }
const row: CSSProperties = { display: 'flex', gap: '0.5rem', alignItems: 'baseline', margin: '0.25rem 0', flexWrap: 'wrap' }
const badge = (bg: string): CSSProperties => ({
  flexShrink: 0,
  fontSize: '0.7rem',
  fontWeight: 700,
  color: '#fff',
  background: bg,
  borderRadius: '4px',
  padding: '0.05rem 0.4rem',
  whiteSpace: 'nowrap',
})
const merkeStyle: CSSProperties = {
  margin: '0.45rem 0 0',
  padding: '0.4rem 0.65rem',
  background: 'var(--bg3)',
  borderRadius: '6px',
  fontSize: '0.9rem',
  color: 'var(--text)',
}

function FalleCard({ f }: { f: Falle }) {
  return (
    <div style={card}>
      <p style={titelStyle}>⚠️ {f.titel}</p>
      <div style={{ margin: '0 0 0.35rem' }}>
        <MathText block>{f.falle}</MathText>
      </div>
      {f.falsch && (
        <div style={row}>
          <span style={badge('var(--red, #dc2626)')}>✗ so nicht</span>
          <MathText>{f.falsch}</MathText>
        </div>
      )}
      {f.richtig && (
        <div style={row}>
          <span style={badge('var(--green, #16a34a)')}>✓ sondern</span>
          <MathText>{f.richtig}</MathText>
        </div>
      )}
      {f.beispiel && (
        <div style={{ margin: '0.35rem 0 0' }}>
          <MathText block>{f.beispiel}</MathText>
        </div>
      )}
      {f.merke && (
        <div style={merkeStyle}>
          💡 <MathText>{f.merke}</MathText>
        </div>
      )}
    </div>
  )
}

export default function Klausurfallen() {
  const scrollTo = (id: string) => {
    document.getElementById(grpId(id))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const anzahl = klausurFallen.reduce((n, g) => n + g.fallen.length, 0)

  return (
    <div>
      <div className="section-header">
        <h2>Klausur-Fallen</h2>
        <p>
          {anzahl} nicht-intuitive Stolperfallen aus Übungsblättern, Referenz und Vorlesung –
          Dinge, die man sich extra merken muss, weil sie sich nicht „aus dem Bauch" richtig lösen.
        </p>
      </div>

      {/* Kategorien-Übersicht */}
      <div className="card">
        <div className="filter-row" style={{ flexWrap: 'wrap' }}>
          {klausurFallen.map(g => (
            <button
              key={g.id}
              type="button"
              className="filter-btn"
              onClick={() => scrollTo(g.id)}
            >
              {g.icon} {g.titel} ({g.fallen.length})
            </button>
          ))}
        </div>
      </div>

      {/* Fallen je Kategorie */}
      {klausurFallen.map(g => (
        <div key={g.id} id={grpId(g.id)} className="card" style={{ scrollMarginTop: '1rem' }}>
          <h3 className="ub-title">{g.icon} {g.titel}</h3>
          {g.fallen.map(f => (
            <FalleCard key={f.titel} f={f} />
          ))}
        </div>
      ))}
    </div>
  )
}
