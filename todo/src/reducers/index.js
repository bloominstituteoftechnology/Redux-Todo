import { ADD_TODO, CHANGE_TODO, TOGGLE_COMPLETION, REMOVE_COMPLETED } from "../actions";


const initialState = {
    todos: [],
    todo: {
        text: '',
        completed: false,
        id: Date.now()
    },
    text: ''
}

export default (state = initialState, action) => {
    console.log(action.type)
    switch(action.type) {
        
        case ADD_TODO:
        return Object.assign({}, state, { todos: [...state.todos, action.payload]})
        
        case CHANGE_TODO:
        return Object.assign({}, state, { text: action.payload })
        
        case TOGGLE_COMPLETION:
        return Object.assign({}, state, { todos: action.payload });

        case REMOVE_COMPLETED:
        return Object.assign({}, state, { todos: action.payload});
        
        default:
        return state;
    }
}