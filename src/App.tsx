import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { ProphecyList } from './components/ProphecyList';
import { ProphecyDetail } from './components/ProphecyDetail';
import { Stats } from './components/Stats';
import { prophecies } from './services/prophecyData';
import { Info } from 'lucide-react';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-8 relative z-20">
      <Stats prophecies={prophecies} />
      <ProphecyList data={prophecies} />
    </div>
  </>
);

const AboutPage: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-serif font-bold text-slate-900 mb-6 border-b pb-4 border-amber-500">Über dieses Projekt</h1>
    <div className="text-lg text-slate-700 space-y-6 leading-relaxed">
      <p>
        Diese Anwendung dient dazu, die erstaunliche Kohärenz der Bibel aufzuzeigen. 
        Über einen Zeitraum von ca. 1.500 Jahren schrieben über 40 Autoren an der Bibel, und doch weisen die Schriften des Alten Testaments 
        übereinstimmend auf eine kommende Person hin: den Messias.
      </p>
      
      <div>
        <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">Quellen und Inspiration</h3>
        <p>
          Die Zusammenstellung der Prophetien orientiert sich an allgemein bekannten theologischen Listen und Werken von Autoren wie Dr. Roger Liebi.
          Ziel ist nicht theologische Spekulation, sondern die Gegenüberstellung des prophetischen Wortes mit dem historischen Bericht der Evangelien.
        </p>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
        <div className="flex">
          <Info className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0" />
          <p className="text-sm italic">
            "Ihr sucht in der Schrift, denn ihr meint, ihr habt das ewige Leben darin; und sie ist's, die von mir zeugt." 
            <br/><span className="font-bold">- Jesus Christus (Johannes 5,39)</span>
          </p>
        </div>
      </div>
      <p>
        Die App wurde als reine Frontend-Applikation entwickelt, um Datenschutz und Einfachheit zu gewährleisten. Es werden keine Daten auf Servern gespeichert.
      </p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/prophecy/:id" element={<ProphecyDetail data={prophecies} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;