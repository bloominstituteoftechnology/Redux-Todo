

const initialState = {
    todos: [{
        value: 'Do the dishes.',
        completed: false
      }]
}

export default (state = initialState, action) =>{
    switch (action.type) {
        default:
        return state;
    }
}