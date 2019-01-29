export const ADD_TO_LIST = 'ADD_TO_LIST';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'



const initialState = {
    todoList: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case ADD_TO_LIST:
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {
                        todo: action.payload,
                        completed: false
                    }
                ]
            }

        case TOGGLE_COMPLETE:


        default:
            return state;
    }
}

export default reducer;