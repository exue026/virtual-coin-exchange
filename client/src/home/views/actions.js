import WebApi from '../web-api'

export const SET_USERID = 'HOME/SET_USERID'
export const LOADING_PAGE_DATA = 'HOME/LOADING_PAGE_DATA'
export const LOAD_PAGE_DATA = 'HOME/LOAD_PAGE_DATA'
export const ENTER_GAME = 'HOME/ENTER_GAME'
export const RESET_STATE = 'HOME/RESET_STATE'

export const loadPageData = () => async(dispatch, getState) => {
  const { homePage } = getState()
  dispatch({
    type: LOADING_PAGE_DATA,
  })
  try {
    const response = await WebApi.getGamesForUser(homePage.userId)
    dispatch({
      type: LOAD_PAGE_DATA,
      games: response.data.data,
    })
  } catch(err) {
    console.log(err)
  }
}

export const setUserId = (userId) => (dispatch) => {
  dispatch({
    type: SET_USERID,
    userId,
  })
}

export const enterGame = () => (dispatch) => {
  dispatch({
    type: ENTER_GAME,
    gameId: '1234566',
  })
}

export const resetState = () => (dispatch) => {
  dispatch({
    type: RESET_STATE,
  })
}



