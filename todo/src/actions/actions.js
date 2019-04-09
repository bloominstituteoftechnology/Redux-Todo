export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export function addTodo(newTodo) {
    // console.log("HI FROM ACTIONS for createNewTodo")
    // console.log("THIS IS SECOND STEP NOW SENDING TO REDUCER")
    return {
        type: ADD_TODO, payload: newTodo}
}

export function toggleTodo(index){
    // console.log("HI FROM ACTIONS FOR TOGGLETODO")
    // console.log("NOW SENDING INDEX", index, "TO REDUCER ")
    return {
        type: TOGGLE_TODO, payload: index }
    
}

export function deleteTodo(index) {
    // console.log("HI FROM DELETE FROM ACTIONS")
    // console.log("NOW SENDING TO REDUCER!")
    return {
        type:DELETE_TODO, payload: index }
    
}