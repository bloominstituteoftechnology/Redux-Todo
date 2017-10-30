import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialState = window.localStorage.getItem('TODO_LIST_STATE')
const store =  initialState ? createStore(reducers, JSON.parse(initialState)) : createStore(reducers);

store.subscribe(() => {
    const state = store.getState();
    window.localStorage.setItem('TODO_LIST_STATE', JSON.stringify(state));
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
