import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    changeHandler = e => {
        this.setState({
            input: e.target.value,
        })
    }

    submitHandler = e => {
        e.preventDefault();
        (this.state.input !== '') &&
        this.props.add(this.state.input);
        this.setState({
            input: ''
        });
    }

    render() {
        return (
            <form className="taskform" onSubmit={this.submitHandler}>
                <h3>Add a Task:</h3>
                <input
                    type="text" 
                    placeholder="Task" 
                    value={this.state.input} 
                    onChange={this.changeHandler}
                />
                <div className="formbutton-container">
                    <button type="submit">Add</button>
                    <button onClick={this.props.deleteAll}>Delete All</button>
                </div>
            </form>
        );
    }
}