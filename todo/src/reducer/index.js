import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, HANDLE_INPUT, DELETE_COMPLETED} from '../actions'

const initialState = {
  todos: [
    {
      text: 'Sample To Do',
      id: 4321432143,
      completed: false,
    }
  ],
  text: ''
}
export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_INPUT:
      return Object.assign({}, state, {text: action.payload})
    case ADD_TODO:
      if (state.text === ''){
        return Object.assign({}, state, {todos: state.todos, text: ''})
      } 
      const newId = Date.now();
      let newTodo = {
        id: newId,
        text: state.text,
        completed: false,
      }
      let addTodos = state.todos.slice();
      addTodos.push(newTodo);
      return Object.assign({}, state, {todos: addTodos, text: ''});
    case DELETE_TODO:
      return {todos: state.todos.filter(item => item.id !== action.payload)}
    case TOGGLE_TODO:
      console.log(state.todos, action.payload)
      return {
        todos: state.todos.map(item => {
          if (item.id === action.payload) {
            return {...item, completed: !item.completed}
          }
          return {...item}
        })
      }
    case DELETE_COMPLETED:
      return {
        todos: state.todos.filter(item => {
          return !item.completed
        })
      }
    default:
      return state;
  }
}
