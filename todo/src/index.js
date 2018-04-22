import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import toDoListReducer from './components/toDoListReducer';
import { Provider } from 'react-redux';

const store = createStore(toDoListReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));