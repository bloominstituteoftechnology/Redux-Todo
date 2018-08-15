export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_ITEM='TOGGLE_ITEM';
export const DELETE_ITEM='DELETE_ITEM';
export const addToDo=(value)=>{
    return {
        type: 'ADD_TODO',
        value
    }
};
export const toggleItem=(id)=>{
    return {
        type: 'TOGGLE_ITEM',
        payload: id
    }
}
export const deleteItem=(id)=>{
    return {
        type:'DELETE_ITEM',
        payload:id
    }
}