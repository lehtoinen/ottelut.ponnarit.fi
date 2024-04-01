// created with https://transform.tools/json-to-typescript

export type ClubResponse = {
  call: Call;
  club: Club;
};

type Call = {
  logged_in: boolean;
  method: string;
  status: string;
  result_time: number;
  time_stamp: number;
};

type Club = {
  club_id: string;
  name: string;
  abbrevation: string;
  city_id: string;
  city_name: string;
  www: string;
  crest: string;
  subtitle: string;
  region: string;
  district: string;
  district_name: string;
  home_venue_id: string;
  home_venue_name: string;
  officials: string[][];
  contact_name: string;
  contact_address: string;
  contact_zipcode: string;
  contact_city: string;
  contact_phone: string;
  contact_email: string;
  information: string;
  category_groups: CategoryGroup[];
  teams: Team[];
};

type CategoryGroup = {
  category_group: string;
  category_group_name: string;
};

type Team = {
  team_id: string;
  team_name: string;
  age_group: string;
  yob: string;
  gender: string;
  gender_fi: string;
  home_venue_id: string;
  home_venue_name: string;
  status: string;
  sport_id: string;
  primary_category: PrimaryCategory;
  categories: Category[];
};

type PrimaryCategory = {
  tournament_id: string;
  tournament_name: string;
  tournament_logo: any;
  tournament_season: string;
  tournament_active: string;
  tournament_sport_id: string;
  competition_id: string;
  competition_name: string;
  competition_logo: any;
  competition_season: string;
  competition_season_description: string;
  competition_active: string;
  category_id: string;
  category_name: string;
  category_logo: any;
  category_logo_dark_bg: any;
  category_team_name: string;
  category_group_id: string;
  category_age_group: string;
  category_view_order: string;
};

type Category = {
  tournament_id: string;
  tournament_name: string;
  tournament_logo: any;
  tournament_season: string;
  tournament_active: string;
  tournament_sport_id: string;
  competition_id: string;
  competition_name: string;
  competition_logo: any;
  competition_season: string;
  competition_season_description: string;
  competition_active: string;
  category_id: string;
  category_name: string;
  category_logo: any;
  category_logo_dark_bg: any;
  category_team_name: string;
  category_group_id: string;
  category_age_group: string;
  category_view_order: string;
};
