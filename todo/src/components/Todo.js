import React from "react";
import { toggleTodoAction } from "../actions/toggleTodoAction";
import { connect } from "react-redux";

class Todo extends React.Component {
    constructor(props) {
    super(props);
    }

    render() {
		return (
        <div  onClick={() => {
            this.props.toggleTodoAction(this.props.key);
        }}>
            {this.props.todo.text}
        </div>
        );
     }    
}

const mapStateToProps = state => {
    return {
      todos: state.todos
    };
  };

export default connect(mapStateToProps, { toggleTodoAction })(
    Todo
  );