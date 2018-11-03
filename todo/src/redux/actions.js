export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const AddTodoAction = (title) => {
    return { type: ADD_TODO, title}
}

export const UpdateTodoAction = (id) => {
    return { type: UPDATE_TODO, id }
}

export const DeleteTodoAction = (id) => {
    return { type: DELETE_TODO, id }
}