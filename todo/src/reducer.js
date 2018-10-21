const initialState = {
    todos: [
        {
            text: 'Do laundry',
            completed: false,
            id: 0,
        },
        {
            text: 'Eat breakfast',
            completed: false,
            id: 1,
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD': 
            return Object.assign({}, state, {
                todos: [...state.todos, action.payload]
            })

        case 'COMPLETE': 
            const todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed;
                    console.log(todo)
                    return todo;
                }
                else {return todo}
            })
            return Object.assign({}, state, {
                todos: todos
            })

        // WORK ON THIS
        case 'DELETE': 
            return Object.assign({}, state, {
                todos: [...state.todos.splice(action.payload)]
            })

        default:
            return state;
    }
  };