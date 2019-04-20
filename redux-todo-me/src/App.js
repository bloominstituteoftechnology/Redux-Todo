import React, { Component } from 'react';
import TodoApp from './TodoApp'
import  store  from './Store'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <TodoApp />
      </Provider>
    )
  }
}

export default App;
