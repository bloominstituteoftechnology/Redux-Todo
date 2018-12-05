export const ADD_TODO = 'ADD_TODO';
export const COMPLETED = 'COMPLETED';
export const DELETE_ITEM = 'DELETE_ITEM';

export const ADD_FOLDER = 'ADD_FOLDER';
export const DELETE_FOLDER = 'DELETE_FOLDER';
export const PICKED_FOLDER = 'PICKED_FOLDER';

// Actions for the tasks
//-----------------------
export const addTodo = text => {
    return {
        type: ADD_TODO,
        text: text
    };
};

export const completed = id => {
    return {
        type: COMPLETED,
        id: id
    };
};

export const deleteTodo = id => {
    return {
        type: DELETE_ITEM,
        id: id
    };
};
// End of task actions


// Actions for folders
// ------------------------
export const addFolder = text => {
    return {
        type: ADD_FOLDER,
        text: text
    };
};

export const deleteFolder = id => {
    return {
        type: DELETE_FOLDER,
        id: id
    };
};

export const pickedFolder = id => {
    return {
        type: PICKED_FOLDER,
        id: id
    };
};
// End of folder actions