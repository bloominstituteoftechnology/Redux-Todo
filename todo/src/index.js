import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './Reducers/Reducers.js';
import Todos from './components/Todos.js';
import './styles/rest.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <Todos />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
