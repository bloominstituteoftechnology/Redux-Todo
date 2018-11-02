import React from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { completeTodo } from "../actions/action";

class TodoList extends React.Component {
  completeHandler = id => {
    this.props.completeTodo(id);
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
              {item.todo}
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
  { completeTodo }
)(TodoList);
