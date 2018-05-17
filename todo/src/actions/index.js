export const selectItem = 'ADD ITEM';
export const toggleItem = 'TOGGLE ITEM';

export const selectItem = (item) => {
    return {
        type: ‘ADD_TODO’,
        id: nextTodoId++,
        text,  //<--ES6. same as text:text, in ES5
        completed: false //<-- initially this is set to false
    };
};



export const toggleItem =(id) => {
    return {
        type: ‘TOGGLE_TODO’,
        id
    };
};


