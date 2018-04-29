import WebApi from '../web-api'

export const LOADING_PAGE_DATA = 'GAME/LOADING_PAGE_DATA'
export const LOAD_PAGE_DATA = 'GAME/LOAD_PAGE_DATA'

export const loadPageData = (gameId) => async(dispatch, getState) => {
  dispatch({
    type: LOADING_PAGE_DATA,
  })
  const { homePage } = getState()
  try {
    const response = await WebApi.getGameGameOveriew(homePage.userId, gameId)
    dispatch({
      type: LOAD_PAGE_DATA,
      overview: response.data.game,
      gameId,
    })
  } catch(err) {
    console.log(err)
  }
}

