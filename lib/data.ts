export type Team = {
  name: string;
  short: string;
};

export type Fixture = {
  id: number;
  league: string;
  date: string;
  home: Team;
  away: Team;
  homeScore: number;
  awayScore: number;
  tip: string;
  probability: string;
};

export const fixtures: Fixture[] = [
  {
    id: 1,
    league: 'Premier League',
    date: 'Hoje • 20:45',
    home: { name: 'Arsenal', short: 'ARS' },
    away: { name: 'Manchester City', short: 'MCI' },
    homeScore: 2,
    awayScore: 1,
    tip: '1X / Overs',
    probability: '68%',
  },
  {
    id: 2,
    league: 'La Liga',
    date: 'Hoje • 21:30',
    home: { name: 'Real Madrid', short: 'RMA' },
    away: { name: 'Barcelona', short: 'BAR' },
    homeScore: 1,
    awayScore: 1,
    tip: 'X2 / Empate',
    probability: '54%',
  },
  {
    id: 3,
    league: 'Serie A',
    date: 'Amanhã • 18:00',
    home: { name: 'Juventus', short: 'JUV' },
    away: { name: 'Inter', short: 'INT' },
    homeScore: 1,
    awayScore: 2,
    tip: '2 / Double Chance',
    probability: '62%',
  },
  {
    id: 4,
    league: 'Brasileirão',
    date: 'Amanhã • 19:30',
    home: { name: 'Palmeiras', short: 'PAL' },
    away: { name: 'Flamengo', short: 'FLA' },
    homeScore: 2,
    awayScore: 0,
    tip: '1 / HT-FT',
    probability: '71%',
  },
  {
    id: 5,
    league: 'Ligue 1',
    date: 'Dom • 16:00',
    home: { name: 'PSG', short: 'PSG' },
    away: { name: 'Marseille', short: 'OM' },
    homeScore: 3,
    awayScore: 1,
    tip: '1 / Over 2.5',
    probability: '74%',
  },
  {
    id: 6,
    league: 'Bundesliga',
    date: 'Dom • 17:30',
    home: { name: 'Bayern', short: 'BAY' },
    away: { name: 'Borussia', short: 'BVB' },
    homeScore: 2,
    awayScore: 2,
    tip: 'X / Ambas marcam',
    probability: '58%',
  },
];

export function getFixtures() {
  return fixtures;
}
