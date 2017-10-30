import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import list from './reducers';
import ToDo from './components';
import './App.css';

const store = createStore(list);

console.log(store);
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
