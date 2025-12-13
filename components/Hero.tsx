import React, { useState } from 'react';
import { Info, ChevronDown, ChevronUp, Coins, BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-slate-900 text-white py-12 md:py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-amber-500 mb-6">
          Jesus Christus in der Prophetie
        </h1>
        <p className="text-lg md:text-xl text-stone-300 leading-relaxed mb-8 max-w-2xl mx-auto">
          Das Alte Testament enthält über 300 Vorhersagen über den kommenden Messias.
          Diese App visualisiert, wie Jesus von Nazareth diese Prophetien – von seiner Abstammung über seinen Geburtsort bis hin zu seinem Leiden und seiner Auferstehung – erfüllte.
        </p>
        
        {/* Expandable Stats Section */}
        <div 
          className={`bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden text-left max-w-3xl mx-auto transition-all duration-300 hover:border-amber-500/50 ${isExpanded ? 'shadow-2xl ring-1 ring-amber-500/30' : 'cursor-pointer hover:bg-slate-800/80'}`}
          onClick={() => !isExpanded && setIsExpanded(true)}
        >
          {/* Header / Teaser */}
          <div className="p-5 flex items-start gap-4 justify-between">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500 mt-1">
                <Info className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-amber-500 mb-1">
                  Statistische Unmöglichkeit
                </h3>
                <p className="text-stone-300 text-sm md:text-base leading-relaxed">
                  Die Wahrscheinlichkeit, dass ein einziger Mensch zufällig auch nur 8 dieser Prophetien erfüllt, wird von Mathematikern auf <b>1 zu 10<sup>17</sup></b> geschätzt.
                  {!isExpanded && <span className="text-amber-500/80 ml-2 text-xs uppercase font-bold tracking-wider hover:text-amber-400">Mehr erfahren...</span>}
                </p>
              </div>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="p-2 rounded-full hover:bg-slate-700 text-stone-400 transition-colors"
              aria-label={isExpanded ? "Schließen" : "Details anzeigen"}
            >
              {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
          </div>

          {/* Expanded Content */}
          {isExpanded && (
            <div className="px-5 pb-6 pt-2 border-t border-slate-700/50 animate-in fade-in slide-in-from-top-4 duration-300 cursor-auto" onClick={(e) => e.stopPropagation()}>
              <div className="prose prose-invert prose-sm max-w-none text-stone-300 space-y-6">
                
                <div>
                  <h4 className="flex items-center gap-2 text-white font-serif font-bold text-lg mb-2">
                    <BookOpen className="h-4 w-4 text-amber-500" />
                    Die Berechnung nach Peter Stoner
                  </h4>
                  <p>
                    In seinem Buch <i>"Science Speaks"</i> hat Professor Peter Stoner (Mathematiker und Astronom) zusammen mit 600 Studenten berechnet, wie unwahrscheinlich eine zufällige Erfüllung ist. Die Ergebnisse wurden von der <i>American Scientific Affiliation</i> geprüft und als konservativ und methodisch fundiert eingestuft.
                  </p>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                  <h4 className="flex items-center gap-2 text-amber-400 font-bold mb-3">
                    <Coins className="h-5 w-5" />
                    Das Texas-Silberdollar-Beispiel (für 8 Prophetien)
                  </h4>
                  <p className="mb-3">
                    Die Wahrscheinlichkeit für 8 erfüllte Prophetien liegt bei 1 : 10<sup>17</sup> (1 zu 100 Billiarden). Um sich diese Zahl vorzustellen:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-stone-300">
                    <li>Man bedeckt den gesamten US-Bundesstaat <b>Texas ca. 60 cm hoch mit Silberdollars</b>.</li>
                    <li>Man markiert genau <b>eine</b> dieser Münzen.</li>
                    <li>Man verbindet einem Mann die Augen und lässt ihn irgendwo in Texas absetzen.</li>
                    <li>Er darf sich genau <b>eine Münze</b> greifen.</li>
                  </ul>
                  <p className="mt-3 font-medium text-white">
                    Die Chance, dass er genau die markierte Münze findet, entspricht der Wahrscheinlichkeit, dass 8 Prophetien zufällig auf eine Person zutreffen.
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-serif font-bold text-lg mb-2">
                    Für 48 Prophetien
                  </h4>
                  <p>
                    Wenn man die Berechnung auf 48 Prophetien ausweitet, steigt die Unwahrscheinlichkeit auf <b>1 zu 10<sup>157</sup></b>.
                  </p>
                  <p className="mt-2 text-sm italic text-stone-400">
                    Zum Vergleich: Die Anzahl der Atome im gesamten bekannten Universum wird auf "nur" 10<sup>80</sup> geschätzt. Eine zufällige Erfüllung ist damit mathematisch praktisch ausgeschlossen.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/50 text-xs text-stone-500 flex justify-between items-center">
                  <span>Quelle: Peter W. Stoner, "Science Speaks"</span>
                  <button 
                    onClick={() => setIsExpanded(false)}
                    className="text-amber-500 hover:text-amber-400 font-medium"
                  >
                    Schließen
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};