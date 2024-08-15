export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface YogaPose {
  id: number;
  englishName: string;
  sanskritName: string;
  level: DifficultyLevel
  bodyParts: string[];
  icon: string;
}

export interface YogaPosesList {
  yogaPoses: YogaPose[];
}
