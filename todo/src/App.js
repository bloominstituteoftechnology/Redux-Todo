import React, { Component } from 'react';

import { Footer } from './components';
import { TodoAddForm, TodoList } from './containers';

class App extends Component {
  render() {
    return (
      <div className="App">
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
