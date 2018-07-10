let initialState = {todos: []}


export default (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_TODO':
            return Object.assign({}, state, {todos : [...state.todos, action.payload]});

        case 'TODO_COMPLETED':
            let newTodos = state.todos.slice();
            newTodos[action.payload].completed = !newTodos[action.payload].completed
            return Object.assign({}, state, {todos: newTodos})
        
        case 'DELETE_TODO':
            return Object.assign({}, state, {todos: state.todos.filter((todo, index) => index!==action.payload)})

        default:
            return state;
    }
}