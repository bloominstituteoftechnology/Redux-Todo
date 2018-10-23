import { ADD_TODO, UPDATE_TODOITEM } from '../actions';


const initialState = {
    toDoArray:[...toDoArray,],
    value:'',
    completed:''
  }



export default (state = initialState, action) => {
    console.log('hi');
    switch (action.type) {
      case ADD_TODO:
        return state.toDoArray.push({value:state.value, completed:false});
      case UPDATE_TODOITEM :
        if (state.completed === false) {
            return {completed:true}
        } else if (state.completed === true){
            return {completed:true}
        }
        
    default:
    return state;
    }
  };