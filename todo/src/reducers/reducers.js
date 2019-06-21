const initialState = [
    { 
        value: 'Walk the dog', 
        completed: false 
    }, 
    { 
        value: 'Empty trash', 
        completed: true 
    }];

const todoReducer = (state = initialState, action) => {
    return state;
}

export default todoReducer