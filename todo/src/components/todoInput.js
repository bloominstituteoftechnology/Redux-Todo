import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './actions';

class TodoInput extends Component {
    constructor(){
        super()
        this.state = {
           text: " "
        }
    }

    handleInputChange = e => {
        console.log(this.state)
        this.setState({ [e.target.text]: e.target.value });
    };


    render() {
        return (
            <div>
                <form onSubmit={this.props.addTodo(this.state.text)}>
                    <input
                        onChange={this.handleInputChange}
                        value={this.state.name}
                        text="text"
                    />
                    <button type="submit" >Add todo</button>
                </form>
            </div>
        )
    }
}


export default connect(null, {addTodo})(TodoInput);