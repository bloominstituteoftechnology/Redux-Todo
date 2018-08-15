export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_ITEM='TOGGLE_ITEM';

export const addToDo=(value)=>{
    return {
        type: 'ADD_TODO',
        value
    }
};
export const toggleItem=(index)=>{
    return {
        type: 'TOGGLE_ITEM',
        payload: index
    }
}