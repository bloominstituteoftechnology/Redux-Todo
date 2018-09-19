import { ADD_TODO } from '../actions';
import { COMPLETE_TODO } from '../actions';

export const initialState = {
    todos: [
        {
            id: 0,
            completed: false,
            text: "Walk the dog."
        },

        {
            id: 1,
            completed: false,
            text: "Walk the cat."
        },

        {
            id: 2,
            completed: false,
            text: "Walk the monkey."
        }
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [...state.todos, action.payload]
            });
        case COMPLETE_TODO:
            
            const id = action.payload;
            const todos = state.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                    return todo;
                } else {
                    return todo;
                }
            })
            return Object.assign({}, state, { todos: todos });

        default: 
        return state;
    }
}