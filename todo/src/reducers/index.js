import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from '../actions';

const initialState = [{ text: 'Clean Garage', completed: false, id: 0 }];

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
        return Object.assign({}, state, {
            todos: [todos.state, action.payload]
        });
        case UPDATE_TODO:
        const id = action.payload;
        const todos = state.todos.map(todo => {
            if (todo.id === id) {
                todo.updated = !todo.updated;
                return todo;
            } else {
                return todo;
            }
        })
       return Object.assign({}, state, { todos: todos });
       default:
        return state;
    }
};

 // export default todosReducer;