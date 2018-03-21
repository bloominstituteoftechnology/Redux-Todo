import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import list from './reducers/RedAction'
import MasterList  from './components/List'

const store = createStore(list);


ReactDOM.render(
    <Provider store={store}>
        <MasterList />
    </Provider>, 
document.getElementById('root'));

