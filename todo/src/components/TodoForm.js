import React from 'react';
import {connect} from 'react-redux';
import {updateTodos} from "../actions"

class TodoForm extends React.Component {
    constructor () {
        super();
    
    this.state={
        inputText:''
    }
}

changeHandler= (key, value) => {
    this.setState({[key]: value});
}

clickHandler = event => {
    event.preventDefault();
    this.props.updateTodos(this.state.inputText)
}

render () {
    return (
        <form className="todo-form">
<h2>Add New Todo</h2>
<input type="text" name="inputText" onChange={event=>this.changeHandler(event.target.name, event.target.value)} placeholder="New Todo" value={this.state.inputText}></input>
        <button onClick={this.clickHandler}>Add to List</button>
        </form>
    )
}
}


const mapStateToProps=state=>{
    return {
        todos: state.todos
    }
}

export default connect(
    mapStateToProps,
    {updateTodos}
)(TodoForm);