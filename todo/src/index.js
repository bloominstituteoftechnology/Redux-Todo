import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from './reducers'
import TodoList from './components/TodoList'

import './index.css';
import './App.css';


const store = createStore(rootReducer);


class App extends Component {
  render() {
    return (
      <div className="App">
       <TodoList />
      </div>
    );
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

