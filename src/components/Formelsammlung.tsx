import { formelsammlungSeite1, formelsammlungSeite2 } from '../data/formelsammlung'
import type { FormelSektion } from '../types'
import MathText from './MathText'

function Seite({ sektionen, nummer }: { sektionen: FormelSektion[]; nummer: number }) {
  return (
    <div className="fs-page">
      <div className="fs-page-inner">
        {sektionen.length === 0 ? (
          <p className="fs-empty">
            Noch keine Inhalte. Diese Seite wird befüllt, sobald du sagst, welche Formeln
            hier rein sollen.
          </p>
        ) : (
          sektionen.map(s => (
            <section key={s.titel} className="fs-section">
              <h3 className="fs-section-title">
                <MathText>{s.titel}</MathText>
              </h3>
              <div className="fs-section-body">
                <MathText block>{s.inhalt}</MathText>
              </div>
            </section>
          ))
        )}
      </div>
      <div className="fs-page-num">Seite {nummer} / 2</div>
    </div>
  )
}

export default function Formelsammlung() {
  return (
    <div className="formelsammlung">
      <div className="section-header fs-no-print">
        <h2>Hilfsmittel / Formelsammlung</h2>
        <p>
          Prüfungs-Hilfsmittel auf zwei A4-Seiten zum Ausdrucken. Inhalte werden nur auf
          deine Anweisung ergänzt.
        </p>
      </div>
      <div className="fs-toolbar fs-no-print">
        <button type="button" className="fs-print-btn" onClick={() => window.print()}>
          Drucken / Als PDF speichern
        </button>
      </div>
      <div className="fs-pages">
        <Seite sektionen={formelsammlungSeite1} nummer={1} />
        <Seite sektionen={formelsammlungSeite2} nummer={2} />
      </div>
    </div>
  )
}
