import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import itemReducer from "./reducer"
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './App';

const store = createStore(itemReducer)

render(
    <Provider store={store} >
    <App />
    </Provider>,
    document.getElementById('root')
)


serviceWorker.unregister();


