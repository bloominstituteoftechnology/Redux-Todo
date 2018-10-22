import { ADD_TODO } from '../actions';

const initialState = 
{
    todo: 
    [
        {
            value: 'Walk the dog.',
            completed: false
        }
    ]
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    value: action.value,
                    completed: false
                }
            ]
        default:
            return state;
    }
}

export default todos;