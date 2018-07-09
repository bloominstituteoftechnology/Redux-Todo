import CROSS_OFF_TODO from './actions/index'

const todoList = {
    todos: ["Make bed", "Drink water", "Stretch", "Meditate"]
} 

const todoReducer = (todos = todoList.todos, action) => {
    switch (action.type) {
        case CROSS_OFF_TODO:
            return Object.assign({}, todos, action.payload);

        default:
            return todos;
    }
}

export default todoReducer;