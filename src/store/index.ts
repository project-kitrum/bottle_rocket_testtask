import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'

const initialState = {}

const middlewares = [thunk]
let appliedMiddleware = null

if (process.env.NODE_ENV !== 'production') {
  appliedMiddleware = composeWithDevTools(applyMiddleware(...middlewares))
} else {
  appliedMiddleware = applyMiddleware(...middlewares)
}

const store = createStore(
  reducers,
  initialState,
  appliedMiddleware
)

export default store
