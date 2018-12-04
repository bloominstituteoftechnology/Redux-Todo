export const ADD_TODO = 'ADD-TODO';
export const TOGGLE_COMPLETE='TOGGLE_COMPLETE';

const initialState = {
    todos: [{name: 'Nick', complete:true},{name: 'nich', complete:false}]
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
    
        case ADD_TODO:
            return {
            ...state,
            todos: [...state.todo, { name: action.payload, complete: false }]
            };
        case TOGGLE_COMPLETE:
            return {
            ...state,
            todos: state.todos.map((todo, index) => {
                if (index === action.payload) {
                return { ...todo, complete: !todo.complete };
                } else {
                return todo;
                }
            })
        };
    default:
        return state;
    }
};

export default reducer;