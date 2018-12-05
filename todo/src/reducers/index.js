import { ADD_TODO, COMPLETED, DELETE_ITEM, ADD_FOLDER, DELETE_FOLDER, PICKED_FOLDER } from '../actions';

const initialState = {
        // {value: "", completed: false, picked: 0}
        todo: [],
        // {value: "", selected: true}
        folders: [{value: 'General', selected: true}],
        // picked folder index used for displaying tasks
        picked: 0
}

export default (state = initialState, action) => {
    switch (action.type) {

        // Task Cases
        case ADD_TODO:
        const newArr = state.todo.concat({value: action.text, completed: false, picked: state.picked});
        return {
            ...state,
            todo: newArr,
        };

        case COMPLETED:
        const newTodo = state.todo.map((task, index) => {
            if(index === action.id) {
                task.completed = !task.completed
            }
            return task;
        })
        return {
            ...state,
            todo: newTodo,
        };    

        case DELETE_ITEM:
        const newCleanArr = state.todo.filter((task, index) => {
            if(index !== action.id) {
                return task;
            }
        }) 
        return {
            ...state,
            todo: newCleanArr,
        };   
        // End Task Cases

        // Folder Cases
        case ADD_FOLDER:
        const folderArr = state.folders.concat({value: action.text, selected: false});
        return {
            ...state,
            folders: folderArr
        };

        case DELETE_FOLDER:
        const folderArrFiltered = state.folders.filter((folder, index) => {
            if(index !== action.id) {
                return folder;
            }
        })
        return {
            ...state,
            folders: folderArrFiltered
        };

        case PICKED_FOLDER:
        console.log(action.id)
        const pickedArr = state.folders.map((item, index) => {
            if(index !== action.id) {
                item.selected = false;
                // console.log(state.folders);
            } else {
                item.selected = true;
                // console.log(state.folders);
            }
        })
        return {
            ...state,
            picked: action.id,
            // folders: pickedArr
        };
        // End Folder Cases
        default:
        return state;
    }
};