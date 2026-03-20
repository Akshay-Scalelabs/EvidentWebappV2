
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Globe, Radio, Sparkles, Bell, Settings, Plus, ArrowUpRight, ArrowDownRight, FileText, Activity } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMousePosition({
        x: (clientX - centerX) / centerX,
        y: (clientY - centerY) / centerY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0E1A] overflow-hidden text-slate-50">
      {/* Living Background */}
      <div className="absolute inset-0 grid-bg animate-grid-flow pointer-events-none opacity-20"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] animate-aurora mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px] animate-float-delayed mix-blend-screen pointer-events-none"></div>
      
      <div className="relative z-10 p-8 max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center">
            <div className="text-sm text-slate-400 font-medium">Home</div>
            <div className="flex items-center gap-4">
                <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors">
                    <Plus size={16} /> New Scan
                </button>
                <button className="p-2 text-slate-400 hover:text-white transition-colors">
                    <Bell size={20} />
                </button>
                <button className="p-2 text-slate-400 hover:text-white transition-colors">
                    <Settings size={20} />
                </button>
            </div>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Copy */}
            <div className="space-y-8 relative z-20">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/50 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-lg backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    Signal Intelligence
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                    Make Visibility <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 animate-pulse-glow">
                        Evident.
                    </span>
                </h1>
                
                <p className="text-lg text-slate-400 leading-relaxed max-w-xl border-l-2 border-cyan-500/30 pl-6">
                    The modern web is noisy. We decode the <strong>Signal Triad</strong>—Human Trust, Google Visibility, and AI Discoverability—to reveal your true visibility posture and what's costing you customers.
                </p>
                
                <div className="flex flex-wrap gap-4 pt-4">
                    <button 
                        onClick={() => navigate('/my-sites')}
                        className="group relative bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-semibold shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <span className="flex items-center gap-3 relative z-10">
                            Run New Scan <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                    
                    <button 
                        onClick={() => navigate('/methodology')}
                        className="px-8 py-4 rounded-xl text-slate-300 font-medium border border-slate-700 hover:bg-slate-800/50 hover:text-white transition-all flex items-center gap-2"
                    >
                        <ShieldCheck size={18} /> Methodology
                    </button>
                </div>
            </div>

            {/* 3D Atomic Engine Visualizer (CSS-Based) */}
            <div className="relative h-[400px] w-full perspective-1000 flex items-center justify-center z-10">
                <div 
                    className="relative w-[280px] h-[280px] transform-style-3d transition-transform duration-100 ease-out"
                    style={{ 
                        transform: `rotateX(${mousePosition.y * -5}deg) rotateY(${mousePosition.x * 5}deg)` 
                    }}
                >
                    {/* Nucleus */}
                    <div className="absolute inset-0 m-auto w-28 h-28 rounded-full bg-gradient-to-br from-slate-800 via-slate-900 to-black shadow-[0_0_60px_rgba(255,255,255,0.1)] z-20 flex flex-col items-center justify-center transform-style-3d border border-slate-700">
                         <span className="text-white font-bold text-4xl tracking-tight drop-shadow-md">67</span>
                         <span className="text-slate-400 text-[10px] uppercase tracking-widest mt-1">Index</span>
                    </div>

                    {/* Ring 1: Human Trust (Magenta) - Tilted 60deg */}
                    <div className="absolute inset-0 m-auto w-full h-full rounded-full border border-pink-500/30 transform-style-3d"
                         style={{ transform: 'rotateX(70deg) rotateY(0deg)' }}>
                         <div className="absolute inset-0 animate-orbit-slow transform-style-3d">
                             <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,1)]"></div>
                         </div>
                    </div>

                    {/* Ring 2: Google Visibility (Cyan) - Tilted 60deg */}
                    <div className="absolute inset-0 m-auto w-full h-full rounded-full border border-cyan-400/30 transform-style-3d"
                         style={{ transform: 'rotateX(70deg) rotateY(60deg)' }}>
                         <div className="absolute inset-0 animate-orbit transform-style-3d">
                             <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,1)]"></div>
                         </div>
                    </div>

                    {/* Ring 3: AI Visibility (Violet) - Tilted 120deg */}
                    <div className="absolute inset-0 m-auto w-full h-full rounded-full border border-violet-500/30 transform-style-3d"
                         style={{ transform: 'rotateX(70deg) rotateY(120deg)' }}>
                         <div className="absolute inset-0 animate-orbit-slower transform-style-3d">
                             <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 bg-violet-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,1)]"></div>
                         </div>
                    </div>
                    
                    {/* Floating Labels */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 p-2 glass-panel rounded-lg animate-float z-30 border-t-2 border-pink-500 transform translate-z-20">
                        <div className="text-[10px] font-bold text-pink-400 uppercase tracking-widest">Human Trust</div>
                    </div>
                    
                    <div className="absolute bottom-4 -left-8 p-2 glass-panel rounded-lg animate-float-delayed z-30 border-l-2 border-cyan-400 transform translate-z-20">
                        <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Google Visibility</div>
                    </div>

                    <div className="absolute bottom-4 -right-8 p-2 glass-panel rounded-lg animate-pulse-glow z-30 border-r-2 border-violet-500 transform translate-z-20">
                        <div className="text-[10px] font-bold text-violet-400 uppercase tracking-widest">AI Visibility</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
                { 
                    icon: Globe, 
                    color: 'text-cyan-400', 
                    title: 'Universal Benchmarking', 
                    desc: 'Compare any website against industry benchmarks normalized by vertical, region, and business size.' 
                },
                { 
                    icon: Radio, 
                    color: 'text-pink-400', 
                    title: 'Signal Velocity', 
                    desc: 'Track how your visibility posture changes over time. Detect score movements before they impact revenue.' 
                },
                { 
                    icon: Sparkles, 
                    color: 'text-violet-400', 
                    title: 'AI Signal Analyst', 
                    desc: 'Ask questions about your signal data in natural language. Generate reports and get fix recommendations.' 
                }
            ].map((feature, idx) => (
                <div key={idx} className="group bg-[#111827]/80 backdrop-blur-xl p-6 rounded-2xl hover:bg-[#1A1F35] transition-all duration-300 border border-white/5 hover:border-white/10">
                    <div className={`w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                        <feature.icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        {feature.desc}
                    </p>
                </div>
            ))}
        </div>

        {/* Score Overview Panel */}
        <div className="bg-[#111827]/80 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden">
            <div className="p-6 border-b border-white/5">
                <h2 className="text-lg font-bold">Score Overview</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="text-slate-400 bg-slate-900/50">
                        <tr>
                            <th className="px-6 py-4 font-medium">Site</th>
                            <th className="px-6 py-4 font-medium">Perception Index™</th>
                            <th className="px-6 py-4 font-medium">Google</th>
                            <th className="px-6 py-4 font-medium">AI</th>
                            <th className="px-6 py-4 font-medium">Human</th>
                            <th className="px-6 py-4 font-medium">Trend</th>
                            <th className="px-6 py-4 font-medium">Last Scan</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        <tr className="hover:bg-white/5 transition-colors cursor-pointer" onClick={() => navigate('/site/evident')}>
                            <td className="px-6 py-4 font-medium text-white flex items-center gap-3">
                                <div className="w-6 h-6 rounded bg-indigo-500 flex items-center justify-center text-xs font-bold">E</div>
                                evident.so
                            </td>
                            <td className="px-6 py-4"><span className="text-cyan-400 font-bold text-lg">78</span></td>
                            <td className="px-6 py-4 text-green-400">82</td>
                            <td className="px-6 py-4 text-cyan-400">71</td>
                            <td className="px-6 py-4 text-cyan-400">76</td>
                            <td className="px-6 py-4 text-green-400 flex items-center gap-1"><ArrowUpRight size={14}/> +3</td>
                            <td className="px-6 py-4 text-slate-400">2 days ago</td>
                        </tr>
                        <tr className="hover:bg-white/5 transition-colors cursor-pointer" onClick={() => navigate('/site/scalelabs')}>
                            <td className="px-6 py-4 font-medium text-white flex items-center gap-3">
                                <div className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-xs font-bold">S</div>
                                scalelabs.co
                            </td>
                            <td className="px-6 py-4"><span className="text-cyan-400 font-bold text-lg">64</span></td>
                            <td className="px-6 py-4 text-cyan-400">72</td>
                            <td className="px-6 py-4 text-amber-500">43</td>
                            <td className="px-6 py-4 text-cyan-400">68</td>
                            <td className="px-6 py-4 text-red-400 flex items-center gap-1"><ArrowDownRight size={14}/> -2</td>
                            <td className="px-6 py-4 text-slate-400">5 days ago</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activity Feed */}
            <div className="bg-[#111827]/80 backdrop-blur-xl rounded-2xl border border-white/5 p-6">
                <h2 className="text-lg font-bold mb-6">Recent Activity</h2>
                <div className="space-y-6">
                    {[
                        { text: "Scan completed: evident.so — Score: 78 (+3)", time: "2 days ago", icon: Radio, color: "text-cyan-400" },
                        { text: "Competitor alert: semrush.com improved AI Visibility by +8", time: "3 days ago", icon: Bell, color: "text-amber-400" },
                        { text: "New finding: Critical — Your FAQ content isn't being cited by AI systems", time: "3 days ago", icon: ShieldCheck, color: "text-red-400" },
                        { text: "Report generated: Q1 2026 Visibility Report", time: "1 week ago", icon: FileText, color: "text-violet-400" },
                        { text: "Watchlist update: moz.com score dropped to 81", time: "1 week ago", icon: Activity, color: "text-pink-400" },
                    ].map((activity, i) => (
                        <div key={i} className="flex gap-4">
                            <div className={`mt-1 ${activity.color}`}>
                                <activity.icon size={16} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-200">{activity.text}</p>
                                <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Top Findings */}
            <div className="bg-[#111827]/80 backdrop-blur-xl rounded-2xl border border-white/5 p-6">
                <h2 className="text-lg font-bold mb-6">Top Findings (Priority Fixes)</h2>
                <div className="space-y-4">
                    {[
                        { severity: "CRITICAL", title: "AI systems cannot accurately describe your services", lens: "AI Lens", color: "bg-red-500/20 text-red-400 border-red-500/30" },
                        { severity: "CRITICAL", title: "Google Business Profile category mismatch", lens: "Google Lens", color: "bg-red-500/20 text-red-400 border-red-500/30" },
                        { severity: "HIGH", title: "No trust signals above fold on mobile", lens: "Human Lens", color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
                        { severity: "HIGH", title: "Review velocity 4x below nearest competitor", lens: "Human + Google", color: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
                        { severity: "MEDIUM", title: "Missing structured FAQ content", lens: "AI Lens", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
                    ].map((finding, i) => (
                        <div key={i} className="p-4 rounded-xl border border-white/5 bg-slate-900/50 hover:bg-slate-800 transition-colors">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${finding.color}`}>
                                            {finding.severity}
                                        </span>
                                        <span className="text-xs text-slate-500">{finding.lens}</span>
                                    </div>
                                    <p className="text-sm font-medium text-slate-200">{finding.title}</p>
                                </div>
                                <button className="text-xs text-cyan-400 hover:text-cyan-300 whitespace-nowrap">
                                    View Details →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
