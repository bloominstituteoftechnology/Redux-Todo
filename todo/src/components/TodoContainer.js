import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';

class TodoContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {this.props.state.map(item => {
          return <TodoItem text={item.value} />;
        })}
      </div>
    );
    console.log(this.props.state);
  }
}

const mapStateToProps = state => {
  //   console.log(state);
  return { state: state.todoList };
};

export default connect(mapStateToProps)(TodoContainer);
// export default TodoContainer;
