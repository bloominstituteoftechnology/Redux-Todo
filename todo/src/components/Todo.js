import React from 'react';
import { connect } from 'react-redux';
import { addTodo, completed } from '../actions';

class Todo extends React.Component {
    state = {
        inputText: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addNewTask = e => {
        e.preventDefault();
        this.props.addTodoItem(this.state.inputText);
        this.setState({
            inputText: ''
        });
    }

    render () {
        return (
            <div>
                <div>
                    <form onSubmit={this.addNewTask} >
                        <input 
                            type="text"
                            name='inputText'
                            value={this.state.inputText}
                            onChange={this.handleChange}
                            placeholder='New Todo Task'
                            autoComplete='off'
                        />
                        <button>Add Task</button>
                    </form>
                </div>
                <ul>
                    {this.props.todo.map( item => {
                        return (
                            <div key={item.value}>{item.value.toUpperCase()}</div>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todo: state.todo
    };
};

const mapDispatchToProps = dispatch => ({
    addTodoItem: text => dispatch(addTodo(text)),
    completedItem: id => dispatch(completed(id))
});

export default connect(mapStateToProps, mapDispatchToProps) (Todo);