export const ADD_NEW_TODO = "ADD_NEW_TODO";

export const addNewTodo = input => {
    console.log("addNewTodo from actions:",input)
    return{
        type : ADD_NEW_TODO,
        payload : input,
    }
}


// actions always return an object with a type and sometimes a payload