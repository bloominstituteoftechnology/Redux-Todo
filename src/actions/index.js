export const ADD = 'ADDTODO';
export const SETVISIBILITY = 'SETVISIBILITY';
export const TOGGLE = 'TOGGLE';

export const addTodo = (value) => {
    return {
        type: ADDTODO,
        value: 'Walk the dog.',
        completed: false
    }
};

export const setVisibility = (filter) => {
    return {
        type: SETVISIBILITY,
        filter
    }
}; 

export const toggle = () => {
    return {
        type: TOGGLE
    }
};