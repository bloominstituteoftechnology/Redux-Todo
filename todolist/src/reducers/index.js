import {ADD_TODO_ACTION} from "../actions/index"

const initialState = {todoList: []}


export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO_ACTION:
    return [...state, action.payload]


    default:
    return state;
  }
}
