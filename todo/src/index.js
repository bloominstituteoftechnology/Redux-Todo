import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import todos from './reducers';

const store = createStore(
  todos,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );