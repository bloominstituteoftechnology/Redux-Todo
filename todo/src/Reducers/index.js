import {DELETETODO,ADDTODO,GETTODOS} from '../Actions'

const initialState = {
  toDoList:[{
      id:1,
      desc:'send Kam alot of cookies',
      status:false
  }]
}


export default (state = initialState, action) => {
    console.log('actions...',action)
    switch (action) {
      case ADDTODO:
        return state;
      case DELETETODO:
        return state;
      default:
        return state;
    }
  };
  