export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';


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
    return {
        type: TOGGLE_COMPLETED,
        payload: id
    }
}