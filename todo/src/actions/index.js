export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO"



export const addNewTodo = todo =>{
    console.log('action',todo)
    return{
        type: ADD_NEW_TODO,
        payload: todo
    }
}

export const toggleTodo = todo =>{
    console.log('toggle', todo)
    return{
        type: TOGGLE_TODO,
        payload: todo
    }
}