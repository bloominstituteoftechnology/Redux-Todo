// ActionType Exports
export const ADD_TO_LIST = 'ADD_TO_LIST';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

// Initial State 
const initialState = {
    todoList: []
}

// Reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_LIST:
            return {
                ...state,
                todoList: [
                    ...state.todoList, 
                    {
                        todo: action.payload, 
                        complete: false
                    }
                ]
            }

        case TOGGLE_COMPLETE:


        // Stretch
        // case DELETE_ITEM:

        // case CLEAR_COMPLETE:

        default: 
            return state;
    }
}

export default reducer;