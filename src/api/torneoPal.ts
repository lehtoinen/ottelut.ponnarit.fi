import { memoizeWith } from "ramda";

import type { ClubResponse } from "../types/torneoPal/ClubResponse";
import type { MatchesResponse } from "../types/torneoPal/MatchesResponse";

import getFixturesFromMatchesResponse from "../utils/getFixturesFromMatchesResponse";
import getTeamsFromClubResponse from "../utils/getTeamsFromClubResponse";

import mockClubResponse from "../test/fixtures/clubResponse.json";
import mockClubMatchesResponse from "../test/fixtures/clubMatchesResponse.json";

const {
  TORNEOPAL_API_KEY,
  TORNEOPAL_CLUB_ID,
  TORNEOPAL_COMPETITION_ID,
  MOCK_TORNEOPAL_REQUESTS,
} = import.meta.env;

export const getAllTeamsForClub = async () =>
  getTeamsFromClubResponse(await fetchClub());

export const getAllMatchesForClub = async () =>
  getFixturesFromMatchesResponse(await fetchAllMatchesForClub());

const sendRequest = memoizeWith(
  (uri: string) => uri,
  async (uri: string, mockResponse: unknown) => {
    if (MOCK_TORNEOPAL_REQUESTS === "true") {
      return mockResponse;
    }

    const url = `https://spl.torneopal.fi${uri}`;

    console.log("sendRequest", url.replace(TORNEOPAL_API_KEY, "*****"));

    const response = await fetch(url);
    return response.json();
  },
);

const fetchClub = async (): Promise<ClubResponse> =>
  sendRequest(
    `/taso/rest/getClub/?api_key=${TORNEOPAL_API_KEY}&club_id=${TORNEOPAL_CLUB_ID}&competition_id=${TORNEOPAL_COMPETITION_ID}`,
    mockClubResponse,
  );

const fetchAllMatchesForClub = async (): Promise<MatchesResponse> =>
  sendRequest(
    `/taso/rest/getMatches/?api_key=${TORNEOPAL_API_KEY}&club_id=${TORNEOPAL_CLUB_ID}&competition_id=${TORNEOPAL_COMPETITION_ID}`,
    mockClubMatchesResponse,
  );
