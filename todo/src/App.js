import React, { Component } from 'react';

import Todos from './components/Todos';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      todos: []
    }
  }
  render() {
    return (
      <div className="App">
        {!(this.state.todos) ? 
          <div>No todos - add some </div>
        :
          <Todos todos={this.state.todos} />
        }
      </div>
    );
  }
}

// export default App;
