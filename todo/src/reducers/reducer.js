import { INPUT_HANDLER, ADD_TODO, CLEAR_INPUT, TOGGLE_COMPLETED, CLEAR_COMPLETED } from '../actions/index'

const initialState = {
  todos: [
    {
      id: 1,
      value: "Buy Valentines Cards",
      completed: false
    },
    {
      id: 2,
      value: "Send Report",
      completed: false
    },
    {
      id: 3,
      value: "Pay Bills",
      completed: false
    },
    {
      id: 4,
      value: "Clean Bathroom",
      completed: true
    }
  ],
  inputText: ""
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case INPUT_HANDLER:
      return { ...state, inputText: action.inputText}
    case ADD_TODO:
      return { ...state, todos: state.todos.concat(action.payload)}
    case CLEAR_INPUT:
      return { ...state, inputText: ""}
    case TOGGLE_COMPLETED:
      return { ...state, todos: action.payload}
    case CLEAR_COMPLETED:
      return { ...state, todos: action.payload}
    default:
      return state
  }
}

export default reducer;