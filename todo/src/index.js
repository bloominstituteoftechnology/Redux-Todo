import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer, { ADD_GOAL } from "./reducers";
import Goal from './components/Goal';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
               This is my TODO index
               <Goal />
            </div>
        );
    }
}

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));
 
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

