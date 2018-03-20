export const ADD = 'ADD';
export const COMPLETE = 'COMPLETE';

let todoID = 0;
export const add_todo = (text) => {
    return {
        type: 'ADD',
        text: text,
        id: todoID++
    };
};

export const complete_todo = (todoID) => {
    return {
        type: 'COMPLETE',
        id: todoID,
    };
}