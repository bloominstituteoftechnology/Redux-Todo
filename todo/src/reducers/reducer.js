import { ADD_TODO, DELETE_TODO } from '../actions/actions';

let defaultState = {
  todos: [
    {
      name: "Todo Baseline",
      completed: false
    },
    {
      name: "Second Todo Baseline",
      completed: false
    }
  ]
};

export default function reducer(state = defaultState, action){
  switch(action.type){
    case ADD_TODO:
      let newTodos = [ ...state.todos, action.payload]
      return Object.assign({}, state, {todos: newTodos });
    case DELETE_TODO:
      let updatedTodo = state.todos.filter(todo => todo.name !== action.name);
      return Object.assign({}, state, {todos: updatedTodo})
    default:
     return state;
  }
}
