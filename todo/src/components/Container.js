import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo, toggleTodo, removeTodos, getTodos} from '../actions'; 

class TodoList extends Component{
    constructor(){
        super(); 
        this.state = {
            todos:''
        }   
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    addTodoHandler = () =>{
        const newTodo = {
          todos: this.state.todos,
          completed: false,
          id: this.props.todos ? this.props.todos.length + text : 0 + text
        };
        this.props.addTodo(newTodo);
        this.setState({
          text: ''
        });
    }

    render() {
        const { todos } = this.props;
        return (
          <div>
            <form>
              <input
                onChange={this.changeHandler}
                name="text"
                value={this.state.text}
              />
              <button type="button" onClick={this.addTodoHandler}>
                Add Todo
              </button>
            </form>
            <ul>
              {todos.map(todo => {
                return (
                  <li
                    onClick={() => this.handleTodoComplete(todo.id)}
                    key={todo.id}>
                        
                        {todo.text}
                  
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
    }

    const mapStateToProps = state => {
        return {//WHY BRACKETS?????---------------------------------------------
            todos: state.todos
        };
    };
}

export default connect (mapStateToProps,{
    addTodo,
    toggleTodo,
    removeTodos,
    getTodos
})(TodoList);