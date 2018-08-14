import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Container from './components/Container';
import todoApp from './reducers';

const store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  

  ReactDOM.render(
    <Provider store={store}>
      <Container />
    </Provider>,
    document.getElementById('root')
  );