import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/actions';

import './TodoForm.css'


class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };
    }

//event handlers here:  handleTask and handleSubmit

handleTask = event => {
    this.setState({ task: event.target.value });
};

handleSubmit = () => {
    const { task } = this.state;
    const newTask = { task, completed: false, id: Date.now() };
    this.state.addTask(newTask);
    this.setState({ task: '' });
    console.log('state after submit', this.state)
};

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