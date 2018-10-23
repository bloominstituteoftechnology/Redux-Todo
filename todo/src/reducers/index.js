import { ADD_TODO, TOGGLE_TODO, HANDLE_CHANGE } from "../actions"

const initialState = {
    todos: [],
    todo: ''
}

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case HANDLE_CHANGE:
            return { ...state, todo: action.payload }
        case ADD_TODO:
            return {
                ...state, 
                todos: [
                    ...state.todos, 
                    {value: action.payload, completed:false}
                ]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                    if (index === action.payload) {
                        return { ...todo, completed: !action.payload};
                    } else {
                        return todo;
                    }
                })
            };
    }
};
export default todoReducer;