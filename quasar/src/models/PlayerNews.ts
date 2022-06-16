export default interface PlayerNews {
  NewsID: number;
  Source: string;
  Updated: Date;
  TimeAgo: string;
  Title: string;
  Content: string;
  Url: string;
  TermsOfUse: string;
  Author: string;
  Categories: string;
  PlayerID: number;
  TeamID: number;
  Team: string;
  PlayerID2?: string;
  TeamID2?: string;
  Team2?: string;
  OriginalSource: string;
  OriginalSourceUrl: string;
}
