import * as actions from './actions'

const initialState = {
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOADING_PAGE_DATA:
      return {
        ...state,
        loading: true,
      }
    case actions.LOAD_PAGE_DATA:
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}
