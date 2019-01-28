export const ADD_NEW_TODO = "ADD_NEW_TODO";

export const addNewTodo = todo =>{
    console.log('action',todo)
    return{
        type: ADD_NEW_TODO,
        payload: todo
    }
}