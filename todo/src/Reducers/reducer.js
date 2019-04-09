import {ADD_TODO} from '../Actions/index'

const initialState = {
    todos: [
        {   
            value: "First Todo",
            completed: false
        },

        {
            value: "Walk the dog",
            completed: false
        }
    ]
}

const reducer = (state = initialState, action) => {
    console.log(action);
    console.log(state)
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos:[...state.todos, {
                    value: action.payload,
                    completed: false
                }]
            }
        default: 
            return state;
    }
        
}

export default reducer;