import { ADD_ITEM, REMOVE_ITEM } from '../Actions';

const initialState = {
    todos: [
        {
            value: 'Walk the dog',
            completed: false
        }
    ],
    
}
export default (state=initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
         console.log('Reducer',action.payload);
         return {
            ...state,
            todos: [...state.todos,action.payload],
         }   
        // case REMOVE_ITEM:
        //     return {...state, todos: action.payload}
        default:
            return state;
    }
};