export const getBibleLink = (reference: string): string => {
  if (!reference) return '#';
  
  // Bereinigung der Referenz:
  // 1. Teil vor der ersten Klammer nehmen (entfernt " (vgl. ...)")
  // 2. Teil vor dem ersten Schrägstrich nehmen (falls mehrere Stellen gelistet)
  // 3. Semikolons durch Kommas ersetzen für bessere bibleserver Kompatibilität
  const cleanRef = reference.split('(')[0].split(';')[0].split('/')[0].trim();
  
  // URL-Codierung der Referenz
  const encoded = encodeURIComponent(cleanRef);
  
  // Standardmäßig Schlachter 2000 (SCH2000) verwenden, wie in den Anforderungen
  return `https://www.bibleserver.com/SCH2000/${encoded}`;
};