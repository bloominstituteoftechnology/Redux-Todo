import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import todoReducer from './reducer';
import Todo from './component/Todo';
import addTodo from './action';

const store = createStore(todoReducer);

let todos = []

function App() {
    return (
        
        <div className="App">
        <Todo todos={todos} />
        </div>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


registerServiceWorker();
