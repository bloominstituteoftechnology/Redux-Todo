export const ADD_TODO ='ADD_TODO';

export const addTodo = todoValue => {
    return {
        type: ADD_TODO,
        payload: {
            value: todoValue,
            completed: false
        }
    }
};