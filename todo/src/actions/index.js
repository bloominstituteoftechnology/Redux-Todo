export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const CHANGE_TODO = 'CHANGE_TODO'
export const DELETE_TODO = 'DELETE_TODO'


export const changeTodo = (todo) => {
    return {
        type: CHANGE_TODO,
        payload: todo
    }
}

export const addTodo = (todo) => {
    return {
        type:ADD_TODO,
        payload: todo
    }
}


export const deleteTodo = (todo) => {
    return {
        type:DELETE_TODO,
        payload: todo
    }
}



// export function toggleTodo() {
//     return {

//     }
// }