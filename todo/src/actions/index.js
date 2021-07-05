//actions

export const ADDITEM = 'ADDITEM';
export const STRIKEITEM = 'STRIKEITEM';
export const DELETEITEM = 'DELETEITEM';

export const addItem = (inputValue) => {
    return {
        type: ADDITEM,
        payload: inputValue
    }
}
export const strikeItem = (completed) => {//first
    return {
        type: STRIKEITEM,
        payload: completed
    }
}
export const deleteItem = (id) => {//first
    return {
        type: STRIKEITEM,
        payload: id
    }
}
