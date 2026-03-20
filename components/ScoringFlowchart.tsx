
import React, { useState } from 'react';
import { NUDGE_MONEY_DATA } from '../constants';
import { ChevronRight, Info, Layers, Activity, Cpu } from 'lucide-react';

interface FlowNodeProps {
  title: string;
  score: number | string;
  color: string;
  children?: React.ReactNode;
  isActive?: boolean;
  isDimmed?: boolean;
  onClick?: (e?: React.MouseEvent) => void;
  description?: string;
  type?: 'epi' | 'lens' | 'domain' | 'cluster';
}

const FlowNode: React.FC<FlowNodeProps> = ({ title, score, color, children, isActive, isDimmed, onClick, description, type }) => {
  const Icons: any = { human: Layers, algorithmic: Activity, machine: Cpu };
  let IconComponent = null;
  if (type === 'lens') {
    if (title.includes('Human')) IconComponent = Icons.human;
    else if (title.includes('Algorithmic')) IconComponent = Icons.algorithmic;
    else if (title.includes('Machine')) IconComponent = Icons.machine;
  }

  return (
    <div className={`flex flex-col items-center w-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isDimmed ? 'opacity-40 grayscale blur-[0.5px] hover:opacity-70 hover:grayscale-0 hover:blur-0' : 'opacity-100'}`}>
      <div 
        onClick={onClick}
        className={`
          relative cursor-pointer transition-all duration-300 border w-full backdrop-blur-md overflow-visible group z-10
          ${isActive ? 'ring-1 ring-offset-1 ring-offset-slate-950 shadow-lg scale-[1.01]' : 'hover:bg-slate-800/80 hover:border-slate-600'}
          ${type === 'epi' ? 'w-48 h-48 rounded-full flex flex-col justify-center items-center mb-4 bg-gradient-to-b from-slate-900 to-slate-950 border-slate-700' : ''}
          ${type === 'lens' ? 'p-5 rounded-2xl mb-3 bg-slate-800/95 border-slate-700' : ''}
          ${type === 'domain' ? 'p-4 rounded-xl mb-3 text-left bg-slate-800/60 border-slate-700/50' : ''}
          ${type === 'cluster' ? 'p-3 rounded-lg text-sm border-l-4 bg-slate-900/40 border-y border-r border-slate-800/50' : ''}
        `}
        style={{ 
          borderColor: isActive ? color : undefined,
          borderLeftColor: type === 'cluster' ? color : isActive ? color : undefined,
          boxShadow: isActive ? `0 0 15px ${color}20` : undefined
        }}
      >
        {description && type !== 'epi' && (
           <div className={`absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity ${type === 'cluster' ? 'top-1.5 right-1.5' : 'top-3 right-3'}`} onClick={(e) => e.stopPropagation()}>
             <div className="relative group/tooltip">
                <Info size={type === 'cluster' ? 14 : 16} className="text-slate-500 hover:text-slate-300" />
                <div className="hidden group-hover/tooltip:block bg-slate-950 text-xs p-3 rounded-lg shadow-xl border border-slate-700 absolute bottom-full right-0 w-64 mb-2 text-slate-300 pointer-events-none z-[60] leading-relaxed">
                  {description}
                </div>
             </div>
           </div>
        )}

        {type === 'epi' && (
          <>
            <div className="text-[11px] text-slate-500 uppercase tracking-widest font-bold mb-2">EPI Score</div>
            <div className="text-5xl font-bold tracking-tight" style={{ color }}>{score}</div>
            <div className="mt-3 text-[10px] text-slate-400 font-medium bg-slate-800 px-3 py-1 rounded-full border border-slate-700/50">Click to Inspect</div>
          </>
        )}

        {type === 'lens' && (
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
               <div className="p-2 rounded-lg bg-slate-900/50 border border-slate-700/50">
                 {IconComponent && <IconComponent size={20} style={{ color }} />}
               </div>
               <span className="font-bold text-slate-200 text-lg whitespace-nowrap">{title}</span>
            </div>
            <div className="flex flex-col items-end pl-2">
                <span className="font-mono font-bold text-2xl" style={{ color }}>{score}</span>
                <span className="text-[10px] text-slate-500 uppercase">LIS Score</span>
            </div>
          </div>
        )}

        {type === 'domain' && (
          <div className="flex justify-between items-center">
             <div className="min-w-0 flex-1 mr-4">
                <span className="text-slate-200 text-base font-medium block truncate" title={title}>{title}</span>
                <span className="text-xs text-slate-500 truncate block mt-0.5">{description}</span>
             </div>
             <span className="font-mono text-lg font-bold shrink-0" style={{ color }}>{score}</span>
          </div>
        )}

        {type === 'cluster' && (
           <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 min-w-0 flex-1 mr-2">
                <div className={`transition-transform duration-300 shrink-0 ${isActive ? 'rotate-90' : ''}`}>
                    <ChevronRight size={14} className="text-slate-500"/>
                </div>
                <span className="text-slate-300 font-medium truncate text-sm" title={title}>{title}</span>
              </div>
              <span className={`font-mono font-bold shrink-0 ${Number(score) < 70 ? 'text-rose-400' : Number(score) > 85 ? 'text-emerald-400' : 'text-indigo-300'}`}>{score}</span>
           </div>
        )}

        {/* Micro-Factors Expansion */}
        {type === 'cluster' && (
           <div className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-slate-700/30' : 'grid-rows-[0fr] opacity-0'}`}>
             <div className="min-h-0">
                 <div className="flex justify-between items-center mb-2 px-1">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Micro-Factors</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">SIU</span>
                 </div>
                 <div className="space-y-1">
                    {children}
                 </div>
             </div>
           </div>
        )}
      </div>

      {/* Connecting Lines & Children */}
      {['epi', 'lens', 'domain'].includes(type || '') && (
         <div className={`w-full grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="min-h-0 flex flex-col items-center">
                {/* Vertical Line */}
                <div 
                  className={`w-0.5 h-6 mb-2 transition-colors duration-500 ${isActive ? '' : 'bg-slate-800'}`}
                  style={{ backgroundColor: isActive ? color : undefined }}
                ></div>
                
                {/* Children Wrapper */}
                <div 
                    className={`w-full ${type === 'epi' ? 'grid grid-cols-1 gap-4 lg:gap-6' : 'pl-4 lg:pl-8 border-l-2 ml-0.5 space-y-2 lg:space-y-3'}`}
                    style={{ 
                      borderColor: type !== 'epi' ? (isActive ? color : '#1e293b') : undefined,
                      marginLeft: type === 'epi' ? 0 : '1px' // Fine tune alignment
                    }}
                >
                    {children}
                </div>
            </div>
         </div>
      )}
    </div>
  );
};

const ScoringFlowchart: React.FC = () => {
  const [activeLens, setActiveLens] = useState<string | null>('human');
  const [activeDomain, setActiveDomain] = useState<string | null>('d1');
  const [activeCluster, setActiveCluster] = useState<string | null>(null);

  const epiColor = NUDGE_MONEY_DATA.epiScore > 0.7 ? '#10b981' : '#f59e0b';

  const handleLensClick = (id: string) => {
    setActiveLens(id);
    setActiveDomain(null); 
    setActiveCluster(null);
  };

  const handleDomainClick = (id: string) => {
    setActiveDomain(id);
    setActiveCluster(null);
  };

  return (
    <div className="w-full overflow-x-auto pb-12 pt-8">
      <div className="min-w-[600px] max-w-[1000px] mx-auto flex flex-col items-center px-4">
        <FlowNode 
          title="Evident Perception Index" 
          score={NUDGE_MONEY_DATA.epiScore.toFixed(2)}
          color={epiColor}
          type="epi"
          isActive={true}
        >
           {NUDGE_MONEY_DATA.lenses.map((lens) => (
             <FlowNode
               key={lens.id}
               title={lens.name}
               score={lens.lisScore.toFixed(2)}
               color={lens.color}
               type="lens"
               isActive={activeLens === lens.id}
               isDimmed={activeLens !== null && activeLens !== lens.id}
               onClick={() => handleLensClick(lens.id)}
               description={lens.description}
             >
               {lens.domains.map((domain) => (
                 <FlowNode
                   key={domain.id}
                   title={domain.name}
                   score={domain.indexScore}
                   color={lens.color}
                   type="domain"
                   isActive={activeDomain === domain.id}
                   isDimmed={activeDomain !== null && activeDomain !== domain.id}
                   onClick={(e) => { e?.stopPropagation(); handleDomainClick(domain.id); }}
                   description={domain.description}
                 >
                   {domain.clusters.map((cluster) => (
                     <FlowNode
                       key={cluster.id}
                       title={cluster.name}
                       score={cluster.avgSiu}
                       color={lens.color}
                       type="cluster"
                       isActive={activeCluster === cluster.id}
                       isDimmed={activeCluster !== null && activeCluster !== cluster.id}
                       onClick={(e) => { e?.stopPropagation(); setActiveCluster(activeCluster === cluster.id ? null : cluster.id); }}
                       description="Aggregation of constituent micro-factors"
                     >
                        {cluster.microFactors?.map((mf) => (
                            <div key={mf.id} className="flex justify-between items-center text-xs py-2 px-2 hover:bg-slate-800/50 rounded transition-colors group/mf border border-transparent hover:border-slate-700/50">
                              <div className="flex items-center gap-2 flex-1 min-w-0 mr-3 overflow-hidden">
                                {mf.description && (
                                  <div className="relative group/tip shrink-0">
                                      <Info size={12} className="text-slate-600 group-hover/mf:text-indigo-400 cursor-help transition-colors" />
                                      <div className="hidden group-hover/tip:block fixed z-[100] bg-slate-950 text-xs p-3 rounded-lg shadow-xl border border-slate-700 w-64 pointer-events-none mt-2 transform -translate-y-full">
                                          <p className="font-bold mb-1 text-white">{mf.name}</p>
                                          <p className="text-slate-400">{mf.description}</p>
                                      </div>
                                  </div>
                                )}
                                <span className="text-slate-400 group-hover/mf:text-slate-200 font-medium truncate" title={mf.name}>{mf.name}</span>
                              </div>
                              <div className="flex items-center gap-2 shrink-0">
                                <span className={`font-mono font-bold text-[10px] px-1.5 py-0.5 rounded min-w-[28px] text-center ${mf.siu < 70 ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : mf.siu > 85 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20'}`}>
                                    {mf.siu}
                                </span>
                              </div>
                            </div>
                        ))}
                     </FlowNode>
                   ))}
                 </FlowNode>
               ))}
             </FlowNode>
           ))}
        </FlowNode>
      </div>
    </div>
  );
};

export default ScoringFlowchart;
