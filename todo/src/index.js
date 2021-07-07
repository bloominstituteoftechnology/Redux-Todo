import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoReducer from './reducers'
import {loadState, saveState} from './localStorage'

const persistedState = loadState();
const store = createStore(todoReducer, persistedState)

store.subscribe(() => {
    saveState({
        todos: store.getState().todos});
});


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

