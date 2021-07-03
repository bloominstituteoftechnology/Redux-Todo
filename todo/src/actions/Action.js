export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TOGGLE = 'COMPLETE_TOGGLE';

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    };
};

export const completeToggle = id => {
    return {
        type: COMPLETE_TOGGLE,
        payload: id
    }; 
}; 