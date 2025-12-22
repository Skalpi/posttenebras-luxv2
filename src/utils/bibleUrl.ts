export const getBibleLink = (reference: string): string => {
  if (!reference) return '#';
  
  // Bereinigung der Referenz für die URL:
  // Wir nehmen die erste genannte Bibelstelle vor dem ersten Trennzeichen (Klammer, Semikolon, Schrägstrich),
  // da bibleserver am besten mit einer einzelnen klaren Referenz funktioniert.
  const firstRef = reference.split('(')[0].split(';')[0].split('/')[0].trim();
  
  // URL-Codierung der Referenz
  const encoded = encodeURIComponent(firstRef);
  
  // Prüfung ob es sich um Lukas 3,33 handelt (spezifische Anforderung für ELB Übersetzung)
  if (reference.toLowerCase().includes("lukas 3") || reference.toLowerCase().includes("lk 3")) {
    return `https://www.bibleserver.com/ELB/${encoded}`;
  }
  
  // Standardmäßig Schlachter 2000 (SCH2000) verwenden
  return `https://www.bibleserver.com/SCH2000/${encoded}`;
};