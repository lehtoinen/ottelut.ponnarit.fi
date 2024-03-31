import type { Match } from "../types/Match";
import type { MatchesResponse } from "../types/torneoPal/MatchesResponse";

const getFixturesFromMatchesResponse = (response: MatchesResponse): Match[] =>
  response.matches.map((match) => ({
    awayScore: parseInt(match.fs_B, 10),
    awayTeam: match.team_B_name,
    city: match.venue_city_name,
    competition: match.category_name,
    date: new Date(match.date),
    homeScore: parseInt(match.fs_A, 10),
    homeTeam: match.team_A_name,
    isCompleted: match.status === "Played",
    time: match.time,
    timecode: `${match.date}-${match.time}`,
    venue: match.venue_name,
    categoryId: match.category_id,
  }));

export default getFixturesFromMatchesResponse;
