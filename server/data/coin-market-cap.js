import rp from 'request-promise'

const coinMarketCapURL = 'https://api.coinmarketcap.com/v1'

export const getCoin = async(coinId) => {
  var options = {
    uri: `${coinMarketCapURL}/ticker/${coinId}`,
    json: true,
  }

  try {
    const response = await rp(options)
    return response[0]
  } catch(err) {
    console.log(err.error)
    throw err
  }
}
