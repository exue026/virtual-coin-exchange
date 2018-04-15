import mongoose from 'mongoose'
import cheerio from 'cheerio'
import rp from 'request-promise'
import fs from 'fs'

import Coin from '../models/coin'

const options = (url = '') => ({
  uri: `https://coinmarketcap.com${url}`,
  transform: (body) => {
    return cheerio.load(body)
  }
})

export const setupCoinsInDB = async() => {
  const ids = await getCoinDomValues()
  for (let i = 0; i < ids.length - 1; i += 2) {
    const newCoin = new Coin({
      _id: ids[i + 1],
      symbol: ids[i],
      data: [],
    })
    await newCoin.save()
  }
}

export const writeCoinDomValues = async() => {
  const $ = await rp(options('/coins'))
  const ids = $('table[id=currencies]')
    .find('tbody')
    .find('tr')
    .slice(0, 50)
    .find('td.currency-name')
    .toArray()
    .reduce((accum, value) => {
      return accum + '\n' + $(value).text().trim().toLowerCase().replace(' ', '-')
    }, '')
    .slice(1)
  const path = './server/data/coin-dom-values.txt'
  const error = await fs.writeFile(path, ids)
}

export const writeCoinDomIds = async() => {
  const $ = await rp(options('/coins'))
  const ids = $('table[id=currencies]')
    .find('tbody')
    .find('tr')
    .slice(0, 50)
    .toArray()
    .reduce((accum, value) => accum + '\n' + $(value).attr('id'), '')
    .slice(1)
  const path = './server/data/coin-dom-ids.txt'
  const error = await fs.writeFile(path, ids)
}

export const getCoinDomValues = () => {
  return new Promise((resolve, reject) => {
    const path = './server/data/coin-dom-values.txt'
    fs.readFile(path, (err, data) => {
      return err ? reject(err) : resolve(data.toString('utf-8').split('\n'))
    })
  })
}

export const getCoinDomIds = () => {
  return new Promise((resolve, reject) => {
    const path = './server/data/coin-dom-ids.txt'
    fs.readFile(path, (err, data) => {
      return err ? reject(err) : resolve(data.toString('utf-8').split('\n'))
    })
  })
}

export const serializeCoin = (string, date) => {
  const properties = string.trim().replace(/\n\n/g, '\n').split('\n').slice(1)
  let coinId = properties[0].trim().toLowerCase().replace(' ', '-')
  let price = Number(properties[3].trim().slice(1).replace(/,/g, ''))
  let supply = Number(properties[4].trim().replace(/,/g, ''))
  let marketCap = Number(properties[2].trim().slice(1).replace(/,/g, ''))
  if (properties[5] === undefined) {
    properties[5] = '-1?'
  }
  let sevenDayChange = Number(properties[5].trim().slice(0, -1))
  if (coinId === 'litecoin') {
    /*
    supply = Number(properties[5].trim().replace(/,/g, ''))
    sevenDayChange = Number(properties[6].trim().slice(0, -1))
    */
  }
  if (coinId === 'wanchain') {
    /*
    supply = -1
    marketCap = -1
    sevenDayChange = 0
    */
  }
  console.log('===========')
  console.log(coinId, price, supply, marketCap, sevenDayChange)
  if (isNaN(price) || isNaN(supply) || isNaN(marketCap) || isNaN(sevenDayChange)) {
    console.log(coinId, '!!!!!!!!!!!!!!!!!!!!!!!!')
  }
  console.log('===========')
  /* ready to be inserted into db */
  const serializedProperties = {
    _id: mongoose.Types.ObjectId(),
    price: price,
    marketCap: marketCap,
    supply: supply,
    sevenDayChange: sevenDayChange,
    date: date,
  }
  return {
    serializedProperties,
    coinId: coinId,
  }
}

export const populateHistory = async() => {
  //await setupCoinsInDB()
  let $ = await rp(options('/historical'))
  const start = $('h2')
    .filter((index, elem) => Number($(elem).text().trim()) >= 2017)
    .toArray()
    .reduce((accum, val) => accum.concat(val), [])

  const dates = $(start).nextAll().find('a').toArray()
  const ids = await getCoinDomIds()

  for (let i = 67; i <= 67; i++) {
    const url = dates[i].attribs.href
    console.log(url)
    $ = await rp(options(url))
    const rows = $('table[id=currencies-all]')
      .find('tbody')
      .find('tr')
      .filter((index, elem) => ids.indexOf($(elem).attr('id')) != -1)
    for (let i = 0; i < rows.length; i++) {
      try {
        const string = $(rows[i])
          .find('td.currency-name, td.col-symbol, td.market-cap, a.price, td.circulating-supply, td[data-timespan="7d"]')
          .text()
        const date = new Date(url.slice(12, 16), Number(url.slice(16, 18) - 1), url.slice(18, 20))
        const { serializedProperties, coinId } = serializeCoin(string, date)
        //const results = await Coin.update({ _id: coinId}, {$push: { data: serializedProperties }})
      } catch(err) {
        console.log(err)
      }
    }
  }
}
