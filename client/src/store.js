import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux'
import thunk from 'redux-thunk'

import mainPage from './main/views/reducer'

const rootReducer = combineReducers({
  mainPage,
})

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
]
const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension())
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
)

export default store
