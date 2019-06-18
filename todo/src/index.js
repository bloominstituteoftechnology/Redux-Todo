import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoForm from './components/TodoForm';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'
import 'mdbreact/dist/css/mdb.css' 

const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
    <h1>Redux Todo</h1>
    <TodoForm />
</Provider>,
 document.getElementById('root'));
