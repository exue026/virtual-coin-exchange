import WebApi from '../web-api'

export const LOADING_PAGE_DATA = 'GAME/LOADING_PAGE_DATA'
export const LOAD_PAGE_DATA = 'GAME/LOAD_PAGE_DATA'

export const loadPageData = () => async(dispatch, getState) => {
  dispatch({
    type: LOADING_PAGE_DATA,
  })
  setTimeout(() => {
    dispatch({
      type: LOAD_PAGE_DATA,
    })
  }, 1000)
}

