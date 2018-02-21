import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todos from './reducers/todos';
import TodoAdder from './components/TodoAdder/TodoAdder';
import TodoList from './components/TodoList/TodoList';
import { saveState } from './localStorage';

const store = createStore(todos);

ReactDOM.render(
<Provider store={store}>
  <div>
    <TodoList />
    <TodoAdder />
  </div>
</Provider>, document.getElementById('root'));
registerServiceWorker();
