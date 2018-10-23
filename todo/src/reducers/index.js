//import actions


const initialState = {
    item: '',
    todolist: [
        'take out papers',
        'take out trash',
        'dishes',
        'sweep the floors',
        'clean the bathroom',
        'write letter to everyone',
        'end it all'
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}