import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

// create the store as a variable using creaStore function and reducer as an argument

const store = createStore(reducer);

// Place app inside of Provider
ReactDOM.render(
    // set up Provider store as {store}
    <Provider store={store}> 
        <App />
    </Provider>, 
    document.getElementById('root')
);

