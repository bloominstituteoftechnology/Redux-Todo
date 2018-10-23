export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

let initID = 0;

 export const addTodo = todo => {
     console.log("inside action", todo)
    return { type: ADD_TODO, payload: todo, id: initID++ };
}

