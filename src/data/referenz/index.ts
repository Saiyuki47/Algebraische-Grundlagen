import type { ReferenzKarte } from '../../types'
import { karte as c_sin_cos } from './sin-cos'
import { karte as c_arkusfunktionen } from './arkusfunktionen'
import { karte as c_winkelumrechnung } from './winkelumrechnung'
import { karte as c_binomische_formeln } from './binomische-formeln'
import { karte as c_urbilder } from './urbilder'
import { karte as c_kreise_mengen } from './kreise-mengen'
import { karte as c_komplexe_grundoperationen } from './komplexe-grundoperationen'
import { karte as c_gauss_mengen } from './gauss-mengen'
import { karte as c_polardarstellung } from './polardarstellung'
import { karte as c_euler_formel } from './euler-formel'
import { karte as c_nte_wurzeln } from './nte-wurzeln'
import { karte as c_folgen_konvergenz } from './folgen-konvergenz'
import { karte as c_relationen_eigenschaften } from './relationen-eigenschaften'
import { karte as c_relationen_verkettung } from './relationen-verkettung'
import { karte as c_aequivalenz_ordnung } from './aequivalenz-ordnung'
import { karte as c_gruppenaxiome } from './gruppenaxiome'
import { karte as c_wichtige_gruppen } from './wichtige-gruppen'
import { karte as c_symmetrische_gruppe_s3 } from './symmetrische-gruppe-s3'
import { karte as c_untergruppen_ordnung } from './untergruppen-ordnung'
import { karte as c_euklidischer_algorithmus } from './euklidischer-algorithmus'
import { karte as c_restklassen_zn } from './restklassen-zn'
import { karte as c_rechnen_restklassen } from './rechnen-restklassen'
import { karte as c_ringe } from './ringe'
import { karte as c_koerper } from './koerper'
import { karte as c_pruefziffern } from './pruefziffern'
import { karte as c_lgs_gauss } from './lgs-gauss'
import { karte as c_lgs_loesbarkeit } from './lgs-loesbarkeit'
import { karte as c_determinanten } from './determinanten'
import { karte as c_vektorraeume_basen } from './vektorraeume-basen'
import { karte as c_lineare_huelle } from './lineare-huelle'
import { karte as c_lineare_unabhaengigkeit } from './lineare-unabhaengigkeit'
import { karte as c_basis_dimension } from './basis-dimension'

// Alle Referenz-Karten in Stoff-Reihenfolge. Pro Thema eine Datei in diesem Ordner.
export const referenzKarten: ReferenzKarte[] = [
  c_sin_cos,
  c_arkusfunktionen,
  c_winkelumrechnung,
  c_binomische_formeln,
  c_urbilder,
  c_kreise_mengen,
  c_komplexe_grundoperationen,
  c_gauss_mengen,
  c_polardarstellung,
  c_euler_formel,
  c_nte_wurzeln,
  c_folgen_konvergenz,
  c_relationen_eigenschaften,
  c_relationen_verkettung,
  c_aequivalenz_ordnung,
  c_gruppenaxiome,
  c_wichtige_gruppen,
  c_symmetrische_gruppe_s3,
  c_untergruppen_ordnung,
  c_euklidischer_algorithmus,
  c_restklassen_zn,
  c_rechnen_restklassen,
  c_ringe,
  c_koerper,
  c_pruefziffern,
  c_lgs_gauss,
  c_lgs_loesbarkeit,
  c_determinanten,
  c_vektorraeume_basen,
  c_lineare_huelle,
  c_lineare_unabhaengigkeit,
  c_basis_dimension,
]

export const referenzTitelById: Record<string, string> = Object.fromEntries(
  referenzKarten.map(k => [k.id, k.titel]),
)
