import { ADD_TODO } from '../actions'

const initialState = {
  list: ["Code Challenge", "Morning Standup", "Lecture", "Project Time", "Evening Standup"],
}

export default function (state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, action.payload.newTodo]
      }
    default:
      return state
  }
}
