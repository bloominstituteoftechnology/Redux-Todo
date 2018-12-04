import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import todoHandler from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(todoHandler);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));