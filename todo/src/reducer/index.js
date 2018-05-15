import { ADD_TODO, TOGGLE_TODO } from '../actions'

const initialState = {
    todos: [
    {
        text: "Finish this repo", 
        completed: false,
        id: 0
    }
],
}
export const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [...state.todos, action.payload]
            });
        case TOGGLE_TODO:
        const id = action.payload;
        const todos = state.todos.map(todo => {
            if (todo.id === id) {
            todo.completed = !todo.completed;
            return todo;
         } else {
                return todo;
            }
        });
        return Object.assign({}, state, { todos: todos });
        default:
            return state;
        }
    };