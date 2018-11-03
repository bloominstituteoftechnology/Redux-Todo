import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import toDo from './reducers';
import ToDo from './components/ToDo';

const store = createStore(toDo);

ReactDOM.render(
    <Provider store={store}>
        <ToDo />
    </Provider>, 
    document.getElementById('root')
);