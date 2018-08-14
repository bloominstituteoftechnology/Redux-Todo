import React from 'react';

let newToDoId = 0;

const addToDo = todo => ({
  type: "ADD_TODO",
  value: todo,
  id: newToDoId++
})

export default addToDo;
