import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import todos from './reducers';



const store = createStore(todos);

ReactDOM.render (
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

