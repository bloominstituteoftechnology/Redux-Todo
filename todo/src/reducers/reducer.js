import { INPUT_HANDLER, ADD_TODO } from '../actions/index'

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
  console.log(action)
  switch(action.type) {
    case INPUT_HANDLER:
      return { ...state, inputText: action.inputText}
    case ADD_TODO:
      return { ...state, state.todos:todos.push(action.payload)}
    default:
      return state
  }
}

export default reducer;