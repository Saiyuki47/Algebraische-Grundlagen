import React from 'react'

// ─── coordinate helpers ───────────────────────────────────────────────────────
interface Cfg { w: number; h: number; pad: number; xMin: number; xMax: number; yMin: number; yMax: number }

const mkX = (c: Cfg) => (v: number) => c.pad + ((v - c.xMin) / (c.xMax - c.xMin)) * (c.w - 2 * c.pad)
const mkY = (c: Cfg) => (v: number) => (c.h - c.pad) - ((v - c.yMin) / (c.yMax - c.yMin)) * (c.h - 2 * c.pad)

// ─── Axes ────────────────────────────────────────────────────────────────────
const EMPTY_TICKS: readonly { v: number; label: string }[] = []

function Axes({ c, xt = EMPTY_TICKS, yt = EMPTY_TICKS }: {
  c: Cfg
  xt?: readonly { v: number; label: string }[]
  yt?: readonly { v: number; label: string }[]
}) {
  const xf = mkX(c), yf = mkY(c)
  const ax = xf(0), ay = yf(0)
  return (
    <g>
      <line x1={c.pad} y1={ay} x2={c.w - c.pad + 8} y2={ay} stroke="#555a72" strokeWidth={1} />
      <polygon points={`${c.w - c.pad + 8},${ay - 3} ${c.w - c.pad + 14},${ay} ${c.w - c.pad + 8},${ay + 3}`} fill="#555a72" />
      <line x1={ax} y1={c.h - c.pad} x2={ax} y2={c.pad - 8} stroke="#555a72" strokeWidth={1} />
      <polygon points={`${ax - 3},${c.pad - 8} ${ax},${c.pad - 14} ${ax + 3},${c.pad - 8}`} fill="#555a72" />
      {xt.map(({ v, label }) => (
        <g key={v}>
          <line x1={xf(v)} y1={ay - 4} x2={xf(v)} y2={ay + 4} stroke="#555a72" strokeWidth={1} />
          <text x={xf(v)} y={ay + 16} textAnchor="middle" fontSize="9" fill="#8b90a8">{label}</text>
        </g>
      ))}
      {yt.map(({ v, label }) => (
        <g key={v}>
          <line x1={ax - 4} y1={yf(v)} x2={ax + 4} y2={yf(v)} stroke="#555a72" strokeWidth={1} />
          <text x={ax - 8} y={yf(v) + 4} textAnchor="end" fontSize="9" fill="#8b90a8">{label}</text>
        </g>
      ))}
    </g>
  )
}

// ─── CoordSketch: small coordinate system with render prop ───────────────────
type RenderFn = (p: { xf: (v: number) => number; yf: (v: number) => number; c: Cfg }) => React.ReactNode

function CoordSketch({ label, r = 2.5, children }: { label: string; r?: number; children: RenderFn }) {
  const w = 160, h = 160, pad = 22
  const c: Cfg = { w, h, pad, xMin: -r, xMax: r, yMin: -r, yMax: r }
  const xf = mkX(c), yf = mkY(c)
  const n = Math.floor(r)
  const ticks = Array.from({ length: 2 * n + 1 }, (_, i) => i - n)
    .flatMap(v => v !== 0 ? [{ v, label: String(v) }] : [])
  return (
    <figure className="graph-figure">
      <figcaption className="graph-label">{label}</figcaption>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="graph-svg">
        <Axes c={c} xt={ticks} yt={ticks} />
        {children({ xf, yf, c })}
      </svg>
    </figure>
  )
}

// ─── Aufgabe 1: Function graphs ───────────────────────────────────────────────
const PI = Math.PI

function SinCosGraph() {
  const w = 320, h = 145, pad = 28
  const c: Cfg = { w, h, pad, xMin: -0.3, xMax: 6.6, yMin: -1.5, yMax: 1.5 }
  const xf = mkX(c), yf = mkY(c)
  const pts = (fn: (x: number) => number) =>
    Array.from({ length: 300 }, (_, i) => {
      const x = c.xMin + (i / 299) * (c.xMax - c.xMin)
      return `${xf(x)},${yf(fn(x))}`
    }).join(' ')
  return (
    <figure className="graph-figure">
      <figcaption className="graph-label">sin und cos (0 bis 2π)</figcaption>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="graph-svg">
        <Axes c={c}
          xt={[{ v: PI / 2, label: 'π/2' }, { v: PI, label: 'π' }, { v: 3 * PI / 2, label: '3π/2' }, { v: 2 * PI, label: '2π' }]}
          yt={[{ v: 1, label: '1' }, { v: -1, label: '−1' }]}
        />
        <polyline points={pts(Math.sin)} fill="none" stroke="#4d9fff" strokeWidth={1.8} />
        <polyline points={pts(Math.cos)} fill="none" stroke="#f5a623" strokeWidth={1.8} />
        <rect x={w - 72} y={6} width={62} height={34} rx={4} fill="#171b27" />
        <line x1={w - 68} y1={17} x2={w - 56} y2={17} stroke="#4d9fff" strokeWidth={2} />
        <text x={w - 53} y={21} fontSize="9" fill="#4d9fff">sin(x)</text>
        <line x1={w - 68} y1={30} x2={w - 56} y2={30} stroke="#f5a623" strokeWidth={2} />
        <text x={w - 53} y={34} fontSize="9" fill="#f5a623">cos(x)</text>
      </svg>
    </figure>
  )
}

