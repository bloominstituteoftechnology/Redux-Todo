let todos = [
    {
        value: 'Walk the dog.',
        completed: false
    },
    {
        value: 'Learn Redux.',
        completed: false
    },
]


export default (state = {todos}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {todos : [...todos, action.payload]});
        case 'TODO_COMPLETED':
            let newTodos = state.todos.slice();
            newTodos[action.payload].completed = !newTodos[action.payload].completed
            return Object.assign({}, state, {todos: newTodos})
        default:
            return state;
    }
}