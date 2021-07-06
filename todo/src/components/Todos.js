import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

import Todo from "./Todo";

export const Todos = props => {
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Todo</th>
            <th>Complete</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {props.todos.map(todo => {
              return (
                <Todo key={todo.id} todo={todo}/>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => {
  return { todos: state };
};

export default connect(mapStateToProps)(Todos);
