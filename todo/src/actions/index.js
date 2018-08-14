export const ADDITEM = 'ADDITEM';
export const DELETEITEM = 'DELETEITEM';

export const addItem = (inputValue) => {
    return {
        type: ADDITEM,
        payload: inputValue
    }
}
export const deleteItem = (id) => {
    return {
        type: DELETEITEM,
        payload: id
    }
}
