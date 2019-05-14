import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
  todos: [
    { value: 'watch lecture', completed: true, id: 1 },
    { value: 'reach MVP on assignment', completed: false, id: 2 }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
   
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { value: action.payload, completed: false }
        ]
      };
    case TOGGLE_TODO:
    console.log(state.todos)
      return {
        ...state,
        todos: state.todos.map(ele => {
            if (ele.id === action.payload) {
              return {
                ...ele,
                completed: !ele.completed
              };
            }
            return ele;
        }
        )

      };
    default:
      return state;
  }
}


export default reducer;
