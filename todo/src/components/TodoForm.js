import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

import './TodoForm.css'

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };
    }

    //event handlers here:  handleTask and handleSubmit


render() {
    return (
        <div>
            <form>
                 <input placeholder = "Add New Task"
                 type="text" />
                <button>
                 Add task
                </button>
            </form>    
            
        </div>
    )
}

}

export default TodoForm;