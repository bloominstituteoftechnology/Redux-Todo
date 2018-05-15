export const FETCH_TODOS = 'FETCH_TODOS';
export const CREATE_TODO = 'CREATE_TODO';

export const fetchTodos = () => {
    return {
        type: FETCH_TODOS,
        payload: ['laundry', 'work out']
    };
};

export const createTodo = todo => {
    return {
        type: CREATE_TODO,
        payload: todo
    };
};

