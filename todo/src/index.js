import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import Todo from './components/Todo';
import state from './reducers';
import { ADD_ITEM, TOGGLE_COMPLETE } from './actions';


const store = createStore(state)
// console.log(store.getState());

ReactDOM.render(<Provider store={store}>
    <Todo 
    todos={store.getState()}
    onInput={() => store.dispatch({ type: ADD_ITEM })}
    onToggle={() => store.dispatch({ type: TOGGLE_COMPLETE })}
    /> 
  </Provider>, document.getElementById('root'));
