import Tabs from './components/Tabs'
import Cheatsheet from './components/Cheatsheet'
import Uebungsblaetter from './components/Uebungsblaetter'
import Formelsammlung from './components/Formelsammlung'
import { Header, MathText, Quiz, Flashcards, GlobalSearch, Moodle, useTheme, useHashTab } from 'lernseiten-ui'
import { quizFragen } from './data/quiz'
import { karteikarten } from './data/karteikarten'
import { searchIndex } from './data/searchIndex'
import { dateienTree } from './data/dateien'

export type TabId = 'uebung' | 'referenz' | 'formelsammlung' | 'moodle' | 'quiz' | 'karten'

const TABS: readonly TabId[] = ['uebung', 'referenz', 'formelsammlung', 'moodle', 'quiz', 'karten']

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
        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.75rem' }}>
          <GlobalSearch index={searchIndex} onNavigate={t => setActiveTab(t as TabId)} />
        </div>
        {activeTab === 'referenz' && <Cheatsheet />}
        {activeTab === 'quiz' && <Quiz fragen={quizFragen} />}
        {activeTab === 'uebung' && <Uebungsblaetter />}
        {activeTab === 'moodle' && <Moodle tree={dateienTree} baseUrl={import.meta.env.BASE_URL} />}
        {activeTab === 'formelsammlung' && <Formelsammlung />}
        {activeTab === 'karten' && (
          <Flashcards cards={karteikarten} render={(s) => <MathText block>{s}</MathText>} />
        )}
      </div>
    </>
  )
}

export default App
