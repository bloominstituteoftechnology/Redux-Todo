export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';


export const addTodo = (todo) => {
    return {
        type: 'ADD_TYPE',
        payload: todo
    };
};


export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id
    };
};

export const toggleCompleted = (id) => {
    return {
        type: 'TOGGLE_COMPLETED',
        payload: id
    };
};