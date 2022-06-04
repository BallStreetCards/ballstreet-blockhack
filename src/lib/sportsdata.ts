const TRAE = 20001989;
// const SEASON = 2022;
const KEY = '956b722c78a54bd4bdacf8f321e23af4';
export const API_PLAYER_DETAILS = `https://api.sportsdata.io/v3/nba/scores/json/Player/${TRAE}?key=${KEY}`;
export const API_PLAYER_STATS = (season: number) =>
  `https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStatsByPlayer/${season}/${TRAE}?key=${KEY}`;
export const API_PLAYER_NEWS = `https://api.sportsdata.io/v3/nba/scores/json/NewsByPlayerID/${TRAE}?key=${KEY}`;
export const API_PLAYER_GAME_STATS = (season: number) =>
  `https://api.sportsdata.io/v3/nba/stats/json/PlayerGameStatsBySeason/${season}/${TRAE}/all?key=${KEY}`;
