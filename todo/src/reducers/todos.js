import { ADD_TODO, TODO_INPUT } from '../actions'
const todoList = {
    todos: [
        {
            value: 'Organize Garage',
            completed: false,
            id: 1
        },
        {
            value: 'Bake Cookies',
            completed: false,
            id: 2
        }
    ],
    list: ''
}

export default (todos = todoList, action) => {
    switch (action.type) {
        case ADD_TODO:
            let todoList = todos.todos.slice();
            todoList.push(action.payload);
            return Object.assign({}, todos, { todos: todoList, list: '' });


        case TODO_INPUT:
            return Object.assign({}, todos, { list: action.payload });

        default:
            return todos;
    }
}
