import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { createStore, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const allReducers = combineReducers({
  rootReducer
})

const initialState = {}

const allEnhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
  allReducers,
  initialState,
  allEnhancers
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'))
