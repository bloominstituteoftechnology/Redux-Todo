import { TODO_ADDED } from "../actions/addTodo";

const defaultTodos = {
  todos: [
    {value: 'To do 0', completed: false},
    {value: 'To do 1', completed: false},
    {value: 'To do 2', completed: false},
    {value: 'To do 3', completed: false},
    {value: 'To do 4', completed: false}
  ]
};

const todoReducer = (state = defaultTodos, action) => {
  switch (action.type) {
    case TODO_ADDED:
    const newTodos = state.todos.slice();
    newTodos.push(action.payload);
    console.log('newTodos', newTodos);
    const newState = {todos: newTodos};
      return newState;
    default:
      return state;
  }
};

export default todoReducer;