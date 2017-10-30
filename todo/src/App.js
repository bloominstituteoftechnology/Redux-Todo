import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import list from './reducers';
import ToDo from './components/ToDo';

const store = createStore(list);

console.log(store);
class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <ToDo />
      </Provider>
    );
  }
}

export default App;
