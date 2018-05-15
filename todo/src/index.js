import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { } from "./reducers";


const store = createStore(
    animalsReducer, // our root reducer is only an empty array, UNTIL our action is dispatched
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // ignore as it only pertains to Redux Debugging
); // most basic reducer shall be replaced by our reducer

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
);

