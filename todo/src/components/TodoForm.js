import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addtodo, clearcompleted } from '../actions';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
    }

    changeHandler = event => {
        this.setState({
          inputText: event.target.value
        })
    }

    submitTodo = event => {
        event.preventDefault();
        this.props.dispatch(addtodo(this.state.inputText))
        this.setState({
            inputText: ''
        })
    }
    
    render() {
        return (
            <form className='form' onSubmit={this.submitTodo}>
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
                    <button className='btn' type='submit'>add todo</button>
                    <button className='btn' onClick={() => this.props.dispatch(clearcompleted())}>clear completed</button>
                </div>
            </form>
        )
    }
}

export default connect()(TodoForm);