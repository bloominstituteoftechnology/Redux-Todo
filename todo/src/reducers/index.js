export const ADD_TO_LIST = 'ADD_TO_LIST';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'
export const DELETE_ITEM = 'DELETE_ITEM'
export const CLEAR_COMPLETE = 'CLEAR_COMPLETE'



const initialState = {
    todoList: [
        {todo: 'Make Todo List', complete: false}
    ]
}

const reducer = (state = initialState, action) => {
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
            return {
                ...state,
                todoList: state.todoList.map((t, i) => {
                    return i === action.payload ? {...t, complete: !t.complete} : t;
                })
            }

        case DELETE_ITEM:
            return {
                ...state,
                todoList: state.todoList.filter((t, i) => {
                    return i !== action.payload
                })
            }

        case CLEAR_COMPLETE:
            return {
                ...state,
                todoList: state.todoList.filter(t => {
                    return t.complete === false
                })
            }


        default:
            return state;
    }
}

export default reducer;