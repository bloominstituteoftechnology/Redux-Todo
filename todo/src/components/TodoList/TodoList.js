import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../../actions/todos';
import './TodoList.css';
import Todo from '../../components/Todo/Todo';

let id = 0;

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TodoList">
        <div className="TodoList__header">Todos</div>
        <div className="TodoList__content">
          {this.props.todos.map((todo) => <Todo key={todo.id} index={todo.id} todo={todo} />)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, { deleteTodo })(TodoList);