import { ADD, REMOVE } from '../actions/actions';

const reducer = (litem = [], action) => {
    switch (action.type) {
        case ADD:
        // console.log('add')
        return [...litem, ...action.payload]
        case REMOVE:
        console.log('remove')
        // return []
        return litem.filter((todoItem) => todoItem !== action.payload)
        // return action.payload
        default:
        // console.log('default')
        // return action.todos
        return litem;
    }
}
export default reducer;