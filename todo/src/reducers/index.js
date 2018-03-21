import {REMOVE,SWITCHDO,ADD} from '../actions';


const defaultState ={
  todos:[]
}

export default (state = defaultState,action) => {
  switch(action.type){
    case ADD:
      return Object.assign({},state,{
        todos:[...state.todos,{text: action.text,completed: action.completed}]
      });
    case SWITCHDO:
      return Object.assign({},state,{
        todos:state.todos.map( (e,i)=>{
          if(i === action.id){
            e.completed = !e.completed;
          }
          return e;
        })
      });
    case REMOVE:
      return Object.assign({},state,{
        todos:state.todos.map( (e,i)=>{
          if(i !== action.id){
            return e;
          }
          else{
            return undefined;
          }

        })
      });
    default:
      return defaultState;
  }



};
