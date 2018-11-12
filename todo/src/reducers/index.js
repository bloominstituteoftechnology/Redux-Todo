import { ADD_TODO, MARK_DONE } from "../actions";

const initialState = {
  todos:[{
    value: 'Eat',
    completed: false,
    id: 0
  }]
}

 export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
        {
          value: action.payload.todo,
          completed: action.payload.completed,
        }
          
        ]   
      });
      case MARK_DONE:
        const todos = state.todos.map(todo => {
          if (todo.id === action.payload.id){
              todo.completed = !todo.completed;
              return todo;
          }
        })
       
          return Object.assign({}, state, { todos: todos });
        default:
          return state;   
  }
};

