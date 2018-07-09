import { ADD_TODO, TODO_INPUT, TOGGLE_COMPLETE, CLEAR_COMPLETE } from '../actions'
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
            let addTodos = todos.todos.slice();
            addTodos.push(action.payload);
            return Object.assign({}, todos, { todos: addTodos, list: '' });

        case TODO_INPUT:
            return Object.assign({}, todos, { list: action.payload });

        case TOGGLE_COMPLETE:
            let toggleTodos = todos.todos.slice()
                .map(list => {
                    if (list.id === action.payload) {
                        list.completed = !list.completed;
                        return list;
                    }
                    return list;
                });
            return Object.assign({}, todos, { todos: toggleTodos });

        case CLEAR_COMPLETE:
            let clearTodos = todos.todos.slice().filter(todo => !todo.completed)
            return Object.assign({}, todos, { todos: clearTodos });

        default:
            return todos;
    }
}
