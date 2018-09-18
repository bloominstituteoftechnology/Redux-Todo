export const initialState = {
    todo: [{ text: 'test', completed: false, id: 0 }, { text: 'howdy', completed: false, id: 1 }],
}
 export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todo: [...state.todo, action.payload]
            };

        case 'Toggle_TODO':
            let todos = state.todo.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed;
                    return todo;
                } else{
                    return todo;
                }
            });
            return {
                ...state,
                todo: todos
            }
        default:
            return state;
    }
} 