import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Prophecy } from '../types';
import { ArrowLeft, Book, ExternalLink, Tag, Youtube, Share2, Check, Clock } from 'lucide-react';
import { getBibleLink } from '../utils/bibleUrl';

interface ProphecyDetailProps {
  data: Prophecy[];
}

export const ProphecyDetail: React.FC<ProphecyDetailProps> = ({ data }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = React.useState(false);
  
  const prophecy = data.find(p => p.id === Number(id));

  if (!prophecy) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Prophetie nicht gefunden</h2>
        <Link to="/" className="text-amber-600 hover:underline mt-4 inline-block">Zurück zur Übersicht</Link>
      </div>
    );
  }

  const handleShare = async () => {
    const text = `Erfüllte Prophetie #${prophecy.id}: ${prophecy.beschreibung}\n\nAT: ${prophecy.ot_stelle} - "${prophecy.ot_text_kurz}"\nNT: ${prophecy.nt_stelle} - "${prophecy.nt_text_kurz}"\n\nMehr dazu: ${window.location.href}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Erfüllte Prophetie',
          text: text,
          url: window.location.href,
        });
      } catch (err) {
        // Share cancelled or failed, fallback to clipboard
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback for desktop
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Helper to determine link type icon
  const getLinkIcon = (url: string) => {
    if (url.includes('youtube') || url.includes('youtu.be')) return <Youtube size={16} />;
    return <ExternalLink size={16} />;
  };

  const getLinkText = (url: string) => {
     if (url.includes('youtube') || url.includes('youtu.be')) return "Video ansehen";
     if (url.includes('.pdf')) return "PDF Dokument öffnen";
     return "Webseite öffnen";
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-slate-500 hover:text-amber-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Zurück zur Liste
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-300 rounded-lg text-slate-700 hover:bg-stone-50 hover:text-amber-600 transition-colors shadow-sm"
          title="Teilen"
        >
          {copied ? <Check className="h-4 w-4 text-green-600" /> : <Share2 className="h-4 w-4" />}
          <span className="text-sm font-medium">{copied ? "Kopiert!" : "Teilen"}</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg border-t-4 border-amber-500 overflow-hidden">
        
        {/* Header Section */}
        <div className="p-6 sm:p-8 bg-slate-50 border-b border-stone-200">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-slate-800 text-white">
              Nr. {prophecy.id}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800 border border-amber-200">
              {prophecy.kategorie}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
            {prophecy.beschreibung}
          </h1>
        </div>

        {/* Comparison Section */}
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200">
          
          {/* Old Testament */}
          <div className="p-6 sm:p-8 bg-stone-50/50">
            <div className="flex items-center gap-2 mb-4">
              <Book className="h-5 w-5 text-slate-500" />
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Altes Testament</h2>
            </div>
            <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm mb-3">
              <a 
                href={getBibleLink(prophecy.ot_stelle)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-amber-700 font-serif font-bold text-lg mb-1 hover:underline hover:text-amber-800 flex items-center gap-2 group"
                title="Bibelstelle auf bibleserver.com lesen"
              >
                {prophecy.ot_stelle}
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />
              </a>
              <p className="text-slate-700 italic leading-relaxed font-serif">"{prophecy.ot_text_kurz}"</p>
            </div>
            
            {/* Zeitangabe */}
            <div className="flex items-start gap-2 mt-4 text-sm text-slate-600 bg-stone-200/50 p-3 rounded-md">
              <Clock className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
              <div>
                {prophecy.ot_zeitraum ? (
                  <>
                    <span className="font-semibold block text-slate-700">Verfasst: {prophecy.ot_zeitraum}</span>
                    <span className="text-slate-500 text-xs">Jahre vor der Erfüllung</span>
                  </>
                ) : (
                  "Die Verheißung, gegeben Jahrhunderte vor dem Ereignis."
                )}
              </div>
            </div>
          </div>

          {/* New Testament */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Book className="h-5 w-5 text-amber-600" />
              <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Neues Testament</h2>
            </div>
            <div className="bg-amber-50/50 p-4 rounded-lg border border-amber-100 shadow-sm mb-3">
              <a 
                href={getBibleLink(prophecy.nt_stelle)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-amber-700 font-serif font-bold text-lg mb-1 hover:underline hover:text-amber-800 flex items-center gap-2 group"
                title="Bibelstelle auf bibleserver.com lesen"
              >
                {prophecy.nt_stelle}
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />
              </a>
              <p className="text-slate-700 leading-relaxed font-serif">"{prophecy.nt_text_kurz}"</p>
            </div>
             <p className="text-sm text-slate-500 mt-2">
              Die Erfüllung in der Person Jesus von Nazareth.
            </p>
          </div>
        </div>

        {/* Tags & Sources */}
        <div className="p-6 sm:p-8 bg-slate-50 border-t border-stone-200">
          
          {/* Tags */}
          {prophecy.tags.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Schlagworte</h3>
              <div className="flex flex-wrap gap-2">
                {prophecy.tags.map(tag => (
                  <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-200 text-slate-700">
                    <Tag size={12} className="mr-1" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Sources */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Quellen & Vertiefung</h3>
            {prophecy.quelle_links.length > 0 ? (
              <ul className="space-y-2">
                {prophecy.quelle_links.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-amber-700 hover:text-amber-900 font-medium transition-colors group"
                    >
                      <span className="p-1.5 bg-amber-100 rounded-md mr-2 group-hover:bg-amber-200 transition-colors">
                        {getLinkIcon(link)}
                      </span>
                      {getLinkText(link)}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
               <p className="text-sm text-slate-400 italic">Keine spezifischen Online-Quellen für diesen Eintrag hinterlegt. Siehe Standardwerke von Dr. Roger Liebi.</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};