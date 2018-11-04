import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from '../node_modules/react-redux';
import {createStore} from 'redux';
// import todoList from './components/TodoList';
import {connect} from '../node_modules/react-redux';
import reducer from './reducers/reducers';
import { UPDATE_NAME } from './actions'

// const store = createStore(todoList)

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <App />
    </Provider>
, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
