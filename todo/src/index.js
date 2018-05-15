import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducer from './reducer';


ReactDOM.render(
    <Provider store={createStore(Reducer)}>
        <App />
    </Provider>, document.getElementById('root'));
    registerServiceWorker();
