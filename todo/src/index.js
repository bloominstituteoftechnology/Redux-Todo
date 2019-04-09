import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import styled from 'styled-components'

const div = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 300px;
  height: 550px;

`


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
   <div> <App /></div>
  </Provider>,
  document.getElementById('root')
)
