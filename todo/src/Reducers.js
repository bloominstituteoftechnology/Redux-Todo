import { createStore } from 'redux'

// const store = createStore(
//     function (...args) {
//     console.log('Reducer was called with args', args)
// })

var defaultState = {
    todo: {
      items: []
    }
  };

const todo = (state, action) => {
     switch (action.type) {
        case 'ADD_TODO':
        console.log('...state ' + action.text);
        return {todo: {items: [...state.todo.items,{action: action.text, 
                completed:false}]}}
                
        default:
        return state
    } 
}

let store = createStore(todo, defaultState);


export default store;
