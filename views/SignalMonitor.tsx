import React, { useState } from 'react';
import { Filter, Activity, Clock, AlertTriangle, TrendingUp, Tag, Zap, ShieldAlert } from 'lucide-react';

const MOCK_EVENTS = [
  {
    id: '1',
    timestamp: '10 mins ago',
    competitor: 'Semrush',
    type: 'Product',
    description: 'Launched new AI-powered content generation tool in beta.',
    impact: 'High',
    icon: Zap,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20'
  },
  {
    id: '2',
    timestamp: '2 hours ago',
    competitor: 'Ahrefs',
    type: 'Pricing',
    description: 'Increased base tier pricing by 15% for new customers.',
    impact: 'Medium',
    icon: Tag,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20'
  },
  {
    id: '3',
    timestamp: '5 hours ago',
    competitor: 'Moz',
    type: 'Marketing',
    description: 'Published major industry report on local SEO trends.',
    impact: 'Low',
    icon: Activity,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20'
  },
  {
    id: '4',
    timestamp: '1 day ago',
    competitor: 'Similarweb',
    type: 'Product',
    description: 'Acquired smaller competitor to expand market intelligence data.',
    impact: 'High',
    icon: TrendingUp,
    color: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/20'
  },
  {
    id: '5',
    timestamp: '2 days ago',
    competitor: 'SpyFu',
    type: 'Marketing',
    description: 'Launched new ad campaign targeting enterprise customers.',
    impact: 'Low',
    icon: Activity,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20'
  }
];

const SignalMonitor: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredEvents = filter === 'All' ? MOCK_EVENTS : MOCK_EVENTS.filter(e => e.competitor === filter);

  const getImpactColor = (impact: string) => {
    switch(impact) {
      case 'High': return 'text-rose-400 bg-rose-500/10 border-rose-500/20';
      case 'Medium': return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      case 'Low': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      default: return 'text-slate-400 bg-slate-500/10 border-slate-500/20';
    }
  };

  return (
    <div className="p-6 md:p-8 max-w-5xl mx-auto space-y-8 text-slate-50">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Activity className="text-cyan-400" /> Signal Monitor
          </h1>
          <p className="text-slate-400 mt-1 text-sm">Real-time feed of competitor activities and market shifts.</p>
        </div>
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg p-1">
            <Filter size={16} className="text-slate-400 ml-2" />
            <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-transparent text-sm text-slate-200 focus:outline-none py-1.5 pr-4 pl-2 cursor-pointer"
            >
                <option value="All">All Competitors</option>
                <option value="Semrush">Semrush</option>
                <option value="Ahrefs">Ahrefs</option>
                <option value="Moz">Moz</option>
                <option value="Similarweb">Similarweb</option>
                <option value="SpyFu">SpyFu</option>
            </select>
        </div>
      </div>

      {/* Feed */}
      <div className="space-y-4 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
        {filteredEvents.map((event) => {
            const Icon = event.icon;
            return (
                <div key={event.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    {/* Timeline dot */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-950 bg-slate-900 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-slate-800">
                        <Icon size={20} className={event.color} />
                    </div>
                    
                    {/* Card */}
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-5 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:bg-slate-800/50 transition-colors shadow-xl">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-white">{event.competitor}</span>
                                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                                    {event.type}
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                <Clock size={12} />
                                {event.timestamp}
                            </div>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed mb-4">
                            {event.description}
                        </p>
                        <div className="flex items-center justify-between border-t border-slate-800/50 pt-3">
                            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Impact Score</div>
                            <div className={`text-xs font-bold px-2.5 py-1 rounded border flex items-center gap-1.5 ${getImpactColor(event.impact)}`}>
                                {event.impact === 'High' && <ShieldAlert size={12} />}
                                {event.impact === 'Medium' && <AlertTriangle size={12} />}
                                {event.impact === 'Low' && <Activity size={12} />}
                                {event.impact}
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default SignalMonitor;