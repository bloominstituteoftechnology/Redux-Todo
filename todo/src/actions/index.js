export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED"

export const addNewTodo = input => {
    console.log("addNewTodo from actions:",input)
    return{
        type : ADD_NEW_TODO,
        payload : input,
    }
}

export const toggleCompleted = (index) => {
    return{
        type : TOGGLE_COMPLETED,
        payload : index,
        //no payload necessary
    }
}



// actions always return an object with a type and sometimes a payload