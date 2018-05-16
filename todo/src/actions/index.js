export const FETCH_TODOS = 'FETCH_TODOS';
export const CREATE_TODO = 'CREATE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

let id = 2;

export const fetchTodos = () => {
    return { type: FETCH_TODOS, payload: [
        { id:1, value: "laundry", completed: false }, 
        { id:2, value: "work out", completed: false }
    ] 
}; 

};

export const createTodo = todo => {
    id+=1
    return {
        type: CREATE_TODO,
        payload: {
            id: id,
            value: todo,
            completed: false
        }
    };
};

export const completeTodo = id => {
    return {
        type: COMPLETE_TODO,
        payload: id
    }
}

export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

// { value: "laundry", completed: false }, 
//     { value: "work out", completed: false }