import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import list from './reducers';
import ToDo from './components/ToDo';

const initState = JSON.parse(localStorage.getItem('store')).winState;

const store = initState
  ? createStore(list, initState)
  : createStore(list);

store.subscribe(() => {
  const state = JSON.stringify({ winState: store.getState(), });
  localStorage.setItem('store', state);
});

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
