import { ADDTODO, REMOVETODO, TOGGLETODO } from '../actions/actions';

const initState = 
 [{
  task: 'Study Redux',
  completed: false,
  id: 0
 }]

export default (state = initState, action) => {
 const newObj = Object.assign([], state)
 switch (action.type) {
  case ADDTODO: 
  return Object.assign([], state).concat({task: action.payload.task, completed: action.payload.completed})
  case REMOVETODO: 
   newObj.splice(action.payload, 1)
   return newObj 
  case TOGGLETODO: 
   newObj[action.payload].completed = !newObj[action.payload].completed
   return newObj
  default:
  return state
 }
}

