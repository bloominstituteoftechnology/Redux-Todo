import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { listReducer } from './reducers';

const store = createStore(listReducer);

ReactDOM.render(
     <Provider store = {store}>
     			<App />
     			</Provider>,
                document.getElementById('root'));

