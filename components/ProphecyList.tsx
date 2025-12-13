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
    <div className="space-y-6">
      {/* Search and Filter Controls */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-200 sticky top-20 z-30">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Suche nach Stichworten, Bibelstellen (z.B. Jesaja)..."
              className="block w-full pl-10 pr-3 py-2 border border-stone-300 rounded-lg leading-5 bg-stone-50 placeholder-stone-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition duration-150 ease-in-out"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative min-w-[200px]">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-4 w-4 text-slate-400" />
            </div>
            <select
              className="block w-full pl-10 pr-10 py-2 text-base border border-stone-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm rounded-lg bg-stone-50"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-2 text-xs text-slate-500">
          Zeige {filteredData.length} von {data.length} Einträgen
        </div>
      </div>

      {/* Results List */}
      <div className="grid gap-4 md:grid-cols-1">
        {filteredData.length > 0 ? (
          filteredData.map((prophecy) => (
            <Link 
              key={prophecy.id} 
              to={`/prophecy/${prophecy.id}`}
              className="block group"
            >
              <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-5 transition-all duration-200 hover:shadow-md hover:border-amber-400 hover:bg-stone-50/50">
                <div className="flex items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                        #{prophecy.id}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        {prophecy.kategorie}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-serif font-semibold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {prophecy.beschreibung}
                    </h3>
                    
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-slate-600">
                      <div className="flex items-center gap-2 bg-stone-100 px-3 py-1.5 rounded-md border border-stone-200">
                        <span className="font-bold text-slate-700 font-serif">AT</span>
                        <a 
                          href={getBibleLink(prophecy.ot_stelle)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-slate-600 hover:text-amber-600 hover:underline flex items-center gap-1"
                          title="Lesen"
                        >
                          {prophecy.ot_stelle}
                          <ExternalLink size={10} className="text-slate-400" />
                        </a>
                      </div>
                      <ArrowRight className="hidden sm:block h-4 w-4 text-slate-300" />
                      <div className="flex items-center gap-2 bg-stone-100 px-3 py-1.5 rounded-md border border-stone-200">
                         <span className="font-bold text-slate-700 font-serif">NT</span>
                         <a 
                          href={getBibleLink(prophecy.nt_stelle)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-slate-600 hover:text-amber-600 hover:underline flex items-center gap-1"
                          title="Lesen"
                        >
                          {prophecy.nt_stelle}
                          <ExternalLink size={10} className="text-slate-400" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden sm:flex self-center">
                    <ChevronRight className="h-6 w-6 text-stone-300 group-hover:text-amber-500 transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-stone-300">
            <Search className="h-12 w-12 text-stone-300 mx-auto mb-4" />
            <p className="text-slate-500 text-lg">Keine Prophetien gefunden.</p>
            <p className="text-sm text-slate-400">Versuchen Sie es mit anderen Suchbegriffen oder setzen Sie den Filter zurück.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('Alle');}}
              className="mt-4 text-amber-600 hover:text-amber-700 font-medium text-sm underline"
            >
              Filter zurücksetzen
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
