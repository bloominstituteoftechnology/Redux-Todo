import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'react-redux';
import { Provider } from 'react-redux';
import './index.css';
import reducer from './reducers';
import App from './App';

const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));


