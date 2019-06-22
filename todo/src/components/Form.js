import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

class Form extends Component {
constructor(props){
    super(props);
    this.state = {
      task: ''
}
}

handleAddTodo = e => {
    e.preventDefault();
    const { task } = this.state;
    const newTodo = {task, completed: false, id: Date.now()};
    this.props.addTodo(newTodo);
    this.setState({ task: '' });
};

handleSubmit = (e) => {
    this.setState({ task: e.target.value});
};

render(){
    return(
    <div>
        <input onChange={this.handleSubmit} value={this.state.text} placeholder='Add Todo'
        />
        <button onClick={this.handleAddTodo}>Add</button>
        </div>
);
}
}


export default connect(null, { addTodo })(Form);