export type GameTitle = 'Valorant' | 'Counter-Strike 2' | 'Apex Legends' | 'Overwatch 2';

export type PerformanceTier = 'Beginner' | 'Intermediate' | 'Pro';

export interface Player {
  id: string;
  username: string;
  game: GameTitle;
  role: string;
  rank: string;
  rankTier: number; // 1-8 for sorting
  country: string;
  countryCode: string;
  playtime_hours: number;
  avatarSeed: number;
}

export interface Match {
  match_id: string;
  player_id: string;
  date: string; // ISO date YYYY-MM-DD
  map: string;
  kills: number;
  deaths: number;
  assists: number;
  headshot_percentage: number;
  score: number;
  result: 'Win' | 'Loss';
}

export interface PlayerAggregatedStats extends Player {
  totalMatches: number;
  wins: number;
  losses: number;
  winRate: number; // percentage 0-100
  totalKills: number;
  totalDeaths: number;
  totalAssists: number;
  kda: number; // (kills + assists) / max(deaths, 1)
  avgScore: number;
  avgKills: number;
  avgDeaths: number;
  avgAssists: number;
  avgHeadshotPercentage: number;
  performanceTier: PerformanceTier;
  bestMap: string;
}

export interface FilterState {
  game: 'All' | GameTitle;
  role: string;
  map: string;
  dateRange: 'all' | '30d' | '90d' | '180d';
  searchQuery: string;
  tier: 'All' | PerformanceTier;
}

export interface WeeklyTrendPoint {
  week: string; // e.g., 'W1', 'Aug 12'
  avgKda: number;
  winRate: number;
  matchCount: number;
  avgScore: number;
}

export interface MapStat {
  map: string;
  matches: number;
  wins: number;
  winRate: number;
  avgScore: number;
}

export interface RoleStat {
  role: string;
  matches: number;
  avgKills: number;
  avgDeaths: number;
  avgAssists: number;
  avgKda: number;
  avgScore: number;
  winRate: number;
}

export interface InsightItem {
  id: string;
  title: string;
  description: string;
  statValue: string;
  metricLabel: string;
  category: 'Map' | 'Role' | 'Playtime' | 'Tier' | 'General';
  sentiment: 'positive' | 'negative' | 'neutral';
}
