
export const initialState = {
}

export default function todo(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {id: action.id, text: action.text, completed: false}]
        // case 'TOGGLE_STATUS':
        default:
            return state
    }
}


