export const addTodo = todo => {
    return {
        type: 'ADD',
        payload: todo
    };
};

export const completeTodo = id => {
    console.log(`Complete Todo #${id}`)
    return { 
        type: 'COMPLETE', 
        payload: id 
    };
};

export const deleteTodo = id => {
    return { 
        type: 'DELETE', 
        payload: id 
    };
};