import { ADD_TODO, TODO_INPUT } from '../actions'
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
    ],
    list: ''
}

export default (todos = todoList, action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, todoList.todos, action.payload);

        case TODO_INPUT:
            return Object.assign({}, todos, { list: action.payload });

        default:
            return todos;
    }
}
