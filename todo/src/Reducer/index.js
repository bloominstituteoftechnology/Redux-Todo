// currentState= reducer(currentState, action)

const initialState = {
    list: [
        {   
            id: 0,
            value: 'walk the dog', 
            completed: false
        },
    ]
}

export const todoReducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}