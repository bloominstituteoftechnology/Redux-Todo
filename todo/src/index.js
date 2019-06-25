import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Container from './components/Container'

import { todoReducer} from './Reducers/reducers';

const combinedReducer = combineReducers({
    todos: todoReducer
  });

const store = createStore(
 combinedReducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
<Provider store={store}>
    <Container />
</Provider>,
document.getElementById('root')
);


