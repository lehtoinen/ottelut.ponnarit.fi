export type Match = {
  time: string;
  competition: string;
  homeTeamId: string;
  awayTeamId: string;
  homeTeamName: string;
  awayTeamName: string;
  isCompleted: boolean;
  venue?: string;
  city?: string;
  homeScore?: number;
  awayScore?: number;
  date: Date;
  categoryId: string;
};
