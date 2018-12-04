

const initializeState = {
    todos: [
        {name: 'Task 1', completed: false,},
        {name: 'Task 2', completed: false},
        {name: 'Task 3', completed: false}
    ]
}

export default (state = initializeState, action) => {
    switch (action.type) {
        default:
            return state
    }
}