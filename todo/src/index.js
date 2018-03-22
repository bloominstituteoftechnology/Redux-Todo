import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todos from './reducers';
import ToDoList from './components/ToDoList.js';

const store = createStore(todos);
ReactDOM.render(<Provider store={store}>
<ToDoList store={store}/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
