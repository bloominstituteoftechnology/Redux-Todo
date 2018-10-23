//import actions


const initialState = {
    newItem: {
        item: '',
        completed: false
    },
    todolist: [
        {
            item: 'take out papers',
            completed: false
        },
        {
            item: 'take out trash',
            completed: false
        },
        {
            item: 'dishes',
            completed: false
        },
        {
            item: 'sweep the floors',
            completed: false
        }
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_LIST':
            return {
                

            }
        default:
            return state;
    }
}