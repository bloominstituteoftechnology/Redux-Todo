import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import { Provider } from 'react-redux';
import  reducer  from './reducers/reducer';
import App from './App';

const enchancer = compose(
  persistState(/*paths, config*/),
)


const store = createStore(reducer, enchancer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



