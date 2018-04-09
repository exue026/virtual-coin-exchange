import cheerio from 'cheerio'
import rp from 'request-promise'
import fs from 'fs'

const options = (url = '') => ({
  uri: `https://coinmarketcap.com${url}`,
  transform: (body) => {
    return cheerio.load(body)
  }
})

export const setupCoinsInDB = () => {
  /* create basically shells of coins in database with empty array as values */
  /*
  something like...
  const newCoin = new Coin({
    _id: 'Bitcoin',
    symbol: 'BTC',
    data: [],
  })
  */
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

export const getCoinDomIds = () => {
  return new Promise((resolve, reject) => {
    const path = './server/data/coin-dom-ids.txt'
    fs.readFile(path, (err, data) => {
      return err ? reject(err) : resolve(data.toString('utf-8').split('\n'))
    })
  })
}

export const serializeCoin = (string, date) => {
  const properties = string.trim().replace('\n\n', '\n').split('\n').slice(1)
  /* ready to be inserted into db */
  const serializedProperties = {
    _id: properties[0],
    price: Number(properties[3].slice(1).replace(',', '')),
    marketCap: Number(properties[2].slice(1).replace(',', '')),
    supply: Number(properties[4].replace(',', '')),
    sevenDayChange: Number(properties[5].slice(0, -1)),
    date: date,
  }
}

export const populateHistory = async() => {

  let $ = await rp(options('/historical'))
  const start = $('h2')
    .filter((index, elem) => Number($(elem).text().trim()) >= 2017)
    .toArray()
    .reduce((accum, val) => accum.concat(val), [])

  const dates = $(start).nextAll().find('a').toArray()
  const ids = await getCoinDomIds()

  //for (let i = 0; i < dates.length; i++) {
    const url = dates[0].attribs.href
    $ = await rp(options(url))
    const rows = $('table[id=currencies-all]')
      .find('tbody')
      .find('tr')
      .filter((index, elem) => ids.indexOf($(elem).attr('id')) != -1)
    const string = $(rows[0])
      .find('td.currency-name, td.col-symbol, td.market-cap, a.price, td.circulating-supply, td[data-timespan="7d"]')
      .text()
    const date = new Date(url.slice(12, 16), Number(url.slice(16, 18) - 1), url.slice(18, 20))
    serializeCoin(string, date)
  //}


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
