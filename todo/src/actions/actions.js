export const ADD_TODO = "ADD_TODO";

export function addTodo(newTodo) {
    // console.log("HI FROM ACTIONS for AddTODO SECOND STEP NOW SENDING TO REDUCER")
    return {
        type: ADD_TODO, payload: newTodo}
}
