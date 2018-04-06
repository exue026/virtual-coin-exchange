import * as actions from './actions'

const initialState = {
  userId: null,
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_USERID:
      return {
        ...state,
        userId: action.userId,
      }
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
