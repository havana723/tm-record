export interface RankingItem {
  rank: number
  rating: number
  game: number
  name: string
}

export interface Season {
  ranking: RankingItem[]
}

export interface Seasons {
  seasons: Season[]
}
