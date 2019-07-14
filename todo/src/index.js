import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import Title from "./components/Title";
import Todo from "./components/Todo";
import './index.css';

const store = createStore();

function App() {
    return (
        <div className="App">
            <Title />
            <Todo />
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
rootElement
);