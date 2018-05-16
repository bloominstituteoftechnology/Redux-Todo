import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import Todos from 'todos'; 
import { addItem } from '../actions';

class Todo extends Component {

    displayTodoList() {
        return this.props.todos.map((todos, i) => {
            return (
                <li
                    onClick={() => this.props.addItem(item)}
                    key={i}>
                    {}
                </li>
            );
        });
    }

    handleInputChange = (event) => { this.setState({[event.target.todos]: event.target.value}) }

    buttonSubmit = () => {
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addItem}>
                    <input
                        type="text"
                        onChange={this.handleInputChange}
                        placeholder="Add todo"
                        value={this.state.todos}
                        name="todos"
                    />
                    <button type="submit" onClick={this.buttonSubmit}>Add todo item</button>
                </form>
                <Todos todos={this.state.todos}/>
            </div>
            <div>
                <li>
                    {this.displayTodoList()}
                </li>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ addItem: addItem }, dispatch);
// }

export default connect(mapStateToProps, {addItem, toggleItem})(Todo);