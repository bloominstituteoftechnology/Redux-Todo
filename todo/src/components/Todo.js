import React from 'react';
import { connect } from 'react-redux';
import { addTodo, completed, deleteTodo } from '../actions';
import './Todo.css';

class Todo extends React.Component {
    state = {
        inputText: '',
        folderName: 'School'
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addNewTask = e => {
        e.preventDefault();
        if(this.state.inputText !== ''){
            this.props.addTodoItem(this.state.inputText);
            this.setState({
                inputText: ''
            });
        }
    }

    changeFolder = name => {
        this.setState({
            folderName: name,
        });
    }

    render () {
        return (
            <div>
                <div>
                    <form className='form-content' onSubmit={this.addNewTask} >
                        <input 
                            className='input-field'
                            type="text"
                            name='inputText'
                            value={this.state.inputText}
                            onChange={this.handleChange}
                            placeholder='New Task'
                            autoComplete='off'
                        />
                        <button className='formBtn'>Add Task</button>
                    </form>
                </div>
                <div className='task-organizer'>
                    <div className='task-folder-container'>
                        <h3 className='folder-holder-title'>Task Folders</h3>
                        <form className='folder-input-form'>
                            <input 
                                className='folder-input-field'
                                type="text"
                                name='newFolder'
                                value=''
                                onChange={this.handleChange}
                                placeholder='New Folder'
                                autoComplete='off'
                            />
                            <button>Add</button>
                        </form>
                        <button className='folderBtn' onClick={() => this.changeFolder('School')}>School</button>
                        <button className='folderBtn' onClick={() => this.changeFolder('Trip')}>Trip</button>
                        <button className='folderBtn' onClick={() => this.changeFolder('Work')}>Work</button>
                        <button className='folderBtn' onClick={() => this.changeFolder('Project')}>Project</button>
                    </div>
                    <div className='postIt-container'>
                        <h3>{this.state.folderName} Tasks</h3>
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
                                                    Task: {index + 1}
                                                </div>
                                                <button className='deleteBtn' onClick={() => this.props.deleteTodoItem(index)}>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                        <div 
                                        className={item.completed === true ? 'task-content-complete' : 'task-content'} 
                                        onClick={() => this.props.completedItem(index)}>
                                            <p>{item.value.toUpperCase()}</p> 
                                        </div>
                                    </div>
                                </div>
                                );
                            })}
                        </ul>
                    </div>
                </div>
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