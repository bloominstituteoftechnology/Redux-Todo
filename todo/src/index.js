import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import toDoApp from './reducers';

const persistedState=(localStorage.getItem('todo')?JSON.parse(localStorage.getItem('todo')):undefined);
const store=createStore(toDoApp,persistedState);
store.subscribe(()=>{localStorage.setItem('todo',JSON.stringify(store.getState()))});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

