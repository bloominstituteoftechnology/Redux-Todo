// React Imports Here:
import React from 'react';
import ReactDOM from 'react-dom';
// Redux Import Lines Below Here:
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Import Reducers & Other Files Here:
import reducers from './reducers';
import './index.css';
import App from './App';


const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);