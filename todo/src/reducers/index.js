import {
 ADD_NEW_TODO,
 TOGGLE_COMPLETE,
 DELETE_TODO,
 DELETE_COMPLETE,
 DELETE_ALL,
} from '../actions';

const initialState = {
 todos: [
  {
   value: 'Walk the dog.',
   completed: false,
   id: 1,
   // id: Math.random()
  },
 ],
};

export const todoReducer = (state = initialState, action) => {
 switch (action.type) {
  case ADD_NEW_TODO:
   let newObj = [...state.todos, action.payload];
   console.log('action state: ', state.todos.concat(action.payload));
   return Object.assign({}, state, { todos: newObj, id: state.todos.id + 1 });
  case TOGGLE_COMPLETE:
   const todoS = state.todos.map(item => {
    if (item.id === action.payload) {
     item.completed = !item.completed;
     return item;
    } else {
     return item;
    }
   });
   return Object.assign({}, state, { todos: todoS });
  // return state.todos.map(item => {
  //     if (item.id === action.payload) {
  //       return Object.assign({}, item, { completed: [...item.completed, !item.completed] });
  //     } else {
  //       return item;
  //     }
  //   });
  case DELETE_TODO:
   const filtered = state.todos.filter(item => item.id !== action.payload);
   return Object.assign({}, state, { todos: filtered });
  case DELETE_COMPLETE:
   const filteredC = state.todos.filter(item => item.completed !== true);
   return Object.assign({}, state, { todos: filteredC });
  case DELETE_ALL:
   const filteredAll = state.todos.filter(item => item.id === -100);
   return Object.assign({}, state, { todos: filteredAll });
  default:
   return state;
 }
};
