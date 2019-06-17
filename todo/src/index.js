import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './components/Todo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'

const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
    <Todo />
</Provider>,
 document.getElementById('root'));
