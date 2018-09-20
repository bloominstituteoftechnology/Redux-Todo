import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import { todoReducer } from './reducers' //import reducer


//Create store and pass reducer as an argument
const store = createStore(todoReducer)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

