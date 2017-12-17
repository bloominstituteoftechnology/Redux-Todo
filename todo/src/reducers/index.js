import {ADDTODO,REMOVETODO} from '../actions/index'

export default (todos=[],action) => {
    switch (action.type){
        case ADDTODO:
        return [
            ...todos,
            {
              value: action.payload.value,
              completed: false,
              id : action.payload.id,
            }
          ]

        case REMOVETODO:
            // console.log(action.payload)
            return todos.filter(todo => todo.id !== action.payload);
        default:
            return todos;
    }
}

