import { ADD_TODO } from '../actions'
const todoList = {
    todos: [
        {
            value: 'Organize Garage',
            completed: false
        },
        {
            value: 'Bake Cookies',
            completed: false
        }
    ]
}

export default (todos = todoList.todos, action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, todos, action.payload);

        default:
            return todos;
    }
}
