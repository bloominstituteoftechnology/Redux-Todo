import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoList from './reducers';
import './index.css';
import App from './components/App';

ReactDOM.render(
<Provider store={createStore(todoList)}>
    <App />
</Provider>, document.getElementById('root'));