import { RankingItem, Seasons } from 'src/types/Season'

const season1Data: RankingItem[] = [
  { rank: 1, rating: 1754, game: 5, name: '표대현' },
  { rank: 2, rating: 1629, game: 21, name: '최희원' },
  { rank: 3, rating: 1593, game: 16, name: '강현모' },
  { rank: 4, rating: 1560, game: 13, name: '김정호' },
  { rank: 5, rating: 1524, game: 1, name: '김정화' },
  { rank: 6, rating: 1517, game: 3, name: '김수인' },
  { rank: 7, rating: 1503, game: 2, name: '한유진' },
  { rank: 8, rating: 1483, game: 9, name: '이건우' },
  { rank: 9, rating: 1479, game: 1, name: '장호준' },
  { rank: 10, rating: 1445, game: 43, name: '이규호' },
  { rank: 11, rating: 1419, game: 1, name: '정형욱' },
  { rank: 12, rating: 1389, game: 6, name: '허현' },
  { rank: 13, rating: 1317, game: 1, name: '차민영' },
  { rank: 14, rating: 1340, game: 22, name: '황덕근' },
  { rank: 15, rating: 1312, game: 3, name: '이규원' },
  { rank: 16, rating: 1246, game: 8, name: '김보경' },
  { rank: 17, rating: 1166, game: 2, name: '유현우' },
  { rank: 18, rating: 1096, game: 2, name: '서보성' },
]

export const prevSeasons: Seasons = {
  seasons: [{ ranking: season1Data }],
}
