
import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ScatterChart, Scatter, ZAxis, ReferenceLine, ReferenceArea
} from 'recharts';

interface RadarProps {
  data: { subject: string; A: number; fullMark: number }[];
  color: string;
}

export const DomainRadar: React.FC<RadarProps> = ({ data, color }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid stroke="#334155" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
        <Radar
          name="Score"
          dataKey="A"
          stroke={color}
          strokeWidth={2}
          fill={color}
          fillOpacity={0.3}
        />
        <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f1f5f9', borderRadius: '0.5rem' }}
            itemStyle={{ color: '#f1f5f9' }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

interface LensGaugeProps {
  score: number; // 0-1
  color: string;
  label: string;
}

export const LensGauge: React.FC<LensGaugeProps> = ({ score, color, label }) => {
  const percentage = Math.round(score * 100);
  // Adjusted radius and viewBox to prevent clipping
  const radius = 45; 
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;
  
  return (
    <div className="relative flex flex-col items-center justify-center w-32 h-32">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
        {/* Background Circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#1e293b"
          strokeWidth="8"
          fill="transparent"
        />
        {/* Progress Circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke={color}
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-2xl font-bold text-white leading-none">{score.toFixed(2)}</span>
      </div>
      <p className="absolute -bottom-2 text-xs font-medium text-slate-400">{label}</p>
    </div>
  );
};

interface CohortScatterProps {
  data: any[];
}

export const CohortScatter: React.FC<CohortScatterProps> = ({ data }) => {
  return (
    <div className="relative w-full h-full">
      {/* HTML Overlay for Labels - Positioned Outside Graph Area */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top Right - Battleground */}
        <div className="absolute top-0 right-0 text-right p-2">
            <span className="text-xs font-bold text-amber-500 block">Battleground</span>
            <span className="text-[10px] text-amber-500/60 block whitespace-nowrap">High Clarity / High Saturation</span>
        </div>
        
        {/* Top Left - Blue Ocean */}
        <div className="absolute top-0 left-16 p-2">
            <span className="text-xs font-bold text-blue-500 block">Blue Ocean</span>
            <span className="text-[10px] text-blue-500/60 block whitespace-nowrap">High Clarity / Low Saturation</span>
        </div>
        
        {/* Bottom Right - Red Ocean */}
        <div className="absolute bottom-0 right-0 text-right p-2">
            <span className="text-xs font-bold text-rose-500 block">Red Ocean</span>
            <span className="text-[10px] text-rose-500/60 block whitespace-nowrap">Low Clarity / High Saturation</span>
        </div>
        
        {/* Bottom Left - Unproven */}
        <div className="absolute bottom-0 left-16 p-2">
            <span className="text-xs font-bold text-slate-500 block">Unproven</span>
            <span className="text-[10px] text-slate-500/60 block whitespace-nowrap">Low Clarity / Low Saturation</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{ top: 50, right: 20, bottom: 50, left: 50 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
          
          {/* Heatmap Zones */}
          <ReferenceArea x1={50} x2={100} y1={0} y2={0.5} fill="#ef4444" fillOpacity={0.05} strokeOpacity={0} />
          <ReferenceArea x1={50} x2={100} y1={0.5} y2={1} fill="#f59e0b" fillOpacity={0.03} strokeOpacity={0} />
          <ReferenceArea x1={0} x2={50} y1={0} y2={0.5} fill="#64748b" fillOpacity={0.03} strokeOpacity={0} />
          <ReferenceArea x1={0} x2={50} y1={0.5} y2={1} fill="#3b82f6" fillOpacity={0.05} strokeOpacity={0} />

          <XAxis 
            type="number" 
            dataKey="x" 
            name="Market Density" 
            unit="%" 
            stroke="#64748b"
            tick={{ fontSize: 10, fill: '#94a3b8' }}
            domain={[0, 100]}
            label={{ value: 'Market Saturation', position: 'insideBottom', fill: '#64748b', offset: -5, fontSize: 11 }}
          />
          <YAxis 
            type="number" 
            dataKey="y" 
            name="EPI Score" 
            stroke="#64748b" 
            tick={{ fontSize: 10, fill: '#94a3b8' }}
            domain={[0, 1]}
            label={{ value: 'EPI Score', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 11, offset: 10 }}
          />

          <Tooltip 
              cursor={{ strokeDasharray: '3 3' }}
              wrapperStyle={{ zIndex: 100 }}
              contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f1f5f9', borderRadius: '0.5rem', fontSize: '12px' }}
              itemStyle={{ color: '#f1f5f9' }}
          />
          <Scatter name="Companies" data={data} fill="#818cf8">
             {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.isFocal ? '#10b981' : '#6366f1'} stroke={entry.isFocal ? '#ffffff' : 'none'} strokeWidth={2} />
             ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

interface CompetitiveGridProps {
  data: { id: string; name: string; presence: number; clarity: number; color: string; epi: number }[];
  onNodeClick?: (id: string) => void;
}

export const CompetitiveGrid: React.FC<CompetitiveGridProps> = ({ data, onNodeClick }) => {
  return (
    <div className="relative w-full h-full">
       {/* HTML Overlay for Labels - Positioned Outside Graph Area */}
       <div className="absolute inset-0 pointer-events-none z-0">
        {/* Top Right - Leaders */}
        <div className="absolute top-0 right-0 text-right p-2">
            <span className="text-xs font-bold text-emerald-500 block">Leaders</span>
            <span className="text-[10px] text-emerald-500/60 block whitespace-nowrap">High Presence / High Clarity</span>
        </div>
        
        {/* Top Left - Hidden Gems */}
        <div className="absolute top-0 left-16 p-2">
            <span className="text-xs font-bold text-blue-500 block">Hidden Gems</span>
            <span className="text-[10px] text-blue-500/60 block whitespace-nowrap">Low Presence / High Clarity</span>
        </div>
        
        {/* Bottom Right - Noise Makers */}
        <div className="absolute bottom-0 right-0 text-right p-2">
            <span className="text-xs font-bold text-yellow-500 block">Noise Makers</span>
            <span className="text-[10px] text-yellow-500/60 block whitespace-nowrap">High Presence / Low Clarity</span>
        </div>
        
        {/* Bottom Left - Ghosts */}
        <div className="absolute bottom-0 left-16 p-2">
            <span className="text-xs font-bold text-slate-500 block">Ghosts</span>
            <span className="text-[10px] text-slate-500/60 block whitespace-nowrap">Low Presence / Low Clarity</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 50, right: 20, bottom: 50, left: 50 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
          <XAxis 
            type="number" 
            dataKey="presence" 
            name="Market Presence" 
            domain={[0, 100]}
            stroke="#64748b"
            tick={{ fontSize: 10, fill: '#94a3b8' }}
            label={{ value: 'Market Presence', position: 'insideBottom', fill: '#64748b', offset: -5, fontSize: 11 }}
          />
          <YAxis 
            type="number" 
            dataKey="clarity" 
            name="Signal Clarity" 
            domain={[0, 100]}
            stroke="#64748b" 
            tick={{ fontSize: 10, fill: '#94a3b8' }}
            label={{ value: 'Signal Clarity', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 11, offset: 10 }}
          />
          <ReferenceLine x={50} stroke="#475569" strokeDasharray="3 3" />
          <ReferenceLine y={50} stroke="#475569" strokeDasharray="3 3" />
          
          <Tooltip 
              cursor={{ strokeDasharray: '3 3' }}
              wrapperStyle={{ zIndex: 100 }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl text-xs z-50">
                      <p className="font-bold text-white mb-1">{data.name}</p>
                      <div className="space-y-0.5">
                        <p className="text-slate-400 flex justify-between gap-4"><span>Clarity:</span> <span className="text-white">{data.clarity}</span></p>
                        <p className="text-slate-400 flex justify-between gap-4"><span>Presence:</span> <span className="text-white">{data.presence}</span></p>
                        <p className="text-slate-400 flex justify-between gap-4"><span>EPI:</span> <span className="text-white">{data.epi}</span></p>
                      </div>
                      <p className="mt-2 text-[10px] text-indigo-400">Click to analyze</p>
                    </div>
                  );
                }
                return null;
              }}
          />
          <Scatter name="Competitors" data={data} onClick={(e) => onNodeClick && onNodeClick(e.payload.id)}>
             {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color} 
                  stroke="#fff" 
                  strokeWidth={1} 
                  className="cursor-pointer hover:opacity-80 transition-opacity" 
                  style={{ filter: 'drop-shadow(0px 0px 4px rgba(255,255,255,0.2))' }}
                />
             ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
