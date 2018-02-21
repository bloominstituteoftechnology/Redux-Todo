import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import Todo from './components/Todo';
import todo from './reducers';

const store = createStore(listItem);

ReactDOM.render(
    <Provider store={store}> 
        <Todo />
    <Provider/>, 
    document.getElementById('root')
);

