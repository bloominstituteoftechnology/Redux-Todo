import React, { Component } from 'react';
import { connect } from 'react-redux';
import { create_todo} from './actions';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoState: ""
        }
    }

    handleInputTodo = e => {
        this.setState({ todoState: e.target.value });
    };

    addNewTodo = () => {
        this.props.create_todo(this.state.todoState);
        this.setState({ todoState: ""})
    }
 

    render() {
        return (
            <div>
                <input
                    placeholder='Add ToDo'
                    type='text'
                    value={this.state.todoState}
                    onChange={this.handleInputTodo}
                />
                <button onClick={this.addNewTodo}>Add ToDo</button>
            </div>
        )
    }
}

export default connect(null, { create_todo }) (AddTodo);