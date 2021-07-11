import React from 'react';
import { connect } from "react-redux";
import { createTodoAction } from "../actions";

class TodoForm extends React.Component {

    state = {
        value: ''
    }

    inputHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.createTodoAction(this.state.value);
        this.setState({value: ''});
    }

    render() {
        return (
            <form className="todo-form" onSubmit={this.submitHandler}>
                <input
                    type="text"
                    name="value"
                    value={this.state.value}
                    onChange={this.inputHandler}
                />
                <button type="submit">Create</button>
      </form>
        );
    }
}

const mapStateToProps = () => {
    return {};
};
  
export default connect(mapStateToProps, { createTodoAction })(TodoForm);