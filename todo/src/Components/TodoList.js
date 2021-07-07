import React from 'react';
import TodoItems from './Todo';

export default  TodoList = (props) => {
    const todos = props.todos.map((todos, i) => {
        <TodoItems todo={todos} key={i} />
    })
    return (
        <ul>
            { todos }
        </ul>
    );
    
};


import React from 'react';
import TodoItem from './TodoItem';

export default (props) => {
  const todos = props.todos.map((todo, i) => <TodoItem todo={todo} key={i} index={i} />);
  return (
    <ul>
      { todos }
    </ul>
  );
};