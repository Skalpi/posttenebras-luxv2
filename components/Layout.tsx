import React from 'react';
import { BookOpen, Search, Menu, X, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  // Close menu when route changes
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900 text-stone-100 shadow-md border-b-4 border-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo / Title */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-2 bg-amber-600 rounded-lg group-hover:bg-amber-500 transition-colors">
                <BookOpen className="h-6 w-6 text-slate-900" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wide text-stone-50">Erfüllte Prophetie</span>
                <span className="text-xs text-amber-500 uppercase tracking-widest hidden sm:block">Christus im Alten Testament</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              <Link to="/" className={`hover:text-amber-500 transition-colors ${location.pathname === '/' ? 'text-amber-500 font-semibold' : ''}`}>
                Übersicht
              </Link>
              <Link to="/about" className={`hover:text-amber-500 transition-colors ${location.pathname === '/about' ? 'text-amber-500 font-semibold' : ''}`}>
                Über das Projekt
              </Link>
              <a href="https://posttenebras-lux.de" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-800 rounded border border-slate-700 hover:border-amber-600 transition-colors flex items-center gap-2 text-sm">
                Mehr Ressourcen <ExternalLink size={14} />
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-stone-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-amber-500">
                Übersicht der Prophetien
              </Link>
              <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-amber-500">
                Über das Projekt
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-stone-400 py-8 border-t border-slate-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-stone-100 font-serif font-bold text-lg">Erfüllte Prophetie</h3>
              <p className="text-sm mt-1">Das Zeugnis Jesu ist der Geist der Weissagung. (Offb 19,10)</p>
            </div>
            <div className="text-sm text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Erstellt zur Ehre Gottes.</p>
              <p className="text-xs mt-1 text-slate-500">Die Bibelzitate sind an die Schlachter 2000 angelehnt.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};