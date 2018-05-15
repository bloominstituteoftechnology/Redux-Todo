const ADD_TODO = "ADD_TODO";
const TOGGLE = "TOGGLE";

export const addTodo = (text) => {
    return{
        type: 'ADD_TODO',
         payload: text
    }
}

export const toggleTodo = (index) => {
    return {
        type: 'TOGGLE',
        payoad: index
    }
}
