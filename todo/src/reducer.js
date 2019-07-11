import { NEW_TASK } from './actions'

const initialState = {
    todoTask: '',
    completed: '',
}

export default function(state = initialState, action) {
    switch (action.type) {
        case NEW_TASK:
            const { task, account } = action.payload
            const newTask = parseInt(task) + state[account]

            return {
                ...state,
                [account]: newTask,
            }
            default: return state
    }
}