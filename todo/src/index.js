import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import './index.css';
import App from './App';

//instantiates Redux store with reducer as argument, no initial state
const store = createStore(reducer);

//App wrapped in Provider so store can pass state to it
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

