export const ADD_TODO = "ADD_TODO";
export const COMPLETED = "COMPLETED";

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: {
            task: todo,
        }
    }
};

export const completeTodo = id => {
    return {
        type: COMPLETED,
        payload: id
    }
}