export const ADD = 'ADD';
export const DELETE = 'DELETE'; 


export const addTodo = (todo) => {
    return {
        type: ADD,
        todo: {text: todo, completed: false}
    }
}

export const deleteTodo = (text) => {
    return {
        type: DELETE,
        text: text
    }
}