export const ADD_TODO = 'ADD_TODO';
export const COMPLETE = 'COMPLETE';

export const addTodo = () => {
    return {
        type: ADD_TODO,
    };
};


export const COMPLETE = () => {
    return {
        type: COMPLETE,
    }; 
}; 