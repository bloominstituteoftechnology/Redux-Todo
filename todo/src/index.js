import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/App.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';


ReactDOM.render(
    <Provider store={createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <App /> 
    </Provider>, document.getElementById('root')
);


