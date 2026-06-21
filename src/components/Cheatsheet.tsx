import React, { useEffect, useRef, useState } from 'react'
import { referenzKarten } from '../data/referenz'
import MathText from './MathText'

const cardId = (i: number) => `ref-card-${i}`

export default function Cheatsheet() {
  const [activeId, setActiveId] = useState<string>(() => cardId(0))
  const contentRef = useRef<HTMLDivElement>(null)

  // Hebt im Navigationsmenü das Thema hervor, das gerade oben im Sichtbereich steht.
  useEffect(() => {
    const onScroll = () => {
      const cards = contentRef.current?.querySelectorAll<HTMLElement>('.cheat-card')
      if (!cards || cards.length === 0) return
      const threshold = 120 // knapp unter dem sticky Header
      let current = cards[0].id
      cards.forEach(c => {
        if (c.getBoundingClientRect().top <= threshold) current = c.id
      })
      setActiveId(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveId(id)
    }
  }

  return (
    <div>
      <div className="section-header">
        <h2>Referenz</h2>
        <p>Jedes Thema von Grund auf erklärt – ohne Vorwissen verständlich.</p>
      </div>
      <div className="cheat-layout">
        <nav className="cheat-nav" aria-label="Themen">
          <ul>
            {referenzKarten.map((karte, i) => {
              const id = cardId(i)
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={activeId === id ? 'active' : ''}
                    onClick={e => handleNavClick(e, id)}
                  >
                    <MathText>{karte.titel}</MathText>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="cheat-content" ref={contentRef}>
          {referenzKarten.map((karte, i) => (
            <div key={karte.titel} id={cardId(i)} className="cheat-card">
              <h3><MathText>{karte.titel}</MathText></h3>
              <div className="cheat-code"><MathText block>{karte.inhalt}</MathText></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
