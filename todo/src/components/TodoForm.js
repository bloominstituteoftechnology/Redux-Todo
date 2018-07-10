// import React from "react";
// import { connect } from "react-redux";
// import { addTodo } from "../actions";

// class TodoForm extends React.Component {
//   constructor(props) {
//     super(props);
//     state: {
//       newTodo: "";
//     }
//   }

//   handleChange = (event) => {
//       this.setState({ newTodo: event.target.value });
//   }

//   render() {
//     return (
//       <div>
//         <p>TodoForm</p>
//         <form onSubmit={this.props.addTodo}>
//           <input
//             type="text"
//             onChange={this.handleChange}
//             value={this.state.newTodo}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default connect(
//   null,
//   { addTodo }
// )(TodoForm);
