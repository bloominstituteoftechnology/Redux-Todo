import React from 'react';

let newToDoId = 0;

export const addToDo = todo => ({
  type: "ADD_TODO",
  value: todo,
  id: newToDoId++
})

export const removeCompletedToDo = todo => ({
  type: "REMOVE_COMPLETED",
  id: todo.id
})

export const completed = todo => ({
  type: "COMPLETED",
  completed: todo.completed,
  id: todo.id
})
