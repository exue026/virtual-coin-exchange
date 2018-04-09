import express from 'express'
import cheerio from 'cheerio'
import rp from 'request-promise'
import mongoose from 'mongoose'

import Coin from '../../models/coin'

import { text } from './text'

const router = express.Router()

router.get('/', async(req, res, next) => {

  const options = (url) => ({
      uri: `https://coinmarketcap.com${url}`,
      transform: (body) => {
        return cheerio.load(body)
      }
    })

  let $ = cheerio.load(text)
  const results = $('a').toArray()
  const url = results[0].attribs.href
  $ = await rp(options(url))
  let rows = $('table[id=currencies-all]').find('tbody').find('tr').slice(0, 50)
  const row = rows[0]
  console.log($(row).find('td.currency-name, td.col-symbol, td.market-cap, a.price, td.circulating-supply, td[data-timespan="7d"]').text())

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
  */

  const entry = {
    _id: mongoose.Types.ObjectId(),
    marketCap: 0,
    price: 0,
    supply: 0,
    date: new Date(),
  }
  const lolz = await Coin.update({ _id: 'Bitcoin'}, {$push: { data: entry }})
  console.log(lolz)


  /*
  results.forEach(node => {
    const url = node.attribs.href
    $ = await rp(options(url))
    console.log($)
  })
  */

  //--------------------------

  res.send('hi\n')
})

export default router
