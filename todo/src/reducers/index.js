import { ADD_TASK } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
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