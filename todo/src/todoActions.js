const ADD_TODO = "ADD_TODO";
const REMOVE_TODOS = "REMOVE_TODOS";
const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";

const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: {
            todo: todo,
            completed: false
        }
    }
}

const removeTodos = () => {
    return {
        type: REMOVE_TODOS
    }
}