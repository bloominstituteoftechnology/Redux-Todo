
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

        const newMap = state.todos.map(
            todo => (todo.id === action.payload) ? {...todo, completed: !todo.completed} : todo)

            return { todos: newMap };

        default:
            return state
    }
}

export default reducer;