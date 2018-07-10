export const ADD_TODO = 'ADD_TODO';
export const TOGGLED_COMPLETED = 'TOGGLED_COMPLETED';



export const addToDo = (e) => {
    e.preventDefault();
    let todo = e.target.value; 
    return {type: 'ADD_TODO',
            payload: todo }
}