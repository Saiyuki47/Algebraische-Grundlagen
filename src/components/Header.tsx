interface Props {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export default function Header({ theme, onToggleTheme }: Props) {
  return (
    <header>
      <div>
        <div className="logo">
          Algebraische<span>.</span>Grundlagen
        </div>
        <div className="subtitle">AI1010 &mdash; Hochschule Fulda &mdash; Sommersemester 2026</div>
      </div>
      <button
        type="button"
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-label={theme === 'dark' ? 'Light Mode aktivieren' : 'Dark Mode aktivieren'}
        title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </header>
  )
}
