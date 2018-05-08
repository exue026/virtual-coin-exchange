import * as actions from './actions'

const initialState = {
  gameId: null,
  loading: false,
  overview: null,
  coins: null,
  coinGeneral: {
    data: null,
    history: [],
  },
  allCoins: [],
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
    case actions.OPEN_COIN_GENERAL_MODAL:
      return {
        ...state,
        coinGeneral: {
          ...state.coinGeneral,
          data: action.data,
          history: action.history,
        }
      }
    case actions.GET_ALL_COINS:
      return {
        ...state,
        allCoins: action.coins,
      }
    default:
      return state
  }
}
