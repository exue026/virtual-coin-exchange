import WebApi from '../web-api'

export const SET_USERID = 'HOME/SET_USERID'
export const LOADING_PAGE_DATA = 'HOME/LOADING_PAGE_DATA'
export const LOAD_PAGE_DATA = 'HOME/LOAD_PAGE_DATA'

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



