import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from '../actions';
import DisplayTodos from "./DisplayTodos";



class Todo extends Component {

    handleInputChange = e => {
            this.setState({ [e.target.name]: e.target.value });
            console.log(e.target.value)
            return e.target.value;
          };
        

    render() {
        console.log('passed todo', this.props)
        return(
            <div>
                <input type="text" placeholder="Add todo" name="todo" onChange={this.handleInputChange} />
                <button onClick={() => this.props.add(this.state.todo)}  >Submit</button>
                <DisplayTodos  todoList={this.props.todos}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

export default connect(mapStateToProps, { add })(Todo);