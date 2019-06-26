import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todosReducer from './reducers/index';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
<Provider store = {createStore(todosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App /> 
</Provider>, 
document.getElementById('root'));
registerServiceWorker();


// The general flow of steps will be to create your store, 
// create your reducers, create your containers, and then
// create the action creators.