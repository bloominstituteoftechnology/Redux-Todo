// import React from "react";

// const Todo = props => {
//   console.log(props, "something");
//   return <div onClick={() => props.toggleTask(props)}>{props.todos.todo}</div>;
// };

// export default Todo;

import React from "react";
import { connect } from "react-redux";
import { toggleComplete } from "../actions/action";

const Todo = props => {
  console.log(props.todos.complete, "props in Todo");

  return (
    <div
    // style={props.todos.complete ? { textDecoration: "line-through" } : null}
    // onClick={() => props.toggleComplete(props.index)}
    >
      {props.todos.todo}
      <input
        type="checkbox"
        onClick={() => props.toggleComplete(props.index)}
      />
    </div>
  );
};

export default connect(
  null,
  { toggleComplete }
)(Todo);

// class Todo extends Component {
//   constructor(props) {
//     super(props);
//     console.log(props, "props");
//   }
//   render() {
//     return (
//       <div
//         style={
//           this.props.todos.complete ? { textDecoration: "line-through" } : null
//         }
//         onClick={() => this.props.toggleComplete(this.props.index)}
//       >
//         {" "}
//         {this.props.todos.todo}
//       </div>
//     );
//   }
// }

// export default connect(
//   null,
//   { toggleComplete }
// )(Todo);
