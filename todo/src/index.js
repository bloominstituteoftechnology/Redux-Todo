import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";

import todoReducer from "./reducers"
import './index.css';
import App from './App';

const store=createStore(
todoReducer, 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
