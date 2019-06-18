

export const addTodo = todo => {
    console.log(todo);
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export const toggleTodo = id => {
    console.log(id);
    return{
        type: 'TOGGLE_TODO',
        payload: id
    }
}