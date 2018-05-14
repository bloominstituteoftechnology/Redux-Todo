import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    }

    handleTodoChange = e => {
        this.setState({ todo: e.target.value });
    }

    plusTodo = () => {
        this.props.addTodo(this.state.todo);
        this.setState({ todo: '' });
    }

    render() {
        return(
            <div>
                <input 
                    placeholder='Add Todo Here'
                    type='text'
                    value={this.state.todo}
                    onChange={this.handleTodoChange}
                />
                <button onClick={this.plusTodo}>Add To List</button>
            </div>
        )
    }
}

export default connect(null, { addTodo })(AddTodo);