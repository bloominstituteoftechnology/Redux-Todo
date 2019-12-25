import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer, { CHANGE_TITLE }  from "./reducers"

const store = createStore( reducer );

// do we need this line? i think it simply helps us get the state.
store.subscribe(() => console.log(store.getState()));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

