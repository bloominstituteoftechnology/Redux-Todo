import { ADD_TODO, TOGGLE_TODO} from "../actions";

const initialState = {
  todos: [{ text: "Clean room", completed: false, id: 0 }]
};
let id = 1
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return  {
        ...state,
        todos: [...state.todos, {
            text: action.payload,
            completed: false,
            id: id++
        }
        ]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.payload) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      };
    default:
      return state;
  }
};
