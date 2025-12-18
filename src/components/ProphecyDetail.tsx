import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Prophecy } from '../types';
import { ArrowLeft, Book, ExternalLink, Tag, Youtube, Share2, Check, Clock, Quote, MessageCircle } from 'lucide-react';
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
      <div className="max-w-4xl mx-auto p-8 text-center min-h-[50vh] flex flex-col justify-center items-center">
        <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">Prophetie nicht gefunden</h2>
        <Link to="/" className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors inline-flex items-center gap-2">
          <ArrowLeft size={18} /> Zurück zur Übersicht
        </Link>
      </div>
    );
  }

  const handleShare = async () => {
    const text = `Erfüllte Prophetie #${prophecy.id}: ${prophecy.beschreibung}\n\nAT: ${prophecy.ot_stelle}\nNT: ${prophecy.nt_stelle}\n\nMehr dazu: ${window.location.href}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Erfüllte Prophetie',
          text: text,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getLinkIcon = (url: string) => {
    if (url.includes('youtube') || url.includes('youtu.be')) return <Youtube size={18} className="text-red-600" />;
    return <ExternalLink size={18} className="text-blue-600" />;
  };

  const getLinkText = (url: string) => {
     if (url.includes('youtube') || url.includes('youtu.be')) return "Video ansehen";
     if (url.includes('.pdf')) return "PDF Dokument öffnen";
     return "Webseite öffnen";
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Top Navigation Bar */}
      <div className="flex justify-between items-center mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-slate-600 hover:text-amber-700 transition-colors font-medium group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" /> Zurück
        </button>

        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-full text-slate-700 hover:bg-amber-50 hover:border-amber-200 hover:text-amber-700 transition-all shadow-sm"
          title="Teilen"
        >
          {copied ? <Check className="h-4 w-4 text-green-600" /> : <Share2 className="h-4 w-4" />}
          <span className="text-sm font-medium">{copied ? "Kopiert!" : "Teilen"}</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-stone-100 overflow-hidden">
        
        {/* Header Section */}
        <div className="p-6 sm:p-10 bg-[#faf9f6] border-b border-stone-200 relative overflow-hidden">
          {/* BACKGROUND LOGO REMOVED AS REQUESTED */}
          
          <div className="relative z-10">
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-800 text-white shadow-md">
                Nr. {prophecy.id}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200">
                {prophecy.kategorie}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight mb-2">
              {prophecy.beschreibung}
            </h1>
          </div>
        </div>

        {/* Verses Section (The Core) */}
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200">
          
          {/* Old Testament Column */}
          <div className="p-6 sm:p-10 bg-[#fffefc]">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
              <div className="p-2 bg-stone-100 rounded-lg text-stone-600">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Die Verheißung</h2>
                <p className="text-xs text-slate-500 font-medium">Altes Testament • {prophecy.ot_zeitraum || "Vorhersage"}</p>
              </div>
            </div>

            {/* Verse 1 */}
            <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 shadow-sm relative group mb-6">
              <Quote className="absolute top-4 left-4 h-8 w-8 text-stone-200 -z-0" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <a 
                    href={getBibleLink(prophecy.ot_stelle)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-700 font-serif font-bold text-lg hover:underline decoration-amber-300 decoration-2 underline-offset-2"
                  >
                    {prophecy.ot_stelle} <ExternalLink size={14} className="opacity-50" />
                  </a>
                  {prophecy.ot_2_stelle && <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Textstelle 1</span>}
                </div>
                <p className="text-slate-700 italic text-lg leading-relaxed font-serif">"{prophecy.ot_text_kurz}"</p>
              </div>
            </div>

            {/* Optional Verse 2 */}
            {prophecy.ot_2_stelle && (
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 shadow-sm relative group">
                <Quote className="absolute top-4 left-4 h-8 w-8 text-stone-200 -z-0" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <a 
                      href={getBibleLink(prophecy.ot_2_stelle)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-700 font-serif font-bold text-lg hover:underline decoration-amber-300 decoration-2 underline-offset-2"
                    >
                      {prophecy.ot_2_stelle} <ExternalLink size={14} className="opacity-50" />
                    </a>
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Textstelle 2</span>
                  </div>
                  <p className="text-slate-700 italic text-lg leading-relaxed font-serif">"{prophecy.ot_2_text_kurz}"</p>
                </div>
              </div>
            )}
          </div>

          {/* New Testament Column */}
          <div className="p-6 sm:p-10 bg-white">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
              <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                <Check className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Die Erfüllung</h2>
                <p className="text-xs text-slate-500 font-medium">Neues Testament • In Jesus Christus</p>
              </div>
            </div>

            {/* Verse 1 */}
            <div className="bg-amber-50/40 p-6 rounded-xl border border-amber-100/50 shadow-sm relative mb-6">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <a 
                    href={getBibleLink(prophecy.nt_stelle)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-800 font-serif font-bold text-lg hover:text-amber-700 transition-colors"
                  >
                    {prophecy.nt_stelle} <ExternalLink size={14} className="opacity-30" />
                  </a>
                  {prophecy.nt_2_stelle && <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">Textstelle 1</span>}
                </div>
                <p className="text-slate-700 text-lg leading-relaxed font-serif">"{prophecy.nt_text_kurz}"</p>
              </div>
            </div>

            {/* Optional Verse 2 (The requested capability for up to 2 NT texts) */}
            {prophecy.nt_2_stelle && (
              <div className="bg-amber-50/40 p-6 rounded-xl border border-amber-100/50 shadow-sm relative">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-3">
                    <a 
                      href={getBibleLink(prophecy.nt_2_stelle)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-800 font-serif font-bold text-lg hover:text-amber-700 transition-colors"
                    >
                      {prophecy.nt_2_stelle} <ExternalLink size={14} className="opacity-30" />
                    </a>
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">Textstelle 2</span>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed font-serif">"{prophecy.nt_2_text_kurz}"</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Kommentar Section */}
        {prophecy.kommentar && (
          <div className="p-6 sm:p-10 bg-slate-50 border-t border-stone-200">
            <div className="flex items-start gap-4">
              <div className="hidden sm:block p-3 bg-white rounded-full border border-stone-200 text-amber-600 shadow-sm">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Theologischer Kontext</h3>
                <div className="text-slate-600 leading-relaxed max-w-none [&_a]:text-amber-600 [&_a]:underline">
                  <p className="leading-relaxed whitespace-pre-line">{prophecy.kommentar}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer Section: Tags & Sources */}
        <div className="p-6 sm:p-10 bg-[#faf9f6] border-t border-stone-200 flex flex-col md:flex-row gap-8 justify-between">
          
          {/* Tags */}
          <div className="flex-1">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Themen</h3>
            <div className="flex flex-wrap gap-2">
              {prophecy.tags.map(tag => (
                <span key={tag} className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-white border border-stone-200 text-slate-600 shadow-sm">
                  <Tag size={10} className="mr-1.5 text-amber-500" /> {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sources */}
          <div className="flex-1 md:text-right">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Quellen & Vertiefung</h3>
            <div className="flex flex-col md:items-end gap-3">
              {(prophecy.quelle_links.length > 0 ? prophecy.quelle_links : ["https://www.youtube.com/watch?v=_y56S4IUCdQ", "https://bruderhand.de/download/Allgemein/Der_verheissene_Erloeser.pdf"]).map((link, idx) => (
                <a 
                  key={idx}
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-amber-700 transition-colors group p-2 rounded-lg hover:bg-white"
                >
                  <span className="group-hover:underline">{getLinkText(link)}</span>
                  {getLinkIcon(link)}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};