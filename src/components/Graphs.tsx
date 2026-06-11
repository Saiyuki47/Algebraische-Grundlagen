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
  const phi = PI / 5
  const rpx = xf(1) - xf(0)
  const cx = xf(0), cy = yf(0)
  const px = xf(Math.cos(phi)), py = yf(Math.sin(phi))
  return (
    <figure className="graph-figure">
      <figcaption className="graph-label">Einheitskreis</figcaption>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="graph-svg">
        <Axes c={c}
          xt={[{ v: 1, label: '1' }, { v: -1, label: '−1' }]}
          yt={[{ v: 1, label: '1' }, { v: -1, label: '−1' }]}
        />
        <circle cx={cx} cy={cy} r={rpx} fill="none" stroke="#4d9fff" strokeWidth={1.6} />
        <line x1={cx} y1={cy} x2={px} y2={py} stroke="#3ecf8e" strokeWidth={1.5} />
        <line x1={cx} y1={cy} x2={px} y2={cy} stroke="#f5a623" strokeWidth={1.5} strokeDasharray="3,2" />
        <line x1={px} y1={cy} x2={px} y2={py} stroke="#4d9fff" strokeWidth={1.5} strokeDasharray="3,2" />
        <circle cx={px} cy={py} r={3} fill="#3ecf8e" />
        <path
          d={`M ${cx + rpx * 0.22},${cy} A ${rpx * 0.22},${rpx * 0.22} 0 0,0 ${cx + rpx * 0.22 * Math.cos(phi)},${cy - rpx * 0.22 * Math.sin(phi)}`}
          fill="none" stroke="#8b90a8" strokeWidth={1}
        />
        <text x={xf(Math.cos(phi) / 2)} y={cy + 16} textAnchor="middle" fontSize="8" fill="#f5a623">cos(φ)</text>
        <text x={px + 5} y={(cy + py) / 2 + 3} fontSize="8" fill="#4d9fff">sin(φ)</text>
        <text x={cx + 16} y={cy - 5} fontSize="8" fill="#8b90a8">φ</text>
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
function A5A() {
  return (
    <CoordSketch label="A: x=0 oder y=0">
      {({ xf, yf, c }) => (
        <>
          <line x1={c.pad} y1={yf(0)} x2={c.w - c.pad} y2={yf(0)} stroke="#3ecf8e" strokeWidth={2.2} />
          <line x1={xf(0)} y1={c.pad} x2={xf(0)} y2={c.h - c.pad} stroke="#3ecf8e" strokeWidth={2.2} />
        </>
      )}
    </CoordSketch>
  )
}

function A5B() {
  return (
    <CoordSketch label="B: x=y oder x=−y">
      {({ xf, yf }) => (
        <>
          <line x1={xf(-2.3)} y1={yf(-2.3)} x2={xf(2.3)} y2={yf(2.3)} stroke="#3ecf8e" strokeWidth={1.8} />
          <line x1={xf(-2.3)} y1={yf(2.3)} x2={xf(2.3)} y2={yf(-2.3)} stroke="#3ecf8e" strokeWidth={1.8} />
        </>
      )}
    </CoordSketch>
  )
}

function A5C() {
  return (
    <CoordSketch label="C: −2≤y≤2">
      {({ xf: _xf, yf, c }) => (
        <>
          <rect x={c.pad} y={yf(2)} width={c.w - 2 * c.pad} height={yf(-2) - yf(2)} fill="#3ecf8e1a" />
          <line x1={c.pad} y1={yf(2)} x2={c.w - c.pad} y2={yf(2)} stroke="#3ecf8e" strokeWidth={1.8} />
          <line x1={c.pad} y1={yf(-2)} x2={c.w - c.pad} y2={yf(-2)} stroke="#3ecf8e" strokeWidth={1.8} />
        </>
      )}
    </CoordSketch>
  )
}

function A5D() {
  return (
    <CoordSketch label="D: x²+y²>1">
      {({ xf, yf, c }) => {
        const rpx = xf(1) - xf(0)
        const cx = xf(0), cy = yf(0)
        return (
          <>
            <rect x={c.pad} y={c.pad} width={c.w - 2 * c.pad} height={c.h - 2 * c.pad} fill="#3ecf8e1a" />
            <circle cx={cx} cy={cy} r={rpx} fill="#171b27" stroke="#3ecf8e" strokeWidth={1.5} strokeDasharray="4,3" />
          </>
        )
      }}
    </CoordSketch>
  )
}

// ─── Main export ─────────────────────────────────────────────────────────────
export default function GraphDisplay({ aufgabeId }: { aufgabeId: string }) {
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
  if (aufgabeId === 'b0_a5') {
    return (
      <div className="graph-grid">
        <A5A /><A5B /><A5C /><A5D />
      </div>
    )
  }
  return null
}
