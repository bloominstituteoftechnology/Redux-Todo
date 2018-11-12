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
  // return Object.assign([], state).filter((item, index) => {
  //  return state.indexOf(item) !== index
  // })
  return Object.assign([], state.filter((item, index) => {
   console.log(item, state, index)
   return state.indexOf(item) !== index
  }))
  case TOGGLETODO:
  return Object.assign([], state.map((item, index) => {
   return item.index === action.id ?
   Object.assign([], item, {task: item.task, completed: !item.completed}) :
   item 
  }))
  default:
  return state
 }
}

