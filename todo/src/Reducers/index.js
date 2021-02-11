const Reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text:action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(
                todo => 
                        todo.id === action.id
                                ? { ...todo, compled: !todo.completed }
                                : todo
            );
        default: 
            return state
    }
}

export default Reducer;