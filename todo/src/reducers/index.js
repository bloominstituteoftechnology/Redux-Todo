import {ADD, TOGGLE, REMOVE} from '../actions'

const initialState = {
    name: [
        {text: 'REDUX-TODO', complete: false}
    ],
    list: [],
    info: [
        {text: 'SYNTAX:'},
        {text: 'ADD [TASK DESCRIPTION]'},
        {text: 'COMPLETE [TASK-ID]'},
        {text: 'REMOVE [TASK-ID]'},
    ],
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD:
            return {
                ...state,
                list: [...state.list, {id: state.list.length + 1, text: action.payload, complete: false}]
            }
        case TOGGLE:
            return {
                ...state,
                list: state.list.map(item =>
                    item.id === action.payload ? {...item, complete: !item.complete} : item)
            }
        case REMOVE:
            //remove the item then renumber item id's for no particular reason
            const newList = state.list.filter(item => item.id !== action.payload)
            newList.map((item, index) => {item.id = index + 1; return item})
            return {
                ...state,
                list: newList
            }
        default: return state
    }
}