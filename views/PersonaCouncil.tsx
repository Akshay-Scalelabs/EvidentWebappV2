
import React, { useState, useRef, useEffect } from 'react';
import { PERSONA_DATA } from '../constants';
import { MessageSquare, Send, User, Sparkles, Mic, PhoneOff, HelpCircle, Target, AlertTriangle, Lightbulb, Plus } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const PersonaCouncil: React.FC = () => {
  const [activePersonaId, setActivePersonaId] = useState(PERSONA_DATA[0].id);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activePersona = PERSONA_DATA.find(p => p.id === activePersonaId)!;

  useEffect(() => {
    // Reset chat when persona changes
    setMessages([
        {
            id: 'init',
            role: 'model',
            text: activePersona.initialMessage,
            timestamp: Date.now()
        }
    ]);
  }, [activePersonaId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;
    
    const userMsg: ChatMessage = {
        id: Date.now().toString(),
        role: 'user',
        text: textToSend,
        timestamp: Date.now()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Create a custom system instruction for the persona
    const personaInstruction = `
        You are simulating a user interview. You are ${activePersona.name}, a ${activePersona.role} at a ${activePersona.companyType}.
        
        **Your Profile:**
        - Bio: ${activePersona.bio}
        - Motivations: ${activePersona.motivations.join(', ')}
        - Pain Points: ${activePersona.painPoints.join(', ')}
        
        **Context:**
        You are evaluating a product called "Nudge Money" (AI for Credit Unions). You are skeptical but open-minded. 
        
        **Behavioral Rules:**
        1. Speak casually but professionally.
        2. Push back on vague answers.
        3. If the user addresses your "Pain Points", show interest.
        4. If they use jargon, get annoyed or ask for clarification.
        5. Keep responses relatively short (2-3 sentences) to simulate a conversation.
    `;

    try {
        const historyWithPersona = [
            { role: 'user', text: `SYSTEM INSTRUCTION: ${personaInstruction}` },
            ...messages.map(m => ({ role: m.role, text: m.text }))
        ];
        
        const response = await sendMessageToGemini(textToSend, historyWithPersona);
        
        const botMsg: ChatMessage = {
            id: (Date.now() + 1).toString(),
            role: 'model',
            text: response.text || "I'm not sure about that.",
            timestamp: Date.now()
        };
        setMessages(prev => [...prev, botMsg]);
    } catch (e) {
        console.error(e);
    } finally {
        setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-950 overflow-hidden">
      {/* Top Bar */}
      <div className="h-16 border-b border-slate-800 bg-slate-900/50 backdrop-blur flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-2">
            <Sparkles className="text-purple-400" size={20} />
            <h1 className="font-bold text-white text-lg">Persona Council</h1>
        </div>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors text-sm">
            <Plus size={16} /> Create Custom Persona
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar: Persona Selection */}
        <div className="w-72 border-r border-slate-800 bg-slate-900 flex flex-col shrink-0">
            <div className="p-4 border-b border-slate-800">
                <p className="text-xs text-slate-400">Simulate sales calls with synthetic ICPs.</p>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {PERSONA_DATA.map(persona => (
                    <button
                        key={persona.id}
                        onClick={() => setActivePersonaId(persona.id)}
                        className={`w-full p-4 rounded-xl border text-left transition-all ${activePersonaId === persona.id ? 'bg-slate-800 border-purple-500/50 shadow-lg shadow-purple-900/20' : 'bg-slate-900 border-slate-800 hover:border-slate-700'}`}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className={`w-10 h-10 rounded-full ${persona.avatarColor} flex items-center justify-center text-white font-bold`}>
                                {persona.name[0]}
                            </div>
                            <div>
                                <div className="font-bold text-slate-200 text-sm">{persona.name}</div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-wider">{persona.role}</div>
                            </div>
                        </div>
                        <div className="text-xs text-slate-400 line-clamp-2">
                            {persona.companyType}
                        </div>
                    </button>
                ))}
            </div>
        </div>

        {/* Middle: Chat Area */}
        <div className="flex-1 flex flex-col relative min-w-0">
            {/* Header */}
            <div className="h-14 border-b border-slate-800 bg-slate-900/30 flex items-center justify-between px-6 shrink-0">
                <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${isTyping ? 'bg-emerald-500 animate-pulse' : 'bg-slate-500'}`}></div>
                    <span className="font-medium text-slate-200">{activePersona.name}</span>
                    <span className="text-slate-600 text-sm">|</span>
                    <span className="text-slate-500 text-sm">{activePersona.companyType}</span>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors" title="Voice Mode">
                        <Mic size={18} />
                    </button>
                    <button className="p-2 text-rose-400 hover:text-rose-300 hover:bg-rose-900/20 rounded-lg transition-colors" title="End Simulation">
                        <PhoneOff size={18} />
                    </button>
                </div>
            </div>

            {/* Chat Stream */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-950">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-2xl p-4 rounded-2xl ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'}`}>
                            <p className="text-sm leading-relaxed">{msg.text}</p>
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-slate-800 p-4 rounded-2xl rounded-bl-none border border-slate-700 flex gap-1">
                            <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-100"></span>
                            <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-200"></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Suggestion Chips & Input */}
            <div className="p-6 bg-slate-900 border-t border-slate-800 shrink-0">
                {/* Suggested Questions */}
                <div className="mb-4">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <Lightbulb size={12} className="text-yellow-500" /> Intelligence Accelerators
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {activePersona.suggestedQuestions.map((q, idx) => (
                            <button 
                                key={idx}
                                onClick={() => handleSend(q)}
                                disabled={isTyping}
                                className="text-xs bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-slate-700 rounded-full px-3 py-1.5 transition-colors disabled:opacity-50 text-left"
                            >
                                {q}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask your own question..."
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl py-4 pl-6 pr-14 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-slate-500 shadow-inner"
                    />
                    <button 
                        onClick={() => handleSend()}
                        disabled={!input.trim() || isTyping}
                        className="absolute right-2 top-2 p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors disabled:opacity-50 disabled:hover:bg-indigo-600"
                    >
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </div>

        {/* Right Sidebar: Persona Dossier */}
        <div className="w-80 border-l border-slate-800 bg-slate-900 p-6 overflow-y-auto shrink-0 hidden xl:block">
            <div className="mb-6 text-center">
                <div className={`w-20 h-20 rounded-full ${activePersona.avatarColor} flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4 shadow-xl`}>
                    {activePersona.name[0]}
                </div>
                <h3 className="text-xl font-bold text-white">{activePersona.name}</h3>
                <p className="text-sm text-slate-400">{activePersona.role}</p>
            </div>

            <div className="space-y-6">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <User size={14} /> Bio & Context
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                        {activePersona.bio}
                    </p>
                </div>

                <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Target size={14} /> Motivations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {activePersona.motivations.map((m, i) => (
                            <span key={i} className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-1 rounded">
                                {m}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <AlertTriangle size={14} /> Pain Points
                    </h4>
                    <ul className="space-y-2">
                        {activePersona.painPoints.map((p, i) => (
                            <li key={i} className="text-sm text-slate-400 flex gap-2 items-start">
                                <span className="text-rose-500 text-xs mt-1">●</span>
                                {p}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PersonaCouncil;
