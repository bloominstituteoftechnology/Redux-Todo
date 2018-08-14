const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return[
                ...state,
                {
                    id: action.id,
                    value: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_COMPLETE':
            return state.map(todo =>
                (todo.id === action.id)
                ? {...todo, completed: !todo.completed}
                : todo
            )
        default:
            return state
    }
}

export default todos