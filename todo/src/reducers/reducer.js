import { ADDTODO, DELETETODO } from './actions';


const initialState = {}
export default = (state = initialState, action) => {
  switch(action.type) {
    case ADDTODO:
      return { todo: state.todo + 1} ** PUSH?
    case DELETETODO:
      return { todo: state.todo + 1 } ** POP?
    
    default:
      return state
  }
  // return initialState;
}