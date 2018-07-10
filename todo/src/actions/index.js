export const ADD_TODO = 'ADD_TODO';
export const CHANGE_TODO = 'CHANGE_TODO';


export const addTodo = () => {
    return {
        type: ADD_TODO,
    }
};

export const changeTodo = (e) => {
    return {
        type: CHANGE_TODO,
        payload: e.target.value
    }
}

