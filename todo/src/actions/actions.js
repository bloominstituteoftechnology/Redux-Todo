export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';





export const addTodo = (value, index) => {
return {
    type: ADD_TODO,
    payload: value,
    id: index,
}
}

export const toggleTodo = (index, value) => {
    console.log(index, value);
    return {
        type: TOGGLE_TODO,
        id: index,
    }
}