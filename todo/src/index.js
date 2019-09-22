import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import Todo from './components/Todo';
import todoApp from './reducers';

const store = createStore(todoApp);
// Store receives reducer's state and modifies state and rerenders.
ReactDOM.render(
    <Provider store={store}> 
        <Todo />
    <Provider/>, 
    document.getElementById('root')
);

