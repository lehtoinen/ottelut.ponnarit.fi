import { memoizeWith } from "ramda";

import type { MatchesResponse } from "../types/torneoPal/MatchesResponse";

import mockClubMatchesResponse from "../test/fixtures/clubMatchesResponse.json";
import getFixturesFromMatchesResponse from "../utils/getFixturesFromMatchesResponse";

const {
  TORNEOPAL_API_KEY,
  TORNEOPAL_CLUB_ID,
  TORNEOPAL_COMPETITION_ID,
  MOCK_TORNEOPAL_REQUESTS,
} = import.meta.env;

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
  }
);

const fetchAllMatchesForClub = async (): Promise<MatchesResponse> =>
  sendRequest(
    `/taso/rest/getMatches/?api_key=${TORNEOPAL_API_KEY}&club_id=${TORNEOPAL_CLUB_ID}&competition_id=${TORNEOPAL_COMPETITION_ID}`,
    mockClubMatchesResponse
  );
