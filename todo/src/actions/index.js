export const FETCH_TODOS = 'FETCH_TODOS'
export const ADD_MY_TODO = 'ADD_MY_TODO'


export const fetchTodos = () => {
    return {
        type: FETCH_TODOS,
        payload: ['Grocery Shopping', 'Laundry', 'Redux Project']
    };
};

export const addMyTodo = (myTodo) => {
    return {
        type: ADD_MY_TODO,
        payload: myTodo
    };
};


