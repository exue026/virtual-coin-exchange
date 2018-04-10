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
  const supply = Number(properties[4].replace(/,/g, ''))
  if (isNaN(supply)) {
    console.log(supply)
    console.log(properties)
  }
  /* ready to be inserted into db */
  const serializedProperties = {
    _id: mongoose.Types.ObjectId(),
    price: Number(properties[3].slice(1).replace(/,/g, '')),
    marketCap: Number(properties[2].slice(1).replace(/,/g, '')),
    supply: 0,
    sevenDayChange: Number(properties[5].slice(0, -1)),
    date: date,
  }
  return {
    serializedProperties,
    coinId: properties[0].trim().toLowerCase().replace(' ', '-'),
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

  for (let i = 0; i < dates.length; i++) {
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
        const results = await Coin.update({ _id: coinId}, {$push: { data: serializedProperties }})
      } catch(err) {
        console.log(err)
      }
    }
  }

  /*
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
  */

  /*
  results.forEach(node => {
    const url = node.attribs.href
    $ = await rp(options(url))
    console.log($)
  })
  */
}
