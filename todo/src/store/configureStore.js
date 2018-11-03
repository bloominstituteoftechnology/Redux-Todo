import { createStore } from 'redux';

var initialState = {
    todos: []
  }
  
  function reducer(state = initialState, action) {
    if (action.type === 'ADD') {
      return Object.assign({}, initialState, {todos: {value: action.value, completed: action.completed}})
    }
    return state;
  }
  
  var store = createStore(reducer);
  
  store.subscribe(function() {
    console.log('state', store.getState())
  })

  export default store;