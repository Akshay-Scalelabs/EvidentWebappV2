
import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NUDGE_MONEY_DATA } from '../constants';
import { LensGauge, DomainRadar } from '../components/Charts';
import ScoringFlowchart from '../components/ScoringFlowchart';
import { TrendingUp, AlertTriangle, CheckCircle2, Activity, GitMerge, ChevronLeft, Zap } from 'lucide-react';

const SiteDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // In a real app, fetch data based on ID. Using mock data for now.
  const { companyName, vertical, stage, epiScore, lenses, clcScore, nudScore, summary, history } = NUDGE_MONEY_DATA;

  // Prepare Radar Data
  const radarData = useMemo(() => {
    const allDomains: any[] = [];
    lenses.forEach(lens => {
      lens.domains.forEach(domain => {
        allDomains.push({
          subject: domain.name.split(' ')[0], // Shorten name for chart
          A: domain.indexScore,
          fullMark: 100
        });
      });
    });
    return allDomains;
  }, [lenses]);

  const getEpiColor = (score: number) => {
    if (score >= 0.75) return "text-emerald-400";
    if (score >= 0.5) return "text-yellow-400";
    return "text-red-400";
  };

  // Calculate Momentum (MoM)
  const latest = history ? history[history.length - 1] : null;
  const prev = history ? history[history.length - 2] : null;
  const momChange = latest && prev ? ((latest.epi - prev.epi) / prev.epi) * 100 : 0;

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6 text-slate-50">
      {/* Header Section */}
      <div className="space-y-4">
        <button 
            onClick={() => navigate('/my-sites')}
            className="flex items-center gap-1 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
        >
            <ChevronLeft size={16} /> Back to My Sites
        </button>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                    {companyName || id}
                    <span className="text-xs font-mono py-1 px-2 rounded border border-white/10 text-slate-400 bg-slate-900/50">
                    {stage}
                    </span>
                </h1>
                <p className="text-slate-400 mt-1">{vertical}</p>
            </div>
            <div className="flex gap-3">
                <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium border border-slate-700 transition-colors">
                    Export PDF
                </button>
                <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-cyan-500/20 transition-colors">
                    Run Re-Scan
                </button>
            </div>
        </div>
      </div>

      {/* Top Level Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* EPI Score Card */}
        <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-slate-400 font-medium text-sm uppercase tracking-wider">Evident Perception Index</h3>
                    <div className={`text-6xl font-bold mt-4 ${getEpiColor(epiScore)}`}>
                        {epiScore.toFixed(2)}
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                        <div className={`flex items-center px-2 py-0.5 rounded text-xs font-bold ${momChange >= 0 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                             {momChange >= 0 ? <TrendingUp size={12} className="mr-1" /> : <Activity size={12} className="mr-1" />}
                             {Math.abs(momChange).toFixed(1)}% MoM
                        </div>
                        <span className="text-xs text-slate-500">Signal Velocity</span>
                    </div>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-xl border border-white/5">
                    <Zap className="text-cyan-400" size={24} />
                </div>
            </div>
            <div className="mt-6 flex gap-4 text-xs border-t border-white/5 pt-4">
                <div className="flex flex-col">
                    <span className="text-slate-500">Clarity Bonus</span>
                    <span className="text-emerald-400 font-mono">+{clcScore}</span>
                </div>
                <div className="flex flex-col border-l border-white/5 pl-4">
                    <span className="text-slate-500">Noise Penalty</span>
                    <span className="text-rose-400 font-mono">-{nudScore}</span>
                </div>
            </div>
        </div>

        {/* Summary Card */}
        <div className="lg:col-span-2 bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
            <div>
                <h3 className="text-slate-400 font-medium text-sm uppercase tracking-wider mb-3">Executive Summary</h3>
                <p className="text-slate-300 leading-relaxed text-sm">
                    {summary}
                </p>
            </div>
            <div className="mt-4 flex gap-2">
                 <div className="flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">
                    <CheckCircle2 size={12} /> Strong ICP Targeting
                 </div>
                 <div className="flex items-center gap-2 px-3 py-1 rounded bg-yellow-500/10 text-yellow-400 text-xs border border-yellow-500/20">
                    <AlertTriangle size={12} /> High Semantic Noise
                 </div>
            </div>
        </div>
      </div>

       {/* Lens Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {lenses.map((lens) => (
            <div key={lens.id} className="bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-slate-200">{lens.name}</h3>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: lens.color }}></div>
                </div>
                <div className="flex justify-center mb-6">
                    <LensGauge score={lens.lisScore} color={lens.color} label="LIS Score" />
                </div>
                <div className="space-y-3">
                    {lens.domains.map(d => (
                        <div key={d.id} className="group">
                            <div className="flex justify-between text-xs text-slate-400 mb-1">
                                <span>{d.name}</span>
                                <span className="font-mono text-white">{d.indexScore}</span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                                <div 
                                    className="h-full rounded-full transition-all duration-500" 
                                    style={{ width: `${d.indexScore}%`, backgroundColor: lens.color, opacity: 0.8 }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}
      </div>

      {/* Scoring Pipeline Visualization */}
      <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 overflow-hidden">
         <div className="flex items-center gap-3 mb-8">
            <GitMerge className="text-cyan-400" />
            <h3 className="text-lg font-semibold text-slate-200">Perception Index Pipeline</h3>
         </div>
         <ScoringFlowchart />
      </div>

      {/* Deep Dive Radar */}
      <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 h-[500px] flex flex-col">
         <h3 className="text-slate-400 font-medium text-sm uppercase tracking-wider mb-4">10-Domain Topography</h3>
         <div className="flex-1 w-full">
             <DomainRadar data={radarData} color="#22d3ee" />
         </div>
      </div>
    </div>
  );
};

export default SiteDetail;
