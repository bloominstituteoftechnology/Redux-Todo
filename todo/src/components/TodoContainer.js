import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchTodos, addTodo } from '../actions';



class TodoContainer extends Component {

    componentDidMount() {
        this.props.fetchTodos();
      }


      submit = () => {
        const todo = this.input.value;
        this.setState(this.props.addTodo(todo));
    }
     
   
    render() {

        return (
            <div>
                <input class="todo-field"
                type="text"
                ref={input => this.input = input}
                placeholder="Search"/>
                <button className="button" onClick={this.submit}></button>
        
                <ul className="App-intro">
                {this.props.todos.map(todo => <li key={ todo }>{ todo }</li>)}
                </ul>
            </div>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        todos: state
    };
};


export default connect(mapStateToProps, { fetchTodos, addTodo })(TodoContainer);