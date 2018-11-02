import { ADD_TODO } from "../actions/actions";


const initialState = {
    todo:'',
    completed: false

}


export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            return { ...state, ...action.payload }
        default:
            return state
    }
}