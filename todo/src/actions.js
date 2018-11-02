export const ADD_TODO = "ADD_TODO"
export const UPDATE_TODO = "UPDATE_TODO"
export const DELETE_TODO = "DELETE_TODO"

export const AddTodo = () => {
    return { type: ADD_TODO }
}

export const UpdateTodo = () => {
    return { type: UPDATE_TODO }
}

export const DeleteTodo = () => {
    return { type: DELETE_TODO }
}