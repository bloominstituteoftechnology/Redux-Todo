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
            <form onSubmit={this.submitHandler}>
                <input
                    type="text" 
                    placeholder="Task" 
                    value={this.state.input} 
                    onChange={this.changeHandler}
                />
                <button type="submit">Add Task</button>
                <button onClick={this.props.deleteAll}>Delete All</button>
            </form>
        );
    }
}