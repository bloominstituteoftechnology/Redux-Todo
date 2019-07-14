import {UPDATE_TITLE, ADD_TASK, TOGGLE_DONE} from "../actions";

const initialState = {
    title: "The Things I Havent Done Yet",
    tasks: [
        {name: "clean the dishes", done: false},
        {name: "hang up the clothes", done: false}
    ]
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_TITLE:
            return {
                ...state,
                title: action.payload
            };
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case TOGGLE_DONE:
            return {
                ...state,
                tasks: state.tasks.map((task, index)=> 
                action.payload === index
                ? {...task, done: !task.done }
                : task
                )
            };
        default:
            return state;
    }
}

export default reducer;