import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from  '../actions/index';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input placeholder='add todo' value={this.state.todo} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default TodoForm