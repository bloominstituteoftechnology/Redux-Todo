export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const TOGGLE = 'TOGGLE';

const add = (newTodo) => {
    return {
        type: ADD,
        payload: newTodo
    }
};
export {add};

export const remove = (removeTodo) => {
    return {
        type: REMOVE,
        payload: removeTodo
    }
};

export const toggle = (index) => {
    console.log("Toggle() invoked");
    return {
        type: TOGGLE,
        payload: index
    }
}