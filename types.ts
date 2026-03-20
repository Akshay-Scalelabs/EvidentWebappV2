
export interface MicroFactorInsights {
  thesis: string;
  verdict: string;
  question: string;
}

export interface MicroFactor {
  id: string;
  name: string;
  siu: number; // 0-100
  description?: string;
  insights?: MicroFactorInsights;
}

export interface Cluster {
  id: string;
  name: string;
  avgSiu: number;
  microFactors?: MicroFactor[];
}

export interface Domain {
  id: string;
  name: string;
  description: string;
  indexScore: number; // 0-100
  clusters: Cluster[];
}

export interface Lens {
  id: 'human' | 'algorithmic' | 'machine';
  name: string;
  description: string;
  lisScore: number; // 0.00 - 1.00
  color: string;
  domains: Domain[];
}

export interface IntelligenceItem {
  title: string;
  content: string;
  severity: 'critical' | 'warning' | 'info';
}

export interface IntelligenceSection {
  redFlags: IntelligenceItem[];
  swot: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
  strategicQuestions: {
    question: string;
    context: string;
    goodSign: string;
    warningSign: string;
  }[];
}

export interface Competitor {
  id: string;
  name: string;
  presence: number; // Market Visibility (0-100)
  clarity: number; // Signal Clarity (0-100)
  epi: number;
  color: string;
}

export interface HistoricalData {
  date: string;
  epi: number;
  human: number;
  algo: number;
  machine: number;
}

export interface ReportData {
  id: string;
  companyName: string;
  vertical: string;
  stage: string;
  logoUrl: string;
  epiScore: number;
  nudScore: number;
  clcScore: number;
  lenses: Lens[];
  summary: string;
  intelligence?: IntelligenceSection;
  competitors?: Competitor[];
  history?: HistoricalData[];
}

export interface SignalEvent {
  id: string;
  companyId: string;
  type: 'competitor' | 'risk' | 'opportunity' | 'market';
  message: string;
  timestamp: string; // e.g. "10m ago"
  severity: 'high' | 'medium' | 'low';
}

export interface CohortPoint {
  id: string;
  x: number; // e.g., Stage Maturity or Market Density
  y: number; // EPI Score
  name: string;
  isFocal?: boolean; // Is this the company we are analyzing?
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model' | 'system';
  text: string;
  timestamp: number;
  isThinking?: boolean;
  sources?: { title: string; uri: string }[];
}

export interface PreviewData {
  id: string;
  name: string;
  vertical: string;
  stage: string;
  epiRange: string; // e.g. "0.60 - 0.70"
  summary: string;
  lastScan: string;
}

export interface Persona {
  id: string;
  name: string;
  role: string;
  companyType: string;
  avatarColor: string;
  bio: string;
  motivations: string[];
  painPoints: string[];
  initialMessage: string;
  suggestedQuestions: string[];
}
