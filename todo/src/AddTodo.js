import React, { Component } from 'react';

class AddTodo extends Component {

state = {
    content: ""
      };

handleChange = event => {
    this.setState ({
       content: event.target.value 
    })
};

handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo (this.state);
    this.setState({
        content: ''
    })
   };

    render() {
        return (
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <label>Add a todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} /> 
                </form>
                <a onClick={this.handleSubmit}class="waves-effect waves-light btn">Add Todo</a>
            </div>
        )
    }
}

export default AddTodo;