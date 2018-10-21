import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'; // Redux store creation method
import { Provider } from 'react-redux'; // Wrap around App component. Access to redux global store.

// creating store by passing information (reducer: representation of state) to createStore. 
// Testing with Redux Chrome extension
const store = createStore(todosReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ); 

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root'));

