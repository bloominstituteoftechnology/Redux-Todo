export const ADD_TODO  = 'ADD_TODO';
export const HANDLE_INPUT = 'HANDLE_INPUT';

const temp = ['jeffrey', 'mark', 'kevin'];

export const add_todo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const handle_input = text => {
    return {
        type: HANDLE_INPUT,
        payload: text
    }
}