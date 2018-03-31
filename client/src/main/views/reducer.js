import * as actions from './actions'

const initialState = {
  text: 'hello world',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.TEST:
      return {
        ...state,
        text: action.string,
      }

    default:
      return state
  }
}
