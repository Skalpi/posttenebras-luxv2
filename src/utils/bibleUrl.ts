export const getBibleLink = (reference: string): string => {
  if (!reference) return '#';
  
  // Clean up reference: 
  // 1. Take part before first parenthesis (remove " (vgl. ...)")
  // 2. Take part before first slash (remove " /11,1")
  // 3. Trim whitespace
  const cleanRef = reference.split('(')[0].split('/')[0].trim();
  
  // URL encode the reference
  const encoded = encodeURIComponent(cleanRef);
  
  // Using Schlachter 2000 (SCH2000) as requested
  return `https://www.bibleserver.com/SCH2000/${encoded}`;
};