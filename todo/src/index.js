import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';

import reducer from './reducer';
import './index.css';




// REDUX_DEVTOOLS_EXTENSION
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//FIRST, create store, wrap around App (take state off React, put in Redux) - pass 'reducer' into createStore(reducer)
ReactDOM.render(
    <Provider store={store} >
        <App /> 
    </Provider>,
    document.getElementById('root')
);


