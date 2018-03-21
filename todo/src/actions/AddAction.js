export const ADD = 'ADD';

let newItemId = 0

export const addItem = () => {
    return{
        type: ADD,
        id: newItemId++,
        // text
    }
};