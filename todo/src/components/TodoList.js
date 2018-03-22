import React, { Component } from 'react';
import { addTodo } from '../action';
import { connect } from 'react-redux';

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            text: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event){
        this.setState({
            text: event.target.value
        });
    }
   
    handleSubmit(event) {
        event.preventDefault();
        this.props.addTodo(this.state.text);
        this.setState({
          text: ''
        });
        
    }

    render() {
        return (
            <div>
                <ul>
                {this.props.todos.map(todo => {
                    return <li key={todo.id}>{todo.text}</li>
                })}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        onChange={this.handleInputChange}
                        value={this.state.text}/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo })(TodoList);
// connecting action 