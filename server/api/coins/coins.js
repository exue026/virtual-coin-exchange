import express from 'express'

import Coin from '../../models/coin'
import { getCoin } from '../data/coin-market-cap'

const router = express.Router()

/* get ids of all coins */
router.get('/', async(req, res, next) => {
  try {
    const coinIds = await Coin.getAllIds()
    res.send({ coins: coinIds })
  } catch(err) {
    res.status(500).send({ err: err.error })
  }
})

/* get data regarding a specific coin */
router.get('/:id', async(req, res, next) => {
  try {
    const id = req.params.id
    const coin = await getCoin(id)
    const coinHistory = (await Coin.findById(id)).data.map(doc => {
      return {
        price: doc.price,
        date: doc.date,
      }
    })
    res.send({
      coin,
      coinHistory,
    })
  } catch (err) {
    res.status(500).send({ err: err })
  }
})

export default router
