import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { todoReducer } from './reducers';

const store = createStore(todoReducer);

ReactDOM.render(
    <Provider store={store}>
    App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

// input field, submit button, display list
// create store in stores index js
// provider wraps app
// pass created store into provider