function TanGraph() {
  const w = 320, h = 145, pad = 28
  const c: Cfg = { w, h, pad, xMin: -0.3, xMax: 6.6, yMin: -3.5, yMax: 3.5 }
  const xf = mkX(c), yf = mkY(c)
  function seg(a: number, b: number) {
    return Array.from({ length: 150 }, (_, i) => {
      const x = a + (i / 149) * (b - a)
      const y = Math.tan(x)
      return Math.abs(y) > 3.5 ? null : `${xf(x)},${yf(y)}`
    }).filter(Boolean).join(' ')
  }
  return (
    <figure className="graph-figure">
      <figcaption className="graph-label">tan(x)</figcaption>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="graph-svg">
        <Axes c={c}
          xt={[{ v: PI / 2, label: 'π/2' }, { v: PI, label: 'π' }, { v: 3 * PI / 2, label: '3π/2' }, { v: 2 * PI, label: '2π' }]}
          yt={[{ v: 2, label: '2' }, { v: -2, label: '−2' }]}
        />
        {[PI / 2, 3 * PI / 2].map(a => (
          <line key={a} x1={xf(a)} y1={pad} x2={xf(a)} y2={h - pad} stroke="#3b3f55" strokeWidth={1} strokeDasharray="4,3" />
        ))}
        {[seg(0, PI / 2 - 0.05), seg(PI / 2 + 0.05, 3 * PI / 2 - 0.05), seg(3 * PI / 2 + 0.05, 2 * PI)].map((p, i) => (
          <polyline key={i} points={p} fill="none" stroke="#4d9fff" strokeWidth={1.8} />
        ))}
      </svg>
    </figure>
  )
}

function UnitCircleGraph() {
  const w = 170, h = 170, pad = 22
  const c: Cfg = { w, h, pad, xMin: -1.5, xMax: 1.5, yMin: -1.5, yMax: 1.5 }
  const xf = mkX(c), yf = mkY(c)
  // Same obtuse angle as the task drawing (UnitCircleBlank) and the Lösungsblatt:
  // P sits in the 2nd quadrant, so cos(φ) is negative (points left of the origin).
  const phi = (130 * PI) / 180
  const rpx = xf(1) - xf(0)
  const cx = xf(0), cy = yf(0)
  const px = xf(Math.cos(phi)), py = yf(Math.sin(phi))
  const ar = rpx * 0.22            // radius of the green angle marker
  const lr = ar + 9, lphi = phi * 0.5 // φ label sits in the middle of the sector
  return (
    <figure className="graph-figure">
      <figcaption className="graph-label">Einheitskreis</figcaption>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="graph-svg">
        <Axes c={c} xt={[{ v: 1, label: '1' }]} />
        <circle cx={cx} cy={cy} r={rpx} fill="none" stroke="#4d9fff" strokeWidth={1.6} />
        <line x1={cx} y1={cy} x2={px} y2={py} stroke="#3ecf8e" strokeWidth={1.5} />
        {/* cos(φ): waagerechte Projektion O→Fußpunkt – für den stumpfen Winkel negativ */}
        <line x1={cx} y1={cy} x2={px} y2={cy} stroke="#f5a623" strokeWidth={1.5} strokeDasharray="3,2" />
        {/* sin(φ): senkrechte Projektion Fußpunkt→P */}
        <line x1={px} y1={cy} x2={px} y2={py} stroke="#4d9fff" strokeWidth={1.5} strokeDasharray="3,2" />
        <path
          d={`M ${cx + ar},${cy} A ${ar},${ar} 0 0,0 ${cx + ar * Math.cos(phi)},${cy - ar * Math.sin(phi)} L ${cx},${cy} Z`}
          fill="#3ecf8e33" stroke="#3ecf8e" strokeWidth={1}
        />
        <circle cx={px} cy={py} r={3} fill="#3ecf8e" />
        <text x={xf(Math.cos(phi) / 2)} y={cy + 16} textAnchor="middle" fontSize="8" fill="#f5a623">cos(φ)</text>
        <text x={px - 4} y={(cy + py) / 2 + 3} textAnchor="end" fontSize="8" fill="#4d9fff">sin(φ)</text>
        <text x={cx + lr * Math.cos(lphi)} y={cy - lr * Math.sin(lphi) + 3} textAnchor="middle" fontSize="9" fill="#3ecf8e">φ</text>
      </svg>
    </figure>
  )
}

