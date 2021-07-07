export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

const initialState = {
  todos: [{ name: 'Walk the Dog', completed: false }]
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
    return {
      ...state,
      todos: [...state.todos, {name: action.payload, completed: false}]
    };

    case TOGGLE_COMPLETED:
    return {
      ...state,
      todos: state.todos.map((todo, index) => {
        if(index === action.payload){
          return { ...todo, completed: !todo.completed};
        } else {
          return todo;
        }
      })
    };

    default:
      return state;
  }
}

export default reducer;
