
import React from 'react';
import { Plus, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';

const MOCK_COMPETITORS = [
  {
    id: 'semrush',
    domain: 'semrush.com',
    name: 'Semrush',
    score: 89,
    myScore: 78,
    google: 94,
    myGoogle: 82,
    ai: 85,
    myAi: 71,
    human: 83,
    myHuman: 76,
    trend: 'up',
    trendValue: '+2',
    lastScan: '1 day ago',
    association: 'evident.so',
    color: 'bg-orange-500'
  },
  {
    id: 'moz',
    domain: 'moz.com',
    name: 'Moz',
    score: 81,
    myScore: 78,
    google: 88,
    myGoogle: 82,
    ai: 76,
    myAi: 71,
    human: 72,
    myHuman: 76,
    trend: 'down',
    trendValue: '-1',
    lastScan: '3 days ago',
    association: 'evident.so',
    color: 'bg-blue-600'
  },
  {
    id: 'ahrefs',
    domain: 'ahrefs.com',
    name: 'Ahrefs',
    score: 85,
    myScore: 78,
    google: 91,
    myGoogle: 82,
    ai: 81,
    myAi: 71,
    human: 78,
    myHuman: 76,
    trend: 'up',
    trendValue: '+1',
    lastScan: '2 days ago',
    association: 'evident.so',
    color: 'bg-orange-600'
  }
];

const ComparisonBar = ({ label, myScore, theirScore, colorClass }: { label: string, myScore: number, theirScore: number, colorClass: string }) => {
  const max = 100;
  const myWidth = (myScore / max) * 100;
  const theirWidth = (theirScore / max) * 100;
  const iWin = myScore > theirScore;

  return (
    <div className="mb-3">
      <div className="flex justify-between text-[10px] uppercase tracking-wider text-slate-500 mb-1">
        <span>{label}</span>
        <span className="flex gap-4">
            <span className={iWin ? 'text-cyan-400 font-bold' : ''}>You: {myScore}</span>
            <span className={!iWin ? `${colorClass} font-bold` : ''}>Them: {theirScore}</span>
        </span>
      </div>
      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden flex flex-col gap-0.5">
        <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${myWidth}%` }}></div>
      </div>
      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mt-0.5">
        <div className={`h-full ${colorClass.replace('text-', 'bg-')} rounded-full`} style={{ width: `${theirWidth}%` }}></div>
      </div>
    </div>
  );
};

const Competitors: React.FC = () => {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-50">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white">Competitor Intelligence</h1>
          <p className="text-slate-400 mt-1 text-sm">Track and compare your visibility posture against market rivals.</p>
        </div>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors">
            <Plus size={16} /> Add Competitor
        </button>
      </div>

      {/* Competitors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {MOCK_COMPETITORS.map((comp) => (
          <div 
            key={comp.id}
            className="bg-[#111827]/80 backdrop-blur-xl border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all hover:bg-[#1A1F35] group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${comp.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {comp.name[0]}
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors">{comp.domain}</h3>
                        <div className="text-xs text-slate-500 mt-1">
                            vs. {comp.association}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-slate-400">{comp.myScore}</span>
                        <span className="text-slate-600">/</span>
                        <span className="text-3xl font-bold text-white">{comp.score}</span>
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">You / Them</div>
                </div>
            </div>

            <div className="py-4 border-y border-white/5 mb-4">
                <ComparisonBar label="Human Trust" myScore={comp.myHuman} theirScore={comp.human} colorClass="text-pink-500" />
                <ComparisonBar label="Google Visibility" myScore={comp.myGoogle} theirScore={comp.google} colorClass="text-cyan-400" />
                <ComparisonBar label="AI Visibility" myScore={comp.myAi} theirScore={comp.ai} colorClass="text-violet-500" />
            </div>

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">Trend:</span>
                    <span className={`flex items-center gap-1 text-xs font-bold ${comp.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                        {comp.trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                        {comp.trendValue}
                    </span>
                </div>
                <div className="text-xs text-slate-500">
                    Last scan: {comp.lastScan}
                </div>
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
            <h3 className="font-bold text-slate-300 group-hover:text-white mb-2 transition-colors">Add Competitor</h3>
            <p className="text-sm text-slate-500 text-center max-w-[200px]">
                Know thy enemy. Add competitors to see how your visibility posture compares.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Competitors;
