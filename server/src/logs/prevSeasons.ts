import { RankingItem, Seasons } from 'src/types/Season'

const season1Data: RankingItem[] = [
  { rank: 1, rating: 3200, game: 9999, name: '최희원' },
]

export const prevSeasons: Seasons = {
  seasons: [{ ranking: season1Data }],
}
