import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux'
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'

import { saveState, loadState } from './local-storage'

import mainPage from './main/views/reducer'
import homePage from './home/views/reducer'
import gamePage from './game/views/reducer'

const rootReducer = combineReducers({
  mainPage,
  homePage,
  gamePage,
})

const persistedState = loadState()

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
  persistedState,
  composedEnhancers,
)

store.subscribe(throttle(() => {
  const { mainPage, homePage } = store.getState()
  saveState({
    mainPage,
    homePage,
  })
}, 1000))

export default store
