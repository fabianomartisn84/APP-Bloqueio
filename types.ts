
export interface Step {
  id: number;
  title: string;
  description: string;
  role: string;
}

export interface EnergyType {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  safetySteps: string[];
  mainRisks: string[];
  examples: string[];
  videoUrl: string;
}

export interface VideoItem {
  id: number;
  title: string;
  url: string;
}

export enum Screen {
  HOME = 'home',
  BLOQUEIO = 'bloqueio',
  TRANSFERENCIA = 'transferencia',
  ENERGY_DETAIL = 'energy_detail',
  INTRO_VIDEO = 'intro_video',
  VIDEOS_GALLERY = 'videos_gallery',
  PRIVACY_POLICY = 'privacy_policy'
}
