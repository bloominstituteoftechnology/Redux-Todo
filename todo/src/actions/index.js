export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

let nextToDo = 0;
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextToDoId++,
        text
    }
}

export const toggleToDo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}