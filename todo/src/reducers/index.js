//  REDUCER

const initialState = { todos: [
    {value: 'testing',
     completed: false}
] };



export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-TODO':
            return {
                ...state, 
                todos: [...state.todos, { value: action.payload }]
            }; 
        case 'MARK-COMPLETED':
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                    if (action.payload === index) {
                        return { ...todo, completed: !todo.completed };
                    } else {
                        return todo;
                    }
                })
            };
        default: 
            return state;
    } 
}; 