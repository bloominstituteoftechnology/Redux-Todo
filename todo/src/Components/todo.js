import React from 'react';
import { connect } from 'react-redux';

import { add, remove, toggle } from '../actions/todoActions';

class TODO extends Component {
    state = {
        todos: '',
        toggle: false
    }

updateTodo = (event) => {
    this.setState({todos: event.target.value});
}

addToDoInput = (event) => {
    const {todos, toggle} = this.state
    console.log(event.target);
    event.preventDefault();
    this.props.add({todos, toggle});
}

removeInput = (event) => {
    this.props.remove(event.target.getAttribute('id'));
}

toggleInput = (event) => {
    this.props.remove(event.target.getAttribute('id'));
}

toggleInput = (event) => {
    this.props.toggle(event.target.getAttribute('id'));
}

render() {
    console.log(this.props);
    return (
        <div className="Todo">
            <form onSubmit={this.addInput}>
            <input
                onChange={this.updateTodo}
                placeholder="todo"
                value={this.state.todos}
            />
            <button value="add" onClick={this.addInput} type="submit">Add to todolist</button>
            </form>
            <ul>
                {this.props.todos.map((todo, index) => {
                    console.log(todo.toggle);
                    return(
                        <li key={index} id={index} onClick={this.toggleTodoInput}>{todo.todos}</li>
                    )
                })}
                <li>Hello! </li>
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

export default connect(mapStateToProps, { add, remove, toggle})(Todo);
