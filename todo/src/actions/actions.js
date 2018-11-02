export const ADD_ITEM = "ADD_ITEM";

let toDoID = 0;

export const addItem = (value) => {
    return {
        type: ADD_ITEM, 
        id: toDoID++ ,
        value: value
}}