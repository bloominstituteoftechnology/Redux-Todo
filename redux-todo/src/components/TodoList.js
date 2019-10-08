import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({list}) {

  console.log(list);

  return (

    <div>
      {list.map(item => <TodoItem key={item.value} item={item} />)}
    </div>

  );

}
