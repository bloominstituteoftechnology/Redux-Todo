import React from 'react'
import ReactDOM from 'react-dom'

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import list from './reducers'
import Todo from './components/todo'

import './reset.css'

const store = createStore(list)
const root = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <Todo />
    </Provider>, root
)