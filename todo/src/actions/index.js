export const ADD = 'ADDTODO';
export const SETVISIBILITY = 'SETVISIBILITY';
export const TOGGLE = 'TOGGLE';
//action
let todo = 0;
export const addTodo = (value) => {
    return {
        type: ADDTODO,
        value: 'Walk the dog.',
        completed: false,
        id: todo++
    }
};

export const setVisibility = (filter) => {
    return {
        type: SETVISIBILITY,
        filter
    }
}; 

export const toggle = (id) => {
    return {
        type: TOGGLE,
        id
    }
};