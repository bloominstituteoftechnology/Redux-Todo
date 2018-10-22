import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addtodo } from '../actions/index';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: {},
            inputText: ''
        }
    }

    changeHandler = event => {
        this.setState({
          inputText: event.target.value
        })
    }

    render() {
        return (
            <form className='form' onSubmit={this.props.addtodo(this.state.todo)}>
                <input 
                    className='input'
                    type='text'
                    name='input' 
                    placeholder='enter task' 
                    onChange={this.changeHandler}
                    value={this.state.inputText}
                    required
                />
                <div className='btn-container'>
                    <button className='btn' onClick={() => this.props.addtodo(this.state.todo)}>add todo</button>
                </div>
            </form>
        )
    }
}

export default connect({ addtodo })(TodoForm);