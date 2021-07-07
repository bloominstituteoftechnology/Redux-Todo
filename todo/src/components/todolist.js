// import React from "react";
// import Todo from "./todo";

// const TodoList = props => {
//   return (
//     <div>
//       {props.todos.map(todos => (
//         <Todo key={Math.random()} todos={todos} />
//       ))}
//     </div>
//   );
// };

// export default TodoList;

import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleComplete } from "../actions/action";
import Todo from "./todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(props, "props");
  }
  render() {
    return (
      <div>
        {this.props.todos.map((todos, id) => (
          <Todo todos={todos} index={id} toggleTask={toggleTask} />
        ))}
      </div>
    );
  }
}

// const TodoList = props => {
//   // console.log(props.todos, "props");
//   return (
//     <div>
//       {props.todos.map((todos, id) => (
//         <Todo
//           todos={todos}
//           index={id}
//           toggleTask={toggleTask}
//           // complete={complete}
//         />
//       ))}
//     </div>
//   );
// };

const toggleTask = props => {
  console.log(props, "event");
  // console.log(props.todos);
  // let todos = [...props.todos];
  toggleComplete(props.index);
};

const mapStateToProps = state => {
  console.log(state, "state");
  return {
    todos: state
  };
};

export default connect(
  mapStateToProps,
  { toggleComplete }
)(TodoList);
