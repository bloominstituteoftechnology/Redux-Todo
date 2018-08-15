import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import taskReducer from './reducers/reducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(taskReducer);

//use provider to connect to the redux store
ReactDOM.render(
    <Provider store = {store}> 
        <App />
    </Provider>, 
document.getElementById('root'));
registerServiceWorker();
