
import React from 'react';
import { Plus, FileText, Download, Eye, Clock, CheckCircle2, Loader2 } from 'lucide-react';

const MOCK_REPORTS = [
  {
    id: '1',
    name: 'Evident vs Semrush - Q3 Visibility',
    type: 'Competitive Analysis',
    date: 'Oct 24, 2023',
    status: 'Ready',
    size: '2.4 MB'
  },
  {
    id: '2',
    name: 'Evident Deep Dive - Core Domains',
    type: 'Site Deep Dive',
    date: 'Oct 20, 2023',
    status: 'Ready',
    size: '4.1 MB'
  },
  {
    id: '3',
    name: 'Fintech SEO Landscape 2024',
    type: 'Industry Benchmark',
    date: 'Oct 15, 2023',
    status: 'Ready',
    size: '8.7 MB'
  },
  {
    id: '4',
    name: 'Scale Labs Initial Scan',
    type: 'Site Deep Dive',
    date: 'Just now',
    status: 'Generating',
    size: '--'
  }
];

const Reports: React.FC = () => {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8 text-slate-50">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white">Reports</h1>
          <p className="text-slate-400 mt-1 text-sm">Access and generate detailed intelligence reports.</p>
        </div>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors">
            <Plus size={16} /> Generate New Report
        </button>
      </div>

      {/* Reports Table */}
      <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-slate-900/50 text-slate-400 text-xs uppercase tracking-wider border-b border-white/5">
                        <th className="p-4 font-medium">Report Name</th>
                        <th className="p-4 font-medium">Type</th>
                        <th className="p-4 font-medium">Date Generated</th>
                        <th className="p-4 font-medium">Status</th>
                        <th className="p-4 font-medium text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                    {MOCK_REPORTS.map((report) => (
                        <tr key={report.id} className="hover:bg-white/[0.02] transition-colors group">
                            <td className="p-4">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${report.status === 'Generating' ? 'bg-slate-800 text-slate-400' : 'bg-cyan-500/10 text-cyan-400'}`}>
                                        <FileText size={16} />
                                    </div>
                                    <span className="font-medium text-slate-200 group-hover:text-white transition-colors">{report.name}</span>
                                </div>
                            </td>
                            <td className="p-4 text-sm text-slate-400">{report.type}</td>
                            <td className="p-4 text-sm text-slate-400">
                                <div className="flex items-center gap-1.5">
                                    <Clock size={14} className="text-slate-500" />
                                    {report.date}
                                </div>
                            </td>
                            <td className="p-4">
                                {report.status === 'Ready' ? (
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        <CheckCircle2 size={12} /> Ready
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                        <Loader2 size={12} className="animate-spin" /> Generating...
                                    </span>
                                )}
                            </td>
                            <td className="p-4 text-right">
                                <div className="flex items-center justify-end gap-2">
                                    <button 
                                        disabled={report.status !== 'Ready'}
                                        className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        title="View Web Report"
                                    >
                                        <Eye size={18} />
                                    </button>
                                    <button 
                                        disabled={report.status !== 'Ready'}
                                        className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        title="Download PDF"
                                    >
                                        <Download size={18} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