// Unit circle for the TASK (as printed on the sheet): circle, axes, the radius line
// at an obtuse angle φ and the green angle marker. The student draws sin/cos into it.
function UnitCircleBlank() {
  const w = 200, h = 200, pad = 26
  const c: Cfg = { w, h, pad, xMin: -1.5, xMax: 1.5, yMin: -1.5, yMax: 1.5 }
  const xf = mkX(c), yf = mkY(c)
  const rpx = xf(1) - xf(0)
  const cx = xf(0), cy = yf(0)
  const phi = (130 * PI) / 180 // obtuse angle into the 2nd quadrant, like the sheet
  const ex = cx + rpx * Math.cos(phi), ey = cy - rpx * Math.sin(phi)
  const ar = rpx * 0.22 // radius of the green angle marker
  const lr = ar + 9, lphi = phi * 0.5 // φ label sits in the middle of the sector
  return (
    <figure className="graph-figure">
      <figcaption className="graph-label">zum Einzeichnen</figcaption>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="graph-svg">
        <Axes c={c} xt={[{ v: 1, label: '1' }]} />
        <circle cx={cx} cy={cy} r={rpx} fill="none" stroke="#8b90a8" strokeWidth={1.4} />
        <line x1={cx} y1={cy} x2={ex} y2={ey} stroke="#8b90a8" strokeWidth={1.4} />
        <path
          d={`M ${cx + ar},${cy} A ${ar},${ar} 0 0,0 ${cx + ar * Math.cos(phi)},${cy - ar * Math.sin(phi)} L ${cx},${cy} Z`}
          fill="#3ecf8e33" stroke="#3ecf8e" strokeWidth={1}
        />
        <text x={cx + lr * Math.cos(lphi)} y={cy - lr * Math.sin(lphi) + 3} textAnchor="middle" fontSize="10" fill="#3ecf8e">φ</text>
        <circle cx={cx} cy={cy} r={2} fill="#8b90a8" />
        <text x={cx - 9} y={cy + 12} fontSize="9" fill="#8b90a8">0</text>
      </svg>
    </figure>
  )
}

// ─── Aufgabe 4: Subset sketches ───────────────────────────────────────────────
function M1() {
  return (
    <CoordSketch label="M₁: x²+y²=1" r={1.8}>
      {({ xf, yf }) => (
        <circle cx={xf(0)} cy={yf(0)} r={xf(1) - xf(0)} fill="none" stroke="#4d9fff" strokeWidth={1.8} />
      )}
    </CoordSketch>
  )
}

function M2() {
  return (
    <CoordSketch label="M₂: x²+y²=4" r={2.8}>
      {({ xf, yf }) => (
        <circle cx={xf(0)} cy={yf(0)} r={xf(2) - xf(0)} fill="none" stroke="#4d9fff" strokeWidth={1.8} />
      )}
    </CoordSketch>
  )
}

function M3() {
  return (
    <CoordSketch label="M₃: x²+y²<4 (offen)" r={2.8}>
      {({ xf, yf }) => (
        <circle cx={xf(0)} cy={yf(0)} r={xf(2) - xf(0)} fill="#4d9fff1a" stroke="#4d9fff" strokeWidth={1.5} strokeDasharray="4,3" />
      )}
    </CoordSketch>
  )
}

function M4() {
  return (
    <CoordSketch label="M₄: 1<x²+y²<4" r={2.8}>
      {({ xf, yf }) => {
        const cx = xf(0), cy = yf(0)
        const r1 = xf(1) - xf(0), r2 = xf(2) - xf(0)
        return (
          <>
            <circle cx={cx} cy={cy} r={r2} fill="#4d9fff1a" stroke="#4d9fff" strokeWidth={1.5} strokeDasharray="4,3" />
            <circle cx={cx} cy={cy} r={r1} fill="#171b27" stroke="#4d9fff" strokeWidth={1.5} strokeDasharray="4,3" />
          </>
        )
      }}
    </CoordSketch>
  )
}

function M5() {
  return (
    <CoordSketch label="M₅: y=x">
      {({ xf, yf }) => (
        <line x1={xf(-2.3)} y1={yf(-2.3)} x2={xf(2.3)} y2={yf(2.3)} stroke="#4d9fff" strokeWidth={1.8} />
      )}
    </CoordSketch>
  )
}

function M6() {
  return (
    <CoordSketch label="M₆: x≥y (Halbebene)">
      {({ xf, yf }) => (
        <>
          <polygon
            points={`${xf(-2.4)},${yf(-2.4)} ${xf(2.4)},${yf(2.4)} ${xf(2.4)},${yf(-2.4)}`}
            fill="#4d9fff1a"
          />
          <line x1={xf(-2.3)} y1={yf(-2.3)} x2={xf(2.3)} y2={yf(2.3)} stroke="#4d9fff" strokeWidth={1.8} />
        </>
      )}
    </CoordSketch>
  )
}

