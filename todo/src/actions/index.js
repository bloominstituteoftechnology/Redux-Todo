export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';



export const addToDo = (todo, e) => {
    e.preventDefault();
    console.log(e);
    console.log(todo);
    return {type: 'ADD_TODO',
            payload: todo }
}

export const toggleCompleted = (todo) => {
    return {type: 'TOGGLE_COMPLETED',
            payload : todo
}
}