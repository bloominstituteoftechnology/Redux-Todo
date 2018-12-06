const initialState = {
    tasks: [
        {
            id: 'startertask',
            text: 'Starter Task',
            completed: false
        }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            if (action.payload.text === '') {
                return state;
            } else {
                return Object.assign({}, state, {
                    tasks: [
                        ...state.tasks,
                        {
                            id: action.payload.id,
                            text: action.payload.text,
                            completed: false
                        }
                    ]
                });
            }
        case 'TOGGLE_TASK':
            return Object.assign({}, state, {
                tasks: state.tasks.map(task => {
                    console.log(task.id, action.payload);
                    if (task.id === action.payload) {
                        return { ...task, completed: !task.completed };
                    } else {
                        return task;
                    }
                })
            });
        case 'REMOVE_TASK':
            return Object.assign({}, state, {
                tasks: state.tasks.filter(task => task.id !== action.payload)
            });
        case 'LOAD_STORE':
            return Object.assign({}, state, {
                tasks: localStorage.getItem('tasks')
                    ? { tasks: JSON.parse(localStorage.getItem('tasks')) }
                    : initialState
            });

        default:
            return state;
    }
};
