export const ADD_TODO = 'ADD_TODO';
export const addToDo=(value)=>{
    return {
        type: ADD_TODO,
        value
    }
}