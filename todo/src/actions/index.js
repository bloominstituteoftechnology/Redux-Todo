

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const CHANGE_TODO = 'CHANGE_TODO'


export function changeTodo(e){
    return {
        type: 'CHANGE_TODO'
    }
}

export function addTodo() {
    return {
        type:'ADD_TODO'
    }
}



// export function toggleTodo() {
//     return {

//     }
// }