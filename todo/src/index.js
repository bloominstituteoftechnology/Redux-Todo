import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import todos from './reducers/todos'


const store = createStore( 
    todos,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root')
);

