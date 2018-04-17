import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import App from './App';
import app from './Reducer';

const store = createStore(app)

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();

export default store;
