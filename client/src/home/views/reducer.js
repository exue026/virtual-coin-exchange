import * as actions from './actions'

const initialState = {
  userId: null,
  loading: false,
  games: [],
  selectedGameId: null,
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
        games: action.games,
      }
    case actions.ENTER_GAME:
      return {
        ...state,
        selectedGameId: action.gameId,
      }
    case actions.RESET_STATE:
      return {
        ...initialState,
        userId: state.userId,
      }

    default:
      return state
  }
}
