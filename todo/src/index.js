import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index';
import TodoList from './components/TodoList';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
           <TodoList />
    </Provider>, document.getElementById('root'))