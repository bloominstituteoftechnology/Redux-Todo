export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export const addTodo = (todoObj) => {
    console.log('action creator addTodo triggered');
    return { type: ADD_TODO, payload: todoObj };
};

export const toggleComplete = (index) => {
    console.log('action creator toggleComplete triggered');
    return {type: TOGGLE_COMPLETE, payload: index};
};
