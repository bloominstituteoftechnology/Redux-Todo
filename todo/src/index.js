import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AddTodo from '../src/containers/AddTodo';
import VisibleTodoList from '../src/containers/VisibileTodoList';
// import Todo from './components/Todo';
import todo from './reducers';
import Footer from '../src/components/Footer';
import App from './App';

import './index.css';

const store = createStore(todo);

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
