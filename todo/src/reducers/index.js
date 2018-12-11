export const ADD_TODO = 'ADD_TODO';

const initState = {
    todos: [
        { 
        todo: 'Walk the dog.',
         completed: false 
        }
    ]
}

const reducer = (state = initState, action) => {
    switch(action.type) {
       case ADD_TODO:
       return {
           ...state,
           todos: [...state.todos, { todo: action.payload, completed: false }]
       }
    }
}

export default reducer;