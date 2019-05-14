import * as C from '../constants'
import initialState from '../../initialState.json'

export default function todoReducer(state=initialState, action) {
    switch(action.type) {
        case C.ADD_TODO:
            return state.concat(action.payload)
        default: return state
    }
}