export const ADDITEM = 'ADDITEM';
export const STRIKEITEM = 'STRIKEITEM';

export const addItem = (inputValue) => {
    return {
        type: ADDITEM,
        payload: inputValue
    }
}
export const strikeItem = (id) => {//first
    return {
        type: STRIKEITEM,
        payload: id
    }
}
