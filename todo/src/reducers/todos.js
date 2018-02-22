const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'REMOVE_TODO':
            return state.reduce((todos, todo, i) => i === action.payload.id ? todos : [...todos, todo], []);
        case 'TOGGLE_TODO': 
            return state.map((todo, i) => i === action.payload.id ? {...todo, completed: !todo.completed} : todo);
        default: 
            return state;
    }
}

export default todos;