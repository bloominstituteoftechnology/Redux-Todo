
const initialState = {
    todos: [ ]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_ITEM":
            return Object.assign( 
                {}, state, {
                    todos: [
                        ...state.todos,
                        {
                            id: action.id,
                            value: action.value,
                            completed: false
                        }
                    ]
                }
            )
        case "TOGGLE_STATUS":
            return
                Object.assign(
                    {}, state, state.todos.map(
                        todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo)
                    )
        default:
            return state
    }
}

export default reducer;