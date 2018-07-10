export const ADD_TODO = 'ADD_TODO';
export const TOGGLED_COMPLETED = 'TOGGLED_COMPLETED';



export const addToDo = (todo, e) => {
    e.preventDefault();
    console.log(e);
    console.log(todo);
    return {type: 'ADD_TODO',
            payload: todo }
}