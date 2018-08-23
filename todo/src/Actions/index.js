export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';



export const add_item = () => {
    return {
        type: 'ADD_ITEM',
        payload: todo.push(todos)
    }
};

export const remove_item = () => {
    return {
        type: 'REMOVE_ITEM',
        payload: todo.unshift(todos)
    }
};