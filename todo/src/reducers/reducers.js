export const ADD_TODO = 'ADD-TODO';
export const TOGGLE_COMPLETE='TOGGLE_COMPLETE';
export const DELETE_TODO='DELETE_TODO';

const initialState = {
    todos: [{value: 'Walk the cat', complete:true},
    {value: 'dishes', complete:false}]
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
    
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos,
                    { 
                        value: action.payload, 
                        complete: false
                    }] 
            }
        case TOGGLE_COMPLETE:
            return {
                ...state,
                todos: state.todos.map((todo,index) => {
                    if(index === action.payload){
                        return {
                            ...todo, 
                            complete: !todo.complete};
                    }else{
                        return todo;
                    }
                })
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo,index) => {
                    return index !== action.payload;
                })
            }
        default:
            return state;
    }
};

export default reducer;