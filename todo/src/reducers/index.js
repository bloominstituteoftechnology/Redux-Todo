const initialState = {
    tasks: [
        {
            id: '',
            text: 'Starter Task',
            completed: false
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return Object.assign({}, state, {
                tasks: [
                    ...state.tasks, {
                        id: action.payload.id,
                        text: action.payload.text,
                        completed: false
                    }]
            })
        case 'COMPLETE_TASK':
            return action.payload
        case 'REMOVE_TASK':
            return action.payload
        default:
            return state
    }
}