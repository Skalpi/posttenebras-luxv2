import React from 'react';
import { Prophecy } from '../types';
import { PieChart, List, ScrollText } from 'lucide-react';

interface StatsProps {
  prophecies: Prophecy[];
}

export const Stats: React.FC<StatsProps> = ({ prophecies }) => {
  const categoryCounts = React.useMemo(() => {
    const counts: Record<string, number> = {};
    prophecies.forEach(p => {
      counts[p.kategorie] = (counts[p.kategorie] || 0) + 1;
    });
    return counts;
  }, [prophecies]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500 flex items-center space-x-4">
        <div className="p-3 bg-amber-50 rounded-full text-amber-600">
          <List className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Erfasste Prophetien</p>
          <p className="text-3xl font-bold text-slate-800">{prophecies.length}</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500 flex items-center space-x-4">
        <div className="p-3 bg-blue-50 rounded-full text-blue-600">
          <PieChart className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Kategorien</p>
          <p className="text-3xl font-bold text-slate-800">{Object.keys(categoryCounts).length}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-emerald-500 flex items-center space-x-4">
        <div className="p-3 bg-emerald-50 rounded-full text-emerald-600">
          <ScrollText className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Bibelstellen</p>
          <p className="text-3xl font-bold text-slate-800">{prophecies.length * 2}+</p>
        </div>
      </div>
    </div>
  );
};