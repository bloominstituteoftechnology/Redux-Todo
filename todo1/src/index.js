import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import TodoList from './components/TodoList';
import reducer  from "./reducers";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}


const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
