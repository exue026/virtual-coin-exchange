import express from 'express'
import mongoose from 'mongoose'

import Coin from '../../models/coin'
import { populateHistory } from '../../data/populate-history'

const router = express.Router()

router.get('/', async(req, res, next) => {
  await populateHistory()

  /*
  const newCoin = new Coin({
    _id: 'Bitcoin',
    symbol: 'BTC',
    data: [
      {
        _id: mongoose.Types.ObjectId(),
        marketCap: 5000000,
        price: 15000,
        supply: 200000,
        date: new Date(),
      }
    ]
  })

  const entry = {
    _id: mongoose.Types.ObjectId(),
    marketCap: 0,
    price: 0,
    supply: 0,
    date: new Date(),
  }
  const lolz = await Coin.update({ _id: 'Bitcoin'}, {$push: { data: entry }})
  console.log(lolz)
  */
  res.send('hi\n')
})

export default router
