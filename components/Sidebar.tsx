import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Sliders, PieChart, BarChart2, Home, Star, BookOpen, Terminal, Users, Crown, Lock, Activity, Globe, TrendingUp } from 'lucide-react';
import UpgradeModal from './UpgradeModal';
import { WATCHLIST_DETAILS } from '../constants';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [showUpgrade, setShowUpgrade] = useState(false);
  
  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/my-sites", icon: Globe, label: "My Sites" },
    { to: "/competitors", icon: LayoutDashboard, label: "Competitors" },
    { to: "/benchmarks", icon: BarChart2, label: "Benchmarks" },
    { to: "/reports", icon: FileText, label: "Reports" },
    { to: "/methodology", icon: BookOpen, label: "Methodology" },
  ];

  const watchlistItems = [
      { id: 'semrush', name: 'semrush.com', color: 'bg-blue-500' },
      { id: 'moz', name: 'moz.com', color: 'bg-emerald-500' },
      { id: 'ahrefs', name: 'ahrefs.com', color: 'bg-rose-500' },
  ];

  return (
    <>
    <UpgradeModal isOpen={showUpgrade} onClose={() => setShowUpgrade(false)} featureName="API Access" />
    
    <div className="w-64 bg-slate-900 border-r border-slate-800 h-screen flex flex-col fixed left-0 top-0 z-50">
      {/* Brand Header */}
      <div className="p-6 flex items-center gap-3">
        <div className="relative w-10 h-10 flex items-center justify-center shrink-0 perspective-1000">
            {/* CSS 3D Atom Logo (Matching Home) */}
            <div className="relative w-full h-full transform-style-3d">
                {/* Core */}
                <div className="absolute inset-0 m-auto w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] z-20"></div>
                
                {/* Ring 1 */}
                <div className="absolute inset-0 m-auto w-full h-full rounded-full border border-emerald-400/50 transform-style-3d" style={{ transform: 'rotateX(70deg) rotateY(0deg)' }}>
                   <div className="absolute inset-0 animate-orbit-slow"><div className="absolute top-0 left-1/2 w-1 h-1 -ml-0.5 -mt-0.5 bg-emerald-400 rounded-full"></div></div>
                </div>
                
                {/* Ring 2 */}
                <div className="absolute inset-0 m-auto w-full h-full rounded-full border border-cyan-400/50 transform-style-3d" style={{ transform: 'rotateX(70deg) rotateY(60deg)' }}>
                   <div className="absolute inset-0 animate-orbit"><div className="absolute top-0 left-1/2 w-1 h-1 -ml-0.5 -mt-0.5 bg-cyan-400 rounded-full"></div></div>
                </div>

                {/* Ring 3 */}
                <div className="absolute inset-0 m-auto w-full h-full rounded-full border border-purple-400/50 transform-style-3d" style={{ transform: 'rotateX(70deg) rotateY(120deg)' }}>
                   <div className="absolute inset-0 animate-orbit-slower"><div className="absolute top-0 left-1/2 w-1 h-1 -ml-0.5 -mt-0.5 bg-purple-400 rounded-full"></div></div>
                </div>
            </div>
        </div>
        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400">
          EVIDENT
        </span>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-2 overflow-y-auto">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 mb-2">Platform</div>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium"
                  : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
              }`
            }
          >
            <item.icon size={18} />
            <span className="text-sm">{item.label}</span>
          </NavLink>
        ))}

        <div className="h-6"></div>

        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 mb-2 flex justify-between items-center">
            <span>Active Scans</span>
            <span className="bg-indigo-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">1</span>
        </div>
        
        {/* Active Deal Card */}
        <div className="mb-4">
             <NavLink 
                to="/site/evident"
                className={({ isActive }) => `block p-3 rounded-xl border transition-all duration-200 group ${isActive || location.pathname.includes('evident') ? 'bg-slate-800 border-indigo-500/50' : 'bg-slate-900 border-slate-800 hover:bg-slate-800'}`}
             >
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-xs shadow-lg">E</div>
                    <div>
                        <div className="text-sm font-bold text-slate-200 group-hover:text-white">evident.so</div>
                        <div className="text-[10px] text-slate-500">Scanning 67%</div>
                    </div>
                </div>
             </NavLink>
        </div>

        <div className="h-2"></div>

        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 mb-2">Watchlist</div>
        <div className="space-y-1">
            {watchlistItems.map((item) => (
                <NavLink 
                    key={item.id} 
                    to={`/site/${item.id}`}
                    className={({ isActive }) => `w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-left group ${isActive ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}
                >
                    <div className={`w-2 h-2 rounded-full ${item.color} group-hover:scale-125 transition-transform`}></div>
                    <span className="text-sm font-medium flex-1">{item.name}</span>
                    <Star size={12} className="opacity-0 group-hover:opacity-100 text-yellow-500 fill-yellow-500 transition-opacity" />
                </NavLink>
            ))}
        </div>

        <div className="h-6"></div>
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-4 mb-2">Intelligence</div>
        <div className="space-y-1">
             <NavLink to="/persona-council" className={({ isActive }) => `flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${isActive ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}>
                <Users size={18} />
                <span className="text-sm">Persona Council</span>
             </NavLink>
             <NavLink to="/signal-monitor" className={({ isActive }) => `flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${isActive ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}>
                <Activity size={18} />
                <span className="text-sm">Signal Monitor</span>
             </NavLink>
             <button 
                onClick={() => setShowUpgrade(true)}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-all duration-200 text-left"
             >
                <Terminal size={18} />
                <span className="text-sm">API Access</span>
             </button>
             <button 
                onClick={() => {}}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-all duration-200 text-left"
             >
                <TrendingUp size={18} />
                <span className="text-sm">AI Analyst</span>
             </button>
        </div>

      </nav>

      <div className="p-4 border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">
                SL
            </div>
            <div className="overflow-hidden">
                <p className="text-sm font-medium text-slate-200 truncate">Scale Labs</p>
                <p className="text-[10px] text-slate-500 truncate">Implementation Partner</p>
            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Sidebar;