import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo } from '../actions';
import AddTodo from './AddTodo'

class TodoContainer extends Component {

    // grabbing relevant state from action fetchTodos
    componentDidMount() {
        this.props.fetchTodos();
      }

    render() {

        return (
            <div>
                <AddTodo />
                <ul className="App-intro">
                {this.props.todos.map(todo => <div key={ todo }><li>{ todo.value }</li><button onClick= {() => this.props.deleteTodo(todo)}>Delete Task</button></div>)}
                </ul>

            </div>
        );
    }
}

// The mapStateToProps function specifies which portion of the 
// state tree this component needs to receive. In this case, 
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { fetchTodos, deleteTodo })(TodoContainer);