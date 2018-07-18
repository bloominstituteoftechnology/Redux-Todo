import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewTodo } from '../Actions/index';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    updateInputState = e => {
        this.setState( {text: e.target.value} )
    }

    submitTodo = e => {
        e.preventDefault();
        const todo = {
            id: Math.random(),
            text: this.state.text,
            completed: false,
        }
        this.props.addNewTodo(todo);
        this.setState({text: ''});
    }
    
    render() {
        return ( 
            <form>
                <input
                    type='text'
                    placeholder='Type todo here!'
                    value={this.state.text}
                    onChange={this.updateInputState}
                />
                <button onClick={this.submitTodo}>Submit</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state,
    }
}
 
export default connect(mapStateToProps, { addNewTodo })(Form);