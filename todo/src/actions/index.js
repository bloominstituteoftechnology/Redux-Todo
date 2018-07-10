export const MAKE_TODO = "MAKE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const makeTodo = todo => {
    return {
        type: MAKE_TODO,
        payload: todo
    };
};

export const editTodo = todo => {
    return {
        type: EDIT_TODO,
        payload: todo
    };
};

export const removeTodo = todo => {
    return {
        type: REMOVE_TODO,
        payload: todo
    };
};
