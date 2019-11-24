const ADD_TODO = "ADD_TODO";
//const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE = "TOGGLE";

export const addTodo = (todo) => {
    return{
        type: 'ADD_TODO',
        payload: todo,
    }
}


// export const removeTodo = (text) => {
//     return {
//         type: 'REMOVE_TODO',
//         payload: text
//     }
// }

export const toggleTodo = (id) => {
    console.log("id",id)
    return {
        type: 'TOGGLE',
        payload: id
    }
}
