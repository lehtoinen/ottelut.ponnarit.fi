import type { Team } from "../types/Team";

type FilterState = Record<Team["id"], boolean>;

const ITEM_KEY = "teamfilters";

export const getTeamFilterState = (): FilterState => {
  if (typeof localStorage === "undefined") return {};

  const storedState = localStorage.getItem(ITEM_KEY);
  return storedState ? JSON.parse(storedState) : {};
};

export const setTeamFilterState = (state: FilterState) => {
  localStorage.setItem(ITEM_KEY, JSON.stringify(state));
};
