//actions will live here
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_STRIKE = 'TOGGLE_STRIKE';

export const addTodoAction = (item) => {
    return {type: ADD_TODO, payload: item};
}

export const toggleStrikeAction = (index) => {
    return { type: TOGGLE_STRIKE, payload: index};
}