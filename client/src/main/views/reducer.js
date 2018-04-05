import * as actions from './actions'
import * as constants from './constants'

const initialState = {
  register: {
    [constants.USERNAME]: '',
    [constants.EMAIL]: '',
    [constants.PASSWORD]: '',
    [constants.CONFIRM_PASSWORD]: '',
  },
  login : {
    [constants.USERNAME]: '',
    [constants.PASSWORD]: '',
  },
  notificationMessage: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_REGISTER_TEXT:
      return {
        ...state,
        register: {
          ...state.register,
          [action.name]: action.value,
        }
      }

    case actions.UPDATE_LOGIN_TEXT:
      return {
        ...state,
        login: {
          ...state.login,
          [action.name]: action.value,
        }
      }

    case actions.REGISTERED:
    case actions.LOGGEDIN:
      return {
        ...initialState,
      }

    case actions.SHOW_NOTIFICATION:
      return {
        ...state,
        notificationMessage: action.message,
      }

    case actions.CLOSE_NOTIFICATION:
      return {
        ...state,
        notificationMessage: null,
      }

    default:
      return state
  }
}
