export const ADD_TODO = 'ADD_TODO';
// export const TOGGLE_TODO = 'TOGGLE_TODO'

let nextID = 0;

export const todo = () => {
    return {
        type: ADD_TODO,
        id: nextID++,
        text: '',
        completed: false,
    }
}

// export const toggleTodo = () => {
//     return {
//         type: TOGGLE_TODO
//     }
// }