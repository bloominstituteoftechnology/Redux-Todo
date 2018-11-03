import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

import './index.css';
import App from './components/App';

const persistedState = loadState();

const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Saves state any time the state changes.
// 
// throttle() (from lodash) stops the saveState function from running every time
// state is changed. throttle ensures that the inner function (saveState) won't be
// called more often than 1000ms.
store.subscribe(throttle(() => {
    saveState(store.getState())
}, 1000));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path='/' component={App} />
        </Router>
    </Provider>
, document.getElementById('root'));