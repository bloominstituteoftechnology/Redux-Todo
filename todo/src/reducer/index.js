export const initialState = [
    {
        value: "finish this project",
        completed: false
    },
    {
        value: "eat dinner",
        completed: false
    }
]

export function addTodo(state = initialState, action) {
    switch(action.type) {
        case "ADD_TODO":
        return [
            ...state,
            {
                value: action.payload,
                completed: false
            }
        ]
        default: 
        return state
    }
}

export default addTodo; 