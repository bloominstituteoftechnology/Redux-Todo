export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const REMOVE_COMPLETED = 'REMOVE_COMPLETED';
export const DELETE_TODO = 'DELETE_TODO';

const initializeState = {
    todos: [{ value: 'Task 1', completed: false }]
}

export default (state = initializeState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, {value: action.payload, completed: false }]
            }

        case TOGGLE_COMPLETED:
            // loop through todos
            // find the one we clicked on
            // toggle only that todo's completed status
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                    if (index === action.payload) {
                        return { ...todo, completed: !todo.completed };
                    } else {
                    return todo;
                    }
                })
            };

        case REMOVE_COMPLETED:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.completed === false )
            };

        case DELETE_TODO:
            return {
                // ...state,
                // todos: state.todos.map((todo, index) => {
                //     if (index !== action.payload) {
                //         return todo;
                    // }
                    // return index === action.payload ? null : todo
                // })
                ...state,
                todos: state.todos.filter((todo, index) => index !== action.payload)
                
            }
            

        default:
            return state
    }
}