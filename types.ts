export interface Prophecy {
  id: number;
  kategorie: ProphecyCategory;
  beschreibung: string;
  ot_stelle: string;
  ot_text_kurz: string;
  ot_zeitraum?: string; // Neu: Ungefährer Verfassungszeitraum
  nt_stelle: string;
  nt_text_kurz: string;
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