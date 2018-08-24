import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add_item } from '../Actions';
class List extends Component {
    state = {
        todo: ''
    }
    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = {
            value: this.state.todo,
            completed: false
        }
       this.props.add_item(newTodo) 
    }
    render() {
        
        return (
            <div>
                <div>
                    {this.props.todos.map((todo, index) => {
                        return (
                            <div key={index}>
                                {todo.value}
                            </div> )
                    })}
                </div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Add Todo" value={this.state.value} name="todo" onChange={this.handleInput} />
                <button type="submit">Submit</button>
            </form>
            </div>
        );

    }
    
}


const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { add_item })(List);