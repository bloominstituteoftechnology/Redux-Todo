export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

const initState = {
    title: 'Todos',
    todos: [{ todoInput: 'Keep up with the struggling train', completed: false }]
  };

  const reducer = (state = initState, action) => {
    switch (action.type) {
 
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, { todoInput: action.payload, completed: false }]
        };
      case TOGGLE_TODO:
        // loop through todos
        // find the one we clicked on
        // toggle only that todos's complited status
        return {
          ...state,
          todos: state.todos.map((todo, index) => {
            if (index === action.payload) {
              return { ...todo, completed: !todo.completed };
            } else {
              return todo;
            }
          })
        };
      default:
        return state;
    }
  };
  
  export default reducer;