function M7() {
  return (
    <CoordSketch label="M₇: y=−x/2">
      {({ xf, yf }) => (
        <line x1={xf(-2.3)} y1={yf(2.3 / 2)} x2={xf(2.3)} y2={yf(-2.3 / 2)} stroke="#4d9fff" strokeWidth={1.8} />
      )}
    </CoordSketch>
  )
}

function M8() {
  return (
    <CoordSketch label="M₈: x≥2 und y<3" r={3.5}>
      {({ xf, yf, c }) => (
        <>
          <rect
            x={xf(2)} y={yf(3)}
            width={c.w - c.pad - xf(2)}
            height={c.h - c.pad - yf(3)}
            fill="#4d9fff1a"
          />
          <line x1={xf(2)} y1={c.pad} x2={xf(2)} y2={c.h - c.pad} stroke="#4d9fff" strokeWidth={1.8} />
          <line x1={c.pad} y1={yf(3)} x2={c.w - c.pad} y2={yf(3)} stroke="#4d9fff" strokeWidth={1.5} strokeDasharray="4,3" />
        </>
      )}
    </CoordSketch>
  )
}

// ─── Aufgabe 5: Set notation sketches ────────────────────────────────────────
// Aufgabe 5 zeigt dieselben vier Skizzen zweimal: in der Aufgabenstellung nur
// mit „A"…„D" beschriftet (die gesuchte Bedingung soll ja nicht dranstehen),
// in der Lösung zusätzlich mit der Bedingung. Daher hier nur einmal gezeichnet.
const drawA5A: RenderFn = ({ xf, yf, c }) => (
  <>
    <line x1={c.pad} y1={yf(0)} x2={c.w - c.pad} y2={yf(0)} stroke="#3ecf8e" strokeWidth={2.2} />
    <line x1={xf(0)} y1={c.pad} x2={xf(0)} y2={c.h - c.pad} stroke="#3ecf8e" strokeWidth={2.2} />
  </>
)

const drawA5B: RenderFn = ({ xf, yf }) => (
  <>
    <line x1={xf(-2.3)} y1={yf(-2.3)} x2={xf(2.3)} y2={yf(2.3)} stroke="#3ecf8e" strokeWidth={1.8} />
    <line x1={xf(-2.3)} y1={yf(2.3)} x2={xf(2.3)} y2={yf(-2.3)} stroke="#3ecf8e" strokeWidth={1.8} />
  </>
)

const drawA5C: RenderFn = ({ yf, c }) => (
  <>
    <rect x={c.pad} y={yf(2)} width={c.w - 2 * c.pad} height={yf(-2) - yf(2)} fill="#3ecf8e1a" />
    <line x1={c.pad} y1={yf(2)} x2={c.w - c.pad} y2={yf(2)} stroke="#3ecf8e" strokeWidth={1.8} />
    <line x1={c.pad} y1={yf(-2)} x2={c.w - c.pad} y2={yf(-2)} stroke="#3ecf8e" strokeWidth={1.8} />
  </>
)

const drawA5D: RenderFn = ({ xf, yf, c }) => {
  const rpx = xf(1) - xf(0)
  return (
    <>
      <rect x={c.pad} y={c.pad} width={c.w - 2 * c.pad} height={c.h - 2 * c.pad} fill="#3ecf8e1a" />
      {/* Ausgespartes Inneres: Skizzen-Hintergrund per Theme-Variable, sonst
          erscheint im Hellmodus ein dunkler Fleck. */}
      <circle
        cx={xf(0)}
        cy={yf(0)}
        r={rpx}
        style={{ fill: 'var(--bg2)' }}
        stroke="#3ecf8e"
        strokeWidth={1.5}
        strokeDasharray="4,3"
      />
    </>
  )
}

function A5A() { return <CoordSketch label="A: x=0 oder y=0">{drawA5A}</CoordSketch> }
function A5B() { return <CoordSketch label="B: x=y oder x=−y">{drawA5B}</CoordSketch> }
function A5C() { return <CoordSketch label="C: −2≤y≤2">{drawA5C}</CoordSketch> }
function A5D() { return <CoordSketch label="D: x²+y²>1">{drawA5D}</CoordSketch> }

function A5AufgA() { return <CoordSketch label="A">{drawA5A}</CoordSketch> }
function A5AufgB() { return <CoordSketch label="B">{drawA5B}</CoordSketch> }
function A5AufgC() { return <CoordSketch label="C">{drawA5C}</CoordSketch> }
function A5AufgD() { return <CoordSketch label="D">{drawA5D}</CoordSketch> }

// ─── Helpers ─────────────────────────────────────────────────────────────────

function AxisLabels({ c, xLabel = 'Re', yLabel = 'Im' }: { c: Cfg; xLabel?: string; yLabel?: string }) {
  const xf = mkX(c), yf = mkY(c)
  return (
    <>
      <text x={c.w - c.pad + 10} y={yf(0) + 4} fontSize="9" fill="#8b90a8">{xLabel}</text>
      <text x={xf(0) + 4} y={c.pad - 10} fontSize="9" fill="#8b90a8">{yLabel}</text>
    </>
  )
}

