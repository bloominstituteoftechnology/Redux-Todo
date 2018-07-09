import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class Todo extends Component {
    constructor(props) {
        console.log('class props: ', props)
        super(props);
        this.state = { 
            // tasks: '',
            task: '',
         }
    }

handleChange = e => {
    this.setState({ task: e.target.value })
}

submitTodo = e => {
    e.preventDefault();
    const newTask = this.state.task;
    this.props.addTodo(newTask);
    this.setState({ task: ''});
    // this.setState({ tasks: newTask, task: ''});
    // console.log('task: ', this.state.task)
    // console.log('tasks: ', this.state.tasks)
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
                <ul>
                    {this.props.list.map((item, i) => {
                        <li key={i}> {item} </li>
                    })}
                </ul>
            </div>
         );
    }
}

const mapStateToProps = state => {
    console.log('mapState state: ',  state)
    return {
        list: state
    }
    
}
 
export default connect(mapStateToProps, { addTodo })(Todo);