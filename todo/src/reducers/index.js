import {ADDTODO, TOGGLECOMPLETE} from '../actions'



const initialState ={

    todo:[
        {
            newTodo:'HI',
             id:1,
             completed: false
         
        }

    ]

} 



const rootReducer = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
      case ADDTODO:
        return {
          todo: [...state.todo, action.payload]
        };
        case TOGGLECOMPLETE:
        console.log(state)
        return{
            todo:state.todo.map(todo =>{
                if(todo.id !== action.payload.id){
                    return todo
                }
                else{
                    return action.payload
                }
            }
                )
        }
           
        
    
      default:
        return state;
    }
  };

  export default rootReducer

