import uuid from 'uuid'

import * as C from '../constants'
import initialState from '../../initialState.json'

export default function todoReducer(state=initialState, action) {

    switch (action.type) {
        case C.DO_TODO:
          return state.map(todo => {
            if (todo.id === action.payload.id) {
              return { ...todo, complete: true }
            } else {
              return todo
            }
          })

        case C.UNDO_TODO:
          return state.map(todo => {
            if (todo.id === action.payload.id) {
              return { ...todo, complete: false }
            } else {
              return todo
            }
          })

        case C.ADD_TODO:
          return state.concat({
            id: uuid(),
            task: action.payload.task,
            complete: false,
          })

        default:
          throw new Error('TODO: catch this error :P')
      }
}