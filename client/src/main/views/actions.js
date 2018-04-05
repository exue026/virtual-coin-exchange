import WebApi from '../web-api'
import {
  USERNAME,
  EMAIL,
  PASSWORD,
} from './constants'

export const UPDATE_LOGIN_TEXT = 'MAINPAGE/UPDATE_LOGIN_TEXT'
export const UPDATE_REGISTER_TEXT = 'MAINPAGE/UPDATE_REGISTER_TEXT'
export const LOGGEDIN = 'MAINPAGE/LOGIN'
export const REGISTERED = 'MAINPAGE/REGISTERED'
export const SHOW_NOTIFICATION = 'MAINPAGE/SHOW_NOTIFICATION'
export const CLOSE_NOTIFICATION = 'MAINPAGE/CLOSE_NOTIFICATION'

export const updateLoginText = (name, value) => (dispatch, getState) => {
  dispatch({
    type: UPDATE_LOGIN_TEXT,
    name,
    value,
  })
}

export const updateRegisterText = (name, value) => (dispatch) => {
  dispatch({
    type: UPDATE_REGISTER_TEXT,
    name,
    value,
  })
}

export const login = () => async(dispatch, getState) => {
  const { mainPage } = getState()
  const username = mainPage.login[USERNAME]
  const password = mainPage.login[PASSWORD]
  const response = await WebApi.login(username, password)
  if (response.status === 200) {
    dispatch({
      type: LOGGEDIN,
    })
    localStorage.setItem('authenticated', JSON.stringify(true))
  }
}

export const register = () => async(dispatch, getState) => {
  const { mainPage } = getState()
  const username = mainPage.register[USERNAME]
  const email = mainPage.register[EMAIL]
  const password = mainPage.register[PASSWORD]
  const response = await WebApi.register(username, email, password)
  if (response.status === 200) {
    dispatch({
      type: REGISTERED,
    })
    dispatch({
      type: SHOW_NOTIFICATION,
      message: 'Registration successful!',
    })
  }
}

export const closeNotification = () => async(dispatch, getState) => {
  dispatch({
    type: CLOSE_NOTIFICATION,
  })
}

