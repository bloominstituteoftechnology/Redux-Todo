import React from 'react';
import { connect } from 'react-redux';
import { addTodo, completed, deleteTodo } from '../actions';
import './Todo.css';

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
                    {this.props.todo.map( (item, index) => {
                        return (
                            <div 
                                className='taskBtn-container' 
                                key={index}
                                location={index}
                            >
                                <div className='taskBtn'>
                                    <div className='taskNumber'>
                                        <div>
                                            <div>
                                                Task: {index}
                                            </div>
                                            <button className='deleteBtn' onClick={() => this.props.deleteTodoItem(index)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                    <div 
                                    className={item.completed === true ? 'task-content-complete' : 'task-content'} 
                                    onClick={() => this.props.completedItem(index)}>
                                        {item.value.toUpperCase()}
                                    </div>
                                </div>
                            </div>
                            
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
    completedItem: id => dispatch(completed(id)),
    deleteTodoItem: id => dispatch(deleteTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps) (Todo);