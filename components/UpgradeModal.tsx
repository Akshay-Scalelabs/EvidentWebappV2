
import React from 'react';
import { X, CheckCircle2, Lock, Zap, Crown } from 'lucide-react';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureName?: string;
}

const UpgradeModal: React.FC<UpgradeModalProps> = ({ isOpen, onClose, featureName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-[#0f172a] border border-slate-700 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="absolute top-4 right-4 z-10">
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white bg-slate-800/50 rounded-full">
            <X size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Value Prop */}
          <div className="p-8 lg:p-12 bg-gradient-to-br from-indigo-900/20 to-slate-900 flex flex-col justify-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] bg-[length:30px_30px]"></div>
             <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-500/30">
                  <Lock size={12} /> Enterprise Feature
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Unlock the full power of Evident.
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {featureName ? `The ${featureName} feature is` : 'Advanced intelligence tools are'} available on our Pro and Enterprise plans. Get deeper signal intelligence and map your competitive advantage.
                </p>
                <div className="flex flex-col gap-4">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                         <Zap size={20} />
                      </div>
                      <div>
                         <h4 className="text-white font-medium">Real-Time Signal Monitoring</h4>
                         <p className="text-sm text-slate-500">Get alerts the moment perception shifts.</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                         <Crown size={20} />
                      </div>
                      <div>
                         <h4 className="text-white font-medium">Persona Labs</h4>
                         <p className="text-sm text-slate-500">Simulate calls with synthetic ICPs.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Side - Pricing */}
          <div className="p-8 lg:p-12 bg-slate-900 flex flex-col">
             <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white">Choose your plan</h3>
                <p className="text-slate-400 text-sm">Cancel anytime.</p>
             </div>

             <div className="space-y-4 flex-1">
                {/* Pro Plan */}
                <div className="p-6 rounded-2xl border border-slate-700 bg-slate-800/30 hover:border-indigo-500/50 transition-all cursor-pointer group relative overflow-hidden">
                   <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-white">Pro</span>
                      <span className="text-xl font-bold text-white">$499<span className="text-sm text-slate-500 font-normal">/mo</span></span>
                   </div>
                   <ul className="space-y-2 text-sm text-slate-400 mb-4">
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-indigo-400" /> Unlimited Deep Dives</li>
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-indigo-400" /> Competitive Matrix</li>
                   </ul>
                   <button className="w-full py-2 rounded-lg bg-slate-700 text-white font-medium group-hover:bg-indigo-600 transition-colors">
                      Start Free Trial
                   </button>
                </div>

                {/* Enterprise Plan */}
                <div className="p-6 rounded-2xl border-2 border-indigo-500 bg-slate-800/50 relative overflow-hidden shadow-lg shadow-indigo-900/20">
                   <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">RECOMMENDED</div>
                   <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-white">Enterprise</span>
                      <span className="text-xl font-bold text-white">Custom</span>
                   </div>
                   <ul className="space-y-2 text-sm text-slate-400 mb-4">
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> API Access</li>
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> Persona Lab Simulations</li>
                      <li className="flex gap-2"><CheckCircle2 size={14} className="text-emerald-400" /> White-Glove Onboarding</li>
                   </ul>
                   <button className="w-full py-2 rounded-lg bg-white text-slate-900 font-bold hover:bg-slate-200 transition-colors">
                      Contact Sales
                   </button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeModal;
