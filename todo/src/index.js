import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';

import rootReducer from './reducers';
import './index.css';




// REDUX_DEVTOOLS_EXTENSION
const store = createStore(rootReducer);

//FIRST, create store, wrap around App (take state off React, put in Redux) - pass 'reducer' into createStore(reducer)
ReactDOM.render(
    <Provider store={store} >
        <App /> 
    </Provider>,
    document.getElementById('root')
);


//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
