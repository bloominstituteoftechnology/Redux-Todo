export default (state = null, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return action.payload
        case 'COMPLETE_TASK':
            return action.payload
        case 'REMOVE_TASK':
            return action.payload
    }
}