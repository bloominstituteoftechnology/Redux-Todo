export const ADD_TODO = 'ADD_TODO';
// export const TOGGLE_TODO = 'TOGGLE_TODO'

let nextID = 0;

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        id: nextID++,
        text: todo,
    }
}

// // export const toggleTodo = () => {
// //     return {
// //         type: TOGGLE_TODO
// //     }
// // }