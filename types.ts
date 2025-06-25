export enum ActiveView {
  Home = 'Home',
  RiskAssessment = 'RiskAssessment',
  EducationalContent = 'EducationalContent',
  HealthAssistant = 'HealthAssistant',
  Settings = 'Settings', // Added Settings
  ArticleDetail = 'ArticleDetail', // Added ArticleDetail
}

export interface NavItem {
  key: ActiveView;
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  description: string;
}

export interface RiskFormData {
  age: number | null;
  gender: 'male' | 'female' | '';
  isSmoker: boolean;
  systolicBP: number | null;
  totalCholesterol: number | null;
  hasDiabetes: boolean;
  hasFamilyHistoryCVD: boolean;
}

export interface RiskRecommendation {
  id: string;
  text: string;
  severity: 'low' | 'medium' | 'high';
}

export interface RiskResult {
  cvdRiskPercentage: number;
  heartAge: number;
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Very High';
  recommendations: RiskRecommendation[];
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  category: string;
  imageUrl?: string;
  content: string; // Ensure content is part of the interface
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  metadata?: Record<string, any>;
}

export interface GroundingChunkWeb {
  uri: string;
  title: string;
}
export interface GroundingChunk {
  web?: GroundingChunkWeb;
  retrievalQuery?: string;
  textChunk?: string;
}

export interface Candidate {
  groundingMetadata?: {
    groundingChunks?: GroundingChunk[];
    searchQueries?: string[];
  };
}

export interface GeminiResponseExtension {
 candidates?: Candidate[];
}

export interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  targetView?: ActiveView;
}

// Settings Type
export interface AppSettings {
  theme: 'light' | 'system'; // 'dark' could be added later
  notifications: {
    articleAlerts: boolean;
    riskReminders: boolean;
  };
  privacy: {
    allowAnonymousDataCollection: boolean;
  };
}

// Language Option for Health Assistant
export interface LanguageOption {
  code: string; // e.g., 'en-US', 'fr-FR'
  name: string; // e.g., 'English (US)', 'French (France)'
  nativeName: string; // e.g. 'English (US)', 'Français (France)'
}