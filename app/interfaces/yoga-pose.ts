export interface YogaPose {
  id: number;
  englishName: string;
  sanskritName: string;
  level: string;
  bodyParts: string[];
  icon: string;
}

export interface YogaPosesList {
  yogaPoses: YogaPose[];
}
