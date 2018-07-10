import { HANDLE_INPUT, ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED_TODOS } from '../actions';

const initialState = {
  todos: [
    {
      id: 1,
      value: 'Walk the dog.',
      completed: false
    }
  ],
  input: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_INPUT:
      return Object.assign({}, state, { input: action.payload });

    case ADD_TODO:
      const newId = state.todos.length + 1;
      let todos = state.todos.slice();
      let newTodo = { id: newId, value: state.input, completed: false };
      todos.push(newTodo);
      return Object.assign({}, state, { todos: todos, input: '' });

    case TOGGLE_TODO:
      let toggleTodos = state.todos.slice();
      toggleTodos.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
          return todo;
        }
        return todo;
      });
      return Object.assign({}, state, { todos: toggleTodos });

    case CLEAR_COMPLETED_TODOS:
      let allTodos = state.todos.slice();
      const uncompletedTodos = allTodos.filter(todo => !todo.completed)
      return Object.assign({}, state, { todos: uncompletedTodos });

    default:
      return state;
  }
};
