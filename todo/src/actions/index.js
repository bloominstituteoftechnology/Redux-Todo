export const ADDITEM = 'ADDITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';

export const addItem = (text) =>{
    return {
        type: ADDITEM,
        payload: text,
    }
}

export const toggleItem = (id = 0) =>{
    return{
        type: TOGGLE_ITEM,
        payload: id
    }
}