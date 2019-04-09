import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED } from '../actions'

//Step 1: Create store and initial list of todo Items
const initialState = {
  title: 'Todo List',
  todoItems: [
    { todoItem: 'Find a girlfriend', completed: false, id: 1 },
    { todoItem: 'not lose girlfriend', completed: false, id: 2 },
  ],
}

//Step 2: Create reducer function and pass into createStore
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newtodoItem = {
        todoItem: action.payload,
        id: Date.now(),
        completed: false,
      }
      return {
        ...state,
        todoItems: [...state.todoItems, newtodoItem],
      }

    case TOGGLE_COMPLETED:
      return {
        ...state,
        todoItems: state.todoItems.map(item =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
      }

    case DELETE_TODO:
      return {
        ...state,
        todoItems: state.todoItems.filter(
          item => !(item.id === action.payload)
        ),
      }
    default:
      return state
  }
}

export default reducer
