import React from 'react';
import {connect} from 'react-redux';
import Item from './Item';

const List = (props) => {
  return (
    <div>
      {props.todos.map(todo => 
        <Item
          key={todo.id}
          task={todo.task}
          completed={todo.completed}
        />
      )}
      </div>
  )
}

function mapStateToProps (state) {
   return {todos: state.todos}
}

 export default connect(mapStateToProps)(List) 




  

