export const ADD_TODO = 'ADD_TODO';
export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const TOGGLE_TODO_COMPLETE = 'TOGGLE_TODO_COMPLETE';
export const toggleTodoComplete = id => {
    return {
        type: TOGGLE_TODO_COMPLETE,
        payload: id
    }
}

export const TOGGLE_FILTERED_TODOS = 'TOGGLE_FILTERED_TODOS';
export const toggleFilteredTodos = () => {
    return {
        type: TOGGLE_FILTERED_TODOS
    }
}
