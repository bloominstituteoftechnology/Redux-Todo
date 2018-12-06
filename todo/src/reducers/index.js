import { ADD_TODO } from '../actions';
import { TOGGLE_STRIKE } from '../actions'; 

const initialState = { 
    todos: [
        {
        text: 'Walk the dog.',
        completed: false,
        }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        
        case ADD_TODO:
            console.log(action.payload, 'action payload')
           const newObj = Object.assign({}, state);
           newObj.todos.push(action.payload)
           return newObj;


        case TOGGLE_STRIKE: 
            newObj[action.payload].completed = !newObj[action.payload].completed
           return newObj;
    
        default: 
            return state;
        
        
        // case DELETE_ACTION:
        // // delete button action
        // default:
        //     return state;
    }
}