function Dot({ xf, yf, x, y, label, color, labelOffset = [6, -6] }:
  { xf: (v: number) => number; yf: (v: number) => number; x: number; y: number; label: string; color: string; labelOffset?: [number, number] }) {
  return (
    <g>
      <circle cx={xf(x)} cy={yf(y)} r={3.5} fill={color} />
      <text x={xf(x) + labelOffset[0]} y={yf(y) + labelOffset[1]} fontSize="9" fill={color}>{label}</text>
    </g>
  )
}

// ─── Blatt 1, Aufgabe 1: Points in Gaussian plane ────────────────────────────
function B1A1Graph() {
  const w = 310, h = 200, pad = 32
  const c: Cfg = { w, h, pad, xMin: -7, xMax: 2, yMin: -2, yMax: 5 }
  const xf = mkX(c), yf = mkY(c)
  return (
    <figure className="graph-figure">
      <figcaption className="graph-label">Gaußsche Zahlenebene</figcaption>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="graph-svg">
        <Axes c={c}
          xt={[-6,-4,-2,1].map(v => ({ v, label: String(v) }))}
          yt={[-1,1,2,3,4].map(v => ({ v, label: String(v) }))}
        />
        <AxisLabels c={c} />
        <Dot xf={xf} yf={yf} x={-6} y={4} label="-6+4i" color="#4d9fff" labelOffset={[6, -6]} />
        <Dot xf={xf} yf={yf} x={0} y={1} label="i" color="#3ecf8e" labelOffset={[6, -6]} />
        <Dot xf={xf} yf={yf} x={0} y={-1} label="-i" color="#f5a623" labelOffset={[6, -6]} />
        <Dot xf={xf} yf={yf} x={-1} y={0} label="-1" color="#ff6b6b" labelOffset={[-20, -8]} />
      </svg>
    </figure>
  )
}

// ─── Blatt 1, Aufgabe 4: Subsets of complex plane ────────────────────────────
function B1A4_A() {
  return (
    <CoordSketch label="A: |z|≤3 (geschl. Scheibe)" r={3.8}>
      {({ xf, yf }) => (
        <circle cx={xf(0)} cy={yf(0)} r={xf(3) - xf(0)}
          fill="#4d9fff22" stroke="#4d9fff" strokeWidth={1.8} />
      )}
    </CoordSketch>
  )
}

function B1A4_B() {
  return (
    <CoordSketch label="B: Im(z)=−1 (waagerechte Gerade)" r={2.5}>
      {({ xf: _xf, yf, c }) => (
        <line x1={c.pad} y1={yf(-1)} x2={c.w - c.pad} y2={yf(-1)} stroke="#4d9fff" strokeWidth={1.8} />
      )}
    </CoordSketch>
  )
}

function B1A4_C() {
  return (
    <CoordSketch label="C: Re<−1 und Im≥2" r={3.5}>
      {({ xf, yf, c }) => (
        <>
          <rect x={c.pad} y={c.pad} width={xf(-1) - c.pad} height={yf(2) - c.pad}
            fill="#4d9fff22" />
          <line x1={xf(-1)} y1={c.pad} x2={xf(-1)} y2={c.h - c.pad}
            stroke="#4d9fff" strokeWidth={1.5} strokeDasharray="4,3" />
          <line x1={c.pad} y1={yf(2)} x2={xf(-1)} y2={yf(2)}
            stroke="#4d9fff" strokeWidth={1.8} />
        </>
      )}
    </CoordSketch>
  )
}

function B1A4_D() {
  return (
    <CoordSketch label="D: Re(z)=Im(z), d.h. y=x" r={2.5}>
      {({ xf, yf }) => (
        <line x1={xf(-2.3)} y1={yf(-2.3)} x2={xf(2.3)} y2={yf(2.3)} stroke="#4d9fff" strokeWidth={1.8} />
      )}
    </CoordSketch>
  )
}

function B1A4_E() {
  return (
    <CoordSketch label="E: |z|=2 und Re(z)<1 (Kreisbogen)" r={2.5}>
      {({ xf, yf, c }) => {
        const rpx = xf(2) - xf(0)
        const sqrt3 = Math.sqrt(3)
        const x1 = xf(1), y1 = yf(-sqrt3)
        const x2 = xf(1), y2 = yf(sqrt3)
        return (
          <>
            {/* dashed right chord */}
            <line x1={xf(1)} y1={c.pad} x2={xf(1)} y2={c.h - c.pad}
              stroke="#3b3f55" strokeWidth={1} strokeDasharray="4,3" />
            {/* left arc (large, through (-2,0)) */}
            <path d={`M ${x1},${y1} A ${rpx},${rpx} 0 1 1 ${x2},${y2}`}
              fill="none" stroke="#4d9fff" strokeWidth={1.8} strokeDasharray="4,3" />
            {/* intersection dots */}
            <circle cx={x1} cy={y1} r={3} fill="#8b90a8" />
            <circle cx={x2} cy={y2} r={3} fill="#8b90a8" />
          </>
        )
      }}
    </CoordSketch>
  )
}

