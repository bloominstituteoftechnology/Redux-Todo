import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore } from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducers';


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        
      </div>
      </Provider>
    );
  }
}

export default App;
