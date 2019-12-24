// export const UPDATE_VALUE = "UPDATE_VALUE";
// export const UPDATE_STATUS = "UPDATE_STATUS";

//THIRD, create action creators - this updateTodoAction 
// is a function that returns the Action-Object with type-key and payload
//

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_STATUS = "UPDATE_STATUS";

//in payload object, change name (key) -> value (key)  not sure if this works at all
export const updateTodoAction = name => {
    // return { type: UPDATE_NAME, payload: { value: name } }
    return { type: UPDATE_NAME, payload: { name: name } }
}