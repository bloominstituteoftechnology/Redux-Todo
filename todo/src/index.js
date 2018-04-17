import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions'
​
// Log the initial state
console.log(store.getState())
​
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
store.dispatch(addTodo('Learn about store'))

const store = createStore(rootReducer)
​
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)