import * as actions from './actions'
import { GAME } from './constants'

const initialState = {
  userId: null,
  loading: false,
  games: [],
  selectedGameId: null,
  showCreateGame: false,
  createGame: {
    [GAME.GAME_NAME]: '',
    [GAME.CREATED_BY]: '',
    [GAME.START_DATE]: '',
    [GAME.END_DATE]: '',
    [GAME.PLAYERS]: '',
    [GAME.STARTING_BUDGET]: '',
  }
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

    case actions.CHANGE_CREATE_GAME_FIELD:
      return {
        ...state,
        createGame: {
          ...state.createGame,
          [action.field]: action.value,
        }
      }

    default:
      return state
  }
}
