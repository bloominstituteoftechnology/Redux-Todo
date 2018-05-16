export const CREATE_TODO = 'CREATE_TODO';

export const createTodo = todo => {
    return { type: CREATE_TODO, payload: todo };
};

