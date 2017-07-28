import React from 'react';
import { connect } from 'react-redux';

const showTodo = (props) => {
  
    return (
     <div>
      <h3>Todo List</h3>
      <ul>
        {this.props.todos.map(todo =>
          <li key={todo.id}>{todo.value}</li>
        )}
      </ul>
     </div>
    )
};

const mapStateToProps = (state) => {
    return {todos: state.todos};
  };

// export default connect(mapStateToProps, mapDispatchToProps)(showTodo);

export default connect(mapStateToProps)(showTodo);