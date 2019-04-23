import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import reducer from './Component/reducers';


const store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()));

const rootElem = document.getElementById('root');


ReactDOM.render( 
  <Provider store={store}>
  < App />
  </Provider>, rootElem);
