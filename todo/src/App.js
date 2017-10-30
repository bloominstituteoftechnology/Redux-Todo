import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';

const ToDo = (props) => {
  return <p>test</p>
}
let store = {test: 'test',};
// const store = createStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <ToDo />
        </Provider>
      </div>
    );
  }
}

export default App;
