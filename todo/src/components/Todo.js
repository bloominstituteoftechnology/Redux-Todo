import React from 'react';
import { connect } from 'react-redux';
import { addTodo, completed, deleteTodo, addFolder, deleteFolder, pickedFolder } from '../actions';
import './Todo.css';

class Todo extends React.Component {
    state = {
        inputText: '',
        folderName: ''
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

    changeFolder = e => {
        e.preventDefault();
        if(this.state.folderName !== '') {
            this.props.addNewFolder(this.state.folderName);
            this.setState({
                folderName: ''
            });
        }
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
                        <form className='folder-input-form' onSubmit={this.changeFolder}>
                            <input 
                                className='folder-input-field'
                                type="text"
                                name='folderName'
                                value={this.state.folderName}
                                onChange={this.handleChange}
                                placeholder='New Folder'
                                autoComplete='off'
                            />
                            <button className='formAddBtn'>Add</button>
                        </form>
                        {/* {place for button map to show all the folder buttons} */}
                        {this.props.folder.map((btn, index) => {
                            return (
                                <div key={index}>
                                    <button className={btn.selected ? 'folderBtn-selected' : 'folderBtn'} onClick={() => this.props.folderSelected(index)}>{btn.value}</button>
                                    {index === 0 ? null : <button className='deleteFolderBtn' onClick={() => this.props.deleteSelectedFolder(index)}>X</button>}
                                </div>
                            );
                        })}
                    </div>
                    <div className='postIt-container'>
                        <h3>{this.props.folder[this.props.picked].value} Tasks</h3>
                        <ul>
                            {this.props.todo.map( (item, index) => {
                                if(this.props.picked === item.picked)
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
        folder: state.folders,
        todo: state.todo,
        picked: state.picked,
    };
};

const mapDispatchToProps = dispatch => ({
    addTodoItem: text => dispatch(addTodo(text)),
    completedItem: id => dispatch(completed(id)),
    deleteTodoItem: id => dispatch(deleteTodo(id)),
    addNewFolder: text => dispatch(addFolder(text)),
    deleteSelectedFolder: id => dispatch(deleteFolder(id)),
    folderSelected: id => dispatch(pickedFolder(id))
});

export default connect(mapStateToProps, mapDispatchToProps) (Todo);