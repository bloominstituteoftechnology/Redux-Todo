export const MARK_DONE = 'MARK_DONE';
export const ADD_TODO = 'ADD_TODO';

export const markDone = (id) => (
    { 
        type: MARK_DONE,
        payload: {
            id
        } 
    }
);

export const addTodo = (todo, completed) => (
    {
        type: ADD_TODO,
        payload: {
            todo,
            completed
        }
    }
);