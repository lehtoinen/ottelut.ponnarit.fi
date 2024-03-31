export type Match = {
  time: string;
  competition: string;
  homeTeam: string;
  awayTeam: string;
  isCompleted: boolean;
  venue?: string;
  city?: string;
  homeScore?: number;
  awayScore?: number;
  date: Date;
  categoryId: string;
};
