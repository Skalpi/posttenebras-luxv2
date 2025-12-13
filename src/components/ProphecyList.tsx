import React, { useState, useMemo } from 'react';
import { Prophecy, ProphecyCategory } from '../types';
import { Search, Filter, ChevronRight, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getBibleLink } from '../utils/bibleUrl';

interface ProphecyListProps {
  data: Prophecy[];
}

export const ProphecyList: React.FC<ProphecyListProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');

  const filteredData = useMemo(() => {
    return data.filter(item => {
      const matchesSearch = 
        item.beschreibung.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ot_stelle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.nt_stelle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ot_text_kurz.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = selectedCategory === 'Alle' || item.kategorie === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [data, searchTerm, selectedCategory]);

  const categories = ['Alle', ...Object.values(ProphecyCategory)];

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-stone-200 sticky top-28 z-30">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Suche nach Stichworten, Bibelstellen (z.B. Jesaja)..."
              className="block w-full pl-11 pr-4 py-3 border border-stone-300 rounded-lg text-base bg-stone-50 placeholder-stone-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all shadow-inner"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative min-w-[260px]">
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Filter className="h-4 w-4 text-slate-400" />
            </div>
            <select
              className="block w-full pl-11 pr-10 py-3 text-base border border-stone-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 rounded-lg bg-stone-50 cursor-pointer shadow-sm hover:bg-white transition-colors appearance-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ChevronRight className="h-4 w-4 text-slate-400 rotate-90" />
            </div>
          </div>
        </div>
        <div className="mt-3 text-sm text-slate-500 font-medium px-1 flex justify-between">
          <span>Zeige {filteredData.length} von {data.length} Einträgen</span>
          {searchTerm && <span className="text-amber-600">Filter aktiv</span>}
        </div>
      </div>

      {/* Results List - HUGE GAP for better separation */}
      <div className="grid gap-8 md:grid-cols-1">
        {filteredData.length > 0 ? (
          filteredData.map((prophecy) => (
            <Link 
              key={prophecy.id} 
              to={`/prophecy/${prophecy.id}`}
              className="block group"
            >
              <div className="bg-white rounded-xl shadow-md border border-stone-200 border-l-[6px] border-l-amber-500 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-l-amber-400 relative overflow-hidden">
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    {/* Header Chips */}
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-white shadow-sm">
                        #{prophecy.id}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-amber-100 text-amber-800 border border-amber-200">
                        {prophecy.kategorie}
                      </span>
                    </div>
                    
                    {/* Main Title */}
                    <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-6">
                      {prophecy.beschreibung}
                    </h3>
                    
                    {/* Verse Badges */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-3 bg-stone-100 px-4 py-3 rounded-lg border border-stone-200 group-hover:bg-white group-hover:border-amber-200 transition-colors w-full sm:w-auto">
                        <span className="font-black text-slate-400 font-serif text-sm uppercase">AT</span>
                        <span className="font-semibold text-slate-800">{prophecy.ot_stelle}</span>
                      </div>
                      <ArrowRight className="hidden sm:block h-5 w-5 text-slate-300" />
                      <div className="flex items-center gap-3 bg-stone-100 px-4 py-3 rounded-lg border border-stone-200 group-hover:bg-white group-hover:border-amber-200 transition-colors w-full sm:w-auto">
                         <span className="font-black text-amber-500/70 font-serif text-sm uppercase">NT</span>
                         <span className="font-semibold text-slate-800">{prophecy.nt_stelle}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Area - VISUALIZE OPENING */}
                  <div className="flex items-end justify-end md:self-center border-t md:border-t-0 md:border-l border-stone-100 pt-6 md:pt-0 md:pl-8 mt-4 md:mt-0">
                    <button className="px-5 py-2.5 rounded-full bg-amber-50 text-amber-700 font-bold text-sm group-hover:bg-amber-500 group-hover:text-white transition-all flex items-center shadow-sm">
                      Details ansehen <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            </Link>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-stone-300">
            <Search className="h-16 w-16 text-stone-200 mx-auto mb-6" />
            <p className="text-slate-500 text-xl font-serif mb-3">Keine Prophetien gefunden.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('Alle');}}
              className="mt-4 px-8 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 font-medium transition-colors shadow-lg"
            >
              Filter zurücksetzen
            </button>
          </div>
        )}
      </div>
    </div>
  );
};