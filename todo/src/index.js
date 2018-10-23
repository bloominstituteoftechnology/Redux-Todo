import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Redux imports
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import addNewTodo from './reducers';


const store = createStore(
    addNewTodo,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

