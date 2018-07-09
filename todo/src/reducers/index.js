let todoList = {
    todos: [
        {
            value: 'Walk the dog.',
            completed: false
        },
        {
            value: 'Learn Redux.',
            completed: false
        },
    ]
}

export default (state = todoList, action) => {
    return state;
}