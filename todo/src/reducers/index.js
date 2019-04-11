
const initialState = {
    todos: [
        {
            value: 'Walk the dog',
            completed: false
        }
    ]
};

export const reducer = ( state = initialState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}