import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleComplete, deleteTodo } from '../actions';

class Todo extends Component {
    constructor(props) {
        console.log('class props: ', props)
        super(props);
        this.state = { 
            // tasks: '',
            task: '',
            text: 'Complete',
            clickedText: 'Undo'
         }
    }

handleChange = e => {
    this.setState({ task: e.target.value })
}

submitTodo = e => {
    e.preventDefault();
    const { task } = this.state;
    const newObjTask = {
        id: Math.random(),
        completed: false,
        value: task,
    }
    this.props.addTodo(newObjTask);
    this.setState({ task: ''});
    // this.setState({ tasks: newTask, task: ''});
    // console.log('task: ', this.state.task)
    // console.log('tasks: ', this.state.tasks)
}
toggleComplete = (id) => {
    this.props.toggleComplete(id);
}
deleteTodo = id => {
    this.props.deleteTodo(id);
}

    render() { 
        console.log('props in todo render: ', this.props)
        return ( 
            <div className="App">
                <header className="App-header">
                
                <h1 className="App-title">Welcome to ToDo App</h1>
                <p><i className="fas fa-clipboard-list"></i></p>
                </header>
                <p className="App-intro">
                  <input 
                    placeholder='Add Todo'
                    value={this.state.task}
                    onChange={this.handleChange}
                    />
                <button onClick={this.submitTodo}>Submit</button>
                </p>
                <div>
                    {this.props.list.map((item, i) => {
                        return (
                        <div  key={i}>
                            <div style={ item.completed ? {textDecoration: 'line-through'} : null}> {item.value} 
                                <button onClick={() => this.toggleComplete(item.id)}>{ item.completed ? this.state.clickedText : this.state.text}</button>
                                <button onClick={() => this.deleteTodo(item.id)}>Delete</button>
                            </div>
                            
                        </div>
                        )
                    })}
                </div>
            </div>
         );
    }
}

const mapStateToProps = state => {
    console.log('mapState state: ',  state)
    return {
        list: state.todos
    }
    
}
 
export default connect(mapStateToProps, { addTodo, toggleComplete, deleteTodo })(Todo);