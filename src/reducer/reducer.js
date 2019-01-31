import { ADD_TODO } from "../action/action";

const initialState = {
    todos: [
        {
            value: "Hello",
            completed: 0
        }
    ]
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_TODO':
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

export default reducer;