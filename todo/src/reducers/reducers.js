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
  console.log(action.payload.id)
  return Object.assign([], state.concat({task: action.payload.task, completed: action.payload.completed, id: action.payload.id}))
  case REMOVETODO: 
  return Object.assign([], state).filter((item, index) => {
   // console.log(item.index, index)
   return item.id !== index
  })
  case TOGGLETODO:
  return Object.assign([], state).filter((item) => {
   console.log(`"State.indexOf(item) is: ${state.indexOf(item)}, item.id is: ${item.id}`)
   return state.indexOf(item) === item.id ?
   Object.assign([], state, {task: item.task, completed: !item.completed, id: item.id}) : {task: item.task, completed: item.completed, id: item.id}
  })
  default:
  return state
 }
}

