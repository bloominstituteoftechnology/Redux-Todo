export const ADD_TODO = 'ADD_TODO';

const initialState = {
  todos: [{ value: "Walk the dog.", completed: false }]
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, {value: action.payload, completed: false}]
            }
        default:
            return state;
    }
}

export default reducer;