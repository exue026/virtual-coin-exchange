import WebApi from '../web-api'

export const TEST = 'mainpage/test'

export const loadPageData = (string) => (dispatch, getState) => {
  dispatch({
    type: TEST,
    string,
  })
}