// ─── Blatt 2, Aufgabe 1: Subsets of complex plane ────────────────────────────
function B2A1_A() {
  return (
    <CoordSketch label="A: 1<|z−2i|<2 (offener Kreisring)" r={3.5}>
      {({ xf, yf }) => {
        const cx = xf(0), cy = yf(2)
        const r1 = xf(1) - xf(0)
        const r2 = xf(2) - xf(0)
        return (
          <>
            <circle cx={cx} cy={cy} r={r2} fill="#4d9fff22" stroke="#4d9fff" strokeWidth={1.5} strokeDasharray="4,3" />
            <circle cx={cx} cy={cy} r={r1} fill="#171b27" stroke="#4d9fff" strokeWidth={1.5} strokeDasharray="4,3" />
            <circle cx={cx} cy={cy} r={2} fill="#4d9fff" />
          </>
        )
      }}
    </CoordSketch>
  )
}

function B2A1_B() {
  return (
    <CoordSketch label="B: |z+1−i|>1 (Kreisäußeres, offen)" r={3}>
      {({ xf, yf, c }) => {
        const cx = xf(-1), cy = yf(1)
        const rpx = xf(1) - xf(0)
        return (
          <>
            <rect x={c.pad} y={c.pad} width={c.w - 2 * c.pad} height={c.h - 2 * c.pad} fill="#4d9fff22" />
            <circle cx={cx} cy={cy} r={rpx} fill="#171b27" stroke="#4d9fff" strokeWidth={1.5} strokeDasharray="4,3" />
            <circle cx={cx} cy={cy} r={2} fill="#4d9fff" />
          </>
        )
      }}
    </CoordSketch>
  )
}

function B2A1_C() {
  return (
    <CoordSketch label="C: Re(z)=½ (Mittelsenkrechte)" r={2}>
      {({ xf, yf: _yf, c }) => (
        <line x1={xf(0.5)} y1={c.pad} x2={xf(0.5)} y2={c.h - c.pad} stroke="#4d9fff" strokeWidth={1.8} />
      )}
    </CoordSketch>
  )
}

// ─── Blatt 2, Aufgabe 3: Points in polar form ────────────────────────────────
function B2A3Graph() {
  return (
    <CoordSketch label="z₁, z₂, z₃, z₄ in der Gaußschen Ebene" r={3.5}>
      {({ xf, yf }) => {
        const sqrt3 = Math.sqrt(3)
        return (
          <>
            <Dot xf={xf} yf={yf} x={-2} y={-2} label="z₁=−2−2i" color="#4d9fff" labelOffset={[-60, 14]} />
            <Dot xf={xf} yf={yf} x={0} y={-3} label="z₂=−3i" color="#3ecf8e" labelOffset={[6, -4]} />
            <Dot xf={xf} yf={yf} x={sqrt3 / 2} y={0.5} label="z₃" color="#f5a623" labelOffset={[6, -6]} />
            <Dot xf={xf} yf={yf} x={1} y={-sqrt3} label="z₄=1−√3i" color="#ff6b6b" labelOffset={[6, -4]} />
          </>
        )
      }}
    </CoordSketch>
  )
}

// ─── Blatt 2, Aufgabe 4: Points from polar to cartesian ──────────────────────
function B2A4Graph() {
  return (
    <CoordSketch label="z₁, z₂, z₃, z₄ in der Gaußschen Ebene" r={3.5}>
      {({ xf, yf }) => {
        const sq2 = Math.sqrt(2) / 2
        return (
          <>
            <Dot xf={xf} yf={yf} x={0} y={1} label="z₁=i" color="#4d9fff" labelOffset={[6, -6]} />
            <Dot xf={xf} yf={yf} x={2} y={0} label="z₂=2" color="#3ecf8e" labelOffset={[6, -8]} />
            <Dot xf={xf} yf={yf} x={sq2} y={-sq2} label="z₃" color="#f5a623" labelOffset={[6, -6]} />
            <Dot xf={xf} yf={yf} x={0} y={3} label="z₄=3i" color="#ff6b6b" labelOffset={[6, -6]} />
          </>
        )
      }}
    </CoordSketch>
  )
}

