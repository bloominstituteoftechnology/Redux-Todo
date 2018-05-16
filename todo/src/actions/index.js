export const FETCH_TODO = 'FETCH-TODO';
export const CREATE_TODO = 'CREATE_TODO';

export const fetchTodo = () => {
    return {
        type: FETCH_TODO,
        payload: ['do this 1', 'do this 2']
    };
};

export const create_todo = todoPayload => {
    return {
        type: CREATE_TODO,
        payload: todoPayload
    };
};



