// export const UPDATE_VALUE = "UPDATE_VALUE";
// export const UPDATE_STATUS = "UPDATE_STATUS";

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_STATUS = "UPDATE_STATUS";


export const updateTodoAction = name => {
    return { type: UPDATE_NAME, payload: { name: name } }
}