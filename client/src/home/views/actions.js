import WebApi from '../web-api'

export const LOADING_PAGE_DATA = 'HOME/LOADING_PAGE_DATA'
export const LOAD_PAGE_DATA = 'HOME/LOAD_PAGE_DATA'

export const loadPageData = (userId) => async(dispatch, getState) => {
  dispatch({
    type: LOADING_PAGE_DATA,
  })
  const response = await WebApi.getGamesForUser(userId)
  console.log(response)
  dispatch({
    type: LOAD_PAGE_DATA,
  })
}



