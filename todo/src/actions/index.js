export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const DELETE_COMPLETED = 'DELETE_COMPLETED';

export const addTodo = (todoObj) => {
    return { type: ADD_TODO, payload: todoObj };
};

export const toggleComplete = (index) => {
    return {type: TOGGLE_COMPLETE, payload: index};
};

export const deleteCompleted = () => {
    return {type: DELETE_COMPLETED, payload: null};
}
