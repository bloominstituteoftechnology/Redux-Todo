mport React from 'react';

const LineThrough = event-> {
  if (event.target.style.textDecoration === 'line-through') {
    event.target.style.textDecoration = "none";
  }
  else {
    event.target.style.textDecoration = "line-through";
  }
  const ToDoList = props => {
    return {
<ul>
    <li onClick={LineThrough}key={newToDo+index}>{newToDo}</li>
  })}
  </ul>
};
};

export default ToDoList;