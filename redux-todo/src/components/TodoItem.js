import React from 'react';

export default function TodoItem({item}) {

  return (

    <div className='todo-item'>

      <p>{item.value}</p>

    </div>

  );

}
