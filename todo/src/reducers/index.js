import { INPUT } from '../actions';

export default (state = [], action) => {
    console.log(action) // = {type:'INPUT', todo: 'clean the dog'}
    switch (action.type) {
        case INPUT:
            return [
                ...state,
                {
                thingTodo: action.todo,  //clean the dog
                completed: false
                }
            ]
        default:
            return state
    }
}