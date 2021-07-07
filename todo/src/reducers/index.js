export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

const storedTodoState = JSON.parse(localStorage.getItem("todoState"));
console.log(storedTodoState);

let initialState = {
  todos: [{ todo: "Initial Test", completed: false }]
};
if (storedTodoState) {
  initialState = storedTodoState;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let newToDoState = {
        ...state,
        todos: [...state.todos, { todo: action.payload, completed: false }]
      };
      localStorage.setItem("todoState", JSON.stringify(newToDoState));
      return newToDoState;
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((item, index) => {
          if (index === action.payload) {
            return { ...item, completed: !item.completed };
          } else {
            return item;
          }
        })
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(item => {
          return item.completed === false;
        })
      };
    default:
      return state;
  }
};
