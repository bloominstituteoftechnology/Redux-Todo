export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';


export const add_todo = () => {
    return { type: ADD_TODO};
}

export const toggle_todo = () => {
    return { type: TOGGLE_TODO};
}