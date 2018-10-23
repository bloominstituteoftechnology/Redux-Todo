export const ADD_TODO = 'ADD_TODO';
export const TODO_COMPLETE = 'TODO_COMPLETE';
export const DELETE_TODO = 'DELETE_TODO';



export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    };
};

export const todoComplete = id => {
    return {
        type: TODO_COMPLETE,
        payload: id
    };
};


export const deleteTodo = todos => {
    return {
        type: DELETE_TODO,
        payload: todos
    };
};


