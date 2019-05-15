import React from 'react'

export default function TodoItem(props) {
// const dispatch = useContext(TodoContext)

//   function handleChange() {
//         dispatch({
//             type: props.item.complete ? 'UNDO_TODO' : 'DO_TODO',
//             id: todo.id,
//         })
//     }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={props.item.complete}
        //   onChange={handleChange}
        />
        {/* TODO (irony unintended): change API from "content" to "task" */}
        {props.item.content}
      </label>
    </li>
  )
}