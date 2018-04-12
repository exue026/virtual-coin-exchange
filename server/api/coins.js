import express from 'express'

import { getCoin } from '../data/coin-market-cap'

const router = express.Router()

router.get('/:id', async(req, res, next) => {
  try {
    const coin = await getCoin('bitcoin')
    res.send({ data: coin })
  } catch (err) {
    res.status(400).send({ err, })
  }
})

export default router
