import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todos from './reducers';
import { loadState, saveState } from './loadState'

const persistentState = loadState()
const store = createStore(todos, persistentState)
store.subscribe(() => saveState(store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);