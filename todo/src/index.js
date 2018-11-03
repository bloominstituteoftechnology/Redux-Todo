import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import reducer  from './reducers/reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

 const store = createStore(
    reducer
   );
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <Provider store={store} >
      <App />
     </Provider>
    ,rootElement
  );