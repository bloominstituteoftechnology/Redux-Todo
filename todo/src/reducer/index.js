import {ADD_TODO, TOGGLE_TODO} from '../actions'

const initialState = {
  todos: [
    {
      text: 'Sample To Do',
      id: 4321432143,
      completed: false,
    }
  ]
}
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
    // Fill case return   
      return {};
    case TOGGLE_TODO:
    //Fill case return 
      return {}
    default:
      return state;
  }
}
