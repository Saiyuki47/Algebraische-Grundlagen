import { lazy, Suspense } from 'react'
import { Header, MathText, GlobalSearch, Tabs, tabDefs, STANDARD_TAB_REIHENFOLGE, useTheme, useHashTab } from 'lernseiten-ui'
import { quizFragen } from './data/quiz'
import { karteikarten } from './data/karteikarten'
import { dateienTree } from './data/dateien'

const Uebungsblaetter = lazy(() => import('./components/Uebungsblaetter'))
const Cheatsheet = lazy(() => import('./components/Cheatsheet'))
const Formelsammlung = lazy(() => import('./components/Formelsammlung'))
const Quiz = lazy(() => import('lernseiten-ui').then(m => ({ default: m.Quiz })))
const Flashcards = lazy(() => import('lernseiten-ui').then(m => ({ default: m.Flashcards })))
const Moodle = lazy(() => import('lernseiten-ui').then(m => ({ default: m.Moodle })))

// Tab-IDs, -Reihenfolge und -Icons sind über alle Lernseiten vereinheitlicht;
// die Tab-Leiste kommt zentral aus lernseiten-ui (tabDefs).
const TABS = STANDARD_TAB_REIHENFOLGE
export type TabId = (typeof TABS)[number]
const tabs = tabDefs(TABS)

// Alten Tab-Hash auf die vereinheitlichte ID umleiten (Lesezeichen/Deep-Links).
if (typeof window !== 'undefined') {
  const teile = window.location.hash.replace(/^#/, '').split('/')
  if (teile[0] === 'formelsammlung') {
    teile[0] = 'hilfsmittel'
    history.replaceState(null, '', '#' + teile.join('/'))
  }
}

function App() {
  const [activeTab, setActiveTab] = useHashTab(TABS, 'uebung')
  const { theme, toggle } = useTheme()

  return (
    <>
      <Header
        logo={<>Algebraische<span>.</span>Grundlagen</>}
        subtitle="AI1010 — Hochschule Fulda — Sommersemester 2026"
        current="algebraische"
        theme={theme}
        onToggleTheme={toggle}
      />
      <div className="container">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.75rem' }}>
          <GlobalSearch loadIndex={() => import('./data/searchIndex').then(m => m.searchIndex)} onNavigate={t => setActiveTab(t as TabId)} />
        </div>
        <Suspense fallback={<div className="card"><p className="quiz-hint">Lädt …</p></div>}>
          {activeTab === 'referenz' && <Cheatsheet />}
          {activeTab === 'quiz' && <Quiz fragen={quizFragen} />}
          {activeTab === 'uebung' && <Uebungsblaetter />}
          {activeTab === 'moodle' && <Moodle tree={dateienTree} baseUrl={import.meta.env.BASE_URL} />}
          {activeTab === 'hilfsmittel' && <Formelsammlung />}
          {activeTab === 'karten' && (
            <Flashcards cards={karteikarten} render={(s) => <MathText block>{s}</MathText>} />
          )}
        </Suspense>
      </div>
    </>
  )
}

export default App
