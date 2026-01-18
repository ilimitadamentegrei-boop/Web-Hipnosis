
export interface HypnosisFormData {
  name: string;
  primaryGoal: string;
  biggestObstacle: string;
  currentFeeling: string;
  sessionDuration: '3';
  voiceType: 'Kore' | 'Puck';
}

export interface SessionResult {
  script: string;
  audioData: string | null;
}

export enum AppState {
  HOME = 'HOME',
  FORM = 'FORM',
  GENERATING = 'GENERATING',
  SESSION = 'SESSION'
}
