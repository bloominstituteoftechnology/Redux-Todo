const initialState = {
    todos: []
}

export default (state=initialState, action) => {
    switch(action.type) {
        case "ADD_TODO":
        return {todos: [...state.todos, action.payload]}
        case 'TOGGLE_COMPLETED':
        const copy = [...state.todos];
        copy.forEach(todo => {
            if(todo.id===action.payload){
                todo.completed= !todo.completed
            }
        })
        return {todos: [...copy]};
        case 'DELETE_TODO':
        return {todos: state.todos.filter(todo => todo.id !== action.payload)}
        default:
        return state;
    }
}