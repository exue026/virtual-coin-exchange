import mongoose from 'mongoose'

import Coin from '../models/coin'
import { getCoin } from '../data/coin-market-cap'

export const addWeeklyCoinData = async() => {
  let coinIds
  try {
    coinIds = (await Coin.find({}, '_id')).map(doc => doc.id)
  } catch (err) {
    console.log(err)
    return
  }

  const currentDate = new Date()
  for (let id of coinIds) {
    try {
      const coin = await getCoin(id)
      const updates = {
        _id: mongoose.Types.ObjectId(),
        price: Number(coin.price_usd),
        supply: Number(coin.available_supply),
        marketCap: Number(coin.market_cap_usd),
        sevenDayChange: Number(coin.percent_change_7d),
        date: currentDate,
      }
      const results = await Coin.update({ _id: id}, {$push: { data: updates }})
      break
    } catch (err) {
      console.log(id)
    }
  }
}
