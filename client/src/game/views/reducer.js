import * as actions from './actions'

const initialState = {
  gameId: null,
  loading: false,
  overview: null,
  coins: null,
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
        overview: action.overview,
        coins: action.coins,
        gameId: action.gameId,
      }
    default:
      return state
  }
}
