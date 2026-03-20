import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './views/Home';
import MySites from './views/MySites';
import Competitors from './views/Competitors';
import Benchmarks from './views/Benchmarks';
import Reports from './views/Reports';
import SiteDetail from './views/SiteDetail';
import Methodology from './views/Methodology';
import PersonaCouncil from './views/PersonaCouncil';
import SignalMonitor from './views/SignalMonitor';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-slate-950 text-slate-50 font-sans">
        {/* Sidebar Navigation */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 ml-64 relative">
          <main className="min-h-screen pb-24 bg-slate-950">
            <Routes>
              {/* Platform Level Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/my-sites" element={<MySites />} />
              <Route path="/competitors" element={<Competitors />} />
              <Route path="/benchmarks" element={<Benchmarks />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/methodology" element={<Methodology />} />
              
              {/* Intelligence Routes */}
              <Route path="/persona-council" element={<PersonaCouncil />} />
              <Route path="/signal-monitor" element={<SignalMonitor />} />
              
              {/* Site Level Routes */}
              <Route path="/site/:id" element={<SiteDetail />} />
              
              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          
          {/* Footer / Legal */}
          <footer className="absolute bottom-0 w-full p-6 text-center text-xs text-slate-600 border-t border-slate-900 bg-slate-950">
            Evident Perception Index™ Signal Intelligence Engine • Confidential Analysis
          </footer>
        </div>

        {/* Global Chatbot Overlay */}
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;