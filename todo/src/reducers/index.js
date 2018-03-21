import {
    ADD_TODO, 
    DELETE_TODO,
    COMPLETE,
    UNCOMPLETE,
} from '../actions/';

const initialState = {todos: []};



export default (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                ...state,
                todos:[
                ...state.todos,
                {
                    id: action.id,
                    text: action.text,
                    completed: action.false
                }
        ]})
            case DELETE_TODO:
                return Object.assign({}, state, {todos: state.todos.filter(todo => todo.id !== action.id)});
            default:
                return state;
    }
}