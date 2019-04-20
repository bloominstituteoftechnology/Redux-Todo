import { createStore } from 'redux'
import rootReducer from '../Reducers'

let store = createStore(rootReducer)

export default store;