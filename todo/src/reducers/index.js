export const initialState = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : {todo: [],}

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todo: [...state.todo, action.payload]
            };
        case 'TOGGLE_TODO':
            let todos = state.todo.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed;
                    return todo;
                } else {
                    return todo;
                }
            });
            return {
                ...state, 
                todo: todos
            }
        case 'DELETE_TODO':
            let todos2 = state.todo.filter(todo => todo.id !== action.payload );
            return {
                ...state,
                todo: todos2
            }
        default:
            return state;
    }
}