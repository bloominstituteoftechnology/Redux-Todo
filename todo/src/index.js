import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoForm from './components/TodoForm';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'
import 'mdbreact/dist/css/mdb.css' 

const store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
    <div className="background-container">
        <div className="application-container">
            <h2 style={{ fontSize: "3rem", marginRight: "1rem" }}className="display-3 mb-0 pt-md-5 pt-5 white-text font-weight-bold">Redux Todo</h2>
            <TodoForm />
        </div>
    </div>
</Provider>,
 document.getElementById('root'));
