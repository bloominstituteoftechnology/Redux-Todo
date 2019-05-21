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
      <label className={item.complete ? 'complete' : ''}>
        <input
          type="checkbox"
          checked={item.complete}
          onChange={handleChange}
        />
        {item.task}
      </label>
    </li>
  )
}