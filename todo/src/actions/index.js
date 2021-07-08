

export const addTodo = text => {
   return {
        type: "ADD_TODO",
        payload: {
            value: text,
            completed: false
        }
        
    };
};

export const editInput = text => {
    return {
        type: "EDIT_INPUT",
        todo: text
    };
};

export const toggleTodo = id => {
    return {
        type: "TOGGLE_TODO",
        id: id
    }
}