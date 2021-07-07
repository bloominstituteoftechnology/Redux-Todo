export const selectItem = 'ADD_ITEM';
export const toggleItem = 'TOGGLE_ITEM';

export const selectItem = (item) => {
    return {
        type: ‘ADD_TODO’,
        id: nextTodoId++,
        text, 
        completed: false
    };
};



export const toggleItem =(id) => {
    return {
        type: ‘TOGGLE_TODO’,
        id
    };
};


