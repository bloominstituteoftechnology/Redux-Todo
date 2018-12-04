export const ADD_TODO = 'ADD_TODO';

const initializeState = {
    todos: [
        {name: 'Task 1', completed: false,},
        {name: 'Task 2', completed: false},
        {name: 'Task 3', completed: false}
    ]
}

export default (state = initializeState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, {name: action.payload, completed: false }]
            }

        default:
            return state
    }
}