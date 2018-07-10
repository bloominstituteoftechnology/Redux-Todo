let todos = [
    {
        value: 'Walk the dog.',
        completed: false
    },
    {
        value: 'Learn Redux.',
        completed: false
    },
]


export default (state = {todos}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {todos : [...todos, action.payload]});
        default:
            return state;
    }
}