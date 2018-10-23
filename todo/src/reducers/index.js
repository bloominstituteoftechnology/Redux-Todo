import {ADD_TASK} from '../actions'

const initialState = {
    todos: [
        {
        task: 'Learn Redux',
        completed: false,
    },
    {
        task: 'Don\'t mutate',
        completed: false
    }
]
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
        return {
            ...state,
            todos: [...state.todos, {task: action.payload, completed: false}]
        }
        default:
        return state;
    }

}

export default todoReducer;