import WebApi from '../web-api'

export const LOADING_PAGE_DATA = 'GAME/LOADING_PAGE_DATA'
export const LOAD_PAGE_DATA = 'GAME/LOAD_PAGE_DATA'

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
    console.log(overview)
    console.log(coins)
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

