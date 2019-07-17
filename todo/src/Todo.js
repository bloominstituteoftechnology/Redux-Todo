import React from 'react';
import { connect } from 'react-redux';
import { addTodoItem } from './actions';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: [],
        }
    }

    handleChange = (e) => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addTodo = (e) => {
        e.preventDefault();

        const { todo } = this.state
        // call the action creator
        this.props.addTodoItem(todo)

        // reset form 
        this.setState({
            todo: '',
        })
    }

    render() {
        const { todo } = this.state
        return (
            <section>
                <h2>Add A Todo</h2>

                <form onSubmit={this.addTodo}>
                    <input type="text" name="todo" placeholder="Add A Todo" value={todo} onChange={this.handleChange} required />

                    <br />

                    <button type="submit">Add Todo </button>
                </form>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
}

const mapDispatchToProps = {
    addTodoItem: addTodoItem
}

export default connect(
    mapStateToProps,
)(Todo)