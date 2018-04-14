import { getCoin } from '../data/coin-market-cap'

export const addWeeklyCoinData = async() => {
  try {
    const coin = await getCoin('bitcoin')

  } catch (err) {
    console.log(err)
  }
}
