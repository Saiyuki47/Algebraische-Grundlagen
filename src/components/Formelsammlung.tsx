import { useState } from 'react'

// Offizielle Formelsammlung(en) als PDF, direkt im Hilfsmittel-Tab ansehbar.
// Zwei Fassungen werden per Umschalter angeboten.
const PDFS = [
  { id: 'haupt', label: 'Formelsammlung', file: 'Formelsammlung.pdf' },
  { id: 'neu', label: 'Formelsammlung (neu)', file: 'Formelsammlung-neu.pdf' },
] as const

type PdfId = (typeof PDFS)[number]['id']

export default function Formelsammlung() {
  const [active, setActive] = useState<PdfId>(PDFS[0].id)
  const cur = PDFS.find(p => p.id === active) ?? PDFS[0]
  const url = `${import.meta.env.BASE_URL}${cur.file}`

  return (
    <div className="formelsammlung">
      <div className="hilf-bar">
        <div className="hilf-bar-text">
          <h2>Hilfsmittel</h2>
          <p>
            Offizielle Formelsammlung als PDF — direkt ansehen oder herunterladen. Zwei
            Fassungen stehen zur Auswahl.
          </p>
        </div>
        <div className="hilf-bar-actions">
          <span className="hilf-bar-hint">PDF · A4</span>
          <a className="hilf-print-btn" href={url} target="_blank" rel="noopener noreferrer">
            ⬇ Öffnen / Download
          </a>
        </div>
      </div>

      <div className="hilf-pdf">
        <div className="hilf-pdf-switch" role="tablist" aria-label="Formelsammlung-Fassung">
          {PDFS.map(p => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={p.id === active}
              className={`hilf-pdf-tab${p.id === active ? ' active' : ''}`}
              onClick={() => setActive(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>
        <iframe
          className="hilf-pdf-frame"
          src={url}
          title={cur.label}
          sandbox="allow-same-origin allow-popups allow-downloads"
        />
        <p className="hilf-pdf-fallback">
          Vorschau lädt nicht?{' '}
          <a href={url} target="_blank" rel="noopener noreferrer">
            PDF in neuem Tab öffnen ↗
          </a>
        </p>
      </div>
    </div>
  )
}
