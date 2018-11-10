import { ADDTODO, REMOVETODO, TOGGLETODO } from '../actions/actions';

const initState = 
 [{
  task: 'Study Redux',
  completed: false,
  id: 0
 }]


export default (state = initState, action) => {

 switch (action.type) {
  case ADDTODO: 
  // return Object.assign({}, state, {task: action.todo, completed: false})
  // return [state.todos, {task: action.payload.task, completed: action.payload.completed}]
  return Object.assign([], state).concat({task: action.payload.task, completed: action.payload.completed})
  case REMOVETODO: 
  return {todos: action.payload}
  case TOGGLETODO:
  return {todos: action.payload}
  default:
  return state
 }
}

