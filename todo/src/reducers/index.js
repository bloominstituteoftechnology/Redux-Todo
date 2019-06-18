
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
        case 'TOGGLE_TODO':
                return{
                    ...state,
                    todos: state.todos.map(todo => {
                        if(action.payload === todo.id) {
                            return {
                                ...todo,
                                completed: !todo.completed

                            };
                        } else {
                            return todo; 
                        }
                    })
                }
        case 'DELETE_TODO':
            return{
                ...state,
                todos: state.todos.filter(todos => {
                    return(
                        todos.completed === false
                    )
                })
            }
            default:
                return state; 
    }
}