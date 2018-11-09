import { ADDTODO, REMOVETODO, TOGGLETODO } from '../actions/actions';

const initState = {
 todos: [{
  task: 'Study Redux',
  completed: false 
 }]
}

export default (state = initState, action) => {

 switch (action.type) {
  case ADDTODO: 
  return {}
  case REMOVETODO: 
  return {}
  case TOGGLETODO:
  return {}
  default:
  return state 
 }
}