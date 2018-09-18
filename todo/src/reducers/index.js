import { ADD_TODO } from '../actions'

const initialState = {
  todos: [
    {
      value: "Code Challenge",
      completed: false
    },
    {
      value: "Morning Standup",
      completed: false
    },
    {
      value: "Lecture",
      completed: false
    },
    {
      value: "Project Time",
      completed: false
    },
    {
      value: "Evening Standup",
      completed: false
    }
  ]
}

export default function (state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
    console.log(action)
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    default:
      return state
  }
}
