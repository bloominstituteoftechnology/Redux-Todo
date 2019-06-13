import { TOGGLE_TODO } from './actions/index'

const todoList = {
    todos: [
        {
            value: "Make bed",
            completed: false,
            id: 0
        },
        {
            value: "Drink water",
            completed: false,
            id: 1
        },
        {
            value: "Stretch",
            completed: false,
            id: 2
        },
        {
            value: "Meditate",
            completed: false,
            id: 3
        }
    ],
    list: ''
}

const todoReducer = (todos = todoList, action) => {
    switch (action.type) {

        case TOGGLE_TODO:
            let toDoList = todos.todos.slice()
                .map(list => {
                    if (list.id === action.payload) {
                        list.completed = !list.completed;
                        return list;
                    }
                    return list;
                })
            return Object.assign({}, todos, {todos: toDoList});

        default:
            return todos;
    }
}

export default todoReducer;