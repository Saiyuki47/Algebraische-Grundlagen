import type { ReferenzKarte } from '../types'

export const referenzKarten: ReferenzKarte[] = [
  {
    titel: 'Sinus & Cosinus – Werte',
    inhalt:
      '$\\sin(0) = 0$,  $\\sin\\!\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{2}$,  $\\sin\\!\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$,  $\\sin\\!\\left(\\frac{\\pi}{3}\\right) = \\frac{\\sqrt{3}}{2}$,  $\\sin\\!\\left(\\frac{\\pi}{2}\\right) = 1$\n' +
      '$\\cos(0) = 1$,  $\\cos\\!\\left(\\frac{\\pi}{6}\\right) = \\frac{\\sqrt{3}}{2}$,  $\\cos\\!\\left(\\frac{\\pi}{4}\\right) = \\frac{\\sqrt{2}}{2}$,  $\\cos\\!\\left(\\frac{\\pi}{3}\\right) = \\frac{1}{2}$,  $\\cos\\!\\left(\\frac{\\pi}{2}\\right) = 0$\n' +
      '$\\tan(0) = 0$,  $\\tan\\!\\left(\\frac{\\pi}{6}\\right) = \\frac{1}{\\sqrt{3}}$,  $\\tan\\!\\left(\\frac{\\pi}{4}\\right) = 1$,  $\\tan\\!\\left(\\frac{\\pi}{3}\\right) = \\sqrt{3}$,  $\\tan\\!\\left(\\frac{\\pi}{2}\\right)$ nicht def.',
  },
  {
    titel: 'Arkusfunktionen',
    inhalt:
      '$\\arcsin : [-1,\\,1] \\to \\left[-\\tfrac{\\pi}{2},\\, \\tfrac{\\pi}{2}\\right]$\n' +
      '$\\arccos : [-1,\\,1] \\to [0,\\, \\pi]$\n' +
      '$\\arctan : \\mathbb{R} \\to \\left(-\\tfrac{\\pi}{2},\\, \\tfrac{\\pi}{2}\\right)$\n\n' +
      '$\\arcsin(0) = 0$,  $\\arcsin(1) = \\frac{\\pi}{2}$,  $\\arcsin(-1) = -\\frac{\\pi}{2}$\n' +
      '$\\arccos(1) = 0$,  $\\arccos(0) = \\frac{\\pi}{2}$,  $\\arccos(-1) = \\pi$\n' +
      '$\\arctan(0) = 0$,  $\\arctan(1) = \\frac{\\pi}{4}$,  $\\arctan(-1) = -\\frac{\\pi}{4}$',
  },
  {
    titel: 'Winkelumrechnung',
    inhalt:
      'Grad → Bogenmaß:  $\\varphi_{\\text{rad}} = \\varphi_{\\text{grad}} \\cdot \\dfrac{\\pi}{180}$\n' +
      'Bogenmaß → Grad:  $\\varphi_{\\text{grad}} = \\varphi_{\\text{rad}} \\cdot \\dfrac{180}{\\pi}$\n\n' +
      '$0° = 0$,  $30° = \\frac{\\pi}{6}$,  $45° = \\frac{\\pi}{4}$\n' +
      '$60° = \\frac{\\pi}{3}$,  $90° = \\frac{\\pi}{2}$,  $180° = \\pi$,  $360° = 2\\pi$',
  },
  {
    titel: 'Urbilder',
    inhalt:
      '$\\sin^{-1}(\\{1\\}) = \\left\\{\\tfrac{\\pi}{2} + 2k\\pi\\right\\}$,  $\\sin^{-1}(\\{0\\}) = \\{k\\pi\\}$,  $\\sin^{-1}(\\{-1\\}) = \\left\\{\\tfrac{3\\pi}{2} + 2k\\pi\\right\\}$\n' +
      '$\\cos^{-1}(\\{1\\}) = \\{2k\\pi\\}$,  $\\cos^{-1}(\\{0\\}) = \\left\\{\\tfrac{\\pi}{2} + k\\pi\\right\\}$,  $\\cos^{-1}(\\{-1\\}) = \\{(2k{+}1)\\pi\\}$\n' +
      '$\\tan^{-1}(\\{1\\}) = \\left\\{\\tfrac{\\pi}{4} + k\\pi\\right\\}$,  $\\tan^{-1}(\\{0\\}) = \\{k\\pi\\}$,  $\\tan^{-1}(\\{-1\\}) = \\left\\{-\\tfrac{\\pi}{4} + k\\pi\\right\\}$\n' +
      'jeweils $k \\in \\mathbb{Z}$',
  },
  {
    titel: 'Kreise & Mengen in $\\mathbb{R} \\times \\mathbb{R}$',
    inhalt:
      '$x^2+y^2 = r^2$  →  Kreis, Radius $r$ (Rand)\n' +
      '$x^2+y^2 < r^2$  →  Offene Kreisscheibe (Inneres)\n' +
      '$x^2+y^2 \\leq r^2$  →  Abgeschlossene Kreisscheibe\n' +
      '$x^2+y^2 > r^2$  →  Äußeres des Kreises\n\n' +
      '$x = y$  →  Winkelhalbierende (1. & 3. Quadrant)\n' +
      '$x = -y$  →  Winkelhalbierende (2. & 4. Quadrant)',
  },
  {
    titel: 'Binomische Formeln',
    inhalt:
      '$(a+b)^2 = a^2 + 2ab + b^2$\n' +
      '$(a-b)^2 = a^2 - 2ab + b^2$\n' +
      '$(a+b)(a-b) = a^2 - b^2$\n\n' +
      'Nenner rational (3. Binom.):\n' +
      '$\\dfrac{1}{\\sqrt{a}+\\sqrt{b}} = \\dfrac{\\sqrt{a}-\\sqrt{b}}{a-b}$\n' +
      '$\\dfrac{1}{\\sqrt{a}-\\sqrt{b}} = \\dfrac{\\sqrt{a}+\\sqrt{b}}{a-b}$',
  },
]
