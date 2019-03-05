import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from "../actions";

//Step 1: Create store and initial list of todo Items
const initialState = {
  title: "Todo List",
  todoItems: [
    { todoItem: "Walk the dog", completed: false, id: 3453543 },
    { todoItem: "Take out the trash", completed: false, id: 12321312 }
  ]
};

//Step 2: Create reducer function and pass into createStore

function reducer(state = initialState, action) {
  console.log("inside reducer", action);
  {
    switch (action.type) {
      case ADD_TODO:
        const newtodoItem = {
          todoItem: action.payload,
          id: Date.now(),
          completed: false
        };
        return {
          ...state,
          todoItems: [...state.todoItems, newtodoItem]
        };

      case TOGGLE_COMPLETED:
        return {
          ...state,
          todoItems: state.todoItems.map(item =>
            item.id === action.payload
              ? { ...item, completed: !item.completed }
              : item
          )
        };

      case DELETE_TODO:
        return {
          ...state,
          todoItems: state.todoItems.filter(
            item => !(item.id === action.payload)
          )
        };
      default:
        return state;
    }
  }
}

export default reducer;
