import { ADD_TASK, CLEAR_COMPLETED_TASKS, TOGGLE_COMPLETION, HANDLE_CHANGE_EVENT } from '../Actions/actionsIndex';



const initialState = {
    todosArray: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
    ],
    todo: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, todosArray: [
                ...state.todosArray, {
                    task: action.payload,
                    id: Math.floor(Math.random()*1000000),
                    completed: false
                }
            ]  }

        case CLEAR_COMPLETED_TASKS:
            let remainingTasks = [...this.state.todoList]
            remainingTasks = remainingTasks.filter(item => !item.completed)
            return { ...state, todosArray: remainingTasks }

        case TOGGLE_COMPLETION:
            let toggle = (index) => {
                state.todoListArray.map((item, idx) => {
                    if (index !== idx) {
                    return item
                    } else {
                    return { ...item, completed: !item.completed }
                    }
                })
            } 
            return { ...state, todo: toggle } // ========

        case HANDLE_CHANGE_EVENT:
            return { ...state, todo: action.payload }

        default:
            return state
    }
}

export default reducer