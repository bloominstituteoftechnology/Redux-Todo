import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

import './TodoForm.css'


class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

//event handlers here:  handleTask and handleSubmit

handleTask = event => {
    this.setState({ task: event.target.value });
};

handleSubmit = () => {
    const { task } = this.state;
    this.state.push({ task, completed: false, id: Date.now()})
    console.log('state after submit', this.state)
}

render() {
    return (
        <div>
            <form>
                 <input 
                 onChange = {this.handleTask}
                 value = {this.state.task}
                 placeholder = "Add New Task"
                 type="text" />
                <button onClick={this.handleSubmit}>
                 Add task
                </button>
            </form>    
            
        </div>
    )
}

}

export default connect(null, {addTask})(TodoForm);