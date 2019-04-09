import 'bulma/css/bulma.css'

import { Provider } from 'react-redux' //gives us access to Provider Component, which makes our app aware of store
import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './components/Todo'
import { createStore } from 'redux' //gives us access to createStore function from redux
import reducer from './reducers'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) //createStore function receives reducer responsible for updating the store, along with any initial state

//Provider is where store lives and it makes our app aware of store, by wrapping our component inside of it
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)
