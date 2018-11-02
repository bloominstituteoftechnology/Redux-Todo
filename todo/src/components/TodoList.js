import React from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { completeTodo, deleteTodo } from "../actions/action";

class TodoList extends React.Component {
  completeHandler = id => {
    this.props.completeTodo(id);
  };

  deleteHandler = id => {
    this.props.deleteTodo(id);
  };

  render() {
    return (
      <div>
        <p>Tasks: Red=completed</p>
        <ListGroup>
          {this.props.todos.map(item => (
            <ListGroupItem
              color={!item.complete ? `success` : `danger`}
              key={item.id}
              action
              onClick={() => this.completeHandler(item.id)}
            >
              <p>{item.todo}</p>
              <button onClick={() => this.deleteHandler(item.id)}>
                X-Delete
              </button>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { completeTodo, deleteTodo }
)(TodoList);
