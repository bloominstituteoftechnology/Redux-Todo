import {DELETETODO,ADDTODO} from '../Actions'

const initialState = {
  toDoList:[{
      id:1,
      desc:'send Kam alot of cookies',
      status:false
  }]
}


export default (state = initialState, action) => {
    console.log('actions...',action)
    switch (action.type) {
      case ADDTODO:
        return {
          ...state,
          toDoList:[...state.toDoList,{id:(state.toDoList.length+1),desc:action.payload,status:false}]
        }
      case DELETETODO:
        let x = state.toDoList.filter(el=>{
          return el.id !== action.payload
        })
        return {
          ...state,
          toDoList:state.toDoList.filter(el=>{
            return el.id != action.payload
          })
        }
      default:
        return state;
    }
  };
  