import {ADD_TODO_ACTION} from "../actions/index"

const initialState = {
todoList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ACTION:
    return {...state, state: action.text }


    default:
    return state;
  }
}
