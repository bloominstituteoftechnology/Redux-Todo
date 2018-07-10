import { ADD_TODO, CHANGE_TODO } from "../actions";


const initialState = {
    todos: [],
    todo: {
        text: '',
        completed: false,
    },
    text: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
        return Object.assign({}, state, { todos: [...state.todos, action.payload]})
        case CHANGE_TODO:
        return Object.assign({}, state, { text: action.payload })
        default:
        return state;
    }
}