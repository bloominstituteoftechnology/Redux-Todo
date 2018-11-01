export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

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