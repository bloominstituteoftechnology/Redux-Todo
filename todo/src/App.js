import React, { Component } from 'react';
import react from 'react';
import { createStore } from 'redux';
import TodoList from './Component/TodoList';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import listStorage from './Reducers';
import './App.css';

const store = createStore(listStorage);

class App extends Component {
  render() {
    return ( 

      <div>
      <Provider store={store}>
      <TodoList className='todos'/>
      </Provider>

      </div>
 
      );
  }
}
export default App;




