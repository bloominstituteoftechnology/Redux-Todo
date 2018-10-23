export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_COMPLETED = 'REMOVE_COMPLETED';


export const onChange = event => { 
    return {
        type: HANDLE_CHANGE,
        payload: event.target.value
    };
};

export const addTodo = todo => {
    console.log(todo);
    return {
        type: ADD_TODO,
        payload: todo
    };
};

export const toggleCompleted = id => {
    console.log(id);
    return {
        type: REMOVE_COMPLETED,
        payload: id
    }
}