import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from '../actions';

const initialState = {
  todos: [
    {
      text: 'Do homework',
      completed: false,
      id: 0
    }
  ],
  name: 'Willie'
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [...state.todos, action.payload]
      });
    
    case COMPLETE_TODO:
      const id = action.payload;
      const todos = state.todos.map(todo => {
        console.log("todoid", todo.id, id)
        if (todo.id === id) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      });
      return Object.assign({}, state, { todos: todos });
    
     case REMOVE_TODO:
      console.log("in the remove todo")
      return 
     
      default:
      return state;
  }
};