// ─── Blatt 2 Aufgabe 6a: ε-Umgebungen (schematische Beispiele) ───────────────
// Offene Kreisscheibe um einen Punkt z mit Radius ε in der komplexen Ebene.
function EpsilonDiskC() {
  return (
    <CoordSketch label="ε-Umgebung in ℂ: Kreisscheibe um z" r={3}>
      {({ xf, yf }) => {
        const zx = 1, zy = 1, eps = 1.2
        const cx = xf(zx), cy = yf(zy)
        const rpx = xf(zx + eps) - xf(zx)
        const ex = xf(zx + eps)
        return (
          <>
            <circle cx={cx} cy={cy} r={rpx} fill="#4d9fff1a" stroke="#4d9fff" strokeWidth={1.5} strokeDasharray="4,3" />
            <line x1={cx} y1={cy} x2={ex} y2={cy} stroke="#4d9fff" strokeWidth={1.2} />
            <circle cx={cx} cy={cy} r={2.5} fill="#4d9fff" />
            <text x={cx - 6} y={cy - 6} textAnchor="end" fontSize="10" fill="#e8eaf0">z</text>
            <text x={(cx + ex) / 2} y={cy - 5} textAnchor="middle" fontSize="10" fill="#4d9fff">ε</text>
          </>
        )
      }}
    </CoordSketch>
  )
}

// Offenes Intervall (x−ε, x+ε) auf der reellen Zahlengerade.
function EpsilonIntervalR() {
  const w = 210, h = 160, y = 84
  const left = 18, right = w - 18
  const cx = w / 2, e = 58
  return (
    <figure className="graph-figure">
      <figcaption className="graph-label">ε-Umgebung in ℝ: Intervall um x</figcaption>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="graph-svg">
        <line x1={left} y1={y} x2={right} y2={y} stroke="#555a72" strokeWidth={1} />
        <polygon points={`${right},${y - 3} ${right + 6},${y} ${right},${y + 3}`} fill="#555a72" />
        <line x1={cx - e} y1={y} x2={cx + e} y2={y} stroke="#4d9fff" strokeWidth={3} />
        <circle cx={cx - e} cy={y} r={4} fill="#171b27" stroke="#4d9fff" strokeWidth={1.5} />
        <circle cx={cx + e} cy={y} r={4} fill="#171b27" stroke="#4d9fff" strokeWidth={1.5} />
        <circle cx={cx} cy={y} r={2.5} fill="#8b90a8" />
        <text x={cx} y={y - 9} textAnchor="middle" fontSize="10" fill="#e8eaf0">x</text>
        <text x={cx - e} y={y + 18} textAnchor="middle" fontSize="9" fill="#8b90a8">x−ε</text>
        <text x={cx + e} y={y + 18} textAnchor="middle" fontSize="9" fill="#8b90a8">x+ε</text>
        <text x={cx} y={y + 32} textAnchor="middle" fontSize="9" fill="#555a72">offene Enden = Rand gehört nicht dazu</text>
      </svg>
    </figure>
  )
}

// ─── Blatt 3, Aufgabe 2a: vierte Wurzeln von 16 ──────────────────────────────
// z^4 = 16 hat die Lösungen 2, 2i, −2, −2i auf einem Kreis mit Radius 2.
function B3A2aGraph() {
  return (
    <CoordSketch label="z⁴=16: z₀=2, z₁=2i, z₂=−2, z₃=−2i" r={3}>
      {({ xf, yf }) => {
        const rpx = xf(2) - xf(0)
        return (
          <>
            <circle cx={xf(0)} cy={yf(0)} r={rpx} fill="none" stroke="#3b3f55" strokeWidth={1} strokeDasharray="4,3" />
            <Dot xf={xf} yf={yf} x={2} y={0} label="z₀" color="#4d9fff" labelOffset={[6, -6]} />
            <Dot xf={xf} yf={yf} x={0} y={2} label="z₁" color="#3ecf8e" labelOffset={[6, -6]} />
            <Dot xf={xf} yf={yf} x={-2} y={0} label="z₂" color="#f5a623" labelOffset={[-18, -6]} />
            <Dot xf={xf} yf={yf} x={0} y={-2} label="z₃" color="#ff6b6b" labelOffset={[6, 14]} />
          </>
        )
      }}
    </CoordSketch>
  )
}

// ─── Blatt 9, Aufgabe 1: Teilmengen des R² (Untervektorräume?) ───────────────
// U1: x1≥0 und x2≥0 → erster Quadrant (kein UVR).
function B9A1_U1() {
  return (
    <CoordSketch label="U₁: x₁≥0, x₂≥0 (kein UVR)" r={3}>
      {({ xf, yf }) => (
        <rect x={xf(0)} y={yf(3)} width={xf(3) - xf(0)} height={yf(0) - yf(3)} fill="#4d9fff33" stroke="#4d9fff" strokeWidth={1.4} />
      )}
    </CoordSketch>
  )
}

// U2: 3x1 = 2x2 → Gerade x2 = (3/2)x1 durch 0 (UVR).
function B9A1_U2() {
  return (
    <CoordSketch label="U₂: 3x₁=2x₂ (UVR)" r={3}>
      {({ xf, yf }) => (
        <line x1={xf(-2)} y1={yf(-3)} x2={xf(2)} y2={yf(3)} stroke="#3ecf8e" strokeWidth={1.8} />
      )}
    </CoordSketch>
  )
}

