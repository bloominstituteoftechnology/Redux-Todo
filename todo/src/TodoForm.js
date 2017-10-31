import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

class TodoForm extends Component {
    state = { text: '' }
    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const text = this.state.text.trim();
        this.props.addTodo(text, this.props.todos.length);
    }
    render() {
        return (
            <form>
                <input type="text" onChange={this.handleChange}  value={this.state.text} />
                <button onClick={this.handleSubmit}>Add Todo</button>
            </form>
            );
    }
}

const mapStateToProps = (state) => {
    return {
      todos: state,
    };
};

export default connect(mapStateToProps, {addTodo})(TodoForm);



