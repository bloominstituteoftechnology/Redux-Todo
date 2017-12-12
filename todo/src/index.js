import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import todo from './reducers';
import Todo from './components/Counter'

const store = createStore(counter);

ReactDOM.render(
    <Provider store = {store}>
        <App />
        <Counter />
    </Provider>,
    document.getElementById('root'));
    
