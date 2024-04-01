import type { Team } from "../types/Team";
import type { ClubResponse } from "../types/torneoPal/ClubResponse";

const getTeamsFromClubResponse = (response: ClubResponse): Team[] =>
  response.club.teams.map((team) => ({
    id: team.team_id,
    name: team.team_name,
    primaryCategoryId: team.primary_category.category_id,
    primaryCategoryName: team.primary_category.category_name,
    ageGroup: team.primary_category.category_age_group,
  }));

export default getTeamsFromClubResponse;
