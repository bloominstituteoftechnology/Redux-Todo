
import { ADD_ITEM } from '../actions'
import { TOGGLE_COMPLETED } from '../actions'

const initialState = {
    items: [
        {value: 'take out garbage',
        completed: false}, 
        {value: 'buy dinner',
        completed: false}],
    
}

const taskReducer = (state=initialState, action) => {
    console.log('inside reducer', action, state);
    switch (action.type) {
        case ADD_ITEM:
            return {...state, 
                items: [...state.items, {
                    value: action.payload,
                    completed: false
                }]
            }
        case TOGGLE_COMPLETED:
        console.log('action', action)
            return {...state,
                items: state.items.map(task => 
                    task.value === action.payload ? {...task, completed: !task.completed } : task
                )}

               
    default:
    return state;
    }
    
}

export default taskReducer

