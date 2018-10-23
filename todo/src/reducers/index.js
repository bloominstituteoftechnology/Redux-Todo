export const initialState = {
    todos: [
        {
            task: "Walk Dog",
            id: 1498413981651,
            completed: false
          },
          {
            task: "Make Dinner",
            id: 1878969431619,
            completed: false
          }
    ]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        task: action.payload,
                        id: Date.now(),
                        completed: false
                    }
                ]
            };
        case 'COMPLETE':
            return {
                ...state,
                todos: state.todos.map(
                    todo => 
                        todo.id === action.payload
                            ? { ...todo, completed: !todo.completed}
                            : todo
                )
            };
        case 'DELETE':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        default:
            return state;
    }
};

export default rootReducer;