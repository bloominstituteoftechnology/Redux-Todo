
const inititalState = {
    todos: [
        { value: '', completed: false}
    ]
};

export const reducer = (state = inititalState, action) => {
    switch (action.type){
        case 'ADD_TODO':
            const newTodo = { id: Date.now(), value: action.payload, completed: false }
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
            default:
                return state; 
    }
}