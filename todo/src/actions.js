export const NEW_TODO = 'NEW_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

let countId = 0;

export const newTodo = (text) => {
    return {
        type: NEW_TODO,
        text,
        id: ++countId

    }
}

export const completeTodo = (id) => {
    return {
        type: COMPLETE_TODO,
        id
    }
}