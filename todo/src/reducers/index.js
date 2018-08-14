import {ADDITEM} from '../actions';

const initialState = {
    todos: [
        {
            value: 'default item',
            completed: false
        }
    ]
}
// thi is the 'list'
export default ( state = initialState, action ) => {
    switch(action.type){
        case ADDITEM: 
            console.log('ADDITEM from reducers', state)
            // console.log(this)
            return initialState
        default: 
            return 'default'
    }
}