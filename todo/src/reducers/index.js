//reducers

import {ADDITEM, STRIKEITEM, DELETEITEM} from '../actions';

const initialState = {
    todos: [
        {
            value: 'Make todo list',
            completed: false,
            id: 0
        }
    ],
    counter : 1,
    user: [
      {
        name: "mike"
      }
    ]
}

//  'list' is here but can't be named for some reason
export default ( state = initialState, action ) => {
    switch(action.type){
        case ADDITEM:
            let newArr = state.todos.slice();
            newArr.push({value: action.payload, completed: false, id: state.counter})
            return {
              ...state,
              todos: newArr,
              counter: state.counter + 1
            }
            // return Object.assign({}, state, {
            //   todos: newArr
            // });
        case STRIKEITEM:
            let strikeArr = state.todos.slice()
            console.log(strikeArr)
            strikeArr[action.payload].completed = (!strikeArr[action.payload].completed)

            return Object.assign({}, state, {
              todos: strikeArr
            });
        case DELETEITEM:
          let deleteItemArr = state.todos.slice();
          console.log(action.payload, deleteItemArr)
        default:
            return state
    }
}
