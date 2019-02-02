export const ADDTODO = 'ADDTODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (text) => {
    let newTodo = {
        todo: text,
        deleteTask: false
    };
    return {id: Date.now(), type: 'ADDTODO', payloadTodo: newTodo};
}

export const completeTodo = (id) => {
    return {type: "COMPLETE_TODO", id};
}

export const deleteTodo = (id) => {
    return {type: 'DELETE_TODO', id};
}