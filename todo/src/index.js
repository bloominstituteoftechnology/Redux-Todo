import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import redux components and reducer
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./Components/reducer"

//create store
//pass the store to the provider
ReactDOM.render(
   // <Provider store={createStore(reducer)}>
   <Provider store={createStore(reducer, /* preloadedState, */
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <App />
   </Provider>, 
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
