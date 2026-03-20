
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layers, Activity, Cpu, ChevronDown, ArrowRight, CheckCircle2, Zap, Search, Scale, Microscope } from 'lucide-react';

const Methodology: React.FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 'philosophy',
      title: 'The Thesis',
      icon: Scale,
      color: 'text-indigo-400',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Perception is an Asset Class</h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            In the modern digital economy, a company's "External Surface Area"—how it is understood by humans, algorithms, and machines—is not just marketing. It is infrastructure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                <h4 className="font-bold text-white mb-2">Traditional Intelligence</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex gap-2"><span className="text-slate-600">✗</span> Financials (Lagging Indicator)</li>
                    <li className="flex gap-2"><span className="text-slate-600">✗</span> Product Demo (Internal View)</li>
                    <li className="flex gap-2"><span className="text-slate-600">✗</span> Founder Pitch (Subjective)</li>
                </ul>
            </div>
            <div className="p-4 rounded-xl bg-indigo-900/20 border border-indigo-500/30">
                <h4 className="font-bold text-indigo-200 mb-2">Evident Intelligence</h4>
                <ul className="space-y-2 text-sm text-indigo-100">
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Buyer Clarity (Leading Indicator)</li>
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> Algorithmic Reach (External View)</li>
                    <li className="flex gap-2"><CheckCircle2 size={16} className="text-emerald-400" /> AI Legibility (Future Proofing)</li>
                </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'lenses',
      title: 'The 3 Lenses',
      icon: Layers,
      color: 'text-emerald-400',
      content: (
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-white">Triangulating Truth</h2>
          <p className="text-lg text-slate-300">
            We don't just scrape data. We simulate the three discrete "eyes" that view a modern company.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="group p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Layers className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Human Lens</h3>
                <p className="text-sm text-slate-400 mb-4">Does the buyer understand the value proposition in &#60;5 seconds?</p>
                <div className="space-y-2">
                    <div className="text-xs font-mono bg-slate-950 p-2 rounded text-emerald-300 border border-slate-800">
                        Metrics: ICP Clarity, Friction Index, Narrative Cohesion
                    </div>
                </div>
            </div>

            <div className="group p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-indigo-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Activity className="text-indigo-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Algorithmic Lens</h3>
                <p className="text-sm text-slate-400 mb-4">Can the market find the company in the noise?</p>
                <div className="space-y-2">
                    <div className="text-xs font-mono bg-slate-950 p-2 rounded text-indigo-300 border border-slate-800">
                        Metrics: SERP Dominance, Authority Signal, Distribution
                    </div>
                </div>
            </div>

            <div className="group p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-rose-500/50 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-rose-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Cpu className="text-rose-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Machine Lens</h3>
                <p className="text-sm text-slate-400 mb-4">Do AI agents correctly classify and recommend the entity?</p>
                <div className="space-y-2">
                    <div className="text-xs font-mono bg-slate-950 p-2 rounded text-rose-300 border border-slate-800">
                        Metrics: Entity Stability, Hallucination Risk, Retrieval
                    </div>
                </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'math',
      title: 'The EPM-9™ Formula',
      icon: Microscope,
      color: 'text-rose-400',
      content: (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">Precision Scoring</h2>
            <p className="text-lg text-slate-300">
                The Evident Perception Index (EPI) is not a black box. It is a weighted algorithm derived from 121 micro-factors.
            </p>

            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-2xl md:text-4xl font-mono font-bold">
                    <div className="flex flex-col items-center group">
                        <span className="text-white">LIS<span className="text-xs align-top opacity-50">avg</span></span>
                        <span className="text-xs font-sans font-normal text-slate-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Lens Scores</span>
                    </div>
                    <span className="text-slate-600">+</span>
                    <div className="flex flex-col items-center group">
                        <span className="text-emerald-400">0.3(CLC)</span>
                        <span className="text-xs font-sans font-normal text-emerald-500/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Coherence Bonus</span>
                    </div>
                    <span className="text-slate-600">-</span>
                    <div className="flex flex-col items-center group">
                        <span className="text-rose-400">0.3(NUD)</span>
                        <span className="text-xs font-sans font-normal text-rose-500/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Noise Penalty</span>
                    </div>
                    <span className="text-slate-600">=</span>
                    <div className="flex flex-col items-center">
                        <span className="text-white bg-indigo-600 px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(79,70,229,0.5)]">EPI</span>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                    <strong className="text-white block mb-1">Why CLC (Cross-Lens Correlation) Matters</strong>
                    <p className="text-slate-400">
                        Market leaders tell the same story to customers, partners, and algorithms. High CLC predicts lower CAC and faster sales cycles.
                    </p>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
                    <strong className="text-white block mb-1">Why NUD (Noise-Uniqueness) Matters</strong>
                    <p className="text-slate-400">
                        If a company sounds like everyone else, they are invisible. NUD quantifies semantic distinctiveness. High NUD = Commodity Trap.
                    </p>
                </div>
            </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-20 pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex min-h-screen">
        {/* Left Navigation Rail */}
        <div className="w-1/3 hidden lg:flex flex-col justify-center p-12 sticky top-0 h-screen border-r border-slate-800/50 backdrop-blur-sm z-10">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Methodology</h1>
                <p className="text-slate-400">The science behind the signal.</p>
            </div>
            
            <div className="space-y-6 relative">
                {/* Connecting Line */}
                <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-800 -z-10"></div>
                
                {steps.map((step, idx) => {
                    const isActive = activeStep === idx;
                    return (
                        <div 
                            key={step.id}
                            onClick={() => setActiveStep(idx)}
                            className={`group flex items-center gap-4 cursor-pointer transition-all duration-300 ${isActive ? 'translate-x-2' : 'hover:translate-x-1'}`}
                        >
                            <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center bg-[#020617] transition-all duration-300 ${isActive ? `border-${step.color.split('-')[1]}-500 scale-110 shadow-[0_0_10px_rgba(255,255,255,0.1)]` : 'border-slate-700 group-hover:border-slate-500'}`}>
                                <step.icon size={18} className={isActive ? step.color : 'text-slate-500'} />
                            </div>
                            <div>
                                <h4 className={`font-semibold transition-colors ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>
                                    {step.title}
                                </h4>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-12">
                <button 
                    onClick={() => navigate('/my-sites')}
                    className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors group"
                >
                    Explore the Platform <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 p-8 lg:p-24 flex flex-col justify-center relative">
             <div className="absolute top-8 right-8 lg:hidden">
                <button onClick={() => navigate('/')} className="text-slate-500">Close</button>
             </div>

             <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 key={activeStep}">
                <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                    <span className="text-indigo-500">0{activeStep + 1}</span> / 0{steps.length}
                </div>
                
                {steps[activeStep].content}
                
                <div className="flex gap-4 mt-12 lg:hidden">
                    <button 
                        disabled={activeStep === 0}
                        onClick={() => setActiveStep(prev => prev - 1)}
                        className="px-4 py-2 rounded bg-slate-800 text-slate-300 disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <button 
                        disabled={activeStep === steps.length - 1}
                        onClick={() => setActiveStep(prev => prev + 1)}
                        className="px-4 py-2 rounded bg-indigo-600 text-white disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology;
    