export interface Prophecy {
  id: number;
  kategorie: ProphecyCategory;
  beschreibung: string;
  
  // Erste Bibelstelle (Pflicht)
  ot_stelle: string;
  ot_text_kurz: string;
  ot_zeitraum?: string;
  nt_stelle: string;
  nt_text_kurz: string;

  // Zweite Bibelstelle (Optional, für "2 Verse bei Bedarf")
  ot_2_stelle?: string;
  ot_2_text_kurz?: string;
  nt_2_stelle?: string;
  nt_2_text_kurz?: string;

  // Neuer Kommentarbereich
  kommentar?: string;

  quelle_links: string[];
  tags: string[];
}

export enum ProphecyCategory {
  HERKUNFT = "Herkunft & Abstammung",
  GEBURT = "Geburt",
  DIENST = "Leben & Dienst",
  LEIDEN = "Leiden & Verrat",
  TOD = "Tod",
  AUFERSTEHUNG = "Auferstehung & Himmelfahrt",
  KOENIGTUM = "Königtum & Wiederkunft"
}

export type FilterState = {
  search: string;
  category: string;
};