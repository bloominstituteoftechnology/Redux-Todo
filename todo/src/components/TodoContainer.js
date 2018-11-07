import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';

class TodoContainer extends React.Component {
  render() {
    return (
      <div className="todo-container">
        <h1>Todo List</h1>
        {console.log(this.props.state)}
        {this.props.state.map(item => {
          return <TodoItem key={item.id} text={item.value} />;
        })}
      </div>
    );
    // console.log(this.props.state);
  }
}

const mapStateToProps = state => {
  //   console.log(state);
  return { state: state.todoList };
};

export default connect(mapStateToProps)(TodoContainer);
