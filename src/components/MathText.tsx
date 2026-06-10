import katex from 'katex'
import 'katex/dist/katex.min.css'

function renderMath(tex: string): string {
  return katex.renderToString(tex, { throwOnError: false, displayMode: false })
}

function parseLine(line: string): React.ReactNode[] {
  const parts = line.split(/(\$[^$]+\$|\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
      return (
        <span
          key={i}
          dangerouslySetInnerHTML={{ __html: renderMath(part.slice(1, -1)) }}
        />
      )
    }
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return <span key={i}>{part}</span>
  })
}

interface Props {
  children: string
  className?: string
  /** Render as a block (pre-like, preserving newlines with line breaks) */
  block?: boolean
}

import React from 'react'

export default function MathText({ children, className, block }: Props) {
  const lines = children.split('\n')

  if (block) {
    return (
      <div className={`math-block${className ? ' ' + className : ''}`}>
        {lines.map((line, li) => (
          <React.Fragment key={li}>
            {li > 0 && <br />}
            {parseLine(line)}
          </React.Fragment>
        ))}
      </div>
    )
  }

  return (
    <span className={className}>
      {lines.map((line, li) => (
        <React.Fragment key={li}>
          {li > 0 && <br />}
          {parseLine(line)}
        </React.Fragment>
      ))}
    </span>
  )
}
