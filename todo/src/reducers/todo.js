import { ADD_TODO } from '../actions/index';
import { CHANGE_TODO } from '../actions/index';

export const initialState = {
    todos: [
        
    ]
   
}


const todos = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_TODO:
        let input = action.text
            

        case ADD_TODO:
          
          console.log(input);
          return [
            ...initialState, {text: input, completed: false}
        ]
        
                
            
        default: 
            return state
    }
}

export default todos;