export interface PdfDokument {
  /** Anzeigetitel in der Liste */
  titel: string
  /** Pfad relativ zum public-Verzeichnis, z. B. 'folien/xyz.pdf' */
  datei: string
}

export interface PdfGruppe {
  titel: string
  beschreibung: string
  dokumente: PdfDokument[]
}

export const pdfGruppen: PdfGruppe[] = [
  {
    titel: 'Vorlesungsfolien & Notizen',
    beschreibung: 'Folien mit den handschriftlichen Notizen aus der Vorlesung.',
    dokumente: [
      { titel: 'Gesamtvorlesung (ohne Notizen, Stand 15.06.2026)', datei: 'folien/Gesamtvorlesung-ohne-Notizen-stand-15-06-2026.pdf' },
      { titel: 'Vorlesungsskript SoSe 2025', datei: 'folien/sose2025_alg-grundlagen.pdf' },
      { titel: '14.04. – Komplexe Zahlen (Notizen)', datei: 'folien/su2026-04-14--komplexe-zahlen-notizen.pdf' },
      { titel: '16.04. – Komplexe Zahlen (Notizen)', datei: 'folien/su2026-04-16--komplexe-zahlen-notizen.pdf' },
      { titel: '23.04. – Komplexe Zahlen (Notizen)', datei: 'folien/su2026-04-23--komplexe-zahlen-notizen.pdf' },
      { titel: '28.04. – Relationen (Notizen)', datei: 'folien/su2026-04-28--relationen-notizen.pdf' },
      { titel: '30.04. – Äquivalenzrelationen (Notizen)', datei: 'folien/su2026-04-30--aequivalenzrelationen-notizen.pdf' },
      { titel: '07.05. – Gruppen & euklidischer Algorithmus (Notizen)', datei: 'folien/su2026-05-07--gruppen-eukl-alg-notizen.pdf' },
      { titel: '12.05. – Rechnen mit Restklassen (Notizen)', datei: 'folien/su2026-05-12--rechnen-mit-restklassen-notizen.pdf' },
      { titel: '26.05. – Ringe, Körper & Prüfziffern (Notizen)', datei: 'folien/su2026-05-26--ringe-koerper-pruefziffern-notizen.pdf' },
      { titel: '28.05. – Lineare Gleichungssysteme', datei: 'folien/su2026-05-28--lgs.pdf' },
      { titel: '09.06. – LGS & Determinanten (Notizen)', datei: 'folien/su2026-06-09--lgs-determinanten-notizen.pdf' },
      { titel: '11.06. – Determinanten & Vektorräume (Notizen)', datei: 'folien/su2026-06-11--determinanten-vr-notizen.pdf' },
    ],
  },
  {
    titel: 'Übungsblätter – Aufgaben',
    beschreibung: 'Die Übungsblätter (ohne Lösungen) als PDF.',
    dokumente: [
      { titel: 'Blatt 0 – Grundlagen', datei: 'uebungsblaetter/00_aufg_grundlagen.pdf' },
      { titel: 'Blatt 1 – Komplexe Zahlen', datei: 'uebungsblaetter/01_aufg_komplexe-zahlen.pdf' },
      { titel: 'Blatt 2 – Komplexe Zahlen', datei: 'uebungsblaetter/02_aufg_komplexe-zahlen.pdf' },
      { titel: 'Blatt 3 – Komplexe Zahlen & Relationen', datei: 'uebungsblaetter/03_aufg_komplexe-zahlen-relationen.pdf' },
      { titel: 'Blatt 4 – Relationen', datei: 'uebungsblaetter/04_aufg_relationen.pdf' },
      { titel: 'Blatt 5 – Gruppen & Restklassen', datei: 'uebungsblaetter/05_aufg_gruppen-restklassen.pdf' },
      { titel: 'Blatt 6 – Restklassen', datei: 'uebungsblaetter/06_aufg_restklassen.pdf' },
      { titel: 'Blatt 7 – Lineare Gleichungssysteme', datei: 'uebungsblaetter/07_aufg_lgs.pdf' },
      { titel: 'Blatt 8 – LGS & Determinanten', datei: 'uebungsblaetter/08_aufg_lgs-determinanten.pdf' },
    ],
  },
  {
    titel: 'Übungsblätter – Lösungen',
    beschreibung: 'Offizielle Musterlösungen zu den Übungsblättern als PDF.',
    dokumente: [
      { titel: 'Blatt 0 – Grundlagen', datei: 'uebungsblaetter-lösung/00_lsg_grundlagen_2026.pdf' },
      { titel: 'Blatt 1 – Komplexe Zahlen', datei: 'uebungsblaetter-lösung/01_lsg_komplexe-zahlen_2026.pdf' },
      { titel: 'Blatt 2 – Komplexe Zahlen', datei: 'uebungsblaetter-lösung/02_lsg_komplexe-zahlen_2026.pdf' },
      { titel: 'Blatt 3 – Komplexe Zahlen & Relationen', datei: 'uebungsblaetter-lösung/03_lsg_komplexe-zahlen-relationen_2026.pdf' },
      { titel: 'Blatt 4 – Relationen', datei: 'uebungsblaetter-lösung/04_lsg_relationen_2026.pdf' },
      { titel: 'Blatt 5 – Gruppen & Restklassen', datei: 'uebungsblaetter-lösung/05_lsg_gruppen-restklassen_2026.pdf' },
      { titel: 'Blatt 6 – Restklassen', datei: 'uebungsblaetter-lösung/06_lsg_restklassen_2026.pdf' },
      { titel: 'Blatt 7 – Lineare Gleichungssysteme', datei: 'uebungsblaetter-lösung/07_lsg_lgs.pdf' },
      { titel: 'Blatt 8 – LGS & Determinanten', datei: 'uebungsblaetter-lösung/08_lsg_lgs-determinanten.pdf' },
    ],
  },
]
