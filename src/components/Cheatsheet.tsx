import { referenzKarten } from '../data/referenz'
import MathText from './MathText'

export default function Cheatsheet() {
  return (
    <div>
      <div className="section-header">
        <h2>Referenz</h2>
        <p>Die wichtigsten Konzepte und Formeln auf einen Blick.</p>
      </div>
      <div className="cheat-grid">
        {referenzKarten.map(karte => (
          <div key={karte.titel} className="cheat-card">
            <h3><MathText>{karte.titel}</MathText></h3>
            <div className="cheat-code"><MathText block>{karte.inhalt}</MathText></div>
          </div>
        ))}
      </div>
    </div>
  )
}
