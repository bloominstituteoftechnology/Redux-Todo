import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoList from './Components/TodoList';
import listStorage from './Reducers';

 
const store = createStore(listStorage);

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <TodoList/>
        </Provider>
      </div>
    );
  }
}

export default App;
