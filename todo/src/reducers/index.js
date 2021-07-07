//import actions
import { ADD_TODO, COMPLETE_TODO } from '../actions';

//set initial state value
const initialState = [
    {task: 'Finish Redux Todo List',
     completed: false,
     id: Date.now(),}
]

export const todoReducer = ( state = initialState, action) => {
    switch (action.type){
        case ADD_TODO:
            let tempState = state.concat(action.payload)
            return tempState;
        case COMPLETE_TODO:
            let completedState = state.map(item => {
                if(item.id===action.payload) {
                    return Object.assign({}, item, {completed: !item.completed})
                } else {
                    return item} //Object.assign so we don't mutate the orginal object
            })
            return completedState;
        default:
            return state;
    }
}