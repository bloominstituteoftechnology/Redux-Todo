export const LOAD_SAVED_TODOS = 'LOAD_SAVED_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const loadSavedTodos = (todos)=>{
    return {
        type: LOAD_SAVED_TODOS,
        payload: {
            todos: todos
        }
    }
}

export const addTodo = (id, todo)=>{
    return {
        type: ADD_TODO,
        payload: {
            id: id,
            value: todo,
            completed: false
        }
    }
}

export const completeTodo = (id)=>{
    return {
        type: COMPLETE_TODO,
        payload: {
            id: id
        }
    }
}

export const deleteTodo = (id)=>{
    return {
        type: DELETE_TODO,
        payload: {
            id: id
        }
    }
}