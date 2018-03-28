const rootReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
        return [
            ...state,
            {
                id: action.id,
            }
        ]
    }

export default rootReducer;