import React from 'react'
import * as C from '../store/constants'

export default function TodoItem({item, dispatch}) {

  function handleChange() {
        dispatch({
            type: item.complete ? C.UNDO_TODO : C.DO_TODO,
            payload: { id: item.id }
        })
    }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.complete}
          onChange={handleChange}
        />
        {/* TODO (irony unintended): change API from "content" to "task" */}
        {item.task}
      </label>
    </li>
  )
}