export type TrackBlock = {
  learn: string[];
  apply: string[];
};

export type Week = {
  id: number;
  month: 1 | 2 | 3 | 4 | 5 | 6;
  title: string;
  kicker: string;
  goal: string;
  backend: TrackBlock;
  frontend: TrackBlock;
  deliverable: string;
  interview: string[];
  hours: string;
  cutHint?: string;
};

export type Month = {
  id: 1 | 2 | 3 | 4 | 5 | 6;
  title: string;
  weeks: string;
  backendFocus: string;
  frontendFocus: string;
  joint: string;
};

export type Gate = {
  id: string;
  week: string;
  title: string;
  why: string;
};

export type InterviewPhase = {
  after: string;
  questions: string[];
};

export type Module = {
  name: string;
  min: string;
  cuttable: boolean;
  sides: string;
};

export type ChangeRow = {
  kind: string;
  topic: string;
  backendOnly: string;
  fullstack: string;
  why: string;
};
