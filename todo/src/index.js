import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ToDo from './components/ToDo';
import todo from './reducers';
import './ToDo.css'


const store = createStore(todo);

// import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <ToDo />
    </Provider>, document.getElementById('root'));

export default store;