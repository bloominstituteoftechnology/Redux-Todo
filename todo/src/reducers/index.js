export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

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
            console.log('hello from reducer');
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

        default:
            return state
    }
}