import { ADDTODO, REMOVETODO, TOGGLETODO } from '../actions/actions';

const initState = {
 todos: [{
  task: '',
  completed: false 
 }]
}

export default (state = initState, action) => {

 switch (action.type) {
  case ADDTODO: 
  return {}
  default:
  return state 
 }
}