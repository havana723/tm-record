import axios from 'axios'
import express, { Router } from 'express'

const app = express()
const port = 3001

app.get('/api/ranking', async (req, res) => {
  const ranking = await axios.get(
    'https://raw.githubusercontent.com/PngWnA/TFM.log/main/README.md'
  )
  const text = ranking.data

  const raw: string[] = text.split('```csv')[1].trim().split('\n')
  const data = raw
    .slice(1, raw.length - 1)
    .map((s) => s.split('\t'))
    .map(([rank, rating, game, name]) => ({
      rank: +rank,
      rating: +rating,
      game: +game,
      name,
    }))

  res.send({ ranking: data })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