// U3: x1·x2 = 0 → beide Koordinatenachsen (kein UVR).
function B9A1_U3() {
  return (
    <CoordSketch label="U₃: x₁·x₂=0 (kein UVR)" r={3}>
      {({ xf, yf, c }) => (
        <>
          <line x1={c.pad} y1={yf(0)} x2={c.w - c.pad} y2={yf(0)} stroke="#4d9fff" strokeWidth={2} />
          <line x1={xf(0)} y1={c.pad} x2={xf(0)} y2={c.h - c.pad} stroke="#4d9fff" strokeWidth={2} />
        </>
      )}
    </CoordSketch>
  )
}

// U4: |x1| ≤ |x2| → Bereich zwischen den beiden Winkelhalbierenden (kein UVR).
function B9A1_U4() {
  return (
    <CoordSketch label="U₄: |x₁|≤|x₂| (kein UVR)" r={3}>
      {({ xf, yf }) => (
        <>
          <polygon points={`${xf(0)},${yf(0)} ${xf(-3)},${yf(3)} ${xf(3)},${yf(3)}`} fill="#4d9fff33" />
          <polygon points={`${xf(0)},${yf(0)} ${xf(-3)},${yf(-3)} ${xf(3)},${yf(-3)}`} fill="#4d9fff33" />
          <line x1={xf(-3)} y1={yf(-3)} x2={xf(3)} y2={yf(3)} stroke="#4d9fff" strokeWidth={1.4} />
          <line x1={xf(-3)} y1={yf(3)} x2={xf(3)} y2={yf(-3)} stroke="#4d9fff" strokeWidth={1.4} />
        </>
      )}
    </CoordSketch>
  )
}

// ─── Main export ─────────────────────────────────────────────────────────────
export default function GraphDisplay({ aufgabeId }: { aufgabeId: string }) {
  // ── Blatt 1 ──
  if (aufgabeId === 'b1_a1') return <div className="graph-grid"><B1A1Graph /></div>
  if (aufgabeId === 'b1_a4') return (
    <div className="graph-grid">
      <B1A4_A /><B1A4_B /><B1A4_C /><B1A4_D /><B1A4_E />
    </div>
  )
  // ── Blatt 2 ──
  if (aufgabeId === 'b2_a1') return (
    <div className="graph-grid"><B2A1_A /><B2A1_B /><B2A1_C /></div>
  )
  if (aufgabeId === 'b2_a3') return <div className="graph-grid"><B2A3Graph /></div>
  if (aufgabeId === 'b2_a4') return <div className="graph-grid"><B2A4Graph /></div>
  if (aufgabeId === 'b2_a6a') return <div className="graph-grid"><EpsilonDiskC /><EpsilonIntervalR /></div>
  // ── Blatt 3 ──
  if (aufgabeId === 'b3_a2a') return <div className="graph-grid"><B3A2aGraph /></div>
  // ── Blatt 9 ──
  if (aufgabeId === 'b9_a1a') return <div className="graph-grid"><B9A1_U1 /></div>
  if (aufgabeId === 'b9_a1b') return <div className="graph-grid"><B9A1_U2 /></div>
  if (aufgabeId === 'b9_a1c') return <div className="graph-grid"><B9A1_U3 /></div>
  if (aufgabeId === 'b9_a1d') return <div className="graph-grid"><B9A1_U4 /></div>
  // ── Blatt 0 ──
  if (aufgabeId === 'b0_a1_sincos') {
    return <div className="graph-grid"><SinCosGraph /></div>
  }
  if (aufgabeId === 'b0_a1_einheitskreis') {
    return <div className="graph-grid"><UnitCircleGraph /></div>
  }
  if (aufgabeId === 'b0_a1_einheitskreis_leer') {
    return <div className="graph-grid"><UnitCircleBlank /></div>
  }
  if (aufgabeId === 'b0_a1_tan') {
    return <div className="graph-grid"><TanGraph /></div>
  }
  if (aufgabeId === 'b0_a1') {
    return (
      <div className="graph-grid">
        <SinCosGraph />
        <TanGraph />
        <UnitCircleGraph />
      </div>
    )
  }
  if (aufgabeId === 'b0_a4') {
    return (
      <div className="graph-grid">
        <M1 /><M2 /><M3 /><M4 />
        <M5 /><M6 /><M7 /><M8 />
      </div>
    )
  }
  if (aufgabeId === 'b0_a5_aufgabe') {
    return (
      <div className="graph-grid">
        <A5AufgA /><A5AufgB /><A5AufgC /><A5AufgD />
      </div>
    )
  }
  if (aufgabeId === 'b0_a5') {
    return (
      <div className="graph-grid">
        <A5A /><A5B /><A5C /><A5D />
      </div>
    )
  }
  return null
}
