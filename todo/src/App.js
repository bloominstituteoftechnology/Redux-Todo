import React, { Component } from 'react';

import { Footer } from './components';
import { TodoAddForm, TodoList, TodoCount } from './containers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoCount />
        <div className="Body">
          <TodoAddForm />
          <TodoList />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
