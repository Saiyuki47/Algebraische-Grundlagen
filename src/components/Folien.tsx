import { useState } from 'react'
import { pdfGruppen } from '../data/folien'

const alleDokumente = pdfGruppen.flatMap(g => g.dokumente)

/** Baut eine relative URL ins public-Verzeichnis (funktioniert mit base: './'). */
function pdfUrl(datei: string): string {
  return encodeURI(import.meta.env.BASE_URL + datei)
}

export default function Folien() {
  const [selected, setSelected] = useState(alleDokumente[0]?.datei ?? '')
  const aktiv = alleDokumente.find(d => d.datei === selected)
  const url = aktiv ? pdfUrl(aktiv.datei) : ''

  return (
    <div>
      <div className="section-header">
        <h2>Folien &amp; Material</h2>
        <p>Vorlesungsfolien mit Notizen und die Lösungen der Übungsblätter als PDF.</p>
      </div>

      <div className="pdf-layout">
        <aside className="pdf-list">
          {pdfGruppen.map(gruppe => (
            <div key={gruppe.titel} className="pdf-group">
              <h3 className="pdf-group-title">{gruppe.titel}</h3>
              {gruppe.dokumente.map(dok => (
                <button
                  type="button"
                  key={dok.datei}
                  className={`pdf-item${selected === dok.datei ? ' on' : ''}`}
                  onClick={() => setSelected(dok.datei)}
                >
                  {dok.titel}
                </button>
              ))}
            </div>
          ))}
        </aside>

        <div className="pdf-viewer card card--flush">
          {aktiv ? (
            <>
              <div className="pdf-viewer-bar">
                <span className="pdf-viewer-title">{aktiv.titel}</span>
                <div className="pdf-viewer-actions">
                  <a href={url} target="_blank" rel="noopener noreferrer" className="pdf-action-link">
                    In neuem Tab öffnen ↗
                  </a>
                  <a href={url} download className="pdf-action-link">
                    Herunterladen ↓
                  </a>
                </div>
              </div>
              <iframe
                key={url}
                src={url}
                title={aktiv.titel}
                className="pdf-frame"
                sandbox="allow-same-origin"
              />
            </>
          ) : (
            <p className="pdf-empty">Kein Dokument ausgewählt.</p>
          )}
        </div>
      </div>
    </div>
  )
}
