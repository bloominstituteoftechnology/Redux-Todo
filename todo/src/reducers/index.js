import { ADD_TODO, TOGGLE_SELECT, REMOVE_ITEM} from '../actions';

const initialState = [
    {
      text: 'Use Redux',
      completed: false,
      id: 0    
    }
];

export default (todos = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...todos, {
                text: action.payload.text,
                completed: action.payload.completed,
                id: action.payload.id
            }];
        case TOGGLE_SELECT:
            const newTodos = todos;
            if (newTodos[action.id] !== undefined){
                if (newTodos[action.id].completed) {
                    newTodos[action.id].completed = false;
                } else {
                    newTodos[action.id].completed = true;
                }
            }
            return newTodos;
        case REMOVE_ITEM:
            const nTodos = todos.filter((item) => {
                return item.id !== action.id;
            });
            for (let i = 0; i < nTodos.length; i++) {
                nTodos[i].id = i
            }
            return nTodos;
        default:
            return todos;
    }
};

