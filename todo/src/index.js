import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { toDoReducer } from './reducer'
import './index.css';
import App from './App';

const store = createStore(
    toDoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
