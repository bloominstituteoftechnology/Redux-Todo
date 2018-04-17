export const ADD_TO_DO = 'ADD_TO_DO';
export const HIDE_TO_DO = 'HIDE_TO_DO';

{
    todos: [];
}

export const addToDo = (todo) => {
    return {
        type: ADD_TO_DO,
        payload: todo
    }
};

export const hideToDo = (todo) => {
    return {
        type: HIDE_TO_DO,
        payload: todo
    }
};