export const ADD_TODO= "ADD_TODO";
export const COMPLETED_TODO = "COMPLETED_TODO";
export const DELETE_TODO = "DELETE_TODO"

 export const addTodo = item => {
    return {type:"ADD_TODO", payload: item}
}
export const completedTodo = id => {
   return {type:"COMPLETED_TODO", payload:id}
}
export const deleteTodo = id => {
   return {type:"DELETE_TODO", payload:id}
}