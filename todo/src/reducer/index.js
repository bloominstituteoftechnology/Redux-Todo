import {ADD_TODO, TOGGLE_TODO, HANDLE_INPUT} from '../actions'

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
      console.log(action.payload)
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
    case TOGGLE_TODO:
    //Fill case return 
      return {}
    default:
      return state;
  }
}
