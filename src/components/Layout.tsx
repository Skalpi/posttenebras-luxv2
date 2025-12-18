import React, { useState, useRef, useEffect } from 'react';
import { BookOpen, Menu, X, ChevronDown, ExternalLink, Home, Library, MonitorPlay } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsResourcesOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col font-sans text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900 text-stone-100 shadow-md border-b-4 border-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24 items-center">
            {/* Title / Brand - LOGO REMOVED, just Icon and Text */}
            <Link to="/" className="flex items-center gap-4 group">
              <BookOpen className="h-10 w-10 text-amber-500 group-hover:text-amber-400 transition-colors" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wide text-stone-50 group-hover:text-white transition-colors">Erfüllte Prophetie</span>
              </div>
            </Link>

            {/* Desktop Navigation - EXTRA WIDE SPACING */}
            <nav className="hidden md:flex gap-12 items-center">
              <Link to="/" className={`text-lg font-medium hover:text-amber-500 transition-colors ${location.pathname === '/' ? 'text-amber-500 border-b-2 border-amber-500' : 'text-stone-200'}`}>
                Übersicht
              </Link>
              <Link to="/about" className={`text-lg font-medium hover:text-amber-500 transition-colors ${location.pathname === '/about' ? 'text-amber-500 border-b-2 border-amber-500' : 'text-stone-200'}`}>
                Über das Projekt
              </Link>
              <a href="https://posttenebras-lux.de/impressum/" className="text-lg font-medium text-stone-200 hover:text-amber-500 transition-colors">
                Impressum
              </a>
              
              {/* Dropdown Menu */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="px-6 py-3 bg-slate-800 rounded-lg border border-slate-600 hover:border-amber-500/50 hover:bg-slate-700 hover:text-amber-500 transition-all flex items-center gap-2 text-sm font-medium shadow-sm"
                >
                  Mehr Ressourcen <ChevronDown size={14} className={`transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isResourcesOpen && (
                  <div className="absolute right-0 mt-3 w-72 rounded-xl shadow-2xl bg-white ring-1 ring-black ring-opacity-5 py-2 z-50 transform origin-top-right transition-all">
                    <a href="#" className="flex items-center px-4 py-4 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors border-b border-slate-100">
                      <Home size={18} className="mr-3 text-amber-600" />
                      Zur Homepage
                    </a>
                    <a href="https://posttenebras-lux.de" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-4 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors bg-stone-50">
                      <ExternalLink size={18} className="mr-3 text-slate-500" />
                      Post Tenebras Lux
                    </a>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-stone-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700 animate-in slide-in-from-top-2">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link to="/" className="block px-4 py-4 rounded-md text-lg font-medium text-stone-200 hover:bg-slate-700 hover:text-amber-500 border-b border-slate-700">
                Übersicht der Prophetien
              </Link>
              <Link to="/about" className="block px-4 py-4 rounded-md text-lg font-medium text-stone-200 hover:bg-slate-700 hover:text-amber-500 border-b border-slate-700">
                Über das Projekt
              </Link>
              <a href="https://posttenebras-lux.de/impressum/" className="block px-4 py-4 rounded-md text-lg font-medium text-stone-200 hover:bg-slate-700 hover:text-amber-500">
                Impressum
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-stone-400 py-12 border-t border-amber-600/30 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="mb-4 md:mb-0">
              <h3 className="text-stone-100 font-serif font-bold text-lg flex items-center gap-2 mb-4">
                <BookOpen size={18} className="text-amber-600" />
                Erfüllte Prophetie
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Eine interaktive Untersuchung der alttestamentlichen Vorhersagen, die sich in Jesus Christus erfüllt haben.
              </p>
            </div>
            <div>
              <h4 className="text-stone-200 font-bold mb-4 uppercase text-sm tracking-wider">Bibelzitate</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Die Bibeltexte in dieser Anwendung sind an die Schlachter 2000 Übersetzung angelehnt.
              </p>
            </div>
            <div className="text-sm md:text-right flex flex-col justify-between">
              <div>
                <p className="text-stone-300 italic text-lg font-serif">"Das Zeugnis Jesu ist der Geist der Weissagung."</p>
                <p className="text-amber-600 text-xs mt-1 font-bold uppercase tracking-widest">Offenbarung 19,10</p>
              </div>
              <p className="mt-6 text-xs text-slate-600">&copy; {new Date().getFullYear()} • Version 2.0</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};