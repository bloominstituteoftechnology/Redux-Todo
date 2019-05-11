import { ADD_TO_DO, HIDE_TO_DO } from '../actions';

export default (todos = [], action) => {
    switch (action.type) {
        case ADD_TO_DO:
        return todos.concat(action.payload);
        case HIDE_TO_DO:
        const currentTodo = action.payload;
        return todos.map(todo => {
            if(todo.value === currentTodo.value){
                return {
                    value: todo.value,
                    completed: !todo.completed
                };
            } else {
            return todo;
            }
        })
        default:
        return todos;
    }
};