import {UPDATE_COMPLETE, ADD_TODO }from '../action/action'

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMPLETE:
      const update = state.map(item => {
        if(item.id === action.id) {
          return {...item, completed: !item.completed}
        }
        return item
      })
      return update
    case ADD_TODO:
      return [...state, {...action.payload, id: state.length + 1}]
    default: 
      return state;
  }
}