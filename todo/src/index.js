import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider  store={createStore(reducers)}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
