const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';



let initialState = [
    {

    }
]

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    }
}

export const toggleTodo = () => {
    
}