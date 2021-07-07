import { ADD_TODO, TOGGLE_TODO } from '../actions';


const defaultTODOS = {
  todos: [
    {value: 'Go to the gym', completed: false},
    {value: 'Pick up the dog from vet', completed: false}
  ]
}


export default (todos = defaultTODOS, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, todos, {todos: todos.todos.concat(action.payload)});
    case TOGGLE_TODO:
        todos.todos.filter(todo => {
          if (todo.value === action.payload) {
            todo.completed = !todo.completed
          }
        })
        console.log(todos);
        return Object.assign({}, todos)
      break;
    default:
      return todos;
  }
};
