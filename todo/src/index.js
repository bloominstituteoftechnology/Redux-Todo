import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import todos from './reducers';
import { Provider } from 'react-redux';
import { loadState } from './localStorage';

const persistance= loadState();
const store = createStore(todos, persistance);



ReactDOM.render(
    <Provider  store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
