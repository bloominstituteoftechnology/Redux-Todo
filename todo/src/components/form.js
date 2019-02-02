import React from "react";
import { connect } from "react-redux";

import { addTodo } from '../actions/actions';

class Form extends React.Component {
    state={
        newTodo: ""
    };

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    addAndReset = () => {
        this.props.addTodo(this.state.newTodo)
        this.setState({newTodo: ""})
    }

    render() {
        return(
            <div>
                <input
                    type="input"
                    name="newTodo"
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                />
                <button onClick={this.addAndReset}>Add</button>
            </div>
        )
    }
}

const mstp = state => {
    return{}
}

export default connect(mstp, { addTodo } )(Form);