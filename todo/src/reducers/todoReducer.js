import { TODO_ADDED, TODO_CLICKED } from "../actions";

const defaultTodos = {
  todos: [
    {id: 0, value: 'To do 0', completed: false},
    {id: 1, value: 'To do 1', completed: false},
    {id: 2, value: 'To do 2', completed: false},
    {id: 3, value: 'To do 3', completed: false},
    {id: 4, value: 'To do 4', completed: false}
  ]
};

const todoReducer = (state = defaultTodos, action) => {
  let newTodos, newState;
  switch (action.type) {
    case TODO_ADDED:
      newTodos = state.todos.slice();
      newTodos.push(action.payload);
      console.log('newTodos', newTodos);
      newState = {todos: newTodos};
      return newState;
    case TODO_CLICKED:
      newTodos = state.todos.slice();
      newTodos.forEach(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
      console.log('Set completed state of', action.payload);
      newState = {todos: newTodos};
      console.log('newState: ', newState);
      return newState;
    default:
      return state;
  }
};

export default todoReducer;