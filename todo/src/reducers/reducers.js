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
  return Object.assign({}, state, {task: action.todo, completed: false})
  case REMOVETODO: 
  return {todos: action.payload}
  case TOGGLETODO:
  return {todos: action.payload}
  default:
  return state 
 }
}

