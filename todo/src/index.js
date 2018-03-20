import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './containers/container'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import  todos from './reducers/todos';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(todos);

ReactDOM.render(
<Provider store={store}>
    <Todo />
 </Provider>,
    document.getElementById('root'));
registerServiceWorker();
