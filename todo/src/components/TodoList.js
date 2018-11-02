import React from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from 'reactstrap';

const TodoList = props => {
  return (
    <div>
      <p>Task</p>
      <ListGroup>
        {props.todos.map(item => (
          <ListGroupItem disabled={false} key={item.id}>{item.todo}</ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
