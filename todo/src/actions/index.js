export const ADD_NEW_TODO = "ADD_NEW_TODO";

export const addNewTodo = input => {
    return{
        type : ADD_NEW_TODO,
        payload : input,
    }
}

// actions always return an object with a type and sometimes a payload