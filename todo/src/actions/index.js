export const ADD_ITEM = 'ADD_ITEM';
export const COMPLETED_ITEM = 'COMPLETED_ITEM'

let addAnotherId = 0;

export const addItem = text => { 
    return {
        type: ADD_ITEM,
        id: addAnotherId++,
        text
    };
 };

export const completedItem = id => {
    return {
        type: COMPLETED_ITEM,
    }
}