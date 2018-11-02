import { bindActionCreators } from "../../../../../../../Library/Caches/typescript/3.1/node_modules/redux";

export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_STATUS = "TOGGLE_STATUS";

let toDoID = 0;

export const addItem = (value) => {
    return {
        type: ADD_ITEM, 
        id: toDoID++ ,
        value: value
}}

export const toggle = (id) => {
    return{
        type: TOGGLE_STATUS,
        id
    }
}