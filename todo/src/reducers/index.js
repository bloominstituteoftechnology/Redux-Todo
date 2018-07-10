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
        const todo = Object.assign({}, state.todo, { text: state.text});
        return Object.assign({}, state, { todos: [...state.todos, todo]})
        case CHANGE_TODO:
        return Object.assign({}, state, { text: action.payload })
        default:
        return state;
    }
}