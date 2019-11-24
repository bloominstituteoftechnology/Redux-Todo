import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

class TodoInput extends Component {
    constructor(){
        super()
        this.state = {
           text: ""
        }
    }

    handleInputChange = e => {
        console.log(this.state)
        this.setState({ text: e.target.value });
    };

    submitTodo = (e) =>{
        e.preventDefault();
        const { text } = this.state;
        const newTask = { text, completed: false, id: Date.now()}
        this.props.addTodo(newTask);
        this.setState({text:''})
    }


    render() {
        return (
            <div>
                <form >
                    <input
                        onChange={this.handleInputChange}
                        value={this.state.text}
                        text="text"
                    />
                    <button onClick={this.submitTodo} >Add todo</button>
                </form>
            </div>
        )
    }
}


export default connect(null, {addTodo})(TodoInput);