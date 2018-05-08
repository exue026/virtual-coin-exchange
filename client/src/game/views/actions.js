import WebApi from '../web-api'

export const LOADING_PAGE_DATA = 'GAME/LOADING_PAGE_DATA'
export const LOAD_PAGE_DATA = 'GAME/LOAD_PAGE_DATA'
export const OPEN_COIN_GENERAL_MODAL = 'GAME/OPEN_COIN_GENERAL_MODAL'
export const GET_ALL_COINS = 'GAME/GET_ALL_COINS'

export const loadPageData = (gameId) => async(dispatch, getState) => {
  dispatch({
    type: LOADING_PAGE_DATA,
  })
  const { homePage } = getState()
  try {
    const [ overview, coins ] = await Promise.all([
      WebApi.getGameGameOverview(homePage.userId, gameId),
      WebApi.getCoins(homePage.userId, gameId)
    ])
    dispatch({
      type: LOAD_PAGE_DATA,
      overview: overview.data.game,
      coins: coins.data.coins,
      gameId,
    })
  } catch(err) {
    console.log(err)
  }
}

export const openCoinGeneralModal = (coinId) => async(dispatch, getState) => {
  try {
    const response = await WebApi.getCoinGeneral(coinId)
    dispatch({
      type: OPEN_COIN_GENERAL_MODAL,
      data: response.data.coin,
      history: response.data.coinHistory,
    })
  } catch (err) {
    console.log(err)
  }
}

export const getAllCoins = () => async(dispatch, getState) => {
  try {
    const response = await WebApi.getAllCoins()
    let coins = response.data.coins
    dispatch({
      type: GET_ALL_COINS,
      coins,
    })
  } catch(err) {
    console.log(err)
  }
}

