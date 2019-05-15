import React from 'react'
import * as C from '../store/constants'

export default function TodoItem({item, dispatch}) {

  function handleChange() {
        dispatch({
            type: item.completed ? C.UNDO_TODO : C.DO_TODO,
            payload: { id: item.id }
        })
    }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={handleChange}
        />
        {/* TODO (irony unintended): change API from "content" to "task" */}
        {item.content}
      </label>
    </li>
  )
}