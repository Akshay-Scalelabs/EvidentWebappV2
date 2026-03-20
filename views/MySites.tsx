
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, ArrowUpRight, ArrowDownRight, RefreshCw, FileText, Activity } from 'lucide-react';

const MOCK_SITES = [
  {
    id: 'evident',
    domain: 'evident.so',
    name: 'Evident',
    score: 78,
    google: 82,
    ai: 71,
    human: 76,
    trend: 'up',
    trendValue: '+3',
    lastScan: '2 days ago',
    status: 'Active Monitoring',
    color: 'bg-indigo-500'
  },
  {
    id: 'scalelabs',
    domain: 'scalelabs.co',
    name: 'Scale Labs',
    score: 64,
    google: 72,
    ai: 43,
    human: 68,
    trend: 'down',
    trendValue: '-2',
    lastScan: '5 days ago',
    status: 'Active Monitoring',
    color: 'bg-slate-700'
  }
];

const MiniGauge = ({ score, colorClass, label }: { score: number, colorClass: string, label: string }) => {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 40 40">
          <circle
            cx="20"
            cy="20"
            r={radius}
            className="stroke-slate-800"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="20"
            cy="20"
            r={radius}
            className={`stroke-current ${colorClass}`}
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-[10px] font-bold text-white">{score}</span>
      </div>
      <span className="text-[9px] text-slate-500 uppercase tracking-wider">{label}</span>
    </div>
  );
};

const MySites: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-50">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white">My Sites</h1>
          <p className="text-slate-400 mt-1 text-sm">Manage and monitor your digital assets.</p>
        </div>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors">
            <Plus size={16} /> Add Site
        </button>
      </div>

      {/* Sites Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {MOCK_SITES.map((site) => (
          <div 
            key={site.id}
            onClick={() => navigate(`/site/${site.id}`)}
            className="bg-[#111827]/80 backdrop-blur-xl border border-white/5 hover:border-white/10 rounded-2xl p-6 cursor-pointer transition-all hover:bg-[#1A1F35] group"
          >
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${site.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {site.name[0]}
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors">{site.domain}</h3>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs text-slate-400">{site.status}</span>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-3xl font-bold text-cyan-400">{site.score}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Index</div>
                </div>
            </div>

            <div className="flex justify-between items-center py-4 border-y border-white/5 mb-4">
                <MiniGauge score={site.human} colorClass="text-pink-500" label="Human" />
                <MiniGauge score={site.google} colorClass="text-cyan-400" label="Google" />
                <MiniGauge score={site.ai} colorClass="text-violet-500" label="AI" />
            </div>

            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">Trend:</span>
                    <span className={`flex items-center gap-1 text-xs font-bold ${site.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                        {site.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                        {site.trendValue}
                    </span>
                </div>
                <div className="text-xs text-slate-500">
                    Last scan: {site.lastScan}
                </div>
            </div>

            <div className="flex gap-3">
                <button 
                    onClick={(e) => { e.stopPropagation(); /* trigger scan */ }}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors border border-slate-700"
                >
                    <RefreshCw size={14} /> Scan Now
                </button>
                <button 
                    onClick={(e) => { e.stopPropagation(); navigate('/reports'); }}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors border border-slate-700"
                >
                    <FileText size={14} /> View Report
                </button>
            </div>
          </div>
        ))}

        {/* Empty State / Add New Card */}
        <div 
            className="bg-slate-900/30 border-2 border-dashed border-slate-700 hover:border-cyan-500/50 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all group min-h-[300px]"
        >
            <div className="w-12 h-12 rounded-full bg-slate-800 group-hover:bg-cyan-500/20 flex items-center justify-center mb-4 transition-colors">
                <Plus size={24} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </div>
            <h3 className="font-bold text-slate-300 group-hover:text-white mb-2 transition-colors">Add New Site</h3>
            <p className="text-sm text-slate-500 text-center max-w-[200px]">
                Monitor a new domain to see how algorithms, AI, and humans perceive it.
            </p>
        </div>
      </div>
    </div>
  );
};

export default MySites;
