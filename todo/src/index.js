import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AddToDo from './components/AddToDo';
import ItemList from './components/ItemList';
import reducers from './reducers';

import './index.css';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <AddToDo />
      <ItemList />
    </div>
  </Provider>,
  document.getElementById('root')
);