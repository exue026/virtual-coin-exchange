import WebApi from '../web-api'
import { GAME } from './constants'

export const SET_USERID = 'HOME/SET_USERID'
export const LOADING_PAGE_DATA = 'HOME/LOADING_PAGE_DATA'
export const LOAD_PAGE_DATA = 'HOME/LOAD_PAGE_DATA'
export const ENTER_GAME = 'HOME/ENTER_GAME'
export const RESET_STATE = 'HOME/RESET_STATE'
export const CHANGE_CREATE_GAME_FIELD = 'HOME/CHANGE_CREATE_GAME_FIELD'
export const CREATE_GAME = 'HOME/CREATE_GAME'

export const loadPageData = () => async(dispatch, getState) => {
  const { homePage } = getState()
  dispatch({
    type: LOADING_PAGE_DATA,
  })
  try {
    const response = await WebApi.getGamesForUser(homePage.userId)
    dispatch({
      type: LOAD_PAGE_DATA,
      games: response.data.data,
    })
  } catch(err) {
    console.log(err)
  }
}

export const setUserId = (userId) => (dispatch) => {
  dispatch({
    type: SET_USERID,
    userId,
  })
}

export const enterGame = () => (dispatch) => {
  dispatch({
    type: ENTER_GAME,
    gameId: '1234566',
  })
}

export const resetState = () => (dispatch) => {
  dispatch({
    type: RESET_STATE,
  })
}

export const changeCreateGameField = (field, value) => (dispatch) => {
  dispatch({
    type: CHANGE_CREATE_GAME_FIELD,
    field,
    value,
  })
}

export const createGame = () => async(dispatch, getState) => {
  const { homePage } = getState()
  const newGame = {
    ...homePage.createGame,
    [GAME.CREATED_BY]: homePage.userId,
    [GAME.PLAYERS]: [homePage.userId],
  }
  try {
    const response = await WebApi.createGame(newGame, homePage.userId)
    console.log(response)
  } catch (err) {
    console.log(err)
  }
}



